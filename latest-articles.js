// ==================== latest-articles.js ====================
// 抓取日期: 8/8/2026, 7:38:42 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2001": [
    {
      "name": "nc-show",
      "year": "01",
      "title": "秋天的第一个版本：Cassotis IME（言泉输入法）v1.12.0",
      "url": "https://nicrosoft.net/blog/2340/",
      "date": "2026-08-08"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "拆装洗手盆全家桶（上）",
      "url": "http://www.xlanda.net/posts/22386",
      "date": "2026-08-08"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "选购手机",
      "url": "https://ezo.biz/Diary/1550.html",
      "date": "2026-08-08"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 核心团队公开新提案流程设计：加权投票、多轨评审，能拯救积压的近千个提案吗？",
      "url": "https://tonybai.com/2026/08/08/go-proposal-process-overhaul-2026/",
      "date": "2026-08-07"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "热水器往事",
      "url": "https://acevs.com/5155/",
      "date": "2026-08-08"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "如何打造优秀博客？(2)",
      "url": "http://www.auiou.com/relevant/00002179.jsp",
      "date": "2026-08-08"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "把写字变得更加简单可行",
      "url": "https://joojen.com/archives/9079.html",
      "date": "2026-08-08"
    },
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "更换",
      "url": "https://ltmltm.cn/bk/1485.html",
      "date": "2026-08-08"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "使用 portmap 转发 Rootless Podman 的低位端口",
      "url": "https://soulteary.com/2026/08/08/using-portmap-to-forward-privileged-ports-for-rootless-podman.html",
      "date": "2026-08-08"
    }
  ],
  "2010": [
    {
      "name": "limboy",
      "year": "10",
      "title": "注意力",
      "url": "https://limboy.me/posts/attention",
      "date": "2026-08-08"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "今天把即刻注销了-20260808",
      "url": "https://guoxiaoli.com/post/668.html",
      "date": "2026-08-08"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.8.8",
      "url": "https://www.linyufan.com/post/5944",
      "date": "2026-08-08"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之反查网站作者的其他站和 sitemap 游戏监控站",
      "url": "https://www.ccgxk.com/codeother/837.html",
      "date": "2026-08-08"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "游戏中的对话设计",
      "url": "https://www.suiyan.cc/blog/20260808084214",
      "date": "2026-08-08"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "用 AI 拓展能力边界，先找轮子",
      "url": "https://shitao5.org/posts/expand-capabilities-with-ai-tools/",
      "date": "2026-08-08"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "用豆包稳定发挥，AI生活如此美好",
      "url": "https://www.dalao.net/thread-62182.htm",
      "date": "2026-08-08"
    },
    {
      "name": "HEMING",
      "year": "20",
      "title": "Emoji Domains in 2026: Most Browsers Convert Them to Punycode, Only Safari Displays Them Properly",
      "url": "https://heming.org/2782.html",
      "date": "2026-08-08"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "2026年本地SEO因素将决定生存",
      "url": "https://www.bailuze.com/24319.html",
      "date": "2026-08-08"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "做了一个明日方舟-奇象巡展的像素画拼豆工具",
      "url": "https://xice.cx/posts/ark24/",
      "date": "2026-08-09"
    }
  ],
  "2026": [
    {
      "name": "茶余饭后",
      "year": "26",
      "title": "戒酒",
      "url": "https://chayufanhou.com/2026/08/09/%e6%88%92%e9%85%92/",
      "date": "2026-08-08"
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
