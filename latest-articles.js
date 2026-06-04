// ==================== latest-articles.js ====================
// 抓取日期: 6/4/2026, 3:29:22 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Professionals know how to talk about it",
      "url": "https://seths.blog/2026/06/professionals-know-how-to-talk-about-it/",
      "date": "2026-06-03"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "Kakapo：使用 Wails v3、Go 和 Echo 构建一个本地翻译工作台",
      "url": "https://soulteary.com/2026/06/03/kakapo-a-local-translation-workbench-built-with-wails-v3-go-and-echo.html",
      "date": "2026-06-03"
    },
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "2026年5月总结",
      "url": "https://zhujianlin.com/archives/2013.html",
      "date": "2026-06-03"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "软件 || 图集规范管理软件-文档管理器",
      "url": "https://www.yishu.pro/218.html",
      "date": "2026-06-03"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "做个简单总结：今天完成了“林羽凡笔记”鸿蒙Pad的界面优化",
      "url": "https://www.linyufan.com/post/5835",
      "date": "2026-06-03"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 之 UGC 不做落地页和 ADS 无效流量解决方法",
      "url": "https://www.ccgxk.com/codeother/767.html",
      "date": "2026-06-03"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "如何选择趁手的兵器（大模型和配套的工具）",
      "url": "https://www.suiyan.cc/blog/20260603200000",
      "date": "2026-06-03"
    }
  ],
  "2020": [
    {
      "name": "vinchent",
      "year": "20",
      "title": "记一次上台演出",
      "url": "https://www.vinchent.xyz/ji-ci-shang-tai-yan-chu",
      "date": "2026-06-03"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "尝试用Codex开发微信小程序",
      "url": "https://siwei.li/yong-codexkai-fa-wei-xin/",
      "date": "2026-06-03"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "叹佬，叹世界！",
      "url": "https://mzdsx.com/2026/06/03/%e5%8f%b9%e4%bd%ac%ef%bc%8c%e5%8f%b9%e4%b8%96%e7%95%8c%ef%bc%81/",
      "date": "2026-06-03"
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
