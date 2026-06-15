// ==================== latest-articles.js ====================
// 抓取日期: 6/15/2026, 9:54:04 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Degrees of freedom",
      "url": "https://seths.blog/2026/06/degrees-of-freedom-3/",
      "date": "2026-06-15"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "谷歌 SRE 重磅白皮书：当 AI 自动写出 10 倍代码，谁来阻止系统崩溃？",
      "url": "https://tonybai.com/2026/06/15/google-ai-in-sre/",
      "date": "2026-06-15"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "你只是打个工而已",
      "url": "https://joojen.com/archives/9022.html",
      "date": "2026-06-15"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "2026年「徽章猎人」活动第二季度收官",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1240",
      "date": "2026-06-15"
    }
  ],
  "2010": [
    {
      "name": "忆往事",
      "year": "10",
      "title": "配镜&amp;手表",
      "url": "https://zhou.ge/2026-06-15.html",
      "date": "2026-06-15"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "ZMark书签管理器618限时折扣，买一送一",
      "url": "https://blog.xiaoz.org/archives/23066",
      "date": "2026-06-15"
    }
  ],
  "2014": [
    {
      "name": "梦幻辰风",
      "year": "14",
      "title": "愿我是你世界里的光",
      "url": "https://www.mhcf.net/post-1209.html",
      "date": "2026-06-15"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "让老外感受到了中国 SEO 的威力，amazing！",
      "url": "https://www.ccgxk.com/codeother/779.html",
      "date": "2026-06-15"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "梦里远行",
      "url": "https://liuqingwushui.top/archives/162/",
      "date": "2026-06-15"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "澄迈到海口的拼车小记",
      "url": "https://www.imcry.vip/post/2026-6-15-1407/",
      "date": "2026-06-15"
    },
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "現此時我對 AI 的想法（2026）",
      "url": "https://blog.giveanornot.com/ai-challenge/",
      "date": "2026-06-15"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "静态博客 Gridea 新平替：Gridea Pro",
      "url": "https://usj.cc/202606151312.html",
      "date": "2026-06-15"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-15",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-15",
      "date": "2026-06-15"
    },
    {
      "name": "Dayu",
      "year": "21",
      "title": "Beren 与 Lúthien 长眠处",
      "url": "https://anotherdayu.com/beren-and-lúthien/",
      "date": "2026-06-15"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "Typecho 插件推荐 UploadPlugin",
      "url": "https://9sb.net/archives/typecho-plugin-recommended-uploadplugin.html",
      "date": "2026-06-15"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "QQ音乐播放接口：PHP逆向分析与实现",
      "url": "https://lb5.net/257.html",
      "date": "2026-06-15"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "为什么SEO优化正变得不仅仅是关键词：AI如何改变规则？",
      "url": "https://www.bailuze.com/24153.html",
      "date": "2026-06-15"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "Bug",
      "url": "https://ygz.ink/archives/5251.html",
      "date": "2026-06-15"
    }
  ],
  "2024": [
    {
      "name": "奶狗",
      "year": "24",
      "title": "世界，您好！",
      "url": "https://www.naigou.cn/1_xqu7vl/",
      "date": "2026-06-15"
    }
  ],
  "2025": [
    {
      "name": "青萍",
      "year": "25",
      "title": "AI语音技术到底能做什么",
      "url": "https://blog.lusyoe.com/article/ai-voice-tech-beginners-guide",
      "date": "2026-06-15"
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
