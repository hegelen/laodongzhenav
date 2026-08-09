// ==================== latest-articles.js ====================
// 抓取日期: 8/9/2026, 7:44:47 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "AI 抹平信息差之后，知识星球怎么改产品",
      "url": "https://wlj.me/posts/zsxq-product-evolution-ai/",
      "date": "2026-08-09"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "“We’re all being surprised at the same time”",
      "url": "https://seths.blog/2026/08/were-all-being-surprised-at-the-same-time/",
      "date": "2026-08-09"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "人情事故",
      "url": "https://ezo.biz/Diary/1553.html",
      "date": "2026-08-09"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "1.5万星背后：Google首次揭秘Agent Skills是怎么“造”出来的",
      "url": "https://tonybai.com/2026/08/09/google-agent-skills-behind-the-scenes/",
      "date": "2026-08-08"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "拆装洗手盆全家桶（下）",
      "url": "http://www.xlanda.net/posts/22388",
      "date": "2026-08-09"
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "网址收录导航终于逐步成功",
      "url": "https://long.ge/18091.html",
      "date": "2026-08-09"
    }
  ],
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "用地标改进 A star 寻路的启发函数",
      "url": "https://blog.codingnow.com/2026/08/improved_a_star_heuristics.html",
      "date": "2026-08-09"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "遥控器",
      "url": "https://ltmltm.cn/bk/1487.html",
      "date": "2026-08-09"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "三年后，我重写了 Nginx Formatter",
      "url": "https://soulteary.com/2026/08/09/three-years-later-i-rewrote-the-nginx-formatter.html",
      "date": "2026-08-09"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "我很喜欢的一部电影《大创业家》-20260809",
      "url": "https://guoxiaoli.com/post/669.html",
      "date": "2026-08-09"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "除了交叉熵，LM Loss还有什么选择？",
      "url": "https://kexue.fm/archives/11854",
      "date": "2026-08-09"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之 47 美元定理和抄谁的作业？",
      "url": "https://www.ccgxk.com/codeother/838.html",
      "date": "2026-08-09"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-06-26 / 风月同天",
      "url": "https://blog.xinshijiededa.men/daily/61/",
      "date": "2026-08-09"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "国内网络无法访问稍安勿躁，没有被墙，没有被攻击",
      "url": "https://www.dalao.net/thread-62235.htm",
      "date": "2026-08-09"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-09",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-09",
      "date": "2026-08-09"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "黄山掠影",
      "url": "https://www.wsh233.cn/post/黄山掠影",
      "date": "2026-08-09"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "斗蛐蛐2",
      "url": "https://blog.verynb.net/posts/50998.html",
      "date": "2026-08-09"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "舞萌DX错误码0010深度解析及处理方法",
      "url": "https://xice.cx/posts/maiErr0010/",
      "date": "2026-08-10"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.08.09 博客阅读周记",
      "url": "https://www.immarcus.com/blog/weekly-20260809",
      "date": "2026-08-09"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "苏超抢八形势严峻，扬州队已经到悬崖边上",
      "url": "https://yigeboke.com/article.php?id=48",
      "date": "2026-08-09"
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
