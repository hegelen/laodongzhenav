// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-07 22:38:40
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "明知不怕仍不敢看扎针",
      "url": "https://wlj.me/notes/sp-note-20261107-095153/",
      "date": "2026-11-07"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Start",
      "url": "https://seths.blog/2026/11/start/",
      "date": "2026-11-07"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "冷柜沦陷",
      "url": "https://www.xlanda.net/posts/22600",
      "date": "2026-11-07"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Lean 创始人：当 AI 开始写代码，谁来证明它是正确的？",
      "url": "https://tonybai.com/2026/11/07/when-ai-writes-code-who-proves-it-works/",
      "date": "2026-11-07"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "IFTTT 說要漲價？",
      "url": "https://blog.gslin.org/archives/2026/11/07/13339/ifttt-%e8%aa%aa%e8%a6%81%e6%bc%b2%e5%83%b9%ef%bc%9f/",
      "date": "2026-11-07"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "风骚律师第二季第一集",
      "url": "https://www.seis-jun.xyz/blog/2026-11-07-better-call-saul-s2e1.html",
      "date": "2026-11-07"
    }
  ],
  "2009": [
    {
      "name": "lms",
      "year": "09",
      "title": "Workbuddy 帮我申请取消了甲骨文云的两步验证",
      "url": "https://lms.im/workbuddy-helped-me-apply-to-cancel-2-step-verification-on-oracle-cloud/",
      "date": "2026-11-07"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "浏览别人博客后，感觉不错，记录下",
      "url": "https://www.mmtx.net/1199.html",
      "date": "2026-11-07"
    }
  ],
  "2011": [
    {
      "name": "君子不器",
      "year": "11",
      "title": "2026年10月：辽宁五日自驾、地铁漫游，与落空的年终奖",
      "url": "https://www.colinjiang.com/archives/2026-10-liaoning-trip-and-lost-bonus.html",
      "date": "2026-11-07"
    }
  ],
  "2012": [
    {
      "name": "方糖",
      "year": "12",
      "title": "立冬",
      "url": "/post/li-dong",
      "date": "2026-11-07"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "QQ空间推了十年前的说说，我愣住了",
      "url": "https://blog.52hyjs.com/post-1292.html",
      "date": "2026-11-07"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "Vercel deployments-storage 空间告急！",
      "url": "https://www.suiyan.cc/blog/20261107092952",
      "date": "2026-11-07"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "制导与控制基础（下）之一：导弹控制原理",
      "url": "https://blog.xinshijiededa.men/missile/control/",
      "date": "2026-11-07"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "从阿里云企业邮转移到网易企业邮",
      "url": "https://www.imcry.vip/post/2026-11-7-2152/",
      "date": "2026-11-07"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "@所有人，请使用验证器保护账号",
      "url": "https://www.dalao.net/thread-65852.htm",
      "date": "2026-11-07"
    }
  ],
  "2021": [
    {
      "name": "Dayu",
      "year": "21",
      "title": "ChatGPT Dot 日常使用记录",
      "url": "https://anotherdayu.com/how-i-use-dots/",
      "date": "2026-11-07"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "单车",
      "url": "https://www.wsh233.cn/post/单车",
      "date": "2026-11-07"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-07：Tobira Site Agent、Turnstone、Rankfender v3.0",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-07",
      "date": "2026-11-07"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO到底要怎么学？学什么内容？",
      "url": "https://www.bailuze.com/24567.html",
      "date": "2026-11-07"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "“胖友之家”",
      "url": "https://sheep5.net/archives/637.html",
      "date": "2026-11-07"
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
