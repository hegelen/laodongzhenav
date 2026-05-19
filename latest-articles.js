// ==================== latest-articles.js ====================
// 抓取日期: 5/19/2026, 8:47:53 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "推荐2026年度的新型特级网红",
      "url": "http://www.auiou.com/relevant/00002152.jsp",
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
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "[推广]酷鸭数据 · 520情人节特别活动机来啦！",
      "url": "https://laozhang.org/archives/4060.html",
      "date": "2026-05-19"
    }
  ],
  "2010": [
    {
      "name": "宇间草",
      "year": "10",
      "title": "修个设备还得“以命换命”？这锅老子不背了",
      "url": "https://2days.org/20108.html",
      "date": "2026-05-11"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "试遍所有 Navidrome 客户端，我最终选择了 Narjo",
      "url": "https://blog.einverne.info/post/2026/05/narjo-music-player-review.html",
      "date": "2026-05-19"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "遂昌｜躲避人潮的五一自驾Day3 - 杜鹃",
      "url": "https://blog.ops-coffee.com/r/city-china-zhejiang-lishui-suichang-03.html",
      "date": "2026-05-19"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "第一次参加冠军调酒节",
      "url": "https://liuqingwushui.top/archives/157/",
      "date": "2026-05-18"
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
  "2023": [
    {
      "name": "Shiina",
      "year": "23",
      "title": "Dell Latitude 7410 Chromebook / Drallion 刷 Windows：CoolStar 安装、Search / Globe 键修复与自动旋转排查",
      "url": "https://blog.shiina.fun/2026/05/17/dell-latitude-7410-chromebook-drallion-%e5%88%b7-windows%ef%bc%9acoolstar-%e5%ae%89%e8%a3%85%e3%80%81search-globe-%e9%94%ae%e4%bf%ae%e5%a4%8d%e4%b8%8e%e8%87%aa%e5%8a%a8%e6%97%8b%e8%bd%ac%e6%8e%92/",
      "date": "2026-05-16"
    },
    {
      "name": "火米",
      "year": "23",
      "title": "Token 不够用的话，试试 RTK 吧",
      "url": "https://huo.me/rtk/",
      "date": "2026-05-19"
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
