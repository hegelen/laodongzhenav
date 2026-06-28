// ==================== latest-articles.js ====================
// 抓取日期: 6/28/2026, 8:25:07 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "当ai开始互相写信",
      "url": "https://dongjunke.cn/posts/2026/06/28/11833.html",
      "date": "2026-06-28"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "YC 揭秘 AI 原生组织：打造一家在睡梦中自我进化的公司",
      "url": "https://tonybai.com/2026/06/28/yc-ai-native-company-self-evolving-organizations/",
      "date": "2026-06-27"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "扎针",
      "url": "http://www.xlanda.net/posts/22292",
      "date": "2026-06-28"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "火锅自助没去",
      "url": "https://acevs.com/5067/",
      "date": "2026-06-28"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "第十章 超越主义之争：经济学与人类合作的未来",
      "url": "https://www.leitao.cn/10390.html",
      "date": "2026-06-28"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "“林羽凡笔记”系统支持Mcp协议了",
      "url": "https://www.linyufan.com/post/5873",
      "date": "2026-06-28"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 마이그레이션 파일이 너무 클 때 – 3GB 이상 백업본 이전하기 (feat. All-in-One WP Migration)",
      "url": "https://www.thewordcracker.com/intermediate/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%eb%8c%80%ec%9a%a9%eb%9f%89-%eb%b0%b1%ec%97%85%eb%b3%b8-%eb%a7%88%ec%9d%b4%ea%b7%b8%eb%a0%88%ec%9d%b4%ec%85%98/",
      "date": "2026-06-28"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "社会学为什么在中国难以发展？｜ 隐说 NO. 27",
      "url": "https://wangyurui.com/posts/she-hui-xue-wei-shi-yao-zai-zhong-guo-nan-yi-fa-112bb4cd",
      "date": "2026-06-28"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "静态博客如何添加rss文章聚合？",
      "url": "https://www.suiyan.cc/blog/20260628204100",
      "date": "2026-06-28"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "DeepSeek 发布氮气加速器 DSpark！可惜好东西又开源了",
      "url": "https://www.ccgxk.com/codeother/792.html",
      "date": "2026-06-28"
    }
  ],
  "2018": [
    {
      "name": "希仁之拥",
      "year": "18",
      "title": "领克900半年使用体验",
      "url": "https://blog.keepchen.com/a/Half-Year-Experience-with-the-Lynk-&-Co-900.html",
      "date": "2026-06-28"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "AirPods 一个月丢三次",
      "url": "https://blog.solazy.me/20260628/",
      "date": "2026-06-28"
    },
    {
      "name": "瓜老汉",
      "year": "19",
      "title": "买机票最划算时间点",
      "url": "http://www.gualaohan.com/post/820",
      "date": "2026-06-28"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "唯卓仕微距环长期闲置，在闲鱼成功卖掉，又回本132元",
      "url": "https://www.bufanz.com/20260628691.html",
      "date": "2026-06-28"
    }
  ],
  "2021": [
    {
      "name": "yveji",
      "year": "21",
      "title": "逍遥仙",
      "url": "https://www.yveji.com/Cultural/xiao-yao-xian.html",
      "date": "2026-06-28"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-28",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-28",
      "date": "2026-06-28"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "单反今日练习",
      "url": "https://ygz.ink/archives/5391.html",
      "date": "2026-06-28"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "d3-force-3d 构建时预计算 3D 网络布局，减少客户端渲染压力",
      "url": "https://xingwangzhe.fun/posts/d3-force-precompute-3d/",
      "date": "2026-06-28"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "今日驾驶流水账",
      "url": "https://www.immarcus.com/blog/todays-driving-diary",
      "date": "2026-06-28"
    }
  ],
  "2026": [
    {
      "name": "安迪",
      "year": "26",
      "title": "老薛主机注销我账号",
      "url": "https://i55.top/archives/543/",
      "date": "2026-06-28"
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
