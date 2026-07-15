// ==================== latest-articles.js ====================
// 抓取日期: 7/15/2026, 8:21:15 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Disposable software",
      "url": "https://seths.blog/2026/07/disposable-software/",
      "date": "2026-07-15"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "第一卷 03",
      "url": "https://kaix.in/2026/0712/339a/",
      "date": "2026-07-15"
    }
  ],
  "2005": [
    {
      "name": "春田",
      "year": "05",
      "title": "１０８３．生きられるだけ生きればいい",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/07/post-e796ce.html",
      "date": "2026-07-15"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "欧姆龙 D2FC-F-7N 相似的微动",
      "url": "https://acevs.com/5103/",
      "date": "2026-07-15"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "10年火花塞的状态",
      "url": "https://me.xu19.com/mercedes-benz-glk300-spark-plug-condition-after-ten-years/",
      "date": "2026-07-15"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "从 400U 到 800U：小账户做短线时，我这周学到的几件事",
      "url": "https://blog.forecho.com/from-400u-to-800u-small-account-scalping-lessons.html",
      "date": "2026-07-15"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我重新优化了“林羽凡笔记”chat模块中选择大模型的功能，给智谱大模型增加智能体模式",
      "url": "https://www.linyufan.com/post/5903",
      "date": "2026-07-15"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "AI 검사 및 표절 검사 솔루션 | 텍스트 AI 생성 여부 분석",
      "url": "https://www.thewordcracker.com/blog/ai-%ed%83%90%ec%a7%80-%eb%b0%8f-%ed%91%9c%ec%a0%88-%ea%b2%80%ec%82%ac-%ec%86%94%eb%a3%a8%ec%85%98-%ea%b0%80%ec%9d%b4%eb%93%9c/",
      "date": "2026-07-15"
    },
    {
      "name": "侯锐的思考与分享",
      "year": "15",
      "title": "大数据技术的演进：从 Hive、GFS 到 Raft",
      "url": "https://www.nosuchfield.com/2026/07/15/The-Evolution-of-Big-Data-From-Hive-GFS-to-Raft/",
      "date": "2026-07-15"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "YouTube 无限重定向报错，谷歌账号身份验证无限失败，罪魁祸首居然是“已分区 cookie”？！",
      "url": "https://www.tjsky.net/tutorial/1708",
      "date": "2026-07-15"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "重构输入流",
      "url": "https://shitao5.org/posts/ai-powered-input-flow/",
      "date": "2026-07-15"
    },
    {
      "name": "凌飞",
      "year": "19",
      "title": "升学焦虑，是一剂慢性毒药",
      "url": "https://www.llingfei.com/705.html",
      "date": "2026-07-15"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "别把前途押在别人身上",
      "url": "https://blog.solazy.me/20260715/",
      "date": "2026-07-15"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "【不凡摄影作品 | 2026.7.15】",
      "url": "https://www.bufanz.com/20260715744.html",
      "date": "2026-07-15"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-15",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-15",
      "date": "2026-07-15"
    },
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "嘿嘿，分享一下好吃的",
      "url": "https://www.mmbkz.cn/5bd06cb7.html",
      "date": "2026-07-15"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "关于博客组织友链迁移的公告",
      "url": "https://xingwangzhe.fun/posts/blogroll-migration-notice/",
      "date": "2026-07-15"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "「你很厉害」",
      "url": "https://www.immarcus.com/blog/you-are-awesome",
      "date": "2026-07-15"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "上海 2026CBME 观展日记｜带女儿同行，满心期待却略感失望",
      "url": "https://zhouayuan.com/post/57.html",
      "date": "2026-07-15"
    },
    {
      "name": "一个博客",
      "year": "26",
      "title": "求助｜慢性咽炎久治不愈，输液吃药不停复发怎么办",
      "url": "https://yigeboke.com/article.php?id=47",
      "date": "2026-07-15"
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
