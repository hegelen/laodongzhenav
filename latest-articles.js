// ==================== latest-articles.js ====================
// 抓取日期: 7/14/2026, 8:23:21 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "“Is it okay if I share my screen?”",
      "url": "https://seths.blog/2026/07/is-it-okay-if-i-share-my-screen/",
      "date": "2026-07-14"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "171个“已批准”却迟迟未实现的提案：Go语言的十年“欠账清单”",
      "url": "https://tonybai.com/2026/07/14/171-accepted-unimplemented-go-proposals-a-decade-of-technical-debt/",
      "date": "2026-07-13"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "填志愿",
      "url": "https://ltmltm.cn/bk/1479.html",
      "date": "2026-07-14"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "开奖啦！5斤巫山脆李花落谁家？速来围观！",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1261",
      "date": "2026-07-14"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "“暑假综合症”犯了，得“治”！",
      "url": "https://laozhang.org/archives/4230.html",
      "date": "2026-07-14"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "在德州工区的一天",
      "url": "https://guoxiaoli.com/post/665.html",
      "date": "2026-07-14"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "优化了“林羽凡笔记”分享页中切换主题色功能的显示位置",
      "url": "https://www.linyufan.com/post/5900",
      "date": "2026-07-14"
    }
  ],
  "2014": [
    {
      "name": "运营不加班",
      "year": "14",
      "title": "吃灰iPhone 6再就业：给Claude Code做个红绿灯看板",
      "url": "https://nops.icu/archives/243/",
      "date": "2026-07-14"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "All-in-One WP Migration 아카이브 파일 손상으로 가져오기 실패 오류",
      "url": "https://www.thewordcracker.com/basic/all-in-one-wp-migration-%ec%95%84%ec%b9%b4%ec%9d%b4%eb%b8%8c-%ed%8c%8c%ec%9d%bc-%ec%86%90%ec%83%81-%ec%98%a4%eb%a5%98/",
      "date": "2026-07-14"
    },
    {
      "name": "满心",
      "year": "15",
      "title": "下班准点儿走，也错了？",
      "url": "https://zhoutian.com/387.html",
      "date": "2026-07-14"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "OPC Web 出海之图视频的 AI 供应商渠道和简单外链",
      "url": "https://www.ccgxk.com/codeother/808.html",
      "date": "2026-07-14"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "成年人的世界",
      "url": "https://liuqingwushui.top/archives/173/",
      "date": "2026-07-14"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "当职业素养成了稀缺品",
      "url": "https://blog.solazy.me/20260714/",
      "date": "2026-07-14"
    }
  ],
  "2020": [
    {
      "name": "呆哥",
      "year": "20",
      "title": "编辑器新增Markdown切换",
      "url": "https://www.dalao.net/thread-61035.htm",
      "date": "2026-07-14"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-14",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-14",
      "date": "2026-07-14"
    }
  ],
  "2023": [
    {
      "name": "小归客",
      "year": "23",
      "title": "给主题添加一个“荣誉殿堂”独立页面",
      "url": "https://xgk.pw/archives/313/",
      "date": "2026-07-14"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "页面速度对SEO优化有多重要？",
      "url": "https://www.bailuze.com/24238.html",
      "date": "2026-07-14"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "记一次无需实名换绑米哈游通行证手机号",
      "url": "https://xice.cx/posts/fkMihoyo/",
      "date": "2026-07-15"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "夜猫子才是正常的吧",
      "url": "https://www.immarcus.com/blog/night-owl-was-the-norm",
      "date": "2026-07-14"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "准备换域名了",
      "url": "https://mzdsx.com/2026/07/14/%e5%87%86%e5%a4%87%e6%8d%a2%e5%9f%9f%e5%90%8d%e4%ba%86/",
      "date": "2026-07-14"
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
