// ==================== latest-articles.js ====================
// 抓取日期: 5/17/2026, 6:54:08 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "一片瓦",
      "year": "04",
      "title": "国产银河麒麟系统添加仿宋GB2312、Times New Roman等行政字体遇到问题解决方案（附字体下载链接）",
      "url": "https://www.ixsz.com/3221.html",
      "date": "2026-05-11"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "使用 RSS.app，RSS 生成服务",
      "url": "https://ddlog.cn/?p=473",
      "date": "2026-05-16"
    }
  ],
  "2015": [
    {
      "name": "Luminous",
      "year": "15",
      "title": "【frp】双端内网环境XTCP协议P2P打洞互通实践",
      "url": "https://luotianyi.vc/9435.html",
      "date": "2026-05-03"
    }
  ],
  "2017": [
    {
      "name": "zj",
      "year": "17",
      "title": "五一·北京游",
      "url": "http://www.zjhuiwan.cn/info/20260506/5210122503078339.html",
      "date": "2026-05-06"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "我买基金从不亏钱",
      "url": "https://blog.ops-coffee.com/r/fund-5-year-from-50-percent-loss-to-profit.html",
      "date": "2026-05-07"
    }
  ],
  "2019": [
    {
      "name": "李锋镝",
      "year": "19",
      "title": "SchedulingConfigurer详解",
      "url": "https://www.lifengdi.com/hou-duan/4701",
      "date": "2026-05-15"
    }
  ],
  "2021": [
    {
      "name": "yveji",
      "year": "21",
      "title": "2026世界杯代餐：chambishi copper mine",
      "url": "https://www.yveji.com/Cultural/chambishi-copper-mine.html",
      "date": "2026-05-13"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "最近生活不太如意",
      "url": "https://jyblog.cn/5576/",
      "date": "2026-05-16"
    }
  ],
  "2023": [
    {
      "name": "火米",
      "year": "23",
      "title": "让 Codex 控制 Chrome，微调了博客侧边栏",
      "url": "https://huo.me/codex-control-chrome/",
      "date": "2026-05-16"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "抖音520的消费卷有点心动",
      "url": "https://ygz.ink/archives/4958.html",
      "date": "2026-05-17"
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
