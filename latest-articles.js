// ==================== latest-articles.js ====================
// 抓取日期: 6/19/2026, 11:20:42 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The gap between true and known",
      "url": "https://seths.blog/2026/06/the-gap-between-true-and-known/",
      "date": "2026-06-19"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "世界杯回忆录",
      "url": "http://www.xlanda.net/posts/22273",
      "date": "2026-06-19"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "RFC 超過 10000 了",
      "url": "https://blog.gslin.org/archives/2026/06/19/13075/rfc-%e8%b6%85%e9%81%8e-10000-%e4%ba%86/",
      "date": "2026-06-18"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "牛瘪汤放弃",
      "url": "https://acevs.com/5048/",
      "date": "2026-06-19"
    }
  ],
  "2007": [
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "我真是个好人呐",
      "url": "https://zhujianlin.com/archives/2192.html",
      "date": "2026-06-19"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "6.18，我又买了一台荣耀手机",
      "url": "https://www.iliu.org/posts/618-honor-win-rt/",
      "date": "2026-06-19"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "第一章 早晨的面包：经济秩序从哪里来",
      "url": "https://www.leitao.cn/10370.html",
      "date": "2026-06-19"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "准备在“林羽凡笔记”中再开发一个语音模式的Agent",
      "url": "https://www.linyufan.com/post/5859",
      "date": "2026-06-18"
    },
    {
      "name": "Jonty",
      "year": "13",
      "title": "还是把电梯卡使用限制时间给破解了！",
      "url": "https://nobb.cc/2026-06-18-3747.html",
      "date": "2026-06-18"
    }
  ],
  "2015": [
    {
      "name": "elmagnifico",
      "year": "15",
      "title": "第一次骨折",
      "url": "https://elmagnifico.tech/2026/06/19/Fracture/",
      "date": "2026-06-18"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-06-06 / 保留节目",
      "url": "https://blog.xinshijiededa.men/daily/45/",
      "date": "2026-06-19"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "端午流水账 0618",
      "url": "https://blog.solazy.me/20260618/",
      "date": "2026-06-18"
    }
  ],
  "2020": [
    {
      "name": "vinchent",
      "year": "20",
      "title": "写在2026年中间",
      "url": "https://www.vinchent.xyz/xie-zai-2026nian-zhong-jian",
      "date": "2026-06-18"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "端午前夕，海甸之境",
      "url": "https://www.imcry.vip/post/2026-6-19-019/",
      "date": "2026-06-18"
    },
    {
      "name": "无妄当自持",
      "year": "20",
      "title": "在 RTX 4060 Laptop（8GB 显存）笔记本上部署 Qwen3.5-4B 和 Qwopus3.5-9B-Coder 的完整实战",
      "url": "https://www.insidentally.com/articles/000051/",
      "date": "2026-06-18"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "当探店吃播撞上《网络测评规范》",
      "url": "https://9sb.net/archives/when-tandian-eat-broadcast-collides-with-the-network-evaluation-standards.html",
      "date": "2026-06-19"
    }
  ],
  "2023": [
    {
      "name": "火米",
      "year": "23",
      "title": "Bear（熊掌记）出了个 md 编辑器",
      "url": "https://huo.me/lettera/",
      "date": "2026-06-18"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "600买尼康D3300是不是烂机器啊",
      "url": "https://ygz.ink/archives/5309.html",
      "date": "2026-06-19"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "自下而上的社区文化",
      "url": "https://www.immarcus.com/blog/bottom-up-community-culture",
      "date": "2026-06-19"
    }
  ],
  "2026": [
    {
      "name": "安迪",
      "year": "26",
      "title": "硅云养老主机",
      "url": "https://i55.top/archives/540/",
      "date": "2026-06-18"
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
