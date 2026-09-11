// ==================== latest-articles.js ====================
// 抓取日期: 9/11/2026, 9:45:23 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "每天十分钟，今天的练习",
      "url": "https://wlj.me/notes/sp-note-20260911-170250/",
      "date": "2026-09-11"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Solace",
      "url": "https://seths.blog/2026/09/solace/",
      "date": "2026-09-11"
    },
    {
      "name": "不吐不快",
      "year": "02",
      "title": "开源一个AI开发的自用评论系统:Qingniao",
      "url": "https://mianao.info/open-source-comment-system-qingniao/",
      "date": "2026-09-11"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 412 期）：禁止 issue，只用 PR",
      "url": "http://www.ruanyifeng.com/blog/2026/09/weekly-issue-412.html",
      "date": "2026-09-11"
    },
    {
      "name": "愆伏",
      "year": "03",
      "title": "2002，宿舍里的网线",
      "url": "https://www.tortorse.com/archives/dorm-room-ethernet-2002/",
      "date": "2026-09-11"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go SIMD杀疯了：开发者删光最后一行cgo代码，性能反超C语言库",
      "url": "https://tonybai.com/2026/09/11/go-simd-kills-cgo-turbopfor-avx512/",
      "date": "2026-09-10"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "老电子信息城三期",
      "url": "https://acevs.com/5225/",
      "date": "2026-09-11"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "OpenRouter 的用法",
      "url": "https://blog.gslin.org/archives/2026/09/12/13197/openrouter-%e7%9a%84%e7%94%a8%e6%b3%95/",
      "date": "2026-09-11"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "未来与命运",
      "url": "https://www.leitao.cn/10866.html",
      "date": "2026-09-11"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "鸿蒙版“林羽凡笔记”增加分享二维码功能和扫分享码进入分享页",
      "url": "https://www.linyufan.com/post/6009",
      "date": "2026-09-11"
    }
  ],
  "2014": [
    {
      "name": "运营不加班",
      "year": "14",
      "title": "260911大模型 AIOps 诊断能力排行榜",
      "url": "https://nops.icu/archives/254/",
      "date": "2026-09-11"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "구글 Docs 문서 이미지 추출, 다운로드하기",
      "url": "https://www.thewordcracker.com/blog/%ea%b5%ac%ea%b8%80-docs-%eb%ac%b8%ec%84%9c-%ec%9d%b4%eb%af%b8%ec%a7%80-%ec%b6%94%ec%b6%9c-%eb%8b%a4%ec%9a%b4%eb%a1%9c%eb%93%9c/",
      "date": "2026-09-11"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "2026 年世界开源 AI 大模型，各种统计报告！",
      "url": "https://www.ccgxk.com/emlog_dev/880.html",
      "date": "2026-09-11"
    }
  ],
  "2019": [
    {
      "name": "Zeruns",
      "year": "19",
      "title": "雨云 韩国首尔一区VPS，2核4G 40兆 仅需32.5元/月，三网直连，原生/住宅IP，EPYC-7A23",
      "url": "https://blog.zeruns.com/archives/955.html",
      "date": "2026-09-11"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "腾讯云通知我的域名存在违规疑似钓鱼网站，却没有详细违规URL",
      "url": "https://www.bufanz.com/20260911898.html",
      "date": "2026-09-11"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "服务器 SSH 老提示 connection is closed by foreign host，原来是这帮 IP 在爆破",
      "url": "https://9sb.net/archives/server-ssh-old-prompt-connection-is-closed-by-foreign-host-it-turns-out-that-these-ips-are-exploding.html",
      "date": "2026-09-11"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-11",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-11",
      "date": "2026-09-11"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "如何为SEO寻找并选择合适的关键词（完整GEO与SEO指南）？",
      "url": "https://www.bailuze.com/26000.html",
      "date": "2026-09-11"
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "AI与认知（二）：AI语言能力——从表象到机制",
      "url": "https://blog.tangwudi.com/technology/cognition14702/",
      "date": "2026-09-10"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "MVP",
      "url": "https://www.immarcus.com/blog/minimum-viable-product",
      "date": "2026-09-11"
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
