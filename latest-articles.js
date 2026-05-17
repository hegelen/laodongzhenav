// ==================== latest-articles.js ====================
// 抓取日期: 5/17/2026, 8:07:04 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "学会heel lock系鞋带防脚趾摩擦",
      "url": "https://wlj.me/notes/sp-note-20260513-214113/",
      "date": "2026-05-13"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Perfect or better?",
      "url": "https://seths.blog/2026/05/perfect-or-better/",
      "date": "2026-05-17"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "散装药",
      "url": "https://kaix.in/2026/0508/",
      "date": "2026-05-08"
    },
    {
      "name": "小陈故事",
      "year": "04",
      "title": "努力做个不扫兴的父母",
      "url": "https://www.chener.net/archives/spoilthefun/",
      "date": "2026-05-11"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "推荐2026年度的新型特级网红",
      "url": "http://www.auiou.com/relevant/00002152.jsp",
      "date": "2026-05-12"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "Cloudflare Workers项目部署和wrangler命令使用",
      "url": "https://blog.xiaoz.org/archives/22985",
      "date": "2026-05-17"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "遂昌｜躲避人潮的五一自驾Day1 - 盲盒",
      "url": "https://blog.ops-coffee.com/r/city-china-zhejiang-lishui-suichang-01.html",
      "date": "2026-05-17"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "5.10 母亲节亦是加班日",
      "url": "https://liuqingwushui.top/archives/156/",
      "date": "2026-05-10"
    }
  ],
  "2023": [
    {
      "name": "建站百科",
      "year": "23",
      "title": "野草云yecaoyun：2026年5月最新最全香港VPS促销活动，118元年付起三网延迟超低50ms，流媒体解锁ChatGPT, Gemini, Claude, GitHub Copilot, Meta AI, Grok 等主流AI！",
      "url": "https://www.jzbk.net/3003.html",
      "date": "2026-05-17"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "JPG图片格式是什么意思？",
      "url": "https://www.bailuze.com/24074.html",
      "date": "2026-05-16"
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
