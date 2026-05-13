// ==================== latest-articles.js ====================
// 抓取日期: 5/13/2026, 8:49:19 PM
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
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "补牙",
      "url": "https://zhou.ge/2026-05-05.html",
      "date": "2026-05-05"
    }
  ],
  "2011": [
    {
      "name": "耳朵的主人",
      "year": "11",
      "title": "妈祖诞辰1066周年｜善坛妈祖庙祭典",
      "url": "https://www.edzbe.com/book/diary/20260509.html",
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
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "5.10 母亲节亦是加班日",
      "url": "https://liuqingwushui.top/archives/156/",
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
      "name": "Siwei Li",
      "year": "23",
      "title": "赫尔米勒embody",
      "url": "https://siwei.li/he-er-mi-le-embody/",
      "date": "2026-05-08"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "真他妈缺德东西",
      "url": "https://ygz.ink/archives/4893.html",
      "date": "2026-05-13"
    }
  ],
  "2025": [
    {
      "name": "落花雨记",
      "year": "25",
      "title": "牛马生活",
      "url": "https://www.luohuayu.cn/68.html",
      "date": "2026-05-08"
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
