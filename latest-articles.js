// ==================== latest-articles.js ====================
// 抓取日期: 8/30/2026, 10:01:00 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Taking a shot/wasting a slot",
      "url": "https://seths.blog/2026/08/taking-a-shot-wasting-a-slot/",
      "date": "2026-08-30"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "别再死磕 K8s 文档了：一个“亚马逊仓库”的比喻，把 Kubernetes 全部讲透",
      "url": "https://tonybai.com/2026/08/30/kubernetes-warehouse-analogy-explained/",
      "date": "2026-08-29"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "我就是个修理工",
      "url": "http://www.xlanda.net/posts/22432",
      "date": "2026-08-30"
    }
  ],
  "2005": [
    {
      "name": "Lenciel",
      "year": "05",
      "title": "徒然歌",
      "url": "https://lenciel.com/2026/08/useless-songs/",
      "date": "2026-08-30"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年8月30日",
      "url": "https://acevs.com/5199/",
      "date": "2026-08-30"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "用 LLM 寫了 Caddy 的 DNSBL 套件",
      "url": "https://blog.gslin.org/archives/2026/08/30/13169/%e7%94%a8-llm-%e5%af%ab%e4%ba%86-caddy-%e7%9a%84-dnsbl-%e5%a5%97%e4%bb%b6/",
      "date": "2026-08-29"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "烦恼的根源是自己还不够强大",
      "url": "https://yishu-life.com/index.php/archives/553.html",
      "date": "2026-08-30"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "《估值原理》读书笔记：价格背后的游戏、责任与社会秩序",
      "url": "https://blog.devtang.com/2026/08/30/valuation-principles-note/",
      "date": "2026-08-30"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "休谟《人性论》导读手册",
      "url": "https://www.leitao.cn/10774.html",
      "date": "2026-08-30"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "人生的紧要处，常常只有几步",
      "url": "https://wangyurui.com/posts/chao-xiao-gao-jia-lin-li-jie-gao-jia-lin-cheng-w-7dae4e6f",
      "date": "2026-08-30"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "大白话讲讲 git 里常用的几个高级操作是怎么回事",
      "url": "https://www.ccgxk.com/emlog_dev/865.html",
      "date": "2026-08-30"
    }
  ],
  "2018": [
    {
      "name": "吖远zzy",
      "year": "18",
      "title": "一个简单的脚本，治好了我的下载文件夹焦虑症",
      "url": "https://www.hzv5.cn/2026/08/30/my-download-dir/",
      "date": "2026-08-30"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-07-09 / ARM，隐忍",
      "url": "https://blog.xinshijiededa.men/daily/72/",
      "date": "2026-08-30"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "隔壁桌的暧昧学",
      "url": "https://blog.solazy.me/20260830/",
      "date": "2026-08-30"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-30",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-30",
      "date": "2026-08-30"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "生活碎碎念：升学首日有感",
      "url": "https://blog.mfwt.top/index.php/archives/1562/",
      "date": "2026-08-30"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "超级礼物",
      "url": "https://jefftay.com/movies/the-ultimate-gift",
      "date": "2026-08-30"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "座次考试",
      "url": "https://www.immarcus.com/blog/seating-audition",
      "date": "2026-08-30"
    }
  ],
  "2026": [
    {
      "name": "妄司逸",
      "year": "26",
      "title": "博客近期将迁移至WordPress动态博客！！！",
      "url": "https://blog.flechazo.icu/2026/08/30/%E8%BF%81%E7%A7%BB%20/",
      "date": "2026-08-30"
    },
    {
      "name": "安迪",
      "year": "26",
      "title": "可恶的资本家",
      "url": "https://i55.top/archives/546/",
      "date": "2026-08-30"
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
