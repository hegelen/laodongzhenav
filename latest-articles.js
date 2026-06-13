// ==================== latest-articles.js ====================
// 抓取日期: 6/13/2026, 12:27:01 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The troll button",
      "url": "https://seths.blog/2026/06/the-troll-button/",
      "date": "2026-06-13"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "自驱力",
      "url": "http://www.xlanda.net/posts/22258",
      "date": "2026-06-13"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "美國政府出手禁止 Anthropic 提供 Fable 5 服務",
      "url": "https://blog.gslin.org/archives/2026/06/13/13068/%e7%be%8e%e5%9c%8b%e6%94%bf%e5%ba%9c%e5%87%ba%e6%89%8b%e7%a6%81%e6%ad%a2-anthropic-%e6%8f%90%e4%be%9b-fable-5-%e6%9c%8d%e5%8b%99/",
      "date": "2026-06-13"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "数码评测(68)：组装高速U盘/移动硬盘",
      "url": "http://www.auiou.com/relevant/00002161.jsp",
      "date": "2026-06-13"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "分类",
      "url": "https://acevs.com/5035/",
      "date": "2026-06-13"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "我的混账人生（六）：澄溪小学",
      "url": "https://bwskyer.com/my-messed-up-life-6.html",
      "date": "2026-06-13"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "彩票 || 2026065期大乐透分析",
      "url": "https://www.yishu.pro/222.html",
      "date": "2026-06-13"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "Up Typecho1.3",
      "url": "https://zhou.ge/2026-06-13.html",
      "date": "2026-06-13"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "玩教具行业的核心竞争力",
      "url": "https://blog.devtang.com/2026/06/13/educational-toy-industry-thinking/",
      "date": "2026-06-13"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "终于完善了一个鸿蒙版的Markdown渲染器",
      "url": "https://www.linyufan.com/post/5850",
      "date": "2026-06-13"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 出海之田七使用 google trends 的经验",
      "url": "https://www.ccgxk.com/codeother/776.html",
      "date": "2026-06-12"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "明镜荡｜上海出发一小时的宝藏湖荡露营地",
      "url": "https://blog.ops-coffee.com/r/city-china-jiangsu-suzhou-kunshan-mingjingdang.html",
      "date": "2026-06-13"
    }
  ],
  "2020": [
    {
      "name": "EdNovas",
      "year": "20",
      "title": "Casbay VPS",
      "url": "https://ednovas.xyz/2026/06/12/casbay/",
      "date": "2026-06-12"
    },
    {
      "name": "Z次元",
      "year": "20",
      "title": "Tailscale——一款高效的内网穿透、远程连接电脑方案",
      "url": "https://blog.ahzoo.cn/p/75f9e64/",
      "date": "2026-06-13"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "Typecho 站内搜索插件 SiteSearch（BUG）",
      "url": "https://9sb.net/archives/typecho-site-search-plugin-sitesearch-bug.html",
      "date": "2026-06-12"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-13",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-13",
      "date": "2026-06-13"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "如何利用现代SEO信号评估旧页面？",
      "url": "https://www.bailuze.com/24150.html",
      "date": "2026-06-13"
    },
    {
      "name": "兔哥",
      "year": "23",
      "title": "甲骨文云悄悄改文档：Always Free 的 ARM 实例配额从「4核24G」变成「2核12G」？",
      "url": "https://uuzi.net/oracle-cloud-always-free-arm-quota-cut-4-to-2-ocpu/",
      "date": "2026-06-13"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "淘了个锤子手机当备用机",
      "url": "https://ygz.ink/archives/5222.html",
      "date": "2026-06-13"
    }
  ],
  "2024": [
    {
      "name": "xgclevo",
      "year": "24",
      "title": "低功耗蓝牙广播",
      "url": "https://blog.xgclevo.top/posts/197c3ecd/",
      "date": "2026-06-13"
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
