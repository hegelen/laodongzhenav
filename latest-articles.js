// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-08 22:49:05
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "指甲剪没带坐立难安",
      "url": "https://wlj.me/notes/sp-note-20261108-205354/",
      "date": "2026-11-08"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "不是所有服务都值得“双活”：Uber容灾架构的降本哲学",
      "url": "https://tonybai.com/2026/11/08/uber-failover-architecture-ufa-nsdi26/",
      "date": "2026-11-07"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "太难了",
      "url": "https://www.xlanda.net/posts/22603",
      "date": "2026-11-08"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "連不到 Cloudflare 的 DNS 的奇怪現象 (包括 1.1.1.1 以及其他掛在 Cloudflare 上的網域)",
      "url": "https://blog.gslin.org/archives/2026/11/09/13345/%e9%80%a3%e4%b8%8d%e5%88%b0-cloudflare-%e7%9a%84-dns-%e7%9a%84%e5%a5%87%e6%80%aa%e7%8f%be%e8%b1%a1-%e5%8c%85%e6%8b%ac-1-1-1-1-%e4%bb%a5%e5%8f%8a%e5%85%b6%e4%bb%96%e6%8e%9b%e5%9c%a8-cloudflare/",
      "date": "2026-11-08"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "风骚律师S02E03",
      "url": "https://www.seis-jun.xyz/blog/2026-11-08-better-call-saul-s02e03.html",
      "date": "2026-11-08"
    }
  ],
  "2007": [
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "修复 conda 不能升级的问题",
      "url": "https://yanlinlin.cn/2026/11/09/why-conda-update-does-nothing/",
      "date": "2026-11-08"
    },
    {
      "name": "树下语",
      "year": "07",
      "title": "随便写点-AI浪潮",
      "url": "https://yishu-life.com/index.php/archives/562.html",
      "date": "2026-11-08"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "合集 || 大设计真题、模拟题练习合集",
      "url": "https://www.yishu.pro/317.html",
      "date": "2026-11-08"
    }
  ],
  "2011": [
    {
      "name": "Be For Web",
      "year": "11",
      "title": "About a Designer (9) 进入前线阵地",
      "url": "http://beforweb.com/node/1170",
      "date": "2026-11-08"
    },
    {
      "name": "老孙",
      "year": "11",
      "title": "Fediverse -  一款让Typecho博客与联邦宇宙互通的插件",
      "url": "https://www.imsun.org/archives/1804.html",
      "date": "2026-11-08"
    }
  ],
  "2012": [
    {
      "name": "看川",
      "year": "12",
      "title": "iOS 隐蔽注入两路线：TrollFools 和 Roothide",
      "url": "https://kanchuan.com/blog/245-trollfools-roothide",
      "date": "2026-11-08"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "20261108 一些随感",
      "url": "https://www.suiyan.cc/blog/20261108084632",
      "date": "2026-11-08"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "认得出熟客的老板",
      "url": "https://blog.solazy.me/20261108/",
      "date": "2026-11-08"
    },
    {
      "name": "紫塞",
      "year": "19",
      "title": "一斤啤酒少了一两五：父亲四十六年前写给〈人民日报〉的信",
      "url": "https://zisai.com/a-bowl-of-beer-and-my-father-1980/",
      "date": "2026-11-08"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "2026年的邻居",
      "url": "https://www.imcry.vip/post/2026-11-8-1006/",
      "date": "2026-11-08"
    },
    {
      "name": "无妄当自持",
      "year": "20",
      "title": "家用 NAS 四件套部署手册：qBittorrent + Jellyfin + Cloudreve + MoviePilot（arm64 / Debian）",
      "url": "https://www.insidentally.com/articles/000052/",
      "date": "2026-11-08"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-08：ChatGPT Images 2.6、LiveReview、Quest",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-08",
      "date": "2026-11-08"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "第四篇印记 | 疲惫的一天",
      "url": "https://liyinwaihe.com/26.html",
      "date": "2026-11-08"
    },
    {
      "name": "Marcus",
      "year": "25",
      "title": "累趴的一天",
      "url": "https://www.immarcus.com/blog/i-am-beat",
      "date": "2026-11-08"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "博客开启Akismet垃圾评论保护",
      "url": "https://sheep5.net/archives/Akismet.html",
      "date": "2026-11-08"
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
