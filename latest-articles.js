// ==================== latest-articles.js ====================
// 抓取日期: 8/26/2026, 9:50:04 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Hiding out",
      "url": "https://seths.blog/2026/08/hiding-out-in-higher-ed/",
      "date": "2026-08-26"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "佳明绿豆芽的惊喜数据",
      "url": "http://www.xlanda.net/posts/22424",
      "date": "2026-08-26"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "撞鬼",
      "url": "https://ezo.biz/Diary/1619.html",
      "date": "2026-08-26"
    }
  ],
  "2006": [
    {
      "name": "傻猫",
      "year": "06",
      "title": "SaMDeditor V1.5 正式发布",
      "url": "https://www.samool.com/SaMDeditor.html",
      "date": "2026-08-26"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "从引号后面空格太大谈字体回退机制",
      "url": "https://www.biaodianfu.com/font-fallback/",
      "date": "2026-08-26"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "配匙糟心经历",
      "url": "https://zhou.ge/2026-08-26.html",
      "date": "2026-08-26"
    }
  ],
  "2011": [
    {
      "name": "Be For Web",
      "year": "11",
      "title": "我要做些什么吧",
      "url": "http://beforweb.com/node/1152",
      "date": "2026-08-26"
    },
    {
      "name": "forecho",
      "year": "11",
      "title": "玩了 1 年半 Prop Firm，我才搞懂考试号和出金号的玩法",
      "url": "https://blog.forecho.com/prop-firm-evaluation-and-funded-account-strategy.html",
      "date": "2026-08-26"
    },
    {
      "name": "灵尘居",
      "year": "11",
      "title": "邮储银行的鼎雅白金信用卡有哪些权益",
      "url": "https://lingchenzi.com/2026/08/9437.html",
      "date": "2026-08-26"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.8.26",
      "url": "https://www.linyufan.com/post/5972",
      "date": "2026-08-26"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "出纳一日体验",
      "url": "https://shitao5.org/posts/cashier-day-experience/",
      "date": "2026-08-26"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "足迹板块，上新预告",
      "url": "https://liuqingwushui.top/archives/190/",
      "date": "2026-08-26"
    },
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "用 AI 开发自己的 WordPress 主题：从零开始的实战教程",
      "url": "https://blog.naibabiji.com/tutorial/ai-developed-wordpress-theme.html",
      "date": "2026-08-26"
    },
    {
      "name": "Zeruns",
      "year": "19",
      "title": "维简W96Pro小风扇测评与拆解分析",
      "url": "https://blog.zeruns.com/archives/954.html",
      "date": "2026-08-26"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "夢幻時刻",
      "url": "https://blog.giveanornot.com/peak-expirience/",
      "date": "2026-08-26"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "农历七月十四的生日歌",
      "url": "https://www.imcry.vip/post/2026-8-26-2351/",
      "date": "2026-08-26"
    }
  ],
  "2021": [
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "吓醒儿子的噩梦",
      "url": "https://www.ddf.im/index.php/2026/08/26/1264.html",
      "date": "2026-08-26"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "中元节随笔",
      "url": "https://blog.mfwt.top/index.php/archives/1556/",
      "date": "2026-08-26"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "构建大规模有效SEO的最佳实践",
      "url": "https://www.bailuze.com/24376.html",
      "date": "2026-08-26"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "纪录片《开盘》",
      "url": "https://www.immarcus.com/blog/documentary-launch",
      "date": "2026-08-26"
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
