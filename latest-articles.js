// ==================== latest-articles.js ====================
// 抓取日期: 9/24/2026, 10:18:29 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "短时练习也能收获愉悦",
      "url": "https://wlj.me/notes/sp-note-20260924-114718/",
      "date": "2026-09-24"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "厚底鞋",
      "url": "http://www.xlanda.net/posts/22491",
      "date": "2026-09-24"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "峰回路转",
      "url": "https://ezo.biz/Diary/1698.html",
      "date": "2026-09-24"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026-09-24",
      "url": "https://acevs.com/5252/",
      "date": "2026-09-24"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Cloudflare 的 1.1.1.1 支援 Post-Quantum 演算法的 DNSSEC",
      "url": "https://blog.gslin.org/archives/2026/09/24/13225/cloudflare-%e7%9a%84-1-1-1-1-%e6%94%af%e6%8f%b4-post-quantum-%e6%bc%94%e7%ae%97%e6%b3%95%e7%9a%84-dnssec/",
      "date": "2026-09-23"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "换支毛笔写字，感觉又不一样，但享受的感觉是一样的",
      "url": "https://yufm.com/662405.html",
      "date": "2026-09-24"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "伤心的云美国服务器得分 106.00",
      "url": "https://dujun.io/sadidc-us-zero-lv1-scored-one-hundred-and-six.html",
      "date": "2026-09-24"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "一次内存引起的网络丢包问题排查",
      "url": "https://www.kawabangga.com/posts/7422",
      "date": "2026-09-24"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.9.24",
      "url": "https://www.linyufan.com/post/6048",
      "date": "2026-09-24"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "Meta旗下的Muse AI注册送10亿tokens，附注册教程和注意事项",
      "url": "https://blog.xiaoz.org/archives/23521",
      "date": "2026-09-24"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Jev 对比它的三个平替 Laya 、 djev 、 anyjev 决策模型方案",
      "url": "https://www.ccgxk.com/emlog_dev/894.html",
      "date": "2026-09-24"
    }
  ],
  "2019": [
    {
      "name": "呢喃",
      "year": "19",
      "title": "狙击蝴蝶",
      "url": "https://ninan.me/movie/Sniper-Butterfly.html",
      "date": "2026-09-24"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "三花猫的第二胎宝宝，生了六只小奶猫",
      "url": "https://www.bufanz.com/20260924966.html",
      "date": "2026-09-24"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-24",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-24",
      "date": "2026-09-24"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "单车",
      "url": "https://www.wsh233.cn/post/单车",
      "date": "2026-09-24"
    },
    {
      "name": "Dayu",
      "year": "21",
      "title": "天展钓Tenkara和在Folkestone挖化石",
      "url": "https://anotherdayu.com/tenkara-folkestone/",
      "date": "2026-09-24"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "WordPress 7.1.2版本最新更新包含哪些内容？",
      "url": "https://www.bailuze.com/26142.html",
      "date": "2026-09-24"
    },
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "博客三周年，依旧是一些记录",
      "url": "https://blog.mfwt.top/index.php/archives/1633/",
      "date": "2026-09-24"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "我家是鬼屋",
      "url": "https://www.immarcus.com/blog/my-haunted-home",
      "date": "2026-09-24"
    },
    {
      "name": "桃子味",
      "year": "25",
      "title": "鞋儿破，帽儿破，世间再无“济公”——送别游本昌老先生",
      "url": "https://www.taoziwei.com/444/",
      "date": "2026-09-24"
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
