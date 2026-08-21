// ==================== latest-articles.js ====================
// 抓取日期: 8/21/2026, 7:32:56 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 409 期）：程序员的职业未来",
      "url": "http://www.ruanyifeng.com/blog/2026/08/weekly-issue-409.html",
      "date": "2026-08-20"
    },
    {
      "name": "王通",
      "year": "03",
      "title": "王通：破译《道德经》中最难理解的一个字",
      "url": "https://www.ufoer.com/post/14455.html",
      "date": "2026-08-21"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "绿豆芽飞走了",
      "url": "http://www.xlanda.net/posts/22413",
      "date": "2026-08-21"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "Nikkor Z 24-120mm F4 S",
      "url": "https://synyan.cn/t/63492",
      "date": "2026-08-21"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "理想四旬",
      "url": "https://ezo.biz/Diary/1599.html",
      "date": "2026-08-21"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "14.3 万条/秒！VictoriaMetrics 亲自“开考”，把 8 大主流日志采集器按在地上摩擦",
      "url": "https://tonybai.com/2026/08/21/victoriametrics-vlagent-log-collectors-benchmark-2026/",
      "date": "2026-08-20"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Casio 復古造型的「智慧」錶",
      "url": "https://blog.gslin.org/archives/2026/08/22/13162/casio-%e5%be%a9%e5%8f%a4%e9%80%a0%e5%9e%8b%e7%9a%84%e3%80%8c%e6%99%ba%e6%85%a7%e3%80%8d%e9%8c%b6/",
      "date": "2026-08-21"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "雨行兰英大峡谷",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1273",
      "date": "2026-08-21"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "阿里财报AI相关数据及新闻报道的梳理",
      "url": "https://www.leitao.cn/10644.html",
      "date": "2026-08-21"
    }
  ],
  "2015": [
    {
      "name": "网工格物",
      "year": "15",
      "title": "Debian Linux 裸金属开局网络快速配置工具",
      "url": "https://songxwn.com/Debian-network-tui/",
      "date": "2026-08-20"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SQLite 到底有多牛？",
      "url": "https://www.ccgxk.com/emlog_dev/854.html",
      "date": "2026-08-21"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "被不知名的热带低压袭击了",
      "url": "https://www.imcry.vip/post/2026-8-21-804/",
      "date": "2026-08-21"
    }
  ],
  "2021": [
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "说说：妞妞，这几天折腾的够累了，好好休息吧",
      "url": "https://www.mmbkz.cn/cb4e5bd8.html",
      "date": "2026-08-20"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "游戏人间",
      "url": "https://www.wsh233.cn/post/游戏人间",
      "date": "2026-08-21"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-21",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-21",
      "date": "2026-08-21"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "AI Agent 时代，Cloudflare Precursor 正在重新定义 Bot 防护",
      "url": "https://blog.tangwudi.com/technology/homedatacenter14651/",
      "date": "2026-08-21"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "企业仍在犯的常见本地SEO错误",
      "url": "https://www.bailuze.com/24363.html",
      "date": "2026-08-21"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "博客第一次接到赞助：聊聊不繁简历",
      "url": "https://xingwangzhe.fun/posts/bufancv-first-sponsorship/",
      "date": "2026-08-21"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "移动与复制",
      "url": "https://www.immarcus.com/blog/move-and-copy",
      "date": "2026-08-21"
    },
    {
      "name": "心记",
      "year": "25",
      "title": "欢迎使用 Typecho",
      "url": "https://blog.moodlog.cn/index.php/archives/1/",
      "date": "2026-08-21"
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
