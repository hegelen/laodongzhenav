// ==================== latest-articles.js ====================
// 抓取日期: 6/18/2026, 7:48:17 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Status symbols",
      "url": "https://seths.blog/2026/06/status-symbols/",
      "date": "2026-06-17"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "人老了",
      "url": "http://www.xlanda.net/posts/22270",
      "date": "2026-06-18"
    }
  ],
  "2005": [
    {
      "name": "春田",
      "year": "05",
      "title": "１０７９．情けは人の為ならず",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/06/post-6736d9.html",
      "date": "2026-06-17"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "电钢琴续",
      "url": "https://acevs.com/5046/",
      "date": "2026-06-18"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "6月18日，全国草原保护日",
      "url": "https://www.munue.com/grassland-protection-day.html",
      "date": "2026-06-18"
    },
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "2026 年 5 月房地产数据来了",
      "url": "https://joojen.com/archives/9034.html",
      "date": "2026-06-17"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "蓄意碰瓷",
      "url": "https://zhou.ge/2026-06-17.html",
      "date": "2026-06-17"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 하단 푸터 영역에 이용약관 페이지 링크 표시하는 방법",
      "url": "https://www.thewordcracker.com/intermediate/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ec%9d%b4%ec%9a%a9%ec%95%bd%ea%b4%80-%ed%8e%98%ec%9d%b4%ec%a7%80-%eb%a7%81%ed%81%ac-%ed%91%9c%ec%8b%9c/",
      "date": "2026-06-17"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "MoE环游记：9、门控归一化之争",
      "url": "https://kexue.fm/archives/11782",
      "date": "2026-06-17"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Node-js 新手需要知道什么？",
      "url": "https://www.ccgxk.com/front-end/781.html",
      "date": "2026-06-17"
    }
  ],
  "2019": [
    {
      "name": "李锋镝",
      "year": "19",
      "title": "SpringBoot DeferredLog 完整详解",
      "url": "https://www.lifengdi.com/hou-duan/4734",
      "date": "2026-06-18"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "开始万豪白金挑战",
      "url": "https://blog.solazy.me/20260617/",
      "date": "2026-06-17"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "端午出游—A计划，I启动",
      "url": "https://liuqingwushui.top/archives/164/",
      "date": "2026-06-18"
    }
  ],
  "2020": [
    {
      "name": "无妄当自持",
      "year": "20",
      "title": "给 Hermes Agent 接入 Sciverse：5 分钟搞定学术搜索 MCP",
      "url": "https://www.insidentally.com/articles/000050/",
      "date": "2026-06-18"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "新购神牛离机闪光灯iT32，功能多又实用！",
      "url": "https://www.bufanz.com/20260617680.html",
      "date": "2026-06-17"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-17",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-17",
      "date": "2026-06-17"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "各行业GEO填词参考，AI搜索提示词优化指南",
      "url": "https://www.bailuze.com/25315.html",
      "date": "2026-06-18"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "网站被百度K掉不是个例",
      "url": "https://ygz.ink/archives/5300.html",
      "date": "2026-06-17"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "麻醉体感实录",
      "url": "https://www.immarcus.com/blog/experiencing-anesthesia",
      "date": "2026-06-18"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "Step Plan 限时免费体验， 海量 Token 放送中！",
      "url": "https://www.renhuali.cn/journal/cmqiyiryv0002chyjl7jhjlsc",
      "date": "2026-06-18"
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
