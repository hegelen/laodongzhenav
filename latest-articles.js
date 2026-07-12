// ==================== latest-articles.js ====================
// 抓取日期: 7/12/2026, 8:13:15 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Controversial",
      "url": "https://seths.blog/2026/07/controversial/",
      "date": "2026-07-12"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI 不在乎代码烂不烂，但你的Token账单在乎：一项660次实验揭示的编程新常识",
      "url": "https://tonybai.com/2026/07/12/does-code-cleanliness-affect-coding-agents/",
      "date": "2026-07-11"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "querySelector* 的錨點",
      "url": "https://blog.gslin.org/archives/2026/07/12/13102/queryselector-%e7%9a%84%e9%8c%a8%e9%bb%9e/",
      "date": "2026-07-12"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "【KVP学堂】如何将多个 Word 文档合并成一个文档？",
      "url": "https://www.munue.com/806.html",
      "date": "2026-07-12"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "用 CLIProxyAPI 把 Codex 变成一个 OpenAI 兼容的 API 服务",
      "url": "https://blog.devtang.com/2026/07/12/cliproxyapi-codex/",
      "date": "2026-07-12"
    },
    {
      "name": "老孙",
      "year": "11",
      "title": "一些琐事",
      "url": "https://www.imsun.org/archives/1791.html",
      "date": "2026-07-12"
    }
  ],
  "2015": [
    {
      "name": "胡东东",
      "year": "15",
      "title": "typecho1.2.1版本的RSS问题",
      "url": "https://blog.hudd.cn/1434.html",
      "date": "2026-07-12"
    }
  ],
  "2016": [
    {
      "name": "弹霄博科",
      "year": "16",
      "title": "记一次网络安全通报处理以及后续整改",
      "url": "https://www.txisfine.cn/archives/1dbed3d0.html",
      "date": "2026-07-11"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海快速判断关键词法和推荐 3 个 SKILL",
      "url": "https://www.ccgxk.com/codeother/806.html",
      "date": "2026-07-12"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "也聊博客的主题设计",
      "url": "https://www.suiyan.cc/blog/20260712193417",
      "date": "2026-07-12"
    }
  ],
  "2019": [
    {
      "name": "瓜老汉",
      "year": "19",
      "title": "今天7月12日，杂记",
      "url": "http://www.gualaohan.com/post/821",
      "date": "2026-07-11"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "反智流量背后的情绪生意",
      "url": "https://blog.solazy.me/20260712/",
      "date": "2026-07-12"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "被Deepseek AI骗了，尼康Z50II升级固件后仍然没有类似佳能微单的“关机时的快门状态”功能",
      "url": "https://www.bufanz.com/20260712730.html",
      "date": "2026-07-12"
    }
  ],
  "2021": [
    {
      "name": "邹江",
      "year": "21",
      "title": "警惕网络黑产：记一次微博账号交易的未遂经历与法律思考",
      "url": "https://www.zoujiang.com/1068.html",
      "date": "2026-07-12"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "好耶在外省吃上了野生菌",
      "url": "https://www.wsh233.cn/post/好耶在外省吃上了野生菌",
      "date": "2026-07-12"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-12",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-12",
      "date": "2026-07-12"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "【致歉声明】关于评论功能异常问题的说明",
      "url": "https://jyblog.com/5865/",
      "date": "2026-07-12"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "摄影练习作品",
      "url": "https://ygz.ink/archives/5487.html",
      "date": "2026-07-12"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "明天又要赶路十小时",
      "url": "https://www.immarcus.com/blog/ten-hour-drive-tomorrow-again",
      "date": "2026-07-12"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "观影观后感｜看完《功夫女足》聊聊真实感受",
      "url": "https://yigeboke.com/article.php?id=46",
      "date": "2026-07-12"
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
