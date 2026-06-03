// ==================== latest-articles.js ====================
// 抓取日期: 6/3/2026, 8:19:32 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2007": [
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "尝鲜，我以后还是不要尝鲜了",
      "url": "https://zhujianlin.com/archives/1992.html",
      "date": "2026-06-02"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "做个简单总结：今天完成了“林羽凡笔记”agent中的“webSearch”工具",
      "url": "https://www.linyufan.com/post/5834",
      "date": "2026-06-02"
    }
  ],
  "2017": [
    {
      "name": "SimonAKing",
      "year": "17",
      "title": "AI 互动影游全球深度报告",
      "url": "https://simonaking.com/blog/ai-interactive-film-game-report/",
      "date": "2026-06-02"
    },
    {
      "name": "科学空间",
      "year": "17",
      "title": "为什么官方版Muon比MuP版多出一个max(1, ⋅)？",
      "url": "https://kexue.fm/archives/11772",
      "date": "2026-06-03"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "鼠疫2：第一次连续开出三个红",
      "url": "https://www.imcry.vip/post/2026-6-3-301/",
      "date": "2026-06-02"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-02",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-02",
      "date": "2026-06-02"
    },
    {
      "name": "阿锋的小宇宙",
      "year": "21",
      "title": "二〇二六年五月总结：颓态总会过去吧",
      "url": "https://feng.pub/0620269616.html",
      "date": "2026-06-02"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "轻轨上偶遇也门小哥",
      "url": "https://ygz.ink/archives/5134.html",
      "date": "2026-06-02"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "让信息型SEO内容为搜索意图发挥作用",
      "url": "https://www.bailuze.com/24115.html",
      "date": "2026-06-03"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "打算重构墨迹博客（InkBlog）",
      "url": "https://www.renhuali.cn/journal/cmpxdw1ac000xchs4ybm9m416",
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
