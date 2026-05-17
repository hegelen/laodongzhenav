// ==================== latest-articles.js ====================
// 抓取日期: 5/16/2026, 8:04:50 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "推荐2026年度的新型特级网红",
      "url": "http://www.auiou.com/relevant/00002152.jsp",
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
      "title": "弃猫",
      "url": "https://dujun.io/018fd448-defe-5530-adea-a1cf4d5f42f2.html",
      "date": "2026-05-16"
    },
    {
      "name": "军",
      "year": "08",
      "title": "蜘蛛一天爬我一万次",
      "url": "https://me.xu19.com/spider-crawls-10000-times-a-day/",
      "date": "2026-05-16"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "Claude Code /goal：让 AI 自主持续工作直到达成目标的新命令",
      "url": "https://blog.einverne.info/post/2026/05/claude-code-goal-command.html",
      "date": "2026-05-13"
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
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "最近卖掉的域名",
      "url": "https://heming.org/2460.html",
      "date": "2026-05-16"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客加一层“语义索引”（二）：JSON 结构与生成脚本的实现",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14244/",
      "date": "2026-05-15"
    },
    {
      "name": "小野",
      "year": "23",
      "title": "狐蒂云疑似准备跑路：低价云服务器的水有多深",
      "url": "https://lb5.net/253.html",
      "date": "2026-05-06"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "爱于细碎烟火，悟爱的本真爱",
      "url": "https://liyinwaihe.com/399.html",
      "date": "2026-05-09"
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
