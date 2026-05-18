// ==================== latest-articles.js ====================
// 抓取日期: 5/18/2026, 8:28:47 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "All right and none the same",
      "url": "https://seths.blog/2026/05/all-right-and-none-the-same/",
      "date": "2026-05-18"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "散装药",
      "url": "https://kaix.in/2026/0508/",
      "date": "2026-05-08"
    }
  ],
  "2007": [
    {
      "name": "FROYO",
      "year": "07",
      "title": "凌晨奇遇｜坠入一场沉浸式幻梦",
      "url": "https://www.izhuyue.com/5821.html",
      "date": "2026-05-18"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "Claude Code /goal：让 AI 自主持续工作直到达成目标的新命令",
      "url": "https://blog.einverne.info/post/2026/05/claude-code-goal-command.html",
      "date": "2026-05-13"
    },
    {
      "name": "耳朵的主人",
      "year": "11",
      "title": "妈祖诞辰1066周年｜善坛妈祖庙祭典",
      "url": "https://www.edzbe.com/book/diary/20260509.html",
      "date": "2026-05-11"
    }
  ],
  "2016": [
    {
      "name": "小可",
      "year": "16",
      "title": "Codex 订阅一物多用：通过 CPA 代理输出 OpenAI 标准接口",
      "url": "https://keke.su/posts/2026-05-08-new-1.html",
      "date": "2026-05-08"
    }
  ],
  "2018": [
    {
      "name": "枋柚梓的猫会发光",
      "year": "18",
      "title": "从 1Password 迁移到 Bitwarden：一次涨价引发的“搬家”",
      "url": "https://inkss.cn/post/5a013cf6/",
      "date": "2026-05-08"
    }
  ],
  "2023": [
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客加一层“语义索引”（二）：JSON 结构与生成脚本的实现",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14244/",
      "date": "2026-05-15"
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
  ],
  "2026": [
    {
      "name": "一万先生",
      "year": "26",
      "title": "土耳其区ID充值gpt plus全流程(apple礼品卡)",
      "url": "/feed/6",
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
