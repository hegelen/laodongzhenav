// ==================== latest-articles.js ====================
// 抓取日期: 6/6/2026, 8:19:25 PM
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
  "2004": [
    {
      "name": "龙哥",
      "year": "04",
      "title": "宝塔面板去除强制绑定宝塔官网账号",
      "url": "https://long.ge/18068.html",
      "date": "2026-06-06"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "我不怀念天涯",
      "url": "https://dujun.io/f6c2bff5-b5f7-57f6-a33b-6ac61f457ffb.html",
      "date": "2026-06-06"
    },
    {
      "name": "军",
      "year": "08",
      "title": "有点好奇宋朝的高考",
      "url": "https://me.xu19.com/imperial-examination-in-the-song-dynasty/",
      "date": "2026-06-06"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "小黄狗",
      "url": "https://zhou.ge/2026-06-06.html",
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
      "name": "MacTalk-池建强的随想录",
      "year": "12",
      "title": "谁说 ChatGTP 和 Codex 合体了？",
      "url": "https://macshuo.com/?p=2063",
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
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 Kirki 플러그인 보안 경고: 인증 없이 권한 상승 가능한 치명적 취약점 발견",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-kirki-%ed%94%8c%eb%9f%ac%ea%b7%b8%ec%9d%b8-%eb%b3%b4%ec%95%88-%ea%b2%bd%ea%b3%a0/",
      "date": "2026-06-05"
    }
  ],
  "2017": [
    {
      "name": "SimonAKing",
      "year": "17",
      "title": "全体进化：SkillOpt 赢麻了 与 营销号的狂欢",
      "url": "https://simonaking.com/blog/skillopt-evolution/",
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
      "name": "串串狗小刊",
      "year": "17",
      "title": "三个最近做 SaaS 的 JS 小技巧",
      "url": "https://www.ccgxk.com/front-end/770.html",
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
