// ==================== latest-articles.js ====================
// 抓取日期: 6/8/2026, 9:19:40 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "BoldVoice：一年 150 美元的口音教练",
      "url": "https://wlj.me/posts/boldvoice-accent-coach/",
      "date": "2026-06-08"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Art is a verb",
      "url": "https://seths.blog/2026/06/art-is-a-verb/",
      "date": "2026-06-08"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：AI智能体会增强个人能力100倍",
      "url": "https://www.ufoer.com/post/13826.html",
      "date": "2026-06-08"
    }
  ],
  "2004": [
    {
      "name": "delphij",
      "year": "04",
      "title": "如何：不借助第三方服务粗略检测访客是否来自中国大陆",
      "url": "https://blog.delphij.net/posts/2026/06/detecting-chinese-user/",
      "date": "2026-06-08"
    }
  ],
  "2005": [
    {
      "name": "Lenciel",
      "year": "05",
      "title": "马代(2)",
      "url": "https://lenciel.com/2026/06/maldives-2/",
      "date": "2026-06-08"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "腾讯云备案信息核查顺利完成",
      "url": "https://www.munue.com/800.html",
      "date": "2026-06-08"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "杂记·雨一直下·2624",
      "url": "https://bwskyer.com/rain-keeps-falling.html",
      "date": "2026-06-08"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "wordpress兰空图床插件V2版",
      "url": "https://laozhang.org/archives/4070.html",
      "date": "2026-06-08"
    }
  ],
  "2011": [
    {
      "name": "耳朵的主人",
      "year": "11",
      "title": "忙碌近况杂话篇，生活尽是折腾。",
      "url": "http://www.edzbe.com/book/diary/20260608.html",
      "date": "2026-06-07"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我在本地部署了Qwen3.6-35B-A3B和Gemma4 12B，真正意义上的本地大模型",
      "url": "https://www.linyufan.com/post/5841",
      "date": "2026-06-08"
    },
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "Dream2.0 Plus 友链头像 400 错误：双重编码陷阱排查",
      "url": "https://wuqishi.com/archives/dream2-plus-avatar-double-encoding-fix",
      "date": "2026-06-08"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "流形上的最速下降：6. Muon + 双旋转",
      "url": "https://kexue.fm/archives/11777",
      "date": "2026-06-08"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "注意，JS 里的  JSON.parse()  也有安全隐患！",
      "url": "https://www.ccgxk.com/front-end/772.html",
      "date": "2026-06-08"
    }
  ],
  "2020": [
    {
      "name": "vinchent",
      "year": "20",
      "title": "Writefreely使用体验",
      "url": "https://www.vinchent.xyz/writefreelyshi-yong-ti-yan",
      "date": "2026-06-08"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-08",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-08",
      "date": "2026-06-08"
    },
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "毛囊炎克星——神药推荐",
      "url": "https://www.ddf.im/index.php/2026/06/08/1257.html",
      "date": "2026-06-08"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "AI时代友好的SEO优化",
      "url": "https://www.bailuze.com/24126.html",
      "date": "2026-06-08"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "每年重装一次系统",
      "url": "https://ygz.ink/archives/5179.html",
      "date": "2026-06-08"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "奇怪的梦境记录",
      "url": "https://www.renhuali.cn/journal/cmq4uwg4f006uchf19eartf3m",
      "date": "2026-06-08"
    },
    {
      "name": "安迪",
      "year": "26",
      "title": "折腾5G通讯壳+小米路由器3",
      "url": "https://i55.top/archives/533/",
      "date": "2026-06-08"
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
