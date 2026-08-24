// ==================== latest-articles.js ====================
// 抓取日期: 8/24/2026, 7:40:57 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "日拱一卒的菜鸟",
      "url": "https://wlj.me/notes/sp-note-20260824-224652/",
      "date": "2026-08-24"
    }
  ],
  "2002": [
    {
      "name": "不吐不快",
      "year": "02",
      "title": "为雾凇拼音添加中英互译释义",
      "url": "https://mianao.info/add-chinese-english-translation-to-rime-ice/",
      "date": "2026-08-24"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "在浙大的走廊里，我看见了1947年的爷爷",
      "url": "https://www.tortorse.com/archives/zhejiang-university-1947-grandfather/",
      "date": "2026-08-24"
    },
    {
      "name": "王通",
      "year": "03",
      "title": "王通：个人使用AI的五个境界：多数人还停留在第一层",
      "url": "https://www.ufoer.com/post/14469.html",
      "date": "2026-08-24"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "被垃圾轰炸",
      "url": "http://www.xlanda.net/posts/22419",
      "date": "2026-08-24"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "眼神",
      "url": "https://ezo.biz/Diary/1608.html",
      "date": "2026-08-24"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "试玩三国志5",
      "url": "https://acevs.com/5187/",
      "date": "2026-08-24"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "涂油漆",
      "url": "https://ltmltm.cn/bk/1491.html",
      "date": "2026-08-24"
    },
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "阿里云免费 DNS 解析量超限怎么办？",
      "url": "https://www.munue.com/813.html",
      "date": "2026-08-24"
    }
  ],
  "2008": [
    {
      "name": "有氧呼吸",
      "year": "08",
      "title": "一个极简的家庭微博客系统",
      "url": "https://www.oxy.one/2026/08/blog-post.html",
      "date": "2026-08-24"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "深度学习激活函数：从 Sigmoid 到 SwiGLU",
      "url": "https://www.biaodianfu.com/deep-learning-activation-functions/",
      "date": "2026-08-24"
    }
  ],
  "2015": [
    {
      "name": "网工格物",
      "year": "15",
      "title": "PVE 超融合基础设施 - 3.PVE 配置分布式共享存储Ceph",
      "url": "https://songxwn.com/PVE-HCI-3/",
      "date": "2026-08-24"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "开发 AI 应用，需要注意的 6 件事",
      "url": "https://www.ccgxk.com/emlog_dev/857.html",
      "date": "2026-08-24"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "观《去你的岛》",
      "url": "https://liuqingwushui.top/archives/188/",
      "date": "2026-08-24"
    }
  ],
  "2020": [
    {
      "name": "Battle Le",
      "year": "20",
      "title": "香港汇丰 Pulse 银联双币钻石信用卡",
      "url": "https://battlele.com/hsbc-pulse/",
      "date": "2026-08-24"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "BSide:Olivia Lin把资源释放到了C盘",
      "url": "https://www.imcry.vip/post/2026-8-24-1046/",
      "date": "2026-08-24"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-24",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-24",
      "date": "2026-08-24"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "从 WordPress 到 Quartz",
      "url": "https://jefftay.com/blog-posts/from-wordpress-to-quartz",
      "date": "2026-08-24"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "诈骗网站 YouTube.com",
      "url": "https://www.immarcus.com/blog/youtube-com-a-scam-website",
      "date": "2026-08-24"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "踩坑记录｜产品视频背景音乐侵权，收到线上调解通知",
      "url": "https://zhouayuan.com/post/58.html",
      "date": "2026-08-24"
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
