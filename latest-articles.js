// ==================== latest-articles.js ====================
// 抓取日期: 7/26/2026, 8:22:35 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The Lego problem, revisited",
      "url": "https://seths.blog/2026/07/the-lego-problem/",
      "date": "2026-07-26"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "右手拇指腕管综合症",
      "url": "http://www.xlanda.net/posts/22357",
      "date": "2026-07-26"
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "不依赖第三方实现lightbox效果",
      "url": "https://long.ge/18083.html",
      "date": "2026-07-26"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "重定向",
      "url": "https://ezo.biz/Diary/1510.html",
      "date": "2026-07-26"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "不用 Python，也能训练大模型：两年之后再看 Go 语言机器学习框架 GoMLX",
      "url": "https://tonybai.com/2026/07/26/gomlx-one-year-later/",
      "date": "2026-07-25"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "卸载了autoclaw和qclaw",
      "url": "https://acevs.com/5128/",
      "date": "2026-07-26"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "2026年上半年房地产数据发布",
      "url": "https://joojen.com/archives/9052.html",
      "date": "2026-07-26"
    },
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "网吧复兴？",
      "url": "https://ltmltm.cn/bk/1482.html",
      "date": "2026-07-26"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "AI 改变了我的哪些习惯",
      "url": "https://izualzhy.cn/what-ai-changes-me",
      "date": "2026-07-26"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "6개월 만의 소규모 리뉴얼, 워드프레스 블로그 대문 페이지 레이아웃 변경",
      "url": "https://www.thewordcracker.com/basic/6%ea%b0%9c%ec%9b%94-%eb%a7%8c%ec%9d%98-%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%eb%b8%94%eb%a1%9c%ea%b7%b8-%ec%86%8c%ea%b7%9c%eb%aa%a8-%eb%a6%ac%eb%89%b4%ec%96%bc/",
      "date": "2026-07-26"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之域名商、托管商等一定要分开",
      "url": "https://www.ccgxk.com/codeother/821.html",
      "date": "2026-07-26"
    }
  ],
  "2019": [
    {
      "name": "LJF.COM",
      "year": "19",
      "title": "《华杉讲透王阳明《传习录》--- 真知就是行动",
      "url": "https://ljf.com/2026/07/26/1554/",
      "date": "2026-07-26"
    },
    {
      "name": "浪浪山下那个村",
      "year": "19",
      "title": "HDFS 升级模式（Upgrade Mode）完整分析",
      "url": "https://www.zeekling.cn/articles/2026/07/26/1785057539878.html",
      "date": "2026-07-26"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "断层里的心理学",
      "url": "https://blog.solazy.me/20260726/",
      "date": "2026-07-26"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "After Years of Waiting, I Finally Registered an Emoji Domain: 😍.uz  for Just $2 /Year",
      "url": "https://heming.org/2737.html",
      "date": "2026-07-26"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "等一切 风平浪静",
      "url": "https://www.laughingzhu.cn/posts/do-yourself",
      "date": "2026-07-26"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "抗大路，骑到腿软的一天",
      "url": "https://9sb.net/archives/fight-against-the-main-road-ride-until-your-legs-are-weak-one-day.html",
      "date": "2026-07-26"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "游蒋介石故居：奉化溪口",
      "url": "https://xice.cx/posts/ChiangKaishekHome/",
      "date": "2026-07-27"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.07.26 博客阅读周记",
      "url": "https://www.immarcus.com/blog/weekly-20260726",
      "date": "2026-07-26"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "说说：昨天去看了扬州主场VS徐州的比赛，但是由于天气太热，身体不舒服，上半场…",
      "url": "https://yigeboke.com/shuoshuo.php#shuo_37",
      "date": "2026-07-26"
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
