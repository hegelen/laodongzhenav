// ==================== latest-articles.js ====================
// 抓取日期: 5/30/2026, 8:16:34 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Doing your job vs doing your work",
      "url": "https://seths.blog/2026/05/doing-your-job-vs-doing-your-work/",
      "date": "2026-05-30"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "菜场到底是靠谁活下来的",
      "url": "https://www.tortorse.com/archives/wet-market-weekend-observation/",
      "date": "2026-05-30"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "Herald（鸦使）：把验证码和通知，送到该送的人手里",
      "url": "https://soulteary.com/2026/05/30/herald-lightweight-otp-and-verification-code-delivery-service.html",
      "date": "2026-05-29"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "荔枝小年果然好品质",
      "url": "https://me.xu19.com/lychee-yield-drops-but-quality-improves/",
      "date": "2026-05-30"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "《GPT 图解》笔记：QKV、多头注意力及掩码",
      "url": "https://izualzhy.cn/llm-diagrammatize-attention-qkv-multi-mask",
      "date": "2026-05-30"
    }
  ],
  "2017": [
    {
      "name": "arun",
      "year": "17",
      "title": "Why the Ferrari Luce looks like that",
      "url": "https://arun.is/blog/ferrari-luce/",
      "date": "2026-05-30"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-05-30",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-05-30",
      "date": "2026-05-30"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "EdgeOne 实时日志接收器",
      "url": "https://jyblog.cn/5674/",
      "date": "2026-05-30"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "2026年SEO策略：电子商务与B2B完整指南",
      "url": "https://www.bailuze.com/24101.html",
      "date": "2026-05-30"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "分享一个中文小黑怪诞正文配图生成 Skill",
      "url": "https://www.renhuali.cn/journal/cmprnwa260006chs4p7v2nbnq",
      "date": "2026-05-30"
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
