// ==================== latest-articles.js ====================
// 抓取日期: 9/13/2026, 9:25:14 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "When does it become a speech?",
      "url": "https://seths.blog/2026/09/when-does-it-become-a-lecture/",
      "date": "2026-09-13"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "2003，校门关上以后",
      "url": "https://www.tortorse.com/archives/after-the-school-gate-closed-2003/",
      "date": "2026-09-13"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "冲突",
      "url": "https://ezo.biz/Diary/1667.html",
      "date": "2026-09-13"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Google 對於跑來爬搜尋結果的人的訴訟",
      "url": "https://blog.gslin.org/archives/2026/09/14/13201/google-%e5%b0%8d%e6%96%bc%e8%b7%91%e4%be%86%e7%88%ac%e6%90%9c%e5%b0%8b%e7%b5%90%e6%9e%9c%e7%9a%84%e4%ba%ba%e7%9a%84%e8%a8%b4%e8%a8%9f/",
      "date": "2026-09-13"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "重庆相聚的一天",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1279",
      "date": "2026-09-13"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.9.13",
      "url": "https://www.linyufan.com/post/6014",
      "date": "2026-09-13"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 이미지 최적화 - 무료 WebP 변환, 압축, 크기 변경",
      "url": "https://www.thewordcracker.com/basic/%eb%ac%b4%eb%a3%8c-webp-%eb%b3%80%ed%99%98-%ec%95%95%ec%b6%95-%ed%81%ac%ea%b8%b0-%eb%b3%80%ea%b2%bd/",
      "date": "2026-09-13"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "GLM-5.3-Flash 可能比 DeepSeek-V4.1-Flash 还贵，价格表和实际场景不是一回事",
      "url": "https://www.tjsky.net/ai/1928",
      "date": "2026-09-13"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之不要太看重 ProductHunt",
      "url": "https://www.ccgxk.com/codeother/882.html",
      "date": "2026-09-13"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "周末流水账 0913",
      "url": "https://blog.solazy.me/20260913/",
      "date": "2026-09-13"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "老Z，一个被怪人包围的家伙",
      "url": "https://www.imcry.vip/post/2026-9-13-1941/",
      "date": "2026-09-13"
    },
    {
      "name": "老卢",
      "year": "20",
      "title": "文本编辑器Notepad--",
      "url": "https://blog.el9.cn/appgo/Notepad.html",
      "date": "2026-09-13"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件ServerMonitor：服务器实时监控悬浮面板/零依赖低开销/30款面板样式/位置、缩放完全自由",
      "url": "https://www.bufanz.com/20260913906.html",
      "date": "2026-09-13"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-13",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-13",
      "date": "2026-09-13"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "QQ 阅读的摸鱼模式，太逗了",
      "url": "https://siwei.li/qq-reading-word-mode/",
      "date": "2026-09-13"
    },
    {
      "name": "Shiina",
      "year": "23",
      "title": "直连NTT且完全无广告？日本GMO机房免费空间“タダサーバー”体验与申请指南",
      "url": "https://blog.shiina.fun/2026/09/13/colorfulbox-tadaserver-free-hosting-review/",
      "date": "2026-09-13"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "周六爬重庆南川金佛山徒步游记",
      "url": "https://ygz.ink/archives/5780.html",
      "date": "2026-09-13"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "WorkBuddy 没给 Ubuntu/Fedora 留下载入口？官方的 deb 和 rpm 都找到了",
      "url": "https://xingwangzhe.fun/posts/workbuddy-linux-deb-rpm/",
      "date": "2026-09-13"
    },
    {
      "name": "无名",
      "year": "24",
      "title": "微软 AI-901 考试经验分享",
      "url": "https://wuminboke.site/uncategorized/microsoft-ai-901-exam-experience/",
      "date": "2026-09-13"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "苏超第 12 轮结束了，抢八小组，只有扬州掉队了，不争气啊",
      "url": "https://yigeboke.com/article.php?id=49",
      "date": "2026-09-13"
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
