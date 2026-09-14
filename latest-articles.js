// ==================== latest-articles.js ====================
// 抓取日期: 9/14/2026, 10:28:44 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "Artifactory 是什么",
      "url": "https://wlj.me/posts/20260914-artifactory/",
      "date": "2026-09-14"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Canceling one flight",
      "url": "https://seths.blog/2026/09/canceling-one-flight/",
      "date": "2026-09-14"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "刚刚，Go 社区冒出一个“AI 工厂”：SuperPlane 开源，专治 AI Agent 乱来",
      "url": "https://tonybai.com/2026/09/15/superplane-ai-factory-go-open-source/",
      "date": "2026-09-14"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "DIY(35-3)：6路×2 USB全自动电脑切换器",
      "url": "http://www.auiou.com/relevant/00002196.jsp",
      "date": "2026-09-14"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "你可以从大学带走什么（转载）",
      "url": "https://acevs.com/5231/",
      "date": "2026-09-14"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "联合国敦促使用“平等地球投影”新世界地图",
      "url": "https://www.munue.com/817.html",
      "date": "2026-09-14"
    }
  ],
  "2008": [
    {
      "name": "四火的唠叨",
      "year": "08",
      "title": "为什么我不买大盘，只坚持投资个股",
      "url": "https://www.raychase.net/8305",
      "date": "2026-09-14"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "杂谈|| 2027年一级注册建筑师各大培训机构介绍（合集）【带避雷机构】",
      "url": "https://www.yishu.pro/245.html",
      "date": "2026-09-14"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "《当代政治哲学》简单梳理",
      "url": "https://www.leitao.cn/10885.html",
      "date": "2026-09-14"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.9.14",
      "url": "https://www.linyufan.com/post/6015",
      "date": "2026-09-14"
    },
    {
      "name": "jet",
      "year": "13",
      "title": "Intel i225 / i226-V 固件升级指南",
      "url": "https://jetyu.me/post/intel-i225-i226-firmware-update-guide.html",
      "date": "2026-09-14"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "升级 VMware Workstation 的九九八十一难：幽灵虚拟机、1603 报错和手工装 Tools",
      "url": "https://www.tjsky.net/tutorial/1938",
      "date": "2026-09-14"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海没有跨境电商韭菜好割",
      "url": "https://www.ccgxk.com/codeother/883.html",
      "date": "2026-09-14"
    },
    {
      "name": "科学空间",
      "year": "17",
      "title": "让炼丹更科学一些（十）：单调性假设的拆与补",
      "url": "https://kexue.fm/archives/11885",
      "date": "2026-09-14"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "6 比 5.6 强多少",
      "url": "https://shitao5.org/posts/gpt-6-vs-5-6/",
      "date": "2026-09-14"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-14",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-14",
      "date": "2026-09-14"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "世界上再多一个 DeepSeek Harness 通知插件",
      "url": "https://www.wsh233.cn/post/世界上再多一个-deepseek-harness-通知插件",
      "date": "2026-09-14"
    },
    {
      "name": "Dayu",
      "year": "21",
      "title": "Fitbit Air: 近期最喜欢的数码产品",
      "url": "https://anotherdayu.com/fitbit-air/",
      "date": "2026-09-14"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "链接诱导是什么意思？如何运用这种策略？",
      "url": "https://www.bailuze.com/24417.html",
      "date": "2026-09-14"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "客观的艺术品味",
      "url": "https://www.immarcus.com/blog/objective-artistic-taste",
      "date": "2026-09-14"
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
