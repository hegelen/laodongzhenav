// fetch-latest-articles.js
// 运行方式: node fetch-latest-articles.js
// 功能: 智能抓取文章，优先当天，不足10篇则自动扩展时间范围

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

// 检查文章是否在指定天数内
function isArticleWithinDays(pubDate, days) {
    if (!pubDate) return false;
    
    const articleDate = new Date(pubDate);
    const now = new Date();
    const diffDays = (now - articleDate) / (1000 * 60 * 60 * 24);
    
    return diffDays <= days;
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

// 智能抓取：根据目标文章数量，自动调整时间范围
async function fetchArticleWithSmartRange(blog, parser) {
    // 时间范围配置（单位：天）
    const ranges = [1, 3, 7, 15, 30, 60, 90, 180, 365];
    
    for (const days of ranges) {
        try {
            console.log(`📡 抓取: ${blog.name} (范围: ${days}天)`);
            const feed = await parser.parseURL(blog.rssUrl);
            
            if (feed.items && feed.items.length > 0) {
                // 查找指定天数内的文章
                for (const item of feed.items) {
                    const pubDate = item.pubDate || item.isoDate;
                    if (isArticleWithinDays(pubDate, days)) {
                        console.log(`   ✅ 找到文章 (${days}天内): ${item.title.substring(0, 50)}`);
                        return {
                            name: blog.name,
                            year: blog.year,
                            title: item.title || '无标题',
                            url: item.link || blog.blogUrl,
                            date: pubDate ? new Date(pubDate).toISOString().split('T')[0] : '',
                            summary: item.contentSnippet ? item.contentSnippet.substring(0, 120) + '...' : '',
                            daysRange: days
                        };
                    }
                }
                console.log(`   ⏭️ ${days}天内无文章`);
            } else {
                console.log(`   ⏭️ RSS 无内容`);
                return null;
            }
        } catch (error) {
            console.log(`   ❌ 抓取失败: ${error.message}`);
            return null;
        }
    }
    
    console.log(`   ⚠️ 所有时间范围均无文章`);
    return null;
}

// 主函数
async function main() {
    console.log('\n🚀 开始智能抓取博客文章...\n');
    console.log(`📅 抓取日期: ${new Date().toLocaleDateString()}`);
    console.log(`🎯 策略: 优先当天，不足10篇自动扩展时间范围\n`);
    
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
    
    // 存储所有抓取到的文章
    const allArticles = [];
    
    // 先抓取一遍，收集所有文章
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        const article = await fetchArticleWithSmartRange(blog, parser);
        if (article) {
            allArticles.push(article);
        }
        // 延迟避免请求过快
        await new Promise(r => setTimeout(r, 500));
    }
    
    // 按日期排序（最新在前）
    allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 动态调整：如果文章数少于10篇，显示警告
    const targetCount = 10;
    let finalArticles = [...allArticles];
    
    if (finalArticles.length < targetCount) {
        console.log(`\n⚠️ 警告: 当前只抓取到 ${finalArticles.length} 篇文章，少于目标 ${targetCount} 篇`);
        console.log(`💡 建议: 检查 RSS 源是否有效，或增加更多有 RSS 的博客\n`);
    } else {
        console.log(`\n✅ 成功抓取到 ${finalArticles.length} 篇文章，达到目标 ${targetCount} 篇\n`);
    }
    
    // 按年份分组
    const groupedByYear = {};
    for (const article of finalArticles) {
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
    
    // 统计各时间范围的文章数量
    const rangeStats = {};
    for (const article of finalArticles) {
        const range = article.daysRange;
        rangeStats[range] = (rangeStats[range] || 0) + 1;
    }
    
    // 生成 latest-articles.js
    const output = `// ==================== latest-articles.js ====================
// 自动生成，请勿手动修改
// 抓取日期: ${new Date().toLocaleString()}
// 共收录 ${finalArticles.length} 篇文章（智能扩展时间范围）

const latestArticlesByYear = ${JSON.stringify(groupedByYear, null, 2)};

// 统计信息
const stats = {
    totalArticles: ${finalArticles.length},
    targetArticles: ${targetCount},
    rangeDistribution: ${JSON.stringify(rangeStats, null, 2)},
    fetchTime: "${new Date().toLocaleString()}"
};

// 获取所有年份（从老到新）
function getSortedYears() {
    return Object.keys(latestArticlesByYear).sort((a, b) => parseInt(a) - parseInt(b));
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
    window.rssStats = stats;
}

// Node.js 环境导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { latestArticlesByYear, getSortedYears, getLatestArticles, stats };
}

console.log('✅ latest-articles.js 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇文章');
console.log('📊 时间范围分布:', ${JSON.stringify(rangeStats)});
`;
    
    fs.writeFileSync('latest-articles.js', output, 'utf8');
    
    console.log(`\n📊 抓取完成！`);
    console.log(`   ✅ 成功抓取: ${finalArticles.length} 篇文章`);
    console.log(`   ❌ 无文章博客: ${blogs.length - finalArticles.length} 个`);
    console.log(`   📊 时间范围分布:`);
    for (const [days, count] of Object.entries(rangeStats)) {
        console.log(`      - ${days}天内: ${count} 篇`);
    }
    console.log(`   📁 已生成: latest-articles.js`);
}

// 运行
main().catch(console.error);
