// ==================== latest-articles.js ====================
// 抓取日期: 8/3/2026, 8:37:04 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "最近我看同事的提案，好像问不出太多问题了",
      "url": "https://wlj.me/notes/sp-note-20260803-091648/",
      "date": "2026-08-03"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Celebrity art",
      "url": "https://seths.blog/2026/08/celebrity-art-2/",
      "date": "2026-08-03"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "旅行",
      "url": "https://ezo.biz/Diary/1537.html",
      "date": "2026-08-03"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "学酥？",
      "url": "http://www.xlanda.net/posts/22374",
      "date": "2026-08-03"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 正在背离初心？一条 Reddit 热帖，暴露了 Go 社区最深的分歧：简单，到底能坚持多久？",
      "url": "https://tonybai.com/2026/08/03/go-simplicity-philosophy-debate-reddit/",
      "date": "2026-08-02"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "魔兽争霸思路",
      "url": "https://acevs.com/5144/",
      "date": "2026-08-03"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "未来五年的关键词“收敛”",
      "url": "https://joojen.com/archives/9064.html",
      "date": "2026-08-03"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "寻求家庭最佳无线网络方案",
      "url": "https://laozhang.org/archives/4262.html",
      "date": "2026-08-02"
    }
  ],
  "2011": [
    {
      "name": "小癞子",
      "year": "11",
      "title": "一转眼, 孩子们都长大了",
      "url": "https://justyy.com/archives/72368",
      "date": "2026-08-03"
    }
  ],
  "2013": [
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "搞定 0x80073CFF：Windows 商店级 MSIX 应用包解包硬核安装指南",
      "url": "https://wuqishi.com/archives/fix-msix-0x80073cff-error",
      "date": "2026-08-03"
    }
  ],
  "2014": [
    {
      "name": "xulihang",
      "year": "14",
      "title": "学习Power BI",
      "url": {
        "$": {
          "href": "https://blog.xulihang.me/learn-about-power-bi/"
        }
      },
      "date": "2026-08-03"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 500 내부 서버 오류 (Internal Server Error) 해결 방법",
      "url": "https://www.thewordcracker.com/intermediate/500-internal-server-error-in-wordpress/",
      "date": "2026-08-03"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "聊聊我的游戏进度",
      "url": "https://www.suiyan.cc/blog/20260803123110",
      "date": "2026-08-03"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海常见的几个误解",
      "url": "https://www.ccgxk.com/codeother/832.html",
      "date": "2026-08-03"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "给博客标题加上拼音锚点",
      "url": "https://shitao5.org/posts/pinyin-anchors-for-blog-headings/",
      "date": "2026-08-03"
    },
    {
      "name": "Zeruns",
      "year": "19",
      "title": "Minecraft 26.2 开服联机教程，我的世界Java版服务器搭建教程，零基础开MC服！",
      "url": "https://blog.zeruns.com/archives/952.html",
      "date": "2026-08-03"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "别急着说自己做不了",
      "url": "https://blog.solazy.me/20260803/",
      "date": "2026-08-03"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "西溪湿地的荷花",
      "url": "https://www.wsh233.cn/post/西溪湿地的荷花",
      "date": "2026-08-02"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-03",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-03",
      "date": "2026-08-03"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "常见的技术SEO问题，影响排名却不自觉",
      "url": "https://www.bailuze.com/24295.html",
      "date": "2026-08-03"
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
