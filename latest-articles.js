// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-23 00:13:27
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "松懈一秒立刻打回原形",
      "url": "https://wlj.me/notes/sp-note-20261123-073505/",
      "date": "2026-11-22"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Earning enrollment",
      "url": "https://seths.blog/2026/11/earning-enrollment/",
      "date": "2026-11-22"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "别再只用 Map 了：Go 工程师应该了解的概率性数据结构",
      "url": "https://tonybai.com/2026/11/23/probabilistic-data-structures-in-go/",
      "date": "2026-11-22"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "升级到PVE9",
      "url": "https://ezo.biz/Play_More/PVE9.html",
      "date": "2026-11-22"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "从DokuWiki迁到Hugo",
      "url": "https://blog.delphij.net/posts/2026/11/wiki-reincarnation/",
      "date": "2026-11-22"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "笔杆墨囊",
      "url": "https://www.xlanda.net/posts/22635",
      "date": "2026-11-22"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Amazon Route 53 的加值服務：Advanced Hosted Zones",
      "url": "https://blog.gslin.org/archives/2026/11/22/13387/amazon-route-53-%e7%9a%84%e5%8a%a0%e5%80%bc%e6%9c%8d%e5%8b%99%ef%bc%9aadvanced-hosted-zones/",
      "date": "2026-11-22"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "二手键盘第七回合",
      "url": "https://acevs.com/5381/",
      "date": "2026-11-22"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "风骚律师s02e06",
      "url": "https://www.seis-jun.xyz/blog/2026-11-22-better-call-saul-s02e06.html",
      "date": "2026-11-22"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || 近期博客优化汇总",
      "url": "https://www.yishu.pro/409.html",
      "date": "2026-11-22"
    }
  ],
  "2010": [
    {
      "name": "磊磊落落",
      "year": "10",
      "title": "永矢不忘！参观旅顺万忠墓有感",
      "url": "https://leileiluoluo.com/posts/wan-zhong-mu.html",
      "date": "2026-11-22"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "近日杂记之20261122",
      "url": "https://www.leitao.cn/11624.html",
      "date": "2026-11-22"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "注册了一个给智能体使用的邮箱",
      "url": "https://www.linyufan.com/post/6152",
      "date": "2026-11-22"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "现实世界没有继续优化",
      "url": "https://d-d.design/single/20663",
      "date": "2026-11-22"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "有趣！构建多 AGENT（智能体）系统的三种模式和坑",
      "url": "https://www.ccgxk.com/emlog_dev/945.html",
      "date": "2026-11-22"
    }
  ],
  "2019": [
    {
      "name": "紫塞",
      "year": "19",
      "title": "从承德到上海，谈谈AI如何走进零售现场",
      "url": "https://zisai.com/posts/ai-enters-retail-from-chengde-to-shanghai/",
      "date": "2026-11-22"
    }
  ],
  "2020": [
    {
      "name": "yihong0618",
      "year": "20",
      "title": "不要自动化你的情感链接",
      "url": "https://blog.yihong0618.me/posts/issue-343/",
      "date": "2026-11-22"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件文件管家：文件分类/批量整理/文件分析/图片格式转换/压缩解压/文件分享/对接图床对象存储",
      "url": "https://www.bufanz.com/202611221285.html",
      "date": "2026-11-22"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "一种看待关系的角度",
      "url": "https://www.wsh233.cn/post/一种看待关系的角度",
      "date": "2026-11-23"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "清晨的胶州",
      "url": "https://sheep5.net/archives/26112209.html",
      "date": "2026-11-22"
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
