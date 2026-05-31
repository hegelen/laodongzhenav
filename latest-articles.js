// ==================== latest-articles.js ====================
// 抓取日期: 5/31/2026, 2:12:39 AM
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
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "适应初夏",
      "url": "http://www.xlanda.net/posts/22230",
      "date": "2026-05-31"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "静态网站提示：数据加载失败，请刷新页面重试怎么办",
      "url": "https://ddlog.cn/?p=517",
      "date": "2026-05-31"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "今日 SEO 小经验分享",
      "url": "https://www.ccgxk.com/codeother/763.html",
      "date": "2026-05-30"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "丽水遂昌｜三个人，自驾五天，花费1800元，总结推荐",
      "url": "https://blog.ops-coffee.com/r/city-china-zhejiang-lishui-suichang-summary.html",
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
    },
    {
      "name": "Robes",
      "year": "21",
      "title": "来了一趟重庆的洪崖洞",
      "url": "https://robes.xin/1168.html",
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
      "name": "Siwei Li",
      "year": "23",
      "title": "黛西花园5月游",
      "url": "https://siwei.li/dai-xi-hua-yuan-5yue-you/",
      "date": "2026-05-30"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "今日插画｜笑着笑着，就把烦恼丢在风里了",
      "url": "https://zhouayuan.com/post/44.html",
      "date": "2026-05-31"
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
