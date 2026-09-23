// ==================== latest-articles.js ====================
// 抓取日期: 9/23/2026, 10:16:33 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Badge vs Scoreboard",
      "url": "https://seths.blog/2026/09/badge-vs-scoreboard-contagious-and-competitive-games/",
      "date": "2026-09-23"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "流量告急",
      "url": "https://ezo.biz/Diary/1691.html",
      "date": "2026-09-23"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "北京之行2026",
      "url": "http://www.auiou.com/relevant/00002201.jsp",
      "date": "2026-09-23"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "世界名著全知道这本书",
      "url": "https://acevs.com/5250/",
      "date": "2026-09-23"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "博物馆见闻：国博《李静训和她的时代》",
      "url": "https://me.xu19.com/museum-notes-national-museum-of-china-discoveries-at-li-jingxun-tomb-a-glimpse-into-6th-7th-century-china/",
      "date": "2026-09-22"
    }
  ],
  "2011": [
    {
      "name": "前端小武",
      "year": "11",
      "title": "驾驶的乐趣和思考",
      "url": "https://xuexb.com/post/jiashidelequhesikao.html",
      "date": "2026-09-23"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今天修复了“林羽凡笔记”系统的一个巨大的Bug",
      "url": "https://www.linyufan.com/post/6043",
      "date": "2026-09-23"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "聊聊自费上班这件事儿",
      "url": "https://zhoutian.com/397.html",
      "date": "2026-09-23"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "发现一个质量不错的 AI 论文科研插图绘制工具，开源免费",
      "url": "https://www.ccgxk.com/emlog_dev/893.html",
      "date": "2026-09-23"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "我如何看待充值这件事儿",
      "url": "https://blog.solazy.me/20260923/",
      "date": "2026-09-23"
    },
    {
      "name": "紫塞",
      "year": "19",
      "title": "走进零售集团的十三年：写给宽广超市，也写给伴随它长大的承德人",
      "url": "https://zisai.com/posts/my-thirteenth-year-in-retail-kuanguang-and-chengde/",
      "date": "2026-09-23"
    }
  ],
  "2020": [
    {
      "name": "老卢",
      "year": "20",
      "title": "Typecho时间偏移修复(1Panel实操版)",
      "url": "https://blog.el9.cn/notes/Typecho-8hfix.html",
      "date": "2026-09-23"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "EVE宇宙：逮捕S.U.S的噩梦散打小队",
      "url": "https://www.imcry.vip/post/2026-9-23-738/",
      "date": "2026-09-22"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "单车",
      "url": "https://www.wsh233.cn/post/单车",
      "date": "2026-09-23"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "闲来无事折腾博客，完善深浅模式与页面 UI 细节",
      "url": "https://9sb.net/archives/idle-time-to-tinker-with-the-blog-perfect-the-depth-mode-and-page-ui-details.html",
      "date": "2026-09-23"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-23",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-23",
      "date": "2026-09-23"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "服务器错误及其在SEO中的重要性",
      "url": "https://www.bailuze.com/24442.html",
      "date": "2026-09-23"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "有个学生身份是真的很爽！",
      "url": "https://ygz.ink/archives/5852.html",
      "date": "2026-09-23"
    }
  ],
  "2024": [
    {
      "name": "刘郎阁",
      "year": "24",
      "title": "微信小程序开发日常：倒数日工具",
      "url": "https://vjo.cc/2018",
      "date": "2026-09-23"
    },
    {
      "name": "姓王者",
      "year": "24",
      "title": "公告:密友请更新我的GPG时间",
      "url": "https://xingwangzhe.fun/posts/gpg-expiry-update-2027/",
      "date": "2026-09-23"
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
