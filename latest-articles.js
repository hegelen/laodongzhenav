// ==================== latest-articles.js ====================
// 抓取日期: 5/5/2026, 7:41:59 AM
// 只抓取最近7天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "桌面宠物",
      "url": "https://kaix.in/2026/0504/",
      "date": "2026-05-04"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "我只会瞎折腾！暨兰空图床上传图片失败解决方法！",
      "url": "https://laozhang.org/archives/4056.html",
      "date": "2026-04-28"
    },
    {
      "name": "老卫",
      "year": "09",
      "title": "历时三年《鸿蒙系统（HarmonyOS）移动开发实战》简介",
      "url": "https://waylau.com/about-harmonyos-short-video-book/",
      "date": "2026-05-01"
    }
  ],
  "2015": [
    {
      "name": "东哥",
      "year": "15",
      "title": "从零搭建一套跨平台的icon图标库（四）- 资源预览",
      "url": "https://blog.hudd.cn/1414.html",
      "date": "2026-05-04"
    }
  ],
  "2017": [
    {
      "name": "染念",
      "year": "17",
      "title": "lens|打造最强的个人LLM聚合网关系统",
      "url": "https://dyedd.cn/posts/lens_api",
      "date": "2026-04-28"
    }
  ],
  "2021": [
    {
      "name": "诺依阁",
      "year": "21",
      "title": "openclaw命令行与搭建(2026.5.3版本)",
      "url": "https://blog.nuoyis.net/posts/93b5.html",
      "date": "2026-05-04"
    }
  ],
  "2022": [
    {
      "name": "吃猫的鱼",
      "year": "22",
      "title": "鸿蒙安装 Google Play 应用：microG 方案实践",
      "url": "https://www.fish9.cn/archives/477/",
      "date": "2026-05-04"
    },
    {
      "name": "倦意",
      "year": "22",
      "title": "用苹果 iOS 小火箭保护隐私IP（防泄露）",
      "url": "https://jyblog.cn/5487/",
      "date": "2026-05-04"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "魔兽世界-熊猫人之谜：从体验到理解的一段阶段性旅程",
      "url": "http://blog.tangwudi.com/technology/entertainment14204/",
      "date": "2026-05-01"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "阿城湿地公园五一随拍",
      "url": "https://siwei.li/a-cheng-shi-di-gong-yuan-wu-yi-sui-pai/",
      "date": "2026-05-03"
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

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇最近7天文章');
