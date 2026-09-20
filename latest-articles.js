// ==================== latest-articles.js ====================
// 抓取日期: 9/20/2026, 9:25:10 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "今天有点困，非常草率的十分钟",
      "url": "https://wlj.me/notes/sp-note-20260920-232941/",
      "date": "2026-09-20"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Upside/downside",
      "url": "https://seths.blog/2026/09/think-big-think-small/",
      "date": "2026-09-20"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Jev刚发布就封神？一位独立研究员在HN开怼：这套「非自回归决策模型」，我一年前就做出来了",
      "url": "https://tonybai.com/2026/09/20/jev-laya-non-autoregressive-decision-model-priority-dispute/",
      "date": "2026-09-20"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "广州超市的潮起潮落",
      "url": "http://www.xlanda.net/posts/22482",
      "date": "2026-09-20"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "升级OC1.0.7失败",
      "url": "https://ezo.biz/Play_More/OC1-0-7.html",
      "date": "2026-09-20"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "健康维护(1)：为什么晚上睡觉时会肚子疼？",
      "url": "http://www.auiou.com/relevant/00002200.jsp",
      "date": "2026-09-20"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "手机可以模拟不少电脑上的游戏了",
      "url": "https://acevs.com/5244/",
      "date": "2026-09-20"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "HEIF 的 RCE",
      "url": "https://blog.gslin.org/archives/2026/09/20/13215/heif-%e7%9a%84-rce/",
      "date": "2026-09-20"
    }
  ],
  "2012": [
    {
      "name": "把酒诗代码",
      "year": "12",
      "title": "五仁月饼🥮",
      "url": "https://102no.com/2026/09/20/wu-ren-yue-bing/",
      "date": "2026-09-20"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "全球 AI 简报启用新域名RSS.bz，同时新增AI日报和Codex重置信号",
      "url": "https://blog.xiaoz.org/archives/23498",
      "date": "2026-09-20"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 애드센스 승인 상태 '검토 필요' 해결 방법",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ec%95%a0%eb%93%9c%ec%84%bc%ec%8a%a4-%ea%b2%80%ed%86%a0-%ed%95%84%ec%9a%94-%ed%95%b4%ea%b2%b0-%eb%b0%a9%eb%b2%95/",
      "date": "2026-09-20"
    }
  ],
  "2016": [
    {
      "name": "woodu",
      "year": "16",
      "title": "我和 AI 一起迁移一个十九年前的论坛：半年时间，从\"生成代码\"到\"验证行为\"",
      "url": "https://woodu.me/wohe-ai-yiqiqianai/",
      "date": "2026-09-20"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "虚无",
      "url": "https://www.suiyan.cc/blog/20260920210343",
      "date": "2026-09-20"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "番茄短故事的签约",
      "url": "https://liuqingwushui.top/archives/197/",
      "date": "2026-09-20"
    },
    {
      "name": "Zeruns",
      "year": "19",
      "title": "莱卡云 新加坡VPS 测评，2核4G 1000兆 仅需100元/月",
      "url": "https://blog.zeruns.com/archives/959.html",
      "date": "2026-09-20"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "Domain Backorder & Drop Catching Platforms: TLD Support List",
      "url": "https://heming.org/2843.html",
      "date": "2026-09-20"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-20",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-20",
      "date": "2026-09-20"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "博客接入 Google AdSense：初体验并不好",
      "url": "https://blog.mfwt.top/index.php/archives/1617/",
      "date": "2026-09-20"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "麦当劳兼职两个月，离职后我去江苏逛吃了几天",
      "url": "https://t-t.live/archives/JsWmqT4R",
      "date": "2026-09-19"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.09.20 博客阅读周荐 - 崔话记",
      "url": "https://www.immarcus.com/blog/weekly-20260920",
      "date": "2026-09-20"
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
