// ==================== latest-articles.js ====================
// 抓取日期: 5/3/2026, 11:08:00 AM
// 只抓取最近7天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "难得正版Windows又打骨折！白菜价",
      "url": "https://me.xu19.com/windows11-big-discount/",
      "date": "2026-05-01"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "我只会瞎折腾！暨兰空图床上传图片失败解决方法！",
      "url": "https://laozhang.org/archives/4056.html",
      "date": "2026-04-28"
    }
  ],
  "2015": [
    {
      "name": "泽泽社长",
      "year": "15",
      "title": "从MacbookAir换到MacbookPro",
      "url": "https://blog.aihaonv.com/macbookair-to-macbookpro.html",
      "date": "2026-04-28"
    }
  ],
  "2016": [
    {
      "name": "woodu",
      "year": "16",
      "title": "JVS时代的经典乘客——《太鼓之达人 6》",
      "url": "https://woodu.me/jvsshidaidejingdiancheng/",
      "date": "2026-05-02"
    }
  ],
  "2017": [
    {
      "name": "染念",
      "year": "17",
      "title": "lens|打造最强的个人LLM聚合网关系统",
      "url": "https://dyedd.cn/posts/lens_api",
      "date": "2026-04-28"
    },
    {
      "name": "染念",
      "year": "17",
      "title": "lens|打造最强的个人LLM聚合网关系统",
      "url": "https://dyedd.cn/posts/lens_api",
      "date": "2026-04-28"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "游记｜在宜兴度过一个平淡的假期",
      "url": "https://blog.ops-coffee.com/r/city-china-jiangsu-wuxi-yixing-tuanjiu.html",
      "date": "2026-04-26"
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
      "name": "宗宗酱",
      "year": "23",
      "title": "这是刺激我消费啊",
      "url": "https://ygz.ink/archives/4785.html",
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
