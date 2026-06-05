// ==================== latest-articles.js ====================
// 抓取日期: 6/5/2026, 10:14:47 AM
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
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "复杂的广电",
      "url": "http://www.xlanda.net/posts/22241",
      "date": "2026-06-05"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "雪崩时没有一片雪花是无辜的",
      "url": "https://synyan.cn/t/62446",
      "date": "2026-06-04"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "BlogsClub月度拾光福利",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1237",
      "date": "2026-06-05"
    }
  ],
  "2015": [
    {
      "name": "elmagnifico",
      "year": "15",
      "title": "Skills进阶",
      "url": "https://elmagnifico.tech/2026/06/05/Agent-Skills2/",
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
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "bearblog",
      "url": "https://jefftay.com/bearblog/",
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
    },
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "跑步刚回来",
      "url": "https://mzdsx.com/2026/06/04/%e8%b7%91%e6%ad%a5%e5%88%9a%e5%9b%9e%e6%9d%a5/",
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
