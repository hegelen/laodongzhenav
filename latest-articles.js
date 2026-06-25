// ==================== latest-articles.js ====================
// 抓取日期: 6/25/2026, 9:06:43 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "来看电影，一不小心包了个场啊",
      "url": "https://wlj.me/notes/sp-note-20260625-181044/",
      "date": "2026-06-25"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Standby –> Intervention",
      "url": "https://seths.blog/2026/06/standby-intervention/",
      "date": "2026-06-25"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "浏览器里的“安全阴谋”：为什么 Go 1.27 的 UUIDv7 会离奇丧失随机性？",
      "url": "https://tonybai.com/2026/06/25/go-1-27-uuid-newv7-always-generates-uuid-with-7000-on-browsers/",
      "date": "2026-06-25"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "垃圾轮转",
      "url": "http://www.xlanda.net/posts/22286",
      "date": "2026-06-25"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "汽车为什么是gdp利器？",
      "url": "https://acevs.com/5061/",
      "date": "2026-06-25"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "软件 || 图集规范管理软件-文档管理器V1.5.0",
      "url": "https://www.yishu.pro/225.html",
      "date": "2026-06-25"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "成也霄鹏，败也霄鹏！追随恩师埋下隐患，刘彬彬亲手葬送十余载泰山生涯",
      "url": "https://www.mmtx.net/1173.html",
      "date": "2026-06-25"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "第七章 资本主义的镜子：马克思主义的洞见与歧途",
      "url": "https://www.leitao.cn/10384.html",
      "date": "2026-06-25"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "免费玩token的时代结束了",
      "url": "https://www.linyufan.com/post/5868",
      "date": "2026-06-25"
    }
  ],
  "2015": [
    {
      "name": "Guyskk",
      "year": "15",
      "title": "把 AI 编程看成一个控制系统：beecodeai 的设计原理",
      "url": "https://blog.guyskk.com/notes/ai-coding-control-system",
      "date": "2026-06-26"
    }
  ],
  "2016": [
    {
      "name": "故事里",
      "year": "16",
      "title": "一想到你的不完美，便觉得更加爱你了",
      "url": "https://www.gushi.li/thinking-of-your-imperfections-makes-me-love-you-more.html",
      "date": "2026-06-25"
    }
  ],
  "2019": [
    {
      "name": "沧海月明",
      "year": "19",
      "title": "从 OceanBase 离开，再出发",
      "url": "https://www.inlighting.org/archives/leave-from-oceanbase-and-start-again",
      "date": "2026-06-25"
    }
  ],
  "2020": [
    {
      "name": "优世界",
      "year": "20",
      "title": "怎么也飞不出，花花的世界",
      "url": "https://usj.cc/20260625174724.html",
      "date": "2026-06-25"
    },
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "一點點",
      "url": "https://blog.giveanornot.com/just-a-little/",
      "date": "2026-06-25"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO与PPC：为业务选择合适的策略",
      "url": "https://www.bailuze.com/24191.html",
      "date": "2026-06-25"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "中国移动PT927G光猫折腾指南：破解超级密码改桥接",
      "url": "https://xice.cx/posts/CMCCPT927G/",
      "date": "2026-06-25"
    },
    {
      "name": "姓王者",
      "year": "24",
      "title": "人工智能实训Day4：Agent智能体系统Proposal——B4 LLM决策模块",
      "url": "https://xingwangzhe.fun/posts/ai-training-agent-day4-proposal/",
      "date": "2026-06-25"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "中国移动PT927G光猫折腾指南：破解超级密码改桥接",
      "url": "https://xice.cx/posts/CMCCPT927G/",
      "date": "2026-06-25"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "「所有平台都是跟踪器」",
      "url": "https://www.immarcus.com/blog/all-platforms-are-trackers",
      "date": "2026-06-25"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "脚下有泥，身后是深渊，真正的不服周，是向命运硬刚到底",
      "url": "https://mzdsx.com/2026/06/25/%e8%84%9a%e4%b8%8b%e6%9c%89%e6%b3%a5%ef%bc%8c%e8%ba%ab%e5%90%8e%e6%98%af%e6%b7%b1%e6%b8%8a%ef%bc%8c%e7%9c%9f%e6%ad%a3%e7%9a%84%e4%b8%8d%e6%9c%8d%e5%91%a8%ef%bc%8c%e6%98%af%e5%90%91%e5%91%bd%e8%bf%90/",
      "date": "2026-06-25"
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
