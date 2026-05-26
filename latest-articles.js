// ==================== latest-articles.js ====================
// 抓取日期: 5/26/2026, 9:01:45 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "一款简约易用的防御插件SafeMange",
      "url": "https://zhoutian.com/375.html",
      "date": "2026-05-26"
    }
  ],
  "2019": [
    {
      "name": "Zeruns",
      "year": "19",
      "title": "【开源】纯真IP库在线查询系统 - IP地理位置查询、本机IP查询、域名解析",
      "url": "https://blog.zeruns.com/archives/944.html",
      "date": "2026-05-26"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "听劝！博客背景持续优化，缓解视觉疲劳",
      "url": "https://9sb.net/archives/listen-to-advice-continuous-optimization-of-blog-background-to-alleviate-visual-fatigue.html",
      "date": "2026-05-26"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "EdgeOne 日志分析软件 v2.0",
      "url": "https://jyblog.cn/5651/",
      "date": "2026-05-26"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "电子商务SEO如何成为企业的正确选择",
      "url": "https://www.bailuze.com/24093.html",
      "date": "2026-05-26"
    },
    {
      "name": "建站百科",
      "year": "23",
      "title": "投稿#华纳云618云端大促，香港cn2云服务器198元/年，美国cn2云4H8G15M永久988元/年",
      "url": "https://www.jzbk.net/3044.html",
      "date": "2026-05-26"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "第三次兑换天猫超市卡了",
      "url": "https://ygz.ink/archives/5036.html",
      "date": "2026-05-26"
    },
    {
      "name": "火米",
      "year": "23",
      "title": "WorkFlowy + Bear web = 浏览器黄金组合",
      "url": "https://huo.me/bear/",
      "date": "2026-05-26"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "1. 区块链基本知识",
      "url": "https://xice.cx/posts/ch01-web3/",
      "date": "2026-05-26"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "冠军奖杯很重，但孩子的膝盖更贵：别让校园篮球透支少年未来",
      "url": "https://mzdsx.com/2026/05/27/%e5%86%a0%e5%86%9b%e5%a5%96%e6%9d%af%e5%be%88%e9%87%8d%ef%bc%8c%e4%bd%86%e5%ad%a9%e5%ad%90%e7%9a%84%e8%86%9d%e7%9b%96%e6%9b%b4%e8%b4%b5%ef%bc%9a%e5%88%ab%e8%ae%a9%e6%a0%a1%e5%9b%ad%e7%af%ae%e7%90%83/",
      "date": "2026-05-26"
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
