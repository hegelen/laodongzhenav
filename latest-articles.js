// ==================== latest-articles.js ====================
// 抓取日期: 6/6/2026, 1:58:47 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
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
      "name": "竹炉山房",
      "year": "04",
      "title": "跑路+1",
      "url": "https://synyan.cn/t/62443",
      "date": "2026-06-05"
    },
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
      "title": "维修工具准备到位",
      "url": "http://www.xlanda.net/posts/22243",
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
      "name": "秋风于渭水",
      "year": "17",
      "title": "WordPress 又出上古Bug？你的 Feed 订阅源里面居然藏着一个博彩网站？！",
      "url": "https://www.tjsky.net/tutorial/1633",
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
      "name": "团团生活志",
      "year": "24",
      "title": "iphone17ProMax和Macmini4初体验",
      "url": "https://t-t.live/archives/WhZQ281H",
      "date": "2026-06-05"
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
