// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-07 23:36:38
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "假期终结",
      "url": "https://ezo.biz/Diary/1728.html",
      "date": "2026-10-07"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "我要免费送妳一支花",
      "url": "https://kaix.in/2026/1007/",
      "date": "2026-10-07"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "谁说云原生过时了？Kubernetes 等主流项目正在为 Agent 重做“地基”",
      "url": "https://tonybai.com/2026/10/08/who-says-cloud-native-is-outdated-agent-foundation/",
      "date": "2026-10-07"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "价值意义",
      "url": "https://acevs.com/5278/",
      "date": "2026-10-07"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "OpenSSH 10.6 的更新",
      "url": "https://blog.gslin.org/archives/2026/10/07/13254/openssh-10-6-%e7%9a%84%e6%9b%b4%e6%96%b0/",
      "date": "2026-10-07"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "吃得苦中苦方为人上人",
      "url": "https://www.seis-jun.xyz/blog/2026-10-07-stand-hardwork-be-outstanding.html",
      "date": "2026-10-07"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "Ubuntu 云服务器实践：安全部署文件存储、下载与代码托管",
      "url": "https://soulteary.com/2026/10/07/ubuntu-cloud-server-practice-secure-file-storage-downloads-and-code-hosting.html",
      "date": "2026-10-07"
    },
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "算账才是运营一人公司该具备的核心能力",
      "url": "https://yanlinlin.cn/2026/10/07/bookkeeping-core-capability-one-person-company/",
      "date": "2026-10-07"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "博物馆见闻：故宫博物院《雨中紫禁城》",
      "url": "https://me.xu19.com/museum-notes-palace-museum-forbidden-city-in-the-rain/",
      "date": "2026-10-07"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.7",
      "url": "https://www.linyufan.com/post/6076",
      "date": "2026-10-07"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 AI 에이전트 시대: Elementor MCP vs Divi AI 에이전트 비교",
      "url": "https://www.thewordcracker.com/basic/elementor-mcp-vs-divi-ai-%ec%97%90%ec%9d%b4%ec%a0%84%ed%8a%b8-%eb%b9%84%ea%b5%90/",
      "date": "2026-10-07"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之宁可死在赚钱的路上，也不躺在贫穷家里！",
      "url": "https://www.ccgxk.com/codeother/908.html",
      "date": "2026-10-07"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "难绷！WAF Guard插件自动封禁恶意IP地址自动发送邮件过于频繁，邮箱的发信服务受限",
      "url": "https://www.bufanz.com/202610071006.html",
      "date": "2026-10-07"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "核心影视，优化后的播放页面长这样，按钮、选集、线路全安排明白",
      "url": "https://9sb.net/archives/core-movies-and-tv-shows-the-optimized-playback-page-length-is-like-this-with-clear-arrangement-of-buttons-selections-and-routes.html",
      "date": "2026-10-07"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-10-07",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-07",
      "date": "2026-10-07"
    },
    {
      "name": "Robes",
      "year": "21",
      "title": "我猜你一定也会想念我",
      "url": "https://robes.xin/1223.html",
      "date": "2026-10-07"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "侠女内莉第一季",
      "url": "https://jefftay.com/movies/neagley-season-1",
      "date": "2026-10-08"
    },
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "博客装修记：再见了，所有的 jQuery",
      "url": "https://blog.mfwt.top/index.php/archives/1669/",
      "date": "2026-10-07"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "欢迎使用 Typecho",
      "url": "https://liyinwaihe.com/index.php/archives/1/",
      "date": "2026-10-07"
    },
    {
      "name": "Marcus",
      "year": "25",
      "title": "断开连接 = 拯救世界",
      "url": "https://www.immarcus.com/blog/just-disconnect",
      "date": "2026-10-07"
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
