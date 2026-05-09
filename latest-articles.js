// ==================== latest-articles.js ====================
// 抓取日期: 5/9/2026, 5:04:12 AM
// 只抓取最近14天内的文章，共 10 篇
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
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "补牙",
      "url": "https://zhou.ge/2026-05-05.html",
      "date": "2026-05-05"
    }
  ],
  "2016": [
    {
      "name": "小可",
      "year": "16",
      "title": "Codex 订阅一物多用：通过 CPA 代理输出 OpenAI 标准接口",
      "url": "https://keke.su/posts/2026-05-08-new-1.html",
      "date": "2026-05-08"
    }
  ],
  "2017": [
    {
      "name": "马春杰杰",
      "year": "17",
      "title": "吐槽：记录一次站点被Meta爬虫刷掉400G流量的排查过程",
      "url": "https://www.machunjie.com/web/2120.html",
      "date": "2026-04-29"
    }
  ],
  "2018": [
    {
      "name": "枋柚梓的猫会发光",
      "year": "18",
      "title": "从 1Password 迁移到 Bitwarden：一次涨价引发的“搬家”",
      "url": "https://inkss.cn/post/5a013cf6/",
      "date": "2026-05-08"
    },
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "我买基金从不亏钱",
      "url": "https://blog.ops-coffee.com/r/fund-5-year-from-50-percent-loss-to-profit.html",
      "date": "2026-05-07"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "赫尔米勒embody",
      "url": "https://siwei.li/he-er-mi-le-embody/",
      "date": "2026-05-08"
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客加一层“语义索引”（上）：结构设计与构建流程",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14228/",
      "date": "2026-05-07"
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

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇最近14天文章');
