// ==================== latest-articles.js ====================
// 抓取日期: 6/2/2026, 4:53:08 AM
// 只抓取最近14天内的文章，共 15 篇
// 目标 15 篇，实际 15 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Rethinking famous college admissions",
      "url": "https://seths.blog/2026/06/rethinking-famous-college-admissions/",
      "date": "2026-06-01"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "大唐迷你电脑黑屏",
      "url": "http://www.xlanda.net/posts/22234",
      "date": "2026-06-02"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Coding agent 自己找到方法取得 root 權限改檔案",
      "url": "https://blog.gslin.org/archives/2026/06/02/13054/coding-agent-%e8%87%aa%e5%b7%b1%e6%89%be%e5%88%b0%e6%96%b9%e6%b3%95%e5%8f%96%e5%be%97-root-%e6%ac%8a%e9%99%90%e6%94%b9%e6%aa%94%e6%a1%88/",
      "date": "2026-06-02"
    }
  ],
  "2006": [
    {
      "name": "平顶山",
      "year": "06",
      "title": "阿联酋-冰与火之歌",
      "url": "https://pingdingshan.me/356.html",
      "date": "2026-06-01"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "开启新的健身计划",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1233",
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
    },
    {
      "name": "流情",
      "year": "19",
      "title": "六一儿童乐",
      "url": "https://liuqingwushui.top/archives/160/",
      "date": "2026-06-02"
    },
    {
      "name": "Zeruns",
      "year": "19",
      "title": "武汉-青岛 旅游记录和照片分享",
      "url": "https://blog.zeruns.com/archives/946.html",
      "date": "2026-06-01"
    }
  ],
  "2020": [
    {
      "name": "优世界",
      "year": "20",
      "title": "尝试接入 telegram 机器人",
      "url": "https://usj.cc/202606021139.html",
      "date": "2026-06-02"
    },
    {
      "name": "天书vip",
      "year": "20",
      "title": "十九世纪的法国到底啥是年金？",
      "url": "https://www.skybook.vip/inn/143",
      "date": "2026-06-01"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "记一次HuGo无法部署到EdgeOne-Pages",
      "url": "https://www.imcry.vip/post/2026-6-2-728/",
      "date": "2026-06-01"
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
      "name": "宗宗酱",
      "year": "23",
      "title": "主题巴巴又回归了？",
      "url": "https://ygz.ink/archives/5118.html",
      "date": "2026-06-02"
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
