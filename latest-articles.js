// ==================== latest-articles.js ====================
// 抓取日期: 6/13/2026, 8:24:37 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The troll button",
      "url": "https://seths.blog/2026/06/the-troll-button/",
      "date": "2026-06-13"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "FFmpeg 又被拿出來鞭安全問題了，這次有 21 個 0-day",
      "url": "https://blog.gslin.org/archives/2026/06/14/13069/ffmpeg-%e5%8f%88%e8%a2%ab%e6%8b%bf%e5%87%ba%e4%be%86%e9%9e%ad%e5%ae%89%e5%85%a8%e5%95%8f%e9%a1%8c%e4%ba%86%ef%bc%8c%e9%80%99%e6%ac%a1%e6%9c%89-21-%e5%80%8b-0-day/",
      "date": "2026-06-13"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "分类",
      "url": "https://acevs.com/5035/",
      "date": "2026-06-13"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "永久版本是个坑",
      "url": "https://me.xu19.com/he-permanent-version-of-the-software-is-a-pitfall/",
      "date": "2026-06-13"
    },
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
    },
    {
      "name": "异数",
      "year": "09",
      "title": "彩票 || 2026065期大乐透分析",
      "url": "https://www.yishu.pro/222.html",
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
    },
    {
      "name": "limboy",
      "year": "10",
      "title": "读《置身钉内》后的一些感受",
      "url": "https://limboy.me/posts/pinned-inside-dingtalk",
      "date": "2026-06-13"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "玩教具行业的核心竞争力",
      "url": "https://blog.devtang.com/2026/06/13/educational-toy-industry-thinking/",
      "date": "2026-06-13"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "看来Trae用不起了",
      "url": "https://www.linyufan.com/post/5851",
      "date": "2026-06-13"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "明镜荡｜上海出发一小时的宝藏湖荡露营地",
      "url": "https://blog.ops-coffee.com/r/city-china-jiangsu-suzhou-kunshan-mingjingdang.html",
      "date": "2026-06-13"
    }
  ],
  "2019": [
    {
      "name": "浪浪山下那个村",
      "year": "19",
      "title": "PuaSE v0.2.2 → v0.2.5 版本变化全览",
      "url": "https://www.zeekling.cn/articles/2026/06/13/1781366163530.html",
      "date": "2026-06-13"
    }
  ],
  "2020": [
    {
      "name": "Z次元",
      "year": "20",
      "title": "Tailscale——一款高效的内网穿透、远程连接电脑方案",
      "url": "https://blog.ahzoo.cn/p/75f9e64/",
      "date": "2026-06-13"
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
      "name": "WSH",
      "year": "21",
      "title": "失而复得",
      "url": "https://www.wsh233.cn/post/失而复得",
      "date": "2026-06-13"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "无需服务器低成本搭建域名邮箱",
      "url": "https://jyblog.cn/5701/",
      "date": "2026-06-13"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "如何利用现代SEO信号评估旧页面？",
      "url": "https://www.bailuze.com/24150.html",
      "date": "2026-06-13"
    }
  ],
  "2026": [
    {
      "name": "一万先生",
      "year": "26",
      "title": "噩耗！甲骨文免费额度减半！附上减配教程 预防扣费",
      "url": "/feed/8",
      "date": "2026-06-13"
    },
    {
      "name": "安迪",
      "year": "26",
      "title": "图片存档",
      "url": "https://i55.top/archives/535/",
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
