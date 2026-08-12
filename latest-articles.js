// ==================== latest-articles.js ====================
// 抓取日期: 8/12/2026, 8:08:38 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "蘑菇AI助手管理知识星球",
      "url": "https://wlj.me/notes/sp-note-20260812-092415/",
      "date": "2026-08-12"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The magic of a two-year waitlist",
      "url": "https://seths.blog/2026/08/the-magic-of-a-two-year-waitlist/",
      "date": "2026-08-12"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "从 Mozilla 孤儿到独立王国：起底 Rust 基金会如何“养大”一门产业级语言",
      "url": "https://tonybai.com/2026/08/12/rust-foundation-explained-governance-and-funding/",
      "date": "2026-08-11"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "系统调用、符号版本与数据结构演进：FreeBSD 如何处理兼容性",
      "url": "https://blog.delphij.net/posts/2026/08/binary-compatibility/",
      "date": "2026-08-12"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "热炸了",
      "url": "https://ezo.biz/Play_More/1567.html",
      "date": "2026-08-12"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Grok 4.6 宣稱站上第一梯隊？",
      "url": "https://blog.gslin.org/archives/2026/08/13/13147/grok-4-6-%e5%ae%a3%e7%a8%b1%e7%ab%99%e4%b8%8a%e7%ac%ac%e4%b8%80%e6%a2%af%e9%9a%8a%ef%bc%9f/",
      "date": "2026-08-12"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "比较",
      "url": "https://acevs.com/5163/",
      "date": "2026-08-12"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "朱镕基同志逝世",
      "url": "https://dujun.io/zhurongji-dies-in-beijing-at-age-98.html",
      "date": "2026-08-12"
    },
    {
      "name": "军",
      "year": "08",
      "title": "千帆离港，东海开渔",
      "url": "https://me.xu19.com/thousands-of-fishing-vessels-depart-as-wenlings-fishing-moratorium-ends-marking-start-of-east-china-sea-fishing-season/",
      "date": "2026-08-12"
    }
  ],
  "2011": [
    {
      "name": "耳朵的主人",
      "year": "11",
      "title": "假日笔记：这个夏天，很快就过去了。",
      "url": "https://www.edzbe.com/book/diary/20260806.html",
      "date": "2026-08-11"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "下雨天，在家办公，适合反思 -20260812",
      "url": "https://guoxiaoli.com/post/672.html",
      "date": "2026-08-12"
    }
  ],
  "2017": [
    {
      "name": "染念",
      "year": "17",
      "title": "TAOT：让大规模 MoE 训练不再受限于“最慢的那张卡”",
      "url": "https://dyedd.cn/posts/taot-moe-speedup",
      "date": "2026-08-13"
    },
    {
      "name": "染念",
      "year": "17",
      "title": "TAOT：让大规模 MoE 训练不再受限于“最慢的那张卡”",
      "url": "https://dyedd.cn/posts/taot-moe-speedup",
      "date": "2026-08-13"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "做外贸一定要做独立站！",
      "url": "https://www.ccgxk.com/codeother/842.html",
      "date": "2026-08-12"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "今日撸猫 不会抓老鼠的猫",
      "url": "https://9sb.net/archives/todays-cat-wont-catch-mice.html",
      "date": "2026-08-12"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-12",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-12",
      "date": "2026-08-12"
    },
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "说说：#2026-08-12 17:46",
      "url": "https://www.mmbkz.cn/e66dd4e6.html",
      "date": "2026-08-12"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "朱镕基同志逝世",
      "url": "https://lb5.net/263.html",
      "date": "2026-08-12"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "旅游特种兵的一天",
      "url": "https://ygz.ink/archives/5647.html",
      "date": "2026-08-12"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "恐怖的完美",
      "url": "https://www.immarcus.com/blog/scary-perfection",
      "date": "2026-08-12"
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
