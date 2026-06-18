// ==================== latest-articles.js ====================
// 抓取日期: 6/18/2026, 9:29:35 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Promotion, activation, conversation",
      "url": "https://seths.blog/2026/06/promotion-activation-conversation/",
      "date": "2026-06-18"
    }
  ],
  "2003": [
    {
      "name": "爱情在线",
      "year": "03",
      "title": "生命中的NPC",
      "url": "https://aqzx.com/blog_view.asp?id=65",
      "date": "2026-06-18"
    }
  ],
  "2004": [
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "混乱的一天",
      "url": "https://synyan.cn/t/62967",
      "date": "2026-06-18"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "在 AI 编码时代，为什么我们依然选择 Go 而不是 Rust？",
      "url": "https://tonybai.com/2026/06/18/why-choose-go-over-rust-today-in-ai-age/",
      "date": "2026-06-17"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "Win 11安装部署OpenClaw教程",
      "url": "https://www.biaodianfu.com/windows-11-openclaw.html",
      "date": "2026-06-18"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "序：在思想的长河中追寻经济的本质",
      "url": "https://www.leitao.cn/10368.html",
      "date": "2026-06-18"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "Zocr：一款开箱即用的轻量OCR API，支持Docker一键部署",
      "url": "https://blog.xiaoz.org/archives/23085",
      "date": "2026-06-18"
    },
    {
      "name": "Jonty",
      "year": "13",
      "title": "还是把电梯卡使用限制时间给破解了！",
      "url": "https://nobb.cc/2026-06-18-3747.html",
      "date": "2026-06-18"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "准备在“林羽凡笔记”中再开发一个语音模式的Agent",
      "url": "https://www.linyufan.com/post/5859",
      "date": "2026-06-18"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "端午出游—A计划，I启动",
      "url": "https://liuqingwushui.top/archives/164/",
      "date": "2026-06-18"
    },
    {
      "name": "李锋镝",
      "year": "19",
      "title": "SpringBoot DeferredLog 完整详解",
      "url": "https://www.lifengdi.com/hou-duan/4734",
      "date": "2026-06-18"
    }
  ],
  "2020": [
    {
      "name": "无妄当自持",
      "year": "20",
      "title": "在 RTX 4060 Laptop（8GB 显存）笔记本上部署 Qwen3.5-4B 和 Qwopus3.5-9B-Coder 的完整实战",
      "url": "https://www.insidentally.com/articles/000051/",
      "date": "2026-06-18"
    },
    {
      "name": "vinchent",
      "year": "20",
      "title": "写在2026年中间",
      "url": "https://www.vinchent.xyz/xie-zai-2026nian-zhong-jian",
      "date": "2026-06-18"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-18",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-18",
      "date": "2026-06-18"
    }
  ],
  "2023": [
    {
      "name": "火米",
      "year": "23",
      "title": "Bear（熊掌记）出了个 md 编辑器",
      "url": "https://huo.me/lettera/",
      "date": "2026-06-18"
    },
    {
      "name": "小归客",
      "year": "23",
      "title": "开源#AI写的XGK博客程序",
      "url": "https://xgk.pw/archives/294/",
      "date": "2026-06-18"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "麻醉体感实录",
      "url": "https://www.immarcus.com/blog/experiencing-anesthesia",
      "date": "2026-06-18"
    },
    {
      "name": "青萍",
      "year": "25",
      "title": "真人配音兼职怎么找：几个渠道对比，末尾推荐一个免费入驻的",
      "url": "https://blog.lusyoe.com/article/real-voice-actor-side-gig-guide",
      "date": "2026-06-18"
    }
  ],
  "2026": [
    {
      "name": "安迪",
      "year": "26",
      "title": "硅云养老主机",
      "url": "https://i55.top/archives/540/",
      "date": "2026-06-18"
    },
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
