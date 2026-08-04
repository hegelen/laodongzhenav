// ==================== latest-articles.js ====================
// 抓取日期: 8/4/2026, 8:32:53 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Preference falsification",
      "url": "https://seths.blog/2026/08/preference-falsification/",
      "date": "2026-08-04"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "思维导图理清思路",
      "url": "http://www.xlanda.net/posts/22376",
      "date": "2026-08-04"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "三年磨一剑！Go 桌面框架 Wails 发布 v3公测版：多窗口、AST 绑定、透明构建系统一次到位",
      "url": "https://tonybai.com/2026/08/04/wails-v3-go-desktop-framework/",
      "date": "2026-08-03"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "魔兽争霸2场复盘",
      "url": "https://acevs.com/5147/",
      "date": "2026-08-04"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "我为什么将 Obsidian 作为主力文字工具",
      "url": "https://joojen.com/archives/9067.html",
      "date": "2026-08-04"
    }
  ],
  "2009": [
    {
      "name": "lms",
      "year": "09",
      "title": "一个令我印象深刻的小故事",
      "url": "https://lms.im/a-little-story-that-struck-me-as-impressive/",
      "date": "2026-08-03"
    }
  ],
  "2011": [
    {
      "name": "老孙",
      "year": "11",
      "title": " 又一款Typecho主题 Nebula",
      "url": "https://www.imsun.org/archives/1797.html",
      "date": "2026-08-04"
    },
    {
      "name": "Verne",
      "year": "11",
      "title": "mise 的 minimum_release_age 给新版本加一道冷静期的供应链安全机制",
      "url": "https://blog.einverne.info/post/2026/08/mise-minimum-release-age.html",
      "date": "2026-08-04"
    },
    {
      "name": "君子不器",
      "year": "11",
      "title": "2026年7月：考完试，放假去",
      "url": "https://www.colinjiang.com/archives/2026-07-exams-and-holiday.html",
      "date": "2026-08-04"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "冠冕与王",
      "url": "https://www.leitao.cn/10546.html",
      "date": "2026-08-04"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "简单谈谈K3的MoE和Attention",
      "url": "https://kexue.fm/archives/11848",
      "date": "2026-08-04"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "评论、邮件，为什么不是Webmention？",
      "url": "https://www.suiyan.cc/blog/20260804194203",
      "date": "2026-08-04"
    }
  ],
  "2018": [
    {
      "name": "Xianying",
      "year": "18",
      "title": "直觉的另一半",
      "url": "https://shrektan.com/zh/post/2026/08/05/the-other-half-of-intuition/",
      "date": "2026-08-04"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "又是一年，祝自己生日快乐",
      "url": "https://blog.solazy.me/20260804/",
      "date": "2026-08-04"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "【不凡摄影作品 | 2026.8.4】",
      "url": "https://www.bufanz.com/20260804777.html",
      "date": "2026-08-04"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "西溪湿地的荷花",
      "url": "https://www.wsh233.cn/post/西溪湿地的荷花",
      "date": "2026-08-04"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "【开源主题】LB_Down下载站-支持1.3.0版本typecho主题",
      "url": "https://lb5.net/261.html",
      "date": "2026-08-04"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "新手Google SEO指南：零基础谷歌关键词排名优化的简单入门教程",
      "url": "https://www.bailuze.com/25762.html",
      "date": "2026-08-04"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "我似乎对「应当怎么做」不感兴趣",
      "url": "https://www.immarcus.com/blog/not-interested-in-norms",
      "date": "2026-08-04"
    }
  ],
  "2026": [
    {
      "name": "茶余饭后",
      "year": "26",
      "title": "暑假陪孩子重温《士兵突击》日记",
      "url": "https://chayufanhou.com/2026/08/04/%e6%9a%91%e5%81%87%e9%99%aa%e5%ad%a9%e5%ad%90%e9%87%8d%e6%b8%a9%e3%80%8a%e5%a3%ab%e5%85%b5%e7%aa%81%e5%87%bb%e3%80%8b%e6%97%a5%e8%ae%b0/",
      "date": "2026-08-04"
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
