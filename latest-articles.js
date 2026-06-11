// ==================== latest-articles.js ====================
// 抓取日期: 6/11/2026, 12:46:30 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "ntfy.sh 是什么",
      "url": "https://wlj.me/posts/20260611-ntfy-sh/",
      "date": "2026-06-11"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Values capture",
      "url": "https://seths.blog/2026/06/values-capture-2/",
      "date": "2026-06-11"
    }
  ],
  "2004": [
    {
      "name": "龙哥",
      "year": "04",
      "title": "服务器安装Debian13和WP-Panel教程",
      "url": "https://long.ge/18069.html",
      "date": "2026-06-11"
    }
  ],
  "2005": [
    {
      "name": "春田",
      "year": "05",
      "title": "１０７８．「働く」について考える　(５)レンガ職人の話",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/06/post-9dbbab.html",
      "date": "2026-06-10"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "二宝的鸡毛蒜皮",
      "url": "https://acevs.com/5031/",
      "date": "2026-06-11"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "2026年美加墨世界杯来了，好消息是央视全程免费直播（附完全观赛指南）",
      "url": "https://www.munue.com/801.html",
      "date": "2026-06-11"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "华严经三题：回向、因缘和合与穿越的秘密",
      "url": "https://www.iliu.org/posts/huayan-jing-huixiang-yinyuan-su-hui/",
      "date": "2026-06-11"
    }
  ],
  "2010": [
    {
      "name": "limboy",
      "year": "10",
      "title": "微信是一个奇葩",
      "url": "https://limboy.me/posts/wechat-is-abnormal",
      "date": "2026-06-11"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我去，这些个大厂，接口还没用热乎呢，就下线接口功能了。",
      "url": "https://www.linyufan.com/post/5848",
      "date": "2026-06-11"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "ZMark 1.0.0正式版来了，AI检索功能已就绪",
      "url": "https://blog.xiaoz.org/archives/23055",
      "date": "2026-06-11"
    },
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "代码增强插件 — PluginCodeEnhance 发布",
      "url": "https://wuqishi.com/archives/halo-plugin-code-enhance-intro",
      "date": "2026-06-11"
    }
  ],
  "2015": [
    {
      "name": "elmagnifico",
      "year": "15",
      "title": "AI自进化",
      "url": "https://elmagnifico.tech/2026/06/11/AI-Self-Iteration/",
      "date": "2026-06-10"
    },
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 UpdraftPlus 백업 복원 플러그인 보안 업데이트 - 인증 우회 취약점 해결",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-updraftplus-%ed%94%8c%eb%9f%ac%ea%b7%b8%ec%9d%b8-%eb%b3%b4%ec%95%88-%ec%97%85%eb%8d%b0%ec%9d%b4%ed%8a%b8/",
      "date": "2026-06-11"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "我写了个 Chrome 扩展「Smart Tab Pinner」解决标签页总被误关的问题",
      "url": "https://www.tjsky.net/best-software/1642",
      "date": "2026-06-11"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "两个朋友做跨境独立站编程出海的经历、找词技巧",
      "url": "https://www.ccgxk.com/codeother/774.html",
      "date": "2026-06-10"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "解决阿里云邮件推送被微软屏蔽的问题",
      "url": "https://www.imcry.vip/post/2026-6-11-1133/",
      "date": "2026-06-11"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-11",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-11",
      "date": "2026-06-11"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "公众号差点被封",
      "url": "https://ygz.ink/archives/5206.html",
      "date": "2026-06-11"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "WordPress网站流量统计查看访问量的方法",
      "url": "https://www.bailuze.com/25243.html",
      "date": "2026-06-11"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "喵糖布丁｜把甜软画进抱枕里",
      "url": "https://zhouayuan.com/post/53.html",
      "date": "2026-06-10"
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
