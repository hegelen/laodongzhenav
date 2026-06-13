// ==================== latest-articles.js ====================
// 抓取日期: 6/13/2026, 12:26:41 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Nü Tennis",
      "url": "https://seths.blog/2026/06/nu-tennis/",
      "date": "2026-06-12"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "挑选USB无线网卡",
      "url": "http://www.xlanda.net/posts/22256",
      "date": "2026-06-12"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "一个评论的ai评论",
      "url": "https://acevs.com/5033/",
      "date": "2026-06-12"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "npm v12 要預設關掉 post install script 了",
      "url": "https://blog.gslin.org/archives/2026/06/13/13067/npm-v12-%e8%a6%81%e9%a0%90%e8%a8%ad%e9%97%9c%e6%8e%89-post-install-script-%e4%ba%86/",
      "date": "2026-06-12"
    }
  ],
  "2011": [
    {
      "name": "老孙",
      "year": "11",
      "title": "搬家 &amp; 测试",
      "url": "https://www.imsun.org/archives/1786.html",
      "date": "2026-06-12"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "코딩 없이 AI로 1시간 만에 홈페이지 만들기 - 워드프레스 대신 Replit?",
      "url": "https://www.thewordcracker.com/blog/%ec%bd%94%eb%94%a9-%ec%97%86%ec%9d%b4-%ec%82%ac%ec%9d%b4%ed%8a%b8-%eb%a7%8c%eb%93%9c%eb%8a%94-%eb%b0%a9%eb%b2%95/",
      "date": "2026-06-12"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "复古像素游戏：《我的博客》",
      "url": "https://www.suiyan.cc/blog/20260612083444",
      "date": "2026-06-12"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 出海之田七使用 google trends 的经验",
      "url": "https://www.ccgxk.com/codeother/776.html",
      "date": "2026-06-12"
    }
  ],
  "2019": [
    {
      "name": "Allen Hua",
      "year": "19",
      "title": "Linux Desktop 使用 NVIDIA 独显驱动 Google Earth Pro 和 WeChat",
      "url": "https://hellodk.cn/post/1224",
      "date": "2026-06-12"
    },
    {
      "name": "李锋镝",
      "year": "19",
      "title": "Claude-HUD 使用文档",
      "url": "https://www.lifengdi.com/ren-gong-zhi-neng/4730",
      "date": "2026-06-12"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "记一次出差时的 AirPods 巡回",
      "url": "https://blog.solazy.me/20260612/",
      "date": "2026-06-12"
    }
  ],
  "2020": [
    {
      "name": "EdNovas",
      "year": "20",
      "title": "Casbay VPS",
      "url": "https://ednovas.xyz/2026/06/12/casbay/",
      "date": "2026-06-12"
    },
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "這是我很喜歡部落格的地方",
      "url": "https://blog.giveanornot.com/culture-of-blogs/",
      "date": "2026-06-12"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-12",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-12",
      "date": "2026-06-12"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "Google 搜索关于使用第三方 SEO 工具、服务和建议的指南",
      "url": "https://www.bailuze.com/25246.html",
      "date": "2026-06-12"
    },
    {
      "name": "小归客",
      "year": "23",
      "title": "为Typecho增加文章阅读次数统计功能",
      "url": "https://xgk.pw/archives/292/",
      "date": "2026-06-12"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "理性买体彩",
      "url": "https://ygz.ink/archives/5215.html",
      "date": "2026-06-12"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "回顾经典-程序员的三大美德",
      "url": "https://xingwangzhe.fun/posts/programmers-three-virtues/",
      "date": "2026-06-12"
    }
  ],
  "2026": [
    {
      "name": "妄司逸",
      "year": "26",
      "title": "AI做了个部落冲突管理网站",
      "url": "https://blog.flechazo.icu/2026/06/12/coc-counter/",
      "date": "2026-06-12"
    },
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "今日冷知识：偶然弄懂了「唐帕」，原来小众词语这么有氛围感",
      "url": "https://mzdsx.com/2026/06/12/%e4%bb%8a%e6%97%a5%e5%86%b7%e7%9f%a5%e8%af%86%ef%bc%9a%e5%81%b6%e7%84%b6%e5%bc%84%e6%87%82%e4%ba%86%e3%80%8c%e5%94%90%e5%b8%95%e3%80%8d%ef%bc%8c%e5%8e%9f%e6%9d%a5%e5%b0%8f%e4%bc%97%e8%af%8d%e8%af%ad/",
      "date": "2026-06-12"
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
