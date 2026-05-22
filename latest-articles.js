// ==================== latest-articles.js ====================
// 抓取日期: 5/22/2026, 9:42:34 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "一个简单的缺氧地热模块",
      "url": "https://blog.codingnow.com/2026/05/oni_geotherm.html",
      "date": "2026-05-16"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "大家一定要经常检查",
      "url": "https://me.xu19.com/keep-checking-blog-external-links/",
      "date": "2026-05-20"
    },
    {
      "name": "Wandai",
      "year": "08",
      "title": "复习模拟电路",
      "url": "https://twd2.me/archives/20844",
      "date": "2026-05-17"
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
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "openAI 团队告诉你，怎么把 Codex 用到极致！",
      "url": "https://www.ccgxk.com/codeother/754.html",
      "date": "2026-05-21"
    }
  ],
  "2021": [
    {
      "name": "阿锋的小宇宙",
      "year": "21",
      "title": "时隔两年再次献血，左胳膊400毫升",
      "url": "https://feng.pub/0520269606.html",
      "date": "2026-05-22"
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
      "name": "火米",
      "year": "23",
      "title": "点评一下小米 Mimo 模型",
      "url": "https://huo.me/mimo/",
      "date": "2026-05-22"
    }
  ],
  "2024": [
    {
      "name": "ImQi1",
      "year": "24",
      "title": "来成都看大熊猫",
      "url": "https://imqi1.com/content/shot/1011",
      "date": "2026-05-15"
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
