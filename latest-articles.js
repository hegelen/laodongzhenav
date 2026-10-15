// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-15 22:08:04
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "然后开始工作了 😱",
      "url": "https://wlj.me/notes/sp-note-20261015-105434/",
      "date": "2026-10-15"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Purple Space problem solving",
      "url": "https://seths.blog/2026/10/purple-space-problem-solving/",
      "date": "2026-10-15"
    }
  ],
  "2004": [
    {
      "name": "delphij",
      "year": "04",
      "title": "别了，SMTP mTLS",
      "url": "https://blog.delphij.net/posts/2026/10/byebye-smtp-mtls/",
      "date": "2026-10-15"
    }
  ],
  "2005": [
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0013",
      "url": "https://lenciel.com/2026/10/fragments-0x0013/",
      "date": "2026-10-15"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "清大 nthu.tw 的 WHOIS 資訊...",
      "url": "https://blog.gslin.org/archives/2026/10/15/13273/%e6%b8%85%e5%a4%a7-nthu-tw-%e7%9a%84-whois-%e8%b3%87%e8%a8%8a/",
      "date": "2026-10-15"
    }
  ],
  "2006": [
    {
      "name": "eallion",
      "year": "06",
      "title": "Ubuntu 配置多宽带",
      "url": "https://www.eallion.com/ubuntu-dual-wan/",
      "date": "2026-10-15"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "yes 工程师",
      "url": "https://dujun.io/yes-engineer.html",
      "date": "2026-10-15"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "1.9元汽水，和零成本的投诉",
      "url": "https://www.iliu.org/posts/zero-cost-complaint/",
      "date": "2026-10-15"
    },
    {
      "name": "孙琪峥",
      "year": "09",
      "title": "iold9s1jmlp17y7n",
      "url": "https://www.sunqizheng.com/blog/2691.html",
      "date": "2026-10-15"
    },
    {
      "name": "老张",
      "year": "09",
      "title": "从零搭建Obsidian每日日记工作流保姆教程",
      "url": "https://laozhang.org/archives/4423.html",
      "date": "2026-10-15"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.15 - 自制煎饼",
      "url": "https://www.linyufan.com/post/6090",
      "date": "2026-10-15"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "아바다 테마 판매량 급감, AI 때문일까?",
      "url": "https://www.thewordcracker.com/basic/%ec%95%84%eb%b0%94%eb%8b%a4-%ed%85%8c%eb%a7%88-%ed%8c%90%eb%a7%a4%eb%9f%89-%ea%b8%89%ea%b0%90-ai-%eb%95%8c%eb%ac%b8%ec%9d%bc%ea%b9%8c/",
      "date": "2026-10-15"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "为什么！拼多多！不搞 AI ！",
      "url": "https://www.ccgxk.com/emlog_dev/919.html",
      "date": "2026-10-15"
    },
    {
      "name": "科学空间",
      "year": "17",
      "title": "慢即是快：2. Adam的尽头还是Muon？",
      "url": "https://kexue.fm/archives/11964",
      "date": "2026-10-15"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "把车开上月球去",
      "url": "https://shitao5.org/posts/drive-to-the-moon/",
      "date": "2026-10-15"
    }
  ],
  "2020": [
    {
      "name": "我不是咕咕鸽",
      "year": "20",
      "title": "Muse AI 最新保姆级注册教程！无需指纹浏览器，无需住宅IP！",
      "url": "https://blog.laoda.de/archives/muse",
      "date": "2026-10-15"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-15：Pancake、Inferock、Retriever AI",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-15",
      "date": "2026-10-15"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "网站排名下降后的对策，适用于主流搜索引擎算法（本文以百度为例）",
      "url": "https://www.bailuze.com/24506.html",
      "date": "2026-10-15"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "昨天的文章给我带来了40元的收益",
      "url": "https://ygz.ink/archives/5905.html",
      "date": "2026-10-15"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "我不同意陶哲轩",
      "url": "https://www.immarcus.com/blog/i-disagree-with-terence-tao",
      "date": "2026-10-15"
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
