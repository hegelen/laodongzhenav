// ==================== latest-articles.js ====================
// 抓取日期: 5/9/2026, 7:59:36 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2007": [
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "2026年4月总结",
      "url": "https://zhujianlin.com/archives/1879.html",
      "date": "2026-04-30"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "古苗寨万家灯火，黄果树瀑雨通天",
      "url": "https://dujun.io/may-day-family-trip-to-guizhou.html",
      "date": "2026-05-06"
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
  "2017": [
    {
      "name": "染念",
      "year": "17",
      "title": "lens|打造最强的个人LLM聚合网关系统",
      "url": "https://dyedd.cn/posts/lens_api",
      "date": "2026-04-28"
    },
    {
      "name": "科学空间",
      "year": "17",
      "title": "直接以FID为Loss：从梯度计算到流式训练",
      "url": "https://kexue.fm/archives/11738",
      "date": "2026-05-08"
    }
  ],
  "2018": [
    {
      "name": "枋柚梓的猫会发光",
      "year": "18",
      "title": "从 1Password 迁移到 Bitwarden：一次涨价引发的“搬家”",
      "url": "https://inkss.cn/post/5a013cf6/",
      "date": "2026-05-08"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "通过openclaw装hermes，倒反天罡",
      "url": "https://liuqingwushui.top/archives/155/",
      "date": "2026-04-30"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "Windsurf切号器分享",
      "url": "https://jyblog.cn/5519/",
      "date": "2026-05-09"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "通用的 AI IDE 账号管理工具 Cockpit-Tools",
      "url": "https://www.sanshu.cn/arc/262.html",
      "date": "2026-05-07"
    }
  ],
  "2025": [
    {
      "name": "巴适小馨",
      "year": "25",
      "title": "善待和尊重处在低谷期的奋进者",
      "url": "https://p4z.cn/archives/98.html",
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

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇最近14天文章');
