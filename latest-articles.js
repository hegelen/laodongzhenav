// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-06 00:50:42
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Create a handoff doc",
      "url": "https://seths.blog/2026/10/create-a-handoff-doc/",
      "date": "2026-10-05"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI 开始研究 AI：剑桥重磅报告警告，一场「智能爆炸」可能正在逼近！",
      "url": "https://tonybai.com/2026/10/06/intelligence-explosion-ai-rd-automation/",
      "date": "2026-10-05"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Cloudflare 拋出來的 Web Search API 以及 Ceramic.ai",
      "url": "https://blog.gslin.org/archives/2026/10/05/13245/cloudflare-%e6%8b%8b%e5%87%ba%e4%be%86%e7%9a%84-web-search-api-%e4%bb%a5%e5%8f%8a-ceramic-ai/",
      "date": "2026-10-05"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "更新提示：《为什么不要定义Web 3.0？》新增",
      "url": "http://www.auiou.com/relevant/00010009.jsp",
      "date": "2026-10-06"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "继续运动",
      "url": "https://acevs.com/5274/",
      "date": "2026-10-05"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "入蜀记day3 departure",
      "url": "https://www.seis-jun.xyz/blog/2026-10-05-day3-departure.html",
      "date": "2026-10-05"
    },
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "换锁",
      "url": "https://ltmltm.cn/bk/1497.html",
      "date": "2026-10-05"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "Ubuntu 26.04 安装 Docker：阿里云、腾讯云镜像源与基础安全配置",
      "url": "https://soulteary.com/2026/10/06/install-docker-on-ubuntu-26-04-with-aliyun-and-tencent-cloud-mirrors-and-basic-security.html",
      "date": "2026-10-05"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || 对博客主题进行了二次优化",
      "url": "https://www.yishu.pro/248.html",
      "date": "2026-10-05"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "国庆杂记1",
      "url": "https://www.iliu.org/posts/guoqing-zaji-1/",
      "date": "2026-10-05"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "typecho：抵御垃圾评论的偏方",
      "url": "https://www.mmtx.net/1190.html",
      "date": "2026-10-05"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 오퍼코드 캐시 메모리 부족 문제? OPcache 적정 설정값 추천",
      "url": "https://www.thewordcracker.com/intermediate/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ec%98%a4%ed%8d%bc%ec%bd%94%eb%93%9c-%ec%ba%90%ec%8b%9c-%eb%a9%94%eb%aa%a8%eb%a6%ac-%eb%b6%80%ec%a1%b1/",
      "date": "2026-10-05"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "为了睡好觉，只能做独立开发者",
      "url": "https://www.ccgxk.com/codeother/906.html",
      "date": "2026-10-05"
    }
  ],
  "2018": [
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "十年之约来信",
      "url": "https://yxgoa.cn/index.php/archives/1030/",
      "date": "2026-10-05"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "工作的最后一天9.30",
      "url": "https://liuqingwushui.top/archives/200/",
      "date": "2026-10-05"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "在WAF Guard插件中发现又一个博客聚合平台——FindBlog",
      "url": "https://www.bufanz.com/20261005997.html",
      "date": "2026-10-05"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "欢迎，老Z！再见，老Z！",
      "url": "https://www.imcry.vip/post/2026-10-5-1432/",
      "date": "2026-10-05"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-10-05",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-05",
      "date": "2026-10-05"
    },
    {
      "name": "Dayu",
      "year": "21",
      "title": "形式熟悉，内容陌生，味道惊喜",
      "url": "https://anotherdayu.com/9891/",
      "date": "2026-10-05"
    }
  ],
  "2026": [
    {
      "name": "安迪",
      "year": "26",
      "title": "想试水油管自媒体",
      "url": "https://i55.top/archives/547/",
      "date": "2026-10-05"
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
