// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-28 23:09:01
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "订阅我的精选阅读清单",
      "url": "https://wlj.me/notes/sp-note-20261028-112538/",
      "date": "2026-10-28"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：打造个人IP，不能把魂交给AI",
      "url": "https://www.ufoer.com/post/14708.html",
      "date": "2026-10-28"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "上车下车",
      "url": "https://www.xlanda.net/posts/22578",
      "date": "2026-10-28"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "鼻毛",
      "url": "https://ezo.biz/Diary/b.html",
      "date": "2026-10-28"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Google 放出 Gemini 4 Carbon",
      "url": "https://blog.gslin.org/archives/2026/10/29/13304/google-%e6%94%be%e5%87%ba-gemini-4-carbon/",
      "date": "2026-10-28"
    },
    {
      "name": "春田",
      "year": "05",
      "title": "１０９８．「働く」について考える(１５)　信頼関係をつくる  ①仲良くすることは仕事である",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/10/post-ef0149.html",
      "date": "2026-10-28"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "轴体评测汇总",
      "url": "https://acevs.com/5326/",
      "date": "2026-10-28"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "告别不蒜子，自己给博客记个数",
      "url": "https://www.seis-jun.xyz/blog/2026-10-28-independent-blog-counter.html",
      "date": "2026-10-28"
    }
  ],
  "2007": [
    {
      "name": "老杨",
      "year": "07",
      "title": "开源密码生成工具SimplePassword",
      "url": "https://yangyq.net/2026/10/open-source-password-generator-simplepassword.html",
      "date": "2026-10-28"
    },
    {
      "name": "悠见",
      "year": "07",
      "title": "写字打卡",
      "url": "https://yufm.com/662505.html",
      "date": "2026-10-28"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "慈云数据香港CN2云服务器得分 106.84",
      "url": "https://dujun.io/ciyundata-hk-cn2-scored-one-hundred-and-six-point-eight-four.html",
      "date": "2026-10-28"
    },
    {
      "name": "军",
      "year": "08",
      "title": "矛盾北京故居",
      "url": "https://me.xu19.com/visiting-beijing-former-residence-of-maodun/",
      "date": "2026-10-28"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "碎碎谈 · 10月28日 18:09",
      "url": "https://www.tjsky.net/shuoshuo/mcxesubu7e2gfpobpmyqhk",
      "date": "2026-10-28"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "BabyLog记录了我14年对孩子所有的回忆也见证了我自学编程的学习路线",
      "url": "https://www.suiyan.cc/blog/20261028080326",
      "date": "2026-10-28"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件WAF Guard开发进展：接入AI模型全由AI助手操作，附对话AI助手的演示视频",
      "url": "https://www.bufanz.com/202610281184.html",
      "date": "2026-10-28"
    },
    {
      "name": "我不是咕咕鸽",
      "year": "20",
      "title": "美区 Apple ID 注册教程 2026：国内手机号免费注册，不用买号，其他区同理",
      "url": "https://blog.laoda.de/archives/us-apple-id-register-china-phone-2026",
      "date": "2026-10-28"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-28：TheySaid 4.0、Overmind、Spacesheep",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-28",
      "date": "2026-10-28"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "网站标题title中用什么标点符号对SEO友好？",
      "url": "https://www.bailuze.com/24532.html",
      "date": "2026-10-28"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "绯弹的亚里亚 DSH 主题 0.1.0：绯红双奏，搭档跟上",
      "url": "https://www.sanshu.cn/atc/88.html",
      "date": "2026-10-28"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "第二篇印记 | 关于爱情，我终于想明白了几件事",
      "url": "https://liyinwaihe.com/18.html",
      "date": "2026-10-28"
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
