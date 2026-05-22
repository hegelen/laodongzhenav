// ==================== latest-articles.js ====================
// 抓取日期: 5/22/2026, 8:45:04 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "我们免费写的字，平台拿去卖给了谁",
      "url": "https://dongjunke.cn/posts/2026/05/20/48180.html",
      "date": "2026-05-20"
    }
  ],
  "2004": [
    {
      "name": "小陈故事",
      "year": "04",
      "title": "努力做个不扫兴的父母",
      "url": "https://www.chener.net/archives/spoilthefun/",
      "date": "2026-05-11"
    },
    {
      "name": "一片瓦",
      "year": "04",
      "title": "国产银河麒麟系统添加仿宋GB2312、Times New Roman等行政字体遇到问题解决方案（附字体下载链接）",
      "url": "https://www.ixsz.com/3221.html",
      "date": "2026-05-11"
    }
  ],
  "2007": [
    {
      "name": "FROYO",
      "year": "07",
      "title": "凌晨奇遇｜坠入一场沉浸式幻梦",
      "url": "https://www.izhuyue.com/5821.html",
      "date": "2026-05-18"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "大家一定要经常检查",
      "url": "https://me.xu19.com/keep-checking-blog-external-links/",
      "date": "2026-05-20"
    }
  ],
  "2010": [
    {
      "name": "宇间草",
      "year": "10",
      "title": "修个设备还得“以命换命”？这锅老子不背了",
      "url": "https://2days.org/20108.html",
      "date": "2026-05-11"
    }
  ],
  "2019": [
    {
      "name": "Allen Hua",
      "year": "19",
      "title": "给 caesium-image-compressor 图片压缩程序构建了 Linux AppImage v2.8.5 最新版",
      "url": "https://hellodk.cn/post/1220",
      "date": "2026-05-21"
    },
    {
      "name": "Zeruns",
      "year": "19",
      "title": "雨云 浙江绍兴BGP 100G高防VPS，2核4G 100兆 仅需77元/月",
      "url": "https://blog.zeruns.com/archives/943.html",
      "date": "2026-05-22"
    }
  ],
  "2021": [
    {
      "name": "Dayu",
      "year": "21",
      "title": "第一次做游戏插件-激战2国际服中文转换 #Guild wars 2",
      "url": "https://anotherdayu.com/guildwars2-chinese/",
      "date": "2026-05-18"
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
