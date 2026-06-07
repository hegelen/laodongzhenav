// ==================== latest-articles.js ====================
// 抓取日期: 6/7/2026, 1:08:28 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "鼓起勇气看全英话剧",
      "url": "https://wlj.me/notes/sp-note-20260607-022714/",
      "date": "2026-06-06"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Real artists…",
      "url": "https://seths.blog/2026/06/real-artists/",
      "date": "2026-06-06"
    }
  ],
  "2004": [
    {
      "name": "龙哥",
      "year": "04",
      "title": "宝塔面板去除强制绑定宝塔官网账号",
      "url": "https://long.ge/18068.html",
      "date": "2026-06-06"
    },
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
  "2006": [
    {
      "name": "黄杰敏",
      "year": "06",
      "title": "高考二十载感怀",
      "url": "https://www.jiemin.com/archives/1830.html",
      "date": "2026-06-07"
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
      "name": "君子不器",
      "year": "11",
      "title": "2026年5月：不远行的假期，与一次告别",
      "url": "https://www.colinjiang.com/archives/may-holiday-and-farewell.html",
      "date": "2026-06-06"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "心慌",
      "url": "https://www.leitao.cn/10266.html",
      "date": "2026-06-06"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "简单总结：接入了阿里云的“读光”OCR识别票据，鸿蒙app显示markdown内容",
      "url": "https://www.linyufan.com/post/5838",
      "date": "2026-06-06"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "WordPress 又出上古Bug？你的 Feed 订阅源里面居然藏着一个博彩网站？！",
      "url": "https://www.tjsky.net/tutorial/1633",
      "date": "2026-06-06"
    }
  ],
  "2019": [
    {
      "name": "浪浪山下那个村",
      "year": "19",
      "title": "NVIDIA-OpenCode-免费模型使用指南",
      "url": "https://www.zeekling.cn/articles/2026/06/06/1780760812734.html",
      "date": "2026-06-06"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-06",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-06",
      "date": "2026-06-06"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "明天高考了",
      "url": "https://blog.verynb.net/posts/8485.html",
      "date": "2026-06-06"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "母语级英语的本质，不是英语",
      "url": "https://xice.cx/posts/English/",
      "date": "2026-06-06"
    },
    {
      "name": "团团生活志",
      "year": "24",
      "title": "各大AI使用感受",
      "url": "https://t-t.live/archives/DoLWW2Jo",
      "date": "2026-06-06"
    }
  ],
  "2025": [
    {
      "name": "青萍",
      "year": "25",
      "title": "2026精选5款热门AI配音软件",
      "url": "https://blog.lusyoe.com/article/2026-top-5-ai-voice-tools",
      "date": "2026-06-06"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "六六顺遂，恰逢周六",
      "url": "https://zhouayuan.com/post/49.html",
      "date": "2026-06-06"
    },
    {
      "name": "寻生纪",
      "year": "26",
      "title": "浙江有礼·台州有请",
      "url": "https://www.iseeklife.com/archives/1494",
      "date": "2026-06-06"
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
