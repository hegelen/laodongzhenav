// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-25 21:37:57
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "日子难过天天过",
      "url": "https://ezo.biz/Diary/1773.html",
      "date": "2026-10-25"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 代码也能像数学定理一样被证明？AI 编程时代，形式化验证正在补上最后一块拼图",
      "url": "https://tonybai.com/2026/10/25/go-formal-verification-gobra-viper-ai/",
      "date": "2026-10-24"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "五花大绑",
      "url": "https://www.xlanda.net/posts/22572",
      "date": "2026-10-25"
    }
  ],
  "2005": [
    {
      "name": "当下",
      "year": "05",
      "title": "1-10月购物日志",
      "url": "https://blog.fueis.com/26-beauty",
      "date": "2026-10-25"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "一日峡江出逃｜坐上巫山到巴东的小红船，赴一场巫峡之约",
      "url": "https://zhujay.com/blog/blog_detail.html?id=1287",
      "date": "2026-10-25"
    }
  ],
  "2008": [
    {
      "name": "河马",
      "year": "08",
      "title": "阿里云老的香港ecs， 47.244开头的IP测试",
      "url": "https://www.iamhippo.com/2026-10/1970.html",
      "date": "2026-10-25"
    }
  ],
  "2009": [
    {
      "name": "孙琪峥",
      "year": "09",
      "title": "n9vihetnjs2ov9k",
      "url": "https://www.sunqizheng.com/blog/2706.html",
      "date": "2026-10-25"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "强强对话再度折戟，遇强则弱，泰山目送蓉城加冕",
      "url": "https://www.mmtx.net/1195.html",
      "date": "2026-10-25"
    },
    {
      "name": "雅余",
      "year": "10",
      "title": "日常漫步 Vol.26 之永丰古树公园",
      "url": "https://yayu.net/6266.html",
      "date": "2026-10-25"
    }
  ],
  "2017": [
    {
      "name": "arun",
      "year": "17",
      "title": "Marathoning on a Budget",
      "url": "https://arun.is/blog/marathoning-on-a-budget/",
      "date": "2026-10-25"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "实用！做AI短剧必备的3D影城搭建工具！",
      "url": "https://www.ccgxk.com/emlog_dev/932.html",
      "date": "2026-10-25"
    }
  ],
  "2018": [
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "人生路漫漫，云奚常相伴",
      "url": "https://yxgoa.cn/index.php/archives/26/",
      "date": "2026-10-25"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "「做个人」",
      "url": "https://blog.solazy.me/20261025/",
      "date": "2026-10-25"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "归途",
      "url": "https://liuqingwushui.top/archives/205/",
      "date": "2026-10-25"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "【宝塔】PHP国内独家兼补丁包上线，PHP 严重安全漏洞修复及防护方案",
      "url": "https://www.dalao.net/thread-65435.htm",
      "date": "2026-10-25"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "蜻蜓A9-Plus鼠标的使用体验",
      "url": "https://www.imcry.vip/post/2026-10-25-1713/",
      "date": "2026-10-25"
    },
    {
      "name": "yihong0618",
      "year": "20",
      "title": "xintao",
      "url": "https://blog.yihong0618.me/posts/issue-349/",
      "date": "2026-10-25"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "郁闷的时候买了点酒",
      "url": "https://usj.cc/20261025172451.html",
      "date": "2026-10-25"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "岗位保护",
      "url": "https://www.wsh233.cn/post/岗位保护",
      "date": "2026-10-25"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.10.25 博客阅读周荐 - Hi 我劉昕",
      "url": "https://www.immarcus.com/blog/weekly-20261025",
      "date": "2026-10-25"
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
