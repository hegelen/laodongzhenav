// ==================== latest-articles.js ====================
// 抓取日期: 7/11/2026, 8:14:18 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "皮革城",
      "url": "https://synyan.cn/t/63192",
      "date": "2026-07-11"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "10倍速 TypeScript 7.0 正式发布，前Go产品经理：Go才是AI智能体时代的“天选语言”",
      "url": "https://tonybai.com/2026/07/11/typescript-compiler-rewritten-in-go-agentic-ai-language/",
      "date": "2026-07-10"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "一个NPD患者的自我救赎",
      "url": "https://ezo.biz/Cracker/NPD.html",
      "date": "2026-07-11"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "搓澡巾找到了",
      "url": "https://acevs.com/5095/",
      "date": "2026-07-11"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "脱离人生系统 一段时间后的感受",
      "url": "https://joojen.com/archives/9046.html",
      "date": "2026-07-11"
    },
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "7月11日，1995年斯雷布雷尼察灭绝种族罪国际反思和纪念日",
      "url": "https://www.munue.com/srebrenica-genocide-commemoration-day.html",
      "date": "2026-07-11"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "台风天",
      "url": "https://me.xu19.com/%e5%8f%b0%e9%a3%8e%e5%a4%a9/",
      "date": "2026-07-11"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "Hello, World!",
      "url": "https://www.kawabangga.com/posts/7336",
      "date": "2026-07-11"
    }
  ],
  "2015": [
    {
      "name": "胡东东",
      "year": "15",
      "title": "Android Studio安卓打包",
      "url": "https://blog.hudd.cn/1433.html",
      "date": "2026-07-11"
    }
  ],
  "2016": [
    {
      "name": "弹霄博科",
      "year": "16",
      "title": "记一次网络安全通报处理以及后续整改",
      "url": "https://www.txisfine.cn/archives/1dbed3d0.html",
      "date": "2026-07-11"
    },
    {
      "name": "宝玉",
      "year": "16",
      "title": "一文看懂ChatGPT、Codex、Work 的差别",
      "url": "https://baoyu.io/blog/chatgpt-work-codex-guide",
      "date": "2026-07-11"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之演示建站盈利和朋友 Reyn 的教训",
      "url": "https://www.ccgxk.com/codeother/805.html",
      "date": "2026-07-11"
    }
  ],
  "2019": [
    {
      "name": "LJF.COM",
      "year": "19",
      "title": "华杉讲透《孟子》---学习不是理解，是行动",
      "url": "https://ljf.com/2026/07/11/1547/",
      "date": "2026-07-11"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "早上醒来，知了在我身边睡觉",
      "url": "https://www.bufanz.com/20260711729.html",
      "date": "2026-07-11"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "那个夜晚",
      "url": "https://www.wsh233.cn/post/那个夜晚",
      "date": "2026-07-11"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-11",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-11",
      "date": "2026-07-11"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "演唱会高额手续费退款后续 戏剧化反转",
      "url": "https://jyblog.com/5852/",
      "date": "2026-07-11"
    }
  ],
  "2024": [
    {
      "name": "xgclevo",
      "year": "24",
      "title": "低功耗蓝牙中的数据交换",
      "url": "https://blog.xgclevo.top/posts/8d47f3f6/",
      "date": "2026-07-11"
    },
    {
      "name": "姓王者",
      "year": "24",
      "title": "后来-人们管这叫作魔法",
      "url": "https://xingwangzhe.fun/posts/later-they-called-it-magic/",
      "date": "2026-07-11"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "尼阿加拉大瀑布",
      "url": "https://www.immarcus.com/blog/niagara-falls",
      "date": "2026-07-11"
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
