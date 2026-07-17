// ==================== latest-articles.js ====================
// 抓取日期: 7/17/2026, 8:14:27 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "友谈AI泡沫翌日文章印证",
      "url": "https://wlj.me/notes/sp-note-20260717-112120/",
      "date": "2026-07-17"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Resources and focus",
      "url": "https://seths.blog/2026/07/resources-and-focus/",
      "date": "2026-07-17"
    }
  ],
  "2004": [
    {
      "name": "Jake",
      "year": "04",
      "title": "加入 Syrovex 中国团队｜助力企业 AI 落地",
      "url": "https://jaketao.com/syrovex-hiring-in-china",
      "date": "2026-07-16"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "为了一个函数名，Go官方吵了两个月：maps.Same提案近日正式通过",
      "url": "https://tonybai.com/2026/07/17/go-maps-same-proposal-accepted/",
      "date": "2026-07-16"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Inkling 開源模型",
      "url": "https://blog.gslin.org/archives/2026/07/17/13117/inkling-%e9%96%8b%e6%ba%90%e6%a8%a1%e5%9e%8b/",
      "date": "2026-07-17"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "杂记2026年7月17日",
      "url": "https://acevs.com/5108/",
      "date": "2026-07-17"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "数码评测(71)：超低价享受i7-7700的体验",
      "url": "http://www.auiou.com/relevant/00002169.jsp",
      "date": "2026-07-16"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "CSS新单位dvh、lvmin、vi、cqb等初解",
      "url": "https://www.zhangxinxu.com/wordpress/2026/07/css-dvh-vi-cqi/",
      "date": "2026-07-17"
    }
  ],
  "2016": [
    {
      "name": "故事里",
      "year": "16",
      "title": "这真是个孤独的世界",
      "url": "https://www.gushi.li/what-a-lonely-world.html",
      "date": "2026-07-17"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "为开发中的游戏注册域名",
      "url": "https://www.suiyan.cc/blog/20260717113532",
      "date": "2026-07-17"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "为什么 GO 语言地位很尴尬？",
      "url": "https://www.ccgxk.com/emlog_dev/811.html",
      "date": "2026-07-17"
    }
  ],
  "2018": [
    {
      "name": "黑桃三",
      "year": "18",
      "title": "为什么加一箱油四五百块不心疼，充个电贵十块却难受半天？",
      "url": "https://heitaosan.com/article/235",
      "date": "2026-07-17"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "寻找问题",
      "url": "https://shitao5.org/posts/finding-questions/",
      "date": "2026-07-17"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "猫咪们虽然平时有捣乱，但是抓蟑螂和虫子绝不含糊",
      "url": "https://www.bufanz.com/20260717749.html",
      "date": "2026-07-17"
    }
  ],
  "2021": [
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "分享我做的烤鸡架！",
      "url": "https://www.mmbkz.cn/fd1a73c0.html",
      "date": "2026-07-17"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-17",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-17",
      "date": "2026-07-17"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "Web的形态演化（二）：页面生成的迁移与分配",
      "url": "http://blog.tangwudi.com/technology/cognition14585/",
      "date": "2026-07-17"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "鋼琴連載3，",
      "url": "https://jefftay.com/blog-posts/piano-3",
      "date": "2026-08-01"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "人工智能实训结题报告：B4 Agent LLM决策模块 —— 从架构设计到五维进阶",
      "url": "https://xingwangzhe.fun/posts/ai-training-b4-final-report/",
      "date": "2026-07-17"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "末日大霾",
      "url": "https://www.immarcus.com/blog/apocalyptic-haze",
      "date": "2026-07-17"
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
