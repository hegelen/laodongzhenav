// ==================== latest-articles.js ====================
// 抓取日期: 7/31/2026, 8:29:38 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "尝试着下调知识星球里个人星球的手续费，希",
      "url": "https://wlj.me/notes/sp-note-20260731-121452/",
      "date": "2026-07-31"
    }
  ],
  "2004": [
    {
      "name": "Jake",
      "year": "04",
      "title": "从单体应用到 SaaS：现代 Web 系统架构演进实践",
      "url": "https://jaketao.com/11935/",
      "date": "2026-07-31"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "喜欢BOW的巧克力键盘",
      "url": "http://www.xlanda.net/posts/22368",
      "date": "2026-07-31"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Stacked PR 進 Public Preview",
      "url": "https://blog.gslin.org/archives/2026/07/31/13132/stacked-pr-%e9%80%b2-public-preview/",
      "date": "2026-07-31"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "燥热七月，琐碎记录",
      "url": "https://zhujay.com/blog/blog_detail.html?id=1267",
      "date": "2026-07-31"
    }
  ],
  "2011": [
    {
      "name": "小癞子",
      "year": "11",
      "title": "镜头里的泽西岛: 海风、光影与远方",
      "url": "https://justyy.com/archives/72327",
      "date": "2026-07-31"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "盲从",
      "url": "https://www.leitao.cn/10534.html",
      "date": "2026-07-31"
    }
  ],
  "2014": [
    {
      "name": "很少明白",
      "year": "14",
      "title": "当创作开始讲「公式」，离成功学就不远了",
      "url": "https://p0werdown.com/posts/short-video-creation-formula-storyclock-hkrr",
      "date": "2026-07-31"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "점유율은 줄었는데 생태계는 커졌다? 워드프레스가 더 강력해진 이유",
      "url": "https://www.thewordcracker.com/basic/%ec%a0%90%ec%9c%a0%ec%9c%a8%ec%9d%80-%ec%a4%84%ec%97%88%eb%8a%94%eb%8d%b0-%ec%83%9d%ed%83%9c%ea%b3%84%eb%8a%94-%ec%bb%a4%ec%a1%8c%eb%8b%a4/",
      "date": "2026-07-31"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "快速使用 Openssl 生成本地 SSL 证书",
      "url": "https://www.ccgxk.com/emlog_dev/827.html",
      "date": "2026-07-31"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "向云端｜西南自驾04 - 南昌",
      "url": "https://blog.ops-coffee.com/r/2026-southwest-road-trip-04-nanchang.html",
      "date": "2026-07-31"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "久违的登台演讲",
      "url": "https://blog.solazy.me/20260731/",
      "date": "2026-07-31"
    }
  ],
  "2021": [
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "除了健康，其他都是其他。",
      "url": "https://www.ddf.im/index.php/2026/07/31/1260.html",
      "date": "2026-07-31"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "数据成为燃料：内容平台是否需要与创作者重新议价",
      "url": "https://www.wsh233.cn/post/数据成为燃料-内容平台是否需要与创作者重新议价",
      "date": "2026-07-31"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客构建“轻量级知识索引”（八）：基于系列数据的全站内容导航",
      "url": "https://blog.tangwudi.com/technology/homedatacenter14616/",
      "date": "2026-07-31"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "WordPress Astra主题免费版建站教程",
      "url": "https://www.bailuze.com/25746.html",
      "date": "2026-07-31"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "家里添了一个小宝宝",
      "url": "https://siwei.li/jia-li-tian-liao-yi-ge-xiao-bao-bao/",
      "date": "2026-07-31"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "让人血压升高的物价",
      "url": "https://www.immarcus.com/blog/bloodboiling-price",
      "date": "2026-07-31"
    },
    {
      "name": "心记",
      "year": "25",
      "title": "欢迎使用 Typecho",
      "url": "https://blog.moodlog.cn/archives/1/",
      "date": "2026-07-31"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "账户管家(马甲管理器) - 多账户登录管理器 浏览器拓展插件 送专业版套餐",
      "url": "https://www.renhuali.cn/journal/cms8cszwl00vichujhxcmvryt",
      "date": "2026-07-31"
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
