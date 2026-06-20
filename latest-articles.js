// ==================== latest-articles.js ====================
// 抓取日期: 6/20/2026, 10:54:29 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "花了一个月时间，才磕磕绊绊把这本书读了",
      "url": "https://wlj.me/notes/sp-note-20260620-164446/",
      "date": "2026-06-20"
    }
  ],
  "2001": [
    {
      "name": "nc-show",
      "year": "01",
      "title": "《永恒的舞动》第一百二十八章",
      "url": "https://nicrosoft.net/blog/2335/",
      "date": "2026-06-19"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "99% might be enough (or not)",
      "url": "https://seths.blog/2026/06/99-might-be-enough-or-not/",
      "date": "2026-06-20"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "初次吃荔乡凤",
      "url": "http://www.xlanda.net/posts/22276",
      "date": "2026-06-20"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "大模型正在见顶！传奇架构师：欢迎来到“平坦曲线时代”",
      "url": "https://tonybai.com/2026/06/20/steve-yegge-the-flat-curve-society/",
      "date": "2026-06-19"
    },
    {
      "name": "小陈故事",
      "year": "04",
      "title": "伤心的孩子啊",
      "url": "https://www.chener.net/archives/sadchild/",
      "date": "2026-06-19"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "电钢琴续2",
      "url": "https://acevs.com/5050/",
      "date": "2026-06-20"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "6月19日，六月节",
      "url": "https://www.munue.com/juneteenth.html",
      "date": "2026-06-19"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "重读《格鲁夫给经理人的第一课》-20260619",
      "url": "https://guoxiaoli.com/post/664.html",
      "date": "2026-06-19"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "“林羽凡笔记”中的语音Agent开发完成了",
      "url": "https://www.linyufan.com/post/5860",
      "date": "2026-06-20"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "强制间隔投影（Margin-Enforcing Projection）",
      "url": "https://kexue.fm/archives/11784",
      "date": "2026-06-19"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "个站商店悄悄的删除我的博客",
      "url": "https://www.suiyan.cc/blog/20260620131006",
      "date": "2026-06-20"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "端午牛逼",
      "url": "https://blog.xinshijiededa.men/tuen-ng/",
      "date": "2026-06-19"
    }
  ],
  "2020": [
    {
      "name": "瓦解",
      "year": "20",
      "title": "AI开发——安卓备忘录 memoX",
      "url": "https://hin.cool/posts/memox.html",
      "date": "2026-06-20"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-19",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-19",
      "date": "2026-06-19"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "腾讯推出腾讯网盘",
      "url": "https://ygz.ink/archives/5326.html",
      "date": "2026-06-20"
    },
    {
      "name": "建站百科",
      "year": "23",
      "title": "弘速云免费发放福利了，10台美国NTT双ISP VPS套餐抽奖活动！",
      "url": "https://www.jzbk.net/3114.html",
      "date": "2026-06-20"
    },
    {
      "name": "小归客",
      "year": "23",
      "title": "开源#纪念日提醒程序",
      "url": "https://xgk.pw/archives/298/",
      "date": "2026-06-20"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "MPC 的人生",
      "url": "https://www.immarcus.com/blog/model-predictive-controlled-life",
      "date": "2026-06-20"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "今日手绘｜复古甜妹的俏皮 wink",
      "url": "https://zhouayuan.com/post/56.html",
      "date": "2026-06-20"
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
