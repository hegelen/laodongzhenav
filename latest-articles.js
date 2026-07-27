// ==================== latest-articles.js ====================
// 抓取日期: 7/27/2026, 8:33:02 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Optimizing yourself into a corner",
      "url": "https://seths.blog/2026/07/optimizing-yourself-into-a-corner/",
      "date": "2026-07-27"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：顾问式成交迅速提升转化率",
      "url": "https://www.ufoer.com/post/14160.html",
      "date": "2026-07-27"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "我的桌底抽屉理论",
      "url": "http://www.xlanda.net/posts/22359",
      "date": "2026-07-27"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "生前事，身后事",
      "url": "https://kaix.in/2026/0727/",
      "date": "2026-07-27"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "难题",
      "url": "https://ezo.biz/Diary/1514.html",
      "date": "2026-07-27"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "人生讨论(26)：为什么很多人成功后很少发声？",
      "url": "http://www.auiou.com/relevant/00002174.jsp",
      "date": "2026-07-27"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "洗衣机进水管龙头坏了",
      "url": "https://acevs.com/5130/",
      "date": "2026-07-27"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "Google 推出全新安全验证方式：自拍视频登录账户",
      "url": "https://www.munue.com/809.html",
      "date": "2026-07-27"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "二师兄的爱情·曲度紫鸳",
      "url": "https://yishu-life.com/index.php/archives/524.html",
      "date": "2026-07-27"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "从 Bartender 迁移到 Thaw",
      "url": "https://blog.devtang.com/2026/07/27/from-bartender-to-thaw/",
      "date": "2026-07-27"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今天没有减肥餐，买了一套武林秘籍",
      "url": "https://www.linyufan.com/post/5922",
      "date": "2026-07-27"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 관리자 사용자 이름 변경하여 보안 강화하기",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4%ec%97%90%ec%84%9c-%ea%b4%80%eb%a6%ac%ec%9e%90%ec%9d%98-%ec%82%ac%ec%9a%a9%ec%9e%90-%ec%9d%b4%eb%a6%84-%eb%b3%80%ea%b2%bd/",
      "date": "2026-07-26"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "当你赚到第一个9块9的时候...",
      "url": "https://www.ccgxk.com/codeother/823.html",
      "date": "2026-07-27"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "周末的清水煮锅",
      "url": "https://liuqingwushui.top/archives/177/",
      "date": "2026-07-27"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "Why me？",
      "url": "https://blog.solazy.me/20260727/",
      "date": "2026-07-27"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "用EO-Pages实现域名@记录跳转",
      "url": "https://www.imcry.vip/post/2026-7-27-2138/",
      "date": "2026-07-27"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "想法在夜间扑腾",
      "url": "https://www.wsh233.cn/post/想法在夜间扑腾",
      "date": "2026-07-27"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-27",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-27",
      "date": "2026-07-27"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "Reddit SEO：主导搜索与大型语言模型结果的完整策略",
      "url": "https://www.bailuze.com/24271.html",
      "date": "2026-07-27"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "人生的配速",
      "url": "https://www.immarcus.com/blog/pacing-for-life",
      "date": "2026-07-27"
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
