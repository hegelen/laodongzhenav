// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-14 23:02:27
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "中期选举后AI数据中心变局",
      "url": "https://wlj.me/notes/sp-note-20261114-084843/",
      "date": "2026-11-14"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Have your AI call my AI",
      "url": "https://seths.blog/2026/11/have-your-ai-call-my-ai/",
      "date": "2026-11-14"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "2008，那顿饭",
      "url": "https://www.tortorse.com/archives/the-dinner-in-2008/",
      "date": "2026-11-14"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "压轴出场的超盒算",
      "url": "https://www.xlanda.net/posts/22616",
      "date": "2026-11-14"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年11月14日",
      "url": "https://acevs.com/5365/",
      "date": "2026-11-14"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "AWS Secrets Manager 可以跨帳號同步了",
      "url": "https://blog.gslin.org/archives/2026/11/14/13360/aws-secrets-manager-%e5%8f%af%e4%bb%a5%e8%b7%a8%e5%b8%b3%e8%99%9f%e5%90%8c%e6%ad%a5%e4%ba%86/",
      "date": "2026-11-14"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "风骚律师S02E05",
      "url": "https://www.seis-jun.xyz/blog/2026-11-14-better-call-saul-s02e05.html",
      "date": "2026-11-14"
    }
  ],
  "2009": [
    {
      "name": "lms",
      "year": "09",
      "title": ".pub 域名续费这么贵",
      "url": "https://lms.im/magic/pub-domain-name-renewals-are-so-expensive/",
      "date": "2026-11-14"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "你还记得动网论坛吗？",
      "url": "https://www.mmtx.net/1202.html",
      "date": "2026-11-14"
    },
    {
      "name": "宇间草",
      "year": "10",
      "title": "2026年度工作总结",
      "url": "https://2days.org/19980.html",
      "date": "2026-11-14"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "斑马玩教具荣获 4 大顶级设计大奖",
      "url": "https://blog.devtang.com/2026/11/14/get-4-top-design-reward-through-6-years-efforts/",
      "date": "2026-11-14"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 글과 페이지에 부제목 추가하기",
      "url": "https://www.thewordcracker.com/intermediate/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ea%b8%80%ea%b3%bc-%ed%8e%98%ec%9d%b4%ec%a7%80%ec%97%90-%eb%b6%80%ec%a0%9c%eb%aa%a9-%ec%b6%94%ea%b0%80/",
      "date": "2026-11-13"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "审判你的只有你自己",
      "url": "https://wangyurui.com/posts/shen-pan-ni-de-zhi-you-ni-zi-ji-9a3b066a",
      "date": "2026-11-14"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之胆子大究竟是不是鲁莽？",
      "url": "https://www.ccgxk.com/codeother/941.html",
      "date": "2026-11-14"
    }
  ],
  "2019": [
    {
      "name": "紫塞",
      "year": "19",
      "title": "登泰山：山顶相同，人生各异",
      "url": "https://zisai.com/posts/mount-tai-life-reflections/",
      "date": "2026-11-14"
    },
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "Anti-DDoS 香港服务器评测：CN2 GIA、CN2 GT 和云服务器线路实测",
      "url": "https://blog.naibabiji.com/vps-server/anti-ddos-hkv1-dedicated-server-review.html",
      "date": "2026-11-14"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": ".cx和.sb解析的同一个主机，一起死了",
      "url": "https://www.dalao.net/thread-66096.htm",
      "date": "2026-11-14"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-14：Templify AI、Filament by Galaxy、Claude Meetings",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-14",
      "date": "2026-11-14"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "Grammarly语法检测工具的使用教程",
      "url": "https://www.bailuze.com/24595.html",
      "date": "2026-11-14"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "单点崩溃",
      "url": "https://www.immarcus.com/blog/single-point-failure",
      "date": "2026-11-14"
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
