// ==================== latest-articles.js ====================
// 抓取日期: 7/25/2026, 8:19:22 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "昨晚重看了《牯岭街少年杀人事件.A Br",
      "url": "https://wlj.me/notes/sp-note-20260725-145511/",
      "date": "2026-07-25"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "More interesting",
      "url": "https://seths.blog/2026/07/more-interesting/",
      "date": "2026-07-25"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "入手键盘抽屉",
      "url": "http://www.xlanda.net/posts/22354",
      "date": "2026-07-25"
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "is-for-sale.com出售网站重做",
      "url": "https://long.ge/18082.html",
      "date": "2026-07-25"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Opus 5 出了",
      "url": "https://blog.gslin.org/archives/2026/07/25/13129/opus-5-%e5%87%ba%e4%ba%86/",
      "date": "2026-07-24"
    }
  ],
  "2007": [
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "代码量、算法岗与AI：一个程序员的日常思考",
      "url": "https://yanlinlin.cn/2026/07/25/code-quantity-algorithm-position-and-ai/",
      "date": "2026-07-25"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "观《八仙！》有感：我只做，我认为对的事",
      "url": "https://bwskyer.com/all-wishes-come-true-review.html",
      "date": "2026-07-25"
    },
    {
      "name": "军",
      "year": "08",
      "title": "解决Quicker旧版本无法登录",
      "url": "https://me.xu19.com/solve-unable-to-log-in-to-older-versions-of-quicker/",
      "date": "2026-07-25"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "软件 || 图集规范管理软件-全新测试版上线，欢迎尝鲜",
      "url": "https://www.yishu.pro/231.html",
      "date": "2026-07-25"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录",
      "url": "https://www.linyufan.com/post/5913",
      "date": "2026-07-25"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "人活着，到底为了什么？",
      "url": "https://blog.52hyjs.com/post-1285.html",
      "date": "2026-07-25"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "程序员下班以后做什么副业合适？",
      "url": "https://www.ccgxk.com/codeother/820.html",
      "date": "2026-07-25"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "让AI判断AI自己生成的文章是不是AI写的？",
      "url": "https://www.suiyan.cc/blog/20260725191701",
      "date": "2026-07-25"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-06-17 / 反政府的 KYC",
      "url": "https://blog.xinshijiededa.men/daily/53/",
      "date": "2026-07-25"
    },
    {
      "name": "沧海月明",
      "year": "19",
      "title": "AI 时代，数据库需要具备什么样的能力？",
      "url": "https://www.inlighting.org/archives/what-database-ability-is-ai-needed",
      "date": "2026-07-25"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "【不凡摄影作品 | 2026.7.25】",
      "url": "https://www.bufanz.com/20260725763.html",
      "date": "2026-07-25"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": ".web顶级域名正式写入全球DNS 根区",
      "url": "https://www.dalao.net/thread-61576.htm",
      "date": "2026-07-25"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "页面内SEO是什么？介绍以及实战网站优化指南",
      "url": "https://www.bailuze.com/24269.html",
      "date": "2026-07-25"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "豆子如何产生价值",
      "url": "https://www.immarcus.com/blog/how-a-bean-creates-value",
      "date": "2026-07-25"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "自从有了AI看片都自由了 使用tvbox源搞了tvbox播放器",
      "url": "https://www.renhuali.cn/journal/cmrzoqctg00h9chujwo4i3bu0",
      "date": "2026-07-25"
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
