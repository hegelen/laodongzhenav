// ==================== latest-articles.js ====================
// 抓取日期: 5/9/2026, 5:13:09 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "我的独立博客，终于有了一个像样的后台",
      "url": "https://dongjunke.cn/posts/2026/05/05/50369.html",
      "date": "2026-05-05"
    }
  ],
  "2004": [
    {
      "name": "龙哥",
      "year": "04",
      "title": "用ipabc.de做了一个ip查询网站",
      "url": "https://long.ge/18063.html",
      "date": "2026-04-28"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "wp的默认feed地址打不开处理办法",
      "url": "https://ddlog.cn/?p=471",
      "date": "2026-05-08"
    },
    {
      "name": "老卫",
      "year": "09",
      "title": "历时三年《鸿蒙系统（HarmonyOS）移动开发实战》简介",
      "url": "https://waylau.com/about-harmonyos-short-video-book/",
      "date": "2026-05-01"
    }
  ],
  "2010": [
    {
      "name": "宇间草",
      "year": "10",
      "title": "一场与AI的对话：我如何逼问出“资本大于人命”的系统真相",
      "url": "https://2days.org/19988.html",
      "date": "2026-05-08"
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
  "2019": [
    {
      "name": "李锋镝",
      "year": "19",
      "title": "踩坑60+次后，我终于搞懂 Claude Skill 怎么写才会真的触发",
      "url": "https://www.lifengdi.com/ren-gong-zhi-neng/4698",
      "date": "2026-04-27"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "通过openclaw装hermes，倒反天罡",
      "url": "https://liuqingwushui.top/archives/155/",
      "date": "2026-04-30"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客加一层“语义索引”（上）：结构设计与构建流程",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14228/",
      "date": "2026-05-07"
    }
  ],
  "2025": [
    {
      "name": "落花雨记",
      "year": "25",
      "title": "牛马生活",
      "url": "https://www.luohuayu.cn/68.html",
      "date": "2026-05-08"
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
