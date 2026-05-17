// ==================== latest-articles.js ====================
// 抓取日期: 5/17/2026, 2:07:20 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "散装药",
      "url": "https://kaix.in/2026/0508/",
      "date": "2026-05-08"
    }
  ],
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
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "凡人修仙靠逆天，剑来护心靠齐先生｜那一句 “莫让他输在情字” 看哭多少人",
      "url": "https://blog.52hyjs.com/post-1271.html",
      "date": "2026-05-15"
    }
  ],
  "2017": [
    {
      "name": "zj",
      "year": "17",
      "title": "五一·北京游",
      "url": "http://www.zjhuiwan.cn/info/20260506/5210122503078339.html",
      "date": "2026-05-06"
    }
  ],
  "2018": [
    {
      "name": "枋柚梓的猫会发光",
      "year": "18",
      "title": "从 1Password 迁移到 Bitwarden：一次涨价引发的“搬家”",
      "url": "https://inkss.cn/post/5a013cf6/",
      "date": "2026-05-08"
    },
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "我买基金从不亏钱",
      "url": "https://blog.ops-coffee.com/r/fund-5-year-from-50-percent-loss-to-profit.html",
      "date": "2026-05-07"
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
    },
    {
      "name": "一万先生",
      "year": "26",
      "title": "土耳其区ID充值gpt plus全流程(apple礼品卡)",
      "url": "/feed/6",
      "date": "2026-05-09"
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
