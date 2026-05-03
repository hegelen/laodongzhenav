// ==================== latest-articles.js ====================
// 抓取日期: 5/3/2026, 12:37:34 PM
// 只抓取最近7天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "人生讨论(21)：“明白不”的心理机制",
      "url": "http://www.auiou.com/relevant/00002148.jsp",
      "date": "2026-05-02"
    }
  ],
  "2007": [
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "2026年4月总结",
      "url": "https://zhujianlin.com/archives/1879.html",
      "date": "2026-04-30"
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
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "歧视不需要恶意",
      "url": "https://wangyurui.com/posts/qi-shi-bu-xu-yao-e-yi-fc2cb16c",
      "date": "2026-05-01"
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
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "Juanyi Chat：现代化实时的聊天室，无需框架依赖，开箱即用。",
      "url": "https://jyblog.cn/5465/",
      "date": "2026-05-02"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "在谷歌商家资料中选择并优化分类",
      "url": "https://www.bailuze.com/24049.html",
      "date": "2026-05-02"
    }
  ],
  "2024": [
    {
      "name": "ImQi1",
      "year": "24",
      "title": "为了一个女孩，我哭了一整晚",
      "url": "https://imqi1.com/content/note/1009",
      "date": "2026-04-27"
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
