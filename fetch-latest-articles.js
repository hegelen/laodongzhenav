// fetch-latest-articles.js - 精简版
const fs = require('fs');
const path = require('path');

async function loadRssParser() {
    const module = await import('rss-parser');
    return new module.default();
}

function extractBlogsFromData(content) {
    const blogs = [];
    const pattern = /\{name:\s*'([^']*)',\s*url:\s*'[^']*'(?:,\s*rss:\s*'([^']*)')?\s*\}/g;
    let match;
    while ((match = pattern.exec(content)) !== null) {
        const name = match[1].trim();
        let rss = match[2];
        if (name && name !== '' && name !== ' ' && rss && rss.startsWith('http')) {
            blogs.push({ name, rssUrl: rss });
        }
    }
    return blogs;
}

async function main() {
    console.log('🚀 开始抓取 RSS...');
    
    const dataJsPath = path.join(__dirname, 'data.js');
    const content = fs.readFileSync(dataJsPath, 'utf8');
    const blogs = extractBlogsFromData(content);
    console.log(`📊 找到 ${blogs.length} 个 RSS 源`);
    
    const parser = await loadRssParser();
    const results = [];
    const TARGET = 10;
    
    // 随机打乱顺序
    for (let i = blogs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [blogs[i], blogs[j]] = [blogs[j], blogs[i]];
    }
    
    for (const blog of blogs) {
        if (results.length >= TARGET) break;
        
        try {
            console.log(`📡 抓取: ${blog.name}`);
            const feed = await parser.parseURL(blog.rssUrl);
            if (feed.items && feed.items.length > 0) {
                const latest = feed.items[0];
                results.push({
                    name: blog.name,
                    title: latest.title || '无标题',
                    url: latest.link || '',
                    date: latest.pubDate ? new Date(latest.pubDate).toISOString().split('T')[0] : ''
                });
                console.log(`   ✅ 抓到第 ${results.length} 篇`);
            } else {
                console.log(`   ⏭️ 无文章`);
            }
        } catch(e) {
            console.log(`   ❌ 失败: ${e.message}`);
        }
        await new Promise(r => setTimeout(r, 500));
    }
    
    // 按年份分组（简化版）
    const grouped = { '2025': results };
    fs.writeFileSync('latest-articles.js', `const latestArticlesByYear = ${JSON.stringify(grouped, null, 2)};\n`);
    console.log(`✅ 完成，共 ${results.length} 篇文章`);
}

main().catch(console.error);
