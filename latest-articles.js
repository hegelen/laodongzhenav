// ==================== latest-articles.js ====================
// 抓取日期: 8/25/2026, 7:44:19 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "随机涂鸦丑化陌生姑娘",
      "url": "https://wlj.me/notes/sp-note-20260825-232900/",
      "date": "2026-08-25"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "On the verge of done",
      "url": "https://seths.blog/2026/08/on-the-verge-of-done/",
      "date": "2026-08-25"
    }
  ],
  "2004": [
    {
      "name": "Jake",
      "year": "04",
      "title": "从一次模型调用到生产治理：OwlVigil Go SDK 实战",
      "url": "https://jaketao.com/owlvigil-sdk-practices",
      "date": "2026-08-25"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "刚被 SpaceX 收购，Cursor 就推出自研 Git 托管硬刚 GitHub，Shopify CEO 一周末就把它复刻了",
      "url": "https://tonybai.com/2026/08/25/cursor-continuity-git-walgit-spacex/",
      "date": "2026-08-24"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "二手佳明绿豆芽到手",
      "url": "http://www.xlanda.net/posts/22422",
      "date": "2026-08-25"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年8月25日",
      "url": "https://acevs.com/5189/",
      "date": "2026-08-25"
    }
  ],
  "2006": [
    {
      "name": "傻猫",
      "year": "06",
      "title": "Apache Maka：一个面向真实工作的、本地优先的 AI Agent 工作空间 ",
      "url": "https://www.samool.com/52703.html",
      "date": "2026-08-25"
    }
  ],
  "2007": [
    {
      "name": "无标题文档",
      "year": "07",
      "title": "解决 macOS 下 iPhone 镜像反复连接失败的问题",
      "url": "https://www.gracecode.com/posts/3209.html",
      "date": "2026-08-25"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "在家自制能辣哭小朋友的麻辣片",
      "url": "https://www.linyufan.com/post/5971",
      "date": "2026-08-25"
    },
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "Ingress 流量整形",
      "url": "https://www.kawabangga.com/posts/7376",
      "date": "2026-08-25"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "WorkBuddy混元Hy3月底限免结束，用GLM送的2亿Token平替",
      "url": "https://www.dujin.org/23823.html",
      "date": "2026-08-25"
    },
    {
      "name": "很少明白",
      "year": "14",
      "title": "2026-08-25",
      "url": "https://p0werdown.com/posts/some-recent-musings-2026-08-25",
      "date": "2026-08-25"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "순수익 100억을 달성한 알파남 신간: 『온라인 건물주의 정석 기본편』 소개",
      "url": "https://www.thewordcracker.com/blog/%ec%8b%a0%ea%b0%84-%ec%98%a8%eb%9d%bc%ec%9d%b8-%ea%b1%b4%eb%ac%bc%ec%a3%bc%ec%9d%98-%ec%a0%95%ec%84%9d-%ea%b8%b0%eb%b3%b8%ed%8e%b8-%ec%86%8c%ea%b0%9c/",
      "date": "2026-08-25"
    }
  ],
  "2019": [
    {
      "name": "herman",
      "year": "19",
      "title": "Extending life perception",
      "url": "https://herman.bearblog.dev/extending-life-perception/",
      "date": "2026-08-25"
    },
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "小区里的流浪猫",
      "url": "https://shitao5.org/posts/stray-cats-in-the-neighborhood/",
      "date": "2026-08-25"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "菜鸟裹裹“特惠寄”便宜3块多，从四川到浙江运输了五天才送到",
      "url": "https://www.bufanz.com/20260825842.html",
      "date": "2026-08-25"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-25",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-25",
      "date": "2026-08-25"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "一次循环呼吸实验",
      "url": "https://www.wsh233.cn/post/一次循环呼吸实验",
      "date": "2026-08-25"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "什么是转化率？",
      "url": "https://www.bailuze.com/24374.html",
      "date": "2026-08-25"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "GPU 租赁指数期货",
      "url": "https://www.immarcus.com/blog/gpu-rental-index-futures",
      "date": "2026-08-25"
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
