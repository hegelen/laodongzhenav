// ==================== latest-articles.js ====================
// 抓取日期: 9/29/2026, 11:01:05 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "iPad速写五六分钟乱涂也好玩",
      "url": "https://wlj.me/notes/sp-note-20260929-140838/",
      "date": "2026-09-29"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "Hermes微信失联处理",
      "url": "https://ezo.biz/Coding/Hermes.html",
      "date": "2026-09-29"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Tailscale 官方揭秘提速方案：一场关于「少拷贝、多队列、缓存」的 Go 语言网络性能优化实战",
      "url": "https://tonybai.com/2026/09/30/tailscale-faster-go-performance-optimization/",
      "date": "2026-09-29"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "一個禮拜就出 GPT-6.1 Sol...",
      "url": "https://blog.gslin.org/archives/2026/09/30/13233/%e4%b8%80%e5%80%8b%e7%a6%ae%e6%8b%9c%e5%b0%b1%e5%87%ba-gpt-6-1-sol/",
      "date": "2026-09-29"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "年轻人不大喝白酒",
      "url": "https://acevs.com/5262/",
      "date": "2026-09-29"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "痛苦可不可以用求不得来解释",
      "url": "https://www.seis-jun.xyz/blog/2026-09-29-can-we-interpret-pain-with-unsatisfication.html",
      "date": "2026-09-29"
    }
  ],
  "2007": [
    {
      "name": "无标题文档",
      "year": "07",
      "title": "什么是大语言模型（LLM）中的提示词注入？我们该如何防范？（翻译）",
      "url": "https://www.gracecode.com/posts/3211.html",
      "date": "2026-09-29"
    },
    {
      "name": "不靠谱颜论",
      "year": "07",
      "title": "《财务通：直达成功企业的财务智慧》书评",
      "url": "https://yanlinlin.cn/2026/09/29/mastery-of-finance-review/",
      "date": "2026-09-29"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "独家：CSS背景色单方向扩展技术",
      "url": "https://www.zhangxinxu.com/wordpress/2026/09/css-background-extend/",
      "date": "2026-09-29"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "骑行，寻公园不遇",
      "url": "https://www.iliu.org/posts/xun-gongyuan-bu-yu/",
      "date": "2026-09-29"
    }
  ],
  "2011": [
    {
      "name": "罗磊",
      "year": "11",
      "title": "我的网络方案：2026 年的折腾记录",
      "url": "https://luolei.org/my-network-2026",
      "date": "2026-09-29"
    }
  ],
  "2012": [
    {
      "name": "王鑫",
      "year": "12",
      "title": "AI做网站之r2share:文件分享站",
      "url": "https://wonse.info/r2share.html",
      "date": "2026-09-29"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "林羽凡笔记鸿蒙版的笔记详情页，重新优化了一个版本的markdown渲染器",
      "url": "https://www.linyufan.com/post/6060",
      "date": "2026-09-29"
    },
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "Halo2Bark 发布：把 Halo 站点通知实时推送到 iPhone",
      "url": "https://wuqishi.com/archives/halo2bark-release",
      "date": "2026-09-29"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "AI 时代会 K 型分化的，早早准备吧！",
      "url": "https://www.ccgxk.com/emlog_dev/900.html",
      "date": "2026-09-29"
    }
  ],
  "2020": [
    {
      "name": "孙振超",
      "year": "20",
      "title": "win11 恢复使用 win10的鼠标右键菜单",
      "url": "https://www.aqzx.com/blog/post/50.html",
      "date": "2026-09-29"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "自建音乐服务，浏览器直接听歌还支持多源搜索",
      "url": "https://9sb.net/archives/self-built-music-service-allowing-direct-listening-to-music-through-the-browser-and-supporting-multisource-search.html",
      "date": "2026-09-29"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "Instagram广告吸引更多粉丝的方法",
      "url": "https://www.bailuze.com/24452.html",
      "date": "2026-09-29"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "国庆准备爬峨眉山",
      "url": "https://ygz.ink/archives/5860.html",
      "date": "2026-09-29"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "熬夜写论文",
      "url": "https://www.immarcus.com/blog/stay-up-writing-papers",
      "date": "2026-09-29"
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
