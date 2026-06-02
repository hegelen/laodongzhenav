// ==================== latest-articles.js ====================
// 抓取日期: 6/2/2026, 5:16:38 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

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
  "2006": [
    {
      "name": "平顶山",
      "year": "06",
      "title": "阿联酋-冰与火之歌",
      "url": "https://pingdingshan.me/356.html",
      "date": "2026-06-01"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "CSS contrast-color()函数简介",
      "url": "https://www.zhangxinxu.com/wordpress/2026/06/css-contrast-color/",
      "date": "2026-06-01"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "Typecho适合1.2的用户养老",
      "url": "https://www.mmtx.net/1167.html",
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
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "硬装结束，灯亮了，油烟机炸了",
      "url": "https://blog.52hyjs.com/post-1272.html",
      "date": "2026-06-02"
    },
    {
      "name": "幻影",
      "year": "16",
      "title": "硬装结束，灯亮了，油烟机炸了",
      "url": "https://blog.52hyjs.com/post-1272.html",
      "date": "2026-06-02"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 里的 schema 和 积沙成塔",
      "url": "https://www.ccgxk.com/codeother/765.html",
      "date": "2026-06-01"
    },
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
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "白嫖免费的大模型 AgnesAI 教程",
      "url": "https://jyblog.cn/5688/",
      "date": "2026-06-02"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "为什么网站的内容需要重新更新？盘点一些成功的内容SEO优化策略",
      "url": "https://www.bailuze.com/24111.html",
      "date": "2026-06-02"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "主题巴巴又回归了？",
      "url": "https://ygz.ink/archives/5118.html",
      "date": "2026-06-02"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "711全职店务员离职心得",
      "url": "https://t-t.live/archives/7MagsYkt",
      "date": "2026-06-01"
    },
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
