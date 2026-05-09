// ==================== latest-articles.js ====================
// 抓取日期: 5/9/2026, 10:10:29 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "嚯，昨晚这么好的睡眠质量啊",
      "url": "https://wlj.me/notes/sp-note-20260509-082550/",
      "date": "2026-05-09"
    }
  ],
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "我的独立博客，终于有了一个像样的后台",
      "url": "https://dongjunke.cn/posts/2026/05/05/50369.html",
      "date": "2026-05-05"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "wp的默认feed地址打不开处理办法",
      "url": "https://ddlog.cn/?p=471",
      "date": "2026-05-08"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "问汝平生功业-读《苏东坡新传》-4",
      "url": "https://izualzhy.cn/sdpxz-reading-d",
      "date": "2026-04-26"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "硬装结束 夏天来了",
      "url": "https://blog.52hyjs.com/post-1267.html",
      "date": "2026-05-05"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "我买基金从不亏钱",
      "url": "https://blog.ops-coffee.com/r/fund-5-year-from-50-percent-loss-to-profit.html",
      "date": "2026-05-07"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "Windsurf切号器分享",
      "url": "https://jyblog.cn/5519/",
      "date": "2026-05-09"
    }
  ],
  "2023": [
    {
      "name": "建站百科",
      "year": "23",
      "title": "C-Servers 特别活动：纯IPv6套餐$3.45年付，更有4核8G AMD Ryzen 7 5700X套餐$3.99月付可选！",
      "url": "https://www.jzbk.net/2967.html",
      "date": "2026-05-07"
    }
  ],
  "2024": [
    {
      "name": "ImQi1",
      "year": "24",
      "title": "为了一个女孩，我哭了一整晚",
      "url": "https://imqi1.com/content/note/1009",
      "date": "2026-04-27"
    },
    {
      "name": "无名",
      "year": "24",
      "title": "如何在树莓派 4B 上驱动一块 2.4 寸 SPI 屏幕",
      "url": "https://wuminboke.site/uncategorized/how-to-setup-2-4-inch-spi-screen-on-rpi-4b/",
      "date": "2026-04-27"
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
