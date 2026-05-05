// ==================== latest-articles.js ====================
// 抓取日期: 5/5/2026, 8:12:41 PM
// 只抓取最近7天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "人生讨论(21)：“明白不”的心理机制",
      "url": "http://www.auiou.com/relevant/00002148.jsp",
      "date": "2026-05-02"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "难得正版Windows又打骨折！白菜价",
      "url": "https://me.xu19.com/windows11-big-discount/",
      "date": "2026-05-01"
    }
  ],
  "2009": [
    {
      "name": "老卫",
      "year": "09",
      "title": "历时三年《鸿蒙系统（HarmonyOS）移动开发实战》简介",
      "url": "https://waylau.com/about-harmonyos-short-video-book/",
      "date": "2026-05-01"
    }
  ],
  "2010": [
    {
      "name": "雅余",
      "year": "10",
      "title": "动物朋友",
      "url": "https://yayu.net/6218.html",
      "date": "2026-04-30"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "读《金阁寺》",
      "url": "https://www.kawabangga.com/posts/7246",
      "date": "2026-05-04"
    }
  ],
  "2015": [
    {
      "name": "东哥",
      "year": "15",
      "title": "从零搭建一套跨平台的icon图标库（四）- 资源预览",
      "url": "https://blog.hudd.cn/1414.html",
      "date": "2026-05-04"
    }
  ],
  "2016": [
    {
      "name": "woodu",
      "year": "16",
      "title": "JVS时代的经典乘客——《太鼓之达人 6》",
      "url": "https://woodu.me/jvsshidaidejingdiancheng/",
      "date": "2026-05-02"
    }
  ],
  "2017": [
    {
      "name": "染念",
      "year": "17",
      "title": "lens|打造最强的个人LLM聚合网关系统",
      "url": "https://dyedd.cn/posts/lens_api",
      "date": "2026-04-28"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "阿城湿地公园五一随拍",
      "url": "https://siwei.li/a-cheng-shi-di-gong-yuan-wu-yi-sui-pai/",
      "date": "2026-05-03"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "从传统到AI驱动：SEO如何变化",
      "url": "https://www.bailuze.com/24051.html",
      "date": "2026-05-04"
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

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇最近7天文章');
