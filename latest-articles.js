// ==================== latest-articles.js ====================
// 抓取日期: 7/4/2026, 8:17:54 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Freedom",
      "url": "https://seths.blog/2026/07/freedom/",
      "date": "2026-07-04"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "打开潘多拉宝盒",
      "url": "http://www.xlanda.net/posts/22307",
      "date": "2026-07-04"
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "漂亮的侧边返回顶部和底部代码",
      "url": "https://long.ge/18076.html",
      "date": "2026-07-04"
    }
  ],
  "2005": [
    {
      "name": "Lenciel",
      "year": "05",
      "title": "彩云易散",
      "url": "https://lenciel.com/2026/07/nothing-gold-can-stay/",
      "date": "2026-07-03"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "李慧老师新书《回望故乡三千里》",
      "url": "https://www.munue.com/804.html",
      "date": "2026-07-04"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "飞猪处理航班延误事件",
      "url": "https://me.xu19.com/third-party-air-ticketing-platform-fliggy-poorly-handled-flight-delay-incidents/",
      "date": "2026-07-04"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "日记本‌diary主题for Typecho",
      "url": "https://laozhang.org/archives/4211.html",
      "date": "2026-07-04"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "黑洞健身的进化 — AI 时代的一人 App",
      "url": "https://blog.devtang.com/2026/07/03/heidong-fitness-evolution/",
      "date": "2026-07-03"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我的第一条本地大模型生成的视频",
      "url": "https://www.linyufan.com/post/5879",
      "date": "2026-07-04"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "拖延确实很折磨人",
      "url": "https://www.suiyan.cc/blog/20260704183515",
      "date": "2026-07-04"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "程序员现在的最佳副业 ~ Web 出海",
      "url": "https://www.ccgxk.com/codeother/798.html",
      "date": "2026-07-04"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "周末流水账 0704",
      "url": "https://blog.solazy.me/20260704/",
      "date": "2026-07-04"
    }
  ],
  "2020": [
    {
      "name": "优世界",
      "year": "20",
      "title": "入手了智能手表 OPPO watch x3",
      "url": "https://usj.cc/20260704094325.html",
      "date": "2026-07-04"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-04",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-04",
      "date": "2026-07-04"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "野生菌",
      "url": "https://www.wsh233.cn/post/野生菌",
      "date": "2026-07-04"
    }
  ],
  "2023": [
    {
      "name": "小归客",
      "year": "23",
      "title": "测试",
      "url": "https://xgk.pw/archives/302/",
      "date": "2026-07-04"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "链接建设失效是什么意思，为什么它还能正常工作？",
      "url": "https://www.bailuze.com/24214.html",
      "date": "2026-07-04"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "2026年7月 黛西花园重游",
      "url": "https://siwei.li/2026nian-7yue-dai-xi-hua-yuan-zhong-you/",
      "date": "2026-07-04"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "第一次做学术 Poster——人工智能实训 Week2 的报告体验",
      "url": "https://xingwangzhe.fun/posts/ai-week2end-poster/",
      "date": "2026-07-04"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "内容的权威来源",
      "url": "https://www.immarcus.com/blog/authoritative-source-of-content",
      "date": "2026-07-04"
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
