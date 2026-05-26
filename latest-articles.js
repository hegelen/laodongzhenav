// ==================== latest-articles.js ====================
// 抓取日期: 5/26/2026, 6:46:23 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "1分钟速度了解text-align match-parent声明",
      "url": "https://www.zhangxinxu.com/wordpress/2026/05/css-text-align-match-parent/",
      "date": "2026-05-25"
    },
    {
      "name": "多多",
      "year": "09",
      "title": "域名txt解析 验证后删除可以吗？",
      "url": "https://ddlog.cn/?p=494",
      "date": "2026-05-25"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "情感赛道写作模板",
      "url": "https://zhoutian.com/356.html",
      "date": "2026-05-26"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "讲几个 出海独立开发 获取流量的经验",
      "url": "https://www.ccgxk.com/codeother/758.html",
      "date": "2026-05-25"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-05-25",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-05-25",
      "date": "2026-05-25"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "EdgeOne 日志分析软件 v2.0",
      "url": "https://jyblog.cn/5651/",
      "date": "2026-05-26"
    }
  ],
  "2023": [
    {
      "name": "火米",
      "year": "23",
      "title": "第一次买独服，我学到了什么",
      "url": "https://huo.me/ks-le-b/",
      "date": "2026-05-25"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "第三次兑换天猫超市卡了",
      "url": "https://ygz.ink/archives/5036.html",
      "date": "2026-05-26"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "黑袍纠察队",
      "url": "https://jefftay.com/the-boys",
      "date": "2026-05-26"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "可循环值守和多人录制的直播录制软件",
      "url": "https://www.renhuali.cn/journal/cmpm35e18000ech81lyrekcfd",
      "date": "2026-05-26"
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
