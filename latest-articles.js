// ==================== latest-articles.js ====================
// 抓取日期: 6/21/2026, 8:35:51 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "“In its larval state”",
      "url": "https://seths.blog/2026/06/in-its-larval-state/",
      "date": "2026-06-21"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "乐器上手难易度ai建议",
      "url": "https://acevs.com/5052/",
      "date": "2026-06-21"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Linux 上的 Restartable Sequences",
      "url": "https://blog.gslin.org/archives/2026/06/21/13078/linux-%e4%b8%8a%e7%9a%84-restartable-sequences/",
      "date": "2026-06-21"
    }
  ],
  "2008": [
    {
      "name": "河马",
      "year": "08",
      "title": "检查程序是否PHP 8 compatible",
      "url": "https://www.iamhippo.com/2026-06/1992.html",
      "date": "2026-06-21"
    }
  ],
  "2009": [
    {
      "name": "1900的灯泡店",
      "year": "09",
      "title": "286、夏至",
      "url": "https://1900.live/286-xia-zhi/",
      "date": "2026-06-21"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "富途、老虎之后，大陆用户还能怎么买美股：我会试试 Bitget 美股代币",
      "url": "https://blog.forecho.com/buy-us-stocks-with-usdt-bitget-stock-tokens.html",
      "date": "2026-06-21"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "第三章 看不见的手与看得见的贫困：古典政治经济学的展开与分裂",
      "url": "https://www.leitao.cn/10374.html",
      "date": "2026-06-21"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我开发的“林羽凡笔记”中的语音Agent全部功能完成了",
      "url": "https://www.linyufan.com/post/5862",
      "date": "2026-06-21"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "microgpt 解析",
      "url": "https://izualzhy.cn/karpathy-microgpt-analysis",
      "date": "2026-06-21"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "国家缺钱了，应该谁来买单？",
      "url": "https://wangyurui.com/posts/sang-hong-yang-zhi-wen-1b2efb8e",
      "date": "2026-06-21"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "超惊艳的 3D 开放世界浏览器游戏 LAAS ，全程 Claude Fable 5 无干预开发",
      "url": "https://www.ccgxk.com/front-end/785.html",
      "date": "2026-06-21"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "「安康警察」和「逆风警察」",
      "url": "https://blog.solazy.me/20260621/",
      "date": "2026-06-21"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "“简笔记”的作者，一位行为艺术家",
      "url": "https://www.imcry.vip/post/2026-6-21-1139/",
      "date": "2026-06-21"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-21",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-21",
      "date": "2026-06-21"
    },
    {
      "name": "Robes",
      "year": "21",
      "title": "一款液态玻璃风格Typecho主题",
      "url": "https://robes.xin/1180.html",
      "date": "2026-06-21"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "观天龙八部1",
      "url": "https://www.wsh233.cn/post/观天龙八部1",
      "date": "2026-06-21"
    }
  ],
  "2022": [
    {
      "name": "VeryJack",
      "year": "22",
      "title": "我做了一个免费的在线图片压缩工具——VeryPixel",
      "url": "https://veryjack.com/technique/verypixel/",
      "date": "2026-06-21"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "如何验证对方是不是Chongxi我本人",
      "url": "https://xice.cx/posts/VerifyChongxi/",
      "date": "2026-06-21"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.06.21 博客阅读周记",
      "url": "https://www.immarcus.com/blog/weekly-20260621",
      "date": "2026-06-21"
    },
    {
      "name": "青萍",
      "year": "25",
      "title": "音频可视化：从波形到视频的三种实现路径",
      "url": "https://blog.lusyoe.com/article/audio-visualization-guide",
      "date": "2026-06-21"
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
