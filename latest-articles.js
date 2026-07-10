// ==================== latest-articles.js ====================
// 抓取日期: 7/10/2026, 8:32:53 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 403 期）：为什么 Dropbox 不成功",
      "url": "http://www.ruanyifeng.com/blog/2026/07/weekly-issue-403.html",
      "date": "2026-07-10"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Bun 重写为 Rust 后，Zig 之父罕见开炮：“我们早就等着看你重写”",
      "url": "https://tonybai.com/2026/07/10/zig-founder-andrew-kelley-thoughts-bun-rust-rewrite/",
      "date": "2026-07-10"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "梭哈的智慧",
      "url": "https://synyan.cn/t/63129",
      "date": "2026-07-10"
    }
  ],
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "高尿酸血症确诊",
      "url": "https://blog.codingnow.com/2026/07/hyperuricemia.html",
      "date": "2026-07-10"
    }
  ],
  "2007": [
    {
      "name": "无标题文档",
      "year": "07",
      "title": "解决 macOS 下 Samba 拷贝大文件断流报错的问题",
      "url": "https://www.gracecode.com/posts/3208.html",
      "date": "2026-07-10"
    }
  ],
  "2009": [
    {
      "name": "孙琪峥",
      "year": "09",
      "title": "Microsoft Office 2016 Internet Archive Minimal Setup KMS Activation Code",
      "url": "https://www.sunqizheng.com/blog/2686.html",
      "date": "2026-07-10"
    },
    {
      "name": "谁见到过风？",
      "year": "09",
      "title": "2026年7月10日 《毛泽东传》 二、师范生（中）",
      "url": "https://www.seenthewind.com/blog/2026/07/10/2026%e5%b9%b47%e6%9c%8810%e6%97%a5-%e3%80%8a%e6%af%9b%e6%b3%bd%e4%b8%9c%e4%bc%a0%e3%80%8b-%e4%ba%8c%e3%80%81%e5%b8%88%e8%8c%83%e7%94%9f%ef%bc%88%e4%b8%ad%ef%bc%89/",
      "date": "2026-07-10"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "On Children",
      "url": "https://www.kawabangga.com/posts/7328",
      "date": "2026-07-10"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "全球多币种账户 + 海外实体借记卡，Starryblu开户教程与注意事项",
      "url": "https://blog.xiaoz.org/archives/23207",
      "date": "2026-07-10"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "重写了“林羽凡笔记”鸿蒙App中笔记目录的展现形式",
      "url": "https://www.linyufan.com/post/5894",
      "date": "2026-07-10"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "央地博弈",
      "url": "https://wangyurui.com/posts/yang-di-bo-yi-07e25c1f",
      "date": "2026-07-10"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "阅读源代码前要运行的 5 条 Git 命令",
      "url": "https://www.ccgxk.com/emlog_dev/804.html",
      "date": "2026-07-10"
    }
  ],
  "2019": [
    {
      "name": "jdeal",
      "year": "19",
      "title": "嗯，我的专属工位红绿灯",
      "url": "https://www.jdeal.cn/561.html",
      "date": "2026-07-10"
    },
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "做网站选 Next.js 还是 WordPress？2026 年中小企业与个人站长的理性选择指南",
      "url": "https://blog.naibabiji.com/tutorial/next-js-vs-wordpress.html",
      "date": "2026-07-10"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "虎皮鹦鹉吃桃子",
      "url": "https://www.bufanz.com/20260710728.html",
      "date": "2026-07-10"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "外婆的近况",
      "url": "https://www.imcry.vip/post/2026-7-10-1859/",
      "date": "2026-07-10"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-10",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-10",
      "date": "2026-07-10"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "放假了",
      "url": "https://ygz.ink/archives/5481.html",
      "date": "2026-07-10"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "cloudflare-light-blog – 基于 Cloudflare Workers + D1 + R2 构建的轻量级博客系统",
      "url": "https://www.bailuze.com/25510.html",
      "date": "2026-07-10"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "万米危机",
      "url": "https://jefftay.com/movies/wings-of-dread",
      "date": "2026-07-10"
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
