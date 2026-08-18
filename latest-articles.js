// ==================== latest-articles.js ====================
// 抓取日期: 8/18/2026, 7:38:46 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "新加坡的 OneService 是什么？",
      "url": "https://wlj.me/posts/singapore-oneservice/",
      "date": "2026-08-18"
    }
  ],
  "2001": [
    {
      "name": "nc-show",
      "year": "01",
      "title": "言泉输入法：原创一键补全",
      "url": "https://nicrosoft.net/blog/2343/",
      "date": "2026-08-18"
    }
  ],
  "2003": [
    {
      "name": "爱情在线",
      "year": "03",
      "title": "折腾AI写代码一个月",
      "url": "https://aqzx.com/blog_view.asp?id=67",
      "date": "2026-08-18"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "确诊一条内存坏了",
      "url": "http://www.xlanda.net/posts/22407",
      "date": "2026-08-18"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "主题",
      "url": "https://ezo.biz/Diary/1585.html",
      "date": "2026-08-18"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "魔兽争霸白玩这么多年？这些很多都不知道。",
      "url": "https://acevs.com/5175/",
      "date": "2026-08-18"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "从七千到两千万：《牛来》爆火，不是电影好看，只是全网玩梗的闹剧",
      "url": "https://zhujay.com/blog/blog_detail.html?id=1272",
      "date": "2026-08-18"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "真题 || 2019年真题【多厅电影院设计】",
      "url": "https://www.yishu.pro/237.html",
      "date": "2026-08-18"
    }
  ],
  "2012": [
    {
      "name": "王鑫",
      "year": "12",
      "title": "AI做网站之升级优化博客",
      "url": "https://wonse.info/update-typecho1-30.html",
      "date": "2026-08-18"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.8.18",
      "url": "https://www.linyufan.com/post/5959",
      "date": "2026-08-18"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "我的帽子哪去了？",
      "url": "https://www.suiyan.cc/blog/20260818181408",
      "date": "2026-08-18"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "计算机系出路就是尽早使用 AI 去积累！",
      "url": "https://www.ccgxk.com/codeother/850.html",
      "date": "2026-08-18"
    },
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "宝塔面板升级 13.0.0 后 Nginx 免费防火墙全是 undefined？替换两个文件就好",
      "url": "https://www.tjsky.net/tutorial/1792",
      "date": "2026-08-18"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "不该露怯的人",
      "url": "https://blog.solazy.me/20260818/",
      "date": "2026-08-18"
    }
  ],
  "2020": [
    {
      "name": "yihong0618",
      "year": "20",
      "title": "来，喝一杯",
      "url": "https://blog.yihong0618.me/posts/issue-346/",
      "date": "2026-08-18"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-18",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-18",
      "date": "2026-08-18"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "日中见斗",
      "url": "https://blog.verynb.net/posts/41617.html",
      "date": "2026-08-18"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "如何选择排名的关键词汇，以便在本地市场获得可见度？",
      "url": "https://www.bailuze.com/24350.html",
      "date": "2026-08-18"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "EdgeOne 与 Cloudflare 海内外分流 CDN",
      "url": "https://xingwangzhe.fun/posts/edgeone-cloudflare-split-cdn/",
      "date": "2026-08-18"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "数学的精髓不是对错",
      "url": "https://www.immarcus.com/blog/correctness-is-not-the-essence-of-math",
      "date": "2026-08-18"
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
