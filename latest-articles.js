// ==================== latest-articles.js ====================
// 抓取日期: 6/5/2026, 12:10:44 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "泳后池边吹风看书",
      "url": "https://wlj.me/notes/sp-note-20260604-220452/",
      "date": "2026-06-04"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "How to teach marketing",
      "url": "https://seths.blog/2026/06/how-to-teach-marketing/",
      "date": "2026-06-05"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 399 期）：中国 AI 大厂访问记",
      "url": "http://www.ruanyifeng.com/blog/2026/06/weekly-issue-399.html",
      "date": "2026-06-05"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "复杂的广电",
      "url": "http://www.xlanda.net/posts/22241",
      "date": "2026-06-05"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "BlogsClub月度拾光福利",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1237",
      "date": "2026-06-05"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "软件 || 图集规范管理软件-文档管理器使用教程",
      "url": "https://www.yishu.pro/219.html",
      "date": "2026-06-04"
    },
    {
      "name": "多多",
      "year": "09",
      "title": "Git 无法连接到你本地 127.0.0.1:xxxx 这个地址处理办法",
      "url": "https://ddlog.cn/?p=536",
      "date": "2026-06-05"
    }
  ],
  "2012": [
    {
      "name": "把酒诗代码",
      "year": "12",
      "title": "干煸藕丝",
      "url": "https://102no.com/2026/06/05/gan-bian-ou-si/",
      "date": "2026-06-05"
    },
    {
      "name": "MacTalk-池建强的随想录",
      "year": "12",
      "title": "CatReader 上线：重启 RSS 阅读",
      "url": "https://macshuo.com/?p=2050",
      "date": "2026-06-04"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "简单总结：接入了阿里云的“读光”OCR识别票据，鸿蒙app显示markdown内容",
      "url": "https://www.linyufan.com/post/5838",
      "date": "2026-06-04"
    }
  ],
  "2015": [
    {
      "name": "elmagnifico",
      "year": "15",
      "title": "Skills进阶",
      "url": "https://elmagnifico.tech/2026/06/05/Agent-Skills2/",
      "date": "2026-06-04"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "WASM、Rust，前端的第二条命！",
      "url": "https://www.ccgxk.com/front-end/768.html",
      "date": "2026-06-04"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "夜宵：懒人泡面",
      "url": "https://www.imcry.vip/post/2026-6-5-229/",
      "date": "2026-06-04"
    },
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "正確的廢話",
      "url": "https://blog.giveanornot.com/technically-correct-bullshit/",
      "date": "2026-06-05"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "分享一个一直自用的博客评论自动填充脚本",
      "url": "https://usj.cc/202606051411.html",
      "date": "2026-06-05"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-05",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-05",
      "date": "2026-06-05"
    }
  ],
  "2023": [
    {
      "name": "火米",
      "year": "23",
      "title": "面对 ai 的语音输入，不需要精确",
      "url": "https://huo.me/input/",
      "date": "2026-06-05"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "欠话费700多",
      "url": "https://ygz.ink/archives/5155.html",
      "date": "2026-06-05"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "墨迹博客(InkBlog) v1.26.6.03 to v1.26.6.05 升级指南",
      "url": "https://www.renhuali.cn/journal/cmq08m3c10001chn9yutw0lis",
      "date": "2026-06-05"
    },
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "跑步刚回来",
      "url": "https://mzdsx.com/2026/06/04/%e8%b7%91%e6%ad%a5%e5%88%9a%e5%9b%9e%e6%9d%a5/",
      "date": "2026-06-04"
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
