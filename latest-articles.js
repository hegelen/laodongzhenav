// ==================== latest-articles.js ====================
// 抓取日期: 5/29/2026, 8:44:39 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "本地优先才有真正的快",
      "url": "https://wlj.me/notes/sp-note-20260528-220355/",
      "date": "2026-05-28"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "“Because you’re the cheapest”",
      "url": "https://seths.blog/2026/05/because-youre-the-cheapest/",
      "date": "2026-05-29"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "新特性速递：focus()行为新增focusVisible控制",
      "url": "https://www.zhangxinxu.com/wordpress/2026/05/js-focus-focusvisible/",
      "date": "2026-05-29"
    },
    {
      "name": "多多",
      "year": "09",
      "title": "腾讯eo pages 网站访问显示404",
      "url": "https://ddlog.cn/?p=510",
      "date": "2026-05-29"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "Typecho1.3.0修订版来了，非官网的",
      "url": "https://www.mmtx.net/1166.html",
      "date": "2026-05-28"
    }
  ],
  "2014": [
    {
      "name": "松茸",
      "year": "14",
      "title": "小狼毫输入法五笔输入的微硬伤",
      "url": "https://zrs.xyz/2133.html",
      "date": "2026-05-28"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "矩阵参数的奇异值熵越高越好吗？",
      "url": "https://kexue.fm/archives/11767",
      "date": "2026-05-29"
    }
  ],
  "2019": [
    {
      "name": "李锋镝",
      "year": "19",
      "title": "codebase-memory-mcp 极简完整使用指南",
      "url": "https://www.lifengdi.com/ren-gong-zhi-neng/4716",
      "date": "2026-05-29"
    }
  ],
  "2021": [
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "我都已经想退休了😄",
      "url": "https://www.ddf.im/index.php/2026/05/29/1254.html",
      "date": "2026-05-29"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "我们的青春，叫免费蛮荒：80后亲历的2000–2010互联网盗版黄金十年",
      "url": "https://mzdsx.com/2026/05/29/%e6%88%91%e4%bb%ac%e7%9a%84%e9%9d%92%e6%98%a5%ef%bc%8c%e5%8f%ab%e5%85%8d%e8%b4%b9%e8%9b%ae%e8%8d%92%ef%bc%9a80%e5%90%8e%e4%ba%b2%e5%8e%86%e7%9a%842000-2010%e4%ba%92%e8%81%94%e7%bd%91%e7%9b%97/",
      "date": "2026-05-29"
    }
  ]
};

function getSortedYears() {
    return Object.keys(latestArticlesByYear).sort((a, b) => parseInt(a) - parseInt(b));
}

if (typeof window !== 'undefined') {
    window.latestArticlesByYear = latestArticlesByYear;
    window.getSortedYears = getSortedYears;
}

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇最近14天文章');
