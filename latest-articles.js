// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-14 22:15:29
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "OpenAI办公室惊现窃听设备",
      "url": "https://wlj.me/notes/sp-note-20261014-123110/",
      "date": "2026-10-14"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Things people don’t say",
      "url": "https://seths.blog/2026/10/things-people-dont-say/",
      "date": "2026-10-14"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "2006，带着手册去装服务器",
      "url": "https://www.tortorse.com/archives/installing-servers-with-a-manual-2006/",
      "date": "2026-10-14"
    }
  ],
  "2004": [
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "盛世不靠明君",
      "url": "https://doyj.com/2026/10/14/%e7%9b%9b%e4%b8%96%e4%b8%8d%e9%9d%a0%e6%98%8e%e5%90%9b/",
      "date": "2026-10-14"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "年假搁浅",
      "url": "https://ezo.biz/Diary/1744.html",
      "date": "2026-10-14"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Anthropic 把 Git 扔了！7 人 5 个月自研 Scion，日合并代码从 2500 暴涨到 3 万次",
      "url": "https://tonybai.com/2026/10/14/anthropic-scion-replaces-git-agent-scale-source-control/",
      "date": "2026-10-14"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "战争召唤地狱之门",
      "url": "https://acevs.com/5292/",
      "date": "2026-10-14"
    },
    {
      "name": "春田",
      "year": "05",
      "title": "１０９６．「働く」について考える(１４) では具体的にどう働くのか",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/10/post-900f14.html",
      "date": "2026-10-14"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "用 fnt 來管理字型",
      "url": "https://blog.gslin.org/archives/2026/10/14/13272/%e7%94%a8-fnt-%e4%be%86%e7%ae%a1%e7%90%86%e5%ad%97%e5%9e%8b/",
      "date": "2026-10-14"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "小镇",
      "url": "https://www.seis-jun.xyz/blog/2026-10-14-small-town-without-yesterday.html",
      "date": "2026-10-14"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "女儿学画画2｜素描水彩-保护生命",
      "url": "https://me.xu19.com/daughter-learning-to-draw-part-2-it-s-everyone-s-responsibility-to-protect-life-on-earth/",
      "date": "2026-10-14"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "Nice！继text-wrap之后，Flex布局也支持balance排版了",
      "url": "https://www.zhangxinxu.com/wordpress/2026/10/flex-wrap-balance/",
      "date": "2026-10-14"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "RAGFlow：以深度文档理解为核心的开源 RAG 引擎介绍与部署使用教程",
      "url": "https://blog.einverne.info/post/2026/10/ragflow-open-source-rag-engine.html",
      "date": "2026-10-14"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.14 - 自制卷饼",
      "url": "https://www.linyufan.com/post/6089",
      "date": "2026-10-14"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "灰色博物馆",
      "url": "https://liuqingwushui.top/archives/203/",
      "date": "2026-10-14"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "出站口外趴活的司机",
      "url": "https://blog.solazy.me/20261014/",
      "date": "2026-10-14"
    }
  ],
  "2021": [
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "今天早上我儿子给我气炸毛了",
      "url": "https://www.ddf.im/index.php/2026/10/14/1275.html",
      "date": "2026-10-14"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-14：Articos MCP、OpenCode 2.0、Fina Business",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-14",
      "date": "2026-10-14"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "南太行",
      "url": "https://www.wsh233.cn/post/南太行",
      "date": "2026-10-14"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "电瓶车充不起电了",
      "url": "https://ygz.ink/archives/5898.html",
      "date": "2026-10-14"
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
