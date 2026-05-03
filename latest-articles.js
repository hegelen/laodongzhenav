// fetch-latest-articles.js - 只抓取最近7天的文章，抓到10篇立即退出
const fs = require('fs');
const path = require('path');

async function loadRssParser() {
    const module = await import('rss-parser');
    return new module.default();
}

// 从 data.js 中提取所有博客（带 rss 字段和年份）
function extractBlogsFromData(content) {
    const blogs = [];
    const yearPattern = /'(\d+)':\s*\[([\s\S]*?)\]/g;
    let yearMatch;
    
    while ((yearMatch = yearPattern.exec(content)) !== null) {
        const year = yearMatch[1];
        const yearContent = yearMatch[2];
        const blogPattern = /\{name:\s*'([^']*)',\s*url:\s*'[^']*'(?:,\s*rss:\s*'([^']*)')?\s*\}/g;
        let blogMatch;
        
        while ((blogMatch = blogPattern.exec(yearContent)) !== null) {
            const name = blogMatch[1].trim();
            let rss = blogMatch[2];
            if (name && name !== '' && name !== ' ' && rss && rss.startsWith('http')) {
                blogs.push({ name, year, rssUrl: rss });
            }
        }
    }
    return blogs;
}

// 检查文章是否在最近 N 天内
function isWithinDays(pubDate, days) {
    if (!pubDate) return false;
    const articleDate = new Date(pubDate);
    const now = new Date();
    const diffDays = (now - articleDate) / (1000 * 60 * 60 * 24);
    return diffDays <= days;
}

// 带超时的抓取函数
async function fetchWithTimeout(blog, parser, timeoutMs = 8000) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('TIMEOUT')), timeoutMs);
    });
    
    const fetchPromise = parser.parseURL(blog.rssUrl).then(feed => {
        if (feed.items && feed.items.length > 0) {
            // 查找最近7天内的文章
            for (const item of feed.items) {
                const pubDate = item.pubDate || item.isoDate;
                if (isWithinDays(pubDate, 7)) {
                    return {
                        name: blog.name,
                        year: blog.year,
                        title: item.title || '无标题',
                        url: item.link || '',
                        date: pubDate ? new Date(pubDate).toISOString().split('T')[0] : ''
                    };
                }
            }
            // 没有找到7天内的文章
            return null;
        }
        return null;
    });
    
    try {
        return await Promise.race([fetchPromise, timeoutPromise]);
    } catch (error) {
        if (error.message === 'TIMEOUT') {
            console.log(`   ⏰ 超时`);
        } else {
            console.log(`   ❌ 失败: ${error.message.substring(0, 30)}`);
        }
        return null;
    }
}

async function main() {
    const TARGET_TOTAL = 10;      // 目标 10 篇
    const MAX_PER_YEAR = 2;       // 每年最多 2 篇
    const TIMEOUT_MS = 8000;      // 8 秒超时
    
    console.log('🚀 开始抓取 RSS 文章...');
    console.log(`📅 只抓取最近 7 天内的文章`);
    console.log(`🎯 目标: ${TARGET_TOTAL} 篇，每个年份最多 ${MAX_PER_YEAR} 篇`);
    console.log(`⏰ 超时设置: ${TIMEOUT_MS / 1000} 秒\n`);
    
    const dataJsPath = path.join(__dirname, 'data.js');
    const content = fs.readFileSync(dataJsPath, 'utf8');
    const allBlogs = extractBlogsFromData(content);
    console.log(`📊 共找到 ${allBlogs.length} 个有 RSS 的博客\n`);
    
    if (allBlogs.length === 0) {
        console.log('❌ 没有找到带 rss 字段的博客！');
        process.exit(1);
        return;
    }
    
    const parser = await loadRssParser();
    const results = [];
    const yearCount = {};
    
    // 随机打乱顺序
    const shuffled = [...allBlogs];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    for (const blog of shuffled) {
        if (results.length >= TARGET_TOTAL) {
            console.log(`\n🎯 已达到目标 ${TARGET_TOTAL} 篇，停止抓取。`);
            break;
        }
        if (yearCount[blog.year] >= MAX_PER_YEAR) continue;
        
        process.stdout.write(`📡 ${blog.name} (${blog.year}年) ... `);
        
        const article = await fetchWithTimeout(blog, parser, TIMEOUT_MS);
        
        if (article) {
            results.push(article);
            yearCount[blog.year] = (yearCount[blog.year] || 0) + 1;
            console.log(` ✅ 第 ${results.length}/${TARGET_TOTAL} 篇 (${article.date})`);
        } else if (article === null) {
            console.log(` ⏭️ 无7天内文章`);
        }
    }
    
    // 按年份分组
    const groupedByYear = {};
    for (const article of results) {
        const year = article.year.length === 2 ? 
            (parseInt(article.year) >= 90 ? 1900 + parseInt(article.year) : 2000 + parseInt(article.year)) : 
            article.year;
        if (!groupedByYear[year]) groupedByYear[year] = [];
        groupedByYear[year].push(article);
    }
    
    // 生成输出文件
    const output = `// ==================== latest-articles.js ====================
// 抓取日期: ${new Date().toLocaleString()}
// 只抓取最近7天内的文章，共 ${results.length} 篇
// 目标 ${TARGET_TOTAL} 篇，实际 ${results.length} 篇

const latestArticlesByYear = ${JSON.stringify(groupedByYear, null, 2)};

function getSortedYears() {
    return Object.keys(latestArticlesByYear).sort((a, b) => parseInt(a) - parseInt(b));
}

if (typeof window !== 'undefined') {
    window.latestArticlesByYear = latestArticlesByYear;
    window.getSortedYears = getSortedYears;
}

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇最近7天文章');
`;
    
    fs.writeFileSync('latest-articles.js', output, 'utf8');
    
    console.log(`\n📊 抓取完成！`);
    console.log(`   ✅ 成功: ${results.length} 篇`);
    console.log(`   📁 已生成: latest-articles.js`);
    
    // 任务成功完成，强制退出（状态码 0 表示成功）
    process.exit(0);
}

main().catch(console.error);
