// ==================== latest-articles.js ====================
// 抓取日期: 8/2/2026, 8:22:29 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "第一次听说“胁迫密码”和“Graphen",
      "url": "https://wlj.me/notes/sp-note-20260802-230820/",
      "date": "2026-08-02"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The Rowboat",
      "url": "https://seths.blog/2026/08/the-rowboat/",
      "date": "2026-08-02"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "作死的月末设定",
      "url": "http://www.xlanda.net/posts/22372",
      "date": "2026-08-02"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "ccsa：给 Claude Code 的 session 起个人类可记的名字，一键 resume",
      "url": "https://tonybai.com/2026/08/02/ccsa-claude-code-session-alias-tool/",
      "date": "2026-08-01"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "人生需要做一些减法",
      "url": "https://ezo.biz/Diary/1534.html",
      "date": "2026-08-02"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "自助火锅尝试",
      "url": "https://acevs.com/5142/",
      "date": "2026-08-02"
    }
  ],
  "2008": [
    {
      "name": "有氧呼吸",
      "year": "08",
      "title": "用AI Agent低成本构建ETF策略推送",
      "url": "https://www.oxy.one/2026/08/ai-agentetf.html",
      "date": "2026-08-02"
    },
    {
      "name": "Kwx",
      "year": "08",
      "title": "Docker Cacti 数据采集速度备忘",
      "url": "https://kwx.cc/post/3959",
      "date": "2026-08-02"
    }
  ],
  "2010": [
    {
      "name": "limboy",
      "year": "10",
      "title": "社交媒体与香烟",
      "url": "https://limboy.me/posts/social-media-and-cigarettes",
      "date": "2026-08-02"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录",
      "url": "https://www.linyufan.com/post/5931",
      "date": "2026-08-02"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 GeneratePress 테마 블로그 카테고리 및 태그 숨기기",
      "url": "https://www.thewordcracker.com/intermediate/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-generatepress-%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac-%eb%b0%8f-%ed%83%9c%ea%b7%b8-%ec%88%a8%ea%b8%b0%ea%b8%b0/",
      "date": "2026-08-01"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "知识产物究竟该长什么样？今天聊聊 OKF！",
      "url": "https://www.ccgxk.com/emlog_dev/830.html",
      "date": "2026-08-02"
    }
  ],
  "2019": [
    {
      "name": "瓜老汉",
      "year": "19",
      "title": "即将回家，还有些激动，真激动",
      "url": "http://www.gualaohan.com/post/823",
      "date": "2026-08-01"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "周末流水账 0802",
      "url": "https://blog.solazy.me/20260802/",
      "date": "2026-08-02"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "大叔的讨年庚和表妹的升学宴",
      "url": "https://www.imcry.vip/post/2026-8-2-1452/",
      "date": "2026-08-02"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "前两天做的评论与消息通知优化",
      "url": "https://www.dalao.net/thread-61936.htm",
      "date": "2026-08-02"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "西溪湿地的荷花",
      "url": "https://www.wsh233.cn/post/西溪湿地的荷花",
      "date": "2026-08-02"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-02",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-02",
      "date": "2026-08-02"
    }
  ],
  "2023": [
    {
      "name": "小归客",
      "year": "23",
      "title": "MD，花了400购买了个qq飞车雷诺",
      "url": "https://xgk.pw/archives/317/",
      "date": "2026-08-02"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "草稿有点越积越多了",
      "url": "https://www.immarcus.com/blog/drafts-backlogged",
      "date": "2026-08-02"
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
