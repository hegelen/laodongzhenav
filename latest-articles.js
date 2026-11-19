// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-19 01:07:10
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "朋友鼓励我坚持学画画",
      "url": "https://wlj.me/notes/sp-note-20261119-080519/",
      "date": "2026-11-19"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "One swell foop",
      "url": "https://seths.blog/2026/11/one-swell-foop-2/",
      "date": "2026-11-18"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Alan Donovan 提出新 Proposal：要让 go test 运行自定义静态分析器！",
      "url": "https://tonybai.com/2026/11/19/go-test-user-defined-analyzers-proposal/",
      "date": "2026-11-18"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "一次性钢笔墨囊加墨",
      "url": "https://www.xlanda.net/posts/22628",
      "date": "2026-11-19"
    }
  ],
  "2005": [
    {
      "name": "春田",
      "year": "05",
      "title": "１１０１．災難に感謝する",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/11/post-4afe81.html",
      "date": "2026-11-18"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "替天行道",
      "url": "https://acevs.com/5373/",
      "date": "2026-11-18"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Ruby 的 RegEx 也有 RCE 問題",
      "url": "https://blog.gslin.org/archives/2026/11/19/13382/ruby-%e7%9a%84-regex-%e4%b9%9f%e6%9c%89-rce-%e5%95%8f%e9%a1%8c/",
      "date": "2026-11-19"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "关于AI写作",
      "url": "https://www.seis-jun.xyz/blog/2026-11-18-about-AI-composition.html",
      "date": "2026-11-18"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "雨后半山崖线漫步",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1294",
      "date": "2026-11-18"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "爷爷去世第五天，乡俗乡风可能要湮灭",
      "url": "https://www.linyufan.com/post/6145",
      "date": "2026-11-18"
    }
  ],
  "2017": [
    {
      "name": "雨中野游",
      "year": "17",
      "title": "岛国充电宝的小巧思",
      "url": "https://hqidi.com/227.html",
      "date": "2026-11-18"
    }
  ],
  "2019": [
    {
      "name": "LJF.COM",
      "year": "19",
      "title": "Competition is for Losers",
      "url": "https://ljf.com/2026/11/18/1566/",
      "date": "2026-11-18"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "多就是好吗？",
      "url": "https://blog.solazy.me/20261118/",
      "date": "2026-11-18"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "凌晨机房网络交换机损坏造成无法访问，现已恢复",
      "url": "https://www.dalao.net/thread-66240.htm",
      "date": "2026-11-19"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件多设备登录与验证：多台设备同时保持登录状态、登录后台二次邮箱验证",
      "url": "https://www.bufanz.com/202611181275.html",
      "date": "2026-11-18"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-18：Creatify Max、RankSpot、TheBold",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-18",
      "date": "2026-11-18"
    },
    {
      "name": "yveji",
      "year": "21",
      "title": "影之刃零：国产3A RPG",
      "url": "https://www.yveji.com/Cultural/phantom-blade-zero.html",
      "date": "2026-11-18"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "最新发布SEO的5个技巧让网站排名飙升的入门指南",
      "url": "https://www.bailuze.com/24613.html",
      "date": "2026-11-19"
    },
    {
      "name": "核桃",
      "year": "23",
      "title": "2026年11月3日，贵州三都之旅的第一天",
      "url": "https://www.htaoo.com/record/939.html",
      "date": "2026-11-18"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "EdgeOne 尾斜杠路由的分层配置方法",
      "url": "https://xingwangzhe.fun/posts/edgeone-trailing-slash-routing",
      "date": "2026-11-18"
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
