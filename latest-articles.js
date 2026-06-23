// ==================== latest-articles.js ====================
// 抓取日期: 6/23/2026, 9:09:27 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "Slax Reader 成最爱稍后读工具",
      "url": "https://wlj.me/notes/sp-note-20260623-235031/",
      "date": "2026-06-23"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Limited swag (the Knot multipack)",
      "url": "https://seths.blog/2026/06/limited-swag-the-knot-multipack/",
      "date": "2026-06-23"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通： 1个人、0员工、估值18亿的Polsia Ai",
      "url": "https://www.ufoer.com/post/13872.html",
      "date": "2026-06-23"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "区庄回忆录",
      "url": "http://www.xlanda.net/posts/22282",
      "date": "2026-06-23"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI 正在撕裂研发团队：狂欢的“托管派”与心碎的“守夜人”",
      "url": "https://tonybai.com/2026/06/23/ai-divide-developers-into-lazy-juniors-and-the-burnedout-seniors/",
      "date": "2026-06-22"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "数码评测(70)：测试继电器的接触电阻",
      "url": "http://www.auiou.com/relevant/00002163.jsp",
      "date": "2026-06-23"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "周氏祠堂上梁",
      "url": "https://zhou.ge/2026-06-23.html",
      "date": "2026-06-23"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "看懂 z 说交易的「缺口」：那根线到底画在哪",
      "url": "https://blog.forecho.com/price-action-gap-zshuo-trading.html",
      "date": "2026-06-23"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "如何在本地部署一个语音识别模型CapsWriter-Offline（用于文字记录）",
      "url": "https://www.linyufan.com/post/5865",
      "date": "2026-06-23"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "乾纲独断还是民主治理？聊聊博客聚合平台的治理悖论与无解之痛",
      "url": "https://www.tjsky.net/natter/1674",
      "date": "2026-06-22"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "出海 Web 之根据调研结果，挑选需求",
      "url": "https://www.ccgxk.com/codeother/787.html",
      "date": "2026-06-23"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "2026端午游记",
      "url": "https://liuqingwushui.top/archives/165/",
      "date": "2026-06-23"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "准备给猫咪换减肥猫粮",
      "url": "https://blog.solazy.me/20260623/",
      "date": "2026-06-23"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "新购星曜85mm f1.8镜头，试拍了一天，光圈全开画质一般，已退货",
      "url": "https://www.bufanz.com/20260623686.html",
      "date": "2026-06-23"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "博客订阅的最新姿势 GitHub Action版",
      "url": "https://usj.cc/202606231801.html",
      "date": "2026-06-23"
    }
  ],
  "2021": [
    {
      "name": "Dayu",
      "year": "21",
      "title": "告别摄影",
      "url": "https://anotherdayu.com/bye-photograph/",
      "date": "2026-06-23"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "bearblog",
      "url": "https://jefftay.com/bearblog/",
      "date": "2026-06-23"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "再造图灵",
      "url": "https://xingwangzhe.fun/posts/redesigning-turing/",
      "date": "2026-06-23"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "最好用的Android邮件客户端推荐",
      "url": "https://xice.cx/posts/mailClientRecommend/",
      "date": "2026-06-23"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "硬件的复兴？",
      "url": "https://www.immarcus.com/blog/revival-of-hardware",
      "date": "2026-06-23"
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
