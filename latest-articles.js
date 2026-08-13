// ==================== latest-articles.js ====================
// 抓取日期: 8/13/2026, 8:05:40 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "谷歌翻译情景练习功能体验",
      "url": "https://wlj.me/notes/sp-note-20260813-212016/",
      "date": "2026-08-13"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Beating yourself up",
      "url": "https://seths.blog/2026/08/beating-yourself-up-2/",
      "date": "2026-08-13"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "漂亮数据，呵呵呵",
      "url": "http://www.xlanda.net/posts/22396",
      "date": "2026-08-13"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "入手VIVO X300",
      "url": "https://ezo.biz/Diary/VIVO-X300.html",
      "date": "2026-08-13"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "uBlock Origin 的社群停止維護阻擋 Facebook 廣告的工作",
      "url": "https://blog.gslin.org/archives/2026/08/14/13151/ublock-origin-%e7%9a%84%e7%a4%be%e7%be%a4%e5%81%9c%e6%ad%a2%e7%b6%ad%e8%ad%b7%e9%98%bb%e6%93%8b-facebook-%e5%bb%a3%e5%91%8a%e7%9a%84%e5%b7%a5%e4%bd%9c/",
      "date": "2026-08-13"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "空调关闭",
      "url": "https://acevs.com/5165/",
      "date": "2026-08-13"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "真玄学心得(24)：心路历程",
      "url": "http://www.auiou.com/relevant/00002181.jsp",
      "date": "2026-08-13"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "夏令营",
      "url": "https://ltmltm.cn/bk/1489.html",
      "date": "2026-08-13"
    }
  ],
  "2010": [
    {
      "name": "Jeray",
      "year": "10",
      "title": "勇闯九峰，你比十峰少一峰",
      "url": "https://hi.jeray.wang/L/225.html",
      "date": "2026-08-13"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "读书 斯瓦米·拉玛《静心之巅》-20260813",
      "url": "https://guoxiaoli.com/post/673.html",
      "date": "2026-08-13"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "这次是真的炸锅了，又一次看他人视频上当的记录",
      "url": "https://www.linyufan.com/post/5950",
      "date": "2026-08-13"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "WorkBuddy 一周体验：目前最适合普通人的本地办公 Agent 工具",
      "url": "https://www.tjsky.net/ai/1765",
      "date": "2026-08-13"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "博客阅读随感20260813",
      "url": "https://www.suiyan.cc/blog/20260813182508",
      "date": "2026-08-13"
    },
    {
      "name": "染念",
      "year": "17",
      "title": "TAOT：让大规模 MoE 训练不再受限于“最慢的那张卡”",
      "url": "https://dyedd.cn/posts/taot-moe-speedup",
      "date": "2026-08-13"
    }
  ],
  "2019": [
    {
      "name": "呢喃",
      "year": "19",
      "title": "欢迎使用 Typecho",
      "url": "https://ninan.me/life/start.html",
      "date": "2026-08-13"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "与“礼让”我的司机深情对视",
      "url": "https://www.imcry.vip/post/2026-8-13-2120/",
      "date": "2026-08-13"
    }
  ],
  "2021": [
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "说说：夏日小记（2026.8）",
      "url": "https://www.mmbkz.cn/55aff070.html",
      "date": "2026-08-13"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-13",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-13",
      "date": "2026-08-13"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "做了音乐网站，笔墨迹博友可以免费使用。",
      "url": "https://xiangming.site/1144.html",
      "date": "2026-08-13"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "1945 年之后绝版的钢材",
      "url": "https://www.immarcus.com/blog/low-background-steel",
      "date": "2026-08-13"
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
