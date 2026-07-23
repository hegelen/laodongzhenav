// ==================== latest-articles.js ====================
// 抓取日期: 7/23/2026, 8:22:24 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "多年前我也算是在信息安全行业工作过，当时",
      "url": "https://wlj.me/notes/sp-note-20260723-214935/",
      "date": "2026-07-23"
    }
  ],
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "chatgpt太夯了！终于手搓出属于自己的博客主题",
      "url": "https://dongjunke.cn/posts/2026/07/23/14600.html",
      "date": "2026-07-23"
    }
  ],
  "2002": [
    {
      "name": "不吐不快",
      "year": "02",
      "title": "部署 Songloft 本地音乐服务器,让小爱音箱播放本地音乐",
      "url": "https://mianao.info/deploy-songloft-local-music-server-for-xiaomi-ai-speaker/",
      "date": "2026-07-23"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "blog重新上线",
      "url": "http://www.xlanda.net/posts/22350",
      "date": "2026-07-23"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年7月23日",
      "url": "https://acevs.com/5121/",
      "date": "2026-07-23"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "是谁在傍晚二次渡劫",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1265",
      "date": "2026-07-23"
    },
    {
      "name": "树下语",
      "year": "07",
      "title": "小西天的美景",
      "url": "https://yishu-life.com/index.php/archives/514.html",
      "date": "2026-07-23"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "近日杂记之20260723",
      "url": "https://www.leitao.cn/10428.html",
      "date": "2026-07-23"
    }
  ],
  "2014": [
    {
      "name": "卡片创作实验室",
      "year": "14",
      "title": "无标题",
      "url": "https://cnfeat.com/posts/2026/07/23/2026-07-10-%E5%A6%82%E4%BD%95%E4%BB%8E%E8%87%AA%E5%B7%B1%E5%8F%98%E5%BC%BA%E5%88%87%E6%8D%A2%E5%88%B0%E8%AE%A9%E5%88%AB%E4%BA%BA%E5%8F%98%E5%BC%BA/",
      "date": "2026-07-23"
    }
  ],
  "2016": [
    {
      "name": "ximi",
      "year": "16",
      "title": "腾讯云,牛逼,爬虫数据采集合法合规!",
      "url": "https://www.ximi.me/post-6047.html",
      "date": "2026-07-23"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "5个 link 标签，突破前端性能瓶颈！",
      "url": "https://www.ccgxk.com/front-end/817.html",
      "date": "2026-07-23"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "静态博客隐藏着一个容易被人忽略的隐私问题",
      "url": "https://www.suiyan.cc/blog/20260723143703",
      "date": "2026-07-23"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "VMISS US.LA.TRI.Basic Review – New 207.x IP Range for CA$4.5/Month",
      "url": "https://heming.org/2725.html",
      "date": "2026-07-23"
    },
    {
      "name": "yihong0618",
      "year": "20",
      "title": "八次离职",
      "url": "https://blog.yihong0618.me/issue-345/",
      "date": "2026-07-23"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-23",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-23",
      "date": "2026-07-23"
    }
  ],
  "2022": [
    {
      "name": "zhecydn",
      "year": "22",
      "title": "edgeone配置加速s3 cloudflare r2对象存储（水）",
      "url": "https://blog.zhecydn.asia/archives/2402",
      "date": "2026-07-23"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "机动杀人",
      "url": "https://jefftay.com/movies/taking-lives",
      "date": "2026-07-24"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "2026年初创企业的SEO策略：5个行之有效的增长策略",
      "url": "https://www.bailuze.com/24263.html",
      "date": "2026-07-23"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "给 Linux 上的 Chrome 打一针肾上腺素——我的 GPU 加速调优方案",
      "url": "https://xingwangzhe.fun/posts/chrome-linux-gpu-tuning/",
      "date": "2026-07-23"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "疯狂的美国体育文化",
      "url": "https://www.immarcus.com/blog/crazy-sports-culture-in-usa",
      "date": "2026-07-23"
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
