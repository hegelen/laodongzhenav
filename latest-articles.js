// ==================== latest-articles.js ====================
// 抓取日期: 5/26/2026, 2:30:38 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "新加坡良治课程",
      "url": "https://wlj.me/notes/sp-note-20260526-091908/",
      "date": "2026-05-26"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Predictions, prescriptions and systems change",
      "url": "https://seths.blog/2026/05/predictions-prescriptions-and-systems-change/",
      "date": "2026-05-26"
    }
  ],
  "2007": [
    {
      "name": "织梦岁月",
      "year": "07",
      "title": "差点遇到中信信用卡换卡“隐形升级”",
      "url": "https://zhujianlin.com/archives/1993.html",
      "date": "2026-05-26"
    }
  ],
  "2014": [
    {
      "name": "卡片创作实验室",
      "year": "14",
      "title": "《柴静博客文集》：433篇文章，支持在线阅读",
      "url": "https://cnfeat.com/posts/2026/05/26/chaijingbook/",
      "date": "2026-05-25"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "클라우드웨이즈 Site Manager로 워드프레스 관리 효율 높이기",
      "url": "https://www.thewordcracker.com/basic/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ec%9b%a8%ec%9d%b4%ec%a6%88-site-manager-%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ea%b4%80%eb%a6%ac/",
      "date": "2026-05-25"
    },
    {
      "name": "满心",
      "year": "15",
      "title": "一款简约易用的防御插件SafeMange",
      "url": "https://zhoutian.com/375.html",
      "date": "2026-05-26"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "黑袍纠察队",
      "url": "https://jefftay.com/the-boys",
      "date": "2026-05-26"
    },
    {
      "name": "火米",
      "year": "23",
      "title": "WorkFlowy + Bear web = 浏览器黄金组合",
      "url": "https://huo.me/bear/",
      "date": "2026-05-26"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "1. 区块链基本知识",
      "url": "https://xice.cx/posts/ch01-web3/",
      "date": "2026-05-26"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "可循环值守和多人录制的直播录制软件",
      "url": "https://www.renhuali.cn/journal/cmpm35e18000ech81lyrekcfd",
      "date": "2026-05-26"
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
