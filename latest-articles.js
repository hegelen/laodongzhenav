// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-31 22:27:13
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The Hallmark dilemma",
      "url": "https://seths.blog/2026/10/the-hallmark-dilemma/",
      "date": "2026-10-31"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "2008，没什么搞不定的",
      "url": "https://www.tortorse.com/archives/nothing-we-couldnt-handle-2008/",
      "date": "2026-10-31"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "不想被哈了",
      "url": "https://www.xlanda.net/posts/22585",
      "date": "2026-10-31"
    }
  ],
  "2005": [
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x001B",
      "url": "https://lenciel.com/2026/10/fragments-0x001b/",
      "date": "2026-10-31"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Claude 拿掉 US$200/mo 的 5-hour limit 了",
      "url": "https://blog.gslin.org/archives/2026/10/31/13312/claude-%e6%8b%bf%e6%8e%89-us200-mo-%e7%9a%84-5-hour-limit-%e4%ba%86/",
      "date": "2026-10-31"
    }
  ],
  "2007": [
    {
      "name": "老杨",
      "year": "07",
      "title": "遥遥领先",
      "url": "https://yangyq.net/2026/10/ahead-of-the-curve.html",
      "date": "2026-10-31"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "湖上泛舟的悠闲",
      "url": "https://me.xu19.com/leisurely-boat-ride-on-kunming-lake-old-summer-palace/",
      "date": "2026-10-31"
    }
  ],
  "2009": [
    {
      "name": "老卫",
      "year": "09",
      "title": "《Spring AI开发从入门到实践》简介",
      "url": "https://waylau.com/about-spring-ai-tutorial-book/",
      "date": "2026-10-31"
    },
    {
      "name": "老卫（柳伟卫）的技术站",
      "year": "09",
      "title": "《Spring AI开发从入门到实践》简介",
      "url": "https://waylau.com/about-spring-ai-tutorial-book/",
      "date": "2026-10-31"
    },
    {
      "name": "标点符",
      "year": "09",
      "title": "AI 编程时代Python Web 框架该怎么选？",
      "url": "https://www.biaodianfu.com/python-web-framework-in-the-era-of-ai-programming/",
      "date": "2026-10-31"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.31",
      "url": "https://www.linyufan.com/post/6120",
      "date": "2026-10-31"
    }
  ],
  "2018": [
    {
      "name": "黑桃三",
      "year": "18",
      "title": "把用了近8年的handsome主题换掉了",
      "url": "https://heitaosan.com/article/240",
      "date": "2026-10-31"
    },
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "重新开始写博客",
      "url": "https://yxgoa.cn/archives/12/",
      "date": "2026-10-31"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "【景点篇】阿尔沟",
      "url": "https://liuqingwushui.top/archives/206/",
      "date": "2026-10-31"
    },
    {
      "name": "飞蚊话",
      "year": "19",
      "title": "2026 年的下半年，我终于找回了南航领取大兴机场线车票的入口",
      "url": "https://www.bwsl.wang/talk/188.html",
      "date": "2026-10-31"
    },
    {
      "name": "紫塞",
      "year": "19",
      "title": "又成功绕太阳一圈",
      "url": "https://zisai.com/posts/another-trip-around-the-sun/",
      "date": "2026-10-31"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "还是得从右边下车",
      "url": "https://www.imcry.vip/post/2026-10-31-2254/",
      "date": "2026-10-31"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-31：Vaani Developer Platform、Knocket AI、SpeakON Agent",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-31",
      "date": "2026-10-31"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO不再是关键词排名了，时代变了，我们也要转变思维了",
      "url": "https://www.bailuze.com/24553.html",
      "date": "2026-10-31"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "今天没写文章",
      "url": "https://liyinwaihe.com/25.html",
      "date": "2026-10-31"
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
