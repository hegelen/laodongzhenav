// ==================== latest-articles.js ====================
// 抓取日期: 6/7/2026, 8:59:33 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "点拿铁被误听成茶",
      "url": "https://wlj.me/notes/sp-note-20260607-142937/",
      "date": "2026-06-07"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "迷你电脑电源适配器没事",
      "url": "http://www.xlanda.net/posts/22245",
      "date": "2026-06-07"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "VoidZero 加入 Cloudflare",
      "url": "https://blog.gslin.org/archives/2026/06/07/13061/voidzero-%e5%8a%a0%e5%85%a5-cloudflare/",
      "date": "2026-06-06"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "有点好奇宋朝的高考",
      "url": "https://me.xu19.com/imperial-examination-in-the-song-dynasty/",
      "date": "2026-06-06"
    },
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "我不怀念天涯",
      "url": "https://dujun.io/f6c2bff5-b5f7-57f6-a33b-6ac61f457ffb.html",
      "date": "2026-06-06"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "大陆用户开美国期货账户，我会先选 AMP Futures",
      "url": "https://blog.forecho.com/open-us-futures-broker-from-china.html",
      "date": "2026-06-06"
    },
    {
      "name": "君子不器",
      "year": "11",
      "title": "2026年5月：不远行的假期，与一次告别",
      "url": "https://www.colinjiang.com/archives/may-holiday-and-farewell.html",
      "date": "2026-06-06"
    }
  ],
  "2012": [
    {
      "name": "MacTalk-池建强的随想录",
      "year": "12",
      "title": "谁说 ChatGTP 和 Codex 合体了？",
      "url": "https://macshuo.com/?p=2063",
      "date": "2026-06-06"
    }
  ],
  "2016": [
    {
      "name": "Keyle",
      "year": "16",
      "title": "凌晨一点的键盘声",
      "url": "https://vrast.cn/posts/17192/",
      "date": "2026-06-06"
    }
  ],
  "2017": [
    {
      "name": "zj",
      "year": "17",
      "title": "自己做饭",
      "url": "http://www.zjhuiwan.cn/info/20260606/5212122510171204.html",
      "date": "2026-06-06"
    }
  ],
  "2019": [
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "AI建站真的比WordPress好吗？我用Claude、DeepSeek、Codex实测后的结论",
      "url": "https://blog.naibabiji.com/skill/wordpress-vs-ai.html",
      "date": "2026-06-07"
    }
  ],
  "2020": [
    {
      "name": "vinchent",
      "year": "20",
      "title": "2026全国I卷作文",
      "url": "https://www.vinchent.xyz/2026quan-guo-ijuan-zuo-wen",
      "date": "2026-06-07"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "评论系统切换到Twikoo",
      "url": "https://www.imcry.vip/post/2026-6-7-1409/",
      "date": "2026-06-07"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "牙齿治疗决策，还是想保住这颗牙",
      "url": "https://9sb.net/archives/dental-treatment-decision-do-you-still-want-to-preserve-this-tooth.html",
      "date": "2026-06-07"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "各大AI使用感受",
      "url": "https://t-t.live/archives/DoLWW2Jo",
      "date": "2026-06-06"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "母语级英语的本质，不是英语",
      "url": "https://xice.cx/posts/English/",
      "date": "2026-06-06"
    },
    {
      "name": "爱吃猫的鱼",
      "year": "24",
      "title": "当身体被强制暂停",
      "url": "https://blog.talen.top/posts/xxakfase",
      "date": "2026-06-06"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "母语级英语的本质，不是英语",
      "url": "https://xice.cx/posts/English/",
      "date": "2026-06-06"
    }
  ],
  "2026": [
    {
      "name": "妄司逸",
      "year": "26",
      "title": "自建图床服务",
      "url": "https://blog.flechazo.icu/2026/06/07/imghub/",
      "date": "2026-06-07"
    },
    {
      "name": "安迪",
      "year": "26",
      "title": "卸载搜狗输入法",
      "url": "https://i55.top/archives/532/",
      "date": "2026-06-07"
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
