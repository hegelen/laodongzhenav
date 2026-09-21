// ==================== latest-articles.js ====================
// 抓取日期: 9/21/2026, 10:38:15 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "KnotChat! (Simone Giertz and Chip Conley)",
      "url": "https://seths.blog/2026/09/knotchat-simone-giertz-and-chip-conley/",
      "date": "2026-09-21"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "维权事件",
      "url": "https://ezo.biz/Diary/1687.html",
      "date": "2026-09-21"
    },
    {
      "name": "Jake",
      "year": "04",
      "title": "首token延迟-大模型多久才开始回答",
      "url": "https://jaketao.com/time-to-first-token-ai-models",
      "date": "2026-09-21"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "学习英雄无敌3玩法",
      "url": "https://acevs.com/5246/",
      "date": "2026-09-21"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Fable 5 品質下降的問題",
      "url": "https://blog.gslin.org/archives/2026/09/22/13220/fable-5-%e5%93%81%e8%b3%aa%e4%b8%8b%e9%99%8d%e7%9a%84%e5%95%8f%e9%a1%8c/",
      "date": "2026-09-21"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "民族团结进步宣传周",
      "url": "https://www.munue.com/national-unity-and-progress-promotion-week.html",
      "date": "2026-09-21"
    }
  ],
  "2007": [
    {
      "name": "Yihui",
      "year": "07",
      "title": "Three New Debugging Aids in knitr",
      "url": "https://yihui.org/en/2026/09/knitr-debugging/",
      "date": "2026-09-21"
    }
  ],
  "2010": [
    {
      "name": "雅余",
      "year": "10",
      "title": "日常漫步 Vol.25 之逛公园",
      "url": "https://yayu.net/6247.html",
      "date": "2026-09-21"
    }
  ],
  "2016": [
    {
      "name": "友人C",
      "year": "16",
      "title": "聊聊 PC 客户端的品质工作",
      "url": "https://www.ihewro.com/archives/1392/",
      "date": "2026-09-21"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "碎碎谈 · 9月21日 11:49",
      "url": "https://www.tjsky.net/shuoshuo/d6iofcapbngtqnvcqdlhpw",
      "date": "2026-09-21"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "这个时代，对创业者杀气有点重",
      "url": "https://www.ccgxk.com/codeother/891.html",
      "date": "2026-09-21"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "写在两份工作的 Gap 之时",
      "url": "https://blog.solazy.me/20260921/",
      "date": "2026-09-21"
    }
  ],
  "2020": [
    {
      "name": "老卢",
      "year": "20",
      "title": "说说：#2026-09-21 15:21",
      "url": "https://blog.el9.cn/memos/d4ff5808.html",
      "date": "2026-09-21"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "WordPress站点服务器的AcePanel运维面板，更新版本后出现异常",
      "url": "https://www.bufanz.com/20260921953.html",
      "date": "2026-09-21"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "EdgeOne加速Cloudflare-R2对象存储",
      "url": "https://www.imcry.vip/post/2026-9-21-641/",
      "date": "2026-09-20"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "熟悉的菜店关门",
      "url": "https://www.wsh233.cn/post/熟悉的菜店关门",
      "date": "2026-09-21"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-21",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-21",
      "date": "2026-09-21"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "我做市场调查的方法",
      "url": "https://jefftay.com/amazon-market-research",
      "date": "2026-09-21"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "SCI 期刊查询：影响因子、JCR 与中科院分区",
      "url": "https://siwei.li/sci-journal-search/",
      "date": "2026-09-21"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "美国的食物为什么不好吃",
      "url": "https://www.immarcus.com/blog/why-us-food-tastes-meh",
      "date": "2026-09-21"
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
