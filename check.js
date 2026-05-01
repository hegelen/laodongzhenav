const https = require('https');
const http = require('http');
const fs = require('fs');

// 直接导入 data.js 模块
console.log('📖 正在加载 data.js...');
const data = require('./data.js');

let allBlogs = data.allBlogs;

if (!allBlogs) {
    console.error('❌ data.js 中没有导出 allBlogs');
    console.log('请确保 data.js 末尾添加了: module.exports = { allBlogs };');
    process.exit(1);
}

console.log(`✅ 成功加载 ${allBlogs.length} 个链接\n`);

// 将相对路径转换为真实 URL
function getRealUrl(blogUrl) {
    if (blogUrl.startsWith('http://') || blogUrl.startsWith('https://')) {
        return blogUrl;
    }
    if (blogUrl.startsWith('ttps://')) {
        return 'h' + blogUrl;
    }
    if (blogUrl.startsWith('/go.htm?url=')) {
        const realUrl = blogUrl.replace('/go.htm?url=', '');
        return decodeURIComponent(realUrl);
    }
    return blogUrl;
}

async function checkUrl(originalUrl) {
    const fullUrl = getRealUrl(originalUrl);
    
    if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
        return { originalUrl, fullUrl, status: 'INVALID', ok: false };
    }
    
    return new Promise((resolve) => {
        const protocol = fullUrl.startsWith('https') ? https : http;
        const request = protocol.get(fullUrl, (res) => {
            const status = res.statusCode;
            if (status >= 200 && status < 400) {
                resolve({ originalUrl, fullUrl, status, ok: true });
            } else if (status >= 300 && status < 400) {
                const location = res.headers.location;
                if (location && location.startsWith('http')) {
                    checkUrl(location).then(resolve);
                } else {
                    resolve({ originalUrl, fullUrl, status, ok: false });
                }
            } else {
                resolve({ originalUrl, fullUrl, status, ok: false });
            }
        });
        request.on('error', () => {
            resolve({ originalUrl, fullUrl, status: 'ERR', ok: false });
        });
        request.setTimeout(5000, () => {
            request.destroy();
            resolve({ originalUrl, fullUrl, status: 'TIMEOUT', ok: false });
        });
    });
}

async function checkAll() {
    console.log(`🔍 开始检测 ${allBlogs.length} 个链接...\n`);
    const deadLinks = [];
    let index = 0;

    for (const blog of allBlogs) {
        index++;
        process.stdout.write(`[${index}/${allBlogs.length}] ${blog.name} ... `);
        const result = await checkUrl(blog.url);
        if (result.ok) {
            console.log(`✅ (${result.status})`);
        } else {
            console.log(`❌ ${result.status}`);
            deadLinks.push({
                name: blog.name,
                originalUrl: blog.url,
                fullUrl: result.fullUrl,
                status: result.status
            });
        }
        if (index % 10 === 0) {
            await new Promise(r => setTimeout(r, 500));
        }
    }

    console.log(`\n========== 检测完成 ==========`);
    console.log(`✅ 有效链接：${allBlogs.length - deadLinks.length}`);
    console.log(`❌ 失效链接：${deadLinks.length}`);

    if (deadLinks.length > 0) {
        console.log(`\n📋 失效链接列表：`);
        deadLinks.forEach(r => {
            console.log(`  ${r.name}: ${r.fullUrl || r.originalUrl} (${r.status})`);
        });
        fs.writeFileSync('dead_links.json', JSON.stringify(deadLinks, null, 2));
        console.log(`\n💾 失效链接已保存到 dead_links.json`);
    } else {
        console.log(`\n🎉 恭喜！所有链接都正常！`);
    }
}

checkAll();