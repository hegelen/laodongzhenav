// ==================== latest-articles.js ====================
// 抓取日期: 6/8/2026, 1:14:32 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Art is a verb",
      "url": "https://seths.blog/2026/06/art-is-a-verb/",
      "date": "2026-06-08"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "英國的 GOV.UK 將 Stripe 改用荷蘭的 Adyen 付款服務",
      "url": "https://blog.gslin.org/archives/2026/06/08/13062/%e8%8b%b1%e5%9c%8b%e7%9a%84-gov-uk-%e5%b0%87-stripe-%e6%94%b9%e7%94%a8%e8%8d%b7%e8%98%ad%e7%9a%84-adyen-%e4%bb%98%e6%ac%be%e6%9c%8d%e5%8b%99/",
      "date": "2026-06-07"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "马代(2)",
      "url": "https://lenciel.com/2026/06/maldives-2/",
      "date": "2026-06-08"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "腾讯云备案信息核查顺利完成",
      "url": "https://www.munue.com/800.html",
      "date": "2026-06-08"
    },
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "房子依然是很多人意难平",
      "url": "https://joojen.com/archives/9012.html",
      "date": "2026-06-07"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "杂记·雨一直下·2624",
      "url": "https://bwskyer.com/rain-keeps-falling.html",
      "date": "2026-06-08"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || AI编程有感",
      "url": "https://www.yishu.pro/221.html",
      "date": "2026-06-07"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "更换搬瓦工 VPS IP",
      "url": "https://blog.devtang.com/2026/06/07/change-bandwagon-host-ip/",
      "date": "2026-06-07"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "给wordpress增加Basic Auth密码",
      "url": "https://www.leitao.cn/10272.html",
      "date": "2026-06-08"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我在本地部署了Qwen3.6-35B-A3B和Gemma4 12B，真正意义上的本地大模型",
      "url": "https://www.linyufan.com/post/5841",
      "date": "2026-06-08"
    }
  ],
  "2014": [
    {
      "name": "卡片创作实验室",
      "year": "14",
      "title": "普通人的小创造：从解决小我需求开始",
      "url": "https://cnfeat.com/posts/2026/06/08/%E6%99%AE%E9%80%9A%E4%BA%BA%E7%9A%84%E5%B0%8F%E5%88%9B%E9%80%A0%E4%BB%8E%E8%A7%A3%E5%86%B3%E5%B0%8F%E6%88%91%E9%9C%80%E6%B1%82%E5%BC%80%E5%A7%8B/",
      "date": "2026-06-07"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "流形上的最速下降：6. Muon + 双旋转",
      "url": "https://kexue.fm/archives/11777",
      "date": "2026-06-08"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "手生了就要多练",
      "url": "https://blog.solazy.me/20260607/",
      "date": "2026-06-07"
    },
    {
      "name": "浪浪山下那个村",
      "year": "19",
      "title": "PuaSE v0.2.4 发布简介：让 AI 编程从\"自由发挥\"到\"流程交付\"",
      "url": "https://www.zeekling.cn/articles/2026/06/07/1780820406890.html",
      "date": "2026-06-07"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "阿里云DNS解析的免费套餐要限速？快跑！",
      "url": "https://www.imcry.vip/post/2026-6-8-400/",
      "date": "2026-06-07"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "留一个烂员工，毁掉整个团队，你怎么看？",
      "url": "https://9sb.net/archives/what-do-you-think-about-keeping-a-bad-employee-and-destroying-the-entire-team.html",
      "date": "2026-06-08"
    },
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "毛囊炎克星——神药推荐",
      "url": "https://www.ddf.im/index.php/2026/06/08/1257.html",
      "date": "2026-06-08"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-08",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-08",
      "date": "2026-06-08"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "AI时代友好的SEO优化",
      "url": "https://www.bailuze.com/24126.html",
      "date": "2026-06-08"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "小小吃播上线🍜 早餐 Vlog ",
      "url": "https://zhouayuan.com/post/52.html",
      "date": "2026-06-07"
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
