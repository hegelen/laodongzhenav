// ==================== latest-articles.js ====================
// 抓取日期: 8/23/2026, 7:30:48 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "痛风",
      "url": "https://ezo.biz/Diary/1606.html",
      "date": "2026-08-23"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "ACM专访Russ Cox：管理者若不谨慎，AI agent会变成“终极战术龙卷风”",
      "url": "https://tonybai.com/2026/08/23/russ-cox-acm-interview-tactical-tornado-ai-agent-warning/",
      "date": "2026-08-22"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "两条胜创内存合体",
      "url": "http://www.xlanda.net/posts/22417",
      "date": "2026-08-23"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "https利弊(3)：https延迟和生态",
      "url": "http://www.auiou.com/relevant/00002184.jsp",
      "date": "2026-08-23"
    }
  ],
  "2007": [
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "智商有上限吗？",
      "url": "https://yanlinlin.cn/2026/08/23/iq-ceiling-and-normal-distribution/",
      "date": "2026-08-23"
    }
  ],
  "2012": [
    {
      "name": "Tokin",
      "year": "12",
      "title": "10ms 魔咒 —— PBKDF2 降档与 HMAC Pepper 安全加固",
      "url": "https://biji.io/2026/5664.html",
      "date": "2026-08-23"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.8.23",
      "url": "https://www.linyufan.com/post/5968",
      "date": "2026-08-23"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 7.1 탭(Tabs) 블록 사용법",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-7-1-%ed%83%adtabs-%eb%b8%94%eb%a1%9d-%ec%82%ac%ec%9a%a9%eb%b2%95/",
      "date": "2026-08-23"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "马克思的镜子",
      "url": "https://wangyurui.com/posts/ma-ke-si-de-jing-zi-fa8ff36d",
      "date": "2026-08-23"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "盘点下常用的几个 AI 本地部署工具",
      "url": "https://www.ccgxk.com/emlog_dev/856.html",
      "date": "2026-08-23"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "骨科病房『趣事』",
      "url": "https://www.suiyan.cc/blog/20260823081327",
      "date": "2026-08-23"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "万物皆计算",
      "url": "https://shitao5.org/excerpt/wwjjs/",
      "date": "2026-08-23"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "原商铺空置超过三年没租出去，房东太轴了，附近商铺都降了他还不降",
      "url": "https://www.bufanz.com/20260823837.html",
      "date": "2026-08-23"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "与 DeepSeek 玩修仙游戏",
      "url": "https://www.dalao.net/thread-62908.htm",
      "date": "2026-08-23"
    }
  ],
  "2021": [
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "说说：#2026-08-23 18:41",
      "url": "https://www.mmbkz.cn/8925d44.html",
      "date": "2026-08-23"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "nProtect BlackCipher 反作弊分析",
      "url": "https://lb5.net/268.html",
      "date": "2026-08-23"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "从 WordPress 到 Quartz",
      "url": "https://jefftay.com/blog-posts/from-wordpress-to-quartz",
      "date": "2026-08-24"
    },
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "业余频段的对讲机，不能再商业应用了",
      "url": "https://blog.mfwt.top/index.php/archives/1550/",
      "date": "2026-08-23"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "台风到底往哪走？我做了一个能“看懂”的台风追踪网站",
      "url": "https://www.sanshu.cn/arc/280.html",
      "date": "2026-08-23"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.08.23 博客阅读周记",
      "url": "https://www.immarcus.com/blog/weekly-20260823",
      "date": "2026-08-23"
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
