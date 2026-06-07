// ==================== latest-articles.js ====================
// 抓取日期: 6/7/2026, 1:40:21 AM
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
      "name": "水拍石",
      "year": "12",
      "title": "心慌",
      "url": "https://www.leitao.cn/10266.html",
      "date": "2026-06-06"
    },
    {
      "name": "MacTalk-池建强的随想录",
      "year": "12",
      "title": "谁说 ChatGTP 和 Codex 合体了？",
      "url": "https://macshuo.com/?p=2063",
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
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "三个最近做 SaaS 的 JS 小技巧",
      "url": "https://www.ccgxk.com/front-end/770.html",
      "date": "2026-06-06"
    },
    {
      "name": "zj",
      "year": "17",
      "title": "自己做饭",
      "url": "http://www.zjhuiwan.cn/info/20260606/5212122510171204.html",
      "date": "2026-06-06"
    },
    {
      "name": "SimonAKing",
      "year": "17",
      "title": "全体进化：SkillOpt 赢麻了 与 营销号的狂欢",
      "url": "https://simonaking.com/blog/skillopt-evolution/",
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
    },
    {
      "name": "沧海月明",
      "year": "19",
      "title": "AI 的焦虑",
      "url": "https://www.inlighting.org/archives/ai-anxiety",
      "date": "2026-06-06"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "AI搜索如何改变小型企业的本地SEO优化",
      "url": "https://www.bailuze.com/24123.html",
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
      "name": "爱吃猫的鱼",
      "year": "24",
      "title": "当身体被强制暂停",
      "url": "https://blog.talen.top/posts/xxakfase",
      "date": "2026-06-06"
    }
  ],
  "2026": [
    {
      "name": "寻生纪",
      "year": "26",
      "title": "浙江有礼·台州有请",
      "url": "https://www.iseeklife.com/archives/1494",
      "date": "2026-06-06"
    },
    {
      "name": "周阿源",
      "year": "26",
      "title": "六六顺遂，恰逢周六",
      "url": "https://zhouayuan.com/post/49.html",
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
