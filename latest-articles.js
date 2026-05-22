// ==================== latest-articles.js ====================
// 抓取日期: 5/21/2026, 8:53:11 PM
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
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "从抢注stupidea.com谈谈抢注域名技巧",
      "url": "https://long.ge/18065.html",
      "date": "2026-05-18"
    }
  ],
  "2010": [
    {
      "name": "宇间草",
      "year": "10",
      "title": "修个设备还得“以命换命”？这锅老子不背了",
      "url": "https://2days.org/20108.html",
      "date": "2026-05-11"
    }
  ],
  "2015": [
    {
      "name": "泽泽社长",
      "year": "15",
      "title": "当你准备弃用注销一个手机号时有多复杂",
      "url": "https://blog.aihaonv.com/phone-number.html",
      "date": "2026-05-20"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "openAI 团队告诉你，怎么把 Codex 用到极致！",
      "url": "https://www.ccgxk.com/codeother/754.html",
      "date": "2026-05-21"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "最近卖掉的域名",
      "url": "https://heming.org/2460.html",
      "date": "2026-05-16"
    },
    {
      "name": "Z次元",
      "year": "20",
      "title": "Claude Code接入第三方Api（Deepseek）",
      "url": "https://blog.ahzoo.cn/p/72d250f/",
      "date": "2026-05-10"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "在线去水印助手  — 自动填充地址到在线去水印中的浏览器扩展",
      "url": "https://jyblog.cn/5596/",
      "date": "2026-05-19"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "赫尔米勒embody",
      "url": "https://siwei.li/he-er-mi-le-embody/",
      "date": "2026-05-08"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "爱于细碎烟火，悟爱的本真爱",
      "url": "https://liyinwaihe.com/399.html",
      "date": "2026-05-09"
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
