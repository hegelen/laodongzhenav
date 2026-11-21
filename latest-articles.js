// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-21 00:48:08
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "明天见",
      "url": "https://wlj.me/notes/sp-note-20261120-231508/",
      "date": "2026-11-20"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Messing with the thermostat",
      "url": "https://seths.blog/2026/11/messing-with-the-thermostat/",
      "date": "2026-11-20"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：享受时间的复利，好项目的3个标准",
      "url": "https://www.ufoer.com/post/14784.html",
      "date": "2026-11-20"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "GPU 也需要操作系统？AI 算力竟然有 90% 在摸鱼！",
      "url": "https://tonybai.com/2026/11/21/gpu-needs-an-operating-system/",
      "date": "2026-11-20"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "钟爱蓝黑色墨水",
      "url": "https://www.xlanda.net/posts/22632",
      "date": "2026-11-20"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "上证逼近3500",
      "url": "https://synyan.cn/t/64363",
      "date": "2026-11-20"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "二手键盘第六回合",
      "url": "https://acevs.com/5377/",
      "date": "2026-11-20"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "这次评论bug的原因",
      "url": "https://www.auiou.com/pub/2244",
      "date": "2026-11-20"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0024",
      "url": "https://lenciel.com/2026/11/fragments-0x0024/",
      "date": "2026-11-20"
    },
    {
      "name": "云风",
      "year": "05",
      "title": "碎碎念",
      "url": "https://blog.codingnow.com/2026/11/random_notes.html",
      "date": "2026-11-20"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "继textarea之后，iframe也自适应大小啦！",
      "url": "https://www.zhangxinxu.com/wordpress/2026/11/ifmame-sizing-content/",
      "date": "2026-11-20"
    },
    {
      "name": "异数",
      "year": "09",
      "title": "网站 || 博客聚合平台知多少？",
      "url": "https://www.yishu.pro/407.html",
      "date": "2026-11-20"
    }
  ],
  "2012": [
    {
      "name": "王鑫",
      "year": "12",
      "title": "2026年双11记录",
      "url": "https://wonse.info/2026-11-11.html",
      "date": "2026-11-20"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "戒烟",
      "url": "https://www.kawabangga.com/posts/7464",
      "date": "2026-11-20"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "限时免费：领取GLM-5.3-Flash大模型5亿Tokens，3天有效",
      "url": "https://www.dujin.org/23866.html",
      "date": "2026-11-20"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "今天你骂 AI 味博客了吗？",
      "url": "https://blog.solazy.me/20261120/",
      "date": "2026-11-20"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "CleanYourTV：把电视里的预装和推荐停掉，不用 root",
      "url": "https://9sb.net/archives/cleanyourtv-stop-pre-installed-and-recommended-content-on-the-tv-without-rooting.html",
      "date": "2026-11-21"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-20：TestSprite 4.0、Verse Engine by Ctruh、Netlify Server",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-20",
      "date": "2026-11-20"
    }
  ],
  "2023": [
    {
      "name": "兔哥",
      "year": "23",
      "title": "2026 年 RackNerd 黑五优惠活动汇总",
      "url": "https://uuzi.net/racknerd-black-friday-2026/",
      "date": "2026-11-20"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "电商网站导航中“Collections”的意义、设计与优化",
      "url": "https://www.bailuze.com/24665.html",
      "date": "2026-11-21"
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
