// ==================== latest-articles.js ====================
// 抓取日期: 6/2/2026, 9:58:31 PM
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
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "人造景观",
      "url": "https://dujun.io/443d8414-31bb-55df-bf69-d548b38e7e07.html",
      "date": "2026-06-02"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "Ubuntu 26.04 用了一个月",
      "url": "https://www.iliu.org/posts/ubuntu-26-04-one-month/",
      "date": "2026-06-02"
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
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "클라우드웨이즈 워드프레스에 도메인 연결 방법 (2026 업데이트)",
      "url": "https://www.thewordcracker.com/basic/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ec%9b%a8%ec%9d%b4%ec%a6%88-%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4%ec%97%90-%eb%8f%84%eb%a9%94%ec%9d%b8-%ec%97%b0%ea%b2%b0-%eb%b0%a9%eb%b2%95/",
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
      "title": "SEO 之 HARO 四两拨千斤大法",
      "url": "https://www.ccgxk.com/codeother/766.html",
      "date": "2026-06-02"
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
      "name": "优世界",
      "year": "20",
      "title": "尝试接入 telegram 机器人",
      "url": "https://usj.cc/202606021139.html",
      "date": "2026-06-02"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "鼠疫2：第一次连续开出三个红",
      "url": "https://www.imcry.vip/post/2026-6-3-301/",
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
    },
    {
      "name": "阿锋的小宇宙",
      "year": "21",
      "title": "二〇二六年五月总结：颓态总会过去吧",
      "url": "https://feng.pub/0620269616.html",
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
      "name": "按钮与磁带",
      "year": "23",
      "title": "bearblog",
      "url": "https://jefftay.com/blog-posts/bearblog/",
      "date": "2026-06-02"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "轻轨上偶遇也门小哥",
      "url": "https://ygz.ink/archives/5134.html",
      "date": "2026-06-02"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "跑步！",
      "url": "https://mzdsx.com/2026/06/02/%e8%b7%91%e6%ad%a5%ef%bc%81/",
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
