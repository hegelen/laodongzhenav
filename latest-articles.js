// ==================== latest-articles.js ====================
// 抓取日期: 5/12/2026, 8:44:16 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "散装药",
      "url": "https://kaix.in/2026/0508/",
      "date": "2026-05-08"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "Obsidian 成为我文字输入主力工具",
      "url": "https://joojen.com/archives/8958.html",
      "date": "2026-05-12"
    }
  ],
  "2009": [
    {
      "name": "老卫",
      "year": "09",
      "title": "历时三年《鸿蒙系统（HarmonyOS）移动开发实战》简介",
      "url": "https://waylau.com/about-harmonyos-short-video-book/",
      "date": "2026-05-01"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "洗衣机复活记",
      "url": "https://blog.52hyjs.com/post-1269.html",
      "date": "2026-05-11"
    }
  ],
  "2018": [
    {
      "name": "希仁之拥",
      "year": "18",
      "title": "Ubuntu 26.04 Desktop使用体验",
      "url": "https://blog.keepchen.com/a/Ubuntu-26.04-Desktop-User-Experience.html",
      "date": "2026-05-10"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "当白嫖党的渠道都被封以后，天才程序员已陨落。",
      "url": "https://jyblog.cn/5552/",
      "date": "2026-05-12"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "狐蒂云疑似准备跑路：低价云服务器的水有多深",
      "url": "https://lb5.net/253.html",
      "date": "2026-05-06"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "马上2026世界杯来了，买体彩不？",
      "url": "https://ygz.ink/archives/4884.html",
      "date": "2026-05-12"
    }
  ],
  "2024": [
    {
      "name": "ImQi1",
      "year": "24",
      "title": "跨越了两千公里，只为见到你",
      "url": "https://imqi1.com/content/note/1010",
      "date": "2026-05-10"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "爱于细碎烟火，悟爱的本真爱",
      "url": "https://liyinwaihe.com/399.html",
      "date": "2026-05-09"
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
