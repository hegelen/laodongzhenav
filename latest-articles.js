// ==================== latest-articles.js ====================
// 抓取日期: 8/28/2026, 2:34:46 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "画画需要动脑思考",
      "url": "https://wlj.me/notes/sp-note-20260827-234938/",
      "date": "2026-08-27"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Fertilizing the weeds",
      "url": "https://seths.blog/2026/08/we-say-we-want-a-revolution-2/",
      "date": "2026-08-27"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "斗气车",
      "url": "https://ezo.biz/Diary/1622.html",
      "date": "2026-08-27"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "四六级往事",
      "url": "http://www.xlanda.net/posts/22428",
      "date": "2026-08-28"
    },
    {
      "name": "Jake",
      "year": "04",
      "title": "Syrovex的这两个月 – OwlVigil上线 & 融资正式启动",
      "url": "https://jaketao.com/syrovex-two-months",
      "date": "2026-08-27"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "YouTube 的 Format ID",
      "url": "https://blog.gslin.org/archives/2026/08/28/13166/youtube-%e7%9a%84-format-id/",
      "date": "2026-08-27"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年8月27日",
      "url": "https://acevs.com/5193/",
      "date": "2026-08-27"
    }
  ],
  "2012": [
    {
      "name": "Tokin",
      "year": "12",
      "title": "从多级缓存到 Workers Caching，资源开销骤降 98.7% 性能优化实践",
      "url": "https://biji.io/2026/6091.html",
      "date": "2026-08-27"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "成都普通家用轿车：车检流程分享",
      "url": "https://blog.xiaoz.org/archives/23464",
      "date": "2026-08-27"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "「秘塔回响」纯粹的 Windows 语音 AI 输入法，仅7M大小",
      "url": "https://www.dujin.org/23830.html",
      "date": "2026-08-27"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之 8 个帮你找到赚钱机会的神器！",
      "url": "https://www.ccgxk.com/codeother/861.html",
      "date": "2026-08-27"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "我差点被留在了那一天",
      "url": "https://www.imcry.vip/post/2026-8-27-2005/",
      "date": "2026-08-27"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "四川近几天再次重现橙色高温，一天比一天热",
      "url": "https://www.bufanz.com/20260827846.html",
      "date": "2026-08-27"
    },
    {
      "name": "yihong0618",
      "year": "20",
      "title": "新生代 VS 老欧洲",
      "url": "https://blog.yihong0618.me/posts/issue-347/",
      "date": "2026-08-27"
    },
    {
      "name": "我不是咕咕鸽",
      "year": "20",
      "title": "【好玩儿的 Docker 项目】10 分钟搭建一个火狐加密文件外链自托管版本——Send，对方打开浏览器就能下，不用装 App",
      "url": "https://blog.laoda.de/archives/docker-compose-install-send",
      "date": "2026-08-27"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "Bandizip 签名程序 RegDll 实现 DLL 白加黑加载",
      "url": "https://lb5.net/271.html",
      "date": "2026-08-27"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "刷新",
      "url": "https://jefftay.com/blog-posts/refresh",
      "date": "2026-08-28"
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "个人知识工程（二）：从认知结构到知识工程——为什么知识需要被结构化？",
      "url": "https://blog.tangwudi.com/technology/homedatacenter14664/",
      "date": "2026-08-28"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "为什么仅靠有帮助的内容已不足以实现SEO成功？",
      "url": "https://www.bailuze.com/24381.html",
      "date": "2026-08-28"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "飞机上当了电灯泡",
      "url": "https://www.immarcus.com/blog/third-wheel-on-the-plane",
      "date": "2026-08-28"
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
