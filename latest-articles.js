// ==================== latest-articles.js ====================
// 抓取日期: 9/22/2026, 10:03:03 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "这三分钟的成果，好像是正反馈了",
      "url": "https://wlj.me/notes/sp-note-20260922-132834/",
      "date": "2026-09-22"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "KnotChat: Rodrigo Delavina Simon",
      "url": "https://seths.blog/2026/09/knotchat-2/",
      "date": "2026-09-22"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "AI 写得越来越快，我却越来越看不完了",
      "url": "https://www.tortorse.com/archives/ai-writes-faster-than-i-can-read/",
      "date": "2026-09-22"
    }
  ],
  "2004": [
    {
      "name": "龙哥",
      "year": "04",
      "title": "com域名清理山寨DNS？",
      "url": "https://long.ge/18106.html",
      "date": "2026-09-22"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "电影枯竭",
      "url": "https://ezo.biz/movies/1689.html",
      "date": "2026-09-22"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "不想好就开口的是什么人",
      "url": "https://kaix.in/2026/0922/",
      "date": "2026-09-22"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "练字找不到感觉是常态，写本身更重要",
      "url": "https://yufm.com/662399.html",
      "date": "2026-09-22"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "小狼毫 万象拼音 + 极点五笔 三方案部署教程",
      "url": "https://laozhang.org/archives/4374.html",
      "date": "2026-09-22"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "还有这好事？边体验权力的爽感，边挣美元",
      "url": "https://www.ccgxk.com/codeother/892.html",
      "date": "2026-09-22"
    }
  ],
  "2019": [
    {
      "name": "herman",
      "year": "19",
      "title": "On reading books",
      "url": "https://herman.bearblog.dev/on-reading-books/",
      "date": "2026-09-22"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件WebpConverter：上传图片转换WebP图片格式，支持等比缩放/文件大小比较/原图备份/添加文字水印图片水印",
      "url": "https://www.bufanz.com/20260922964.html",
      "date": "2026-09-22"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "修复Twikoo更新至2.0.7后出现的样式问题",
      "url": "https://www.imcry.vip/post/2026-9-22-728/",
      "date": "2026-09-21"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-22",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-22",
      "date": "2026-09-22"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "细抠页面细节，博客接入服务器探针",
      "url": "https://9sb.net/archives/fine-tune-page-details-blog-access-server-probe.html",
      "date": "2026-09-21"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "Top 100+ SEO面试问题与答案",
      "url": "https://www.bailuze.com/24439.html",
      "date": "2026-09-22"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "WordPress更新升级提示输入 FTP 信息的解决办法",
      "url": "https://ygz.ink/archives/5844.html",
      "date": "2026-09-22"
    },
    {
      "name": "小归客",
      "year": "23",
      "title": "备份阿里云续费优惠码",
      "url": "https://xgk.pw/archives/319/",
      "date": "2026-09-22"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "中国银行bili联名万事达申请指南",
      "url": "https://xice.cx/posts/2233boc/",
      "date": "2026-09-22"
    }
  ],
  "2025": [
    {
      "name": "桃子味",
      "year": "25",
      "title": "桃子味正式入驻爱发电：让我能继续为你写出更有用的建站教程",
      "url": "https://www.taoziwei.com/438/",
      "date": "2026-09-22"
    },
    {
      "name": "Marcus",
      "year": "25",
      "title": "如何教孩子正确使用 AI",
      "url": "https://www.immarcus.com/blog/how-to-teach-kids-to-use-ai-properly",
      "date": "2026-09-22"
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
