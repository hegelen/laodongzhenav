// fetch-latest-articles.js - 全年份随机抓取版
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

// 按年份分组
function groupByYear(blogs) {
    const grouped = {};
    for (const blog of blogs) {
        if (!grouped[blog.year]) grouped[blog.year] = [];
        grouped[blog.year].push(blog);
    }
    return grouped;
}

async function main() {
    const TARGET_TOTAL = 60;      // 总共抓取10篇
    const MAX_PER_YEAR = 2;       // 每个年份最多抓取2篇
    
    console.log('🚀 开始抓取 RSS 文章...');
    console.log(`🎯 目标: 共 ${TARGET_TOTAL} 篇，每个年份最多 ${MAX_PER_YEAR} 篇\n`);
    
    const dataJsPath = path.join(__dirname, 'data.js');
    const content = fs.readFileSync(dataJsPath, 'utf8');
    const allBlogs = extractBlogsFromData(content);
    console.log(`📊 共找到 ${allBlogs.length} 个 RSS 源`);
    
    // 按年份分组
    const blogsByYear = groupByYear(allBlogs);
    const years = Object.keys(blogsByYear).sort((a, b) => parseInt(b) - parseInt(a));
    console.log(`📅 覆盖年份: ${years.join(', ')}\n`);
    
    const parser = await loadRssParser();
    const results = [];
    const yearCount = {};  // 记录每个年份已抓取数量
    
    // 随机打乱年份顺序
    const shuffledYears = [...years];
    for (let i = shuffledYears.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledYears[i], shuffledYears[j]] = [shuffledYears[j], shuffledYears[i]];
    }
    
    for (const year of shuffledYears) {
        if (results.length >= TARGET_TOTAL) break;
        
        console.log(`\n📅 ${year}年 (已有 ${yearCount[year] || 0}/${MAX_PER_YEAR} 篇)`);
        
        // 随机打乱该年份的博客顺序
        const yearBlogs = [...blogsByYear[year]];
        for (let i = yearBlogs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [yearBlogs[i], yearBlogs[j]] = [yearBlogs[j], yearBlogs[i]];
        }
        
        for (const blog of yearBlogs) {
            if (results.length >= TARGET_TOTAL) break;
            if (yearCount[year] >= MAX_PER_YEAR) break;
            
            process.stdout.write(`   📡 ${blog.name} ... `);
            
            try {
                const feed = await parser.parseURL(blog.rssUrl);
                if (feed.items && feed.items.length > 0) {
                    const latest = feed.items[0];
                    results.push({
                        name: blog.name,
                        year: year,
                        title: latest.title || '无标题',
                        url: latest.link || '',
                        date: latest.pubDate ? new Date(latest.pubDate).toISOString().split('T')[0] : ''
                    });
                    yearCount[year] = (yearCount[year] || 0) + 1;
                    console.log(`✅ (${yearCount[year]}/${MAX_PER_YEAR})`);
                } else {
                    console.log(`⏭️ 无文章`);
                }
            } catch(e) {
                console.log(`❌ ${e.message.substring(0, 30)}`);
            }
            
            await new Promise(r => setTimeout(r, 300));
        }
        
        console.log(`   📊 ${year}年共抓取 ${yearCount[year] || 0} 篇`);
    }
    
    // 按年份分组最终结果
    const groupedByYear = {};
    for (const article of results) {
        if (!groupedByYear[article.year]) groupedByYear[article.year] = [];
        groupedByYear[article.year].push(article);
    }
    
    // 生成输出文件
    const output = `// ==================== latest-articles.js ====================
// 自动生成，请勿手动修改
// 抓取日期: ${new Date().toLocaleString()}
// 共 ${results.length} 篇文章，覆盖 ${Object.keys(groupedByYear).length} 个年份

const latestArticlesByYear = ${JSON.stringify(groupedByYear, null, 2)};

function getSortedYears() {
    return Object.keys(latestArticlesByYear).sort((a, b) => parseInt(a) - parseInt(b));
}

function getLatestArticles(limit = 20) {
    const allArticles = [];
    for (const year in latestArticlesByYear) {
        allArticles.push(...latestArticlesByYear[year]);
    }
    return allArticles.slice(0, limit);
}

if (typeof window !== 'undefined') {
    window.latestArticlesByYear = latestArticlesByYear;
    window.getSortedYears = getSortedYears;
    window.getLatestArticles = getLatestArticles;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { latestArticlesByYear, getSortedYears, getLatestArticles };
}

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇文章');
`;
    
    fs.writeFileSync('latest-articles.js', output, 'utf8');
    
    console.log(`\n📊 抓取完成！`);
    console.log(`   ✅ 共 ${results.length} 篇文章`);
    console.log(`   📅 覆盖年份: ${Object.keys(groupedByYear).join(', ')}`);
    for (const year of Object.keys(groupedByYear).sort()) {
        console.log(`      - ${year}年: ${groupedByYear[year].length} 篇`);
    }
}

main().catch(console.error);
