// ==================== latest-articles.js ====================
// 抓取日期: 7/29/2026, 8:22:13 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Eager to give up agency",
      "url": "https://seths.blog/2026/07/eager-to-give-up-agency/",
      "date": "2026-07-29"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "桌底抽屉高度碎碎念",
      "url": "http://www.xlanda.net/posts/22363",
      "date": "2026-07-29"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Hacker News 上看到運動褲用的繩結 Slipped Lapp Knot",
      "url": "https://blog.gslin.org/archives/2026/07/29/13130/hacker-news-%e4%b8%8a%e7%9c%8b%e5%88%b0%e9%81%8b%e5%8b%95%e8%a4%b2%e7%94%a8%e7%9a%84%e7%b9%a9%e7%b5%90-slipped-lapp-knot/",
      "date": "2026-07-29"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "晾碗架",
      "url": "https://acevs.com/5134/",
      "date": "2026-07-29"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "详列东野圭吾106部作品完整清单",
      "url": "https://www.munue.com/810.html",
      "date": "2026-07-29"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "女儿学画画1｜素描-相机中荷花",
      "url": "https://me.xu19.com/daughter-learning-to-draw-part-1-sketch-lotus-in-camera/",
      "date": "2026-07-29"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "Screen.isExtended、getScreenDetails与多显示器开发",
      "url": "https://www.zhangxinxu.com/wordpress/2026/07/windows-getscreendetails-isextended/",
      "date": "2026-07-29"
    }
  ],
  "2011": [
    {
      "name": "小癞子",
      "year": "11",
      "title": "泽西岛的J车牌: 熟悉的英国味, 不一样的海岛风情",
      "url": "https://justyy.com/archives/72298",
      "date": "2026-07-29"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今天没有减肥餐，买了一套武林秘籍",
      "url": "https://www.linyufan.com/post/5922",
      "date": "2026-07-29"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "智谱GLM模型免费2000万Tokens算力，最高每月可得2亿",
      "url": "https://www.dujin.org/23801.html",
      "date": "2026-07-29"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 악성 봇 차단하여 서버 과부하 방지하기",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ec%95%85%ec%84%b1-%eb%b4%87-%ec%b0%a8%eb%8b%a8%ed%95%98%ec%97%ac-%ec%84%9c%eb%b2%84-%ea%b3%bc%eb%b6%80%ed%95%98-%eb%b0%a9%ec%a7%80/",
      "date": "2026-07-29"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "解构Scaling Law：优化、架构、数据的三重奏",
      "url": "https://kexue.fm/archives/11833",
      "date": "2026-07-29"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "字间 260729",
      "url": "https://www.suiyan.cc/blog/20260729193734",
      "date": "2026-07-29"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "向量数据库，ChromaDB 和 Qdrant 到底怎么选？",
      "url": "https://www.ccgxk.com/codeother/825.html",
      "date": "2026-07-29"
    }
  ],
  "2019": [
    {
      "name": "紫塞",
      "year": "19",
      "title": "父亲从江苏走来：留给我的精神故乡",
      "url": "https://zisai.com/posts/shenguohui/",
      "date": "2026-07-29"
    },
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "AI 写给 AI 看：一种新时代形式主义",
      "url": "https://shitao5.org/posts/ai-era-formalism/",
      "date": "2026-07-29"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "我的giffgaff卡也拉闸了【余额已捐款】",
      "url": "https://www.dalao.net/thread-61768.htm",
      "date": "2026-07-29"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "标题标签：H1、H2 和 H3 HTML 标题标签的简单（但完整）指南，适用于SEO",
      "url": "https://www.bailuze.com/24277.html",
      "date": "2026-07-29"
    }
  ],
  "2024": [
    {
      "name": "ImQi1",
      "year": "24",
      "title": "蜘蛛侠4，咋说呢，还是挺烂的",
      "url": "https://imqi1.com/content/note/1019",
      "date": "2026-07-29"
    },
    {
      "name": "三叔",
      "year": "24",
      "title": "苹果邮箱转outlook脚本",
      "url": "https://www.sanshu.cn/arc/263.html",
      "date": "2026-07-29"
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
