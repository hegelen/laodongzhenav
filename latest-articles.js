// ==================== latest-articles.js ====================
// 抓取日期: 9/18/2026, 9:40:21 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "今日十五分钟，好像又退化回去了…",
      "url": "https://wlj.me/notes/sp-note-20260918-222727/",
      "date": "2026-09-18"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "A series of bad decisions",
      "url": "https://seths.blog/2026/09/a-series-of-bad-decisions/",
      "date": "2026-09-18"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "赶工",
      "url": "https://ezo.biz/Diary/1681.html",
      "date": "2026-09-18"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "http和https",
      "url": "http://www.xlanda.net/posts/22477",
      "date": "2026-09-18"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "Nice Try",
      "url": "https://blog.delphij.net/posts/2026/09/nicetry/",
      "date": "2026-09-18"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "英伟达亲自下场：CUDA 原生支持 Rust 了！但“纯 Rust AI 技术栈”，还差一堵墙",
      "url": "https://tonybai.com/2026/09/18/nvidia-cuda-native-rust-pure-rust-ai-stack/",
      "date": "2026-09-17"
    }
  ],
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "Caves of Qud 初体验",
      "url": "https://blog.codingnow.com/2026/09/caves_of_qud.html",
      "date": "2026-09-18"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026-09-18",
      "url": "https://acevs.com/5239/",
      "date": "2026-09-18"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "个站二十年",
      "url": "https://ltmltm.cn/bk/1493.html",
      "date": "2026-09-18"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "多读何绍基的书法，对提升颜体临摹水平有很大好处",
      "url": "https://yufm.com/662384.html",
      "date": "2026-09-18"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "Al Brooks：10 个最佳价格行为交易形态（全解析与中文图解）",
      "url": "https://blog.forecho.com/10-best-price-action-trading-patterns.html",
      "date": "2026-09-18"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "蒸花卷，包饺子",
      "url": "https://www.linyufan.com/post/6029",
      "date": "2026-09-18"
    }
  ],
  "2015": [
    {
      "name": "elmagnifico",
      "year": "15",
      "title": "Origin、Grok Bot体验与Gantry（Courier）",
      "url": "https://elmagnifico.tech/2026/09/19/Cursor-Origin-GrokBot/",
      "date": "2026-09-18"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "记一次闪购免单",
      "url": "https://www.imcry.vip/post/2026-9-18-1557/",
      "date": "2026-09-18"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-18",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-18",
      "date": "2026-09-18"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO友好URL结构的11个最佳实践",
      "url": "https://www.bailuze.com/24430.html",
      "date": "2026-09-18"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "侠探杰克第四季",
      "url": "https://jefftay.com/movies/reacher-season-4",
      "date": "2026-09-19"
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "文化视角看世界（三）：从日本动漫的演化看社会与文化的变迁",
      "url": "https://blog.tangwudi.com/technology/cognition14713/",
      "date": "2026-09-18"
    },
    {
      "name": "Shiina",
      "year": "23",
      "title": "2026年chez.com免费空间指南",
      "url": "https://blog.shiina.fun/2026/09/18/2026%e5%b9%b4chez-com%e5%85%8d%e8%b4%b9%e7%a9%ba%e9%97%b4%e6%8c%87%e5%8d%97/",
      "date": "2026-09-18"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "印度—阿拉伯",
      "url": "https://www.immarcus.com/blog/hindu-arabic",
      "date": "2026-09-18"
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
