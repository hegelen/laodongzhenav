// ==================== latest-articles.js ====================
// 抓取日期: 6/17/2026, 9:21:01 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Status symbols",
      "url": "https://seths.blog/2026/06/status-symbols/",
      "date": "2026-06-17"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "没救了",
      "url": "http://www.xlanda.net/posts/22268",
      "date": "2026-06-17"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "DeepMind 亮出王炸：别再手写 Agent Harness 了，AI 已经学会自己写了！",
      "url": "https://tonybai.com/2026/06/17/deepmind-automation-agent-harness-ai-self-coding/",
      "date": "2026-06-17"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "2026.06.17 14:21",
      "url": "https://kaix.in/2026/0617/",
      "date": "2026-06-17"
    }
  ],
  "2005": [
    {
      "name": "春田",
      "year": "05",
      "title": "１０７９．情けは人の為ならず",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/06/post-6736d9.html",
      "date": "2026-06-17"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "无力回天",
      "url": "https://acevs.com/5044/",
      "date": "2026-06-17"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "2026 年 5 月房地产数据来了",
      "url": "https://joojen.com/archives/9034.html",
      "date": "2026-06-17"
    }
  ],
  "2007": [
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "记一次重大失误",
      "url": "https://zhujianlin.com/archives/2178.html",
      "date": "2026-06-17"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "甜粽子、咸粽子",
      "url": "https://www.iliu.org/posts/northern-sweet-southern-salty-zongzi/",
      "date": "2026-06-17"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "蓄意碰瓷",
      "url": "https://zhou.ge/2026-06-17.html",
      "date": "2026-06-17"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "首试Zode开发工具",
      "url": "https://www.linyufan.com/post/5857",
      "date": "2026-06-17"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Node-js 新手需要知道什么？",
      "url": "https://www.ccgxk.com/front-end/781.html",
      "date": "2026-06-17"
    },
    {
      "name": "科学空间",
      "year": "17",
      "title": "MoE环游记：9、门控归一化之争",
      "url": "https://kexue.fm/archives/11782",
      "date": "2026-06-17"
    }
  ],
  "2019": [
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "SiteGround数据库超出限额怎么办？一个真实案例帮你搞定",
      "url": "https://blog.naibabiji.com/skill/siteground-database-over-limit.html",
      "date": "2026-06-17"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "新购神牛离机闪光灯iT32，功能多又实用！",
      "url": "https://www.bufanz.com/20260617680.html",
      "date": "2026-06-17"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "（误回解除，帖子锁定）",
      "url": "https://www.dalao.net/thread-59853.htm",
      "date": "2026-06-17"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客构建“轻量级知识索引”（五）：猜你所想——embedding的真正引入",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14419/",
      "date": "2026-06-17"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "选择可靠SEO服务机构的重要性",
      "url": "https://www.bailuze.com/24157.html",
      "date": "2026-06-17"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "网站被百度K掉不是个例",
      "url": "https://ygz.ink/archives/5300.html",
      "date": "2026-06-17"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "募捐、求职履历和比特币",
      "url": "https://www.immarcus.com/blog/fundraising-resume-bitcoin",
      "date": "2026-06-17"
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
