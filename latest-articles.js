// ==================== latest-articles.js ====================
// 抓取日期: 9/25/2026, 10:17:20 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "纸笔亦可画画快乐很简单",
      "url": "https://wlj.me/notes/sp-note-20260925-073458/",
      "date": "2026-09-24"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "KnotChat: Jennifer Myers Chua",
      "url": "https://seths.blog/2026/09/knotchat-jennifer-myers-chua/",
      "date": "2026-09-25"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "中秋",
      "url": "https://ezo.biz/movies/1701.html",
      "date": "2026-09-25"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "一个人、3个月、83万行代码：GitHub用Copilot把自己的运行时重写成了Rust",
      "url": "https://tonybai.com/2026/09/25/github-copilot-runtime-rust-rewrite-agent-coding/",
      "date": "2026-09-24"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "又到中秋节",
      "url": "http://www.xlanda.net/posts/22493",
      "date": "2026-09-25"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "深渊号角海盗第一关通关",
      "url": "https://acevs.com/5254/",
      "date": "2026-09-25"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "什么是潮玩 - 读《因为独特:泡泡玛特创始人王宁访谈录》",
      "url": "https://blog.devtang.com/2026/09/25/what-is-pop-mart/",
      "date": "2026-09-25"
    }
  ],
  "2013": [
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "正式更名《雾起时》暨中秋快乐~",
      "url": "https://wuqishi.com/archives/Officially-renamed-and-Happy-Mid-Autumn-Festival",
      "date": "2026-09-25"
    },
    {
      "name": "Jonty",
      "year": "13",
      "title": "小米BE7000路由器dns重写",
      "url": "https://nobb.cc/archives/3759.html",
      "date": "2026-09-25"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "凌晨6点的审核记录，过节加班的打工牛马",
      "url": "https://www.linyufan.com/post/6049",
      "date": "2026-09-25"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "클라우드웨이즈 IP 모니터링으로 의심 IP 식별하여 차단하는 방법",
      "url": "https://www.thewordcracker.com/blog/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ec%9b%a8%ec%9d%b4%ec%a6%88-ip-%eb%aa%a8%eb%8b%88%ed%84%b0%eb%a7%81-%ec%9d%98%ec%8b%ac-ip-%ec%8b%9d%eb%b3%84/",
      "date": "2026-09-25"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "使用 opus 5.5 AI 开发的画质巨高的唯美划船游戏！",
      "url": "https://www.ccgxk.com/895.html",
      "date": "2026-09-25"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "中秋快乐",
      "url": "https://blog.solazy.me/20260925/",
      "date": "2026-09-25"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "赶在月轮升起前",
      "url": "https://www.imcry.vip/post/2026-9-25-2210/",
      "date": "2026-09-25"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-25",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-25",
      "date": "2026-09-25"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "中秋值班到中午溜号，还是没赶上家里那顿热饭",
      "url": "https://9sb.net/archives/i-was-on-duty-until-noon-during-the-mid-autumn-festival-and-missed-the-hot-meal-at-home.html",
      "date": "2026-09-25"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "AI时代观察（一）：通才，不再只是天才的特权",
      "url": "https://blog.tangwudi.com/technology/cognition14722/",
      "date": "2026-09-25"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "日见",
      "url": "https://siwei.li/why-build-dayveil/",
      "date": "2026-09-25"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "明月几时有：月相的知识",
      "url": "https://xingwangzhe.fun/posts/moon-phase-mid-autumn/",
      "date": "2026-09-25"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "非弹性沟通",
      "url": "https://www.immarcus.com/blog/non-elastic-communication",
      "date": "2026-09-25"
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
