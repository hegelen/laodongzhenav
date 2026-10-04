// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-04 22:26:12
// 只抓取最近14天内的文章，共 16 篇
// 目标 20 篇，实际 16 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Getting critical",
      "url": "https://seths.blog/2026/10/getting-critical/",
      "date": "2026-10-04"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Rust 引用的 4 种可变性组合：let mut 与 &mut，到底谁管谁？",
      "url": "https://tonybai.com/2026/10/04/rust-reference-four-mutability-combinations/",
      "date": "2026-10-03"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "丢失快递",
      "url": "https://ezo.biz/Diary/1722.html",
      "date": "2026-10-04"
    },
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "当我们失去了乡土与大院，该把自己交付给谁？",
      "url": "https://doyj.com/2026/10/04/%e5%bd%93%e6%88%91%e4%bb%ac%e5%a4%b1%e5%8e%bb%e4%ba%86%e4%b9%a1%e5%9c%9f%e4%b8%8e%e5%a4%a7%e9%99%a2%ef%bc%8c%e8%af%a5%e6%8a%8a%e8%87%aa%e5%b7%b1%e4%ba%a4%e4%bb%98%e7%bb%99%e8%b0%81%ef%bc%9f/",
      "date": "2026-10-04"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "更新提示：《关于作者》页更新内容",
      "url": "http://www.auiou.com/relevant/00010008.jsp",
      "date": "2026-10-04"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "德國的 Kolibri 模型",
      "url": "https://blog.gslin.org/archives/2026/10/04/13244/%e5%be%b7%e5%9c%8b%e7%9a%84-kolibri-%e6%a8%a1%e5%9e%8b/",
      "date": "2026-10-04"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "去打篮球",
      "url": "https://acevs.com/5272/",
      "date": "2026-10-04"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "入蜀记day2 pass out",
      "url": "https://www.seis-jun.xyz/blog/2026-10-04-chengdu-day2-pass-out.html",
      "date": "2026-10-04"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || 国庆一粟",
      "url": "https://www.yishu.pro/247.html",
      "date": "2026-10-04"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.4",
      "url": "https://www.linyufan.com/post/6072",
      "date": "2026-10-04"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "多用AI探索，就好比逛陌生的地方等于前额叶训练",
      "url": "https://www.ccgxk.com/codeother/905.html",
      "date": "2026-10-04"
    }
  ],
  "2018": [
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "慢一点，也没关系",
      "url": "https://yxgoa.cn/index.php/archives/1029/",
      "date": "2026-10-04"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-10-04",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-04",
      "date": "2026-10-04"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "13小时徒步峨眉山，南线挑战登金顶",
      "url": "https://ygz.ink/archives/5871.html",
      "date": "2026-10-04"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "网约车司机",
      "url": "https://www.immarcus.com/blog/uber-driver-russian",
      "date": "2026-10-04"
    },
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "欢迎使用 Typecho",
      "url": "https://liyinwaihe.com/1.html",
      "date": "2026-10-04"
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
