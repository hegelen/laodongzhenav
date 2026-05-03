// ==================== latest-articles.js ====================
// 抓取日期: 2026/5/3 15:22:06
// 只抓取最近7天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "龙哥",
      "year": "04",
      "title": "用ipabc.de做了一个ip查询网站",
      "url": "https://long.ge/18063.html",
      "date": "2026-04-28"
    }
  ],
  "2007": [
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "2026年4月总结",
      "url": "https://zhujianlin.com/archives/1879.html",
      "date": "2026-04-30"
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
  "2017": [
    {
      "name": "马春杰杰",
      "year": "17",
      "title": "吐槽：记录一次站点被Meta爬虫刷掉400G流量的排查过程",
      "url": "https://www.machunjie.com/web/2120.html",
      "date": "2026-04-29"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "通过openclaw装hermes，倒反天罡",
      "url": "https://liuqingwushui.top/archives/155/",
      "date": "2026-04-30"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "在谷歌商家资料中选择并优化分类",
      "url": "https://www.bailuze.com/24049.html",
      "date": "2026-05-02"
    },
    {
      "name": "维奥洛",
      "year": "23",
      "title": "恍惚间，自己分不清用的 win11 还是 arch",
      "url": "https://vioulo.com/archives/win11-or-arch.html",
      "date": "2026-04-30"
    }
  ],
  "2024": [
    {
      "name": "ImQi1",
      "year": "24",
      "title": "为了一个女孩，我哭了一整晚",
      "url": "https://imqi1.com/content/note/1009",
      "date": "2026-04-27"
    }
  ],
  "2025": [
    {
      "name": "心记",
      "year": "25",
      "title": "自运营的博客之家论坛已上线",
      "url": "https://blog.moodlog.cn/archives/16/",
      "date": "2026-04-29"
    },
    {
      "name": "巴适小馨",
      "year": "25",
      "title": "善待和尊重处在低谷期的奋进者",
      "url": "https://p4z.cn/archives/98.html",
      "date": "2026-04-27"
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
