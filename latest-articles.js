// ==================== latest-articles.js ====================
// 抓取日期: 5/25/2026, 8:24:22 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
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
      "name": "卡片创作实验室",
      "year": "14",
      "title": "《日课一问》：每日三省，破局人生",
      "url": "https://cnfeat.com/posts/2026/05/19/%E6%97%A5%E8%AF%BE%E4%B8%80%E9%97%AE%E6%AF%8F%E6%97%A5%E4%B8%89%E7%9C%81%E7%A0%B4%E5%B1%80%E4%BA%BA%E7%94%9F/",
      "date": "2026-05-18"
    },
    {
      "name": "ying",
      "year": "14",
      "title": "《GPT 图解》笔记：Seq2Seq及点积注意力",
      "url": "https://izualzhy.cn/llm-diagrammatize-seq2seq-attention",
      "date": "2026-05-24"
    }
  ],
  "2019": [
    {
      "name": "浪浪山下那个村",
      "year": "19",
      "title": "PuaSE： 简单的全局编排 Agent",
      "url": "https://www.zeekling.cn/articles/2026/05/16/1778937519379.html",
      "date": "2026-05-17"
    }
  ],
  "2020": [
    {
      "name": "Z次元",
      "year": "20",
      "title": "如何写出好的Agent Skill",
      "url": "https://blog.ahzoo.cn/p/7382919/",
      "date": "2026-05-24"
    },
    {
      "name": "yihong0618",
      "year": "20",
      "title": "不要自动化你的情感链接",
      "url": "https://blog.yihong0618.me/issue-343/",
      "date": "2026-05-15"
    }
  ],
  "2021": [
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "喵喵游记——金陵旧都",
      "url": "https://www.mmbkz.cn/7f76fe96.html",
      "date": "2026-05-12"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "关于我自己写了一套论坛系统 — 倦意论坛内测上线",
      "url": "https://jyblog.cn/5637/",
      "date": "2026-05-24"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "CTF:最好的语言解密过程",
      "url": "https://lb5.net/254.html",
      "date": "2026-05-19"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "Python编程语言在SEO优化中的优势与用途",
      "url": "https://www.bailuze.com/24090.html",
      "date": "2026-05-25"
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
