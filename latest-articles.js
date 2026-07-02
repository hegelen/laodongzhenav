// ==================== latest-articles.js ====================
// 抓取日期: 7/2/2026, 8:30:00 PM
// 只抓取最近14天内的文章，共 19 篇
// 目标 20 篇，实际 19 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Left unsaid",
      "url": "https://seths.blog/2026/07/left-unsaid/",
      "date": "2026-07-02"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "猫之碎碎念",
      "url": "http://www.xlanda.net/posts/22302",
      "date": "2026-07-02"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "cc-switch-cli：专为终端控与远程开发打造的 Claude Code 多模型切换工具！",
      "url": "https://tonybai.com/2026/07/02/cc-switch-cli-opensource/",
      "date": "2026-07-01"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "金钢西瓜",
      "url": "https://acevs.com/5077/",
      "date": "2026-07-02"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "亲子 || 育儿杂记17",
      "url": "https://www.yishu.pro/229.html",
      "date": "2026-07-02"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "用交易平台风控设置改掉逆市加仓这个坏习惯",
      "url": "https://blog.forecho.com/platform-risk-settings-stop-revenge-trading.html",
      "date": "2026-07-02"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "怪不得现在好多人说地摊货都吃不起了，太坑了",
      "url": "https://www.linyufan.com/post/5876",
      "date": "2026-07-02"
    },
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "如何看待“开局像坐马斯克火箭，后期变成屎坑扫雷”的 AI 编程？附防爆指南",
      "url": "https://wuqishi.com/archives/vibe-coding-anti-shishan-guide",
      "date": "2026-07-02"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "简单聊一下抄我博客这件事",
      "url": "https://d-d.design/single/19498",
      "date": "2026-07-02"
    },
    {
      "name": "松茸",
      "year": "14",
      "title": "默默换个域名【songr.cn】",
      "url": "https://zrs.xyz/2143.html",
      "date": "2026-07-02"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "你跟 AI 对话后会发生什么？",
      "url": "https://www.ccgxk.com/codeother/796.html",
      "date": "2026-07-02"
    }
  ],
  "2019": [
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "WooCommerce 转 B2B 产品展示导入器：一键把 WooCommerce 简单产品迁移到 B2B 产品展示插件",
      "url": "https://blog.naibabiji.com/files/wordpress-plugins/naibabiji-woocommerce-to-b2b-showcase-importer.html",
      "date": "2026-07-02"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "打工人的快乐，就藏在这十几分钟的晚霞里",
      "url": "https://9sb.net/archives/the-happiness-of-working-people-is-hidden-in-these-ten-minutes-of-sunset-glow.html",
      "date": "2026-07-02"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "📷单反摄影练习",
      "url": "https://ygz.ink/archives/5429.html",
      "date": "2026-07-02"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "服务器端渲染与客户端渲染在SEO优化中的重要性",
      "url": "https://www.bailuze.com/24210.html",
      "date": "2026-07-02"
    }
  ],
  "2024": [
    {
      "name": "刘郎阁",
      "year": "24",
      "title": "汽车保养",
      "url": "https://vjo.cc/1983",
      "date": "2026-07-02"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "美国出生公民权的判决",
      "url": "https://www.immarcus.com/blog/scotus-birthright-citizenship",
      "date": "2026-07-02"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "2026 年上半年经营工作小结",
      "url": "https://yigeboke.com/article.php?id=44",
      "date": "2026-07-02"
    },
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "走个面？",
      "url": "https://mzdsx.com/2026/07/03/%e8%b5%b0%e4%b8%aa%e9%9d%a2%ef%bc%9f/",
      "date": "2026-07-02"
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
