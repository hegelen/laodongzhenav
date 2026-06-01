// ==================== latest-articles.js ====================
// 抓取日期: 6/1/2026, 10:26:42 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "Codex 治好了我的博客不能被 VXNA 抓取的毛病",
      "url": "https://www.tortorse.com/archives/vxna-rss-cloudflare-codex-debugging/",
      "date": "2026-05-31"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "月末出bug",
      "url": "http://www.xlanda.net/posts/22232",
      "date": "2026-06-01"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "天涯社区回来了，今天流量太大了，时不时就500了",
      "url": "https://www.linyufan.com/post/5833",
      "date": "2026-06-01"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "AI 生成的代码太啰嗦",
      "url": "https://www.ccgxk.com/emlog_dev/764.html",
      "date": "2026-05-31"
    },
    {
      "name": "SimonAKing",
      "year": "17",
      "title": "带着 Claude Code 回到 1998",
      "url": "https://simonaking.com/blog/back-to-1998-with-claude-code/",
      "date": "2026-05-31"
    }
  ],
  "2019": [
    {
      "name": "Zeruns",
      "year": "19",
      "title": "香港旅游记录和照片分享",
      "url": "https://blog.zeruns.com/archives/945.html",
      "date": "2026-05-31"
    },
    {
      "name": "LJF.COM",
      "year": "19",
      "title": "华杉讲透《大学中庸》--- 《中庸》",
      "url": "https://ljf.com/2026/05/31/1544/",
      "date": "2026-05-31"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "七岁的我，是什么样的？",
      "url": "https://www.imcry.vip/post/2026-6-1-320/",
      "date": "2026-05-31"
    }
  ],
  "2023": [
    {
      "name": "火米",
      "year": "23",
      "title": "哪吒监控漏洞，MCP，奶爸的博客",
      "url": "https://huo.me/nezha/",
      "date": "2026-06-01"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "一碗竹升面!",
      "url": "https://mzdsx.com/2026/06/01/%e4%b8%80%e7%a2%97%e7%ab%b9%e5%8d%87%e9%9d%a2/",
      "date": "2026-05-31"
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
