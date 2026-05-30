// ==================== latest-articles.js ====================
// 抓取日期: 5/30/2026, 11:03:43 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "耿同学被限流之后，我开源了他的打假思维",
      "url": "https://dongjunke.cn/posts/2026/05/30/47945.html",
      "date": "2026-05-29"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Doing your job vs doing your work",
      "url": "https://seths.blog/2026/05/doing-your-job-vs-doing-your-work/",
      "date": "2026-05-30"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || 2026年建筑师考试小结",
      "url": "https://www.yishu.pro/217.html",
      "date": "2026-05-29"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-05-28 / 我就在这里稳稳的接住你",
      "url": "https://blog.xinshijiededa.men/daily/38/",
      "date": "2026-05-29"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "浅谈EVE欧服的加速器设置",
      "url": "https://www.imcry.vip/post/2026-5-29-1905/",
      "date": "2026-05-29"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "手痒没忍住，把家里的珍珠柏给剪了",
      "url": "https://9sb.net/archives/unable-to-resist-itching-i-cut-the-pearl-cypress-at-hom.html",
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
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "放假了按摩放松下",
      "url": "https://ygz.ink/archives/5071.html",
      "date": "2026-05-29"
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
