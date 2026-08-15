// ==================== latest-articles.js ====================
// 抓取日期: 8/15/2026, 7:30:27 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Short term dumb, long term smart",
      "url": "https://seths.blog/2026/08/short-term-dumb-long-term-smart/",
      "date": "2026-08-15"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "1998，游戏厅外的世界",
      "url": "https://www.tortorse.com/archives/the-world-outside-the-arcade-1998/",
      "date": "2026-08-15"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "奥数，好玩",
      "url": "http://www.xlanda.net/posts/22400",
      "date": "2026-08-15"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Rust重写运动，到底是真香还是被吹爆？",
      "url": "https://tonybai.com/2026/08/15/rust-rewrite-blazingly-fast-or-hyped-rustikon-2026/",
      "date": "2026-08-14"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "朋友来赶海",
      "url": "https://acevs.com/5169/",
      "date": "2026-08-15"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "我的混账人生（九）：吐口水",
      "url": "https://bwskyer.com/my-messed-up-life-9.html",
      "date": "2026-08-15"
    },
    {
      "name": "军",
      "year": "08",
      "title": "女儿的暑假作业多到离谱",
      "url": "https://me.xu19.com/excessive-summer-homework-for-chinese-fourth-grade-students/",
      "date": "2026-08-15"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "为什么 AI 时代提问的杠杆被放大？",
      "url": "https://www.biaodianfu.com/ai-data-analysis/",
      "date": "2026-08-15"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "运动",
      "url": "https://www.iliu.org/yundong/",
      "date": "2026-08-15"
    }
  ],
  "2010": [
    {
      "name": "宇间草",
      "year": "10",
      "title": "八十一年的回声：那一声“投降”之后，我们走了多远",
      "url": "https://2days.org/92.html",
      "date": "2026-08-15"
    },
    {
      "name": "雅余",
      "year": "10",
      "title": "忙碌夏日",
      "url": "https://yayu.net/6237.html",
      "date": "2026-08-15"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.8.15-我终于突破94kg了",
      "url": "https://www.linyufan.com/post/5953",
      "date": "2026-08-15"
    }
  ],
  "2017": [
    {
      "name": "arun",
      "year": "17",
      "title": "Do you want to go for a ride?",
      "url": "https://arun.is/blog/do-you-want-to-go-for-a-ride/",
      "date": "2026-08-15"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "最适合大学生的副业，Web 出海，没有之一！！！",
      "url": "https://www.ccgxk.com/codeother/845.html",
      "date": "2026-08-15"
    }
  ],
  "2018": [
    {
      "name": "游钓四方",
      "year": "18",
      "title": "聊聊郭刚",
      "url": "https://blog.lhasa.icu/posts/life/2026-08-15-cultural-revolution-2/",
      "date": "2026-08-15"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-06-29 / 中猫危机",
      "url": "https://blog.xinshijiededa.men/daily/64/",
      "date": "2026-08-15"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "15元买的爱国者有线耳机居然有HiFi，音质比296元的vivo蓝牙耳机好太多了",
      "url": "https://www.bufanz.com/20260815805.html",
      "date": "2026-08-15"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "对用户“花百万”封禁说明以及论坛 私信功能 新增限制",
      "url": "https://www.dalao.net/thread-62510.htm",
      "date": "2026-08-14"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-15",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-15",
      "date": "2026-08-15"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "Hyper-tapping",
      "url": "https://www.immarcus.com/blog/hyper-tapping",
      "date": "2026-08-15"
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
