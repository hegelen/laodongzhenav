// ==================== latest-articles.js ====================
// 抓取日期: 5/20/2026, 9:01:08 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 396 期）：互联网通信的替代方案",
      "url": "http://www.ruanyifeng.com/blog/2026/05/weekly-issue-396.html",
      "date": "2026-05-15"
    }
  ],
  "2008": [
    {
      "name": "有氧呼吸",
      "year": "08",
      "title": "年纪大了，开始怀念……",
      "url": "https://www.oxy.one/2026/05/blog-post.html",
      "date": "2026-05-18"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "[推广]酷鸭数据 · 520情人节特别活动机来啦！",
      "url": "https://laozhang.org/archives/4060.html",
      "date": "2026-05-19"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "临期面包和失信时代",
      "url": "https://www.iliu.org/expired-bread-and-era-of-broken-trust.html",
      "date": "2026-05-20"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "试遍所有 Navidrome 客户端，我最终选择了 Narjo",
      "url": "https://blog.einverne.info/post/2026/05/narjo-music-player-review.html",
      "date": "2026-05-19"
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
      "name": "太隐",
      "year": "16",
      "title": "好人未必是好统治者",
      "url": "https://wangyurui.com/posts/hao-ren-wei-bi-shi-hao-tong-zhi-zhe-ac7d10f0",
      "date": "2026-05-20"
    },
    {
      "name": "幻影",
      "year": "16",
      "title": "凡人修仙靠逆天，剑来护心靠齐先生｜那一句 “莫让他输在情字” 看哭多少人",
      "url": "https://blog.52hyjs.com/post-1271.html",
      "date": "2026-05-15"
    }
  ],
  "2019": [
    {
      "name": "风记星辰",
      "year": "19",
      "title": "风记得的音乐：《行将近》—— Soon to Leave",
      "url": "https://www.thyuu.com/82442/",
      "date": "2026-05-09"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "传统SEO与AISEO的关键区别及内容未来适应性",
      "url": "https://www.bailuze.com/24082.html",
      "date": "2026-05-20"
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
