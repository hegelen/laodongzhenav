// ==================== latest-articles.js ====================
// 抓取日期: 6/27/2026, 8:20:34 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Seeking a complement",
      "url": "https://seths.blog/2026/06/seeking-a-complement/",
      "date": "2026-06-27"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "入手血糖试纸",
      "url": "http://www.xlanda.net/posts/22290",
      "date": "2026-06-27"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "从 WordPress 到 Hugo：一个 20 年技术博客的迁移实录",
      "url": "https://tonybai.com/2026/06/27/wp-to-hugo-migration-journey/",
      "date": "2026-06-26"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "小记2026年6月27日",
      "url": "https://acevs.com/5065/",
      "date": "2026-06-27"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "OpenAI 發表新的旗艦 GPT‑5.6 Sol",
      "url": "https://blog.gslin.org/archives/2026/06/28/13083/openai-%e7%99%bc%e8%a1%a8%e6%96%b0%e7%9a%84%e6%97%97%e8%89%a6-gpt-5-6-sol/",
      "date": "2026-06-27"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "不让青春留白",
      "url": "https://yishu-life.com/index.php/archives/485.html",
      "date": "2026-06-27"
    },
    {
      "name": "朱小呆",
      "year": "07",
      "title": "夏天就好这一口，冰镇酸辣鸡爪",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1246",
      "date": "2026-06-27"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": " 软件 || 图集规范管理软件-文档管理器反馈意见汇总（1）",
      "url": "https://www.yishu.pro/228.html",
      "date": "2026-06-27"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "第九章 算法、债务与新垄断：21世纪经济的新问题",
      "url": "https://www.leitao.cn/10388.html",
      "date": "2026-06-27"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "快来注册Agent Mail",
      "url": "https://www.linyufan.com/post/5870",
      "date": "2026-06-27"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "简单聊聊出海 Web 的游戏站",
      "url": "https://www.ccgxk.com/codeother/791.html",
      "date": "2026-06-27"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "流行词之走个面儿",
      "url": "https://qiukui-note.happy365.day/20260627/zou-ge-mian-er/",
      "date": "2026-06-27"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "使用翻译模型翻译外文书籍",
      "url": "https://shitao5.org/posts/ai-book-translation-workflow/",
      "date": "2026-06-27"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-27",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-27",
      "date": "2026-06-27"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "外地支援这事，从帮忙变成了义务",
      "url": "https://9sb.net/archives/the-matter-of-providing-support-from-other-places-has-changed-from-assistance-to-obligation.html",
      "date": "2026-06-27"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "AI见闻之数据",
      "url": "https://www.wsh233.cn/post/ai见闻之数据",
      "date": "2026-06-27"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "在构建网站时，SEO真正重要的东西",
      "url": "https://www.bailuze.com/24196.html",
      "date": "2026-06-27"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "用尼康D3200拍的第一组照片",
      "url": "https://ygz.ink/archives/5387.html",
      "date": "2026-06-27"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "友链图谱 2.0 - 3D 更美观的可视化",
      "url": "https://xingwangzhe.fun/posts/2d3d-graph-v2/",
      "date": "2026-06-27"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "明天开车十小时",
      "url": "https://www.immarcus.com/blog/ten-hour-drive-tomorrow",
      "date": "2026-06-27"
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
