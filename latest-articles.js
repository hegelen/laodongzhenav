// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-10 02:03:41
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "产品精神铸就AI精品",
      "url": "https://wlj.me/notes/sp-note-20261109-181408/",
      "date": "2026-11-09"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Restrictive design",
      "url": "https://seths.blog/2026/11/restrictive-design/",
      "date": "2026-11-09"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "从老黄出轨说起",
      "url": "https://ezo.biz/Net/1809.html",
      "date": "2026-11-09"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go cgo 去 C 工具链提案最新进展：Cherry Mui 给出更具体的落地方案",
      "url": "https://tonybai.com/2026/11/10/go-cgo-without-c-toolchain-proposal-update/",
      "date": "2026-11-09"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "作弊条：生成SSHFP和TLSA记录",
      "url": "https://blog.delphij.net/posts/2026/11/tlsa-sshfp/",
      "date": "2026-11-09"
    }
  ],
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "复活 ABC 输入法",
      "url": "https://blog.codingnow.com/2026/11/abc_mod.html",
      "date": "2026-11-09"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "板簧到fr4",
      "url": "https://acevs.com/5353/",
      "date": "2026-11-09"
    }
  ],
  "2008": [
    {
      "name": "四火的唠叨",
      "year": "08",
      "title": "开了一个聊投资的音频播客",
      "url": "https://www.raychase.net/8369",
      "date": "2026-11-09"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "复盘 || 2024年一注大设计真题【社区综合服务中心】",
      "url": "https://www.yishu.pro/370.html",
      "date": "2026-11-09"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "我本没有意义",
      "url": "https://www.leitao.cn/11570.html",
      "date": "2026-11-09"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "在你的故事里，我是谁",
      "url": "https://d-d.design/single/20629",
      "date": "2026-11-09"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "ChatGPT로 작성한 글을 자연스럽게 수정하는 7가지 방법",
      "url": "https://www.thewordcracker.com/blog/make-chatgpt-writing-sound-natural/",
      "date": "2026-11-09"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "让炼丹更科学一些（十一）：无调度学习率新思路",
      "url": "https://kexue.fm/archives/12003",
      "date": "2026-11-09"
    }
  ],
  "2019": [
    {
      "name": "LJF.COM",
      "year": "19",
      "title": "《企业迷思》---北大管理公开课",
      "url": "https://ljf.com/2026/11/09/1564/",
      "date": "2026-11-09"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "目前华 阿 腾 啥的大厂有较便宜的国内机吗",
      "url": "https://www.dalao.net/thread-65912.htm",
      "date": "2026-11-09"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-09：AXL、Sage2 by Levanto Labs、Inkling 2 Small",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-09",
      "date": "2026-11-09"
    }
  ],
  "2022": [
    {
      "name": "皓月星际",
      "year": "22",
      "title": "写博客的意义是什么？当下，我们还有必要坚持写博客吗？",
      "url": "https://www.shimail.cn/archives/11/",
      "date": "2026-11-09"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "和校园网斗智斗勇的日子（第11辑）",
      "url": "https://blog.mfwt.top/index.php/archives/1717/",
      "date": "2026-11-09"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO作弊常用手段之内容作弊",
      "url": "https://www.bailuze.com/24571.html",
      "date": "2026-11-10"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "给博客评论区增加了自动审核动画",
      "url": "https://sheep5.net/archives/670.html",
      "date": "2026-11-10"
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
