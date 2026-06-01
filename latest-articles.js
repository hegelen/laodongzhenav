// ==================== latest-articles.js ====================
// 抓取日期: 6/1/2026, 10:17:48 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "又到一年毕业季",
      "url": "https://joojen.com/archives/9000.html",
      "date": "2026-06-01"
    }
  ],
  "2008": [
    {
      "name": "四火的唠叨",
      "year": "08",
      "title": "笔记：在 Mac Mini 本地跑 LLM 大模型",
      "url": "https://www.raychase.net/8180",
      "date": "2026-06-01"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "CSS contrast-color()函数简介",
      "url": "https://www.zhangxinxu.com/wordpress/2026/06/css-contrast-color/",
      "date": "2026-06-01"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "Typecho适合1.2的用户养老",
      "url": "https://www.mmtx.net/1167.html",
      "date": "2026-06-01"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 里的 schema 和 积沙成塔",
      "url": "https://www.ccgxk.com/codeother/765.html",
      "date": "2026-06-01"
    }
  ],
  "2019": [
    {
      "name": "passo",
      "year": "19",
      "title": "Episode VIII of Phase One: Judging beautiful docs, AI fatigue, and tool slop",
      "url": "https://passo.uno/episode-viii-phase-one-judging-beautiful-docs-ai-fatigue-tool-slop/",
      "date": "2026-06-01"
    },
    {
      "name": "Zeruns",
      "year": "19",
      "title": "武汉-青岛 旅游记录和照片分享",
      "url": "https://blog.zeruns.com/archives/946.html",
      "date": "2026-06-01"
    }
  ],
  "2020": [
    {
      "name": "优世界",
      "year": "20",
      "title": "尝试接入telegram机器人",
      "url": "https://usj.cc/2026-06-01-%E5%B0%9D%E8%AF%95%E6%8E%A5%E5%85%A5-telegram-%E6%9C%BA%E5%99%A8%E4%BA%BA.html",
      "date": "2026-06-01"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-01",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-01",
      "date": "2026-06-01"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "六一儿童节快乐｜我也是个孩子呀！",
      "url": "https://zhouayuan.com/post/46.html",
      "date": "2026-06-01"
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
