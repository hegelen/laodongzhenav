// ==================== latest-articles.js ====================
// 抓取日期: 6/16/2026, 9:52:35 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The relentless math of the long tail",
      "url": "https://seths.blog/2026/06/the-relentless-math-of-the-long-tail/",
      "date": "2026-06-16"
    },
    {
      "name": "不吐不快",
      "year": "02",
      "title": "KiCad 多版本文件转换器",
      "url": "https://mianao.info/KiCad-Multi-Version-Converter/",
      "date": "2026-06-16"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "为什么说“编译通过，就能运行”？Google 专家 Alice 揭秘 Rust 的工程美学与底层逻辑",
      "url": "https://tonybai.com/2026/06/16/why-if-it-compiles-it-runs-rust-engineering-aesthetics-and-logic/",
      "date": "2026-06-15"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "献血碎碎念",
      "url": "http://www.xlanda.net/posts/22266",
      "date": "2026-06-16"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "拆电钢琴",
      "url": "https://acevs.com/5041/",
      "date": "2026-06-16"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "全国节能宣传周",
      "url": "https://www.munue.com/energy-conservation-publicity-week.html",
      "date": "2026-06-16"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "怪事谈：办公室来了一群特殊访客",
      "url": "https://yishu-life.com/index.php/archives/482.html",
      "date": "2026-06-16"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "[推广]酷鸭数据端午活动6.16开启！限时4天！",
      "url": "https://laozhang.org/archives/4154.html",
      "date": "2026-06-16"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今天把websocket的登录流程打通了，简单总结一下",
      "url": "https://www.linyufan.com/post/5855",
      "date": "2026-06-16"
    }
  ],
  "2016": [
    {
      "name": "ximi",
      "year": "16",
      "title": "分享一个比较实用的网页favicon图标获取方法",
      "url": "https://www.ximi.me/post-6042.html",
      "date": "2026-06-16"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "用 AI 挑选 skill 头疼？聊聊四大 skill 仓库",
      "url": "https://www.ccgxk.com/codeother/780.html",
      "date": "2026-06-16"
    }
  ],
  "2019": [
    {
      "name": "李锋镝",
      "year": "19",
      "title": "LiteLLM 本地代理搭建",
      "url": "https://www.lifengdi.com/ren-gong-zhi-neng/4732",
      "date": "2026-06-16"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "小确幸的一天",
      "url": "https://liuqingwushui.top/archives/163/",
      "date": "2026-06-16"
    }
  ],
  "2020": [
    {
      "name": "天书vip",
      "year": "20",
      "title": "稳定的系统没有 “一战成名”",
      "url": "https://www.skybook.vip/inn/144",
      "date": "2026-06-16"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-16",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-16",
      "date": "2026-06-16"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "链接权益与链接关键意味着什么？如何影响SEO？",
      "url": "https://www.bailuze.com/24155.html",
      "date": "2026-06-16"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "bearblog",
      "url": "https://jefftay.com/bearblog/",
      "date": "2026-06-16"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "安静车厢",
      "url": "https://www.immarcus.com/blog/quiet-car",
      "date": "2026-06-16"
    }
  ],
  "2026": [
    {
      "name": "安迪",
      "year": "26",
      "title": "硅云十年之约虚拟主机",
      "url": "https://i55.top/archives/539/",
      "date": "2026-06-16"
    },
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "深夜重刷老港剧，终究还是怀念从前",
      "url": "https://mzdsx.com/2026/06/16/%e6%b7%b1%e5%a4%9c%e9%87%8d%e5%88%b7%e8%80%81%e6%b8%af%e5%89%a7%ef%bc%8c%e7%bb%88%e7%a9%b6%e8%bf%98%e6%98%af%e6%80%80%e5%bf%b5%e4%bb%8e%e5%89%8d/",
      "date": "2026-06-16"
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
