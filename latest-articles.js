// ==================== latest-articles.js ====================
// 抓取日期: 6/27/2026, 6:05:36 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "You don’t need a better camera",
      "url": "https://seths.blog/2026/06/you-dont-need-a-better-camera/",
      "date": "2026-06-26"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "从 WordPress 到 Hugo：一个 20 年技术博客的迁移实录",
      "url": "https://tonybai.com/2026/06/27/wp-to-hugo-migration-journey/",
      "date": "2026-06-26"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "入手血糖试纸",
      "url": "http://www.xlanda.net/posts/22290",
      "date": "2026-06-27"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "小登中登老登股票行业分类",
      "url": "https://acevs.com/5063/",
      "date": "2026-06-26"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "人生讨论(25)：永远不能出口的话",
      "url": "http://www.auiou.com/relevant/00002164.jsp",
      "date": "2026-06-26"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "纷扰春夏时",
      "url": "https://yishu-life.com/index.php/archives/483.html",
      "date": "2026-06-26"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": " 软件 || 图集规范管理软件-文档管理器反馈意见汇总（1）",
      "url": "https://www.yishu.pro/228.html",
      "date": "2026-06-27"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "第九章 算法、债务与新垄断：21世纪经济的新问题",
      "url": "https://www.leitao.cn/10388.html",
      "date": "2026-06-27"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "快来注册Agent Mail",
      "url": "https://www.linyufan.com/post/5870",
      "date": "2026-06-27"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "小而美的ZNote笔记软件 —— 支持Docker私有部署和WEB访问",
      "url": "https://blog.xiaoz.org/archives/23140",
      "date": "2026-06-26"
    }
  ],
  "2015": [
    {
      "name": "Guyskk",
      "year": "15",
      "title": "AI 编程=控制系统：BeecodeAI 的设计原理",
      "url": "https://blog.guyskk.com/notes/ai-coding-control-system",
      "date": "2026-06-26"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "停止使用 JWT ！",
      "url": "https://www.ccgxk.com/emlog_dev/790.html",
      "date": "2026-06-26"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "优秀博客大赛颁奖现场",
      "url": "https://www.suiyan.cc/blog/20260626163154",
      "date": "2026-06-26"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "流行词之走个面儿",
      "url": "https://qiukui-note.happy365.day/20260627/zou-ge-mian-er/",
      "date": "2026-06-27"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "3块的CoCo美式咖啡",
      "url": "https://www.imcry.vip/post/2026-6-26-1845/",
      "date": "2026-06-26"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-26",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-26",
      "date": "2026-06-26"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "二周目了",
      "url": "https://blog.verynb.net/posts/5172.html",
      "date": "2026-06-26"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "上周拔牙这周补牙😭",
      "url": "https://ygz.ink/archives/5373.html",
      "date": "2026-06-26"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "明天开车十小时",
      "url": "https://www.immarcus.com/blog/ten-hour-drive-tomorrow",
      "date": "2026-06-27"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "这个blog，想换域名了",
      "url": "https://mzdsx.com/2026/06/26/%e8%bf%99%e4%b8%aablog%ef%bc%8c%e6%83%b3%e6%8d%a2%e5%9f%9f%e5%90%8d%e4%ba%86/",
      "date": "2026-06-26"
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
