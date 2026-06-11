// ==================== latest-articles.js ====================
// 抓取日期: 6/11/2026, 9:32:04 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "ntfy.sh 是什么",
      "url": "https://wlj.me/posts/20260611-ntfy-sh/",
      "date": "2026-06-11"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "旧电脑win10更新完毕",
      "url": "http://www.xlanda.net/posts/22254",
      "date": "2026-06-11"
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "服务器安装Debian13和WP-Panel教程",
      "url": "https://long.ge/18069.html",
      "date": "2026-06-11"
    }
  ],
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "对基本有序的序列排序算法",
      "url": "https://blog.codingnow.com/2026/06/powersort.html",
      "date": "2026-06-11"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "二宝的鸡毛蒜皮",
      "url": "https://acevs.com/5031/",
      "date": "2026-06-11"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "2026年美加墨世界杯来了，好消息是央视全程免费直播（附完全观赛指南）",
      "url": "https://www.munue.com/801.html",
      "date": "2026-06-11"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "老张博客更换Riven主题了！",
      "url": "https://laozhang.org/archives/4096.html",
      "date": "2026-06-11"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "华严经三题：回向、因缘和合与穿越的秘密",
      "url": "https://www.iliu.org/posts/huayan-jing-huixiang-yinyuan-su-hui/",
      "date": "2026-06-11"
    }
  ],
  "2013": [
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "代码增强插件 — PluginCodeEnhance 发布",
      "url": "https://wuqishi.com/archives/halo-plugin-code-enhance-intro",
      "date": "2026-06-11"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "ZMark 1.0.0正式版来了，AI检索功能已就绪",
      "url": "https://blog.xiaoz.org/archives/23055",
      "date": "2026-06-11"
    }
  ],
  "2016": [
    {
      "name": "故事里",
      "year": "16",
      "title": "如若一无所有，能否快乐自由",
      "url": "https://www.gushi.li/if-you-have-nothing-can-you-be-happy-and-free.html",
      "date": "2026-06-11"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "今年最燃Web出海奇迹，小白从0建站一个月入万刀全程详细复盘！",
      "url": "https://www.ccgxk.com/codeother/775.html",
      "date": "2026-06-11"
    },
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "我写了个 Chrome 扩展「Smart Tab Pinner」解决标签页总被误关的问题",
      "url": "https://www.tjsky.net/best-software/1642",
      "date": "2026-06-11"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "看电影时，我到底在期待什么",
      "url": "https://blog.solazy.me/20260611/",
      "date": "2026-06-11"
    }
  ],
  "2020": [
    {
      "name": "vinchent",
      "year": "20",
      "title": "关于死亡教育的一则通告",
      "url": "https://www.vinchent.xyz/guan-yu-si-wang-jiao-yu-de-ze-tong-gao",
      "date": "2026-06-11"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "解决阿里云邮件推送被微软屏蔽的问题",
      "url": "https://www.imcry.vip/post/2026-6-11-1133/",
      "date": "2026-06-11"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-11",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-11",
      "date": "2026-06-11"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "WordPress网站流量统计查看访问量的方法",
      "url": "https://www.bailuze.com/25243.html",
      "date": "2026-06-11"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "没想到我也经历了一次劳动维权",
      "url": "https://t-t.live/archives/14cF5QYJ",
      "date": "2026-06-11"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "锈铁年月",
      "url": "https://mzdsx.com/2026/06/12/%e9%94%88%e9%93%81%e5%b9%b4%e6%9c%88/",
      "date": "2026-06-11"
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
