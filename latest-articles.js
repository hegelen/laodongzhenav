// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-01 22:49:28
// 只抓取最近14天内的文章，共 19 篇
// 目标 20 篇，实际 19 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "“Not yet”",
      "url": "https://seths.blog/2026/11/not-yet/",
      "date": "2026-11-01"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "三只小猫",
      "url": "https://www.xlanda.net/posts/22588",
      "date": "2026-11-01"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "月志202610",
      "url": "https://ezo.biz/Diary/1788.html",
      "date": "2026-11-01"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "TWCA 憑證序號的 entropy 不足 64 bits",
      "url": "https://blog.gslin.org/archives/2026/11/02/13314/twca-%e6%86%91%e8%ad%89%e5%ba%8f%e8%99%9f%e7%9a%84-entropy-%e4%b8%8d%e8%b6%b3-64-bits/",
      "date": "2026-11-01"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "二手键盘第三回合",
      "url": "https://acevs.com/5337/",
      "date": "2026-11-01"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "服务器检修提示",
      "url": "http://www.auiou.com/relevant/00010003.jsp",
      "date": "2026-11-01"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "Chuck为什么这个样子？",
      "url": "https://www.seis-jun.xyz/blog/2026-11-01-why-chuck-is-like-this.html",
      "date": "2026-11-01"
    }
  ],
  "2007": [
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "《重新理解创业》书评",
      "url": "https://yanlinlin.cn/2026/11/01/reunderstanding-entrepreneurship-review/",
      "date": "2026-11-01"
    },
    {
      "name": "悠见",
      "year": "07",
      "title": "把行草书当楷书写，好像对笔划提按有了一丁点的感觉",
      "url": "https://yufm.com/662517.html",
      "date": "2026-11-01"
    }
  ],
  "2010": [
    {
      "name": "Jeray",
      "year": "10",
      "title": "AI患者又多一名",
      "url": "https://hi.jeray.wang/L/229.html",
      "date": "2026-11-01"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "读《信号与噪声》",
      "url": "https://blog.devtang.com/2026/11/01/signal-and-noice-book-summary/",
      "date": "2026-11-01"
    }
  ],
  "2012": [
    {
      "name": "MacTalk-池建强的随想录",
      "year": "12",
      "title": "今天去把我的牙装上了",
      "url": "https://macshuo.com/?p=2087",
      "date": "2026-11-01"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "周末两把鸿蒙应用“竹子记账”做了pc和平板的完整适配",
      "url": "https://www.linyufan.com/post/6123",
      "date": "2026-11-01"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "시놀로지 랜섬웨어 C3RB3R 피해 확산, DSM 업데이트와 백업부터 점검하세요",
      "url": "https://www.thewordcracker.com/blog/synology-c3rb3r-ransomware/",
      "date": "2026-11-01"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "平均之路：从Attention到TTT",
      "url": "https://kexue.fm/archives/11993",
      "date": "2026-11-01"
    }
  ],
  "2019": [
    {
      "name": "紫塞",
      "year": "19",
      "title": "名字后面的“天堂”",
      "url": "https://zisai.com/posts/names-with-heaven/",
      "date": "2026-11-01"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-01：Specsight、SKI、telemetry.dev",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-01",
      "date": "2026-11-01"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.11.01 博客阅读周荐 - fengc",
      "url": "https://www.immarcus.com/blog/weekly-20261101",
      "date": "2026-11-01"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "读完一本书｜《毕业》",
      "url": "https://sheep5.net/archives/538.html",
      "date": "2026-11-01"
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
