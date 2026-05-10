// ==================== latest-articles.js ====================
// 抓取日期: 5/10/2026, 8:01:06 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "wp的默认feed地址打不开处理办法",
      "url": "https://ddlog.cn/?p=471",
      "date": "2026-05-08"
    }
  ],
  "2010": [
    {
      "name": "雅余",
      "year": "10",
      "title": "动物朋友",
      "url": "https://yayu.net/6218.html",
      "date": "2026-04-30"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "读《金阁寺》",
      "url": "https://www.kawabangga.com/posts/7246",
      "date": "2026-05-04"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "《GPT 图解》笔记：N-Gram、NPLM、LSTM",
      "url": "https://izualzhy.cn/llm-diagrammatize-ngram-nplm-lstm",
      "date": "2026-05-10"
    }
  ],
  "2016": [
    {
      "name": "woodu",
      "year": "16",
      "title": "JVS时代的经典乘客——《太鼓之达人 6》",
      "url": "https://woodu.me/jvsshidaidejingdiancheng/",
      "date": "2026-05-02"
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
  "2021": [
    {
      "name": "诺依阁",
      "year": "21",
      "title": "openclaw命令行与搭建(2026.5.3版本)",
      "url": "https://blog.nuoyis.net/posts/93b5.html",
      "date": "2026-05-04"
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
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "通用的 AI IDE 账号管理工具 Cockpit-Tools",
      "url": "https://www.sanshu.cn/arc/262.html",
      "date": "2026-05-07"
    },
    {
      "name": "ImQi1",
      "year": "24",
      "title": "跨越了两千公里，只为见到你",
      "url": "https://imqi1.com/content/note/1010",
      "date": "2026-05-10"
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
