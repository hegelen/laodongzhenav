// ==================== latest-articles.js ====================
// 抓取日期: 5/27/2026, 8:23:26 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "访问网页返回567是什么意思",
      "url": "https://ddlog.cn/?p=500",
      "date": "2026-05-26"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "记录一个笔记智能体的开发经过（1）",
      "url": "https://www.linyufan.com/post/5828",
      "date": "2026-05-27"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "Typecho-Riven主题正式发售啦！！！",
      "url": "https://zhoutian.com/374.html",
      "date": "2026-05-27"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "分享几个 独立站 SEO 外链 建设的小经验",
      "url": "https://www.ccgxk.com/codeother/759.html",
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
  "2023": [
    {
      "name": "火米",
      "year": "23",
      "title": "WorkFlowy + Bear web = 浏览器黄金组合",
      "url": "https://huo.me/bear/",
      "date": "2026-05-26"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "2026年值得关注的SEO趋势：变化",
      "url": "https://www.bailuze.com/24095.html",
      "date": "2026-05-27"
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
    },
    {
      "name": "华立",
      "year": "26",
      "title": "Windows下自动备份MYSQL脚本",
      "url": "https://www.renhuali.cn/journal/cmpnh2b8s0020chfxq01n4sia",
      "date": "2026-05-27"
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
