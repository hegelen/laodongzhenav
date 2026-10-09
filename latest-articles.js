// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-09 23:15:17
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Thin friction and thicker walls",
      "url": "https://seths.blog/2026/10/thin-friction-and-thicker-walls/",
      "date": "2026-10-09"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "吊梢眼",
      "url": "https://ezo.biz/Diary/1732.html",
      "date": "2026-10-09"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "DIY(35-4)：6路×2 USB全自动电脑切换器",
      "url": "http://www.auiou.com/relevant/00002218.jsp",
      "date": "2026-10-09"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "永恒之塔2继续体验",
      "url": "https://acevs.com/5282/",
      "date": "2026-10-09"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "JPEG XL 在瀏覽器的回歸",
      "url": "https://blog.gslin.org/archives/2026/10/09/13258/jpeg-xl-%e5%9c%a8%e7%80%8f%e8%a6%bd%e5%99%a8%e7%9a%84%e5%9b%9e%e6%ad%b8/",
      "date": "2026-10-09"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "到现在还活着真是不容易啊",
      "url": "https://www.seis-jun.xyz/blog/2026-10-09-lucky-to-be-alive.html",
      "date": "2026-10-09"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "js13kGames 2026 年度冠军作品出炉",
      "url": "https://dujun.io/js13kgames-2026-winner-spectral-horn.html",
      "date": "2026-10-09"
    }
  ],
  "2012": [
    {
      "name": "贱志",
      "year": "12",
      "title": "GR IV Monochrome 简单上手体验",
      "url": "https://fatesinger.com/106453",
      "date": "2026-10-09"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.9",
      "url": "https://www.linyufan.com/post/6081",
      "date": "2026-10-09"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "哼！Anthropic 自己都在偷偷抄Deepseek，反过头来还谴责国产AI？",
      "url": "https://www.ccgxk.com/emlog_dev/912.html",
      "date": "2026-10-09"
    },
    {
      "name": "科学空间",
      "year": "17",
      "title": "如何让GDN2更稳定一些？",
      "url": "https://kexue.fm/archives/11945",
      "date": "2026-10-09"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "丙午之多事之秋",
      "url": "https://www.suiyan.cc/blog/20261009211338",
      "date": "2026-10-09"
    },
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "微软大刀部又来啦：Microsoft 365 家庭版”反向升级”变 6 人共享 2TB，合租车队连夜散伙咯",
      "url": "https://www.tjsky.net/news/2071",
      "date": "2026-10-09"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-07-27 / 一天",
      "url": "https://blog.xinshijiededa.men/daily/86/",
      "date": "2026-10-09"
    }
  ],
  "2020": [
    {
      "name": "yihong0618",
      "year": "20",
      "title": "来 DOTA",
      "url": "https://blog.yihong0618.me/posts/issue-348/",
      "date": "2026-10-09"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-09：OpenSwarm、OpenSEO、Claude Haiku 5.5",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-09",
      "date": "2026-10-09"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "12种提升自然搜索可见性的页面内SEO技巧",
      "url": "https://www.bailuze.com/26145.html",
      "date": "2026-10-09"
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "人类如何理解他人：从行为信号到人性模型",
      "url": "https://blog.tangwudi.com/technology/cognition14747/",
      "date": "2026-10-09"
    },
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "请不要将标签页的标题改为无意义字符",
      "url": "https://blog.mfwt.top/index.php/archives/1659/",
      "date": "2026-10-09"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "Ubuntu Intel 性能模式问题排查：我修复 i7-1260P 的 PPD Governor 切换",
      "url": "https://xingwangzhe.fun/posts/ubuntu-intel-pstate-performance-governor/",
      "date": "2026-10-09"
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
