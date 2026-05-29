// ==================== latest-articles.js ====================
// 抓取日期: 5/29/2026, 9:13:01 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "“Because you’re the cheapest”",
      "url": "https://seths.blog/2026/05/because-youre-the-cheapest/",
      "date": "2026-05-29"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || 2026年建筑师考试小结",
      "url": "https://www.yishu.pro/217.html",
      "date": "2026-05-29"
    },
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "新特性速递：focus()行为新增focusVisible控制",
      "url": "https://www.zhangxinxu.com/wordpress/2026/05/js-focus-focusvisible/",
      "date": "2026-05-29"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "基于 Cloudflare Workers 的轻量级 SMTP 发信网关：ZSend",
      "url": "https://blog.xiaoz.org/archives/23001",
      "date": "2026-05-29"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "时代在轮回，2026 年做网站又开始流行起来",
      "url": "https://www.ccgxk.com/codeother/762.html",
      "date": "2026-05-29"
    }
  ],
  "2019": [
    {
      "name": "李锋镝",
      "year": "19",
      "title": "codebase-memory-mcp 极简完整使用指南",
      "url": "https://www.lifengdi.com/ren-gong-zhi-neng/4716",
      "date": "2026-05-29"
    },
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-05-28 / 我就在这里稳稳的接住你",
      "url": "https://blog.xinshijiededa.men/daily/38/",
      "date": "2026-05-29"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "放假了按摩放松下",
      "url": "https://ygz.ink/archives/5071.html",
      "date": "2026-05-29"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "推荐适合站长使用的免费&付费好用的seo优化工具",
      "url": "https://www.bailuze.com/24099.html",
      "date": "2026-05-29"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "我们的青春，叫免费蛮荒：80后亲历的2000–2010互联网盗版黄金十年",
      "url": "https://mzdsx.com/2026/05/29/%e6%88%91%e4%bb%ac%e7%9a%84%e9%9d%92%e6%98%a5%ef%bc%8c%e5%8f%ab%e5%85%8d%e8%b4%b9%e8%9b%ae%e8%8d%92%ef%bc%9a80%e5%90%8e%e4%ba%b2%e5%8e%86%e7%9a%842000-2010%e4%ba%92%e8%81%94%e7%bd%91%e7%9b%97/",
      "date": "2026-05-29"
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
