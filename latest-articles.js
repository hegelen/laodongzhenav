// ==================== latest-articles.js ====================
// 抓取日期: 6/2/2026, 3:50:24 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "又到一年毕业季",
      "url": "https://joojen.com/archives/9000.html",
      "date": "2026-06-01"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "手机&amp;吃胎",
      "url": "https://zhou.ge/2026-06-01.html",
      "date": "2026-06-01"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "天涯社区回来了，今天流量太大了，时不时就500了",
      "url": "https://www.linyufan.com/post/5833",
      "date": "2026-06-01"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "人均一个博客聚合网站？",
      "url": "https://www.suiyan.cc/blog/20260601201146",
      "date": "2026-06-01"
    }
  ],
  "2019": [
    {
      "name": "passo",
      "year": "19",
      "title": "Episode VIII of Phase One: Judging beautiful docs, AI fatigue, and tool slop",
      "url": "https://passo.uno/episode-viii-phase-one-judging-beautiful-docs-ai-fatigue-tool-slop/",
      "date": "2026-06-01"
    }
  ],
  "2020": [
    {
      "name": "天书vip",
      "year": "20",
      "title": "十九世纪的法国到底啥是年金？",
      "url": "https://www.skybook.vip/inn/143",
      "date": "2026-06-01"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "尝试接入 telegram 机器人",
      "url": "https://usj.cc/202606021139.html",
      "date": "2026-06-02"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-01",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-01",
      "date": "2026-06-01"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "什么是丰富内容，为什么它对网站排名很重要？",
      "url": "https://www.bailuze.com/24108.html",
      "date": "2026-06-02"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "我用过最好用的Android桌面(启动器)",
      "url": "https://xice.cx/posts/niagaraLauncher/",
      "date": "2026-06-01"
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
