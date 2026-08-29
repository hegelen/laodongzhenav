// ==================== latest-articles.js ====================
// 抓取日期: 8/29/2026, 2:12:42 AM
// 只抓取最近14天内的文章，共 17 篇
// 目标 20 篇，实际 17 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "旧日新装再探omarchy",
      "url": "https://wlj.me/notes/sp-note-20260828-230026/",
      "date": "2026-08-28"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "What’s next?",
      "url": "https://seths.blog/2026/08/whats-next-3/",
      "date": "2026-08-28"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "你真的需要一座软件工厂吗？",
      "url": "https://tonybai.com/2026/08/29/do-your-need-a-software-factory/",
      "date": "2026-08-28"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "瞎扯淡",
      "url": "http://www.xlanda.net/posts/22430",
      "date": "2026-08-29"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "老花",
      "url": "https://ezo.biz/Diary/1624.html",
      "date": "2026-08-28"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "定时重启路由发现断连",
      "url": "https://acevs.com/5195/",
      "date": "2026-08-28"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Python 的 httpx 的狀況",
      "url": "https://blog.gslin.org/archives/2026/08/29/13167/python-%e7%9a%84-httpx-%e7%9a%84%e7%8b%80%e6%b3%81/",
      "date": "2026-08-29"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "超级Web特性HTML-in-Canvas初体验",
      "url": "https://www.zhangxinxu.com/wordpress/2026/08/html-in-canvas/",
      "date": "2026-08-28"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "林羽凡笔记系统增加了手机号验证相关功能，增加了邮箱注册账号功能",
      "url": "https://www.linyufan.com/post/5975",
      "date": "2026-08-28"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "Deepseek Harness有点儿东西",
      "url": "https://zhoutian.com/394.html",
      "date": "2026-08-28"
    },
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "Vultr HestiaCP 워드프레스 SSL 보안 인증서 오류 해결 방법",
      "url": "https://www.thewordcracker.com/intermediate/vultr-hestiacp-ssl-%ec%9d%b8%ec%a6%9d%ec%84%9c-%ec%98%a4%eb%a5%98-%ed%95%b4%ea%b2%b0/",
      "date": "2026-08-28"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "博客阅读随感 关于宠物",
      "url": "https://www.suiyan.cc/blog/20260828160554",
      "date": "2026-08-28"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "牛来大模型 Ox Alpha 此前是怎么被发现是 GLM 的？",
      "url": "https://www.ccgxk.com/emlog_dev/862.html",
      "date": "2026-08-28"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-07-06 / 移动路由器",
      "url": "https://blog.xinshijiededa.men/daily/69/",
      "date": "2026-08-28"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "【不凡摄影作品 | 2026.8.29】",
      "url": "https://www.bufanz.com/20260829851.html",
      "date": "2026-08-29"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-28",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-28",
      "date": "2026-08-28"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "必须优化的12个关键页面SEO元素",
      "url": "https://www.bailuze.com/24382.html",
      "date": "2026-08-29"
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
