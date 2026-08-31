// ==================== latest-articles.js ====================
// 抓取日期: 8/31/2026, 11:16:56 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "羡慕他人创意反观自身",
      "url": "https://wlj.me/notes/sp-note-20260831-220624/",
      "date": "2026-08-31"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Ten steps on the road to efficient",
      "url": "https://seths.blog/2026/08/ten-steps-on-the-road-to-efficient/",
      "date": "2026-08-31"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "又走了一个",
      "url": "http://www.xlanda.net/posts/22434",
      "date": "2026-08-31"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "月志202608",
      "url": "https://ezo.biz/Diary/202608.html",
      "date": "2026-08-31"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "一只机器鸭子，用 Rust 写了个“大脑”：拆解 Hugging Face 爆款机器人 Microduck",
      "url": "https://tonybai.com/2026/09/01/microduck-rust-robot-brain-deep-dive/",
      "date": "2026-08-31"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "https利弊(4)：商业(大型)逻辑",
      "url": "http://www.auiou.com/relevant/00002186.jsp",
      "date": "2026-08-31"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "基于LLM的开源时序预测模型Lag-Llama",
      "url": "https://www.biaodianfu.com/lag-llama/",
      "date": "2026-08-31"
    }
  ],
  "2012": [
    {
      "name": "Tokin",
      "year": "12",
      "title": "前台体验重塑 —— 从笔记动态到评论动静分离",
      "url": "https://biji.io/2026/6092.html",
      "date": "2026-08-31"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.8.30",
      "url": "https://www.linyufan.com/post/5979",
      "date": "2026-08-31"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "博客文章回应的双向选择",
      "url": "https://www.suiyan.cc/blog/20260831211506",
      "date": "2026-08-31"
    },
    {
      "name": "科学空间",
      "year": "17",
      "title": "让炼丹更科学一些（八）：多阶段训练的学习率",
      "url": "https://kexue.fm/archives/11879",
      "date": "2026-08-31"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之推荐两个外链神器！",
      "url": "https://www.ccgxk.com/codeother/866.html",
      "date": "2026-08-31"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "GitHub一周热点",
      "url": "https://qiukui-note.happy365.day/20260831/github-trends-weekly/",
      "date": "2026-08-31"
    },
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "哇咔财务管家｜理财模块上线，现在记账、基金、股票、理财四合一",
      "url": "https://blog.ops-coffee.com/fire/wakaka-bookkeeping-fund-stock-wealth.html",
      "date": "2026-08-31"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "搬工位时的三波人",
      "url": "https://blog.solazy.me/20260831/",
      "date": "2026-08-31"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "LED 耳環誕生（一）：不就幾顆 LED，應該不難…吧？",
      "url": "https://blog.giveanornot.com/led-earring-1/",
      "date": "2026-08-31"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-31",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-31",
      "date": "2026-08-31"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "百度搜索结果页面展示新模式：提示广告搜索结果以及隐藏广告搜索结果按钮",
      "url": "https://www.bailuze.com/25969.html",
      "date": "2026-08-31"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "徒步重庆铁山坪环线完成",
      "url": "https://ygz.ink/archives/5711.html",
      "date": "2026-08-31"
    }
  ],
  "2025": [
    {
      "name": "桃子味",
      "year": "25",
      "title": "软件工具—告别青春遗忘症：QzoneArchive v1.0.3 全平台下载与使用指南",
      "url": "https://www.taoziwei.com/374/",
      "date": "2026-08-31"
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
