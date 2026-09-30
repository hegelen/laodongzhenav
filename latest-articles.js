// ==================== latest-articles.js ====================
// 抓取日期: 9/30/2026, 11:00:32 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Extraction or generation",
      "url": "https://seths.blog/2026/09/extraction-or-generation/",
      "date": "2026-09-30"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "改变一切的是时间的缝隙",
      "url": "https://kaix.in/2026/0930/",
      "date": "2026-09-30"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "程序的及时作用",
      "url": "http://www.auiou.com/relevant/00002208.jsp",
      "date": "2026-09-30"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "換 Aeron 一代的海綿墊",
      "url": "https://blog.gslin.org/archives/2026/10/01/13235/%e6%8f%9b-aeron-%e4%b8%80%e4%bb%a3%e7%9a%84%e6%b5%b7%e7%b6%bf%e5%a2%8a/",
      "date": "2026-09-30"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "走路摇摆的可能原因找到",
      "url": "https://acevs.com/5264/",
      "date": "2026-09-30"
    },
    {
      "name": "春田",
      "year": "05",
      "title": "１０９４．「働く」について考える   (１３) 社会貢献の形",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/09/post-0dbcb3.html",
      "date": "2026-09-30"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "出差回来了，随便写几个字",
      "url": "https://yufm.com/662424.html",
      "date": "2026-09-30"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "一个视频彻底看懂CSS scroll-axis-lock none的作用",
      "url": "https://www.zhangxinxu.com/wordpress/2026/09/scroll-axis-lock-none/",
      "date": "2026-09-30"
    }
  ],
  "2012": [
    {
      "name": "Tokin",
      "year": "12",
      "title": "Typecho-Workers 安装指南",
      "url": "https://biji.io/2026/6096.html",
      "date": "2026-09-30"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "鸿蒙版“竹子记账”增加请开发者吃泡面功能",
      "url": "https://www.linyufan.com/post/6063",
      "date": "2026-09-30"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "请多使用国产模型，别痴迷海外模型",
      "url": "https://www.ccgxk.com/emlog_dev/902.html",
      "date": "2026-09-30"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "我的番茄小说，签约评估推荐",
      "url": "https://liuqingwushui.top/archives/199/",
      "date": "2026-09-30"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "二〇二六年九月记",
      "url": "https://www.imcry.vip/post/2026-9-30-822/",
      "date": "2026-09-30"
    },
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "LED 耳環誕生（二）：所以我說那個電流有多大？",
      "url": "https://blog.giveanornot.com/led-earring-2/",
      "date": "2026-09-30"
    },
    {
      "name": "EdNovas",
      "year": "20",
      "title": "Mondoze VPS",
      "url": "https://ednovas.xyz/2026/09/30/mondoze/",
      "date": "2026-09-30"
    }
  ],
  "2021": [
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "怀胎十月终如愿—妹妹出生啦！",
      "url": "https://www.ddf.im/index.php/2026/09/30/1269.html",
      "date": "2026-09-30"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "试了一下午白茶，学习途中慢慢入坑，心系水仙",
      "url": "https://9sb.net/archives/i-tried-white-tea-all-afternoon-and-slowly-fell-into-a-pit-on-the-way-to-study-with-my-heart-fixed-on-the-narcissus.html",
      "date": "2026-09-30"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO推广的方法有哪些？",
      "url": "https://www.bailuze.com/24455.html",
      "date": "2026-09-30"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "薯条驱动的 MCP",
      "url": "https://www.immarcus.com/blog/french-fries-driven-mcp",
      "date": "2026-09-30"
    }
  ],
  "2026": [
    {
      "name": "鹅嫂",
      "year": "26",
      "title": "thincoder 的成长路线（截至 2026-09-25）",
      "url": "https://www.esao.life/blog/posts/2026-09-30-thincoder成长路线.html",
      "date": "2026-09-30"
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
