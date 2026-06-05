// ==================== latest-articles.js ====================
// 抓取日期: 6/5/2026, 10:26:38 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "泳后池边吹风看书",
      "url": "https://wlj.me/notes/sp-note-20260604-220452/",
      "date": "2026-06-04"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "How to teach marketing",
      "url": "https://seths.blog/2026/06/how-to-teach-marketing/",
      "date": "2026-06-05"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 399 期）：中国 AI 大厂访问记",
      "url": "http://www.ruanyifeng.com/blog/2026/06/weekly-issue-399.html",
      "date": "2026-06-05"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "复杂的广电",
      "url": "http://www.xlanda.net/posts/22241",
      "date": "2026-06-05"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "github下载地址获取办法",
      "url": "https://ddlog.cn/?p=534",
      "date": "2026-06-05"
    }
  ],
  "2012": [
    {
      "name": "MacTalk-池建强的随想录",
      "year": "12",
      "title": "CatReader 上线：重启 RSS 阅读",
      "url": "https://macshuo.com/?p=2050",
      "date": "2026-06-04"
    }
  ],
  "2017": [
    {
      "name": "SimonAKing",
      "year": "17",
      "title": "BYOA 是 vibe coding 产品的唯一出路",
      "url": "https://simonaking.com/blog/byoa-vibe-coding/",
      "date": "2026-06-04"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-04",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-04",
      "date": "2026-06-04"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "今日手绘｜元气小丫头",
      "url": "https://zhouayuan.com/post/48.html",
      "date": "2026-06-04"
    },
    {
      "name": "妄司逸",
      "year": "26",
      "title": "\n      正向代理&反向代理？\n    ",
      "url": "https://blog.flechazo.icu/2026/06/04/%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86and%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86/",
      "date": "2026-06-04"
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
