// ==================== latest-articles.js ====================
// 抓取日期: 8/5/2026, 8:43:47 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "学习能力在降低",
      "url": "https://ezo.biz/Diary/1541.html",
      "date": "2026-08-05"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI智能体的记忆，终于有人认真研究“文件系统”这条路了——新论文给出五个反直觉答案",
      "url": "https://tonybai.com/2026/08/05/filesystem-based-memory-for-llm-agents/",
      "date": "2026-08-04"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "连续踩坑",
      "url": "http://www.xlanda.net/posts/22378",
      "date": "2026-08-05"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "几个软件测试",
      "url": "https://acevs.com/5149/",
      "date": "2026-08-05"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "积分调整 & 农场优化说明",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1269",
      "date": "2026-08-05"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "机票燃油附加费涨跌有如过山车",
      "url": "https://me.xu19.com/chinas-domestic-airline-fuel-surcharge-in-2026-a-roller-coaster-of-price-fluctuations/",
      "date": "2026-08-05"
    }
  ],
  "2010": [
    {
      "name": "Jeray",
      "year": "10",
      "title": "PC工作环境修复记",
      "url": "https://hi.jeray.wang/K/222.html",
      "date": "2026-08-05"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "书生大模型每月赠送9000万Tokens算力，适用于长文本和信息整合",
      "url": "https://www.dujin.org/23813.html",
      "date": "2026-08-05"
    }
  ],
  "2015": [
    {
      "name": "网工格物",
      "year": "15",
      "title": "Docker Compose 部署 Dify 教程",
      "url": "https://songxwn.com/Dify-Docker-Compose/",
      "date": "2026-08-05"
    },
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "구글 블로거(블로그스팟) 대규모 차단 사태: 멀웨어 오인 오류 및 대처 방법",
      "url": "https://www.thewordcracker.com/blog/%ea%b5%ac%ea%b8%80-%eb%b8%94%eb%a1%9c%ea%b1%b0-%eb%8c%80%ea%b7%9c%eb%aa%a8-%ec%b0%a8%eb%8b%a8-%ec%82%ac%ed%83%9c/",
      "date": "2026-08-05"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "37岁失业程序员1年未找到工作，出路在哪里？",
      "url": "https://www.ccgxk.com/codeother/834.html",
      "date": "2026-08-05"
    }
  ],
  "2018": [
    {
      "name": "吖远zzy",
      "year": "18",
      "title": "利用 Cloudflare Workers 免费搭建自己的短链服务",
      "url": "https://www.hzv5.cn/2026/08/05/Cloudflare_Workers/",
      "date": "2026-08-05"
    }
  ],
  "2019": [
    {
      "name": "herman",
      "year": "19",
      "title": "Committing to creativity",
      "url": "https://herman.bearblog.dev/creativity/",
      "date": "2026-08-05"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "与认识六年的黄哥聚餐",
      "url": "https://www.imcry.vip/post/2026-8-5-1333/",
      "date": "2026-08-05"
    },
    {
      "name": "我不是咕咕鸽",
      "year": "20",
      "title": "iON 一代神鸡陨落：年付 20.19 美元变月付 40 美元，顺便盘点我手上的服务器",
      "url": "https://blog.laoda.de/archives/ion-20-19-yearly-to-40-monthly-vps-review-2026",
      "date": "2026-08-05"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "法医刘良新书《真相不会沉默》：看逝者证言，见生死人心",
      "url": "https://www.bufanz.com/20260805781.html",
      "date": "2026-08-05"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "感谢之人",
      "url": "https://www.wsh233.cn/post/感谢之人",
      "date": "2026-08-05"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-05",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-05",
      "date": "2026-08-05"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "深夜折腾日记：把不稳定的旧东西全部安顿好",
      "url": "https://xiangming.site/1143.html",
      "date": "2026-08-05"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "舞萌机台开机初始化进程详解",
      "url": "https://xice.cx/posts/maimaiPowerOn/",
      "date": "2026-08-05"
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
