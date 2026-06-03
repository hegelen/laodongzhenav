// ==================== latest-articles.js ====================
// 抓取日期: 6/3/2026, 9:55:20 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Professionals know how to talk about it",
      "url": "https://seths.blog/2026/06/professionals-know-how-to-talk-about-it/",
      "date": "2026-06-03"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "咬文嚼字",
      "url": "https://kaix.in/2026/0603/",
      "date": "2026-06-03"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "走 RFC 2136 更新 DNS record 的 Dynamic DNS 服務",
      "url": "https://blog.gslin.org/archives/2026/06/04/13057/%e8%b5%b0-rfc-2136-%e6%9b%b4%e6%96%b0-dns-record-%e7%9a%84-dynamic-dns-%e6%9c%8d%e5%8b%99/",
      "date": "2026-06-03"
    },
    {
      "name": "春田",
      "year": "05",
      "title": "１０７７．人生には岐路がある",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/06/post-0d00b8.html",
      "date": "2026-06-03"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "天涯社区恢复访问，你登录了吗？",
      "url": "https://www.munue.com/799.html",
      "date": "2026-06-03"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "如何选择趁手的兵器（大模型和配套的工具）",
      "url": "https://www.suiyan.cc/blog/20260603200000",
      "date": "2026-06-03"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 之 UGC 不做落地页和 ADS 无效流量解决方法",
      "url": "https://www.ccgxk.com/codeother/767.html",
      "date": "2026-06-03"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "芜湖！收到好站网的赠品了",
      "url": "https://www.imcry.vip/post/2026-6-3-2126/",
      "date": "2026-06-03"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-03",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-03",
      "date": "2026-06-03"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "安家之后，岁岁清欢",
      "url": "https://xiangming.site/1131.html",
      "date": "2026-06-03"
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
