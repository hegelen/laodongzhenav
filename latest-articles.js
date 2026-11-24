// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-24 04:20:19
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The two-sided power of subscription",
      "url": "https://seths.blog/2026/11/the-two-sided-power-of-subscription/",
      "date": "2026-11-23"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI 时代，你可能再也学不会一门编程语言了",
      "url": "https://tonybai.com/2026/11/24/ai-era-learning-programming-languages/",
      "date": "2026-11-23"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "交通事故",
      "url": "https://ezo.biz/Diary/1850.html",
      "date": "2026-11-23"
    },
    {
      "name": "Jake",
      "year": "04",
      "title": "为什么要学会“回头看” ? – AI 注意力机制的由来",
      "url": "https://jaketao.com/why-ai-look-back",
      "date": "2026-11-23"
    },
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "怎么提不同意见",
      "url": "https://doyj.com/2026/11/23/%e6%80%8e%e4%b9%88%e6%8f%90%e4%b8%8d%e5%90%8c%e6%84%8f%e8%a7%81/",
      "date": "2026-11-23"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "手机锁机软件体验",
      "url": "https://acevs.com/5385/",
      "date": "2026-11-23"
    },
    {
      "name": "破袜子",
      "year": "05",
      "title": "每夫吐槽（122）",
      "url": "https://pewae.com/2026/11/random_kuso_122.html",
      "date": "2026-11-23"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "慌啥子嘛",
      "url": "https://www.seis-jun.xyz/blog/2026-11-23-take-it-easy.html",
      "date": "2026-11-23"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "Al Brooks 问答笔记：练出稳定盈利到底要多久？",
      "url": "https://blog.forecho.com/al-brooks-how-long-to-become-profitable.html",
      "date": "2026-11-23"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "豆包就像一位容易憧憬的少女",
      "url": "https://www.leitao.cn/11631.html",
      "date": "2026-11-23"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "注册了一个给智能体使用的邮箱",
      "url": "https://www.linyufan.com/post/6152",
      "date": "2026-11-23"
    }
  ],
  "2017": [
    {
      "name": "2broear",
      "year": "17",
      "title": "6000+评论用户画像，看看GPT怎么说？",
      "url": "https://blog.2broear.com/notes/23-11-2026_comment-user-profile",
      "date": "2026-11-23"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "🇺🇸AT&T Residential VPS Benchmark – Tennessee, USA",
      "url": "https://heming.org/3229.html",
      "date": "2026-11-24"
    },
    {
      "name": "无梦梦游记",
      "year": "20",
      "title": "昼梦·海梦沉冰（毕设动画）",
      "url": "https://bkryofu.cn/p/5586341d.html",
      "date": "2026-11-23"
    },
    {
      "name": "yihong0618",
      "year": "20",
      "title": "不要自动化你的情感链接",
      "url": "https://blog.yihong0618.me/posts/issue-343/",
      "date": "2026-11-23"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-23：Yoroll、Rankhog、Resurf",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-23",
      "date": "2026-11-23"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "随想录IV",
      "url": "https://www.wsh233.cn/post/随想录iv",
      "date": "2026-11-23"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "继续跑",
      "url": "https://xiangming.site/1206.html",
      "date": "2026-11-24"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "如何进行关键词分析？注意关键词搜索意图",
      "url": "https://www.bailuze.com/24704.html",
      "date": "2026-11-24"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "终于开通流量主了",
      "url": "https://sheep5.net/archives/26112409.html",
      "date": "2026-11-24"
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
