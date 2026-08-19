// ==================== latest-articles.js ====================
// 抓取日期: 8/19/2026, 7:34:27 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：如何找到最吸引人的购买理由",
      "url": "https://www.ufoer.com/post/13983.html",
      "date": "2026-08-19"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Harness 不是一次性脚手架：自进化 Coding Agent 系统如何越跑越强",
      "url": "https://tonybai.com/2026/08/19/self-evolving-coding-agent-harness-map/",
      "date": "2026-08-18"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "大学宿舍咋了",
      "url": "http://www.xlanda.net/posts/22409",
      "date": "2026-08-19"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "清仓科技",
      "url": "https://acevs.com/5177/",
      "date": "2026-08-19"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "蟹钳比手机大",
      "url": "https://me.xu19.com/today-i-ate-a-crab-claw-bigger-than-an-iphone-18-smartphone/",
      "date": "2026-08-19"
    }
  ],
  "2009": [
    {
      "name": "且听书吟",
      "year": "09",
      "title": "汉字之海",
      "url": "https://yufan.me/posts/the-word-boat-chronicle",
      "date": "2026-08-19"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "复议&amp;老宅",
      "url": "https://zhou.ge/2026-08-19.html",
      "date": "2026-08-19"
    },
    {
      "name": "磊磊落落",
      "year": "10",
      "title": "当下国内汽车制造行业的乱象",
      "url": "https://leileiluoluo.com/posts/qi-che-zhi-zao-luan-xiang.html",
      "date": "2026-08-19"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "美国债务简记",
      "url": "https://www.leitao.cn/10605.html",
      "date": "2026-08-19"
    },
    {
      "name": "王鑫",
      "year": "12",
      "title": "我的博客更新与优化记录",
      "url": "https://wonse.info/ai-youhua-blog.html",
      "date": "2026-08-19"
    }
  ],
  "2014": [
    {
      "name": "运营不加班",
      "year": "14",
      "title": "L20实测Qwen3.8-27B",
      "url": "https://nops.icu/archives/252/",
      "date": "2026-08-19"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 위젯 내보내기/가져오기 방법",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ec%9c%84%ec%a0%af-%eb%82%b4%eb%b3%b4%eb%82%b4%ea%b8%b0-%ea%b0%80%ec%a0%b8%ec%98%a4%ea%b8%b0/",
      "date": "2026-08-19"
    }
  ],
  "2017": [
    {
      "name": "染念",
      "year": "17",
      "title": "解读 TAOT：MoE 动态副本调度优化 EP 负载的新思路",
      "url": "https://dyedd.cn/posts/taot-moe-speedup",
      "date": "2026-08-18"
    },
    {
      "name": "染念",
      "year": "17",
      "title": "解读 TAOT：MoE 动态副本调度优化 EP 负载的新思路",
      "url": "https://dyedd.cn/posts/taot-moe-speedup",
      "date": "2026-08-18"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "影响我工作状态的两个变量",
      "url": "https://shitao5.org/posts/work-state-variables/",
      "date": "2026-08-19"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "流浪代码",
      "url": "https://www.wsh233.cn/post/流浪代码",
      "date": "2026-08-19"
    },
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "做个好人并改变世界",
      "url": "https://www.ddf.im/index.php/2026/08/19/1262.html",
      "date": "2026-08-19"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-19",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-19",
      "date": "2026-08-19"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "去试试",
      "url": "https://ygz.ink/archives/5694.html",
      "date": "2026-08-19"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "社交媒体上充钱",
      "url": "https://www.immarcus.com/blog/money-in-social-media",
      "date": "2026-08-19"
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
