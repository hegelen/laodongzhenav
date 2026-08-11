// ==================== latest-articles.js ====================
// 抓取日期: 8/11/2026, 8:09:26 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Attention up for auction",
      "url": "https://seths.blog/2026/08/attention-up-for-auction/",
      "date": "2026-08-11"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "互联网来到我身边以前",
      "url": "https://www.tortorse.com/archives/internet-before-it-came-to-me/",
      "date": "2026-08-11"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "核心业务——画饼",
      "url": "http://www.xlanda.net/posts/22392",
      "date": "2026-08-11"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "轮滑十次",
      "url": "https://acevs.com/5161/",
      "date": "2026-08-11"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "法國禁了電話行銷 (從 opt-out 變成 opt-in)",
      "url": "https://blog.gslin.org/archives/2026/08/12/13143/%e6%b3%95%e5%9c%8b%e7%a6%81%e4%ba%86%e9%9b%bb%e8%a9%b1%e8%a1%8c%e9%8a%b7-%e5%be%9e-opt-out-%e8%ae%8a%e6%88%90-opt-in/",
      "date": "2026-08-11"
    }
  ],
  "2009": [
    {
      "name": "老卫",
      "year": "09",
      "title": "无标题",
      "url": "https://waylau.com/2026-08-11-sonar-open-community-sonar-cxx/",
      "date": "2026-08-11"
    },
    {
      "name": "老卫（柳伟卫）的技术站",
      "year": "09",
      "title": "无标题",
      "url": "https://waylau.com/2026-08-11-sonar-open-community-sonar-cxx/",
      "date": "2026-08-11"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "今天把博客的评论打开了-20260811",
      "url": "https://guoxiaoli.com/post/671.html",
      "date": "2026-08-11"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.8.11",
      "url": "https://www.linyufan.com/post/5947",
      "date": "2026-08-11"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "谁不焦虑？",
      "url": "https://www.suiyan.cc/blog/20260811132937",
      "date": "2026-08-11"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海的生态越来越完善了！",
      "url": "https://www.ccgxk.com/codeother/840.html",
      "date": "2026-08-11"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "Cursor、claude code、codex使用",
      "url": "https://liuqingwushui.top/archives/184/",
      "date": "2026-08-11"
    }
  ],
  "2020": [
    {
      "name": "老卢",
      "year": "20",
      "title": "说说：#2026-08-11 10:12",
      "url": "https://blog.el9.cn/memos/3048c69e.html",
      "date": "2026-08-11"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "分享的外衣",
      "url": "https://www.wsh233.cn/post/分享的外衣",
      "date": "2026-08-11"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "Zdir 网盘 图床 Typecho 专用上传插件 NetDiskImg 分享",
      "url": "https://9sb.net/archives/zdir-netdisk-image-bed-typecho-dedicated-upload-plugin-netdiskimg-share.html",
      "date": "2026-08-11"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-11",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-11",
      "date": "2026-08-11"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "支持SEO和用户体验的网站结构应该是什么样子？",
      "url": "https://www.bailuze.com/24327.html",
      "date": "2026-08-11"
    },
    {
      "name": "小归客",
      "year": "23",
      "title": "迷你世界地图地形码大全2024",
      "url": "https://xgk.pw/archives/318/",
      "date": "2026-08-11"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "现代人的刻舟求剑",
      "url": "https://xice.cx/posts/thinking260811/",
      "date": "2026-08-11"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "反客为主",
      "url": "https://www.immarcus.com/blog/guest-becomes-host",
      "date": "2026-08-11"
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
