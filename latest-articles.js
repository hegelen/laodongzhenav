// ==================== latest-articles.js ====================
// 抓取日期: 7/1/2026, 8:56:33 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Can you believe it?",
      "url": "https://seths.blog/2026/07/can-you-believe-it/",
      "date": "2026-07-01"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "配料表干净",
      "url": "https://kaix.in/2026/0701/",
      "date": "2026-07-01"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "猫狗缘",
      "url": "http://www.xlanda.net/posts/22299",
      "date": "2026-07-01"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "HashiCorp 创始人：AI 时代，我们为什么越来越需要有“品味”的程序员？",
      "url": "https://tonybai.com/2026/07/01/.file.contentbasename/",
      "date": "2026-06-30"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "轮滑六次？",
      "url": "https://acevs.com/5075/",
      "date": "2026-07-01"
    },
    {
      "name": "春田",
      "year": "05",
      "title": "１０８１．経営はこの３つでできる",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/07/post-78800c.html",
      "date": "2026-07-01"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "徽章猎人第三季度正式开启",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1249",
      "date": "2026-07-01"
    }
  ],
  "2009": [
    {
      "name": "欧雷流",
      "year": "09",
      "title": "先让自己吃饱饭，才有余力谈理想",
      "url": "https://ourai.ws/posts/started-taking-on-software-outsourcing-projects/",
      "date": "2026-07-01"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "癫狂",
      "url": "https://www.leitao.cn/10405.html",
      "date": "2026-07-01"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "ZNote私有笔记安卓版APP来了",
      "url": "https://blog.xiaoz.org/archives/23169",
      "date": "2026-07-01"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "出海 Web 之 GSC 里的曝光量和点击量和外链的关系",
      "url": "https://www.ccgxk.com/codeother/795.html",
      "date": "2026-07-01"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "开放世界ARPG×赛博朋克题材×霓虹视觉风格《赛博朋克2077 终极版》史低价164.5元",
      "url": "https://www.bufanz.com/20260701701.html",
      "date": "2026-07-01"
    }
  ],
  "2021": [
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "2026之半年感叹🚀",
      "url": "https://www.ddf.im/index.php/2026/07/01/2026.html",
      "date": "2026-07-01"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-01",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-01",
      "date": "2026-07-01"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客构建“轻量级知识索引”（七）：右侧菜单——语义空间与分类体系的统一组织机制",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14464/",
      "date": "2026-07-01"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "为什么值得积极运营谷歌商品？拥有商业档案的好处",
      "url": "https://www.bailuze.com/24207.html",
      "date": "2026-07-01"
    },
    {
      "name": "建站百科",
      "year": "23",
      "title": "jtti.cc：2026年7月1日盛典活动香港cn2giavps最新测试数据！高稳定性人群的选择！",
      "url": "https://www.jzbk.net/3135.html",
      "date": "2026-07-01"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "📷单反摄影练习",
      "url": "https://ygz.ink/archives/5421.html",
      "date": "2026-07-01"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "Mysql数据库损坏导致丢失部分数据",
      "url": "https://t-t.live/archives/Epw1vK9w",
      "date": "2026-07-01"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "写博客也许是一种自我救赎",
      "url": "https://www.immarcus.com/blog/writing-blog-as-self-redemption",
      "date": "2026-07-01"
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
