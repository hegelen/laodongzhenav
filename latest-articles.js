// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-02 23:02:52
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Modern vanity",
      "url": "https://seths.blog/2026/10/modern-vanity/",
      "date": "2026-10-02"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "入手国产耳机",
      "url": "https://ezo.biz/Play_More/1715.html",
      "date": "2026-10-02"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Pi 1.0 炸场！OpenClaw 背后的 Agent 引擎，进化成了“杀不死”的 Harness",
      "url": "https://tonybai.com/2026/10/03/pi-1-0-durable-agent-harness-release/",
      "date": "2026-10-02"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "这一次的程序设计速度和防攻思路",
      "url": "http://www.auiou.com/relevant/00002210.jsp",
      "date": "2026-10-02"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "example.com 的改版",
      "url": "https://blog.gslin.org/archives/2026/10/02/13243/example-com-%e7%9a%84%e6%94%b9%e7%89%88/",
      "date": "2026-10-02"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "脸上的黄褐斑",
      "url": "https://acevs.com/5268/",
      "date": "2026-10-02"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x000F",
      "url": "https://lenciel.com/2026/10/fragments-0x000f/",
      "date": "2026-10-02"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "黄山之行",
      "url": "https://www.seis-jun.xyz/blog/2026-10-02-yellow-mountain.html",
      "date": "2026-10-02"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "猪协解散吧",
      "url": "https://www.mmtx.net/1189.html",
      "date": "2026-10-02"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.2",
      "url": "https://www.linyufan.com/post/6070",
      "date": "2026-10-02"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "두 번째 크롬북... 살 만 할까?",
      "url": "https://www.thewordcracker.com/blog/%eb%91%90-%eb%b2%88%ec%a7%b8-%ed%81%ac%eb%a1%ac%eb%b6%81-%ec%82%b4-%eb%a7%8c-%ed%95%a0%ea%b9%8c/",
      "date": "2026-10-02"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海做 SaaS 不能光支持 Google 登录",
      "url": "https://www.ccgxk.com/codeother/904.html",
      "date": "2026-10-02"
    },
    {
      "name": "atpx",
      "year": "17",
      "title": "西北三日游",
      "url": "https://atpx.com/blog/northwest-china-tour/",
      "date": "2026-10-02"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "Riven Cloud Japan Tokyo Premium VPS Gen2 AMD Ryzen 9 9950X",
      "url": "https://heming.org/2864.html",
      "date": "2026-10-02"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "近日正在开发Typecho的WAF插件，自建恶意IP共享库，目前正在完善阶段",
      "url": "https://www.bufanz.com/20261002971.html",
      "date": "2026-10-02"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "评论组件被人恶意sql注入，25端口被封，邮件无法发信",
      "url": "https://usj.cc/202610021614.html",
      "date": "2026-10-02"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-10-02",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-02",
      "date": "2026-10-02"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "自私",
      "url": "https://www.wsh233.cn/post/自私",
      "date": "2026-10-02"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "从知识获取到能力调用：MCP 如何改变 AI 应用架构",
      "url": "https://blog.tangwudi.com/technology/homedatacenter14729/",
      "date": "2026-10-02"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "不放辣椒酱",
      "url": "https://www.immarcus.com/blog/without-chili-sauce",
      "date": "2026-10-02"
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
