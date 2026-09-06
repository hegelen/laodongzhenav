// ==================== latest-articles.js ====================
// 抓取日期: 9/6/2026, 9:18:15 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The lab, the factory and the dentist",
      "url": "https://seths.blog/2026/09/the-lab-the-factory-and-the-dentist/",
      "date": "2026-09-06"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "投奔豆包输入法",
      "url": "http://www.xlanda.net/posts/22447",
      "date": "2026-09-06"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 1.27 Release Party 实录：泛型方法为什么「憋」了五年？Go核心团队罕见自曝内幕",
      "url": "https://tonybai.com/2026/09/06/go-1-27-release-party-insider-story/",
      "date": "2026-09-05"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "作弊条：在 Nginx 中正确配置自定义 404 页面",
      "url": "https://blog.delphij.net/posts/2026/09/custom-404/",
      "date": "2026-09-06"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "Ghost in the Shell",
      "url": "https://ezo.biz/movies/1649.html",
      "date": "2026-09-06"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Google 的 AI 模式會抓到比較貴的商品價格",
      "url": "https://blog.gslin.org/archives/2026/09/07/13186/google-%e7%9a%84-ai-%e6%a8%a1%e5%bc%8f%e6%9c%83%e6%8a%93%e5%88%b0%e6%af%94%e8%bc%83%e8%b2%b4%e7%9a%84%e5%95%86%e5%93%81%e5%83%b9%e6%a0%bc/",
      "date": "2026-09-06"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026-09-06",
      "url": "https://acevs.com/5215/",
      "date": "2026-09-06"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "Phorge 现代化改造实战（四）：拆分模块到 Gorge，无侵入改造不等于不碰文件",
      "url": "https://soulteary.com/2026/09/06/phorge-modernization-part-4-split-modules-to-gorge.html",
      "date": "2026-09-06"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "1.2W上座率，泰山队，我拿什么拯救你",
      "url": "https://www.mmtx.net/1181.html",
      "date": "2026-09-06"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "BPG 连接建立失败问题",
      "url": "https://www.kawabangga.com/posts/7397",
      "date": "2026-09-06"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "林羽凡笔记 · 积分体系升级 & AI 对话计费正式上线",
      "url": "https://www.linyufan.com/post/5995",
      "date": "2026-09-06"
    }
  ],
  "2014": [
    {
      "name": "xulihang",
      "year": "14",
      "title": "穿透屋顶的High Kick",
      "url": {
        "$": {
          "href": "https://blog.xulihang.me/high-kick-through-the-roof/"
        }
      },
      "date": "2026-09-06"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 페이지 로딩 시 화면이 미세하게 흔들리는 문제 해결 방법",
      "url": "https://www.thewordcracker.com/intermediate/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%eb%a1%9c%eb%94%a9-%ec%8b%9c-%ed%99%94%eb%a9%b4-%ed%9d%94%eb%93%a4%eb%a6%bc-%eb%ac%b8%ec%a0%9c-%ed%95%b4%ea%b2%b0/",
      "date": "2026-09-06"
    }
  ],
  "2016": [
    {
      "name": "弹霄博科",
      "year": "16",
      "title": "给静态博客增加一个AI Native的后台",
      "url": "https://www.txisfine.cn/archives/4ecfa762.html",
      "date": "2026-09-06"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海个人挣美元，船小好掉头",
      "url": "https://www.ccgxk.com/874.html",
      "date": "2026-09-06"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "macOS 图片处理神器 sips",
      "url": "https://qiukui-note.happy365.day/20260906/macos-sips-usage/",
      "date": "2026-09-06"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-06",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-06",
      "date": "2026-09-06"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "拿到检查报告，压在心头的石头终于落地",
      "url": "https://9sb.net/archives/upon-receiving-the-inspection-report-the-stone-weighing-heavily-on-my-heart-finally-fell-to-the-ground.html",
      "date": "2026-09-06"
    }
  ],
  "2024": [
    {
      "name": "ImQi1",
      "year": "24",
      "title": "抖音刷到了一个模拟高中的游戏",
      "url": "https://imqi1.com/content/note/1022",
      "date": "2026-09-06"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.09.06 博客阅读周荐 - Wiwi",
      "url": "https://www.immarcus.com/blog/weekly-20260906",
      "date": "2026-09-06"
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
