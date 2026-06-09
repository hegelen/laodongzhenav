// ==================== latest-articles.js ====================
// 抓取日期: 6/9/2026, 9:08:59 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "None of it is important (and all of it is)",
      "url": "https://seths.blog/2026/06/none-of-it-is-important-or-all-of-it-is/",
      "date": "2026-06-09"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "第一次去看陶喆演唱会",
      "url": "https://www.tortorse.com/archives/tao-zhe-soul-power-ii-nanjing-concert/",
      "date": "2026-06-09"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "旧电脑焕发第二春",
      "url": "http://www.xlanda.net/posts/22249",
      "date": "2026-06-09"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "祸从天降",
      "url": "https://acevs.com/5026/",
      "date": "2026-06-08"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "RADb 的 routing 資訊",
      "url": "https://blog.gslin.org/archives/2026/06/10/13065/radb-%e7%9a%84-routing-%e8%b3%87%e8%a8%8a/",
      "date": "2026-06-09"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "你在陪别人喝酒，我在陪女儿写作业",
      "url": "https://www.iliu.org/posts/ni-zai-pei-bieren-hejiu/",
      "date": "2026-06-09"
    }
  ],
  "2010": [
    {
      "name": "lilydjwg",
      "year": "10",
      "title": "\n        通过字幕总结YouTube视频内容\n      ",
      "url": "https://blog.lilydjwg.me/posts/217033.html",
      "date": "2026-06-09"
    },
    {
      "name": "Jeray",
      "year": "10",
      "title": "夜爬 - 旺山小狗线",
      "url": "https://hi.jeray.wang/L/219.html",
      "date": "2026-06-09"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "서버 과부하로 인한 워드프레스 ERR_TIMED_OUT 오류 해결",
      "url": "https://www.thewordcracker.com/basic/%ec%84%9c%eb%b2%84-%ea%b3%bc%eb%b6%80%ed%95%98%eb%a1%9c-%ec%9d%b8%ed%95%9c-%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-err_timed_out-%ec%98%a4%eb%a5%98-%ed%95%b4%ea%b2%b0/",
      "date": "2026-06-09"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 之用 coolify 部署 nextjs 和 面包屑 使用误区",
      "url": "https://www.ccgxk.com/codeother/773.html",
      "date": "2026-06-09"
    },
    {
      "name": "2broear",
      "year": "17",
      "title": "一只去喵星的橘猫– 日常记事（二百一十九）",
      "url": "https://blog.2broear.com/weblog/09-06-2026_%e4%b8%80%e5%8f%aa%e5%8e%bb%e5%96%b5%e6%98%9f%e7%9a%84%e6%a9%98%e7%8c%ab-%e6%97%a5%e5%b8%b8%e8%ae%b0%e4%ba%8b%ef%bc%88%e4%ba%8c%e7%99%be%e4%b8%80%e5%8d%81%e4%b9%9d%ef%bc%89",
      "date": "2026-06-09"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-06-01 / 土木，隱忍",
      "url": "https://blog.xinshijiededa.men/daily/41/",
      "date": "2026-06-09"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "关于自律",
      "url": "https://blog.solazy.me/20260609/",
      "date": "2026-06-09"
    },
    {
      "name": "herman",
      "year": "19",
      "title": "Active recall",
      "url": "https://herman.bearblog.dev/active-recall/",
      "date": "2026-06-09"
    }
  ],
  "2021": [
    {
      "name": "Dayu",
      "year": "21",
      "title": "2026年 激战2 常用网站和工具 #Guild wars 2",
      "url": "https://anotherdayu.com/guild-wars-2/",
      "date": "2026-06-09"
    }
  ],
  "2023": [
    {
      "name": "火米",
      "year": "23",
      "title": "什么样的人在听我的播客",
      "url": "https://huo.me/profile/",
      "date": "2026-06-09"
    }
  ],
  "2024": [
    {
      "name": "奶狗",
      "year": "24",
      "title": "小小说｜《最后一杯咖啡》",
      "url": "https://www.naigou.cn/gy_8r4qk/",
      "date": "2026-06-09"
    },
    {
      "name": "姓王者",
      "year": "24",
      "title": "别让AI替你捣乱-致零软件工程经验新人的指南",
      "url": "https://xingwangzhe.fun/posts/zero-se-newcomer-guide/",
      "date": "2026-06-09"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "2000年高考才懂：读书不是唯一出路，但扛住压力真的很有用",
      "url": "https://mzdsx.com/2026/06/09/2000%e5%b9%b4%e9%ab%98%e8%80%83%e6%89%8d%e6%87%82%ef%bc%9a%e8%af%bb%e4%b9%a6%e4%b8%8d%e6%98%af%e5%94%af%e4%b8%80%e5%87%ba%e8%b7%af%ef%bc%8c%e4%bd%86%e6%89%9b%e4%bd%8f%e5%8e%8b%e5%8a%9b%e7%9c%9f/",
      "date": "2026-06-09"
    },
    {
      "name": "华立",
      "year": "26",
      "title": "墨迹博客(InkBlog) v1.26.6.05 to v1.26.6.09 升级指南",
      "url": "https://www.renhuali.cn/journal/cmq60feom00bachf1p5t82bi8",
      "date": "2026-06-09"
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
