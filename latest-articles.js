// ==================== latest-articles.js ====================
// 抓取日期: 6/24/2026, 8:56:24 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "关于长城的误解",
      "url": "https://doyj.com/2026/06/24/%e5%85%b3%e4%ba%8e%e9%95%bf%e5%9f%8e%e7%9a%84%e8%af%af%e8%a7%a3/",
      "date": "2026-06-24"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 1.27新特性前瞻：泛型方法落地，标准库内建 UUID",
      "url": "https://tonybai.com/2026/06/24/go-1-27-foresight/",
      "date": "2026-06-23"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "从广州碧桂园到丽江花园",
      "url": "http://www.xlanda.net/posts/22284",
      "date": "2026-06-24"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "www.hinet.net 被消滅了",
      "url": "https://blog.gslin.org/archives/2026/06/24/13081/www-hinet-net-%e8%a2%ab%e6%b6%88%e6%bb%85%e4%ba%86/",
      "date": "2026-06-24"
    },
    {
      "name": "春田",
      "year": "05",
      "title": "１０８０．「働く」について考える　(６)ディズニーランドの駐車場係の話",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/06/post-5f2557.html",
      "date": "2026-06-24"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "日更是没用的",
      "url": "https://joojen.com/archives/9040.html",
      "date": "2026-06-24"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "CSS color-scheme属性与light-dark()颜色函数",
      "url": "https://www.zhangxinxu.com/wordpress/2026/06/css-color-theme-light-dark-function/",
      "date": "2026-06-24"
    },
    {
      "name": "标点符",
      "year": "09",
      "title": "Node.Js 版本管理工具nvm-windows",
      "url": "https://www.biaodianfu.com/nvm-windows.html",
      "date": "2026-06-24"
    },
    {
      "name": "老张",
      "year": "09",
      "title": "Telegram群抽奖机器人，开源了！",
      "url": "https://laozhang.org/archives/4173.html",
      "date": "2026-06-24"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "第六章 交易为什么这么难：制度经济学与真实世界",
      "url": "https://www.leitao.cn/10382.html",
      "date": "2026-06-24"
    }
  ],
  "2014": [
    {
      "name": "梦幻辰风",
      "year": "14",
      "title": "狗蛋的居家生活",
      "url": "https://www.mhcf.net/post-1210.html",
      "date": "2026-06-24"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스에서 갑자기 '응답이 올바른 JSON 응답이 아닙니다' 오류가 발생하는 경우",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4%ec%97%90%ec%84%9c-%ea%b0%91%ec%9e%90%ea%b8%b0-%ec%9d%91%eb%8b%b5%ec%9d%b4-%ec%98%ac%eb%b0%94%eb%a5%b8-json-%ec%9d%91%eb%8b%b5%ec%9d%b4-%ec%95%84/",
      "date": "2026-06-24"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "腻了",
      "url": "https://www.suiyan.cc/blog/20260624182301",
      "date": "2026-06-24"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "出海 Web 之  Vercel 的必踩坑和 140 分钟需求调研",
      "url": "https://www.ccgxk.com/codeother/788.html",
      "date": "2026-06-24"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "R0对战平台后门被石锤，远控用户电脑是其手段之一",
      "url": "https://www.imcry.vip/post/2026-6-25-016/",
      "date": "2026-06-24"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "和朋友在武汉东湖 city walk 回忆录",
      "url": "https://usj.cc/20260624214719.html",
      "date": "2026-06-24"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-24",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-24",
      "date": "2026-06-24"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "观天龙八部2-王语嫣与AI",
      "url": "https://www.wsh233.cn/post/观天龙八部2-王语嫣与大模型",
      "date": "2026-06-24"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "人工智能实训Day3：Agent智能体实践——工具调用与多技能协作",
      "url": "https://xingwangzhe.fun/posts/ai-training-agent-day3/",
      "date": "2026-06-24"
    }
  ],
  "2025": [
    {
      "name": "桃子味",
      "year": "25",
      "title": "经验福利—异次元发卡配置支付宝当面付教程",
      "url": "https://www.taoziwei.com/339/",
      "date": "2026-06-24"
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
