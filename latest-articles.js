// ==================== latest-articles.js ====================
// 抓取日期: 6/19/2026, 8:34:30 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2001": [
    {
      "name": "nc-show",
      "year": "01",
      "title": "《永恒的舞动》第一百二十八章",
      "url": "https://nicrosoft.net/blog/2335/",
      "date": "2026-06-19"
    }
  ],
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
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Anthropic 40万大样本揭秘：AI 时代为什么“专家”身价暴涨？",
      "url": "https://tonybai.com/2026/06/19/agentic-coding-and-persistent-returns-to-expertise/",
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
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "端午",
      "url": "https://ltmltm.cn/bk/1465.html",
      "date": "2026-06-19"
    },
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "6月19日，六月节",
      "url": "https://www.munue.com/juneteenth.html",
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
      "name": "郭晓力",
      "year": "12",
      "title": "重读《格鲁夫给经理人的第一课》-20260619",
      "url": "https://guoxiaoli.com/post/664.html",
      "date": "2026-06-19"
    },
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
      "title": "“林羽凡笔记”中的语音Agent开发完成了",
      "url": "https://www.linyufan.com/post/5860",
      "date": "2026-06-19"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "Wordfence·클라우드웨이즈가 코드 블록을 악성코드로 탐지할 때 대처법",
      "url": "https://www.thewordcracker.com/intermediate/wordfence-%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ec%9b%a8%ec%9d%b4%ec%a6%88-%ec%95%85%ec%84%b1%ec%bd%94%eb%93%9c-%ec%98%a4%ed%83%90-%eb%ac%b8%ec%a0%9c/",
      "date": "2026-06-18"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "出海建站之 Product Hunt 的封号限制解封",
      "url": "https://www.ccgxk.com/codeother/783.html",
      "date": "2026-06-19"
    },
    {
      "name": "科学空间",
      "year": "17",
      "title": "强制间隔投影（Margin-Enforcing Projection）",
      "url": "https://kexue.fm/archives/11784",
      "date": "2026-06-19"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "当探店吃播撞上《网络测评规范》",
      "url": "https://9sb.net/archives/when-tandian-eat-broadcast-collides-with-the-network-evaluation-standards.html",
      "date": "2026-06-19"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-19",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-19",
      "date": "2026-06-19"
    }
  ],
  "2023": [
    {
      "name": "建站百科",
      "year": "23",
      "title": "弘速云香港8核8G CN2VPS基础信息测试结果，流媒体解锁，回程精品稳定建站！",
      "url": "https://www.jzbk.net/3103.html",
      "date": "2026-06-19"
    }
  ],
  "2025": [
    {
      "name": "落花雨记",
      "year": "25",
      "title": "慢慢来",
      "url": "https://www.luohuayu.cn/71.html",
      "date": "2026-06-19"
    },
    {
      "name": "Marcus",
      "year": "25",
      "title": "自下而上的社区文化",
      "url": "https://www.immarcus.com/blog/bottom-up-community-culture",
      "date": "2026-06-19"
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
