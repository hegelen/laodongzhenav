// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-20 01:12:51
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "2009，九宫格里的宝箱",
      "url": "https://www.tortorse.com/archives/treasure-chest-in-the-nine-square-grid-2009/",
      "date": "2026-11-19"
    },
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 420 期）：最分心的一年",
      "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-420.html",
      "date": "2026-11-20"
    }
  ],
  "2004": [
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "透明与扁平",
      "url": "https://doyj.com/2026/11/19/%e9%80%8f%e6%98%8e%e4%b8%8e%e6%89%81%e5%b9%b3/",
      "date": "2026-11-19"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "重读 How Complex Systems Fail 后，我发现：AI 正在制造我们无法驾驭的复杂系统",
      "url": "https://tonybai.com/2026/11/20/ai-is-creating-complex-systems-we-cannot-control/",
      "date": "2026-11-19"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "这次评论bug的原因",
      "url": "https://www.auiou.com/pub/2244",
      "date": "2026-11-20"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "大宝视力下降咋办",
      "url": "https://acevs.com/5375/",
      "date": "2026-11-19"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "感冒了啊",
      "url": "https://www.seis-jun.xyz/blog/2026-11-19-got-cold.html",
      "date": "2026-11-19"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "Price Action 进阶：如何用 H1/H2 与 L1/L2 的「失败」，提前看穿趋势与震荡切换",
      "url": "https://blog.forecho.com/price-action-h1-h2-l1-l2-failure.html",
      "date": "2026-11-19"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "我正沉迷于AI",
      "url": "https://www.leitao.cn/11617.html",
      "date": "2026-11-19"
    }
  ],
  "2013": [
    {
      "name": "Jonty",
      "year": "13",
      "title": "服务器被植入流量劫持后门(跳转世界杯赌球网站)的排查与解决方案",
      "url": "https://nobb.cc/archives/3786.html",
      "date": "2026-11-19"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "人的这一生，有多少东西是值得留下来的",
      "url": "https://www.linyufan.com/post/6148",
      "date": "2026-11-19"
    }
  ],
  "2015": [
    {
      "name": "elmagnifico",
      "year": "15",
      "title": "Hack AC以后，AI终于跑赢了真人记录",
      "url": "https://elmagnifico.tech/2026/11/20/AC-AI-Drive-Hack/",
      "date": "2026-11-19"
    }
  ],
  "2020": [
    {
      "name": "Battle Le",
      "year": "20",
      "title": "2026 HK 说走就走下篇",
      "url": "https://battlele.com/2026-hongkong-tour-2/",
      "date": "2026-11-19"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-19：S.Space、Bluedot Phone Calls、Toone",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-19",
      "date": "2026-11-19"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "把电视桌面换成开源的 Aerial，开机就清净了",
      "url": "https://9sb.net/archives/replace-the-tv-desktop-with-opensource-aerial-and-it-will-be-clean-when-turned-on.html",
      "date": "2026-11-19"
    }
  ],
  "2022": [
    {
      "name": "VeryJack",
      "year": "22",
      "title": "Hi，咪咪，三年了",
      "url": "https://veryjack.com/life/mimi-three-years/",
      "date": "2026-11-19"
    }
  ],
  "2023": [
    {
      "name": "兔哥",
      "year": "23",
      "title": "Muse AI 再曝隐私泄露：Signal 加密消息被读，还发来别人的银行余额",
      "url": "https://uuzi.net/muse-ai-privacy-breach-signal-bank-balance/",
      "date": "2026-11-19"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "最新发布如何做SEO：企业主的通俗指南",
      "url": "https://www.bailuze.com/24619.html",
      "date": "2026-11-20"
    },
    {
      "name": "湘铭",
      "year": "23",
      "title": "秋假挣银票！",
      "url": "https://xiangming.site/1193.html",
      "date": "2026-11-19"
    }
  ],
  "2025": [
    {
      "name": "心记",
      "year": "25",
      "title": "新主题已达成",
      "url": "https://blog.moodlog.cn/archives/19/",
      "date": "2026-11-19"
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
