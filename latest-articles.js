// ==================== latest-articles.js ====================
// 抓取日期: 9/4/2026, 9:26:04 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 411 期）：OpenClaw 2.0 是一个缩影",
      "url": "http://www.ruanyifeng.com/blog/2026/09/weekly-issue-411.html",
      "date": "2026-09-03"
    }
  ],
  "2004": [
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "迟到二十多年的电影票",
      "url": "https://doyj.com/2026/09/04/%e8%bf%9f%e5%88%b0%e4%ba%8c%e5%8d%81%e5%a4%9a%e5%b9%b4%e7%9a%84%e7%94%b5%e5%bd%b1%e7%a5%a8/",
      "date": "2026-09-04"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Rust官方宣布启动函数重载实验，一个特性打通 C++ 互操作最后一公里",
      "url": "https://tonybai.com/2026/09/04/rust-function-overloading-experiment-nightly-splat/",
      "date": "2026-09-03"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "绝对力量不够",
      "url": "http://www.xlanda.net/posts/22443",
      "date": "2026-09-04"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": ".name 網域的消滅",
      "url": "https://blog.gslin.org/archives/2026/09/04/13181/name-%e7%b6%b2%e5%9f%9f%e7%9a%84%e6%b6%88%e6%bb%85/",
      "date": "2026-09-04"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026-09-04",
      "url": "https://acevs.com/5211/",
      "date": "2026-09-04"
    }
  ],
  "2010": [
    {
      "name": "雅余",
      "year": "10",
      "title": "听说你又在搭建博客了",
      "url": "https://yayu.net/6244.html",
      "date": "2026-09-04"
    }
  ],
  "2011": [
    {
      "name": "前端小武",
      "year": "11",
      "title": "小黑，续集",
      "url": "https://xuexb.com/post/xiaohei2.html",
      "date": "2026-09-04"
    }
  ],
  "2013": [
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "今日“大”菜 — 凉拌黄瓜、清炒花菜",
      "url": "https://wuqishi.com/archives/todays-special-cold-cucumber-stir-fried-cauliflower",
      "date": "2026-09-04"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 관리자 페이지에서 테마, 플러그인 메뉴가 표시되지 않는 경우",
      "url": "https://www.thewordcracker.com/basic/if-plugin-menu-does-not-appear-in-wordpress/",
      "date": "2026-09-04"
    }
  ],
  "2017": [
    {
      "name": "zj",
      "year": "17",
      "title": "西湖闲逛",
      "url": "http://www.zjhuiwan.cn/info/20260904/5218082494475034.html",
      "date": "2026-09-04"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "只活到 50 岁也挺好",
      "url": "https://blog.solazy.me/20260904/",
      "date": "2026-09-04"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "NovixLink – LAS-COX Lite Residential VPS in the US",
      "url": "https://heming.org/2808.html",
      "date": "2026-09-04"
    }
  ],
  "2021": [
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "说说：#2026-09-04 22:26",
      "url": "https://www.mmbkz.cn/80f1a718.html",
      "date": "2026-09-04"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-04",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-04",
      "date": "2026-09-04"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "公关链接如何增强SEO并建立品牌权威？",
      "url": "https://www.bailuze.com/24395.html",
      "date": "2026-09-04"
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "AI时代个人博客的价值重构（二）：从内容记录到数字人格——如何让 AI 理解“我是谁”",
      "url": "https://blog.tangwudi.com/technology/cognition14690/",
      "date": "2026-09-04"
    },
    {
      "name": "湘铭",
      "year": "23",
      "title": "微信小程序二维码真机不显示：从 `TextEncoder is not defined` 到跨端兼容方案",
      "url": "https://xiangming.site/1151.html",
      "date": "2026-09-04"
    }
  ],
  "2024": [
    {
      "name": "ImQi1",
      "year": "24",
      "title": "或许我们每个人都有问题",
      "url": "https://imqi1.com/content/note/1021",
      "date": "2026-09-04"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "我的三角钢琴",
      "url": "https://www.immarcus.com/blog/my-baby-grand-piano",
      "date": "2026-09-04"
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
