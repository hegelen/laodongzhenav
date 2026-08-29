// ==================== latest-articles.js ====================
// 抓取日期: 8/29/2026, 9:42:33 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "练习虽丑勤耕不辍",
      "url": "https://wlj.me/notes/sp-note-20260829-231838/",
      "date": "2026-08-29"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Fit and Finish",
      "url": "https://seths.blog/2026/08/fit-and-finish-3/",
      "date": "2026-08-29"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "那时候，贾母也才十来岁",
      "url": "https://kaix.in/2026/0829/",
      "date": "2026-08-29"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "瞎扯淡",
      "url": "http://www.xlanda.net/posts/22430",
      "date": "2026-08-29"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "流畅的系统和火狐浏览器",
      "url": "http://www.auiou.com/relevant/00002185.jsp",
      "date": "2026-08-29"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "PHP 8 上的 Taint",
      "url": "https://blog.gslin.org/archives/2026/08/29/13168/php-8-%e4%b8%8a%e7%9a%84-taint/",
      "date": "2026-08-29"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年8月29日",
      "url": "https://acevs.com/5197/",
      "date": "2026-08-29"
    },
    {
      "name": "当下",
      "year": "05",
      "title": "1-8月购物日志",
      "url": "https://blog.fueis.com/26-beauty",
      "date": "2026-08-29"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "八月的光，被我压进了延时里",
      "url": "https://zhujay.com/blog/blog_detail.html?id=1275",
      "date": "2026-08-29"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "出门一趟累趴了",
      "url": "https://me.xu19.com/nine-day-beijing-trip-exhausted/",
      "date": "2026-08-29"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "《现代世界体系》简评",
      "url": "https://www.leitao.cn/10768.html",
      "date": "2026-08-29"
    }
  ],
  "2015": [
    {
      "name": "网工格物",
      "year": "15",
      "title": "VMware VCF 9.1 下载和激活",
      "url": "https://songxwn.com/VMware-VCF9.1-Download/",
      "date": "2026-08-29"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之部署 H3 视频模型的 2 个 API 的站",
      "url": "https://www.ccgxk.com/codeother/863.html",
      "date": "2026-08-29"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "服务器安全更新通知",
      "url": "https://www.dalao.net/thread-63206.htm",
      "date": "2026-08-29"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "【不凡摄影作品 | 2026.8.29】",
      "url": "https://www.bufanz.com/20260829851.html",
      "date": "2026-08-29"
    }
  ],
  "2021": [
    {
      "name": "ovo",
      "year": "21",
      "title": "Cloudflare 为 1.1.1.1 瘦身：不换硬件省下 100TB 内存，DNS 查询延迟降低 19%",
      "url": "https://ovo.cc/archives/1440/",
      "date": "2026-08-29"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-29",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-29",
      "date": "2026-08-29"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "什么是SEO服务？ – SEO所有技巧和窍门",
      "url": "https://www.bailuze.com/24383.html",
      "date": "2026-08-29"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "AirPods Pro 3 还是 AirPods 4 降噪版？",
      "url": "https://siwei.li/airpods-pro-3-vs-airpods-4-anc/",
      "date": "2026-08-29"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "中医理论",
      "url": "https://www.immarcus.com/blog/chinese-medicine",
      "date": "2026-08-29"
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
