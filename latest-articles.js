// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-27 02:10:08
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 421 期）：AI 的疯狂造富",
      "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-421.html",
      "date": "2026-11-27"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "头痛医头，脚痛医脚",
      "url": "https://ezo.biz/Diary/1859.html",
      "date": "2026-11-26"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "又是一个笑话",
      "url": "https://www.xlanda.net/posts/22648",
      "date": "2026-11-27"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "重读《岳阳楼记》：滕子京为什么被贬巴陵",
      "url": "https://blog.delphij.net/posts/2026/11/memorial-to-yueyang-pavilion/",
      "date": "2026-11-26"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "二手键盘第八回合",
      "url": "https://acevs.com/5391/",
      "date": "2026-11-26"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "我楼上的邻居",
      "url": "https://www.seis-jun.xyz/blog/2026-11-27-my-neighbour-upstairs.html",
      "date": "2026-11-26"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "今日有氧拉满",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1298",
      "date": "2026-11-26"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "软件 || 二开了一款工作管理软件【叮咪】",
      "url": "https://www.yishu.pro/418.html",
      "date": "2026-11-26"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "我文章里的 AI 味",
      "url": "https://www.iliu.org/posts/the-ai-flavor-in-my-posts/",
      "date": "2026-11-27"
    },
    {
      "name": "欧雷流",
      "year": "09",
      "title": "是时候升级了：从「Coding as Hobby」到「欧雷智造」",
      "url": "https://ourai.ws/posts/rebranding-my-professional-stuff/",
      "date": "2026-11-26"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "ZPad 文本编辑器与 CotEditor、Notepad– 编辑器内存占用对比",
      "url": "https://blog.xiaoz.org/archives/23793",
      "date": "2026-11-26"
    }
  ],
  "2014": [
    {
      "name": "运营不加班",
      "year": "14",
      "title": "50块的ESP32-S3，人走自动锁屏、靠近无感解锁、重启免敲密码",
      "url": "https://nops.icu/archives/285/",
      "date": "2026-11-26"
    }
  ],
  "2018": [
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "慢慢走，也是在向前",
      "url": "https://yxgoa.cn/index.php/archives/1032/",
      "date": "2026-11-26"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "回到QQ邮箱",
      "url": "https://www.imcry.vip/post/2026-11-26-1609/",
      "date": "2026-11-26"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "土地与人口",
      "url": "https://www.wsh233.cn/post/土地与人口",
      "date": "2026-11-27"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-26：MyClaw 3.0、Airbot、Hiring Right Now",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-26",
      "date": "2026-11-26"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "你知道的，雨风酒馆明天仍会开门",
      "url": "https://blog.mfwt.top/index.php/archives/1716/",
      "date": "2026-11-26"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "月访问量突破2000！",
      "url": "https://siwei.li/over-2000-monthly-visits/",
      "date": "2026-11-26"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "《山梨糖醇的通透》",
      "url": "https://xingwangzhe.fun/posts/sorbitol-clearout/",
      "date": "2026-11-26"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "博客重启半年",
      "url": "https://sheep5.net/archives/26112709.html",
      "date": "2026-11-27"
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
