// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-27 23:00:17
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "磁盘加密密码需单独修改",
      "url": "https://wlj.me/notes/sp-note-20261027-121223/",
      "date": "2026-10-27"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The half-life of disappointment",
      "url": "https://seths.blog/2026/10/the-half-life-of-disappointment/",
      "date": "2026-10-27"
    }
  ],
  "2004": [
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "现在还需要读毛选吗",
      "url": "https://doyj.com/2026/10/28/%e7%8e%b0%e5%9c%a8%e8%bf%98%e9%9c%80%e8%a6%81%e8%af%bb%e6%af%9b%e9%80%89%e5%90%97/",
      "date": "2026-10-27"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "双十一前哨站",
      "url": "https://ezo.biz/Diary/1776.html",
      "date": "2026-10-27"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "肥牛拉车",
      "url": "https://www.xlanda.net/posts/22576",
      "date": "2026-10-27"
    }
  ],
  "2005": [
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0019",
      "url": "https://lenciel.com/2026/10/fragments-0x0019/",
      "date": "2026-10-27"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "OpenAI 放出 GPT-6.1 Terra",
      "url": "https://blog.gslin.org/archives/2026/10/27/13303/openai-%e6%94%be%e5%87%ba-gpt-6-1-terra/",
      "date": "2026-10-26"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "麻绳",
      "url": "https://www.seis-jun.xyz/blog/2026-10-27-rope-with-knots.html",
      "date": "2026-10-27"
    }
  ],
  "2007": [
    {
      "name": "老杨",
      "year": "07",
      "title": "痛苦根源",
      "url": "https://yangyq.net/2026/10/pain-root.html",
      "date": "2026-10-27"
    }
  ],
  "2008": [
    {
      "name": "Wandai",
      "year": "08",
      "title": "收拾行李",
      "url": "https://twd2.me/archives/21235",
      "date": "2026-10-27"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "屏幕上满眼宋体和黑体，楷体去哪了",
      "url": "https://www.biaodianfu.com/song-hei-kai/",
      "date": "2026-10-27"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "我被重新理解了一次",
      "url": "https://d-d.design/single/20614",
      "date": "2026-10-27"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "2026 去金門、廈門玩（重點版）",
      "url": "https://blog.giveanornot.com/kinmen-xiamen-2026/",
      "date": "2026-10-27"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "GitHub 把我雪藏了六个月，却没告诉我为什么",
      "url": "https://usj.cc/20261027150228.html",
      "date": "2026-10-27"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "公益图床不是色情图床",
      "url": "https://9sb.net/archives/public-welfare-beds-are-not-pornographic-beds.html",
      "date": "2026-10-27"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-27：Strawberry 1.0、SurgePix、MiniMax M3.1 Flash",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-27",
      "date": "2026-10-27"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "Being Proactive",
      "url": "https://jefftay.com/quotes/being-proactive",
      "date": "2026-10-27"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "推荐我开发的 Linux AppImage 管理器：AppimageMannger",
      "url": "https://xingwangzhe.fun/posts/appimage-mannger-native-linux/",
      "date": "2026-10-27"
    },
    {
      "name": "三叔",
      "year": "24",
      "title": "Geass 亮起，六秒后落子：鲁鲁修 DSH 主题",
      "url": "https://www.sanshu.cn/atc/44.html",
      "date": "2026-10-27"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "量子人生",
      "url": "https://www.immarcus.com/blog/quantum-life",
      "date": "2026-10-27"
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
