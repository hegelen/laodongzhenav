// ==================== latest-articles.js ====================
// 抓取日期: 7/13/2026, 8:25:43 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "夹缝小产品适合普通人做",
      "url": "https://wlj.me/notes/sp-note-20260713-220706/",
      "date": "2026-07-13"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：疗愈领域问题很多，中医心理学需求巨大",
      "url": "https://www.ufoer.com/post/13979.html",
      "date": "2026-07-13"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "别再往 Go 里塞 Java 了：拆解 spf13 的 Idiomatic Go 信仰",
      "url": "https://tonybai.com/2026/07/13/spf13-idiomatic-go/",
      "date": "2026-07-12"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "第一卷 02",
      "url": "https://kaix.in/2026/0712/333a/",
      "date": "2026-07-13"
    },
    {
      "name": "iTimothy",
      "year": "04",
      "title": "那些让人笑出声的Meme排序算法",
      "url": "https://xiaozhou.net/meme-sorting-algorithms-2026-07-13.html",
      "date": "2026-07-13"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "燃气公司换表",
      "url": "https://acevs.com/5099/",
      "date": "2026-07-13"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "Nuxt版本的博客终于完成得差不多了",
      "url": "https://www.linyufan.com/post/5898",
      "date": "2026-07-13"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "目前来看，连廊设计是百害无一利",
      "url": "https://zhoutian.com/386.html",
      "date": "2026-07-13"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "LogSumExp和Softmax的泰勒展开",
      "url": "https://kexue.fm/archives/11814",
      "date": "2026-07-13"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "渣男理论 II",
      "url": "https://blog.solazy.me/20260713/",
      "date": "2026-07-13"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "孤独行者的孤独记",
      "url": "https://liuqingwushui.top/archives/172/",
      "date": "2026-07-13"
    },
    {
      "name": "安静角落",
      "year": "19",
      "title": "星辰研究所",
      "url": "https://wuziya.com/316.html",
      "date": "2026-07-13"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "逛闲鱼看到小法庭，试着申请评审员，现已是初级评审员",
      "url": "https://www.bufanz.com/20260713739.html",
      "date": "2026-07-13"
    },
    {
      "name": "老卢",
      "year": "20",
      "title": "说说：#2026-07-13 20:24",
      "url": "https://blog.el9.cn/memos/6a54d8f886c72.html",
      "date": "2026-07-13"
    }
  ],
  "2021": [
    {
      "name": "ovo",
      "year": "21",
      "title": "儿子竟然是C罗球迷",
      "url": "https://ovo.cc/archives/1438/",
      "date": "2026-07-13"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-13",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-13",
      "date": "2026-07-13"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "内容重复如何在网店中检测并删除？",
      "url": "https://www.bailuze.com/24236.html",
      "date": "2026-07-13"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "今日摄影练习",
      "url": "https://ygz.ink/archives/5518.html",
      "date": "2026-07-13"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "B4 LLM决策模块：验收讲解 —— 从基础到进阶的五维实践",
      "url": "https://xingwangzhe.fun/posts/ai-training-b4-week2-review/",
      "date": "2026-07-13"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "井底之蛙",
      "url": "https://www.immarcus.com/blog/a-frog-in-a-well",
      "date": "2026-07-13"
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
