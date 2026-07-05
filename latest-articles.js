// ==================== latest-articles.js ====================
// 抓取日期: 7/5/2026, 8:25:47 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "翻星标旧文读反馈之道",
      "url": "https://wlj.me/notes/sp-note-20260705-144935/",
      "date": "2026-07-05"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The urgency paradox",
      "url": "https://seths.blog/2026/07/the-urgency-paradox/",
      "date": "2026-07-05"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "五年，三篇文章，一个我一直没真正解决的问题",
      "url": "https://tonybai.com/2026/07/05/go-private-modules-lessons-learned/",
      "date": "2026-07-04"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "史上最sb裁判",
      "url": "https://synyan.cn/t/63089",
      "date": "2026-07-05"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "误操作导致部分数据丢失",
      "url": "http://www.auiou.com/relevant/00002166.jsp",
      "date": "2026-07-05"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "红李子",
      "url": "https://acevs.com/5083/",
      "date": "2026-07-05"
    }
  ],
  "2006": [
    {
      "name": "傻猫",
      "year": "06",
      "title": "中文版Superpowers使用方法",
      "url": "https://www.samool.com/52680.html",
      "date": "2026-07-05"
    }
  ],
  "2007": [
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "地铁站的马赛克墙，究竟是随机还是有序？",
      "url": "https://yanlinlin.cn/2026/07/05/is-the-pattern-random/",
      "date": "2026-07-05"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我还是为我的任性付出的代价",
      "url": "https://www.linyufan.com/post/5881",
      "date": "2026-07-05"
    }
  ],
  "2016": [
    {
      "name": "ximi",
      "year": "16",
      "title": "一个简易的本地web图库预览页面",
      "url": "https://www.ximi.me/post-6044.html",
      "date": "2026-07-05"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之外链提交频率和如何不花 Token 处理代码",
      "url": "https://www.ccgxk.com/codeother/799.html",
      "date": "2026-07-05"
    },
    {
      "name": "SimonAKing",
      "year": "17",
      "title": "模型适配权：Anthropic 藏得最深的垄断",
      "url": "https://simonaking.com/blog/anthropic-model-adaptation-monopoly/",
      "date": "2026-07-05"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "游记｜吹17度江风，吃地道豆腐包，建德3天2晚散漫自驾",
      "url": "https://blog.ops-coffee.com/r/city-china-zhejiang-hangzhou-jiande-yanzhougucheng.html",
      "date": "2026-07-05"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "网站迁移完成，恢复访问",
      "url": "https://www.dalao.net/thread-60603.htm",
      "date": "2026-07-05"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-05",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-05",
      "date": "2026-07-05"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "演唱会退票经历分享 退票需要收取高额手续费 维权的过程更难",
      "url": "https://jyblog.com/5747/",
      "date": "2026-07-05"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "📷“拍照特种兵”的下午",
      "url": "https://ygz.ink/archives/5457.html",
      "date": "2026-07-05"
    },
    {
      "name": "小归客",
      "year": "23",
      "title": "个人主页旧版本开源",
      "url": "https://xgk.pw/archives/305/",
      "date": "2026-07-05"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.07.05 博客阅读周记",
      "url": "https://www.immarcus.com/blog/weekly-20260705",
      "date": "2026-07-05"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "喝酒误事",
      "url": "https://mzdsx.com/2026/07/05/%e5%96%9d%e9%85%92%e8%af%af%e4%ba%8b/",
      "date": "2026-07-04"
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
