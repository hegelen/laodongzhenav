// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-25 03:04:45
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "今天的三分钟练习",
      "url": "https://wulujia.com/notes/sp-note-20261124-215727/",
      "date": "2026-11-24"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Different rules for the boss",
      "url": "https://seths.blog/2026/11/different-rules-for-the-boss/",
      "date": "2026-11-24"
    }
  ],
  "2003": [
    {
      "name": "爱情在线",
      "year": "03",
      "title": "杂物",
      "url": "https://aqzx.com/blog_view.asp?id=69",
      "date": "2026-11-24"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "繁字一直没写对",
      "url": "https://www.xlanda.net/posts/22644",
      "date": "2026-11-25"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 工具链全景：2026 版——从 go install 到 gopls 与 MCP 的高效开发指南",
      "url": "https://tonybai.com/2026/11/25/an-overview-of-go-tooling-v2/",
      "date": "2026-11-25"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "努力筹备的独立微博项目",
      "url": "https://www.auiou.com/pub/2246",
      "date": "2026-11-25"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年11月24日",
      "url": "https://acevs.com/5387/",
      "date": "2026-11-24"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "从Google Tag Manager 详解数据埋点治理",
      "url": "https://www.biaodianfu.com/google-tag-manager/",
      "date": "2026-11-24"
    }
  ],
  "2010": [
    {
      "name": "雅余",
      "year": "10",
      "title": "日常漫步 Vol.27 之漫步日常",
      "url": "https://yayu.net/6283.html",
      "date": "2026-11-24"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "连赢 12 天后一把亏光：Al Brooks 交易室社区的一场真实复盘",
      "url": "https://blog.forecho.com/why-winning-streaks-lead-to-blowups.html",
      "date": "2026-11-24"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "\"林羽凡笔记“系统开发接入”微信小程序Ai”模式",
      "url": "https://www.linyufan.com/post/6155",
      "date": "2026-11-25"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "我做了个原生轻量文本编辑器 ZPad：没有 WebView，跨平台原生渲染",
      "url": "https://blog.xiaoz.org/archives/23780",
      "date": "2026-11-24"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "开源模型没优势了，因为闭源模型高端低端都性价比很高！",
      "url": "https://www.ccgxk.com/emlog_dev/947.html",
      "date": "2026-11-24"
    }
  ],
  "2019": [
    {
      "name": "herman",
      "year": "19",
      "title": "Comments and emails",
      "url": "https://herman.bearblog.dev/comments-and-emails/",
      "date": "2026-11-24"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "寫作的目的就是寫作",
      "url": "https://blog.giveanornot.com/to-write-is-to-write/",
      "date": "2026-11-25"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-24：Letter Visitors、Motionflare、Gauth Personal Study Agent",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-24",
      "date": "2026-11-24"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "随想录IV",
      "url": "https://www.wsh233.cn/post/随想录iv",
      "date": "2026-11-25"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "如何自己做网站SEO检查？（新手完整指南）",
      "url": "https://www.bailuze.com/24717.html",
      "date": "2026-11-25"
    },
    {
      "name": "兔哥",
      "year": "23",
      "title": "Google AI Pro 每月送 200 计算单元：不用就浪费，Colab GPU 使用全攻略（2026）",
      "url": "https://uuzi.net/google-ai-pro-colab/",
      "date": "2026-11-24"
    },
    {
      "name": "湘铭",
      "year": "23",
      "title": "继续跑",
      "url": "https://xiangming.site/1206.html",
      "date": "2026-11-24"
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
