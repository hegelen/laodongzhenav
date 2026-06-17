// ==================== latest-articles.js ====================
// 抓取日期: 6/17/2026, 7:14:27 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The relentless math of the long tail",
      "url": "https://seths.blog/2026/06/the-relentless-math-of-the-long-tail/",
      "date": "2026-06-16"
    },
    {
      "name": "不吐不快",
      "year": "02",
      "title": "KiCad 多版本文件转换器",
      "url": "https://mianao.info/KiCad-Multi-Version-Converter/",
      "date": "2026-06-16"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通:天地灵气复苏，24字修炼口诀",
      "url": "https://www.ufoer.com/post/13715.html",
      "date": "2026-06-17"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "2026.06.17 14:21",
      "url": "https://kaix.in/2026/0617/",
      "date": "2026-06-17"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "没救了",
      "url": "http://www.xlanda.net/posts/22268",
      "date": "2026-06-17"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "DeepMind 亮出王炸：别再手写 Agent Harness 了，AI 已经学会自己写了！",
      "url": "https://tonybai.com/2026/06/17/deepmind-automation-agent-harness-ai-self-coding/",
      "date": "2026-06-17"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "无力回天",
      "url": "https://acevs.com/5044/",
      "date": "2026-06-17"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "无极 以后你会失去更多",
      "url": "https://ddlog.cn/?p=550",
      "date": "2026-06-16"
    },
    {
      "name": "老张",
      "year": "09",
      "title": "[推广]酷鸭数据端午活动6.16开启！限时4天！",
      "url": "https://laozhang.org/archives/4154.html",
      "date": "2026-06-16"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "用 AI 挑选 skill 头疼？聊聊四大 skill 仓库",
      "url": "https://www.ccgxk.com/codeother/780.html",
      "date": "2026-06-16"
    },
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "哪吒探针爆致命漏洞（CVE-2026-53519）大批 MJJ 中招！探针就该老老实实做监测好不",
      "url": "https://www.tjsky.net/news/1664",
      "date": "2026-06-17"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "（误回解除，帖子锁定）",
      "url": "https://www.dalao.net/thread-59853.htm",
      "date": "2026-06-17"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "新购的唯卓仕55mm f1.8 EVO镜头有瑕疵，已退货",
      "url": "https://www.bufanz.com/20260616675.html",
      "date": "2026-06-16"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-16",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-16",
      "date": "2026-06-16"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "域名故事：低成本拿下域名 jyblog.com 从售价16万到350块",
      "url": "https://jyblog.cn/5732/",
      "date": "2026-06-17"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客构建“轻量级知识索引”（五）：猜你所想——embedding的真正引入",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14419/",
      "date": "2026-06-17"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "bearblog",
      "url": "https://jefftay.com/bearblog/",
      "date": "2026-06-16"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "募捐、求职履历和比特币",
      "url": "https://www.immarcus.com/blog/fundraising-resume-bitcoin",
      "date": "2026-06-17"
    }
  ],
  "2026": [
    {
      "name": "安迪",
      "year": "26",
      "title": "硅云十年之约虚拟主机",
      "url": "https://i55.top/archives/539/",
      "date": "2026-06-16"
    },
    {
      "name": "周阿源",
      "year": "26",
      "title": "清晨日常速写｜画下洗漱时乱糟糟的自己",
      "url": "https://zhouayuan.com/post/55.html",
      "date": "2026-06-17"
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
