// ==================== latest-articles.js ====================
// 抓取日期: 7/16/2026, 8:12:47 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "上半年已逝时光飞速",
      "url": "https://wlj.me/notes/sp-note-20260716-104658/",
      "date": "2026-07-16"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 1.28 路线图首度曝光：Cgo 告别C工具链？泛型容器将入标准库？",
      "url": "https://tonybai.com/2026/07/16/go-1-28-roadmap-compiler-and-runtime-features-preview/",
      "date": "2026-07-15"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "数码评测(71)：超低价享受i7-7700的体验/10%、30%的差距有多大？",
      "url": "http://www.auiou.com/relevant/00002169.jsp",
      "date": "2026-07-16"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "有消息說 Stripe 與 Advent 要買 PayPal",
      "url": "https://blog.gslin.org/archives/2026/07/16/13114/%e6%9c%89%e6%b6%88%e6%81%af%e8%aa%aa-stripe-%e8%88%87-advent-%e8%a6%81%e8%b2%b7-paypal/",
      "date": "2026-07-16"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "杂记2026年7月16日",
      "url": "https://acevs.com/5106/",
      "date": "2026-07-16"
    }
  ],
  "2006": [
    {
      "name": "土木坛子",
      "year": "06",
      "title": "VCard疑似跑路",
      "url": "https://tumutanzi.com/archives/17617",
      "date": "2026-07-16"
    },
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "达成一个小目标：10000ml",
      "url": "https://www.munue.com/807.html",
      "date": "2026-07-16"
    }
  ],
  "2009": [
    {
      "name": "三斗室",
      "year": "09",
      "title": "实验 autoresearch 优化论文摘要 SKILL 的效果",
      "url": "http://chenlinux.com/2026/07/16/autoresearch-for-paper-reader-skill/",
      "date": "2026-07-16"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "老宅即将完工",
      "url": "https://zhou.ge/2026-07-16.html",
      "date": "2026-07-16"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "招商银行万事达借记卡申请与消费实测",
      "url": "https://blog.xiaoz.org/archives/23241",
      "date": "2026-07-16"
    }
  ],
  "2014": [
    {
      "name": "xulihang",
      "year": "14",
      "title": "代码缩进",
      "url": {
        "$": {
          "href": "https://blog.xulihang.me/indentation-in-coding/"
        }
      },
      "date": "2026-07-16"
    }
  ],
  "2015": [
    {
      "name": "胡东东",
      "year": "15",
      "title": "耐心等待，静待花开",
      "url": "https://blog.hudd.cn/1435.html",
      "date": "2026-07-16"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海必备的外链列表",
      "url": "https://www.ccgxk.com/codeother/810.html",
      "date": "2026-07-16"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "more命令&less命令",
      "url": "https://qiukui-note.happy365.day/20260716/more-and-less-command/",
      "date": "2026-07-16"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "低质量协作的本质是逃避思考",
      "url": "https://blog.solazy.me/20260716/",
      "date": "2026-07-16"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "头盔检查和释放消费",
      "url": "https://www.wsh233.cn/post/头盔检查和释放消费",
      "date": "2026-07-16"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "摄影练习",
      "url": "https://ygz.ink/archives/5546.html",
      "date": "2026-07-16"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "为什么选择网页设计公司时，SEO友好的设计很重要？",
      "url": "https://www.bailuze.com/24246.html",
      "date": "2026-07-16"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "鋼琴連載3，",
      "url": "https://jefftay.com/blog-posts/piano-3",
      "date": "2026-08-01"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "区块链里的 PoW vs PoS",
      "url": "https://www.immarcus.com/blog/blockchain-pow-vs-pos",
      "date": "2026-07-16"
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
