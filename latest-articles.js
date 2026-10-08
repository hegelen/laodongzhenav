// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-08 23:46:20
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 414 期）：Jev 决策模型有什么用",
      "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-414.html",
      "date": "2026-10-08"
    },
    {
      "name": "王通",
      "year": "03",
      "title": "王通：美国MBA＋企业家圈子＋两年IP陪跑，胡伟的出海商学院",
      "url": "https://www.ufoer.com/post/14599.html",
      "date": "2026-10-08"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "我以为",
      "url": "https://ezo.biz/Diary/1730.html",
      "date": "2026-10-08"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Haiku 居然更新 5.5 了...",
      "url": "https://blog.gslin.org/archives/2026/10/08/13257/haiku-%e5%b1%85%e7%84%b6%e6%9b%b4%e6%96%b0-5-5-%e4%ba%86/",
      "date": "2026-10-08"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "永恒之塔2体验",
      "url": "https://acevs.com/5280/",
      "date": "2026-10-08"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "回写盘",
      "url": "https://ltmltm.cn/bk/1502.html",
      "date": "2026-10-08"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "国庆，回老家住两天！",
      "url": "https://laozhang.org/archives/4406.html",
      "date": "2026-10-08"
    },
    {
      "name": "1900的灯泡店",
      "year": "09",
      "title": "292、寒露",
      "url": "https://1900.live/292-han-lu/",
      "date": "2026-10-08"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.8",
      "url": "https://www.linyufan.com/post/6078",
      "date": "2026-10-08"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "我做了一个免费在线文本工具箱：不用注册，20 余款工具打开即用",
      "url": "https://blog.xiaoz.org/archives/23538",
      "date": "2026-10-08"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "네임칩(Namecheap)으로 닷컴 도메인 기관 이전",
      "url": "https://www.thewordcracker.com/blog/%eb%84%a4%ec%9e%84%ec%b9%a9namecheap%ec%9c%bc%eb%a1%9c-%eb%8b%b7%ec%bb%b4-%eb%8f%84%eb%a9%94%ec%9d%b8-%ea%b8%b0%ea%b4%80-%ec%9d%b4%ec%a0%84/",
      "date": "2026-10-08"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "想装电脑，但手不敢动",
      "url": "https://blog.52hyjs.com/post-1289.html",
      "date": "2026-10-08"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "碎碎谈 · 10月8日 11:50",
      "url": "https://www.tjsky.net/shuoshuo/bkx6a5guj3pu3gm4ggnbi7",
      "date": "2026-10-08"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "搞 IT 的也不要觉得搞实体的赛道差",
      "url": "https://www.ccgxk.com/codeother/911.html",
      "date": "2026-10-08"
    }
  ],
  "2019": [
    {
      "name": "呢喃",
      "year": "19",
      "title": "十年之约新版上线啦",
      "url": "https://ninan.me/gear/shinianzhiyue-gaiban-gonggao.html",
      "date": "2026-10-08"
    }
  ],
  "2020": [
    {
      "name": "yihong0618",
      "year": "20",
      "title": "来 DOTA",
      "url": "https://blog.yihong0618.me/posts/issue-348/",
      "date": "2026-10-08"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-10-08",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-08",
      "date": "2026-10-08"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "将Kindle电子书摘录同步到Memos",
      "url": "https://www.wsh233.cn/post/将kindle电子书摘录同步到memos",
      "date": "2026-10-08"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "侠女内莉第一季",
      "url": "https://jefftay.com/movies/neagley-season-1",
      "date": "2026-10-08"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "我的广告拦截折腾记录：AdGuard 订阅与自建 DNS",
      "url": "https://sheep5.net/archives/814/",
      "date": "2026-10-08"
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
