// ==================== latest-articles.js ====================
// 抓取日期: 7/3/2026, 8:25:36 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "朋友里藏着个方脑机器人",
      "url": "https://wlj.me/notes/sp-note-20260703-103526/",
      "date": "2026-07-03"
    }
  ],
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "长安公园荷花",
      "url": "https://dongjunke.cn/posts/2026/07/03/6858.html",
      "date": "2026-07-03"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Operator error",
      "url": "https://seths.blog/2026/07/operator-error/",
      "date": "2026-07-03"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 402 期）：我在智念 AI 的日子（小说）",
      "url": "http://www.ruanyifeng.com/blog/2026/07/weekly-issue-402.html",
      "date": "2026-07-02"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "喂猫",
      "url": "http://www.xlanda.net/posts/22305",
      "date": "2026-07-03"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "别把“容易”当“简单”：Gin 框架作者撰文揭秘 88k Star 背后的架构哲学",
      "url": "https://tonybai.com/2026/07/04/build-gin-simple-over-easy/",
      "date": "2026-07-03"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "冤枉了对手",
      "url": "https://acevs.com/5079/",
      "date": "2026-07-03"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "夜晚靓歌(13)：SNH48做客广州电台",
      "url": "http://www.auiou.com/relevant/00002165.jsp",
      "date": "2026-07-03"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "“林羽凡笔记”Web端Ai对话中，增加图片上传功能",
      "url": "https://www.linyufan.com/post/5878",
      "date": "2026-07-03"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "如何设计良好的 API",
      "url": "https://www.ccgxk.com/emlog_dev/797.html",
      "date": "2026-07-03"
    }
  ],
  "2019": [
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "WordPress 如何单独管理产品、案例和解决方案？CPT UI 插件使用教程",
      "url": "https://blog.naibabiji.com/skill/cpt-ui-tutorial.html",
      "date": "2026-07-03"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "写在“美莎克”之前",
      "url": "https://www.imcry.vip/post/2026-7-3-1627/",
      "date": "2026-07-03"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "机房被打，还在恢复中",
      "url": "https://www.dalao.net/thread-60558.htm",
      "date": "2026-07-03"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-03",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-03",
      "date": "2026-07-03"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "腾讯云 EdgeOne  国内站 福利 与之前兑换没冲突 速度上车",
      "url": "https://9sb.net/archives/tencent-cloud-edgeone-domestic-station-benefits-no-conflict-with-previous-redemptions-speed-on-board.html",
      "date": "2026-07-03"
    }
  ],
  "2023": [
    {
      "name": "小归客",
      "year": "23",
      "title": "用秒哒做了一个“typecho手机端”",
      "url": "https://xgk.pw/archives/301/",
      "date": "2026-07-03"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "📷洪崖洞单反摄影练习",
      "url": "https://ygz.ink/archives/5432.html",
      "date": "2026-07-03"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "x402：一个来自27年前的状态码能救活被ai榨干的「人类网站」吗",
      "url": "https://xice.cx/posts/x402OverCloudflare/",
      "date": "2026-07-03"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "恐怖的烤鸡翅",
      "url": "https://www.immarcus.com/blog/spooky-grilled-chicken-wings",
      "date": "2026-07-03"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "说说：葡萄牙送走克罗地亚，C罗留下继续征战，莫德里奇遗憾告别\r\n到了淘汰赛阶…",
      "url": "https://yigeboke.com/shuoshuo.php#shuo_33",
      "date": "2026-07-03"
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
