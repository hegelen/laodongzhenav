// ==================== latest-articles.js ====================
// 抓取日期: 9/10/2026, 9:35:19 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Things are humming",
      "url": "https://seths.blog/2026/09/things-are-humming/",
      "date": "2026-09-10"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Mermaid最强挑战者“断奶”上位：D2官宣转型非营利，压箱底三年的TALA布局算法也开源了",
      "url": "https://tonybai.com/2026/09/10/d2-goes-nonprofit-tala-open-sourced/",
      "date": "2026-09-09"
    },
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "读书，其实就是一场“脑蒸馏”",
      "url": "https://doyj.com/2026/09/10/%e8%af%bb%e4%b9%a6%ef%bc%8c%e5%85%b6%e5%ae%9e%e5%b0%b1%e6%98%af%e4%b8%80%e5%9c%ba%e8%84%91%e8%92%b8%e9%a6%8f/",
      "date": "2026-09-10"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "诚实",
      "url": "https://ezo.biz/Cracker/1659.html",
      "date": "2026-09-10"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "支架设计(1)：船型开关固定",
      "url": "http://www.auiou.com/relevant/00002194.jsp",
      "date": "2026-09-10"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "伞绳绳结学习记录",
      "url": "https://acevs.com/5223/",
      "date": "2026-09-10"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Shopify 買 Tailwind Labs",
      "url": "https://blog.gslin.org/archives/2026/09/10/13195/shopify-%e8%b2%b7-tailwind-labs/",
      "date": "2026-09-10"
    }
  ],
  "2007": [
    {
      "name": "Yihui",
      "year": "07",
      "title": "Should I Ask for Sponsorship?",
      "url": "https://yihui.org/en/2026/09/sponsorship/",
      "date": "2026-09-10"
    },
    {
      "name": "朱小呆",
      "year": "07",
      "title": "方寸纸笔，藏着年少最温柔的书信时光",
      "url": "https://zhujay.com/blog/blog_detail.html?id=1278",
      "date": "2026-09-10"
    },
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "署名就够了",
      "url": "https://yanlinlin.cn/2026/09/10/attribution-is-enough/",
      "date": "2026-09-10"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "碎碎谈 · 9月10日 09:55",
      "url": "https://www.tjsky.net/shuoshuo/nfwfprmsgcg6raymin6ref",
      "date": "2026-09-10"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "AI 时代，只有足够短视的人，才有未来",
      "url": "https://www.ccgxk.com/codeother/879.html",
      "date": "2026-09-10"
    }
  ],
  "2019": [
    {
      "name": "Allen Hua",
      "year": "19",
      "title": "为我的比亚迪车机开发了一款音乐暂停器",
      "url": "https://hellodk.cn/post/1230",
      "date": "2026-09-10"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "待到秋来九月八，穿个短袖冻成虾",
      "url": "https://liuqingwushui.top/archives/194/",
      "date": "2026-09-10"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "用闲鱼续费了我的域名",
      "url": "https://www.imcry.vip/post/2026-9-10-2338/",
      "date": "2026-09-10"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "另一个地方",
      "url": "https://www.wsh233.cn/post/另一个地方",
      "date": "2026-09-10"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-10",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-10",
      "date": "2026-09-10"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "徒步重庆南山十二峰",
      "url": "https://ygz.ink/archives/5743.html",
      "date": "2026-09-10"
    }
  ],
  "2024": [
    {
      "name": "刘郎阁",
      "year": "24",
      "title": "微信小程序开发日常：记账工具",
      "url": "https://vjo.cc/2017",
      "date": "2026-09-10"
    },
    {
      "name": "无名",
      "year": "24",
      "title": "远程监控防潮柜湿度：购入 ZUZW 米家温湿度计",
      "url": "https://wuminboke.site/uncategorized/remote-monitor-dry-cabinet-humidity-zuzw-mijia/",
      "date": "2026-09-10"
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
