// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-18 01:37:29
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "Codex协作效率低体验差",
      "url": "https://wlj.me/notes/sp-note-20261117-094223/",
      "date": "2026-11-17"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Selling to friends",
      "url": "https://seths.blog/2026/11/selling-to-friends/",
      "date": "2026-11-17"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：如何把不确定变成确定的结果？",
      "url": "https://www.ufoer.com/post/14774.html",
      "date": "2026-11-17"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "钢笔圆珠笔中性笔",
      "url": "https://www.xlanda.net/posts/22626",
      "date": "2026-11-18"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI 已经会写代码了，为什么还用不好你的业务系统？",
      "url": "https://tonybai.com/2026/11/18/build-mcp-in-golang/",
      "date": "2026-11-17"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "MySQL 在高維度向量的搜尋演算法的導入",
      "url": "https://blog.gslin.org/archives/2026/11/18/13375/mysql-%e5%9c%a8%e9%ab%98%e7%b6%ad%e5%ba%a6%e5%90%91%e9%87%8f%e7%9a%84%e6%90%9c%e5%b0%8b%e6%bc%94%e7%ae%97%e6%b3%95%e7%9a%84%e5%b0%8e%e5%85%a5/",
      "date": "2026-11-17"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年11月17日",
      "url": "https://acevs.com/5371/",
      "date": "2026-11-17"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "购物清单",
      "url": "https://www.seis-jun.xyz/blog/2026-11-17-shopping-list.html",
      "date": "2026-11-17"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "爷爷去世第五天，乡俗乡风可能要湮灭",
      "url": "https://www.linyufan.com/post/6145",
      "date": "2026-11-17"
    },
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "我把 CDN 规则返工了三次，最后一次才发现问题在 nginx",
      "url": "https://wuqishi.com/archives/edgeone-cdn-rule-rework-nginx-gzip",
      "date": "2026-11-17"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 GeneratePress 테마 2026 블랙 프라이데이 세일",
      "url": "https://www.thewordcracker.com/basic/themes/generatepress-black-friday/",
      "date": "2026-11-17"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "我把比亚迪“装进”了小米手环 9 Pro",
      "url": "https://blog.52hyjs.com/post-1293.html",
      "date": "2026-11-17"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "抢救停更的老牌插件：我把 WP Editor.md 彻底修好了",
      "url": "https://www.tjsky.net/best-software/2288",
      "date": "2026-11-17"
    },
    {
      "name": "zj",
      "year": "17",
      "title": "小米粒，你好呀，我是爸爸！(2)",
      "url": "http://www.zjhuiwan.cn/info/20261117/5222342518829175.html",
      "date": "2026-11-17"
    },
    {
      "name": "科学空间",
      "year": "17",
      "title": "最佳学习率调度的变分估计",
      "url": "https://kexue.fm/archives/12010",
      "date": "2026-11-17"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "学会像呼吸一样拒绝别人",
      "url": "https://blog.solazy.me/20261117/",
      "date": "2026-11-17"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "@everyone",
      "url": "https://blog.giveanornot.com/tag-everyone/",
      "date": "2026-11-17"
    }
  ],
  "2021": [
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "用魔法，打败魔法。",
      "url": "https://www.ddf.im/index.php/2026/11/17/1288.html",
      "date": "2026-11-17"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "最新发布SEO代表什么？《新手到职业指南》（2026）",
      "url": "https://www.bailuze.com/24605.html",
      "date": "2026-11-18"
    }
  ],
  "2024": [
    {
      "name": "老吕",
      "year": "24",
      "title": "LightVela · 云端 AI 智能体：腾讯bot，免费一个月，可以试试",
      "url": "https://laolv.org/lightvela.html",
      "date": "2026-11-17"
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
