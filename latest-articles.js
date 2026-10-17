// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-17 21:26:57
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The race to the bottom feels inevitable…",
      "url": "https://seths.blog/2026/10/the-race-to-the-bottom-feels-inevitable/",
      "date": "2026-10-17"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：把传统文化融入到产品中，泰哥玩着年赚几千万",
      "url": "https://www.ufoer.com/post/14645.html",
      "date": "2026-10-17"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "初试手动补漆",
      "url": "https://ezo.biz/Play_More/1754.html",
      "date": "2026-10-17"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "AI 为什么总是惹人议论",
      "url": "https://kaix.in/2026/1017/",
      "date": "2026-10-17"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "世界上最好的二级域名",
      "url": "http://www.auiou.com/relevant/00002223.jsp",
      "date": "2026-10-17"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "山",
      "url": "https://acevs.com/5298/",
      "date": "2026-10-17"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0014",
      "url": "https://lenciel.com/2026/10/fragments-0x0014/",
      "date": "2026-10-17"
    }
  ],
  "2008": [
    {
      "name": "河马",
      "year": "08",
      "title": "Debian最新版本和老版本的apt sources.list",
      "url": "https://www.iamhippo.com/2026-10/1950.html",
      "date": "2026-10-17"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "呆呆面板 daidai-panel：轻量级青龙面板替代品介绍与 Docker 部署教程",
      "url": "https://blog.einverne.info/post/2026/10/daidai-panel.html",
      "date": "2026-10-17"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "现在总算是知道WorkBuddy的市场份额为啥一路上涨了",
      "url": "https://www.linyufan.com/post/6093",
      "date": "2026-10-17"
    },
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "网络问题排查的思路和技巧",
      "url": "https://www.kawabangga.com/posts/7431",
      "date": "2026-10-17"
    }
  ],
  "2014": [
    {
      "name": "xulihang",
      "year": "14",
      "title": "番号的背后",
      "url": {
        "$": {
          "href": "https://blog.xulihang.me/japanese-av-industry/"
        }
      },
      "date": "2026-10-17"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "万界书简：把散落各处的信，收进同一份目录",
      "url": "https://blog.52hyjs.com/post-1290.html",
      "date": "2026-10-17"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "Ubuntu 下 WanGP 部署 MiniMax H3",
      "url": "https://www.suiyan.cc/blog/20261017152537",
      "date": "2026-10-17"
    }
  ],
  "2018": [
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "明明很高冷，猫咪为什么可以征服我",
      "url": "https://yxgoa.cn/index.php/archives/12/",
      "date": "2026-10-17"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-17：Jockey by TwelveLabs、Harness by Autonomous、Tesla Roadster",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-17",
      "date": "2026-10-17"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "电梯卡",
      "url": "https://blog.verynb.net/posts/29816.html",
      "date": "2026-10-17"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "360 SEO和百度SEO有什么不同？",
      "url": "https://www.bailuze.com/24511.html",
      "date": "2026-10-17"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "校园秋色",
      "url": "https://xingwangzhe.fun/posts/campus-autumn-20261017/",
      "date": "2026-10-17"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "Mario Kart",
      "url": "https://www.immarcus.com/blog/mario-kart",
      "date": "2026-10-17"
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
