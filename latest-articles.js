// ==================== latest-articles.js ====================
// 抓取日期: 5/17/2026, 11:50:44 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Perfect or better?",
      "url": "https://seths.blog/2026/05/perfect-or-better/",
      "date": "2026-05-17"
    }
  ],
  "2004": [
    {
      "name": "小陈故事",
      "year": "04",
      "title": "努力做个不扫兴的父母",
      "url": "https://www.chener.net/archives/spoilthefun/",
      "date": "2026-05-11"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "日子过得太粘稠",
      "url": "https://joojen.com/archives/8972.html",
      "date": "2026-05-17"
    }
  ],
  "2007": [
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "股票已经连续5天一字跌停",
      "url": "https://zhujianlin.com/archives/1893.html",
      "date": "2026-05-11"
    }
  ],
  "2012": [
    {
      "name": "王鑫",
      "year": "12",
      "title": "AI写小说基本思路探讨",
      "url": "https://wonse.info/ai-write-novel.html",
      "date": "2026-05-12"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "DeepSeek V4的tid2eid是怎么来的？",
      "url": "https://kexue.fm/archives/11750",
      "date": "2026-05-15"
    }
  ],
  "2022": [
    {
      "name": "吃猫的鱼",
      "year": "22",
      "title": "鸿蒙安装 Google Play 应用：microG 方案实践",
      "url": "https://www.fish9.cn/archives/477/",
      "date": "2026-05-04"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客加一层“语义索引”（二）：JSON 结构与生成脚本的实现",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14244/",
      "date": "2026-05-15"
    }
  ],
  "2024": [
    {
      "name": "ImQi1",
      "year": "24",
      "title": "来成都看大熊猫",
      "url": "https://imqi1.com/content/shot/1011",
      "date": "2026-05-15"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "麦子的思绪(一）",
      "url": "https://mzdsx.com/2026/05/17/%e9%ba%a6%e5%ad%90%e7%9a%84%e6%80%9d%e7%bb%aa/",
      "date": "2026-05-16"
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
