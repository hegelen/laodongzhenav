// ==================== latest-articles.js ====================
// 抓取日期: 8/20/2026, 7:47:12 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "每日一画丑画也开心",
      "url": "https://wlj.me/notes/sp-note-20260820-225220/",
      "date": "2026-08-20"
    }
  ],
  "2004": [
    {
      "name": "delphij",
      "year": "04",
      "title": "姥姥走了",
      "url": "https://blog.delphij.net/posts/2026/08/grandma-rip/",
      "date": "2026-08-20"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "一期一会",
      "url": "https://ezo.biz/Diary/1595.html",
      "date": "2026-08-20"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "想入手佳明绿豆芽",
      "url": "http://www.xlanda.net/posts/22411",
      "date": "2026-08-20"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Unsloth 的 UD 3.0",
      "url": "https://blog.gslin.org/archives/2026/08/20/13160/unsloth-%e7%9a%84-ud-3-0/",
      "date": "2026-08-19"
    },
    {
      "name": "云风",
      "year": "05",
      "title": "银河竞逐的乐趣和策略",
      "url": "https://blog.codingnow.com/2026/08/rftg_strategy.html",
      "date": "2026-08-20"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "Python文本规范化把脏文本变成干净数据",
      "url": "https://www.biaodianfu.com/python-text-normalization/",
      "date": "2026-08-20"
    }
  ],
  "2010": [
    {
      "name": "磊磊落落",
      "year": "10",
      "title": "小区住进一批「洋垃圾」",
      "url": "https://leileiluoluo.com/posts/xiao-qu-zhu-jin-yi-pi-yang-la-ji.html",
      "date": "2026-08-19"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 7.1의 새로운 기능",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-7-1%ec%9d%98-%ec%83%88%eb%a1%9c%ec%9a%b4-%ea%b8%b0%eb%8a%a5/",
      "date": "2026-08-20"
    },
    {
      "name": "网工格物",
      "year": "15",
      "title": "LangBot 接入Netbox 配置查询机器人",
      "url": "https://songxwn.com/LangBot-Netbox-Tutorial/",
      "date": "2026-08-20"
    }
  ],
  "2016": [
    {
      "name": "青木",
      "year": "16",
      "title": "重庆泼水事件，思想和拳头",
      "url": "https://www.iyoubo.com/2026/adam/essay/chongqingnannv/",
      "date": "2026-08-20"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "IDM 扩展老劫持下载、下载文件名乱码？我写了个小扩展让它按需开关",
      "url": "https://www.tjsky.net/best-software/1819",
      "date": "2026-08-20"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "友圈模块的发展史",
      "url": "https://liuqingwushui.top/archives/187/",
      "date": "2026-08-20"
    }
  ],
  "2020": [
    {
      "name": "yihong0618",
      "year": "20",
      "title": "来，喝一杯",
      "url": "https://blog.yihong0618.me/posts/issue-346/",
      "date": "2026-08-20"
    },
    {
      "name": "老卢",
      "year": "20",
      "title": "说说：#2026-08-20 10:12",
      "url": "https://blog.el9.cn/memos/18b0cac9.html",
      "date": "2026-08-20"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-08-20",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-08-20",
      "date": "2026-08-20"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "无用命途：动态海景灯，用电脑说脏话",
      "url": "https://blog.mfwt.top/index.php/archives/1523/",
      "date": "2026-08-20"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "什么是粉丝页？",
      "url": "https://www.bailuze.com/24358.html",
      "date": "2026-08-20"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "workbuddy配置三叔MCP的方法",
      "url": "https://www.sanshu.cn/arc/274.html",
      "date": "2026-08-20"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "滑坡谬误",
      "url": "https://www.immarcus.com/blog/slippery-slope-fallacy",
      "date": "2026-08-20"
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
