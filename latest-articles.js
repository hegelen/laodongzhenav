// ==================== latest-articles.js ====================
// 抓取日期: 6/7/2026, 4:26:29 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Real artists…",
      "url": "https://seths.blog/2026/06/real-artists/",
      "date": "2026-06-06"
    }
  ],
  "2005": [
    {
      "name": "yaner",
      "year": "05",
      "title": "wordpress数据导入blogger",
      "url": "https://yaner.cc/689.html",
      "date": "2026-06-07"
    }
  ],
  "2006": [
    {
      "name": "黄杰敏",
      "year": "06",
      "title": "高考二十载感怀",
      "url": "https://www.jiemin.com/archives/1830.html",
      "date": "2026-06-07"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "我不怀念天涯",
      "url": "https://dujun.io/f6c2bff5-b5f7-57f6-a33b-6ac61f457ffb.html",
      "date": "2026-06-06"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "大陆用户开美国期货账户，我会先选 AMP Futures",
      "url": "https://blog.forecho.com/open-us-futures-broker-from-china.html",
      "date": "2026-06-06"
    },
    {
      "name": "君子不器",
      "year": "11",
      "title": "2026年5月：不远行的假期，与一次告别",
      "url": "https://www.colinjiang.com/archives/may-holiday-and-farewell.html",
      "date": "2026-06-06"
    }
  ],
  "2012": [
    {
      "name": "MacTalk-池建强的随想录",
      "year": "12",
      "title": "谁说 ChatGTP 和 Codex 合体了？",
      "url": "https://macshuo.com/?p=2063",
      "date": "2026-06-06"
    }
  ],
  "2016": [
    {
      "name": "Keyle",
      "year": "16",
      "title": "凌晨一点的键盘声",
      "url": "https://vrast.cn/posts/17192/",
      "date": "2026-06-06"
    }
  ],
  "2017": [
    {
      "name": "zj",
      "year": "17",
      "title": "自己做饭",
      "url": "http://www.zjhuiwan.cn/info/20260606/5212122510171204.html",
      "date": "2026-06-06"
    },
    {
      "name": "SimonAKing",
      "year": "17",
      "title": "全体进化：SkillOpt 赢麻了 与 营销号的狂欢",
      "url": "https://simonaking.com/blog/skillopt-evolution/",
      "date": "2026-06-06"
    }
  ],
  "2019": [
    {
      "name": "沧海月明",
      "year": "19",
      "title": "AI 的焦虑",
      "url": "https://www.inlighting.org/archives/ai-anxiety",
      "date": "2026-06-06"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "不抽烟，不喝酒",
      "url": "https://blog.solazy.me/20260606/",
      "date": "2026-06-06"
    },
    {
      "name": "浪浪山下那个村",
      "year": "19",
      "title": "NVIDIA-OpenCode-免费模型使用指南",
      "url": "https://www.zeekling.cn/articles/2026/06/06/1780760812734.html",
      "date": "2026-06-06"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "牙齿治疗决策，还是想保住这颗牙",
      "url": "https://9sb.net/archives/dental-treatment-decision-do-you-still-want-to-preserve-this-tooth.html",
      "date": "2026-06-07"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-06",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-06",
      "date": "2026-06-06"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "各大AI使用感受",
      "url": "https://t-t.live/archives/DoLWW2Jo",
      "date": "2026-06-06"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "母语级英语的本质，不是英语",
      "url": "https://xice.cx/posts/English/",
      "date": "2026-06-06"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "母语级英语的本质，不是英语",
      "url": "https://xice.cx/posts/English/",
      "date": "2026-06-06"
    }
  ],
  "2025": [
    {
      "name": "青萍",
      "year": "25",
      "title": "2026精选5款热门AI配音软件",
      "url": "https://blog.lusyoe.com/article/2026-top-5-ai-voice-tools",
      "date": "2026-06-06"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "又是一年高考时｜愿你提笔从容，落笔无悔",
      "url": "https://zhouayuan.com/post/50.html",
      "date": "2026-06-07"
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
