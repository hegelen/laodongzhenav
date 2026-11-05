// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-05 00:18:21
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "新书夹缝生长自嘲半成品",
      "url": "https://wlj.me/notes/sp-note-20261104-083501/",
      "date": "2026-11-04"
    }
  ],
  "2004": [
    {
      "name": "小陈故事",
      "year": "04",
      "title": "字节时间与黑咖啡",
      "url": "https://www.chener.net/archives/bdtimes/",
      "date": "2026-11-04"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "特朗普药丸",
      "url": "https://synyan.cn/t/64272",
      "date": "2026-11-04"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "组装引体向上架",
      "url": "https://www.xlanda.net/posts/22596",
      "date": "2026-11-05"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "从 Agent Swarm 到 Single Agent：AI Agent 的高效架构，正在走向两条路",
      "url": "https://tonybai.com/2026/11/05/agent-swarm-vs-single-agent-architecture/",
      "date": "2026-11-04"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "感染短视频病毒",
      "url": "https://ezo.biz/Diary/1794.html",
      "date": "2026-11-04"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "西洋棋演算法這三十年的改進",
      "url": "https://blog.gslin.org/archives/2026/11/05/13327/%e8%a5%bf%e6%b4%8b%e6%a3%8b%e6%bc%94%e7%ae%97%e6%b3%95%e9%80%99%e4%b8%89%e5%8d%81%e5%b9%b4%e7%9a%84%e6%94%b9%e9%80%b2/",
      "date": "2026-11-04"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "https利弊(7)：建站税",
      "url": "http://www.auiou.com/relevant/00002234.jsp",
      "date": "2026-11-04"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "红果短剧，根本停不下来！",
      "url": "https://www.munue.com/822.html",
      "date": "2026-11-04"
    }
  ],
  "2008": [
    {
      "name": "河马",
      "year": "08",
      "title": "Akkocloud 圣何塞KVM-CN2-A2 mini评测",
      "url": "https://www.iamhippo.com/2026-11/1978.html",
      "date": "2026-11-04"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "大A又是冲动的一天",
      "url": "https://www.leitao.cn/11563.html",
      "date": "2026-11-04"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "HTTP2Shell: PHP2Shell에 이어 등장한 Brotli 취약점과 워드프레스",
      "url": "https://www.thewordcracker.com/intermediate/http2shell-brotli-vulnerability-wordpress/",
      "date": "2026-11-04"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-08-25 / 紫檀和紫谱",
      "url": "https://blog.xinshijiededa.men/daily/114/",
      "date": "2026-11-04"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件ServerProbe：Typecho轻量级服务器监控探针插件",
      "url": "https://www.bufanz.com/202611041241.html",
      "date": "2026-11-04"
    },
    {
      "name": "瓦解",
      "year": "20",
      "title": "又被迫折腾了一次黑群晖引导",
      "url": "https://hin.cool/posts/nasrrupdate.html",
      "date": "2026-11-04"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "腾讯云EdgeOne-Makers计费调整",
      "url": "https://www.imcry.vip/post/2026-11-5-057/",
      "date": "2026-11-04"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-04：AgentKit by Scalekit、Teamily AI、Testifly",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-04",
      "date": "2026-11-04"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "国行终于等来了Apple智能",
      "url": "https://siwei.li/apple-intelligence-on-china-iphones/",
      "date": "2026-11-04"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "影响网站内页收录的八大因素",
      "url": "https://www.bailuze.com/24560.html",
      "date": "2026-11-04"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "让 Via 浏览器评论更省事：我的自动填充脚本分享",
      "url": "https://sheep5.net/archives/619.html",
      "date": "2026-11-04"
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
