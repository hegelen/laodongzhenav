// ==================== latest-articles.js ====================
// 抓取日期: 7/8/2026, 8:30:20 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "敲敲打卡都这么好看了，你还没用过吗？",
      "url": "https://wlj.me/notes/sp-note-20260708-140809/",
      "date": "2026-07-08"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Goal clarity and the Hawking index",
      "url": "https://seths.blog/2026/07/goal-clarity-and-the-hawking-index/",
      "date": "2026-07-08"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "无所不能的神人",
      "url": "http://www.xlanda.net/posts/22316",
      "date": "2026-07-08"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "从手动 govanityurls + Nginx 迁移到 gvu：一次真实迁移记录",
      "url": "https://tonybai.com/2026/07/08/migrate-from-govanityurls-to-gvu/",
      "date": "2026-07-07"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "https利弊(1)：https性能测试(可下载精确测试工具)",
      "url": "http://www.auiou.com/relevant/00002167.jsp",
      "date": "2026-07-08"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Grok (X 的 AI 單位) 發表 Grok 4.5，號稱可以跟 Opus 4.8 有來回？",
      "url": "https://blog.gslin.org/archives/2026/07/09/13098/grok-x-%e7%9a%84-ai-%e5%96%ae%e4%bd%8d-%e7%99%bc%e8%a1%a8-grok-4-5%ef%bc%8c%e8%99%9f%e7%a8%b1%e5%8f%af%e4%bb%a5%e8%b7%9f-opus-4-8-%e6%9c%89%e4%be%86%e5%9b%9e%ef%bc%9f/",
      "date": "2026-07-08"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "俺是如何选择鼠标的",
      "url": "https://acevs.com/5089/",
      "date": "2026-07-08"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "苹果的电源",
      "url": "https://lenciel.com/2026/07/the-power-supply-apple-did-not-invent/",
      "date": "2026-07-08"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "我不为丰巢买单",
      "url": "https://dujun.io/fuck-hive-box.html",
      "date": "2026-07-08"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我是没搞懂到底是天气太热了还是我的手腕太厉害了",
      "url": "https://www.linyufan.com/post/5888",
      "date": "2026-07-08"
    }
  ],
  "2016": [
    {
      "name": "ximi",
      "year": "16",
      "title": "开源 一个基于p2p的文件传输小程序[AeroDrop]",
      "url": "https://www.ximi.me/post-6045.html",
      "date": "2026-07-08"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "我观看哥飞年终会议复盘的 Web 出海笔记（下）",
      "url": "https://www.ccgxk.com/codeother/802.html",
      "date": "2026-07-08"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "早不锯晚不锯，非在最热的时候锯树枝，门店里更热了",
      "url": "https://www.bufanz.com/20260708719.html",
      "date": "2026-07-08"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "国企面试，别太当回事儿",
      "url": "https://usj.cc/20260708110221.html",
      "date": "2026-07-08"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-08",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-08",
      "date": "2026-07-08"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "赛博斗蛐蛐",
      "url": "https://blog.verynb.net/posts/22404.html",
      "date": "2026-07-08"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "AI 语义空间探索（二）：从一个词到一篇文章——语义向量是如何生成的",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14554/",
      "date": "2026-07-08"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "摄影练习·平凡众生相",
      "url": "https://ygz.ink/archives/5475.html",
      "date": "2026-07-08"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "未来10年内互联网大方向",
      "url": "https://www.renhuali.cn/journal/cmrbwri7z022kchyjzcns49ey",
      "date": "2026-07-08"
    },
    {
      "name": "妄司逸",
      "year": "26",
      "title": "inBox笔记：你的灵感捕捉与知识管理利器",
      "url": "https://blog.flechazo.icu/2026/07/08/inbox-%E5%8D%A1%E7%89%87%E5%BC%8F%E7%AC%94%E8%AE%B0%E8%BD%AF%E4%BB%B6/",
      "date": "2026-07-08"
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
