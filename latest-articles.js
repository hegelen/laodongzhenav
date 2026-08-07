// ==================== latest-articles.js ====================
// 抓取日期: 8/7/2026, 7:59:04 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "王五四 ｜ 杀死那只竹知了\nhttps:",
      "url": "https://wlj.me/notes/sp-note-20260807-175040/",
      "date": "2026-08-07"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "As the crow flies",
      "url": "https://seths.blog/2026/08/as-the-crow-flies/",
      "date": "2026-08-07"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 407 期）：国家为什么需要开源软件？",
      "url": "http://www.ruanyifeng.com/blog/2026/08/weekly-issue-407.html",
      "date": "2026-08-07"
    }
  ],
  "2004": [
    {
      "name": "Jake",
      "year": "04",
      "title": "KV Cache 与 Prompt Cache：区别在哪，又有什么关系",
      "url": "https://jaketao.com/kv-cache-prompt-cache",
      "date": "2026-08-07"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "文笔",
      "url": "https://ezo.biz/Diary/1548.html",
      "date": "2026-08-07"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "时刻准备着",
      "url": "http://www.xlanda.net/posts/22383",
      "date": "2026-08-07"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "酷鸭数据香港精品线路服务器得分 53.10",
      "url": "https://dujun.io/kooya-gold-server-hk-scored-fifty-three-point-one-zero.html",
      "date": "2026-08-07"
    },
    {
      "name": "四火的唠叨",
      "year": "08",
      "title": "Run:ai 学习记录",
      "url": "https://www.raychase.net/8295",
      "date": "2026-08-06"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "笔记本投屏快捷键win+k",
      "url": "https://ddlog.cn/?p=554",
      "date": "2026-08-07"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "洛阳行记",
      "url": "https://www.iliu.org/posts/luoyang-trip/",
      "date": "2026-08-07"
    }
  ],
  "2010": [
    {
      "name": "Jeray",
      "year": "10",
      "title": "更改CDN缓存逻辑",
      "url": "https://hi.jeray.wang/K/223.html",
      "date": "2026-08-07"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "关于渠道的思考",
      "url": "https://blog.devtang.com/2026/08/07/channel-strategy-reflections/",
      "date": "2026-08-07"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "如何隐藏 EdgeEver 默认账号或显示实际使用账号",
      "url": "https://www.dujin.org/23815.html",
      "date": "2026-08-07"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "클라우드웨이즈 서버 OS 업그레이드 방법",
      "url": "https://www.thewordcracker.com/miscellaneous/webhosting/%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c%ec%9b%a8%ec%9d%b4%ec%a6%88-%ec%84%9c%eb%b2%84-os-%ec%97%85%ea%b7%b8%eb%a0%88%ec%9d%b4%eb%93%9c-%eb%b0%a9%eb%b2%95/",
      "date": "2026-08-07"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "如何自己在服务器上搭建一个邮箱？",
      "url": "https://www.ccgxk.com/emlog_dev/836.html",
      "date": "2026-08-07"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "8.7立秋",
      "url": "https://liuqingwushui.top/archives/182/",
      "date": "2026-08-07"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-07",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-07",
      "date": "2026-08-07"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "生活碎碎念：立秋，立马就『秋』？",
      "url": "https://blog.mfwt.top/index.php/archives/1516/",
      "date": "2026-08-07"
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "个人知识工程（一）：从文章索引到知识结构——一次 AI 协作探索个人知识体系的实践",
      "url": "https://blog.tangwudi.com/technology/homedatacenter14627/",
      "date": "2026-08-07"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "舞萌开机网络自检底层技术说明，断网如何排查讲解",
      "url": "https://xice.cx/posts/maimaiNetworkCheck/",
      "date": "2026-08-07"
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
