// ==================== latest-articles.js ====================
// 抓取日期: 8/22/2026, 7:34:21 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "试画人物两天自嘲翻车",
      "url": "https://wlj.me/notes/sp-note-20260822-180224/",
      "date": "2026-08-22"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "屡屡快递撞板",
      "url": "http://www.xlanda.net/posts/22415",
      "date": "2026-08-22"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "微醺",
      "url": "https://ezo.biz/Diary/1600.html",
      "date": "2026-08-22"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Rust官方砸半年时间访谈70+人：学Rust到底卡在哪，AI又帮上了多少忙？",
      "url": "https://tonybai.com/2026/08/22/rust-official-learning-rust-journey/",
      "date": "2026-08-21"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年8月22日",
      "url": "https://acevs.com/5183/",
      "date": "2026-08-22"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "最近干了点啥？",
      "url": "https://yishu-life.com/index.php/archives/552.html",
      "date": "2026-08-22"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "抓娃娃就是快乐啊",
      "url": "https://me.xu19.com/summer-vacation-taking-my-daughter-to-wanda-department-store-claw-machine-is-just-happiness/",
      "date": "2026-08-22"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "更好的 Node.js 包管理工具PNPM",
      "url": "https://www.biaodianfu.com/pnpm/",
      "date": "2026-08-22"
    },
    {
      "name": "老张",
      "year": "09",
      "title": "Obsidian 笔记同步插件-Fast Note Sync For Obsidian",
      "url": "https://laozhang.org/archives/4317.html",
      "date": "2026-08-22"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "博客与生活",
      "url": "https://www.leitao.cn/10693.html",
      "date": "2026-08-22"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "未来，AI 代码审查 会相当相当重要！",
      "url": "https://www.ccgxk.com/emlog_dev/855.html",
      "date": "2026-08-22"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "京东快递一周给我打两次电话，推荐我寄快递选京东，最后我还是选经常用的申通快递",
      "url": "https://www.bufanz.com/20260822832.html",
      "date": "2026-08-22"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-22",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-22",
      "date": "2026-08-22"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "核心影视优化记录：视频源从时好时坏到稳定能看",
      "url": "https://9sb.net/archives/core-film-and-television-optimization-record-video-sources-from-good-to-bad-to-stable-for-viewing.html",
      "date": "2026-08-22"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "空枪",
      "url": "https://jefftay.com/movies/v-2026",
      "date": "2026-08-23"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "机场推荐",
      "url": "https://siwei.li/wgetcloud-yizhihongxing-review/",
      "date": "2026-08-22"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "codex官方下载地址",
      "url": "https://www.sanshu.cn/arc/278.html",
      "date": "2026-08-22"
    },
    {
      "name": "姓王者",
      "year": "24",
      "title": "我用 Is Agentic 给博客做了一次体检",
      "url": "https://xingwangzhe.fun/posts/is-agentic-blog-check/",
      "date": "2026-08-22"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "Final Fantasy XII",
      "url": "https://www.immarcus.com/blog/final-fantasy-xii",
      "date": "2026-08-22"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "说说：FC27 邝兆镭（Kuang Zhaolei）球员卡，最大亮点就是速度…",
      "url": "https://yigeboke.com/shuoshuo.php#shuo_38",
      "date": "2026-08-22"
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
