// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-13 01:21:19
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The best in the world is a local problem",
      "url": "https://seths.blog/2026/10/the-best-in-the-world-is-a-local-problem/",
      "date": "2026-10-12"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：成为细分行业老大的五个步骤（纯干货）",
      "url": "https://www.ufoer.com/post/14625.html",
      "date": "2026-10-12"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "代码看不懂了，Bug 还怎么修？AI 时代的调试心法",
      "url": "https://tonybai.com/2026/10/13/debug-when-you-no-longer-understand-the-code/",
      "date": "2026-10-12"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "巴别塔",
      "url": "https://kaix.in/2026/1012/",
      "date": "2026-10-12"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "QA工程师走进酒吧",
      "url": "https://blog.delphij.net/posts/2026/10/qa-engineer/",
      "date": "2026-10-12"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "scum二次测试",
      "url": "https://acevs.com/5288/",
      "date": "2026-10-12"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "补牙记",
      "url": "https://www.munue.com/819.html",
      "date": "2026-10-12"
    },
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "随笔",
      "url": "https://www.seis-jun.xyz/blog/2026-10-12-time-goes.html",
      "date": "2026-10-12"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "公德与法律",
      "url": "https://www.leitao.cn/11495.html",
      "date": "2026-10-12"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "鸿蒙版“竹子记账”新增加MCP功能",
      "url": "https://www.linyufan.com/post/6087",
      "date": "2026-10-12"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "为什么不能活在过去里？",
      "url": "https://d-d.design/single/20500",
      "date": "2026-10-12"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "텔레그램 알림·개인정보 설정 방법: 모바일과 PC 한 번에 정리",
      "url": "https://www.thewordcracker.com/blog/%ed%85%94%eb%a0%88%ea%b7%b8%eb%9e%a8-%ec%95%8c%eb%a6%bc%ea%b0%9c%ec%9d%b8%ec%a0%95%eb%b3%b4-%ec%84%a4%ec%a0%95-%eb%b0%a9%eb%b2%95/",
      "date": "2026-10-12"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "AI 目前最擅长的就是帮我们绕过痛苦！",
      "url": "https://www.ccgxk.com/codeother/916.html",
      "date": "2026-10-12"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "学习Logback",
      "url": "https://qiukui-note.happy365.day/20261012/about-logback/",
      "date": "2026-10-12"
    }
  ],
  "2019": [
    {
      "name": "Zeruns",
      "year": "19",
      "title": "雨云 W9-3495X 镇江BGP高防游戏云VPS，4核8G 15兆 仅需82.8元/月，MC开服最佳选择！",
      "url": "https://blog.zeruns.com/archives/963.html",
      "date": "2026-10-12"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件LinkTarget更新：新增防主题Pjax劫持脚本",
      "url": "https://www.bufanz.com/202610121088.html",
      "date": "2026-10-12"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-12：HireKey、kōdlo、Automations in Perplexity Computer",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-12",
      "date": "2026-10-12"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "从哪吒换到极简探针，移植主题加毛玻璃，准备慢慢全部转过来",
      "url": "https://9sb.net/archives/switching-from-nezha-to-minimalist-probes-transplanting-themes-with-frosted-glass-preparing-to-gradually-switch-all-over.html",
      "date": "2026-10-12"
    },
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "从儿子美术课画的一幅画感叹起…",
      "url": "https://www.ddf.im/index.php/2026/10/12/1274.html",
      "date": "2026-10-12"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "提升网站转化率的优化方案",
      "url": "https://www.bailuze.com/24488.html",
      "date": "2026-10-13"
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
