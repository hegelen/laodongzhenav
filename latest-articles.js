// ==================== latest-articles.js ====================
// 抓取日期: 7/28/2026, 8:29:13 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The smush",
      "url": "https://seths.blog/2026/07/the-smush/",
      "date": "2026-07-28"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "上次说“没有靠谱的尺子”，这次 Dex Horthy 找到了一把——Opus 5 实测通过率只有 24%",
      "url": "https://tonybai.com/2026/07/28/why-software-factories-fail-part-3-slopcodebench-opus-5-benchmark/",
      "date": "2026-07-27"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "装上桌底抽屉",
      "url": "http://www.xlanda.net/posts/22361",
      "date": "2026-07-28"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "理发",
      "url": "https://ezo.biz/Diary/1516.html",
      "date": "2026-07-28"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "热的开空调了",
      "url": "https://acevs.com/5132/",
      "date": "2026-07-28"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "音乐保护：WordPress 音频文件保护插件",
      "url": "https://bwskyer.com/music-protector-wordpress-plugin.html",
      "date": "2026-07-28"
    },
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "第 34 届全国图书交易博览会小记",
      "url": "https://dujun.io/photos-from-the-34th-national-book-expo.html",
      "date": "2026-07-28"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "软件 || 图集规范管理软件-2.0正式上线了",
      "url": "https://www.yishu.pro/232.html",
      "date": "2026-07-28"
    }
  ],
  "2011": [
    {
      "name": "小癞子",
      "year": "11",
      "title": "Jersey机场应该是我去过最小的机场",
      "url": "https://justyy.com/archives/72264",
      "date": "2026-07-28"
    }
  ],
  "2012": [
    {
      "name": "把酒诗代码",
      "year": "12",
      "title": "家电维修🔧",
      "url": "https://102no.com/2026/07/28/jia-dian-wei-xiu/",
      "date": "2026-07-28"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "还在用老式 SSH 工具？Termark 新一代跨平台智能SSH客户端了解一下",
      "url": "https://blog.xiaoz.org/archives/23266",
      "date": "2026-07-28"
    }
  ],
  "2014": [
    {
      "name": "运营不加班",
      "year": "14",
      "title": "agent可观测--Langfuse阿里云自托管",
      "url": "https://nops.icu/archives/245/",
      "date": "2026-07-28"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "聊聊Riven主题后续",
      "url": "https://zhoutian.com/391.html",
      "date": "2026-07-28"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "程序员未来会不会大量失业？",
      "url": "https://www.ccgxk.com/codeother/824.html",
      "date": "2026-07-28"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "Token 焦虑",
      "url": "https://www.suiyan.cc/blog/20260728222050",
      "date": "2026-07-28"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "关于说话",
      "url": "https://shitao5.org/posts/on-speaking/",
      "date": "2026-07-28"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "一個小時",
      "url": "https://blog.giveanornot.com/an-hour/",
      "date": "2026-07-28"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "黄山掠影",
      "url": "https://www.wsh233.cn/post/黄山掠影",
      "date": "2026-07-27"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-28",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-28",
      "date": "2026-07-28"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "xkcd",
      "url": "https://www.immarcus.com/blog/xkcd",
      "date": "2026-07-28"
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
