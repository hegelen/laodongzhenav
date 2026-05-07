// ==================== latest-articles.js ====================
// 抓取日期: 5/6/2026, 8:30:00 PM
// 只抓取最近7天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "人生讨论(21)：“明白不”的心理机制",
      "url": "http://www.auiou.com/relevant/00002148.jsp",
      "date": "2026-05-02"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "把日子过好，是一件不容易的事情",
      "url": "https://joojen.com/archives/8938.html",
      "date": "2026-05-05"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "古苗寨万家灯火，黄果树瀑雨通天",
      "url": "https://dujun.io/may-day-family-trip-to-guizhou.html",
      "date": "2026-05-06"
    },
    {
      "name": "军",
      "year": "08",
      "title": "难得正版Windows又打骨折！白菜价",
      "url": "https://me.xu19.com/windows11-big-discount/",
      "date": "2026-05-01"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "补牙",
      "url": "https://zhou.ge/2026-05-05.html",
      "date": "2026-05-05"
    }
  ],
  "2012": [
    {
      "name": "金马",
      "year": "12",
      "title": "用AI为自己创造实习机会",
      "url": "https://lijinma.com/create-internship-opportunities-with-ai/",
      "date": "2026-05-04"
    }
  ],
  "2015": [
    {
      "name": "Luminous",
      "year": "15",
      "title": "【frp】双端内网环境XTCP协议P2P打洞互通实践",
      "url": "https://luotianyi.vc/9435.html",
      "date": "2026-05-03"
    },
    {
      "name": "东哥",
      "year": "15",
      "title": "typecho的handsome主题首页增加标签",
      "url": "https://blog.hudd.cn/1415.html",
      "date": "2026-05-06"
    }
  ],
  "2016": [
    {
      "name": "woodu",
      "year": "16",
      "title": "JVS时代的经典乘客——《太鼓之达人 6》",
      "url": "https://woodu.me/jvsshidaidejingdiancheng/",
      "date": "2026-05-02"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "手机充电口烧了",
      "url": "https://ygz.ink/archives/4812.html",
      "date": "2026-05-06"
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

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇最近7天文章');
