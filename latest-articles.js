// ==================== latest-articles.js ====================
// 抓取日期: 5/23/2026, 8:08:56 PM
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
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "为什么必须戒短视频",
      "url": "https://joojen.com/archives/8986.html",
      "date": "2026-05-23"
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
  "2013": [
    {
      "name": "WEB骇客",
      "year": "13",
      "title": "问题解决：在 Android 上的 Ubuntu chroot 环境中运行 apt-get update 失败",
      "url": "https://www.webhek.com/post/apt-get-update-fails-on-chroot-ubuntu-on-android/",
      "date": "2026-05-20"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "思多乱其志，行者多披靡-读《被讨厌的勇气》",
      "url": "https://izualzhy.cn/bei-tao-yan-de-yong-qi-reading",
      "date": "2026-05-23"
    }
  ],
  "2015": [
    {
      "name": "Guyskk",
      "year": "15",
      "title": "把大模型当成晶体管：从阻抗匹配到集成运放的思维实验",
      "url": "https://blog.guyskk.com/notes/llm-integrated-amplifier-design",
      "date": "2026-05-19"
    }
  ],
  "2018": [
    {
      "name": "希仁之拥",
      "year": "18",
      "title": "Ubuntu 26.04 Desktop使用体验",
      "url": "https://blog.keepchen.com/a/Ubuntu-26.04-Desktop-User-Experience.html",
      "date": "2026-05-10"
    }
  ],
  "2020": [
    {
      "name": "Battle Le",
      "year": "20",
      "title": "舟山骑车游",
      "url": "https://battlele.com/zhoushan-trip/",
      "date": "2026-05-20"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "更新到WordPress7.0感觉有点卡",
      "url": "https://ygz.ink/archives/5002.html",
      "date": "2026-05-21"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "暹罗没有春天",
      "url": "https://jefftay.com/movies/dear-you",
      "date": "2026-05-16"
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
