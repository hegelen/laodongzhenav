// ==================== latest-articles.js ====================
// 抓取日期: 8/16/2026, 7:33:27 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "AI时代读书的意义追问",
      "url": "https://wlj.me/notes/sp-note-20260816-204037/",
      "date": "2026-08-16"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Replace the filters",
      "url": "https://seths.blog/2026/08/replace-the-filters/",
      "date": "2026-08-16"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "信息茧房",
      "url": "https://ezo.biz/Private_Views/1583.html",
      "date": "2026-08-16"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "出租车司机极少得阿尔兹海默症，那手写 Rust 代码的程序员呢？我大胆推了一个脑洞",
      "url": "https://tonybai.com/2026/08/16/taxi-drivers-alzheimers-rust-programmers-mental-map/",
      "date": "2026-08-15"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "脑子不好使了",
      "url": "http://www.xlanda.net/posts/22402",
      "date": "2026-08-16"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Claude 的 System Prompts",
      "url": "https://blog.gslin.org/archives/2026/08/17/13155/claude-%e7%9a%84-system-prompts/",
      "date": "2026-08-16"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "留守",
      "url": "https://acevs.com/5171/",
      "date": "2026-08-16"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "llms.txt：给大语言模型的网站说明书",
      "url": "https://www.biaodianfu.com/llms-txt/",
      "date": "2026-08-16"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "信仰之爱与理性之爱",
      "url": "https://www.leitao.cn/10585.html",
      "date": "2026-08-16"
    },
    {
      "name": "王鑫",
      "year": "12",
      "title": "AI做网站之114工具箱",
      "url": "https://wonse.info/114-tools.html",
      "date": "2026-08-16"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我可能是缺碳水了，今天一天特别想吃油饼",
      "url": "https://www.linyufan.com/post/5955",
      "date": "2026-08-16"
    }
  ],
  "2014": [
    {
      "name": "xulihang",
      "year": "14",
      "title": "雾里看花，半熟恋人",
      "url": {
        "$": {
          "href": "https://blog.xulihang.me/grown-up-love/"
        }
      },
      "date": "2026-08-16"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Canvas 可以替代 DOM 了吗？",
      "url": "https://www.ccgxk.com/front-end/846.html",
      "date": "2026-08-16"
    }
  ],
  "2019": [
    {
      "name": "紫塞",
      "year": "19",
      "title": "商业的本质，终究是价值交换，而不是籍贯交换",
      "url": "https://zisai.com/posts/consumers-are-not-fools-retail-pr-reflection/",
      "date": "2026-08-16"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-16",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-16",
      "date": "2026-08-16"
    },
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "说说：#2026-08-16 12:22",
      "url": "https://www.mmbkz.cn/74cb6358.html",
      "date": "2026-08-16"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "也给用户下了绊子吗",
      "url": "https://www.wsh233.cn/post/也给用户下了绊子吗",
      "date": "2026-08-16"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "一手遮天",
      "url": "https://jefftay.com/movies/the-butchers-blade",
      "date": "2026-08-16"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "第一次夜爬重庆缙云山",
      "url": "https://ygz.ink/archives/5676.html",
      "date": "2026-08-16"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.08.16 博客阅读周记",
      "url": "https://www.immarcus.com/blog/weekly-20260816",
      "date": "2026-08-16"
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
