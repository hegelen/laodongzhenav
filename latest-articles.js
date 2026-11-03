// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-03 01:36:40
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "洗衣卡",
      "url": "https://ezo.biz/Diary/1790.html",
      "date": "2026-11-02"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "升级到PHP 8.4.27",
      "url": "https://synyan.cn/t/64238",
      "date": "2026-11-02"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "我和猫的交集",
      "url": "https://www.xlanda.net/posts/22592",
      "date": "2026-11-03"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "博客又有活儿得干了",
      "url": "http://www.auiou.com/relevant/00002233.jsp",
      "date": "2026-11-02"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x001C",
      "url": "https://lenciel.com/2026/11/fragments-0x001c/",
      "date": "2026-11-02"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年11月2日",
      "url": "https://acevs.com/5339/",
      "date": "2026-11-02"
    }
  ],
  "2007": [
    {
      "name": "老杨",
      "year": "07",
      "title": "关于机器人的发展",
      "url": "https://yangyq.net/2026/11/about-the-development-of-robots.html",
      "date": "2026-11-02"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "桌面换到d盘教程",
      "url": "https://ddlog.cn/?p=573",
      "date": "2026-11-02"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "Nowledge Mem 使用半年体验：让所有 AI Agent 共享同一份记忆",
      "url": "https://blog.einverne.info/post/2026/11/nowledge-mem-review-after-half-year.html",
      "date": "2026-11-02"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "时光",
      "url": "https://www.leitao.cn/11555.html",
      "date": "2026-11-02"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "클라우드웨이즈 2026년 블랙 프라이데이 프로모션",
      "url": "https://www.thewordcracker.com/basic/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ec%9b%a8%ec%9d%b4%ec%a6%88-2023%eb%85%84-%eb%b8%94%eb%9e%99-%ed%94%84%eb%9d%bc%ec%9d%b4%eb%8d%b0%ec%9d%b4-%ed%94%84%eb%a1%9c%eb%aa%a8%ec%85%98/",
      "date": "2026-11-03"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "是我们在使用AI，还是AI驯化了我们？",
      "url": "https://www.suiyan.cc/blog/20261103090800",
      "date": "2026-11-03"
    },
    {
      "name": "2broear",
      "year": "17",
      "title": "来了一只自来熟小橘猫– 日常记事（二百二十二）",
      "url": "https://blog.2broear.com/weblog/02-11-2026_%e7%aa%97%e6%88%b7%e6%9d%a5%e4%b8%80%e5%8f%aa%e6%a9%98%e7%8c%ab-%e6%97%a5%e5%b8%b8%e8%ae%b0%e4%ba%8b%ef%bc%88%e4%ba%8c%e7%99%be%e4%ba%8c%e5%8d%81%e4%ba%8c%ef%bc%89",
      "date": "2026-11-02"
    }
  ],
  "2021": [
    {
      "name": "Robes",
      "year": "21",
      "title": "热闹难接，迟祝自己生日快乐",
      "url": "https://robes.xin/1249.html",
      "date": "2026-11-02"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "随想录",
      "url": "https://www.wsh233.cn/post/随想录",
      "date": "2026-11-02"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "随手拍",
      "url": "https://siwei.li/everyday-snapshots-2026-10/",
      "date": "2026-11-02"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "网站的链接是如何影响网站权重的？",
      "url": "https://www.bailuze.com/24556.html",
      "date": "2026-11-03"
    },
    {
      "name": "小野",
      "year": "23",
      "title": "你的婚姻是「余生」还是「搭伙」？",
      "url": "https://lb5.net/280.html",
      "date": "2026-11-03"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "用 REA 逆开华为 BoF-XX 的性能模式：MateBook D15 2022 在 Linux 下的真 Turbo 解锁",
      "url": "https://xingwangzhe.fun/posts/huawei-bofxx-rea-turbo-unlock/",
      "date": "2026-11-02"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "大的要来了",
      "url": "https://www.immarcus.com/blog/something-big-is-coming",
      "date": "2026-11-03"
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
