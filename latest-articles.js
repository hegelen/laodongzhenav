// ==================== latest-articles.js ====================
// 抓取日期: 5/11/2026, 8:50:25 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "Bigme设计太丑墨水屏手机失望",
      "url": "https://wlj.me/notes/sp-note-20260511-112709/",
      "date": "2026-05-11"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "古苗寨万家灯火，黄果树瀑雨通天",
      "url": "https://dujun.io/may-day-family-trip-to-guizhou.html",
      "date": "2026-05-06"
    },
    {
      "name": "军",
      "year": "08",
      "title": "来自BlogsClub的礼物",
      "url": "https://me.xu19.com/blogsclub-coin/",
      "date": "2026-05-10"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "我只会瞎折腾！暨兰空图床上传图片失败解决方法！",
      "url": "https://laozhang.org/archives/4056.html",
      "date": "2026-04-28"
    }
  ],
  "2016": [
    {
      "name": "小可",
      "year": "16",
      "title": "Codex 订阅一物多用：通过 CPA 代理输出 OpenAI 标准接口",
      "url": "https://keke.su/posts/2026-05-08-new-1.html",
      "date": "2026-05-08"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "直接以FID为Loss：从梯度计算到流式训练",
      "url": "https://kexue.fm/archives/11738",
      "date": "2026-05-08"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "我买基金从不亏钱",
      "url": "https://blog.ops-coffee.com/r/fund-5-year-from-50-percent-loss-to-profit.html",
      "date": "2026-05-07"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "狐蒂云疑似准备跑路：低价云服务器的水有多深",
      "url": "https://lb5.net/253.html",
      "date": "2026-05-06"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "通用的 AI IDE 账号管理工具 Cockpit-Tools",
      "url": "https://www.sanshu.cn/arc/262.html",
      "date": "2026-05-07"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "爱于细碎烟火，悟爱的本真爱",
      "url": "https://liyinwaihe.com/399.html",
      "date": "2026-05-09"
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
