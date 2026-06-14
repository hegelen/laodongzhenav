// ==================== latest-articles.js ====================
// 抓取日期: 6/14/2026, 8:26:38 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The nature of launch day",
      "url": "https://seths.blog/2026/06/the-nature-of-launch-day/",
      "date": "2026-06-14"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "又到高考",
      "url": "http://www.xlanda.net/posts/22260",
      "date": "2026-06-14"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "别再省 Token 了！硅谷新共识：浪费算力才是唯一捷径",
      "url": "https://tonybai.com/2026/06/14/stop-saving-tokens-silicon-valley-consensus-waste-compute-shortcut/",
      "date": "2026-06-14"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "x86-64 轉 aarch64 的靜態翻譯",
      "url": "https://blog.gslin.org/archives/2026/06/14/13073/x86-64-%e8%bd%89-aarch64-%e7%9a%84%e9%9d%9c%e6%85%8b%e7%bf%bb%e8%ad%af/",
      "date": "2026-06-14"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "桑葚",
      "url": "https://acevs.com/5037/",
      "date": "2026-06-14"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "从零重建 macOS 开发机：可复现的环境初始化流程",
      "url": "https://soulteary.com/2026/06/14/rebuild-macos-dev-machine-from-scratch-reproducible-environment-setup.html",
      "date": "2026-06-14"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "我的混账人生（七）：最初的光",
      "url": "https://bwskyer.com/my-messed-up-life-7.html",
      "date": "2026-06-14"
    }
  ],
  "2013": [
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "Nginx 又双叒给我挖坑了：HSTS 撞车 + 宝塔偷偷锁 Frame",
      "url": "https://wuqishi.com/archives/nginx-hsts-csp-pitfall-bt-panel",
      "date": "2026-06-14"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我给“林羽凡笔记”增加了语音输入笔记功能",
      "url": "https://www.linyufan.com/post/5852",
      "date": "2026-06-14"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "《GPT 图解》笔记：微调与RLHF、总结",
      "url": "https://izualzhy.cn/llm-diagrammatize-ft-rlhf-summary",
      "date": "2026-06-14"
    }
  ],
  "2016": [
    {
      "name": "Keyle",
      "year": "16",
      "title": "听闻的一些故事",
      "url": "https://vrast.cn/posts/50713/",
      "date": "2026-06-14"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "驾驭工程后，AI 圈又一个新概念  Loop 工程（循环工程）",
      "url": "https://www.ccgxk.com/codeother/778.html",
      "date": "2026-06-14"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "我的美食雷达",
      "url": "https://blog.solazy.me/20260614/",
      "date": "2026-06-14"
    }
  ],
  "2022": [
    {
      "name": "VeryJack",
      "year": "22",
      "title": "从学校到公司，从上海到成都",
      "url": "https://veryjack.com/life/university_to_company/",
      "date": "2026-06-14"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "有没有大型仙剑/修仙类游戏",
      "url": "https://ygz.ink/archives/5242.html",
      "date": "2026-06-14"
    }
  ],
  "2024": [
    {
      "name": "倾城于你",
      "year": "24",
      "title": "哪吒面板数据库瘦身-从1.2G到6M",
      "url": "https://qninq.cn/archives/vacuumnezhadb.html",
      "date": "2026-06-14"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.06.14 博客阅读周记",
      "url": "https://www.immarcus.com/blog/weekly-20260614",
      "date": "2026-06-14"
    }
  ],
  "2026": [
    {
      "name": "安迪",
      "year": "26",
      "title": "世界杯有感",
      "url": "https://i55.top/archives/538/",
      "date": "2026-06-13"
    },
    {
      "name": "周阿源",
      "year": "26",
      "title": "周末涂涂画画｜给生活添一抹彩色",
      "url": "https://zhouayuan.com/post/54.html",
      "date": "2026-06-14"
    },
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "Tangpa.com",
      "url": "https://mzdsx.com/2026/06/14/tangpa-com/",
      "date": "2026-06-14"
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
