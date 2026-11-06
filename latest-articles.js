// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-06 00:04:15
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "飞机读书难共鸣",
      "url": "https://wlj.me/notes/sp-note-20261105-230112/",
      "date": "2026-11-05"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Inconvenient brands",
      "url": "https://seths.blog/2026/11/inconvenient-brands/",
      "date": "2026-11-05"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：成交的5个境界，你达到了哪一层？",
      "url": "https://www.ufoer.com/post/14733.html",
      "date": "2026-11-05"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "听到别人的声音",
      "url": "https://kaix.in/2026/1105/",
      "date": "2026-11-05"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "组装引体向上架",
      "url": "https://www.xlanda.net/posts/22596",
      "date": "2026-11-05"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "清水洗头",
      "url": "https://ezo.biz/Cracker/1797.html",
      "date": "2026-11-05"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "铝坨坨键盘放弃",
      "url": "https://acevs.com/5345/",
      "date": "2026-11-05"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "更新提示：《https利弊(7)：建站税》新增2",
      "url": "http://www.auiou.com/relevant/00010026.jsp",
      "date": "2026-11-05"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "sshhole (musl 環境)",
      "url": "https://blog.gslin.org/archives/2026/11/05/13329/sshhole-musl-%e7%92%b0%e5%a2%83/",
      "date": "2026-11-05"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "Gate U卡与美元银行账户申请教程：支持 OpenAI/ChatGPT 充值",
      "url": "https://blog.xiaoz.org/archives/23698",
      "date": "2026-11-05"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "鸿蒙应用“竹子记账”增加积分不足提醒",
      "url": "https://www.linyufan.com/post/6130",
      "date": "2026-11-05"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "\"그 사이트 이름이 뭐였더라?\" 주소픽으로 필요한 사이트 찾아보기",
      "url": "https://www.thewordcracker.com/blog/find-websites/",
      "date": "2026-11-05"
    }
  ],
  "2017": [
    {
      "name": "arun",
      "year": "17",
      "title": "Osaka II ∙ cultural institutions",
      "url": "https://arun.is/blog/osaka-2/",
      "date": "2026-11-05"
    }
  ],
  "2019": [
    {
      "name": "紫塞",
      "year": "19",
      "title": "重新走进技术新世界",
      "url": "https://zisai.com/posts/rediscovering-the-joy-of-technology/",
      "date": "2026-11-05"
    }
  ],
  "2020": [
    {
      "name": "yihong0618",
      "year": "20",
      "title": "可怜",
      "url": "https://blog.yihong0618.me/posts/issue-350/",
      "date": "2026-11-05"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-05：Wanaka Studio、Floot Payments、Prelulu",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-05",
      "date": "2026-11-05"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "做外链的6个基础要点",
      "url": "https://www.bailuze.com/24563.html",
      "date": "2026-11-05"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "痔疮犯了，烦死了！",
      "url": "https://ygz.ink/archives/5920.html",
      "date": "2026-11-05"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "一封退货邮件的陷阱：“开箱视频”背后的 WPS、隐藏 DLL 与恶意加载链",
      "url": "https://xingwangzhe.fun/posts/outlook-return-malware/",
      "date": "2026-11-05"
    },
    {
      "name": "三叔",
      "year": "24",
      "title": "一枚代理证，两种日常：死神 · 双生之门 DSH 主题",
      "url": "https://www.sanshu.cn/atc/107.html",
      "date": "2026-11-05"
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
