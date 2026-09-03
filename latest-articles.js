// ==================== latest-articles.js ====================
// 抓取日期: 9/3/2026, 9:42:49 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "画男性速写免吐槽",
      "url": "https://wlj.me/notes/sp-note-20260903-105831/",
      "date": "2026-09-03"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "What it is like to be a dog?",
      "url": "https://seths.blog/2026/09/what-it-is-like-to-be-a-dog/",
      "date": "2026-09-03"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "请人搞卫生什么鬼",
      "url": "http://www.xlanda.net/posts/22441",
      "date": "2026-09-03"
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "博客联盟导航",
      "url": "https://long.ge/18100.html",
      "date": "2026-09-03"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "起底Uber AI软件工厂：智能体用量暴涨9.4倍，账单却纹丝不动",
      "url": "https://tonybai.com/2026/09/03/uber-ai-software-factory-cost-optimization/",
      "date": "2026-09-02"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "DIY(35)：6路×2 USB全自动电脑切换器",
      "url": "http://www.auiou.com/relevant/00002189.jsp",
      "date": "2026-09-03"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年9月3日",
      "url": "https://acevs.com/5208/",
      "date": "2026-09-03"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "fragments 0x0002",
      "url": "https://lenciel.com/2026/09/fragments-0x0002/",
      "date": "2026-09-03"
    }
  ],
  "2008": [
    {
      "name": "河马",
      "year": "08",
      "title": "腾讯云首尔测试",
      "url": "https://www.iamhippo.com/2026-09/2010.html",
      "date": "2026-09-03"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "亲子 || 育儿杂记18",
      "url": "https://www.yishu.pro/239.html",
      "date": "2026-09-03"
    },
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "别再使用IndexedDB，大文件读写就用OPFS",
      "url": "https://www.zhangxinxu.com/wordpress/2026/09/indexdb-navigator-storage-getdirectory/",
      "date": "2026-09-03"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "股市横盘",
      "url": "https://www.leitao.cn/10793.html",
      "date": "2026-09-03"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今天完成了微信小程序“林羽凡待办”个人资质的“虚拟支付”的功能",
      "url": "https://www.linyufan.com/post/5987",
      "date": "2026-09-03"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "我做了个全球 AI 简报：不刷 X，也能跟上最新 AI 动态",
      "url": "https://blog.xiaoz.org/archives/23473",
      "date": "2026-09-03"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海胆子要大，不要焦虑",
      "url": "https://www.ccgxk.com/codeother/871.html",
      "date": "2026-09-03"
    },
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "腾讯云轻量应用服务器续费1折：老用户难得比新用户便宜的活动",
      "url": "https://www.tjsky.net/news/1895",
      "date": "2026-09-03"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "我的 token 消耗量下降了",
      "url": "https://shitao5.org/posts/token-usage-declined/",
      "date": "2026-09-03"
    },
    {
      "name": "风记星辰",
      "year": "19",
      "title": "风记得的音乐：以三首钢琴曲告别这个夏天吧",
      "url": "https://www.thyuu.com/82051/",
      "date": "2026-09-03"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "腾讯云会员小程序月月领红包活动领到30元，腾讯云EdgeOne个人版续费1年实付22.25元",
      "url": "https://www.bufanz.com/20260903871.html",
      "date": "2026-09-03"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "多灾多难的 2026",
      "url": "https://www.immarcus.com/blog/calamitous-2026",
      "date": "2026-09-03"
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
