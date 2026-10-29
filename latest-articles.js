// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-29 23:13:58
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "小公司做小产品生存记",
      "url": "https://wlj.me/notes/sp-note-20261029-223204/",
      "date": "2026-10-29"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Explaining funny",
      "url": "https://seths.blog/2026/10/explaining-funny/",
      "date": "2026-10-29"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "狼狈上下车",
      "url": "https://www.xlanda.net/posts/22580",
      "date": "2026-10-29"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "平常是道",
      "url": "https://ezo.biz/Diary/1779.html",
      "date": "2026-10-29"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "最近科技大起大落",
      "url": "https://acevs.com/5328/",
      "date": "2026-10-29"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "关于登味",
      "url": "https://www.seis-jun.xyz/blog/2026-10-29-boomer-vibe.html",
      "date": "2026-10-29"
    },
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "九寨沟",
      "url": "https://ltmltm.cn/bk/1504.html",
      "date": "2026-10-29"
    }
  ],
  "2010": [
    {
      "name": "lilydjwg",
      "year": "10",
      "title": "\n        加固我的virtiofs\n      ",
      "url": "https://blog.lilydjwg.me/posts/217055.html",
      "date": "2026-10-29"
    }
  ],
  "2011": [
    {
      "name": "老孙",
      "year": "11",
      "title": "CommentNotify 一款 Typecho 评论  QQ / 微信通知插件",
      "url": "https://www.imsun.org/archives/1803.html",
      "date": "2026-10-29"
    },
    {
      "name": "Verne",
      "year": "11",
      "title": "Aside AI 浏览器介绍：既能自己干活，也能接入 Agent",
      "url": "https://blog.einverne.info/post/2026/10/aside-ai-browser.html",
      "date": "2026-10-29"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "聊聊最近关于 AI 硬件的思考 -20261029",
      "url": "https://guoxiaoli.com/post/680.html",
      "date": "2026-10-29"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "游戏",
      "url": "https://www.kawabangga.com/posts/7446",
      "date": "2026-10-29"
    }
  ],
  "2014": [
    {
      "name": "运营不加班",
      "year": "14",
      "title": "一台机器，两家公司。绕过模型安全层渗透测试",
      "url": "https://nops.icu/archives/258/",
      "date": "2026-10-29"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스닷컴, 모든 유료 플랜에서 플러그인 및 테마 설치 가능",
      "url": "https://www.thewordcracker.com/basic/wordpress-com-plugins-themes-paid-plans/",
      "date": "2026-10-29"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-08-18 / 雷霆音效",
      "url": "https://blog.xinshijiededa.men/daily/108/",
      "date": "2026-10-29"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "「Z 世代」很鳥",
      "url": "https://blog.giveanornot.com/gen-z-sucks/",
      "date": "2026-10-29"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-29：Dedica、bytemail、BotGauge",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-29",
      "date": "2026-10-29"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "三叔 DeepSeek 插件市场：三步安装",
      "url": "https://www.sanshu.cn/atc/101.html",
      "date": "2026-10-29"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "我想要独处时间",
      "url": "https://www.immarcus.com/blog/i-want-solitude",
      "date": "2026-10-29"
    },
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "根域名与子域名做网站的区别",
      "url": "https://liyinwaihe.com/19.html",
      "date": "2026-10-29"
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
