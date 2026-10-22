// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-22 22:18:30
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "午休逛伯克利两家书店",
      "url": "https://wlj.me/notes/sp-note-20261023-050211/",
      "date": "2026-10-22"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The hotlist",
      "url": "https://seths.blog/2026/10/the-hotlist/",
      "date": "2026-10-22"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "应激训练",
      "url": "https://ezo.biz/Diary/1768.html",
      "date": "2026-10-22"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "二手键盘退货记录",
      "url": "https://acevs.com/5314/",
      "date": "2026-10-22"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "日本的 PHP 文藝文庫...",
      "url": "https://blog.gslin.org/archives/2026/10/23/13299/%e6%97%a5%e6%9c%ac%e7%9a%84-php-%e6%96%87%e8%97%9d%e6%96%87%e5%ba%ab/",
      "date": "2026-10-22"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "写得快一些，字的气势会更强一些",
      "url": "https://yufm.com/662493.html",
      "date": "2026-10-22"
    }
  ],
  "2008": [
    {
      "name": "河马",
      "year": "08",
      "title": "Debian 使用ufw管理防火墙",
      "url": "https://www.iamhippo.com/2026-10/1956.html",
      "date": "2026-10-22"
    }
  ],
  "2011": [
    {
      "name": "灵尘居",
      "year": "11",
      "title": "个人任务与项目管理软件 OmniFocus 4 介绍",
      "url": "https://lingchenzi.com/2026/10/9451.html",
      "date": "2026-10-22"
    },
    {
      "name": "第七星尘",
      "year": "11",
      "title": "记一次PHP安全漏洞的马拉松式修复",
      "url": "https://blog.star7th.com/2026/10/2643.html",
      "date": "2026-10-22"
    },
    {
      "name": "Be For Web",
      "year": "11",
      "title": "About a Designer (7) 关于创业公司的故事",
      "url": "http://beforweb.com/node/1166",
      "date": "2026-10-22"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web出海难赚大钱，是因为你不爱钱！",
      "url": "https://www.ccgxk.com/codeother/926.html",
      "date": "2026-10-22"
    },
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "碎碎谈 · 10月22日 18:38",
      "url": "https://www.tjsky.net/shuoshuo/n5czqgsdm6vciag9kfmeqd",
      "date": "2026-10-22"
    }
  ],
  "2018": [
    {
      "name": "黑桃三",
      "year": "18",
      "title": "昨天整个互联网安全圈都炸了",
      "url": "https://heitaosan.com/article/237",
      "date": "2026-10-22"
    }
  ],
  "2019": [
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "紧急预警！PHP 爆出 RCE 高危漏洞（CVSS 9.2）：手把手教你安全升级 PHP 8.2/8.3/8.4 环境",
      "url": "https://blog.naibabiji.com/skill/upgrade-php-environment.html",
      "date": "2026-10-22"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "多城之旅",
      "url": "https://liuqingwushui.top/archives/204/",
      "date": "2026-10-22"
    }
  ],
  "2020": [
    {
      "name": "优世界",
      "year": "20",
      "title": "减肥flag立了很多次，这次成了",
      "url": "https://usj.cc/20261021233503.html",
      "date": "2026-10-22"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "虎跳峡和雨崩",
      "url": "https://www.wsh233.cn/post/虎跳峡和雨崩",
      "date": "2026-10-22"
    },
    {
      "name": "Dayu",
      "year": "21",
      "title": "QuietSearch:支持 Kagi 和 DeepSeek API 的轻量搜索界面",
      "url": "https://anotherdayu.com/quietsearch-kagi-deepseek-api/",
      "date": "2026-10-22"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "网站优化中更新文章的窍门",
      "url": "https://www.bailuze.com/24522.html",
      "date": "2026-10-22"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "拒绝",
      "url": "https://www.immarcus.com/blog/rejection",
      "date": "2026-10-22"
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
