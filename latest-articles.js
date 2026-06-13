// ==================== latest-articles.js ====================
// 抓取日期: 6/13/2026, 6:44:42 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "自驱力",
      "url": "http://www.xlanda.net/posts/22258",
      "date": "2026-06-13"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "美國政府出手禁止 Anthropic 提供 Fable 5 服務",
      "url": "https://blog.gslin.org/archives/2026/06/13/13068/%e7%be%8e%e5%9c%8b%e6%94%bf%e5%ba%9c%e5%87%ba%e6%89%8b%e7%a6%81%e6%ad%a2-anthropic-%e6%8f%90%e4%be%9b-fable-5-%e6%9c%8d%e5%8b%99/",
      "date": "2026-06-13"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "关于工作本质的思考",
      "url": "https://joojen.com/archives/9018.html",
      "date": "2026-06-12"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "我的混账人生（六）：澄溪小学",
      "url": "https://bwskyer.com/my-messed-up-life-6.html",
      "date": "2026-06-13"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "路边摊不再便宜，也该管管了",
      "url": "https://www.iliu.org/posts/street-vendor-normalization/",
      "date": "2026-06-13"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "Up Typecho1.3",
      "url": "https://zhou.ge/2026-06-13.html",
      "date": "2026-06-13"
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
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "情绪与自我激励",
      "url": "https://www.leitao.cn/10324.html",
      "date": "2026-06-13"
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
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 出海之田七使用 google trends 的经验",
      "url": "https://www.ccgxk.com/codeother/776.html",
      "date": "2026-06-12"
    }
  ],
  "2019": [
    {
      "name": "李锋镝",
      "year": "19",
      "title": "Claude-HUD 使用文档",
      "url": "https://www.lifengdi.com/ren-gong-zhi-neng/4730",
      "date": "2026-06-12"
    },
    {
      "name": "Allen Hua",
      "year": "19",
      "title": "Linux Desktop 使用 NVIDIA 独显驱动 Google Earth Pro 和 WeChat",
      "url": "https://hellodk.cn/post/1224",
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
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "Typecho 站内搜索插件 SiteSearch（BUG）",
      "url": "https://9sb.net/archives/typecho-site-search-plugin-sitesearch-bug.html",
      "date": "2026-06-12"
    },
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
      "title": "如何利用现代SEO信号评估旧页面？",
      "url": "https://www.bailuze.com/24150.html",
      "date": "2026-06-13"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "理性买体彩",
      "url": "https://ygz.ink/archives/5215.html",
      "date": "2026-06-12"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "今日冷知识：偶然弄懂了「唐帕」，原来小众词语这么有氛围感",
      "url": "https://mzdsx.com/2026/06/12/%e4%bb%8a%e6%97%a5%e5%86%b7%e7%9f%a5%e8%af%86%ef%bc%9a%e5%81%b6%e7%84%b6%e5%bc%84%e6%87%82%e4%ba%86%e3%80%8c%e5%94%90%e5%b8%95%e3%80%8d%ef%bc%8c%e5%8e%9f%e6%9d%a5%e5%b0%8f%e4%bc%97%e8%af%8d%e8%af%ad/",
      "date": "2026-06-12"
    },
    {
      "name": "一万先生",
      "year": "26",
      "title": "噩耗！甲骨文免费额度减半！附上减配教程 预防扣费",
      "url": "/feed/8",
      "date": "2026-06-13"
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
