// ==================== latest-articles.js ====================
// 抓取日期: 8/7/2026, 12:50:01 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The modern library",
      "url": "https://seths.blog/2026/08/the-modern-library/",
      "date": "2026-08-06"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 407 期）：国家为什么需要开源软件？",
      "url": "http://www.ruanyifeng.com/blog/2026/08/weekly-issue-407.html",
      "date": "2026-08-07"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "输入法",
      "url": "https://ezo.biz/Diary/1545.html",
      "date": "2026-08-06"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "宿舍水龙头罢工",
      "url": "http://www.xlanda.net/posts/22381",
      "date": "2026-08-06"
    },
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "防御性驾驶经验谈",
      "url": "https://doyj.com/2026/08/06/%e9%98%b2%e5%be%a1%e6%80%a7%e9%a9%be%e9%a9%b6%e7%bb%8f%e9%aa%8c%e8%b0%88/",
      "date": "2026-08-06"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "又丢失了一次域名起名",
      "url": "http://www.auiou.com/relevant/00002177.jsp",
      "date": "2026-08-06"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "五种会计计量属性对比",
      "url": "https://acevs.com/5151/",
      "date": "2026-08-06"
    }
  ],
  "2008": [
    {
      "name": "四火的唠叨",
      "year": "08",
      "title": "Run:ai 学习记录",
      "url": "https://www.raychase.net/8295",
      "date": "2026-08-06"
    }
  ],
  "2009": [
    {
      "name": "且听书吟",
      "year": "09",
      "title": "爱上倒影的人",
      "url": "https://yufan.me/posts/narcissus-in-the-screen",
      "date": "2026-08-06"
    },
    {
      "name": "标点符",
      "year": "09",
      "title": "Google NotebookLM简明教程",
      "url": "https://www.biaodianfu.com/google-notebooklm/",
      "date": "2026-08-06"
    }
  ],
  "2011": [
    {
      "name": "小癞子",
      "year": "11",
      "title": "车保险货比三家一定会更便宜: 每年续保险总是要花些时间",
      "url": "https://justyy.com/archives/72508",
      "date": "2026-08-06"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "中国官僚政治研究",
      "url": "https://wangyurui.com/posts/zhong-guo-guan-liao-zheng-zhi-yan-jiu-5ac5c05e",
      "date": "2026-08-06"
    }
  ],
  "2019": [
    {
      "name": "沧海月明",
      "year": "19",
      "title": "Apache Parquet FILE Logical Type 如何为 AI 数据湖统一多模态对象",
      "url": "https://www.inlighting.org/archives/apache-parquet-file-logical-type",
      "date": "2026-08-06"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "JN 最近在幹嘛 202608（20260806 更新）",
      "url": "https://blog.giveanornot.com/now/20260806/",
      "date": "2026-08-06"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "回忆：天河机场坐10块的黑车",
      "url": "https://www.imcry.vip/post/2026-8-6-1155/",
      "date": "2026-08-06"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "完整的SEO计划包含哪些内容？",
      "url": "https://www.bailuze.com/24310.html",
      "date": "2026-08-06"
    },
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "我为小说忙：（五）插件的上线工作",
      "url": "https://blog.mfwt.top/index.php/archives/1476/",
      "date": "2026-08-06"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "个人开发程序分享",
      "url": "https://siwei.li/ge-ren-kai-fa-cheng-xu-fen-xiang/",
      "date": "2026-08-06"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "Astro 7.2.0 实验性增量构建：从 0 命中到 1254 个 restored 的踩坑实录",
      "url": "https://xingwangzhe.fun/posts/astro-7.2-incremental-build/",
      "date": "2026-08-06"
    }
  ],
  "2025": [
    {
      "name": "落花雨记",
      "year": "25",
      "title": "更换域名啦",
      "url": "https://www.biubiubiu.me/73.html",
      "date": "2026-08-06"
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
