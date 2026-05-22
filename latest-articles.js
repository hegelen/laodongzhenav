// ==================== latest-articles.js ====================
// 抓取日期: 5/22/2026, 3:03:02 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "一个简单的缺氧地热模块",
      "url": "https://blog.codingnow.com/2026/05/oni_geotherm.html",
      "date": "2026-05-16"
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
      "name": "松茸",
      "year": "14",
      "title": "小狼毫输入法的配置记录",
      "url": "https://zrs.xyz/2132.html",
      "date": "2026-05-22"
    },
    {
      "name": "ying",
      "year": "14",
      "title": "《GPT 图解》笔记：N-Gram、NPLM、LSTM",
      "url": "https://izualzhy.cn/llm-diagrammatize-ngram-nplm-lstm",
      "date": "2026-05-10"
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
      "name": "邹江",
      "year": "21",
      "title": "十几年后，我的菜又熟了",
      "url": "https://www.zoujiang.com/1049.html",
      "date": "2026-05-21"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "【虾塔完结篇】希腊决战 x 几维鸟",
      "url": "https://blog.verynb.net/posts/47267.html",
      "date": "2026-05-09"
    }
  ],
  "2023": [
    {
      "name": "康丰",
      "year": "23",
      "title": "把所有人都当成你的npc",
      "url": "https://www.okang.top/archives/3401",
      "date": "2026-05-17"
    },
    {
      "name": "Shiina",
      "year": "23",
      "title": "Dell Latitude 7410 Chromebook / Drallion 刷 Windows：CoolStar 安装、Search / Globe 键修复与自动旋转排查",
      "url": "https://blog.shiina.fun/2026/05/17/dell-latitude-7410-chromebook-drallion-%e5%88%b7-windows%ef%bc%9acoolstar-%e5%ae%89%e8%a3%85%e3%80%81search-globe-%e9%94%ae%e4%bf%ae%e5%a4%8d%e4%b8%8e%e8%87%aa%e5%8a%a8%e6%97%8b%e8%bd%ac%e6%8e%92/",
      "date": "2026-05-16"
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
