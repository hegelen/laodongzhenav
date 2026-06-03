// ==================== latest-articles.js ====================
// 抓取日期: 6/3/2026, 3:28:53 AM
// 只抓取最近14天内的文章，共 40 篇
// 目标 40 篇，实际 40 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "五月看片新旧兼收",
      "url": "https://wlj.me/notes/sp-note-20260603-080610/",
      "date": "2026-06-03"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Stop ruining it",
      "url": "https://seths.blog/2026/06/stop-ruining-it/",
      "date": "2026-06-02"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "通勤方式",
      "url": "http://www.xlanda.net/posts/22237",
      "date": "2026-06-03"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "2026.06.02 16:44",
      "url": "https://kaix.in/2026/0602/",
      "date": "2026-06-02"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Coding agent 自己找到方法取得 root 權限改檔案",
      "url": "https://blog.gslin.org/archives/2026/06/02/13054/coding-agent-%e8%87%aa%e5%b7%b1%e6%89%be%e5%88%b0%e6%96%b9%e6%b3%95%e5%8f%96%e5%be%97-root-%e6%ac%8a%e9%99%90%e6%94%b9%e6%aa%94%e6%a1%88/",
      "date": "2026-06-02"
    }
  ],
  "2006": [
    {
      "name": "平顶山",
      "year": "06",
      "title": "阿联酋-冰与火之歌",
      "url": "https://pingdingshan.me/356.html",
      "date": "2026-06-01"
    },
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "又到一年毕业季",
      "url": "https://joojen.com/archives/9000.html",
      "date": "2026-06-01"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "开启新的健身计划",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1233",
      "date": "2026-06-01"
    }
  ],
  "2008": [
    {
      "name": "四火的唠叨",
      "year": "08",
      "title": "笔记：在 Mac Mini 本地跑 LLM 大模型",
      "url": "https://www.raychase.net/8180",
      "date": "2026-06-01"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "Ubuntu 26.04 用了一个月",
      "url": "https://www.iliu.org/posts/ubuntu-26-04-one-month/",
      "date": "2026-06-02"
    },
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "CSS contrast-color()函数简介",
      "url": "https://www.zhangxinxu.com/wordpress/2026/06/css-contrast-color/",
      "date": "2026-06-01"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "Typecho适合1.2的用户养老",
      "url": "https://www.mmtx.net/1167.html",
      "date": "2026-06-01"
    },
    {
      "name": "Jeray",
      "year": "10",
      "title": "潭山日落-速记（正在编辑中。。。）",
      "url": "https://hi.jeray.wang/L/217.html",
      "date": "2026-06-01"
    },
    {
      "name": "忆往事",
      "year": "10",
      "title": "手机&amp;吃胎",
      "url": "https://zhou.ge/2026-06-01.html",
      "date": "2026-06-01"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "我不小心开了 273 个 Agent",
      "url": "https://blog.devtang.com/2026/06/02/273-agents/",
      "date": "2026-06-02"
    },
    {
      "name": "Verne",
      "year": "11",
      "title": "Surfingkeys：比 Vimium 更强大的浏览器键盘控制扩展",
      "url": "https://blog.einverne.info/post/2026/06/surfingkeys-chrome-extension.html",
      "date": "2026-06-02"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "做个简单总结：今天完成了“林羽凡笔记”agent中的“webSearch”工具",
      "url": "https://www.linyufan.com/post/5834",
      "date": "2026-06-02"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "FluxDown：一款界面精美、功能强大的现代下载工具，支持浏览器扩展",
      "url": "https://blog.xiaoz.org/archives/23026",
      "date": "2026-06-02"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "클라우드웨이즈 워드프레스에 도메인 연결 방법 (2026 업데이트)",
      "url": "https://www.thewordcracker.com/basic/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ec%9b%a8%ec%9d%b4%ec%a6%88-%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4%ec%97%90-%eb%8f%84%eb%a9%94%ec%9d%b8-%ec%97%b0%ea%b2%b0-%eb%b0%a9%eb%b2%95/",
      "date": "2026-06-02"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "硬装结束，灯亮了，油烟机炸了",
      "url": "https://blog.52hyjs.com/post-1272.html",
      "date": "2026-06-02"
    }
  ],
  "2017": [
    {
      "name": "SimonAKing",
      "year": "17",
      "title": "AI 互动影游全球深度报告",
      "url": "https://simonaking.com/blog/ai-interactive-film-game-report/",
      "date": "2026-06-02"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "SEO 之 HARO 四两拨千斤大法",
      "url": "https://www.ccgxk.com/codeother/766.html",
      "date": "2026-06-02"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "人均一个博客聚合网站？",
      "url": "https://www.suiyan.cc/blog/20260601201146",
      "date": "2026-06-01"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "六一儿童乐",
      "url": "https://liuqingwushui.top/archives/160/",
      "date": "2026-06-02"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "鼠疫2：第一次连续开出三个红",
      "url": "https://www.imcry.vip/post/2026-6-3-301/",
      "date": "2026-06-02"
    },
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "忘記報稅怎麼辦？不在戶藉地怎麼報稅？",
      "url": "https://blog.giveanornot.com/forgot-to-pay-tax/",
      "date": "2026-06-02"
    },
    {
      "name": "天书vip",
      "year": "20",
      "title": "十九世纪的法国到底啥是年金？",
      "url": "https://www.skybook.vip/inn/143",
      "date": "2026-06-01"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "@所有人，把你们邮箱自动回复关掉...",
      "url": "https://www.dalao.net/thread-59226.htm",
      "date": "2026-06-02"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-02",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-02",
      "date": "2026-06-02"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "到现在不知道怎么介绍自己",
      "url": "https://9sb.net/archives/i-still-dont-know-how-to-introduce-myself.html",
      "date": "2026-06-03"
    },
    {
      "name": "阿锋的小宇宙",
      "year": "21",
      "title": "二〇二六年五月总结：颓态总会过去吧",
      "url": "https://feng.pub/0620269616.html",
      "date": "2026-06-02"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "白嫖免费的大模型 AgnesAI 教程",
      "url": "https://jyblog.cn/5688/",
      "date": "2026-06-02"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "bearblog",
      "url": "https://jefftay.com/blog-posts/bearblog/",
      "date": "2026-06-02"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "让信息型SEO内容为搜索意图发挥作用",
      "url": "https://www.bailuze.com/24115.html",
      "date": "2026-06-03"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "轻轨上偶遇也门小哥",
      "url": "https://ygz.ink/archives/5134.html",
      "date": "2026-06-02"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "711全职店务员离职心得",
      "url": "https://t-t.live/archives/7MagsYkt",
      "date": "2026-06-01"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "我用过最好用的Android桌面(启动器)",
      "url": "https://xice.cx/posts/niagaraLauncher/",
      "date": "2026-06-01"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "恭喜发财｜从设计图到毛绒抱枕落地",
      "url": "https://zhouayuan.com/post/47.html",
      "date": "2026-06-02"
    },
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "跑步！",
      "url": "https://mzdsx.com/2026/06/02/%e8%b7%91%e6%ad%a5%ef%bc%81/",
      "date": "2026-06-02"
    },
    {
      "name": "华立",
      "year": "26",
      "title": "打算重构墨迹博客（InkBlog）",
      "url": "https://www.renhuali.cn/journal/cmpxdw1ac000xchs4ybm9m416",
      "date": "2026-06-03"
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
