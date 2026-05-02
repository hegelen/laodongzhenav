// ==================== latest-articles.js ====================
// 自动生成，请勿手动修改
// 抓取日期: 5/2/2026, 11:43:51 AM
// 共 10 篇文章，覆盖 5 个年份

const latestArticlesByYear = {
  "11": [
    {
      "name": "耳朵的主人",
      "year": "11",
      "title": "行将四十，时常在夜里失眠，也许是睡不着，也许是不想睡。",
      "url": "https://www.edzbe.com/radio/vol-75.html",
      "date": "2026-03-20"
    },
    {
      "name": "罗磊",
      "year": "11",
      "title": "开启我的「人生 AI」计划",
      "url": "https://luolei.org/life-ai",
      "date": "2026-03-10"
    }
  ],
  "15": [
    {
      "name": "牧人池塘",
      "year": "15",
      "title": "MySQL5.7/8.0/8.4/9.6配置文件生成器v1.0",
      "url": "https://dbanote.com/MySQL/mysql_make_cnf.html",
      "date": "2026-03-16"
    },
    {
      "name": "质数人生",
      "year": "15",
      "title": "几条普通人用好 AI 的经验",
      "url": "https://2357.life/todo/how-to-use-ai",
      "date": "2026-03-11"
    }
  ],
  "20": [
    {
      "name": "天书vip",
      "year": "20",
      "title": "真正高效的收割机制，从不以恶的面目出现",
      "url": "https://www.skybook.vip/inn/142",
      "date": "2025-12-25"
    },
    {
      "name": "HEMING",
      "year": "20",
      "title": "购买了新域名 KUN.YUN",
      "url": "https://heming.org/2241.html",
      "date": "2026-03-08"
    }
  ],
  "05": [
    {
      "name": "yaner",
      "year": "05",
      "title": "2026了",
      "url": "https://yaner.cc/688.html",
      "date": "2026-01-01"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "人生讨论(21)：“明白不”的心理机制",
      "url": "http://www.auiou.com/relevant/00002148.jsp",
      "date": "2026-05-02"
    }
  ],
  "01": [
    {
      "name": "nc-show",
      "year": "01",
      "title": "(2025) 2025 倦怠与兴味",
      "url": "https://nicrosoft.net/246/",
      "date": "2026-01-01"
    },
    {
      "name": "东评衿就",
      "year": "01",
      "title": "食草堂",
      "url": "https://dongjunke.cn/posts/2025/10/11/33842.html",
      "date": "2025-10-11"
    }
  ]
};

function getSortedYears() {
    return Object.keys(latestArticlesByYear).sort((a, b) => parseInt(a) - parseInt(b));
}

function getLatestArticles(limit = 20) {
    const allArticles = [];
    for (const year in latestArticlesByYear) {
        allArticles.push(...latestArticlesByYear[year]);
    }
    return allArticles.slice(0, limit);
}

if (typeof window !== 'undefined') {
    window.latestArticlesByYear = latestArticlesByYear;
    window.getSortedYears = getSortedYears;
    window.getLatestArticles = getLatestArticles;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { latestArticlesByYear, getSortedYears, getLatestArticles };
}

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇文章');
