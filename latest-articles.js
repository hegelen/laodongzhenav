// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-06 23:03:43
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Building a second-wave AI business",
      "url": "https://seths.blog/2026/10/but-is-it-a-business/",
      "date": "2026-10-06"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年10月6日",
      "url": "https://acevs.com/5276/",
      "date": "2026-10-06"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "“更新提示”的好处",
      "url": "http://www.auiou.com/relevant/00002216.jsp",
      "date": "2026-10-06"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "太阳能",
      "url": "https://ltmltm.cn/bk/1499.html",
      "date": "2026-10-06"
    },
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "为什么觉得父母故去后的老家像坟墓",
      "url": "https://www.seis-jun.xyz/blog/2026-10-06-home-is-like-a-tomb-after-parents-die.html",
      "date": "2026-10-05"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "家门口的音乐派对",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1283",
      "date": "2026-10-06"
    },
    {
      "name": "悠见",
      "year": "07",
      "title": "开始准备注册安全工程师考试（注安）",
      "url": "https://yufm.com/662438.html",
      "date": "2026-10-06"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "亲子 || 育儿杂记19",
      "url": "https://www.yishu.pro/250.html",
      "date": "2026-10-06"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "国庆杂记2",
      "url": "https://www.iliu.org/posts/guoqing-zaji-2/",
      "date": "2026-10-06"
    }
  ],
  "2010": [
    {
      "name": "磊磊落落",
      "year": "10",
      "title": "2026 国庆假期大连游",
      "url": "https://leileiluoluo.com/posts/national-day-holiday-2026.html",
      "date": "2026-10-06"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我在开发“竹子记账”时犯了一个愚蠢的错误",
      "url": "https://www.linyufan.com/post/6075",
      "date": "2026-10-06"
    }
  ],
  "2015": [
    {
      "name": "青山",
      "year": "15",
      "title": "丙午年中秋北京野生动物园半日速通记",
      "url": "https://blog.yanqingshan.com/246.html",
      "date": "2026-10-06"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "其实最顶级的人，每天研究的都是【无中生有】！",
      "url": "https://www.ccgxk.com/codeother/907.html",
      "date": "2026-10-06"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "【景点篇】兴隆湖湿地公园",
      "url": "https://liuqingwushui.top/archives/201/",
      "date": "2026-10-06"
    },
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "WordPress 网站中毒怎么排查？一次同服务器跨站感染的完整查杀记录",
      "url": "https://blog.naibabiji.com/skill/wordpress-cross-site-malware-cleanup.html",
      "date": "2026-10-06"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "博客网站平时日均IP不到20，部署WAF Guard插件后统计到日IP数超一千个",
      "url": "https://www.bufanz.com/202610061002.html",
      "date": "2026-10-06"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "毕业两年，我最怕接家里的电话",
      "url": "https://usj.cc/20261006215220.html",
      "date": "2026-10-06"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "鼠标坏了，罗技狗屁王",
      "url": "https://www.dalao.net/thread-64727.htm",
      "date": "2026-10-06"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-10-06",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-06",
      "date": "2026-10-06"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "淘旧货",
      "url": "https://www.immarcus.com/blog/thrifting",
      "date": "2026-10-06"
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
