// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-21 22:20:32
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "PHP高危漏洞需紧急处置",
      "url": "https://wlj.me/notes/sp-note-20261022-020832/",
      "date": "2026-10-21"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Toward depth",
      "url": "https://seths.blog/2026/10/toward-depth/",
      "date": "2026-10-21"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：几千粉丝成交几百客户，AI营销的机会在传统企业",
      "url": "https://www.ufoer.com/post/14670.html",
      "date": "2026-10-21"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "评论那点回声",
      "url": "https://ezo.biz/Diary/1766.html",
      "date": "2026-10-21"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "PHP 的兩包 RCE",
      "url": "https://blog.gslin.org/archives/2026/10/21/13293/php-%e7%9a%84%e5%85%a9%e5%8c%85-rce/",
      "date": "2026-10-21"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "牛仔裤选择和胖一些不怕大病？",
      "url": "https://acevs.com/5312/",
      "date": "2026-10-20"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "每天写有什么好处？",
      "url": "https://www.seis-jun.xyz/blog/2026-10-21-what-can-I-get-by-writing-everyday.html",
      "date": "2026-10-21"
    },
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "iPhone 面容 ID 不可用问题如何修复？",
      "url": "https://www.munue.com/820.html",
      "date": "2026-10-21"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "PHP 爆出两个严重漏洞",
      "url": "https://dujun.io/e2346eda-0456-5d13-87dd-3e030eb04e3d.html",
      "date": "2026-10-21"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.21-搞了个土豆丸子",
      "url": "https://www.linyufan.com/post/6100",
      "date": "2026-10-21"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "沉没成本不是成本？",
      "url": "https://d-d.design/single/20598",
      "date": "2026-10-21"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "카페24 오래된 PHP 버전 업데이트 및 매니지드 워드프레스로 변경",
      "url": "https://www.thewordcracker.com/basic/cafe24-switch-to-managed-wordpress/",
      "date": "2026-10-21"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "毁灭吧，赶紧的：PHP 爆出 9.2 分”上古”RCE 漏洞，大家今晚 10 点熬夜打补丁吧",
      "url": "https://www.tjsky.net/news/2157",
      "date": "2026-10-21"
    },
    {
      "name": "zj",
      "year": "17",
      "title": "小宝 “诈胡”，吓我们一跳",
      "url": "http://www.zjhuiwan.cn/info/20261021/5220422518659669.html",
      "date": "2026-10-21"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web出海之为什么逆袭机会都在那几个行业？",
      "url": "https://www.ccgxk.com/codeother/925.html",
      "date": "2026-10-21"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "博客的评论（回应）真的很重要吗？",
      "url": "https://www.suiyan.cc/blog/20261021212349",
      "date": "2026-10-21"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-21：/dev/null、Composio Instant、Hoistbay",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-21",
      "date": "2026-10-21"
    },
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "[本溪]天龙洞、关门山、关山湖",
      "url": "https://www.mmbkz.cn/ae01bc8c.html",
      "date": "2026-10-21"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "我为小说忙：（六）我们需要 OCR",
      "url": "https://blog.mfwt.top/index.php/archives/1589/",
      "date": "2026-10-21"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO优化怎么快速把关键词优化至首页？",
      "url": "https://www.bailuze.com/24520.html",
      "date": "2026-10-21"
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
