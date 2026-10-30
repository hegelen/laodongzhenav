// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-30 22:57:52
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "Foursquare悄然落幕引人叹",
      "url": "https://wlj.me/notes/sp-note-20261030-181448/",
      "date": "2026-10-30"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Cooperation (the fall book list)",
      "url": "https://seths.blog/2026/10/cooperation-the-fall-book-list/",
      "date": "2026-10-30"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：不要闭门造车，让市场逼着你优化改进",
      "url": "https://www.ufoer.com/post/14721.html",
      "date": "2026-10-30"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Dagger 1.0 Beta 实战：用 Go 项目看懂第三代 CI 的真正优势",
      "url": "https://tonybai.com/2026/10/30/dagger-1-0-beta-go-ci-practice/",
      "date": "2026-10-29"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "更新提示：《人生讨论(28)：滑翔伞运动》新增",
      "url": "http://www.auiou.com/relevant/00010023.jsp",
      "date": "2026-10-30"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "MSI MP273U 偶而進入螢幕保護模式後就回不來的問題",
      "url": "https://blog.gslin.org/archives/2026/10/31/13311/msi-mp273u-%e5%81%b6%e8%80%8c%e9%80%b2%e5%85%a5%e8%9e%a2%e5%b9%95%e4%bf%9d%e8%ad%b7%e6%a8%a1%e5%bc%8f%e5%be%8c%e5%b0%b1%e5%9b%9e%e4%b8%8d%e4%be%86%e7%9a%84%e5%95%8f%e9%a1%8c/",
      "date": "2026-10-30"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "调度",
      "url": "https://ltmltm.cn/bk/1505.html",
      "date": "2026-10-30"
    },
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "为什么写博客？",
      "url": "https://www.seis-jun.xyz/blog/2026-10-30-moments-feels-more-tiring-than-blogging.html",
      "date": "2026-10-30"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "毛笔有点秃",
      "url": "https://yufm.com/662509.html",
      "date": "2026-10-30"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "懒加载图片新支持了sizes=”auto”属性，其作用是？",
      "url": "https://www.zhangxinxu.com/wordpress/2026/10/loading-lazy-img-sizes-auto/",
      "date": "2026-10-30"
    },
    {
      "name": "标点符",
      "year": "09",
      "title": "UnoCSS：把原子化 CSS变成可编程引擎",
      "url": "https://www.biaodianfu.com/unocss/",
      "date": "2026-10-30"
    }
  ],
  "2017": [
    {
      "name": "atpx",
      "year": "17",
      "title": "新玩具 Apple Watch Series 12",
      "url": "https://atpx.com/blog/apple-watch-series-12/",
      "date": "2026-10-30"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "向云端｜西南自驾11 - 布依",
      "url": "https://blog.ops-coffee.com/r/2026-southwest-road-trip-11-longjing.html",
      "date": "2026-10-30"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "X教授饰演者离世，享年86岁",
      "url": "https://www.dalao.net/thread-65597.htm",
      "date": "2026-10-30"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "办，改，销",
      "url": "https://www.imcry.vip/post/2026-10-30-1335/",
      "date": "2026-10-30"
    },
    {
      "name": "yihong0618",
      "year": "20",
      "title": "xintao",
      "url": "https://blog.yihong0618.me/posts/issue-349/",
      "date": "2026-10-30"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-30：Empacer、Scape、Floot in ChatGPT",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-30",
      "date": "2026-10-30"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "适合SEO的十大WordPress搜索引擎优化插件",
      "url": "https://www.bailuze.com/24545.html",
      "date": "2026-10-30"
    },
    {
      "name": "小野",
      "year": "23",
      "title": "Typecho  蜘蛛日志插件 SpiderLog",
      "url": "https://lb5.net/278.html",
      "date": "2026-10-29"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "素笺主题发布：设计方向说明",
      "url": "https://liyinwaihe.com/24.html",
      "date": "2026-10-30"
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
