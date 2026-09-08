// ==================== latest-articles.js ====================
// 抓取日期: 9/8/2026, 9:51:53 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "蘑菇AI助手正式开放",
      "url": "https://wlj.me/notes/sp-note-20260908-154421/",
      "date": "2026-09-08"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "“I don’t know”",
      "url": "https://seths.blog/2026/09/i-dont-know-2/",
      "date": "2026-09-08"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：专业能力 ＋ AI助理 ＝ 赚大钱的机会",
      "url": "https://www.ufoer.com/post/14539.html",
      "date": "2026-09-08"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "电击上瘾",
      "url": "https://ezo.biz/Diary/1655.html",
      "date": "2026-09-08"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "两年攻坚、11 个子任务闭环，Go 终于把 HTTP/2 这个“寄养”十年的孩子接回了标准库",
      "url": "https://tonybai.com/2026/09/08/go-127-http2-move-into-std/",
      "date": "2026-09-07"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "tplink44an双摄同时加入sa6400",
      "url": "https://acevs.com/5219/",
      "date": "2026-09-08"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "Phorge 现代化改造实战（十五）：用 Go 接管 Phorge 工作队列，如何避免新旧消费者互相抢任务",
      "url": "https://soulteary.com/2026/09/08/phorge-modernization-part-15-take-over-work-queue-with-go.html",
      "date": "2026-09-08"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "骑行两百公里",
      "url": "https://www.iliu.org/posts/two-hundred-kilometers-ledger/",
      "date": "2026-09-08"
    }
  ],
  "2011": [
    {
      "name": "第七星尘",
      "year": "11",
      "title": "我的又一个C端工具，幕映电视投屏工具",
      "url": "https://blog.star7th.com/2026/09/2635.html",
      "date": "2026-09-08"
    },
    {
      "name": "君子不器",
      "year": "11",
      "title": "2026年8月：芭蕾考级、近郊寻迹以及暑假的尾声",
      "url": "https://www.colinjiang.com/archives/2026-08-ballet-exam-summer-trips.html",
      "date": "2026-09-08"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.9.8",
      "url": "https://www.linyufan.com/post/5997",
      "date": "2026-09-08"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海是一道光，只是还没照来！",
      "url": "https://www.ccgxk.com/codeother/877.html",
      "date": "2026-09-08"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "一次更新惹的祸",
      "url": "https://liuqingwushui.top/archives/193/",
      "date": "2026-09-08"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "JN 最近在幹嘛（20260908 更新）",
      "url": "https://blog.giveanornot.com/now/20260908/",
      "date": "2026-09-08"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "好耶，又吃上了野生菌",
      "url": "https://www.wsh233.cn/post/好耶又吃上了野生菌",
      "date": "2026-09-08"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-08",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-08",
      "date": "2026-09-08"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO的13条链接建设策略",
      "url": "https://www.bailuze.com/24405.html",
      "date": "2026-09-08"
    }
  ],
  "2025": [
    {
      "name": "心记",
      "year": "25",
      "title": "欢迎使用 Typecho",
      "url": "https://blog.moodlog.cn/archives/1/",
      "date": "2026-09-08"
    },
    {
      "name": "Marcus",
      "year": "25",
      "title": "现代奴隶制度",
      "url": "https://www.immarcus.com/blog/modern-slavery",
      "date": "2026-09-08"
    },
    {
      "name": "桃子味",
      "year": "25",
      "title": "经验福利—2026 最强 Cloudflare 免费节点！永久可用+免费域名｜10分钟搭建｜解锁 ChatGPT / Gemini ！",
      "url": "https://www.taoziwei.com/408/",
      "date": "2026-09-08"
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
