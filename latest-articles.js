// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-06 23:47:28
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "视频链接一键转精华文档",
      "url": "https://wlj.me/notes/sp-note-20261106-193933/",
      "date": "2026-11-06"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Reviewing the game tapes",
      "url": "https://seths.blog/2026/11/reviewing-the-game-tapes/",
      "date": "2026-11-06"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 418 期）：如果科技停止在21世纪初",
      "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-418.html",
      "date": "2026-11-05"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Lean 创始人：当 AI 开始写代码，谁来证明它是正确的？",
      "url": "https://tonybai.com/2026/11/07/when-ai-writes-code-who-proves-it-works/",
      "date": "2026-11-06"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "二宝的问题和历史上灭佛记录",
      "url": "https://acevs.com/5347/",
      "date": "2026-11-06"
    },
    {
      "name": "破袜子",
      "year": "05",
      "title": "每夫吐槽（121）",
      "url": "https://pewae.com/2026/11/random_kuso_121.html",
      "date": "2026-11-06"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "DIY(35-5)：干扰源终于找到",
      "url": "http://www.auiou.com/relevant/00002235.jsp",
      "date": "2026-11-07"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "入心",
      "url": "https://ltmltm.cn/bk/1513.html",
      "date": "2026-11-06"
    },
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "我们真的认识这个世界吗？",
      "url": "https://www.seis-jun.xyz/blog/2026-11-06-do-we-know-this-world.html",
      "date": "2026-11-06"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || 深圳六日游",
      "url": "https://www.yishu.pro/296.html",
      "date": "2026-11-06"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "我做了个只收录精品软件的网站 SoftBests",
      "url": "https://blog.forecho.com/introducing-softbests.html",
      "date": "2026-11-06"
    }
  ],
  "2012": [
    {
      "name": "贱志",
      "year": "12",
      "title": "正定访古",
      "url": "https://fatesinger.com/106533",
      "date": "2026-11-06"
    },
    {
      "name": "方糖",
      "year": "12",
      "title": "无山可靠，我自当山",
      "url": "/post/wu-shan-ke-kao-wo-zi-dang-shan",
      "date": "2026-11-06"
    },
    {
      "name": "水拍石",
      "year": "12",
      "title": "股市菜鸡",
      "url": "https://www.leitao.cn/11567.html",
      "date": "2026-11-06"
    }
  ],
  "2013": [
    {
      "name": "Jonty",
      "year": "13",
      "title": "【PVE】PVE9.2安装UPS+前端面板显示UPS信息（apcupsd瓦力方程）",
      "url": "https://nobb.cc/archives/3758.html",
      "date": "2026-11-06"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "클라우드웨이즈 디도스 (DDoS) 공격 대응 방법 4가지",
      "url": "https://www.thewordcracker.com/miscellaneous/webhosting/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ec%9b%a8%ec%9d%b4%ec%a6%88-%eb%94%94%eb%8f%84%ec%8a%a4-ddos-%ea%b3%b5%ea%b2%a9-%eb%8c%80%ec%9d%91-%eb%b0%a9%eb%b2%95-4%ea%b0%80%ec%a7%80/",
      "date": "2026-11-06"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "ChatGPT当遇到【无法加载付款表单。请重试。  】怎么办？",
      "url": "https://www.ccgxk.com/935.html",
      "date": "2026-11-06"
    }
  ],
  "2019": [
    {
      "name": "紫塞",
      "year": "19",
      "title": "我修好了非洲的电脑，女儿喝上了奶茶",
      "url": "https://zisai.com/posts/remote-help-and-milk-tea/",
      "date": "2026-11-06"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-06：Glasshand、Rerun、Living Brain",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-06",
      "date": "2026-11-06"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "AI时代观察（二）：从算命到人工智能，人类如何从已知推断未知？",
      "url": "https://blog.tangwudi.com/technology/cognition14816/",
      "date": "2026-11-06"
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
