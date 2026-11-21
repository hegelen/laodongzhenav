// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-21 23:52:52
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "练习一下",
      "url": "https://wlj.me/notes/sp-note-20261122-000115/",
      "date": "2026-11-21"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Emergent properties",
      "url": "https://seths.blog/2026/11/emergent-properties/",
      "date": "2026-11-21"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "图书的插画",
      "url": "https://kaix.in/2026/1121/",
      "date": "2026-11-21"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "HUAWEI MatePad Air 12-inch PaperMatte Edition",
      "url": "https://synyan.cn/t/64373",
      "date": "2026-11-21"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "修东西",
      "url": "https://ezo.biz/Play_More/1843.html",
      "date": "2026-11-21"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "尚书阅读书友会不推荐",
      "url": "https://acevs.com/5379/",
      "date": "2026-11-21"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "十一月，漫度时光",
      "url": "https://zhujay.com/blog/blog_detail.html?id=1296",
      "date": "2026-11-21"
    },
    {
      "name": "老杨",
      "year": "07",
      "title": "情绪价值",
      "url": "https://yangyq.net/2026/11/emotional-value.html",
      "date": "2026-11-21"
    },
    {
      "name": "悠见",
      "year": "07",
      "title": "最近搞 Gemini 有点上头，耽误写字了",
      "url": "https://yufm.com/662561.html",
      "date": "2026-11-21"
    },
    {
      "name": "FROYO",
      "year": "07",
      "title": "这一年，AI 不再只是聊天",
      "url": "https://www.izhuyue.com/5822.html",
      "date": "2026-11-21"
    }
  ],
  "2009": [
    {
      "name": "欧雷流",
      "year": "09",
      "title": "杭州最热那几个月，我在家里暗无天日度过",
      "url": "https://ourai.ws/posts/concluding-the-first-software-outsourcing-project-collaboration/",
      "date": "2026-11-21"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "三服，到爷爷坟上烧纸",
      "url": "https://www.linyufan.com/post/6147",
      "date": "2026-11-21"
    }
  ],
  "2018": [
    {
      "name": "枋柚梓的猫会发光",
      "year": "18",
      "title": "RustDesk 自编译版本：预置服务器配置",
      "url": "https://inkss.cn/post/a889ded0/",
      "date": "2026-11-21"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-21：Saparo、Tripmojo、Docker",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-21",
      "date": "2026-11-21"
    },
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "说说：终于实现了烤鸡腿自由了！",
      "url": "https://www.mmbkz.cn/d006a18e.html",
      "date": "2026-11-21"
    }
  ],
  "2023": [
    {
      "name": "核桃",
      "year": "23",
      "title": "2026年11月6日，贵州三都之旅的第四天",
      "url": "https://www.htaoo.com/record/942.html",
      "date": "2026-11-21"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "深入解析URL参数对SEO的影响及优化策略",
      "url": "https://www.bailuze.com/24677.html",
      "date": "2026-11-21"
    },
    {
      "name": "兔哥",
      "year": "23",
      "title": "Google AI Pro 日本学生优惠：每月 720 日元，开通步骤",
      "url": "https://uuzi.net/google-ai-pro-japan-student-720-yen/",
      "date": "2026-11-21"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "差点灭绝的药物",
      "url": "https://www.immarcus.com/blog/drug-near-extinction",
      "date": "2026-11-21"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "关于NAS",
      "url": "https://sheep5.net/archives/26112120.html",
      "date": "2026-11-21"
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
