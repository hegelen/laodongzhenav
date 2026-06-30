// ==================== latest-articles.js ====================
// 抓取日期: 6/30/2026, 9:03:28 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "帮娃点星巴克喝起来特别香",
      "url": "https://wlj.me/notes/sp-note-20260630-105732/",
      "date": "2026-06-30"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Fancy food update",
      "url": "https://seths.blog/2026/06/fancy-food-update/",
      "date": "2026-06-30"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：知识付费老师如何利用Ai月入10万",
      "url": "https://www.ufoer.com/post/13932.html",
      "date": "2026-06-30"
    },
    {
      "name": "阮一峰",
      "year": "03",
      "title": "Dario Amodei：AI 开源是伪命题",
      "url": "http://www.ruanyifeng.com/blog/2026/06/anthropic.html",
      "date": "2026-06-30"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "小区楼下的小猫",
      "url": "http://www.xlanda.net/posts/22297",
      "date": "2026-06-30"
    }
  ],
  "2005": [
    {
      "name": "当下",
      "year": "05",
      "title": "1-6月购物日志",
      "url": "https://blog.fueis.com/26-beauty",
      "date": "2026-06-30"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "RAM 與 SSD 價格的走勢圖",
      "url": "https://blog.gslin.org/archives/2026/06/30/13085/ram-%e8%88%87-ssd-%e5%83%b9%e6%a0%bc%e7%9a%84%e8%b5%b0%e5%8b%a2%e5%9c%96/",
      "date": "2026-06-30"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "杂记·六月小结·2627",
      "url": "https://bwskyer.com/june-wrap-2026.html",
      "date": "2026-06-30"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "Arch Linux 电源优化指南",
      "url": "https://www.iliu.org/posts/arch-linux-power-optimize/",
      "date": "2026-06-30"
    }
  ],
  "2011": [
    {
      "name": "Verne",
      "year": "11",
      "title": "Claude Code 第三方 API 代理配置 Headroom",
      "url": "https://blog.einverne.info/post/2026/06/headroom-with-custom-base-url-claude-code.html",
      "date": "2026-06-30"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "你是谁，你知道么",
      "url": "https://d-d.design/single/19465",
      "date": "2026-06-30"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "카페24 도메인 A 레코드 설정 오류 문제 해결하기",
      "url": "https://www.thewordcracker.com/basic/%ec%b9%b4%ed%8e%9824-%eb%8f%84%eb%a9%94%ec%9d%b8-a-%eb%a0%88%ec%bd%94%eb%93%9c-%ec%84%a4%ec%a0%95-%ec%98%a4%eb%a5%98/",
      "date": "2026-06-30"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "出海 Web 不要 恋战 新词游戏站",
      "url": "https://www.ccgxk.com/codeother/794.html",
      "date": "2026-06-30"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "这言论，好特么有道理",
      "url": "https://liuqingwushui.top/archives/168/",
      "date": "2026-06-30"
    }
  ],
  "2020": [
    {
      "name": "我不是咕咕鸽",
      "year": "20",
      "title": "【好玩儿的 Docker 项目】十分钟搭建一个 Obsidian 私有同步服务——Fast Note Sync，多端实时同步笔记和附件",
      "url": "https://blog.laoda.de/archives/docker-compose-install-fast-note-sync",
      "date": "2026-06-30"
    },
    {
      "name": "无梦梦游记",
      "year": "20",
      "title": "笔记·独立动画的基本工作流",
      "url": "https://bkryofu.cn/p/dd89adea.html",
      "date": "2026-06-30"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "卓尔UV镜和绿巨能UV镜，镜片看不出区别，效果一样",
      "url": "https://www.bufanz.com/20260630695.html",
      "date": "2026-06-30"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-30",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-30",
      "date": "2026-06-30"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "📷人文摄影练习",
      "url": "https://ygz.ink/archives/5414.html",
      "date": "2026-06-30"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "时间的交换",
      "url": "https://www.immarcus.com/blog/exchange-of-time",
      "date": "2026-06-30"
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
