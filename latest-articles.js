// ==================== latest-articles.js ====================
// 抓取日期: 6/26/2026, 8:55:09 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "放下工作二十天无事发生",
      "url": "https://wlj.me/notes/sp-note-20260626-095642/",
      "date": "2026-06-26"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "You don’t need a better camera",
      "url": "https://seths.blog/2026/06/you-dont-need-a-better-camera/",
      "date": "2026-06-26"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 401 期）：如何赚到10亿美元",
      "url": "http://www.ruanyifeng.com/blog/2026/06/weekly-issue-401.html",
      "date": "2026-06-26"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "偿还十年技术债：深度拆解 Go 1.27 的 GODEBUG 强力清理计划",
      "url": "https://tonybai.com/2026/06/26/policy-for-removing-godebug-flags/",
      "date": "2026-06-26"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "没完没了",
      "url": "http://www.xlanda.net/posts/22288",
      "date": "2026-06-26"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "小登中登老登股票行业分类",
      "url": "https://acevs.com/5063/",
      "date": "2026-06-26"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "纷扰春夏时",
      "url": "https://yishu-life.com/index.php/archives/483.html",
      "date": "2026-06-26"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "软件 || 图集规范管理软件-文档管理器使用教程2.0",
      "url": "https://www.yishu.pro/227.html",
      "date": "2026-06-26"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "第八章 国家里面的市场：中国制内市场的历史逻辑",
      "url": "https://www.leitao.cn/10386.html",
      "date": "2026-06-26"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "发现折耳根很好吃呀",
      "url": "https://www.linyufan.com/post/5869",
      "date": "2026-06-26"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 보안 강화: 애플리케이션 비밀번호를 꺼야 하는 경우와 비활성화 방법",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ec%95%a0%ed%94%8c%eb%a6%ac%ec%bc%80%ec%9d%b4%ec%85%98-%eb%b9%84%eb%b0%80%eb%b2%88%ed%98%b8-%eb%b9%84%ed%99%9c%ec%84%b1%ed%99%94/",
      "date": "2026-06-26"
    },
    {
      "name": "Guyskk",
      "year": "15",
      "title": "AI 编程=控制系统：BeecodeAI 的设计原理",
      "url": "https://blog.guyskk.com/notes/ai-coding-control-system",
      "date": "2026-06-26"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "停止使用 JWT ！",
      "url": "https://www.ccgxk.com/emlog_dev/790.html",
      "date": "2026-06-26"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "二周目了",
      "url": "https://blog.verynb.net/posts/5172.html",
      "date": "2026-06-26"
    }
  ],
  "2023": [
    {
      "name": "鄢云峰",
      "year": "23",
      "title": "电脑端微信自带长截图功能啦！另外推荐几款截图工具~",
      "url": "https://yanyunfeng.com/article/93",
      "date": "2026-06-26"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "告别 Pagefind，用 Orama 实现静态博客的全文搜索",
      "url": "https://xingwangzhe.fun/posts/orama-search-replace-pagefind/",
      "date": "2026-06-26"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "家中网络「捉奸」记",
      "url": "https://xice.cx/posts/fuckPCDN/",
      "date": "2026-06-26"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "家中网络「捉奸」记",
      "url": "https://xice.cx/posts/fuckPCDN/",
      "date": "2026-06-26"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "英语角",
      "url": "https://www.immarcus.com/blog/english-corner",
      "date": "2026-06-26"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "这个blog，想换域名了",
      "url": "https://mzdsx.com/2026/06/26/%e8%bf%99%e4%b8%aablog%ef%bc%8c%e6%83%b3%e6%8d%a2%e5%9f%9f%e5%90%8d%e4%ba%86/",
      "date": "2026-06-26"
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
