// ==================== latest-articles.js ====================
// 抓取日期: 6/29/2026, 8:57:36 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "折腾过各种语言后，我为什么总是回到 Go 语言？",
      "url": "https://tonybai.com/2026/06/29/keep-returning-to-go-no-matter-how-many-languages-i-try/",
      "date": "2026-06-28"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "蚊子的价值",
      "url": "http://www.xlanda.net/posts/22295",
      "date": "2026-06-29"
    },
    {
      "name": "Jake",
      "year": "04",
      "title": "Syrovex 招聘｜寻找优秀的创业伙伴",
      "url": "https://jaketao.com/syrovex-hiring",
      "date": "2026-06-29"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "老板娘炒股",
      "url": "https://synyan.cn/t/63007",
      "date": "2026-06-29"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "小记2026年6月29日",
      "url": "https://acevs.com/5069/",
      "date": "2026-06-29"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "腾讯云服务器如何重启宝塔面板？",
      "url": "https://www.munue.com/803.html",
      "date": "2026-06-29"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "六月小结｜继续走，别停",
      "url": "https://zhujay.com/blog/blog_detail.html?id=1248",
      "date": "2026-06-29"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "浏览器原生支持JSON模块导入与开发啦！",
      "url": "https://www.zhangxinxu.com/wordpress/2026/06/native-json-module-import/",
      "date": "2026-06-29"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "提供临时邮箱",
      "url": "https://www.mmtx.net/1174.html",
      "date": "2026-06-29"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "时隔两天，开源笔记软件ZNote又双叒叕更新了，前来汇报",
      "url": "https://blog.xiaoz.org/archives/23157",
      "date": "2026-06-29"
    },
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "生活来在一个包里",
      "url": "https://www.kawabangga.com/posts/7314",
      "date": "2026-06-29"
    }
  ],
  "2017": [
    {
      "name": "2broear",
      "year": "17",
      "title": "最近让AI帮忙做的一些事",
      "url": "https://blog.2broear.com/notes/29-06-2026_ai-powered-blog",
      "date": "2026-06-29"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "无港卡开通 Stripe 收款和 Nofollow 转 Dofollow 技巧",
      "url": "https://www.ccgxk.com/codeother/793.html",
      "date": "2026-06-29"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "GitHub一周热点",
      "url": "https://qiukui-note.happy365.day/20260629/github-trends-weekly/",
      "date": "2026-06-29"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "AirPods 追回记",
      "url": "https://blog.solazy.me/20260629/",
      "date": "2026-06-29"
    },
    {
      "name": "李锋镝",
      "year": "19",
      "title": "Kratos+主题新功能预览及功能演示",
      "url": "https://www.lifengdi.com/article/wordpress/4744",
      "date": "2026-06-29"
    }
  ],
  "2020": [
    {
      "name": "Z次元",
      "year": "20",
      "title": "无标题",
      "url": "https://blog.ahzoo.cn/diary/",
      "date": "2026-06-29"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "又拍云图片无法访问-解决方法",
      "url": "https://xiangming.site/1132.html",
      "date": "2026-06-29"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "魔法的世界",
      "url": "https://www.immarcus.com/blog/world-of-magic",
      "date": "2026-06-29"
    }
  ],
  "2026": [
    {
      "name": "一万先生",
      "year": "26",
      "title": "网易云音乐拿永久黑胶vip教程(音乐人认证)",
      "url": "/feed/9",
      "date": "2026-06-29"
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
