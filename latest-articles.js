// ==================== latest-articles.js ====================
// 抓取日期: 8/1/2026, 8:18:20 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "不吐不快",
      "year": "02",
      "title": "升级糖豆广场舞视频下载软件",
      "url": "https://mianao.info/tangdou-dance-video-free-download-update/",
      "date": "2026-08-01"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "YC亲自下场开源内部Harness：QM，一个“多人在线”的公司级Agent操作系统",
      "url": "https://tonybai.com/2026/08/01/yc-open-source-qm-multiplayer-agent-harness/",
      "date": "2026-08-01"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "服务的价值",
      "url": "https://ezo.biz/Diary/1532.html",
      "date": "2026-08-01"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "中奖赛博朋克盲盒鼠标",
      "url": "http://www.xlanda.net/posts/22370",
      "date": "2026-08-01"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "从 FreeBSD Ports 代码仓库冻结事件谈起：Git 历史重写，以及如何从此类状况中恢复",
      "url": "https://blog.delphij.net/posts/2026/07/git-history-write/",
      "date": "2026-08-01"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年8月1日",
      "url": "https://acevs.com/5140/",
      "date": "2026-08-01"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "🌾 重磅消息！我的「呆呆农场」终于上线测试啦！",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1268",
      "date": "2026-08-01"
    },
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "奇货可居：数据共享的困局",
      "url": "https://yanlinlin.cn/2026/08/01/data-sharing-dilemma/",
      "date": "2026-08-01"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "山姆超市：是店大欺客还是水土不服",
      "url": "https://me.xu19.com/two-food-safety-incidents-at-sams-club/",
      "date": "2026-08-01"
    }
  ],
  "2010": [
    {
      "name": "limboy",
      "year": "10",
      "title": "Google’s AI Problem Is Bigger Than You Think",
      "url": "https://limboy.me/posts/google-ai-problem-is-bigger-than-you-think",
      "date": "2026-08-01"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "七牛云已经能用上Deepseek-V4-Flash正式版了，点此领取300万Token",
      "url": "https://blog.xiaoz.org/archives/23311",
      "date": "2026-08-01"
    }
  ],
  "2016": [
    {
      "name": "阿珏酱",
      "year": "16",
      "title": "MoeKoe Music Mobile酷狗音乐第三方移动端播放器",
      "url": "https://moejue.cn/archives/342",
      "date": "2026-08-01"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "程序化广告的魅力！",
      "url": "https://www.ccgxk.com/codeother/829.html",
      "date": "2026-08-01"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "四川度过了红色高温，现在轮到华北、华东、华中、东北地区体验红色高温了",
      "url": "https://www.bufanz.com/20260801773.html",
      "date": "2026-08-01"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "人生的意义",
      "url": "https://www.wsh233.cn/post/人生的意义",
      "date": "2026-08-01"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-01",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-01",
      "date": "2026-08-01"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "送外卖的有趣事！",
      "url": "https://xiangming.site/1142.html",
      "date": "2026-08-01"
    }
  ],
  "2024": [
    {
      "name": "刘郎阁",
      "year": "24",
      "title": "零基础做AI歌曲，解锁副业收益",
      "url": "https://vjo.cc/1991",
      "date": "2026-08-01"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "单点紧化",
      "url": "https://www.immarcus.com/blog/one-point-compactification",
      "date": "2026-08-01"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "有一个AI大厂可以薅羊毛了！完成注册即可获得68元免费token额度",
      "url": "https://www.renhuali.cn/journal/cms9qji8j013kchujq0wtydlf",
      "date": "2026-08-01"
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
