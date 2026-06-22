// ==================== latest-articles.js ====================
// 抓取日期: 6/22/2026, 9:39:28 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Blogs, traffic, and Google",
      "url": "https://seths.blog/2026/06/blogs-traffic-and-google/",
      "date": "2026-06-22"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "祈福新邨的穿梭巴士",
      "url": "http://www.xlanda.net/posts/22280",
      "date": "2026-06-22"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "屠榜 CNCF！为什么在云原生时代，Go 语言能把 Java、C++ 和 Rust 堵在门外？",
      "url": "https://tonybai.com/2026/06/22/why-is-go-dominating-in-cncf-landscape/",
      "date": "2026-06-21"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "MediaWiki 上的 colspan=\"100%\"",
      "url": "https://blog.gslin.org/archives/2026/06/22/13079/mediawiki-%e4%b8%8a%e7%9a%84-colspan100/",
      "date": "2026-06-22"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "看徒手抓龙虾",
      "url": "https://acevs.com/5054/",
      "date": "2026-06-22"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "偷懒致累",
      "url": "https://www.munue.com/802.html",
      "date": "2026-06-22"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今天给“林羽凡笔记”系统的界面重新优化了，对普通消息的界面做了优化，增加了圆角",
      "url": "https://www.linyufan.com/post/5864",
      "date": "2026-06-22"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "WordPress-Riven主题正式发售了！！！",
      "url": "https://zhoutian.com/385.html",
      "date": "2026-06-22"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "AI 时代前端写 UI 必备的 49 种 UI 风格！",
      "url": "https://www.ccgxk.com/front-end/786.html",
      "date": "2026-06-22"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "GitHub一周热点",
      "url": "https://qiukui-note.happy365.day/20260622/github-trends-weekly/",
      "date": "2026-06-22"
    },
    {
      "name": "阳",
      "year": "18",
      "title": "宝塔面板使用CF代理遇到的问题以及解决办法。",
      "url": "https://yooer.me/848.html",
      "date": "2026-06-22"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "晚上八点，突袭麦当劳",
      "url": "https://www.imcry.vip/post/2026-6-22-2143/",
      "date": "2026-06-22"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "也是在深圳吃上了 69 一份的麻辣烫",
      "url": "https://usj.cc/20260622203820.html",
      "date": "2026-06-22"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "三种谋生方式",
      "url": "https://www.wsh233.cn/post/三种谋生方式",
      "date": "2026-06-22"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "我用AI写插件翻车了，留言区炸了，最近还是消停点吧",
      "url": "https://9sb.net/archives/i-crashed-my-plugin-using-ai-and-the-comment-section-exploded-its-better-to-calm-down-recent.html",
      "date": "2026-06-22"
    }
  ],
  "2022": [
    {
      "name": "zhecydn",
      "year": "22",
      "title": "我的wp网站优化and美化（四）",
      "url": "https://blog.zhecydn.asia/archives/2030",
      "date": "2026-06-22"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "记账才是成年人的清醒",
      "url": "https://ygz.ink/archives/5333.html",
      "date": "2026-06-22"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "用户体验在网络营销中的角色",
      "url": "https://www.bailuze.com/24166.html",
      "date": "2026-06-22"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "如何验证对方是不是Chongxi我本人",
      "url": "https://xice.cx/posts/VerifyChongxi/",
      "date": "2026-06-21"
    }
  ],
  "2025": [
    {
      "name": "青萍",
      "year": "25",
      "title": "Hermes v0.17.0 最值得升级的理由：一个进程，管所有 Profile",
      "url": "https://blog.lusyoe.com/article/hermes-v017-gateway-multiplex",
      "date": "2026-06-23"
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
