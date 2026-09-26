// ==================== latest-articles.js ====================
// 抓取日期: 9/26/2026, 10:04:05 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "KnotChat: Danny Meyer",
      "url": "https://seths.blog/2026/09/knotchat-danny-meyer/",
      "date": "2026-09-26"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "世风日下",
      "url": "http://www.xlanda.net/posts/22495",
      "date": "2026-09-26"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 内存分析要“动大手术”了：pprof 提案拟为 heap profile 补上失踪的另一半",
      "url": "https://tonybai.com/2026/09/26/go-pprof-heap-profile-memory-space-rss-proposal/",
      "date": "2026-09-25"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "刘欢去世",
      "url": "https://synyan.cn/t/63743",
      "date": "2026-09-26"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "吃饭",
      "url": "https://ezo.biz/Diary/1703.html",
      "date": "2026-09-26"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "流感小记",
      "url": "https://acevs.com/5256/",
      "date": "2026-09-26"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "用 slirp4netns 把程式鎖在 userspace NAT 裡面，避開串到 IPv6 的問題...",
      "url": "https://blog.gslin.org/archives/2026/09/27/13226/%e7%94%a8-slirp4netns-%e6%8a%8a%e7%a8%8b%e5%bc%8f%e9%8e%96%e5%9c%a8-userspace-nat-%e8%a3%a1%e9%9d%a2%ef%bc%8c%e9%81%bf%e9%96%8b%e4%b8%b2%e5%88%b0-ipv6-%e7%9a%84%e5%95%8f%e9%a1%8c/",
      "date": "2026-09-26"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x000C",
      "url": "https://lenciel.com/2026/09/fragments-0x000c/",
      "date": "2026-09-26"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "小K文章被拒了",
      "url": "https://www.seis-jun.xyz/blog/2026-09-26-Kumas-paper-is-rejected.html",
      "date": "2026-09-26"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "站着写字，手还是很抖，需要继续练习",
      "url": "https://yufm.com/662411.html",
      "date": "2026-09-26"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "京味文化夜市-潘家园",
      "url": "https://me.xu19.com/beijing-flavor-cultural-night-market-panjiayuan/",
      "date": "2026-09-26"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.9.26",
      "url": "https://www.linyufan.com/post/6052",
      "date": "2026-09-26"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "35家AI大模型大厂的面试题，已经整理好了，中秋国庆卷起来！",
      "url": "https://www.ccgxk.com/emlog_dev/896.html",
      "date": "2026-09-26"
    }
  ],
  "2019": [
    {
      "name": "Allen Hua",
      "year": "19",
      "title": "开发了一个云剪贴板服务 Cloud Clipboard",
      "url": "https://hellodk.cn/post/1231",
      "date": "2026-09-26"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-26",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-26",
      "date": "2026-09-26"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "我把博客评论换成了 FastComments",
      "url": "https://siwei.li/blog-comments-fastcomments/",
      "date": "2026-09-26"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "Whois edu.cn? CERNIC介绍",
      "url": "https://xingwangzhe.fun/posts/whois-edu-cn-cernic/",
      "date": "2026-09-26"
    },
    {
      "name": "ImQi1",
      "year": "24",
      "title": "原来职场并不是我想的那样",
      "url": "https://imqi1.com/content/note/1024",
      "date": "2026-09-26"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "美国的「医疗斩杀线」是否存在",
      "url": "https://www.immarcus.com/blog/does-medical-kill-threshold-exist-in-usa",
      "date": "2026-09-26"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "隔壁车库的小狗",
      "url": "https://sheep5.net/archives/52674/",
      "date": "2026-09-25"
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
