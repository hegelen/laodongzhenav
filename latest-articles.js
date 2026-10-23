// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-23 22:03:45
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：卖工具不赚钱，卖结果才赚钱：我为传统企业做了一套AI矩阵营销系统",
      "url": "https://www.ufoer.com/post/14677.html",
      "date": "2026-10-23"
    },
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 416 期）：编程已经面目全非",
      "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-416.html",
      "date": "2026-10-23"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 紧急发布两个安全版本！一次 CA 证书信任危机，暴露 HTTPS 安全体系的薄弱环节",
      "url": "https://tonybai.com/2026/10/23/go-urgent-security-release-ca-certificate-trust-crisis/",
      "date": "2026-10-23"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "移除了 webmention 功能",
      "url": "https://kaix.in/2026/1023/",
      "date": "2026-10-23"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Amazon 的人說他們在 10/17 就有看到這次 PHP 的攻擊了",
      "url": "https://blog.gslin.org/archives/2026/10/23/13301/amazon-%e7%9a%84%e4%ba%ba%e8%aa%aa%e4%bb%96%e5%80%91%e5%9c%a8-10-17-%e5%b0%b1%e6%9c%89%e7%9c%8b%e5%88%b0%e9%80%99%e6%ac%a1-php-%e7%9a%84%e6%94%bb%e6%93%8a%e4%ba%86/",
      "date": "2026-10-23"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "热拔插二手键盘对比",
      "url": "https://acevs.com/5316/",
      "date": "2026-10-23"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "而立不惑",
      "url": "https://www.seis-jun.xyz/blog/2026-10-23-confucious-words.html",
      "date": "2026-10-22"
    }
  ],
  "2008": [
    {
      "name": "河马",
      "year": "08",
      "title": "阿里云 东京 轻量评测",
      "url": "https://www.iamhippo.com/2026-10/1961.html",
      "date": "2026-10-23"
    }
  ],
  "2009": [
    {
      "name": "1900的灯泡店",
      "year": "09",
      "title": "走大朝台我在想啥？二",
      "url": "https://1900.live/zou-da-zhao-tai-wo-zai-xiang-sha-er/",
      "date": "2026-10-23"
    }
  ],
  "2010": [
    {
      "name": "Jeray",
      "year": "10",
      "title": "小小暴龙线 - 轻松拿捏",
      "url": "https://hi.jeray.wang/L/228.html",
      "date": "2026-10-23"
    }
  ],
  "2013": [
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "DeepSeek V4.1-Flash-1017 实测：甜点不在「斩杀一切」，在 5 元搜索接口",
      "url": "https://wuqishi.com/archives/deepseek-v4-1-flash-1017",
      "date": "2026-10-23"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "鸿蒙版“林羽凡笔记”终于改得差不多了，这次完整适配平板和鸿蒙pc，以及三折叠，内测结束后发布上线。",
      "url": "https://www.linyufan.com/post/6104",
      "date": "2026-10-23"
    }
  ],
  "2015": [
    {
      "name": "网工格物",
      "year": "15",
      "title": "部署Akvorado - 网络流日志收集分析系统",
      "url": "https://songxwn.com/akvorado-docker/",
      "date": "2026-10-23"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "心动了，二次元们会很喜欢的AI虚拟女友！",
      "url": "https://www.ccgxk.com/emlog_dev/929.html",
      "date": "2026-10-23"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "为什么有人不怕把事做砸",
      "url": "https://blog.solazy.me/20261023/",
      "date": "2026-10-23"
    },
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-08-15 / 雅快逸当",
      "url": "https://blog.xinshijiededa.men/daily/105/",
      "date": "2026-10-23"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件AI网站助手前瞻体验，定制自己的AI分身",
      "url": "https://www.bufanz.com/202610231170.html",
      "date": "2026-10-23"
    },
    {
      "name": "yihong0618",
      "year": "20",
      "title": "xintao",
      "url": "https://blog.yihong0618.me/posts/issue-349/",
      "date": "2026-10-23"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-23：DeepCell、Claude Duet、Doneas",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-23",
      "date": "2026-10-23"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "时间是贼",
      "url": "https://jefftay.com/blog-posts/time-is-a-thief",
      "date": "2026-10-23"
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
