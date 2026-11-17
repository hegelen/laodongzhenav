// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-17 02:28:10
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Practical empathy",
      "url": "https://seths.blog/2026/11/practical-empathy/",
      "date": "2026-11-16"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：丹道修行快速入门的一招，对养生也有奇效",
      "url": "https://www.ufoer.com/post/14770.html",
      "date": "2026-11-16"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Rust 本想消灭 40 年技术债，AI 却造出了新债",
      "url": "https://tonybai.com/2026/11/17/rust-ai-borrow-checker-appeasement-debt/",
      "date": "2026-11-16"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "茶馆/第三幕",
      "url": "https://blog.delphij.net/posts/2026/11/chaguan-03/",
      "date": "2026-11-16"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年11月16日",
      "url": "https://acevs.com/5369/",
      "date": "2026-11-16"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "大約兩個禮拜 MyRocks 的過程",
      "url": "https://blog.gslin.org/archives/2026/11/17/13372/%e5%a4%a7%e7%b4%84%e5%85%a9%e5%80%8b%e7%a6%ae%e6%8b%9c-myrocks-%e7%9a%84%e9%81%8e%e7%a8%8b/",
      "date": "2026-11-17"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "断网",
      "url": "https://ltmltm.cn/bk/1516.html",
      "date": "2026-11-16"
    },
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "今天不想讲道理",
      "url": "https://www.seis-jun.xyz/blog/2026-11-16-donot-want-to-be-reasonable-today.html",
      "date": "2026-11-16"
    }
  ],
  "2007": [
    {
      "name": "老杨",
      "year": "07",
      "title": "再见了，双十一",
      "url": "https://yangyq.net/2026/11/goodbye-singles-day.html",
      "date": "2026-11-16"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "将暖气改造成恒温",
      "url": "https://www.leitao.cn/11602.html",
      "date": "2026-11-16"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "爷爷去世第四天，唢呐真不是随便听的",
      "url": "https://www.linyufan.com/post/6144",
      "date": "2026-11-16"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "种植牙太恐怖，一定要爱惜自己的牙齿",
      "url": "https://zhoutian.com/400.html",
      "date": "2026-11-16"
    }
  ],
  "2016": [
    {
      "name": "ximi",
      "year": "16",
      "title": "极简纯前端图片压缩工具",
      "url": "https://www.ximi.me/post-6048.html",
      "date": "2026-11-16"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "AI漫剧初试手",
      "url": "https://liuqingwushui.top/archives/208/",
      "date": "2026-11-16"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "Bear Blog 的新 API  / A new Bear Blog API",
      "url": "https://blog.solazy.me/bearblog-api-open-source-skill/",
      "date": "2026-11-16"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-16：Rakazo、Frevana Multiplayer、Tulvo",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-16",
      "date": "2026-11-16"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "又拍云暴雷了！",
      "url": "https://xiangming.site/1183.html",
      "date": "2026-11-16"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "网站如何快速提升流量？",
      "url": "https://www.bailuze.com/24602.html",
      "date": "2026-11-17"
    },
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "无用命途：我的小说卡文了",
      "url": "https://blog.mfwt.top/index.php/archives/1748/",
      "date": "2026-11-16"
    },
    {
      "name": "兔哥",
      "year": "23",
      "title": "新 Apple TV 内存翻了一倍，应用和游戏却用不上",
      "url": "https://uuzi.net/new-apple-tv-ram-limit/",
      "date": "2026-11-16"
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
