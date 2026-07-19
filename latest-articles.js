// ==================== latest-articles.js ====================
// 抓取日期: 7/19/2026, 8:15:54 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Pointless banality and the uncanny valley",
      "url": "https://seths.blog/2026/07/pointless-banality-and-the-uncanny-valley/",
      "date": "2026-07-19"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "“皇帝的新衣”一年后：对话Thorsten Ball谈Agentic编程",
      "url": "https://tonybai.com/2026/07/19/agentic-engineering-thorsten-ball-amp-interview/",
      "date": "2026-07-18"
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "服务器顺利升级到MySQL 8.0.45",
      "url": "https://long.ge/18080.html",
      "date": "2026-07-19"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Fable 5 後續將會放到 Max 與 Team Premium 方案中 (維持 50% 限制)",
      "url": "https://blog.gslin.org/archives/2026/07/19/13118/fable-5-%e5%be%8c%e7%ba%8c%e5%b0%87%e6%9c%83%e6%94%be%e5%88%b0-max-%e8%88%87-team-premium-%e6%96%b9%e6%a1%88%e4%b8%ad-%e7%b6%ad%e6%8c%81-50-%e9%99%90%e5%88%b6/",
      "date": "2026-07-19"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "杂记2026年7月19日",
      "url": "https://acevs.com/5113/",
      "date": "2026-07-19"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "迟来的 “天命人”",
      "url": "https://yishu-life.com/index.php/archives/489.html",
      "date": "2026-07-19"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "黑洞足迹本-AI 时代的一人 App",
      "url": "https://blog.devtang.com/2026/07/18/heidong-footprint-ai-app/",
      "date": "2026-07-18"
    }
  ],
  "2015": [
    {
      "name": "elmagnifico",
      "year": "15",
      "title": "CodeBind Docs插件",
      "url": "https://elmagnifico.tech/2026/07/20/CBD-VSC-Plugin/",
      "date": "2026-07-19"
    },
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "AI로 네이버 블로그 상위 노출 방법 — 1개월 실전 결과",
      "url": "https://www.thewordcracker.com/blog/ai%eb%a1%9c-%eb%84%a4%ec%9d%b4%eb%b2%84-%eb%b8%94%eb%a1%9c%ea%b7%b8-%ec%83%81%ec%9c%84-%eb%85%b8%ec%b6%9c-%eb%b0%a9%eb%b2%95/",
      "date": "2026-07-19"
    }
  ],
  "2016": [
    {
      "name": "ximi",
      "year": "16",
      "title": "Mac OS 网络优化,解决SMB,RDP链接延迟问题",
      "url": "https://www.ximi.me/post-6046.html",
      "date": "2026-07-18"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之一些广告流量主方案和 SaaS 站没必要搞社区",
      "url": "https://www.ccgxk.com/codeother/813.html",
      "date": "2026-07-19"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-06-12 / 鸿蒙7",
      "url": "https://blog.xinshijiededa.men/daily/48/",
      "date": "2026-07-19"
    },
    {
      "name": "浪浪山下那个村",
      "year": "19",
      "title": "Apache HDFS 小文件相关问题全景分析（2022 — 2026）",
      "url": "https://www.zeekling.cn/articles/2026/07/19/1784447376912.html",
      "date": "2026-07-19"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "SOP 复制不了那双手",
      "url": "https://blog.solazy.me/20260719/",
      "date": "2026-07-19"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "关系降级",
      "url": "https://www.wsh233.cn/post/关系降级",
      "date": "2026-07-19"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-19",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-19",
      "date": "2026-07-19"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "《逃学神探》和《卧底神探》",
      "url": "https://jefftay.com/movies/detective-chen-series",
      "date": "2026-07-20"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "哈苏 X2D II 顶盖浅划痕修复",
      "url": "https://siwei.li/hasselblad-x2d-ii-scratch-repair/",
      "date": "2026-07-19"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "发布 @xingwangzhe/satteri-mermaid：剔除mermaid.js，用Rust原生渲染流程图，构建时产出纯静态SVG",
      "url": "https://xingwangzhe.fun/posts/satteri-mermaid-npm-package/",
      "date": "2026-07-19"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.07.19 博客阅读周记",
      "url": "https://www.immarcus.com/blog/weekly-20260719",
      "date": "2026-07-19"
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
