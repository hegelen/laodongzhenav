// ==================== latest-articles.js ====================
// 抓取日期: 7/7/2026, 8:57:48 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The Builder’s Creed",
      "url": "https://seths.blog/2026/07/the-builders-creed/",
      "date": "2026-07-07"
    }
  ],
  "2004": [
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "大跌有感",
      "url": "https://synyan.cn/t/63122",
      "date": "2026-07-07"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "冰箱放哪里",
      "url": "http://www.xlanda.net/posts/22314",
      "date": "2026-07-07"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "GPT-5.6 Sol Ultra 預計也會上 Codex",
      "url": "https://blog.gslin.org/archives/2026/07/07/13092/gpt-5-6-sol-ultra-%e9%a0%90%e8%a8%88%e4%b9%9f%e6%9c%83%e4%b8%8a-codex/",
      "date": "2026-07-07"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "https利弊(1)：https性能测试(可下载精确测试工具)",
      "url": "http://www.auiou.com/relevant/00002167.jsp",
      "date": "2026-07-08"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "下雨天凉快",
      "url": "https://acevs.com/5087/",
      "date": "2026-07-07"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "电源保护器",
      "url": "https://ltmltm.cn/bk/1475.html",
      "date": "2026-07-07"
    }
  ],
  "2009": [
    {
      "name": "1900的灯泡店",
      "year": "09",
      "title": "287、小暑",
      "url": "https://1900.live/287-xiao-shu/",
      "date": "2026-07-07"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "三块钱，一个下午，AI帮我做出了眼镜商城的Android App",
      "url": "https://www.iliu.org/posts/mimo-android-app-jingyuanxuan/",
      "date": "2026-07-07"
    },
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "AI时代网站智能体无障碍访问开发指南",
      "url": "https://www.zhangxinxu.com/wordpress/2026/07/ai-agent-accessible-guide/",
      "date": "2026-07-07"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "又发现一个新的CLi的Agent工具DeepCode，我又接入了“林羽凡笔记”的MCP",
      "url": "https://www.linyufan.com/post/5887",
      "date": "2026-07-07"
    }
  ],
  "2014": [
    {
      "name": "松茸",
      "year": "14",
      "title": "分享AI创作《山海经·中次十经》之电动车",
      "url": "https://zrs.xyz/2152.html",
      "date": "2026-07-07"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "观看哥飞年终会议复盘的 8 个 Web 出海笔记",
      "url": "https://www.ccgxk.com/codeother/801.html",
      "date": "2026-07-07"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "BlogClub的礼物—鼠标垫",
      "url": "https://liuqingwushui.top/archives/170/",
      "date": "2026-07-07"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-07",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-07",
      "date": "2026-07-07"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "忙里偷闲，给盆景“善后”的一晚",
      "url": "https://9sb.net/archives/taking-a-break-from-busyness-and-giving-the-bonsai-a-night-of-aftermath.html",
      "date": "2026-07-07"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "为了让用户给博客投稿 我做了一个投稿系统",
      "url": "https://jyblog.com/5779/",
      "date": "2026-07-07"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "PHP与SEO：如何创建搜索引擎友好的PHP页面",
      "url": "https://www.bailuze.com/24221.html",
      "date": "2026-07-07"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "热血足球的发源地",
      "url": "https://www.immarcus.com/blog/calcio-storico",
      "date": "2026-07-07"
    }
  ],
  "2026": [
    {
      "name": "安迪",
      "year": "26",
      "title": "埃及对战阿根廷，热血沸腾的一场球赛",
      "url": "https://i55.top/archives/545/",
      "date": "2026-07-07"
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
