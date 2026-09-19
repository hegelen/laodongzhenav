// ==================== latest-articles.js ====================
// 抓取日期: 9/19/2026, 9:28:44 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "睡前练两张渐有手感",
      "url": "https://wlj.me/notes/sp-note-20260919-225308/",
      "date": "2026-09-19"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Disconcerting genre shift",
      "url": "https://seths.blog/2026/09/disconcerting-genre-shift/",
      "date": "2026-09-19"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "2004，一切都像是安排好了",
      "url": "https://www.tortorse.com/archives/everything-seemed-arranged-2004/",
      "date": "2026-09-19"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "准备连踩到国庆",
      "url": "https://ezo.biz/Diary/1683.html",
      "date": "2026-09-19"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "再见，盒马奥莱",
      "url": "http://www.xlanda.net/posts/22479",
      "date": "2026-09-19"
    },
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "汽车是否正在悄悄重塑中国？",
      "url": "https://doyj.com/2026/09/19/%e6%b1%bd%e8%bd%a6%e6%98%af%e5%90%a6%e6%ad%a3%e5%9c%a8%e6%82%84%e6%82%84%e9%87%8d%e5%a1%91%e4%b8%ad%e5%9b%bd%ef%bc%9f/",
      "date": "2026-09-19"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "https利弊(5)：技术上的定向安全与垄断本质",
      "url": "http://www.auiou.com/relevant/00002199.jsp",
      "date": "2026-09-19"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "EC2 的 T 系列推出了新型號",
      "url": "https://blog.gslin.org/archives/2026/09/19/13209/ec2-%e7%9a%84-t-%e7%b3%bb%e5%88%97%e6%8e%a8%e5%87%ba%e4%ba%86%e6%96%b0%e5%9e%8b%e8%99%9f/",
      "date": "2026-09-18"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "手机",
      "url": "https://ltmltm.cn/bk/1494.html",
      "date": "2026-09-19"
    }
  ],
  "2009": [
    {
      "name": "老卫",
      "year": "09",
      "title": "在Ubuntu中安装Kubernetes并使用GitLab CI进行部署",
      "url": "https://waylau.com/install-kubernetes-on-ubuntu/",
      "date": "2026-09-19"
    },
    {
      "name": "老卫（柳伟卫）的技术站",
      "year": "09",
      "title": "在Ubuntu中安装Kubernetes并使用GitLab CI进行部署",
      "url": "https://waylau.com/install-kubernetes-on-ubuntu/",
      "date": "2026-09-19"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "能修则修",
      "url": "https://zhou.ge/2026-09-19.html",
      "date": "2026-09-19"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.9.19",
      "url": "https://www.linyufan.com/post/6032",
      "date": "2026-09-19"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "服务器 CPU 占用异常排查实录：从误杀 Wordfence 到抓出 FreshRSS 死循环",
      "url": "https://www.tjsky.net/tutorial/1971",
      "date": "2026-09-19"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "近两日在开发Typecho文章打赏插件，提前预告文章打赏插件特点功能演示",
      "url": "https://www.bufanz.com/20260919939.html",
      "date": "2026-09-19"
    },
    {
      "name": "HEMING",
      "year": "20",
      "title": "Neburst S3N-1C2G TPE VPS",
      "url": "https://heming.org/2833.html",
      "date": "2026-09-19"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "近来的一些碎碎念",
      "url": "https://www.laughingzhu.cn/posts/daily-2026-09-19",
      "date": "2026-09-19"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "跑跑卡丁车国服：从多开到劫持登录的逆向笔记",
      "url": "https://lb5.net/274.html",
      "date": "2026-09-19"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "侠探杰克第四季",
      "url": "https://jefftay.com/movies/reacher-season-4",
      "date": "2026-09-19"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "审美的思考",
      "url": "https://www.immarcus.com/blog/thoughts-on-aesthetics",
      "date": "2026-09-19"
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
