// ==================== latest-articles.js ====================
// 抓取日期: 7/30/2026, 8:23:06 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Organizations that need you",
      "url": "https://seths.blog/2026/07/organizations-that-need-you/",
      "date": "2026-07-30"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "再谈桌底抽屉",
      "url": "http://www.xlanda.net/posts/22365",
      "date": "2026-07-30"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "消失的朋友圈",
      "url": "https://ezo.biz/Diary/1524.html",
      "date": "2026-07-30"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "伊斯蘭革命衛隊 IRGC 打 AWS 在巴林的設施",
      "url": "https://blog.gslin.org/archives/2026/07/31/13131/%e4%bc%8a%e6%96%af%e8%98%ad%e9%9d%a9%e5%91%bd%e8%a1%9b%e9%9a%8a-irgc-%e6%89%93-aws-%e5%9c%a8%e5%b7%b4%e6%9e%97%e7%9a%84%e8%a8%ad%e6%96%bd/",
      "date": "2026-07-30"
    }
  ],
  "2009": [
    {
      "name": "老卫",
      "year": "09",
      "title": "SonarQube从GitLab创建项目",
      "url": "https://waylau.com/sonarqube-create-project-from-gitlab/",
      "date": "2026-07-30"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "山东泰山队北看台某些球迷真是孙子",
      "url": "https://www.mmtx.net/1179.html",
      "date": "2026-07-30"
    }
  ],
  "2011": [
    {
      "name": "小癞子",
      "year": "11",
      "title": "加入微软五周年: 以水晶为证, 致敬一路成长",
      "url": "https://justyy.com/archives/72310",
      "date": "2026-07-30"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "不懂CAD到底能不能用Ai画图",
      "url": "https://www.linyufan.com/post/5925",
      "date": "2026-07-30"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "美国第一证券开户 + WISE入金 + 购买美股全流程分享",
      "url": "https://blog.xiaoz.org/archives/23286",
      "date": "2026-07-30"
    }
  ],
  "2017": [
    {
      "name": "刘承",
      "year": "17",
      "title": "又下雨了",
      "url": "https://czhlove.cn/rainingAgain",
      "date": "2026-07-30"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "程序员不要学编程技能了，意义近似 0，直接干！",
      "url": "https://www.ccgxk.com/emlog_dev/826.html",
      "date": "2026-07-30"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "突来的消息，降薪的是你",
      "url": "https://liuqingwushui.top/archives/180/",
      "date": "2026-07-30"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "giffgaff替代品是啥",
      "url": "https://www.dalao.net/thread-61825.htm",
      "date": "2026-07-30"
    },
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "那些你認為的華語金曲，其實都是翻唱的！",
      "url": "https://blog.giveanornot.com/mandarin-cover-songs/",
      "date": "2026-07-30"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "自己泡的茉莉蜜茶，甜不甜我说了算",
      "url": "https://9sb.net/archives/i-make-my-own-jasmine-tea-its-the-final-say-whether-its-sweet-or-not.html",
      "date": "2026-07-30"
    },
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "说说：#2026-07-30 00:07",
      "url": "https://www.mmbkz.cn/71007da4.html",
      "date": "2026-07-30"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-30",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-30",
      "date": "2026-07-30"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "多语言SEO优化是什么？",
      "url": "https://www.bailuze.com/24283.html",
      "date": "2026-07-30"
    }
  ],
  "2024": [
    {
      "name": "刘郎阁",
      "year": "24",
      "title": "七月近况",
      "url": "https://vjo.cc/1990",
      "date": "2026-07-30"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "幕后黑手",
      "url": "https://www.immarcus.com/blog/hidden-villain",
      "date": "2026-07-30"
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
