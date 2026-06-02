// ==================== latest-articles.js ====================
// 抓取日期: 6/2/2026, 1:11:52 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Stop ruining it",
      "url": "https://seths.blog/2026/06/stop-ruining-it/",
      "date": "2026-06-02"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "大唐迷你电脑黑屏",
      "url": "http://www.xlanda.net/posts/22234",
      "date": "2026-06-02"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "2026.06.02 16:44",
      "url": "https://kaix.in/2026/0602/",
      "date": "2026-06-02"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Coding agent 自己找到方法取得 root 權限改檔案",
      "url": "https://blog.gslin.org/archives/2026/06/02/13054/coding-agent-%e8%87%aa%e5%b7%b1%e6%89%be%e5%88%b0%e6%96%b9%e6%b3%95%e5%8f%96%e5%be%97-root-%e6%ac%8a%e9%99%90%e6%94%b9%e6%aa%94%e6%a1%88/",
      "date": "2026-06-02"
    }
  ],
  "2006": [
    {
      "name": "平顶山",
      "year": "06",
      "title": "阿联酋-冰与火之歌",
      "url": "https://pingdingshan.me/356.html",
      "date": "2026-06-01"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "CSS contrast-color()函数简介",
      "url": "https://www.zhangxinxu.com/wordpress/2026/06/css-contrast-color/",
      "date": "2026-06-01"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "手机&amp;吃胎",
      "url": "https://zhou.ge/2026-06-01.html",
      "date": "2026-06-01"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "Surfingkeys：比 Vimium 更强大的浏览器键盘控制扩展",
      "url": "https://blog.einverne.info/post/2026/06/surfingkeys-chrome-extension.html",
      "date": "2026-06-02"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "FluxDown：一款界面精美、功能强大的现代下载工具，支持浏览器扩展",
      "url": "https://blog.xiaoz.org/archives/23026",
      "date": "2026-06-02"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "硬装结束，灯亮了，油烟机炸了",
      "url": "https://blog.52hyjs.com/post-1272.html",
      "date": "2026-06-02"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 里的 schema 和 积沙成塔",
      "url": "https://www.ccgxk.com/codeother/765.html",
      "date": "2026-06-01"
    },
    {
      "name": "SimonAKing",
      "year": "17",
      "title": "AI 互动影游全球深度报告",
      "url": "https://simonaking.com/blog/ai-interactive-film-game-report/",
      "date": "2026-06-02"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "忘記報稅怎麼辦？不在戶藉地怎麼報稅？",
      "url": "https://blog.giveanornot.com/forgot-to-pay-tax/",
      "date": "2026-06-02"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "记一次HuGo无法部署到EdgeOne-Pages",
      "url": "https://www.imcry.vip/post/2026-6-2-728/",
      "date": "2026-06-01"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "尝试接入 telegram 机器人",
      "url": "https://usj.cc/202606021139.html",
      "date": "2026-06-02"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-02",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-02",
      "date": "2026-06-02"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "白嫖免费的大模型 AgnesAI 教程",
      "url": "https://jyblog.cn/5688/",
      "date": "2026-06-02"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "轻轨上偶遇也门小哥",
      "url": "https://ygz.ink/archives/5134.html",
      "date": "2026-06-02"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "为什么网站的内容需要重新更新？盘点一些成功的内容SEO优化策略",
      "url": "https://www.bailuze.com/24111.html",
      "date": "2026-06-02"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "恭喜发财｜从设计图到毛绒抱枕落地",
      "url": "https://zhouayuan.com/post/47.html",
      "date": "2026-06-02"
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
