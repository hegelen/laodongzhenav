// ==================== latest-articles.js ====================
// 抓取日期: 6/9/2026, 7:23:10 AM
// 只抓取最近14天内的文章，共 18 篇
// 目标 20 篇，实际 18 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "BoldVoice：一年 150 美元的口音教练",
      "url": "https://wlj.me/posts/boldvoice-accent-coach/",
      "date": "2026-06-08"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Art is a verb",
      "url": "https://seths.blog/2026/06/art-is-a-verb/",
      "date": "2026-06-08"
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
      "name": "delphij",
      "year": "04",
      "title": "如何：不借助第三方服务粗略检测访客是否来自中国大陆",
      "url": "https://blog.delphij.net/posts/2026/06/detecting-chinese-user/",
      "date": "2026-06-08"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "祸从天降",
      "url": "https://acevs.com/5026/",
      "date": "2026-06-08"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "wordpress兰空图床插件V2版",
      "url": "https://laozhang.org/archives/4070.html",
      "date": "2026-06-08"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "给wordpress增加Basic Auth密码",
      "url": "https://www.leitao.cn/10272.html",
      "date": "2026-06-08"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "Ai发展这么迅猛，谁不焦虑？",
      "url": "https://www.linyufan.com/post/5842",
      "date": "2026-06-09"
    },
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "Dream2.0 Plus 友链头像 400 错误：双重编码陷阱排查",
      "url": "https://wuqishi.com/archives/dream2-plus-avatar-double-encoding-fix",
      "date": "2026-06-08"
    }
  ],
  "2017": [
    {
      "name": "2broear",
      "year": "17",
      "title": "一只去喵星的橘猫– 日常记事（二百一十九）",
      "url": "https://blog.2broear.com/weblog/09-06-2026_%e4%b8%80%e5%8f%aa%e5%8e%bb%e5%96%b5%e6%98%9f%e7%9a%84%e6%a9%98%e7%8c%ab-%e6%97%a5%e5%b8%b8%e8%ae%b0%e4%ba%8b%ef%bc%88%e4%ba%8c%e7%99%be%e4%b8%80%e5%8d%81%e4%b9%9d%ef%bc%89",
      "date": "2026-06-09"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "注意，JS 里的  JSON.parse()  也有安全隐患！",
      "url": "https://www.ccgxk.com/front-end/772.html",
      "date": "2026-06-08"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "满足，收到了来自BlogsClub的新手礼包",
      "url": "https://www.imcry.vip/post/2026-6-9-1231/",
      "date": "2026-06-09"
    },
    {
      "name": "vinchent",
      "year": "20",
      "title": "Writefreely使用体验",
      "url": "https://www.vinchent.xyz/writefreelyshi-yong-ti-yan",
      "date": "2026-06-08"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-08",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-08",
      "date": "2026-06-08"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "谷歌广告在搜索中出现在哪里？Google Ads格式",
      "url": "https://www.bailuze.com/24130.html",
      "date": "2026-06-09"
    }
  ],
  "2024": [
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
      "name": "华立",
      "year": "26",
      "title": "墨迹博客(InkBlog) v1.26.6.05 to v1.26.6.09 升级指南",
      "url": "https://www.renhuali.cn/journal/cmq60feom00bachf1p5t82bi8",
      "date": "2026-06-09"
    },
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "2000年高考才懂：读书不是唯一出路，但扛住压力真的很有用",
      "url": "https://mzdsx.com/2026/06/09/2000%e5%b9%b4%e9%ab%98%e8%80%83%e6%89%8d%e6%87%82%ef%bc%9a%e8%af%bb%e4%b9%a6%e4%b8%8d%e6%98%af%e5%94%af%e4%b8%80%e5%87%ba%e8%b7%af%ef%bc%8c%e4%bd%86%e6%89%9b%e4%bd%8f%e5%8e%8b%e5%8a%9b%e7%9c%9f/",
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
