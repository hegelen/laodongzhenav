// ==================== latest-articles.js ====================
// 抓取日期: 9/2/2026, 9:47:19 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "每天五分钟 😄",
      "url": "https://wlj.me/notes/sp-note-20260902-232519/",
      "date": "2026-09-02"
    }
  ],
  "2004": [
    {
      "name": "Jake",
      "year": "04",
      "title": "OwlVigil 开源SDK：一套SDK轻松接入完整的 AI 管控能力",
      "url": "https://jaketao.com/owlvigil-go-sdk-open-source",
      "date": "2026-09-02"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "吵吵嚷嚷",
      "url": "https://ezo.biz/Diary/1638.html",
      "date": "2026-09-02"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "做事",
      "url": "http://www.xlanda.net/posts/22439",
      "date": "2026-09-02"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "經濟部的商工登記公示資料查詢系統有 permalink 了",
      "url": "https://blog.gslin.org/archives/2026/09/02/13178/%e7%b6%93%e6%bf%9f%e9%83%a8%e7%9a%84%e5%95%86%e5%b7%a5%e7%99%bb%e8%a8%98%e5%85%ac%e7%a4%ba%e8%b3%87%e6%96%99%e6%9f%a5%e8%a9%a2%e7%b3%bb%e7%b5%b1%e6%9c%89-permalink-%e4%ba%86/",
      "date": "2026-09-02"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年9月2日",
      "url": "https://acevs.com/5206/",
      "date": "2026-09-02"
    }
  ],
  "2008": [
    {
      "name": "河马",
      "year": "08",
      "title": "Acme.sh 手动添加SSL",
      "url": "https://www.iamhippo.com/2026-09/2005.html",
      "date": "2026-09-02"
    }
  ],
  "2015": [
    {
      "name": "青山",
      "year": "15",
      "title": "那年盛夏，河水托住我的勇敢",
      "url": "https://blog.yanqingshan.com/245.html",
      "date": "2026-09-02"
    },
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "All-in-One WP Migration 보안 취약점 발견, 즉시 업데이트하세요",
      "url": "https://www.thewordcracker.com/basic/all-in-one-wp-migration-%eb%b3%b4%ec%95%88-%ec%b7%a8%ec%95%bd%ec%a0%90/",
      "date": "2026-09-02"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "我为什么写博客？",
      "url": "https://blog.52hyjs.com/post-1288.html",
      "date": "2026-09-02"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "放心，蠢人是用不了 AI 的！",
      "url": "https://www.ccgxk.com/codeother/870.html",
      "date": "2026-09-02"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "相册模块优化",
      "url": "https://liuqingwushui.top/archives/192/",
      "date": "2026-09-02"
    },
    {
      "name": "passo",
      "year": "19",
      "title": "Episode X of Phase One: Agent traffic, llms.txt, and the solitude problem",
      "url": "https://passo.uno/episode-x-phase-one-agent-traffic-llms-txt-solitude/",
      "date": "2026-09-02"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "谁在替你的生疏买单",
      "url": "https://blog.solazy.me/20260902/",
      "date": "2026-09-02"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "尝鲜腾讯的操作系统级AI助手Marvis(马维斯)，制作实时监控磁盘文件变化的小工具",
      "url": "https://www.bufanz.com/20260902864.html",
      "date": "2026-09-02"
    },
    {
      "name": "Battle Le",
      "year": "20",
      "title": "折腾半天终于办下来了：0 元与免实体地址申请个体工商户营业执照",
      "url": "https://battlele.com/individual-business-guide/",
      "date": "2026-09-02"
    },
    {
      "name": "HEMING",
      "year": "20",
      "title": "PQS Taiwan Changhua #1 | CHG-50M-VDS-Mini Dynamic Residential IP",
      "url": "https://heming.org/2797.html",
      "date": "2026-09-02"
    }
  ],
  "2022": [
    {
      "name": "VeryJack",
      "year": "22",
      "title": "人人都能玩的 AI 玩具 —— AI Passport",
      "url": "https://veryjack.com/technique/ai_passport/",
      "date": "2026-09-02"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "小企业如何通过本地SEO超越大品牌？",
      "url": "https://www.bailuze.com/24391.html",
      "date": "2026-09-02"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "甩门",
      "url": "https://www.immarcus.com/blog/door-slam",
      "date": "2026-09-02"
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
