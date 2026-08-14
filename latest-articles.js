// ==================== latest-articles.js ====================
// 抓取日期: 8/14/2026, 7:56:54 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Emotional hygiene",
      "url": "https://seths.blog/2026/08/emotional-hygiene/",
      "date": "2026-08-14"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：AI时代打开个人IP升级的秘诀",
      "url": "https://www.ufoer.com/post/14429.html",
      "date": "2026-08-14"
    },
    {
      "name": "愆伏",
      "year": "03",
      "title": "第一次走进互联网",
      "url": "https://www.tortorse.com/archives/first-step-into-the-internet/",
      "date": "2026-08-14"
    },
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 408 期）：你需要知道的 AI 缓存知识",
      "url": "http://www.ruanyifeng.com/blog/2026/08/weekly-issue-408.html",
      "date": "2026-08-13"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "牛磺酸戒断反应",
      "url": "https://ezo.biz/Diary/1577.html",
      "date": "2026-08-14"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "灵魂插件 MCP",
      "url": "https://kaix.in/2026/0814/",
      "date": "2026-08-14"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "刚刚，DeepSeek开源Harness：把Agent拆成插件，一切皆可换",
      "url": "https://tonybai.com/2026/08/14/deepseek-harness-everything-is-a-plugin/",
      "date": "2026-08-14"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "拉马努金法",
      "url": "http://www.xlanda.net/posts/22398",
      "date": "2026-08-14"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "本地化部署大模型工具 llama.cpp",
      "url": "https://www.biaodianfu.com/llama-cpp/",
      "date": "2026-08-14"
    },
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "还在reduce求和吗？该使用Math.sumPrecise()方法啦",
      "url": "https://www.zhangxinxu.com/wordpress/2026/08/js-math-sumprecise/",
      "date": "2026-08-14"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "今天最火的是 dsh （DeepSeek Harness）-20260814",
      "url": "https://guoxiaoli.com/post/674.html",
      "date": "2026-08-14"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "林羽凡笔记的mcp api_key增加了复制全部，优化小程序目录结构显示样式",
      "url": "https://www.linyufan.com/post/5952",
      "date": "2026-08-14"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "【8月更新】每月送258天网易云音乐黑胶VIP会员，先到先得！",
      "url": "https://www.dujin.org/17813.html",
      "date": "2026-08-14"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 엘리멘터 프로 구독 갱신 취소 방법",
      "url": "https://www.thewordcracker.com/basic/%ec%97%98%eb%a6%ac%eb%a9%98%ed%84%b0-%ed%94%84%eb%a1%9c-%ea%b5%ac%eb%8f%85-%ea%b0%b1%ec%8b%a0-%ec%b7%a8%ec%86%8c-%eb%b0%a9%eb%b2%95/",
      "date": "2026-08-14"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "自动化脚本不光 bash，还有 make、just、mise...",
      "url": "https://www.ccgxk.com/emlog_dev/844.html",
      "date": "2026-08-14"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "逻辑自洽不等于事实完整",
      "url": "https://blog.solazy.me/20260814/",
      "date": "2026-08-14"
    },
    {
      "name": "紫塞",
      "year": "19",
      "title": "从1996年的“9600bps猫”说起：顶级的企业管理，本质上是一场开源",
      "url": "https://zisai.com/posts/management-as-open-source/",
      "date": "2026-08-14"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-14",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-14",
      "date": "2026-08-14"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "如何在零点击时代提升语义搜索：2026年专家SEO技巧",
      "url": "https://www.bailuze.com/24333.html",
      "date": "2026-08-14"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "制造消费",
      "url": "https://www.immarcus.com/blog/manufactured-spending",
      "date": "2026-08-14"
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
