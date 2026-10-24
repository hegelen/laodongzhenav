// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-24 21:32:43
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "细思恐极的田氏案例",
      "url": "https://wlj.me/notes/sp-note-20261024-060734/",
      "date": "2026-10-23"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Caveman leadership and the CDO*",
      "url": "https://seths.blog/2026/10/caveman-leadership-and-the-cdo/",
      "date": "2026-10-24"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "有颜色的节日",
      "url": "https://ezo.biz/Cracker/1771.html",
      "date": "2026-10-24"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "无锡vs泰州",
      "url": "https://synyan.cn/t/64156",
      "date": "2026-10-24"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "大厨、厨房与餐馆：一文彻底搞懂 AI Agent 背后的“Harness”到底是什么",
      "url": "https://tonybai.com/2026/10/24/what-is-a-harness/",
      "date": "2026-10-23"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "这次的PHP大漏洞/淡定的PHPer们",
      "url": "http://www.auiou.com/relevant/00002228.jsp",
      "date": "2026-10-24"
    }
  ],
  "2007": [
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "编程并没有面目全非",
      "url": "https://yanlinlin.cn/2026/10/24/programming-is-not-unrecognizable/",
      "date": "2026-10-23"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "千万不要多吃",
      "url": "https://me.xu19.com/be-careful-eating-hawthorn-it-may-cause-stomach-discomfort/",
      "date": "2026-10-24"
    },
    {
      "name": "龙Ge笔迹",
      "year": "08",
      "title": "本来这是一篇文章，现在只有图片了",
      "url": "https://www.izhailong.com/1161.html",
      "date": "2026-10-24"
    },
    {
      "name": "河马",
      "year": "08",
      "title": "AWS EC2 东京",
      "url": "https://www.iamhippo.com/2026-10/1968.html",
      "date": "2026-10-24"
    },
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "甬江为证，四十正青春",
      "url": "https://dujun.io/nbu-40th-anniversary.html",
      "date": "2026-10-24"
    }
  ],
  "2009": [
    {
      "name": "孙琪峥",
      "year": "09",
      "title": "z88oy57h43m080mc3v",
      "url": "https://www.sunqizheng.com/blog/2704.html",
      "date": "2026-10-24"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "1024福利，免费领取GLM5.3大模型5亿Tokens，3天有效",
      "url": "https://www.dujin.org/23866.html",
      "date": "2026-10-24"
    },
    {
      "name": "孤斗",
      "year": "14",
      "title": "受控的世界，失控的秩序",
      "url": "https://d-d.design/single/20607",
      "date": "2026-10-24"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "爆火项目，PS5游戏竟可以直接在PC原生运行了",
      "url": "https://www.ccgxk.com/front-end/930.html",
      "date": "2026-10-24"
    }
  ],
  "2019": [
    {
      "name": "jdeal",
      "year": "19",
      "title": "片刻・Jdeal 发布了一条新动态~",
      "url": "https://www.jdeal.cn/cross.html#5324",
      "date": "2026-10-24"
    }
  ],
  "2020": [
    {
      "name": "yihong0618",
      "year": "20",
      "title": "About Me",
      "url": "https://blog.yihong0618.me/posts/issue-282/",
      "date": "2026-10-24"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-24：Product Hunt Visual Launch Editor、MOVO AI、Agent Hunt",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-24",
      "date": "2026-10-24"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "1024程序员节-最后一次节日吗",
      "url": "https://xingwangzhe.fun/posts/1024-last-programmers-day/",
      "date": "2026-10-24"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "我的blog设计理念",
      "url": "https://xice.cx/posts/myBlogDesign/",
      "date": "2026-10-24"
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
