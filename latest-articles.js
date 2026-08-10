// ==================== latest-articles.js ====================
// 抓取日期: 8/10/2026, 8:02:39 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "Tw93 在 Twitter 上的一篇文",
      "url": "https://wlj.me/notes/sp-note-20260810-143913/",
      "date": "2026-08-10"
    }
  ],
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "咖啡经不起过萃",
      "url": "https://kaix.in/2026/0810/",
      "date": "2026-08-10"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "戒咖啡2周",
      "url": "https://ezo.biz/Diary/2.html",
      "date": "2026-08-10"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "性价比与全力以赴",
      "url": "http://www.xlanda.net/posts/22390",
      "date": "2026-08-10"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "轮滑九次",
      "url": "https://acevs.com/5159/",
      "date": "2026-08-10"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Django 將每年出一版 LTS",
      "url": "https://blog.gslin.org/archives/2026/08/11/13140/django-%e5%b0%87%e6%af%8f%e5%b9%b4%e5%87%ba%e4%b8%80%e7%89%88-lts/",
      "date": "2026-08-10"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "呆呆农场 · 赛博朋克改版上线",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1270",
      "date": "2026-08-10"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "告别了，四哥；告别了，东野圭吾",
      "url": "https://bwskyer.com/farewell-four-god-and-higashino.html",
      "date": "2026-08-10"
    },
    {
      "name": "军",
      "year": "08",
      "title": "台风白海豚正面登录：暴雨百年遇，全城成汪洋",
      "url": "https://me.xu19.com/typhon-white-dolphin-slams-taizhou-historic-flooding-paralyzes-city/",
      "date": "2026-08-10"
    }
  ],
  "2009": [
    {
      "name": "且听书吟",
      "year": "09",
      "title": "永恒的凝视",
      "url": "https://yufan.me/posts/eternal-gaze",
      "date": "2026-08-10"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "“窗帘为什么是蓝色的？”：文学作品的最终解释权，到底归谁？",
      "url": "https://www.tjsky.net/natter/1751",
      "date": "2026-08-10"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "向云端｜西南自驾09 - 施秉",
      "url": "https://blog.ops-coffee.com/r/2026-southwest-road-trip-09-shibing.html",
      "date": "2026-08-10"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "忽有故人心上过 回首山河已是秋",
      "url": "https://liuqingwushui.top/archives/183/",
      "date": "2026-08-10"
    },
    {
      "name": "Allen Hua",
      "year": "19",
      "title": "绝壁与深谷：2026盛夏的南太行自驾游",
      "url": "https://hellodk.cn/post/1229",
      "date": "2026-08-10"
    }
  ],
  "2021": [
    {
      "name": "Robes",
      "year": "21",
      "title": "亲爱的，我爱你",
      "url": "https://robes.xin/1219.html",
      "date": "2026-08-10"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "周末爬山记",
      "url": "https://www.wsh233.cn/post/周末爬山记",
      "date": "2026-08-10"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "长酉",
      "url": "https://blog.verynb.net/posts/62029.html",
      "date": "2026-08-10"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "MURS：少见的 VHF 对讲机",
      "url": "https://blog.mfwt.top/index.php/archives/1519/",
      "date": "2026-08-10"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "舞萌DX错误码0010深度解析及处理方法",
      "url": "https://xice.cx/posts/maiErr0010/",
      "date": "2026-08-10"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "MiniMax H3 开箱体验",
      "url": "https://www.immarcus.com/blog/minimax-h3-first-impression",
      "date": "2026-08-10"
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
