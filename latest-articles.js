// ==================== latest-articles.js ====================
// 抓取日期: 9/28/2026, 11:53:44 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Two ways to use lock-in/loyalty",
      "url": "https://seths.blog/2026/09/two-ways-to-use-lock-in-loyalty/",
      "date": "2026-09-28"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "京喜自营套路",
      "url": "https://ezo.biz/Diary/1707.html",
      "date": "2026-09-28"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "HN 热帖引爆讨论：Go 的 import 路径，为什么不该耦合 github.com？",
      "url": "https://tonybai.com/2026/09/29/go-import-path-decouple-github-hn-debate/",
      "date": "2026-09-28"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Anthropic 突然冒出 Sonnet 5.5",
      "url": "https://blog.gslin.org/archives/2026/09/29/13231/anthropic-%e7%aa%81%e7%84%b6%e5%86%92%e5%87%ba-sonnet-5-5/",
      "date": "2026-09-28"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "反自学机制",
      "url": "https://acevs.com/5260/",
      "date": "2026-09-28"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x000D",
      "url": "https://lenciel.com/2026/09/fragments-0x000d/",
      "date": "2026-09-28"
    }
  ],
  "2008": [
    {
      "name": "四火的唠叨",
      "year": "08",
      "title": "软件工程，还有未来吗？",
      "url": "https://www.raychase.net/8347",
      "date": "2026-09-28"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "这些天，我又折腾了些啥！？",
      "url": "https://laozhang.org/archives/4391.html",
      "date": "2026-09-28"
    }
  ],
  "2010": [
    {
      "name": "宇间草",
      "year": "10",
      "title": "想来也是搞笑：我的人生大事，居然要跟领导请假",
      "url": "https://2days.org/1373.html",
      "date": "2026-09-28"
    },
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "当你在看甄嬛传时，你会想起曲中人吗？",
      "url": "https://www.mmtx.net/1188.html",
      "date": "2026-09-28"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "Meta Muse 使用教程：上手设置、提示词技巧与实用案例",
      "url": "https://blog.einverne.info/post/2026/09/meta-muse-use-cases-tutorial.html",
      "date": "2026-09-28"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "即日起博客全站关闭Ai自动回复功能",
      "url": "https://www.linyufan.com/post/6056",
      "date": "2026-09-28"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "今天聊聊，程序员如何延长寿命？",
      "url": "https://www.ccgxk.com/front-end/899.html",
      "date": "2026-09-28"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "中秋三日",
      "url": "https://liuqingwushui.top/archives/198/",
      "date": "2026-09-28"
    }
  ],
  "2020": [
    {
      "name": "孙振超",
      "year": "20",
      "title": "C盘清理.bat",
      "url": "https://www.aqzx.com/blog/post/49.html",
      "date": "2026-09-28"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-28",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-28",
      "date": "2026-09-28"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "2026中秋",
      "url": "https://xiangming.site/1152.html",
      "date": "2026-09-28"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "亚马逊店铺商品标题seo优化教程",
      "url": "https://www.bailuze.com/24448.html",
      "date": "2026-09-28"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "Python 可变默认参数陷阱，一个 dict 被整个函数共用",
      "url": "https://liyinwaihe.com/431.html",
      "date": "2026-09-28"
    },
    {
      "name": "Marcus",
      "year": "25",
      "title": "正宗美式英语",
      "url": "https://www.immarcus.com/blog/native-american-english",
      "date": "2026-09-28"
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
