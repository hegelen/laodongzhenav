// ==================== latest-articles.js ====================
// 抓取日期: 7/21/2026, 8:30:45 PM
// 只抓取最近14天内的文章，共 19 篇
// 目标 20 篇，实际 19 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The Having/Doing job gap",
      "url": "https://seths.blog/2026/07/the-having-doing-job-gap/",
      "date": "2026-07-21"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Loop Engineering才火两个月，硅谷已经卷出“Graph Engineering”了",
      "url": "https://tonybai.com/2026/07/21/from-loop-engineering-to-graph-engineering/",
      "date": "2026-07-20"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "电驴增加nfc模块",
      "url": "https://acevs.com/5117/",
      "date": "2026-07-21"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "通过.hk域名看当今两地互联网",
      "url": "http://www.auiou.com/relevant/00002171.jsp",
      "date": "2026-07-20"
    }
  ],
  "2006": [
    {
      "name": "郑永",
      "year": "06",
      "title": "阿根廷输了决赛，但信仰没有输",
      "url": "https://xptt.com/657744.html",
      "date": "2026-07-21"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "2026 徽章猎人【年度猎王】奖杯效果图正式出炉",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1263",
      "date": "2026-07-21"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "灵栖洞仙琢奇石，葫芦峡浪卷飞舟",
      "url": "https://dujun.io/df99df0b-8df0-5f0b-914c-f2b7cf7c08ba.html",
      "date": "2026-07-21"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐",
      "url": "https://www.linyufan.com/post/5914",
      "date": "2026-07-21"
    }
  ],
  "2014": [
    {
      "name": "松茸",
      "year": "14",
      "title": "给车子换了一对冰蓝色示宽灯",
      "url": "https://songr.cn/2163.html",
      "date": "2026-07-21"
    },
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "Filebase 免费S3对象存储，免费5G空间，月5G流量，无需绑卡",
      "url": "https://www.dujin.org/23768.html",
      "date": "2026-07-21"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "注意！程序员不要使用 设计模式 了！",
      "url": "https://www.ccgxk.com/emlog_dev/815.html",
      "date": "2026-07-21"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "凌晨十二点的工作群",
      "url": "https://blog.solazy.me/20260721/",
      "date": "2026-07-21"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "狗云弹性云6折码一个",
      "url": "https://www.dalao.net/thread-61353.htm",
      "date": "2026-07-21"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "四川地区室外太阳下温度超50度！",
      "url": "https://www.bufanz.com/20260721759.html",
      "date": "2026-07-21"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "断舍离",
      "url": "https://www.wsh233.cn/post/断舍离",
      "date": "2026-07-21"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-21",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-21",
      "date": "2026-07-21"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "WordPress 7.0.2 版本维护和安全更新，修正了一些安全问题",
      "url": "https://www.bailuze.com/25646.html",
      "date": "2026-07-21"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "我收到了 Mozilla Monitor 的泄露警报，你的邮箱可能也一样",
      "url": "https://xingwangzhe.fun/posts/mozilla-monitor-check/",
      "date": "2026-07-21"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "现金管理账户",
      "url": "https://www.immarcus.com/blog/cash-management-account",
      "date": "2026-07-21"
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
