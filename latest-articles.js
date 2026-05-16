// ==================== latest-articles.js ====================
// 抓取日期: 5/15/2026, 8:19:30 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "高铁上花三小时，我部署了全自动SSL证书同步脚本",
      "url": "https://dongjunke.cn/posts/2026/05/10/48163.html",
      "date": "2026-05-10"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "散装药",
      "url": "https://kaix.in/2026/0508/",
      "date": "2026-05-08"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "Obsidian 成为我文字输入主力工具",
      "url": "https://joojen.com/archives/8958.html",
      "date": "2026-05-12"
    }
  ],
  "2007": [
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "股票已经连续5天一字跌停",
      "url": "https://zhujianlin.com/archives/1893.html",
      "date": "2026-05-11"
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
      "name": "多多",
      "year": "09",
      "title": "wp的默认feed地址打不开处理办法",
      "url": "https://ddlog.cn/?p=471",
      "date": "2026-05-08"
    }
  ],
  "2012": [
    {
      "name": "王鑫",
      "year": "12",
      "title": "AI写小说基本思路探讨",
      "url": "https://wonse.info/ai-write-novel.html",
      "date": "2026-05-12"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "凡人修仙靠逆天，剑来护心靠齐先生｜那一句 “莫让他输在情字” 看哭多少人",
      "url": "https://blog.52hyjs.com/post-1271.html",
      "date": "2026-05-15"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "DeepSeek V4的tid2eid是怎么来的？",
      "url": "https://kexue.fm/archives/11750",
      "date": "2026-05-15"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "5.10 母亲节亦是加班日",
      "url": "https://liuqingwushui.top/archives/156/",
      "date": "2026-05-10"
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
