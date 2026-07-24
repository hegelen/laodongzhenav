// ==================== latest-articles.js ====================
// 抓取日期: 7/24/2026, 8:31:09 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "First take/next take/last take",
      "url": "https://seths.blog/2026/07/first-take-next-take-last-take/",
      "date": "2026-07-24"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 405 期）：资源，社会公平与算力",
      "url": "http://www.ruanyifeng.com/blog/2026/07/weekly-issue-405.html",
      "date": "2026-07-24"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "吃时间费眼睛的魔鬼",
      "url": "http://www.xlanda.net/posts/22352",
      "date": "2026-07-24"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "重磅！Tokio官方发布全栈框架Topcoat：不用WASM，AI时代Rust也能“糊”网页了",
      "url": "https://tonybai.com/2026/07/24/tokio-topcoat-rust-fullstack-framework/",
      "date": "2026-07-23"
    }
  ],
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "对抗系统的桌游",
      "url": "https://blog.codingnow.com/2026/07/deckers.html",
      "date": "2026-07-24"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "JPEG 與 PNG 上的 progressive 效果",
      "url": "https://blog.gslin.org/archives/2026/07/24/13127/jpeg-%e8%88%87-png-%e4%b8%8a%e7%9a%84-progressive-%e6%95%88%e6%9e%9c/",
      "date": "2026-07-24"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "火箭被闪电击中，会发生什么？",
      "url": "https://acevs.com/5123/",
      "date": "2026-07-24"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "从 800U 到爆仓：过度交易和扛单，最后还是把账户做没了",
      "url": "https://blog.forecho.com/from-800u-to-liquidation-overtrading-countertrend.html",
      "date": "2026-07-24"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐",
      "url": "https://www.linyufan.com/post/5918",
      "date": "2026-07-24"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "케미클라우드(ChemiCloud) 워드프레스 호스팅 플랜 업그레이드 방법",
      "url": "https://www.thewordcracker.com/miscellaneous/webhosting/%ec%bc%80%eb%af%b8%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c-%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ed%98%b8%ec%8a%a4%ed%8c%85-%ed%94%8c%eb%9e%9c-%ec%97%85%ea%b7%b8%eb%a0%88%ec%9d%b4%eb%93%9c/",
      "date": "2026-07-24"
    }
  ],
  "2016": [
    {
      "name": "ximi",
      "year": "16",
      "title": "腾讯云,牛逼,爬虫数据采集合法合规!",
      "url": "https://www.ximi.me/post-6047.html",
      "date": "2026-07-23"
    }
  ],
  "2019": [
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "实测 RAKsmart 圣何塞 CN2 精品 VPS｜2 核 4G 外贸建站 / 轻量上网全能款，三网回程直连",
      "url": "https://blog.naibabiji.com/news/tested-raksmart-san-jose-cn2-premium-vps.html",
      "date": "2026-07-24"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "续租合约的坑",
      "url": "https://liuqingwushui.top/archives/176/",
      "date": "2026-07-24"
    }
  ],
  "2020": [
    {
      "name": "孙振超",
      "year": "20",
      "title": "删除顽固再生文件",
      "url": "https://www.aqzx.com/blog/post/windows,无法删除.html",
      "date": "2026-07-24"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "流量卡还真得选御三家😂",
      "url": "https://usj.cc/20260724101237.html",
      "date": "2026-07-24"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-24",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-24",
      "date": "2026-07-24"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "AI 语义空间探索（三）：AI 如何判断两个向量是否相似？",
      "url": "https://blog.tangwudi.com/technology/homedatacenter14601/",
      "date": "2026-07-24"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "How to Do Great Work",
      "url": "https://jefftay.com/how-to-do-great-work",
      "date": "2026-07-25"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "理解SEO优化、运作原理、优势及其三大支柱",
      "url": "https://www.bailuze.com/24266.html",
      "date": "2026-07-24"
    }
  ],
  "2026": [
    {
      "name": "一万先生",
      "year": "26",
      "title": "CLAUDE玻利维亚低价羊毛教程",
      "url": "/feed/10",
      "date": "2026-07-24"
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
