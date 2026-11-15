// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-15 23:27:40
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Confusion about causation",
      "url": "https://seths.blog/2026/11/confusion-about-causation/",
      "date": "2026-11-15"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "注射流感疫苗",
      "url": "https://ezo.biz/Diary/1826.html",
      "date": "2026-11-15"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "双11不受邀",
      "url": "https://www.xlanda.net/posts/22618",
      "date": "2026-11-15"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go SIMD 要转正了：一份 API 规范背后的设计野心",
      "url": "https://tonybai.com/2026/11/16/go-simd-api-graduation-proposal-83009/",
      "date": "2026-11-15"
    }
  ],
  "2005": [
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0022",
      "url": "https://lenciel.com/2026/11/fragments-0x0022/",
      "date": "2026-11-15"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "火星陨石",
      "url": "https://acevs.com/5367/",
      "date": "2026-11-15"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "茶花女",
      "url": "https://www.seis-jun.xyz/blog/2026-11-15-The-Lady-of-the-Camellias.html",
      "date": "2026-11-15"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "爷爷去世第三天，守灵日记",
      "url": "https://www.linyufan.com/post/6143",
      "date": "2026-11-15"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "哔哩哔哩 bilibili 官网搜索“大会员”送 7 天会员",
      "url": "https://www.dujin.org/23874.html",
      "date": "2026-11-15"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "한글 URL 보기: 클릭 한 번으로 인코딩된 주소를 쉽게 읽는 방법",
      "url": "https://www.thewordcracker.com/blog/korean-url-decoder-chrome-extension/",
      "date": "2026-11-15"
    }
  ],
  "2017": [
    {
      "name": "雨中野游",
      "year": "17",
      "title": "宇宙是一个鱼缸",
      "url": "https://hqidi.com/226.html",
      "date": "2026-11-15"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "为什么 AI 编程让人很累？新思路告诉你原因和解法",
      "url": "https://www.ccgxk.com/emlog_dev/943.html",
      "date": "2026-11-15"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "这又是哪个毒株在作怪？",
      "url": "https://www.suiyan.cc/blog/20261115164617",
      "date": "2026-11-15"
    }
  ],
  "2018": [
    {
      "name": "吖远zzy",
      "year": "18",
      "title": "调用第三方大模型api接口被一个406报错卡了半天，最后发现是Accept头的顺序问题",
      "url": "https://www.hzv5.cn/2026/11/15/Agent-error-406/",
      "date": "2026-11-15"
    }
  ],
  "2020": [
    {
      "name": "Battle Le",
      "year": "20",
      "title": "2026 关西八日游下篇",
      "url": "https://battlele.com/2026-kansai-tour-2/",
      "date": "2026-11-16"
    },
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "LED 耳環誕生（四）：果然是有坑要踩的 ：/",
      "url": "https://blog.giveanornot.com/led-earring-4/",
      "date": "2026-11-15"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "随想录III",
      "url": "https://www.wsh233.cn/post/随想录iii",
      "date": "2026-11-15"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-15：HiringNow、Businesses in ChatGPT、Dex Semantics",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-15",
      "date": "2026-11-15"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "周末去丈母娘家“进货”，后备箱塞满了大白菜",
      "url": "https://9sb.net/archives/weekend-vegetable-run-at-grandma-house.html",
      "date": "2026-11-15"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "那些慢慢过期的域名",
      "url": "https://sheep5.net/archives/26111510.html",
      "date": "2026-11-15"
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
