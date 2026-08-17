// ==================== latest-articles.js ====================
// 抓取日期: 8/17/2026, 7:38:49 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Consider the AI tear down",
      "url": "https://seths.blog/2026/08/consider-the-ai-tear-down/",
      "date": "2026-08-17"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 语言史上“钉子户”提案重启：一场关于 string(int) 的 14 年拉锯战",
      "url": "https://tonybai.com/2026/08/17/go-issue-3939-string-int-proposal-revival/",
      "date": "2026-08-16"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "尝试用手机写作",
      "url": "https://ezo.biz/Diary/1584.html",
      "date": "2026-08-17"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "乐趣",
      "url": "https://acevs.com/5173/",
      "date": "2026-08-17"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "2026年7月房地产数据",
      "url": "https://joojen.com/archives/9088.html",
      "date": "2026-08-17"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "Claude Design 系统提示词学习",
      "url": "https://www.biaodianfu.com/claude-design-sys-prompt/",
      "date": "2026-08-17"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "这几年最可惜的两个产品（我接触的）",
      "url": "https://www.linyufan.com/post/5957",
      "date": "2026-08-17"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "关于AI智能体开发的一些思路和经验分享",
      "url": "https://blog.xiaoz.org/archives/23349",
      "date": "2026-08-17"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 글쓴이 이름 변경 방법",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ea%b8%80%ec%93%b4%ec%9d%b4-%ec%9d%b4%eb%a6%84-%eb%b3%80%ea%b2%bd-%eb%b0%a9%eb%b2%95/",
      "date": "2026-08-17"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "流形上的最速下降：7. Stiefel的解析解",
      "url": "https://kexue.fm/archives/11864",
      "date": "2026-08-17"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "博客阅读随感20260817",
      "url": "https://www.suiyan.cc/blog/20260817124015",
      "date": "2026-08-17"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "哇咔财务管家，正式上架 Apple Store 啦",
      "url": "https://blog.ops-coffee.com/fire/wakaka-finance-app-listed-app-store.html",
      "date": "2026-08-17"
    },
    {
      "name": "秋葵",
      "year": "18",
      "title": "无标题",
      "url": "https://qiukui-note.happy365.day/20260817/undefined/",
      "date": "2026-08-17"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "一个人的烤肉",
      "url": "https://liuqingwushui.top/archives/186/",
      "date": "2026-08-17"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "人生的意義（2026）",
      "url": "https://blog.giveanornot.com/the-meaning-of-life-2026/",
      "date": "2026-08-17"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "WordPress网站出现大量非正常访问记录、访问后台登录地址",
      "url": "https://www.bufanz.com/20260817814.html",
      "date": "2026-08-17"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "友链新增个人链接归属，广告归属、UID自助定制",
      "url": "https://www.dalao.net/thread-62635.htm",
      "date": "2026-08-17"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "DeepSeek 涨价之后，普通个人开发者有点难受",
      "url": "https://9sb.net/archives/after-deepseeks-price-increase-ordinary-individual-developers-feel-a-bit-uncomfortable.html",
      "date": "2026-08-17"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SaaS SEO：AI算法时代的有效方法",
      "url": "https://www.bailuze.com/24348.html",
      "date": "2026-08-17"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "写博客与祷告",
      "url": "https://www.immarcus.com/blog/blog-and-prayer",
      "date": "2026-08-17"
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
