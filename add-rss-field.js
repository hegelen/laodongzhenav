// add-rss-field.js
const fs = require('fs');

// 读取原始 data.js
let content = fs.readFileSync('data.js', 'utf8');

// 为每个博客对象添加 rss 字段的规则
function addRssFieldToBlog(match) {
    // 提取 blog 对象原文
    const blogObjStr = match;
    
    // 检查是否已经有 rss 字段
    if (blogObjStr.includes('rss:')) {
        return blogObjStr; // 已存在，跳过
    }
    
    // 提取 url 值
    const urlMatch = blogObjStr.match(/url:\s*'([^']+)'/);
    if (!urlMatch) return blogObjStr;
    
    let url = urlMatch[1];
    // 处理 /go.htm?url= 前缀
    if (url.startsWith('/go.htm?url=')) {
        url = url.replace('/go.htm?url=', '');
    }
    
    // 提取域名
    let domain = '';
    try {
        const urlObj = new URL(url);
        domain = urlObj.origin;
    } catch(e) {
        // URL 无效，跳过
        return blogObjStr;
    }
    
    // 常见的 RSS 路径列表（按优先级排序）
    const rssPaths = [
        '/feed',           // WordPress 默认
        '/atom.xml',       // Hexo、Typecho 等
        '/rss.xml',        // 通用
        '/feed.xml',       // WordPress 备选
        '/index.xml',      // Hugo 默认
        '/rss',            // 简短格式
        '/feed/atom',      // 某些 CMS
        '/?feed=rss2',     // WordPress 备选
        '/feed/rss',       // 某些博客
        '/xmlrpc.php?rsd'  // RSD 发现地址
    ];
    
    // 生成 RSS 地址列表（注释形式，方便手动修改）
    const rssUrls = rssPaths.map(path => `${domain}${path}`);
    
    // 在 url 字段后添加 rss 字段（默认使用第一个最常见的路径）
    const rssField = `\n                    rss: '${domain}/feed',  // 候选: ${rssUrls.slice(1, 4).join(', ')} 等`;
    
    // 在 url 行之后插入 rss 字段
    const modified = blogObjStr.replace(/(url:\s*'[^']+',?)/, `$1${rssField}`);
    return modified;
}

// 匹配每个博客对象 {name:'...', url:'...'}
const blogPattern = /\{\s*name:\s*'[^']*',\s*url:\s*'[^']*'(?:,\s*name:\s*'[^']*',\s*url:\s*'[^']*')*\s*\}/g;

content = content.replace(blogPattern, addRssFieldToBlog);

// 写入新文件
fs.writeFileSync('data-with-rss.js', content, 'utf8');
console.log('处理完成！已生成 data-with-rss.js');