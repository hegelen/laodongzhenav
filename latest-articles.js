// ==================== latest-articles.js ====================
// 抓取日期: 5/14/2026, 8:39:36 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "Obsidian 成为我文字输入主力工具",
      "url": "https://joojen.com/archives/8958.html",
      "date": "2026-05-12"
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
  "2010": [
    {
      "name": "lilydjwg",
      "year": "10",
      "title": "\n        自定义系统默认中文字体\n      ",
      "url": "https://blog.lilydjwg.me/posts/217026.html",
      "date": "2026-05-11"
    }
  ],
  "2011": [
    {
      "name": "耳朵的主人",
      "year": "11",
      "title": "妈祖诞辰1066周年｜善坛妈祖庙祭典",
      "url": "https://www.edzbe.com/book/diary/20260509.html",
      "date": "2026-05-11"
    }
  ],
  "2014": [
    {
      "name": "松茸",
      "year": "14",
      "title": "千万莫单广电卡进江苏",
      "url": "https://zrs.xyz/2131.html",
      "date": "2026-05-12"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "周天记正式更换主题Riven",
      "url": "https://zhoutian.com/369.html",
      "date": "2026-05-09"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "我买基金从不亏钱",
      "url": "https://blog.ops-coffee.com/r/fund-5-year-from-50-percent-loss-to-profit.html",
      "date": "2026-05-07"
    }
  ],
  "2021": [
    {
      "name": "yveji",
      "year": "21",
      "title": "2026世界杯代餐：chambishi copper mine",
      "url": "https://www.yveji.com/Cultural/chambishi-copper-mine.html",
      "date": "2026-05-13"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "当白嫖党的渠道都被封以后，天才程序员已陨落。",
      "url": "https://jyblog.cn/5552/",
      "date": "2026-05-12"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客加一层“语义索引”（一）：结构设计与构建流程",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14228/",
      "date": "2026-05-07"
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
