// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-11 00:05:38
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "九月十月吃喝日历视图",
      "url": "https://wlj.me/notes/sp-note-20261110-184250/",
      "date": "2026-11-10"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "In search of a bargain",
      "url": "https://seths.blog/2026/11/in-search-of-a-bargain/",
      "date": "2026-11-10"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "为了4块钱的法棍",
      "url": "https://www.xlanda.net/posts/22607",
      "date": "2026-11-10"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "切片与数组：[i32; 3]、[i32]、&[i32; 3]、&[i32] 到底有什么区别？",
      "url": "https://tonybai.com/2026/11/10/rust-reference-array-slice-fn-params/",
      "date": "2026-11-10"
    }
  ],
  "2005": [
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0020",
      "url": "https://lenciel.com/2026/11/fragments-0x0020/",
      "date": "2026-11-10"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "uvr5人声去除小记",
      "url": "https://acevs.com/5356/",
      "date": "2026-11-10"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "所以是 Claude Fable 5.2 出了...",
      "url": "https://blog.gslin.org/archives/2026/11/10/13348/%e6%89%80%e4%bb%a5%e6%98%af-claude-fable-5-2-%e5%87%ba%e4%ba%86/",
      "date": "2026-11-10"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "捕捉晴天的温柔",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1291",
      "date": "2026-11-10"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "复盘 || 2023年一注大设计真题【安全教育中心】",
      "url": "https://www.yishu.pro/395.html",
      "date": "2026-11-10"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "《日元贬值的背后》读后小记",
      "url": "https://www.leitao.cn/11574.html",
      "date": "2026-11-10"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "这几天我在干嘛（1）——回家看爷爷",
      "url": "https://www.linyufan.com/post/6136",
      "date": "2026-11-10"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "코딩을 몰라도 챗GPT로 홈페이지를 만드는 방법",
      "url": "https://www.thewordcracker.com/blog/build-website-with-chatgpt-no-coding/",
      "date": "2026-11-10"
    }
  ],
  "2018": [
    {
      "name": "吖远zzy",
      "year": "18",
      "title": "用 AI Agent 把桌面宠物搬进 Android，dsh-pet-android 顺手记了点踩坑笔记",
      "url": "https://www.hzv5.cn/2026/11/10/dsh-pet-android/",
      "date": "2026-11-10"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "职场上的前任",
      "url": "https://blog.solazy.me/20261110/",
      "date": "2026-11-10"
    }
  ],
  "2021": [
    {
      "name": "Dayu",
      "year": "21",
      "title": "杯子",
      "url": "https://anotherdayu.com/7200/",
      "date": "2026-11-10"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-10：Product Hunt MCP、Dageno AI 2.0、Databox CLI",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-10",
      "date": "2026-11-10"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO作弊常用手段之链接作弊",
      "url": "https://www.bailuze.com/24572.html",
      "date": "2026-11-10"
    },
    {
      "name": "湘铭",
      "year": "23",
      "title": "无尽等待",
      "url": "https://xiangming.site/1182.html",
      "date": "2026-11-10"
    }
  ],
  "2024": [
    {
      "name": "刘郎阁",
      "year": "24",
      "title": "域名变更公告",
      "url": "https://liuz.cn/2027",
      "date": "2026-11-10"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "胶州新城区美景",
      "url": "https://sheep5.net/archives/674.html",
      "date": "2026-11-10"
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
