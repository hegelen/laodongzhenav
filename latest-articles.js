// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-26 02:15:45
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "An odd competition",
      "url": "https://seths.blog/2026/11/an-odd-competition/",
      "date": "2026-11-25"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 1.28 新特性抢先体验：gotip 玩转无 C 工具链的 cgo",
      "url": "https://tonybai.com/2026/11/26/go-1-28-gotip-cgo-bindings/",
      "date": "2026-11-25"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "原来是字太小了",
      "url": "https://www.xlanda.net/posts/22646",
      "date": "2026-11-26"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "人生污点",
      "url": "https://ezo.biz/Diary/1856.html",
      "date": "2026-11-25"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "uBlock Origin 上面換掉變數的值，或是內建 function 傳回的值",
      "url": "https://blog.gslin.org/archives/2026/11/25/13392/ublock-origin-%e4%b8%8a%e9%9d%a2%e6%8f%9b%e6%8e%89%e8%ae%8a%e6%95%b8%e7%9a%84%e5%80%bc%ef%bc%8c%e6%88%96%e6%98%af%e5%85%a7%e5%bb%ba-function-%e5%82%b3%e5%9b%9e%e7%9a%84%e5%80%bc/",
      "date": "2026-11-25"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "水浒记录几个人结局",
      "url": "https://acevs.com/5389/",
      "date": "2026-11-25"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "中国第一铁人方力申",
      "url": "https://www.auiou.com/pub/2247",
      "date": "2026-11-25"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "读书很高级吗？",
      "url": "https://www.seis-jun.xyz/blog/2026-11-26-Is-reading-really-that-highbrow.html",
      "date": "2026-11-26"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "本站主题 emlog 复刻版发布",
      "url": "https://dujun.io/dujun-theme-for-emlog.html",
      "date": "2026-11-25"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "为什么钱越来越不值钱？",
      "url": "https://www.biaodianfu.com/money-becoming-less-valuable/",
      "date": "2026-11-25"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "\"林羽凡笔记“系统开发接入”微信小程序Ai”模式",
      "url": "https://www.linyufan.com/post/6155",
      "date": "2026-11-25"
    }
  ],
  "2014": [
    {
      "name": "运营不加班",
      "year": "14",
      "title": "LTX-2.5 硬刚 MiniMax-H3，中英文情话谁更像真电影？",
      "url": "https://nops.icu/archives/283/",
      "date": "2026-11-25"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "碎碎谈 · 11月25日 14:40",
      "url": "https://www.tjsky.net/shuoshuo/dgpbzq4canxte7unmg6nkm",
      "date": "2026-11-25"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "《人类简史》读后有感",
      "url": "https://www.suiyan.cc/blog/20261125162822",
      "date": "2026-11-25"
    }
  ],
  "2019": [
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "2026 黑五 VPS 优惠汇总：年付 VPS 低至 $7",
      "url": "https://blog.naibabiji.com/vps-server/black-friday-vps-deals.html",
      "date": "2026-11-26"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "土地与人口",
      "url": "https://www.wsh233.cn/post/土地与人口",
      "date": "2026-11-25"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-25：distribution.dev、Granular.Build、Clam AI",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-25",
      "date": "2026-11-25"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "如何自己做网站SEO检查？（新手完整指南）",
      "url": "https://www.bailuze.com/24717.html",
      "date": "2026-11-25"
    }
  ],
  "2024": [
    {
      "name": "无名",
      "year": "24",
      "title": "美卡 1.62 模组发布 – 1:1 现实时间流速模组",
      "url": "https://wuminboke.site/uncategorized/ats-real-time-scale-mod/",
      "date": "2026-11-25"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "现在做生意还能赚到钱吗？",
      "url": "https://sheep5.net/archives/26112609.html",
      "date": "2026-11-26"
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
