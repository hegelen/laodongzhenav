// ==================== latest-articles.js ====================
// 抓取日期: 5/24/2026, 8:10:26 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2008": [
    {
      "name": "有氧呼吸",
      "year": "08",
      "title": "年纪大了，开始怀念……",
      "url": "https://www.oxy.one/2026/05/blog-post.html",
      "date": "2026-05-18"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "博客程序默认feed地址大全",
      "url": "https://ddlog.cn/?p=481",
      "date": "2026-05-24"
    }
  ],
  "2011": [
    {
      "name": "前端小武",
      "year": "11",
      "title": "AI 时代的初思考",
      "url": "https://xuexb.com/post/ai-think.html",
      "date": "2026-05-17"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "前言",
      "url": "https://guoxiaoli.com/post/662.html",
      "date": "2026-05-20"
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
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "遂昌｜躲避人潮的五一自驾Day5 - 独山",
      "url": "https://blog.ops-coffee.com/r/city-china-zhejiang-lishui-suichang-05.html",
      "date": "2026-05-21"
    }
  ],
  "2020": [
    {
      "name": "优世界",
      "year": "20",
      "title": "OpenWrt 路由器改纯 AP 模式记录（Cudy TR3000 + 中兴 F50）",
      "url": "https://usj.cc/202605231938.html",
      "date": "2026-05-23"
    },
    {
      "name": "yihong0618",
      "year": "20",
      "title": "不要自动化你的情感链接",
      "url": "https://blog.yihong0618.me/issue-343/",
      "date": "2026-05-15"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "多数人都无视了人生中的变量",
      "url": "http://blog.tangwudi.com/shuoshuo/%E5%A4%9A%E6%95%B0%E4%BA%BA%E9%83%BD%E6%97%A0%E8%A7%86%E4%BA%86%E4%BA%BA%E7%94%9F%E4%B8%AD%E7%9A%84%E5%8F%98%E9%87%8F/",
      "date": "2026-05-23"
    }
  ],
  "2025": [
    {
      "name": "落花雨记",
      "year": "25",
      "title": "给糯米做绝育",
      "url": "https://www.luohuayu.cn/69.html",
      "date": "2026-05-23"
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
