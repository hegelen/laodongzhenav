// ==================== latest-articles.js ====================
// 抓取日期: 6/10/2026, 2:12:21 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "Mac 远程桌面：看的是同一个画面",
      "url": "https://wlj.me/posts/mac-remote-desktop-shared-screen/",
      "date": "2026-06-09"
    }
  ],
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
      "name": "王通",
      "year": "03",
      "title": "王通：AI智能体会增强个人能力100倍",
      "url": "https://www.ufoer.com/post/13512.html",
      "date": "2026-06-09"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "TP-LINK连锐捷",
      "url": "http://www.xlanda.net/posts/22251",
      "date": "2026-06-10"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "AI 博客问题挑战",
      "url": "https://kaix.in/2026/0609/",
      "date": "2026-06-09"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Linux 上的 Firefox 要支援 Vulkan Video Decoding 了？",
      "url": "https://blog.gslin.org/archives/2026/06/10/13066/linux-%e4%b8%8a%e7%9a%84-firefox-%e8%a6%81%e6%94%af%e6%8f%b4-vulkan-video-decoding-%e4%ba%86%ef%bc%9f/",
      "date": "2026-06-09"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "把 MinIO 示例迁到 OtterIO：使用、部署与迁移验证",
      "url": "https://soulteary.com/2026/06/09/migrate-minio-examples-to-otterio-usage-deployment-and-verification.html",
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
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "鸿蒙版“林羽凡笔记”App增加暗色模式",
      "url": "https://www.linyufan.com/post/5843",
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
    }
  ],
  "2019": [
    {
      "name": "herman",
      "year": "19",
      "title": "Active recall",
      "url": "https://herman.bearblog.dev/active-recall/",
      "date": "2026-06-09"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "关于自律",
      "url": "https://blog.solazy.me/20260609/",
      "date": "2026-06-09"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "千呼萬喚的露狗！還有新的烘焙雞！",
      "url": "https://blog.giveanornot.com/new-homepage/",
      "date": "2026-06-10"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "满足，收到了来自BlogsClub的新手礼包",
      "url": "https://www.imcry.vip/post/2026-6-9-1231/",
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
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客构建“轻量级知识索引”（四）：系列文章导航与阅读路径设计",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14334/",
      "date": "2026-06-10"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "梦和灵感论AI自主意识与人类是另一种AI(圈养)的可能性",
      "url": "https://www.renhuali.cn/journal/cmq7cw7e20050ch3o0ewt1aog",
      "date": "2026-06-10"
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
