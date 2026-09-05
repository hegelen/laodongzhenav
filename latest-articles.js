// ==================== latest-articles.js ====================
// 抓取日期: 9/5/2026, 9:09:42 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Homo Habilis",
      "url": "https://seths.blog/2026/09/homo-habilis/",
      "date": "2026-09-05"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "2001，电脑进了家门",
      "url": "https://www.tortorse.com/archives/computer-came-home-2001/",
      "date": "2026-09-05"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "JetBrains 官方深度指南：如何在 Go 中优雅地处理错误？从底层原理到现代最佳实践",
      "url": "https://tonybai.com/2026/09/05/how-to-handle-errors-in-go/",
      "date": "2026-09-04"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "选刀误砍柴",
      "url": "https://ezo.biz/Diary/1647.html",
      "date": "2026-09-05"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "为游戏而歌唱",
      "url": "https://acevs.com/5213/",
      "date": "2026-09-05"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "DIY(37)：我是如何坚持完成这些DIY作品的？",
      "url": "http://www.auiou.com/relevant/00002191.jsp",
      "date": "2026-09-05"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "透過 BGP 劫持提供假的 Update Server",
      "url": "https://blog.gslin.org/archives/2026/09/06/13184/%e9%80%8f%e9%81%8e-bgp-%e5%8a%ab%e6%8c%81%e6%8f%90%e4%be%9b%e5%81%87%e7%9a%84-update-server/",
      "date": "2026-09-05"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0003",
      "url": "https://lenciel.com/2026/09/fragments-0x0003/",
      "date": "2026-09-05"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "参观宇树机器人",
      "url": "https://me.xu19.com/visit-hangzhou-unitree-technology-co-ltd-robot-performance/",
      "date": "2026-09-05"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "全球高利率及高主权债务下的经济压力",
      "url": "https://www.leitao.cn/10808.html",
      "date": "2026-09-05"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.9.5",
      "url": "https://www.linyufan.com/post/5992",
      "date": "2026-09-05"
    }
  ],
  "2015": [
    {
      "name": "满心",
      "year": "15",
      "title": "小神兽终于上幼儿园了",
      "url": "https://zhoutian.com/393.html",
      "date": "2026-09-05"
    }
  ],
  "2016": [
    {
      "name": "故事里",
      "year": "16",
      "title": "每个角落的人都过着相似的人生",
      "url": "https://www.gushi.li/people-everywhere-live-similar-lives.html",
      "date": "2026-09-05"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "让炼丹更科学一些（九）：经典自适应梯度算法",
      "url": "https://kexue.fm/archives/11882",
      "date": "2026-09-05"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "自由软件为什么大都比较难用、难看？",
      "url": "https://www.ccgxk.com/emlog_dev/873.html",
      "date": "2026-09-05"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "解决 Ubuntu 24.04 汉字显示为日本汉字问题",
      "url": "https://qiukui-note.happy365.day/20260905/fix-chinese-character-display-as-japanese-on-ubuntu/",
      "date": "2026-09-05"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "周末流水账 0905",
      "url": "https://blog.solazy.me/20260905/",
      "date": "2026-09-05"
    },
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-07-12 / 美式草药",
      "url": "https://blog.xinshijiededa.men/daily/75/",
      "date": "2026-09-05"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-05",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-05",
      "date": "2026-09-05"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO面试20个问题与答案",
      "url": "https://www.bailuze.com/24399.html",
      "date": "2026-09-05"
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
