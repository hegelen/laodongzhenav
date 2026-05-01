// fetch-latest-articles.js
// 运行方式: node fetch-latest-articles.js
// 功能: 抓取 data.js 中所有有 rss 字段的博客，获取最新一篇文章，生成 latest-articles.js

const fs = require('fs');
const path = require('path');

// 动态导入 rss-parser（支持 ES module）
async function loadRssParser() {
    const module = await import('rss-parser');
    return new module.default();
}

// 年份转换函数
function convertToFullYear(yearStr) {
    const year = parseInt(yearStr);
    if (year >= 90 && year <= 99) return 1900 + year;
    if (year >= 0 && year <= 26) return 2000 + year;
    return year;
}

// 从 data.js 中提取所有博客（带 rss 字段的）
function extractBlogsFromData(dataJsContent) {
    const blogs = [];
    
    // 匹配年份对象，如 '05': [{...}, {...}]
    const yearPattern = /'(\d+)':\s*\[([\s\S]*?)\]/g;
    let yearMatch;
    
    while ((yearMatch = yearPattern.exec(dataJsContent)) !== null) {
        const year = yearMatch[1];
        const yearContent = yearMatch[2];
        
        // 匹配每个博客对象 {name:'xxx', url:'xxx', rss:'xxx'}
        const blogPattern = /\{name:\s*'([^']*)',\s*url:\s*'([^']*)'(?:,\s*rss:\s*'([^']*)')?\s*\}/g;
        let blogMatch;
        
        while ((blogMatch = blogPattern.exec(yearContent)) !== null) {
            const name = blogMatch[1].trim();
            const url = blogMatch[2];
            let rss = blogMatch[3];
            
            // 跳过空数据
            if (!name || name === '' || name === ' ') continue;
            if (!url || url === '' || url === ' ') continue;
            if (!rss) continue; // 只处理有 rss 字段的博客
            
            // 处理跳转前缀
            let cleanUrl = url;
            if (cleanUrl.startsWith('/go.htm?url=')) {
                cleanUrl = cleanUrl.replace('/go.htm?url=', '');
            }
            
            blogs.push({
                name: name,
                year: year,
                blogUrl: cleanUrl,
                rssUrl: rss
            });
        }
    }
    
    return blogs;
}

// 抓取单个博客的最新文章
async function fetchLatestArticle(blog, parser) {
    try {
        console.log(`📡 抓取: ${blog.name} (${blog.rssUrl})`);
        const feed = await parser.parseURL(blog.rssUrl);
        
        if (feed.items && feed.items.length > 0) {
            const latest = feed.items[0];
            return {
                name: blog.name,
                year: blog.year,
                title: latest.title || '无标题',
                url: latest.link || blog.blogUrl,
                date: latest.pubDate ? new Date(latest.pubDate).toISOString().split('T')[0] : '',
                summary: latest.contentSnippet ? latest.contentSnippet.substring(0, 120) + '...' : ''
            };
        }
        return null;
    } catch (error) {
        console.log(`   ❌ 失败: ${error.message}`);
        return null;
    }
}

// 主函数
async function main() {
    console.log('\n🚀 开始抓取博客最新文章...\n');
    
    // 读取 data.js
    const dataJsPath = path.join(__dirname, 'data.js');
    if (!fs.existsSync(dataJsPath)) {
        console.error('❌ data.js 文件不存在！');
        return;
    }
    
    const dataJsContent = fs.readFileSync(dataJsPath, 'utf8');
    
    // 提取所有博客
    const blogs = extractBlogsFromData(dataJsContent);
    console.log(`📊 共找到 ${blogs.length} 个有 RSS 的博客\n`);
    
    if (blogs.length === 0) {
        console.log('⚠️ 没有找到带 rss 字段的博客，请确保 data.js 中的博客对象有 rss 字段');
        return;
    }
    
    // 加载 RSS 解析器
    const parser = await loadRssParser();
    
    // 抓取所有博客的最新文章
    const results = [];
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        const article = await fetchLatestArticle(blog, parser);
        if (article) {
            results.push(article);
        }
        // 延迟避免请求过快
        await new Promise(r => setTimeout(r, 500));
    }
    
    // 按年份分组
    const groupedByYear = {};
    for (const article of results) {
        const fullYear = convertToFullYear(article.year);
        if (!groupedByYear[fullYear]) {
            groupedByYear[fullYear] = [];
        }
        groupedByYear[fullYear].push(article);
    }
    
    // 每组内按日期倒序
    for (const year in groupedByYear) {
        groupedByYear[year].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    // 生成 latest-articles.js
    const output = `// ==================== latest-articles.js ====================
// 自动生成，请勿手动修改
// 最后更新: ${new Date().toLocaleString()}
// 共收录 ${results.length} 篇最新文章

const latestArticlesByYear = ${JSON.stringify(groupedByYear, null, 2)};

// 获取所有年份（倒序）
function getSortedYears() {
    return Object.keys(latestArticlesByYear).sort((a, b) => parseInt(b) - parseInt(a));
}

// 获取最新 N 篇文章（跨年份）
function getLatestArticles(limit = 20) {
    const allArticles = [];
    for (const year in latestArticlesByYear) {
        allArticles.push(...latestArticlesByYear[year]);
    }
    allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    return allArticles.slice(0, limit);
}

// 浏览器环境导出
if (typeof window !== 'undefined') {
    window.latestArticlesByYear = latestArticlesByYear;
    window.getSortedYears = getSortedYears;
    window.getLatestArticles = getLatestArticles;
}

// Node.js 环境导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { latestArticlesByYear, getSortedYears, getLatestArticles };
}

console.log('✅ latest-articles.js 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇文章');
`;
    
    fs.writeFileSync('latest-articles.js', output, 'utf8');
    
    console.log(`\n📊 抓取完成！`);
    console.log(`   ✅ 成功: ${results.length} 篇`);
    console.log(`   ❌ 失败: ${blogs.length - results.length} 个`);
    console.log(`   📁 已生成: latest-articles.js`);
}

// 运行
main().catch(console.error);