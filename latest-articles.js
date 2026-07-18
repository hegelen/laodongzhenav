// ==================== latest-articles.js ====================
// 抓取日期: 7/18/2026, 8:11:22 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Imminent, urgent, trending and important",
      "url": "https://seths.blog/2026/07/imminent-urgent-trending-and-important/",
      "date": "2026-07-18"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "简单对比几个模型唱粤语歌",
      "url": "https://ezo.biz/New_Learning/1501.html",
      "date": "2026-07-18"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "告别标签页焦虑：我让 AI 帮我做了个浏览器插件 TabQueue",
      "url": "https://tonybai.com/2026/07/18/introducing-tabqueue/",
      "date": "2026-07-17"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "杂记2026年7月18日",
      "url": "https://acevs.com/5111/",
      "date": "2026-07-18"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "博客廿周年，纪念明信片正式发布啦！",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1262",
      "date": "2026-07-18"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "自己动手更换空调滤芯",
      "url": "https://me.xu19.com/diy-replace-mercedes-benz-glk300-cabin-air-filter/",
      "date": "2026-07-18"
    }
  ],
  "2012": [
    {
      "name": "王鑫",
      "year": "12",
      "title": "Seafile服务端，修改文件存储目录（二）",
      "url": "https://wonse.info/seafile-data-2.html",
      "date": "2026-07-18"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "林羽凡笔记增加大模型版本字段ai_model_version",
      "url": "https://www.linyufan.com/post/5911",
      "date": "2026-07-18"
    }
  ],
  "2016": [
    {
      "name": "ximi",
      "year": "16",
      "title": "Mac OS 网络优化,解决SMB,RDP链接延迟问题",
      "url": "https://www.ximi.me/post-6046.html",
      "date": "2026-07-18"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "创造者悖论",
      "url": "https://www.suiyan.cc/blog/20260718215503",
      "date": "2026-07-18"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "年轻人怎么抓住 AI 发展的风口？",
      "url": "https://www.ccgxk.com/codeother/812.html",
      "date": "2026-07-18"
    }
  ],
  "2019": [
    {
      "name": "凌飞",
      "year": "19",
      "title": "足球亦是人生",
      "url": "https://www.llingfei.com/706.html",
      "date": "2026-07-18"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "Domain thief Jianfei Wang is back. Keep an eye on your domains!",
      "url": "https://heming.org/2698.html",
      "date": "2026-07-18"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "WordPress 6.9.0-6.9.4、7.0.0-7.0.1存在严重安全漏洞，尽快更新！",
      "url": "https://www.bufanz.com/20260718754.html",
      "date": "2026-07-18"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-18",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-18",
      "date": "2026-07-18"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "结构性数据错误：如何检测并有效纠正？",
      "url": "https://www.bailuze.com/24251.html",
      "date": "2026-07-18"
    },
    {
      "name": "小归客",
      "year": "23",
      "title": "水彩手绘插画、复古港风写实淡彩",
      "url": "https://xgk.pw/archives/315/",
      "date": "2026-07-18"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "鋼琴連載3，",
      "url": "https://jefftay.com/blog-posts/piano-3",
      "date": "2026-08-01"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "摄影练习",
      "url": "https://ygz.ink/archives/5556.html",
      "date": "2026-07-18"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "三种法律，三种世界",
      "url": "https://www.immarcus.com/blog/three-laws-three-worlds",
      "date": "2026-07-18"
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
