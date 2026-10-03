// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-03 22:13:50
// 只抓取最近14天内的文章，共 19 篇
// 目标 20 篇，实际 19 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Uniformity",
      "url": "https://seths.blog/2026/10/uniformity/",
      "date": "2026-10-03"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：丧心病狂的分享干货，发掘市场需求的3个秘法",
      "url": "https://www.ufoer.com/post/14579.html",
      "date": "2026-10-03"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "精神内耗",
      "url": "https://ezo.biz/Diary/1720.html",
      "date": "2026-10-03"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "给博客做个站内全文搜索：纯前端离线倒排索引的设计与取舍",
      "url": "https://blog.delphij.net/posts/2026/10/sitesearch/",
      "date": "2026-10-03"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "轮滑十二次",
      "url": "https://acevs.com/5270/",
      "date": "2026-10-03"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "歌名含义最好的一首中文歌",
      "url": "http://www.auiou.com/relevant/00002212.jsp",
      "date": "2026-10-03"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "关于想象医学和现代医学",
      "url": "https://www.seis-jun.xyz/blog/2026-10-03-about-traditional-and-modern-medic.html",
      "date": "2026-10-02"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "赴一场云海",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1282",
      "date": "2026-10-03"
    },
    {
      "name": "悠见",
      "year": "07",
      "title": "趁十一假期收拾新房，每天练字的计划也中断了",
      "url": "https://yufm.com/662431.html",
      "date": "2026-10-03"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "博物馆见闻：中国美术馆",
      "url": "https://me.xu19.com/museum-notes-national-art-museum-of-china/",
      "date": "2026-10-03"
    }
  ],
  "2013": [
    {
      "name": "Jonty",
      "year": "13",
      "title": "【istoreos】上海电信IPTV桥接组播转单播-保姆级教程rtp2httpd",
      "url": "https://nobb.cc/archives/3770.html",
      "date": "2026-10-03"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.3",
      "url": "https://www.linyufan.com/post/6071",
      "date": "2026-10-03"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "通过微扰分析求解等式约束优化问题",
      "url": "https://kexue.fm/archives/11928",
      "date": "2026-10-03"
    }
  ],
  "2019": [
    {
      "name": "Zeruns",
      "year": "19",
      "title": "喜提新车！ 小鹏L03",
      "url": "https://blog.zeruns.com/archives/961.html",
      "date": "2026-10-03"
    },
    {
      "name": "LJF.COM",
      "year": "19",
      "title": "《因为独特》---相信时间 相信经营 Celebrate Everyday",
      "url": "https://ljf.com/2026/10/03/1560/",
      "date": "2026-10-03"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-10-03",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-03",
      "date": "2026-10-03"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "导航栏做成悬浮还是直接压背景，大家给个意见",
      "url": "https://9sb.net/archives/should-the-navigation-bar-be-made-floating-or-directly-pressed-against-the-background-please-give-your-opinion.html",
      "date": "2026-10-03"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "[短讯]:查询whois for edu.cn",
      "url": "https://xingwangzhe.fun/posts/whois-for-edu-cn/",
      "date": "2026-10-03"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "最重要的一篇作文",
      "url": "https://www.immarcus.com/blog/one-most-important-composition",
      "date": "2026-10-03"
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
