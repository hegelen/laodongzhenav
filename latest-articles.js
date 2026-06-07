// ==================== latest-articles.js ====================
// 抓取日期: 6/7/2026, 2:59:46 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "点拿铁被误听成茶",
      "url": "https://wlj.me/notes/sp-note-20260607-142937/",
      "date": "2026-06-07"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Marketing clerks",
      "url": "https://seths.blog/2026/06/marketing-clerks/",
      "date": "2026-06-07"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "迷你电脑电源适配器没事",
      "url": "http://www.xlanda.net/posts/22245",
      "date": "2026-06-07"
    }
  ],
  "2005": [
    {
      "name": "yaner",
      "year": "05",
      "title": "wordpress数据导入blogger",
      "url": "https://yaner.cc/689.html",
      "date": "2026-06-07"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "能上瘾的东西  一般都不是好东西  咖啡  茶  毒品 尤其不是身体自身创造的。",
      "url": "https://acevs.com/5022/",
      "date": "2026-06-07"
    }
  ],
  "2006": [
    {
      "name": "黄杰敏",
      "year": "06",
      "title": "高考二十载感怀",
      "url": "https://www.jiemin.com/archives/1830.html",
      "date": "2026-06-07"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || AI编程有感",
      "url": "https://www.yishu.pro/221.html",
      "date": "2026-06-07"
    }
  ],
  "2010": [
    {
      "name": "磊磊落落",
      "year": "10",
      "title": "為什麼要讀古文？",
      "url": "https://leileiluoluo.com/posts/du-gu-wen.html",
      "date": "2026-06-07"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "大陆用户开美国期货账户，我会先选 AMP Futures",
      "url": "https://blog.forecho.com/open-us-futures-broker-from-china.html",
      "date": "2026-06-06"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "《GPT 图解》笔记：Transformer",
      "url": "https://izualzhy.cn/llm-diagrammatize-transformer",
      "date": "2026-06-07"
    }
  ],
  "2016": [
    {
      "name": "Keyle",
      "year": "16",
      "title": "凌晨一点的键盘声",
      "url": "https://vrast.cn/posts/17192/",
      "date": "2026-06-06"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "手生了就要多练",
      "url": "https://blog.solazy.me/20260607/",
      "date": "2026-06-07"
    },
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "AI建站真的比WordPress好吗？我用Claude、DeepSeek、Codex实测后的结论",
      "url": "https://blog.naibabiji.com/skill/wordpress-vs-ai.html",
      "date": "2026-06-07"
    }
  ],
  "2020": [
    {
      "name": "vinchent",
      "year": "20",
      "title": "2026全国I卷作文",
      "url": "https://www.vinchent.xyz/2026quan-guo-ijuan-zuo-wen",
      "date": "2026-06-07"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "评论系统切换到Twikoo",
      "url": "https://www.imcry.vip/post/2026-6-7-1409/",
      "date": "2026-06-07"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-07",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-07",
      "date": "2026-06-07"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "奶爸的WordPress专用服务器管理面板-WP Panel",
      "url": "https://ygz.ink/archives/5173.html",
      "date": "2026-06-07"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "母语级英语的本质，不是英语",
      "url": "https://xice.cx/posts/English/",
      "date": "2026-06-06"
    },
    {
      "name": "团团生活志",
      "year": "24",
      "title": "各大AI使用感受",
      "url": "https://t-t.live/archives/DoLWW2Jo",
      "date": "2026-06-06"
    }
  ],
  "2026": [
    {
      "name": "妄司逸",
      "year": "26",
      "title": "自建图床服务",
      "url": "https://blog.flechazo.icu/2026/06/07/imghub/",
      "date": "2026-06-07"
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
