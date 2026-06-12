// ==================== latest-articles.js ====================
// 抓取日期: 6/12/2026, 10:26:51 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "ntfy.sh 是什么",
      "url": "https://wlj.me/posts/20260611-ntfy-sh/",
      "date": "2026-06-11"
    }
  ],
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "也许是全球首个GEO鉴证skill",
      "url": "https://dongjunke.cn/posts/2026/06/11/10349.html",
      "date": "2026-06-11"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Nü Tennis",
      "url": "https://seths.blog/2026/06/nu-tennis/",
      "date": "2026-06-12"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 400 期）：rsync 的争论",
      "url": "http://www.ruanyifeng.com/blog/2026/06/weekly-issue-400.html",
      "date": "2026-06-11"
    },
    {
      "name": "愆伏",
      "year": "03",
      "title": "专业的事，还是让专业的人做吧",
      "url": "https://www.tortorse.com/archives/leave-professional-work-to-professionals/",
      "date": "2026-06-11"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "挑选USB无线网卡",
      "url": "http://www.xlanda.net/posts/22256",
      "date": "2026-06-12"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "一个评论的ai评论",
      "url": "https://acevs.com/5033/",
      "date": "2026-06-12"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "코딩 없이 AI로 1시간 만에 홈페이지 만들기 - 워드프레스 대신 Replit?",
      "url": "https://www.thewordcracker.com/blog/%ec%bd%94%eb%94%a9-%ec%97%86%ec%9d%b4-%ec%82%ac%ec%9d%b4%ed%8a%b8-%eb%a7%8c%eb%93%9c%eb%8a%94-%eb%b0%a9%eb%b2%95/",
      "date": "2026-06-12"
    }
  ],
  "2016": [
    {
      "name": "故事里",
      "year": "16",
      "title": "如若一无所有，能否快乐自由",
      "url": "https://www.gushi.li/if-you-have-nothing-can-you-be-happy-and-free.html",
      "date": "2026-06-11"
    },
    {
      "name": "Keyle",
      "year": "16",
      "title": "《恶魔轮盘改》项目完整实现详解：架构、流程与双端同步",
      "url": "https://vrast.cn/posts/3735/",
      "date": "2026-06-12"
    },
    {
      "name": "太隐",
      "year": "16",
      "title": "写给斯大林的最后一封信",
      "url": "https://wangyurui.com/posts/xie-gei-si-da-lin-de-zui-hou-yi-feng-xin-a27f6e89",
      "date": "2026-06-11"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "看电影时，我到底在期待什么",
      "url": "https://blog.solazy.me/20260611/",
      "date": "2026-06-11"
    },
    {
      "name": "Allen Hua",
      "year": "19",
      "title": "Linux Desktop 使用 NVIDIA 独显驱动 Google Earth Pro 和 WeChat",
      "url": "https://hellodk.cn/post/1224",
      "date": "2026-06-12"
    }
  ],
  "2020": [
    {
      "name": "vinchent",
      "year": "20",
      "title": "关于死亡教育的一则通告",
      "url": "https://www.vinchent.xyz/guan-yu-si-wang-jiao-yu-de-ze-tong-gao",
      "date": "2026-06-11"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-11",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-11",
      "date": "2026-06-11"
    }
  ],
  "2023": [
    {
      "name": "小归客",
      "year": "23",
      "title": "为Typecho增加文章阅读次数统计功能",
      "url": "https://xgk.pw/archives/292/",
      "date": "2026-06-12"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "Google 搜索关于使用第三方 SEO 工具、服务和建议的指南",
      "url": "https://www.bailuze.com/25246.html",
      "date": "2026-06-12"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "回顾经典-程序员的三大美德",
      "url": "https://xingwangzhe.fun/posts/programmers-three-virtues/",
      "date": "2026-06-12"
    },
    {
      "name": "团团生活志",
      "year": "24",
      "title": "没想到我也经历了一次劳动维权",
      "url": "https://t-t.live/archives/14cF5QYJ",
      "date": "2026-06-11"
    }
  ],
  "2026": [
    {
      "name": "妄司逸",
      "year": "26",
      "title": "AI做了个部落冲突管理网站",
      "url": "https://blog.flechazo.icu/2026/06/12/coc-counter/",
      "date": "2026-06-12"
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
