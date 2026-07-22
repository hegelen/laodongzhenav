// ==================== latest-articles.js ====================
// 抓取日期: 7/22/2026, 8:18:34 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "看到大牛猫的公众号，才知道前几年那个设计",
      "url": "https://wlj.me/notes/sp-note-20260722-225214/",
      "date": "2026-07-22"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "State champs",
      "url": "https://seths.blog/2026/07/state-champs/",
      "date": "2026-07-22"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "中医心理学的角度分析：开悟、发愿、利他",
      "url": "https://www.ufoer.com/post/14046.html",
      "date": "2026-07-22"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Twitter之父再出手：Block开源Buzz，要让人类和AI Agent「同工同权」",
      "url": "https://tonybai.com/2026/07/22/jack-dorsey-block-buzz-ai-agent-workspace-opensource/",
      "date": "2026-07-22"
    }
  ],
  "2005": [
    {
      "name": "春田",
      "year": "05",
      "title": "１０８４．「働く」について考える　(８)私の経験から②",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/07/post-757970.html",
      "date": "2026-07-22"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "杂记2026年7月22日",
      "url": "https://acevs.com/5119/",
      "date": "2026-07-22"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "数码评测(72)：多核CPU选择之新发现",
      "url": "http://www.auiou.com/relevant/00002173.jsp",
      "date": "2026-07-22"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "LG 透過 Windows Update 推送 LG Monitor App Installer，裡面是個廣告 app",
      "url": "https://blog.gslin.org/archives/2026/07/22/13123/lg-%e9%80%8f%e9%81%8e-windows-update-%e6%8e%a8%e9%80%81-lg-monitor-app-installer%ef%bc%8c%e8%a3%a1%e9%9d%a2%e6%98%af%e5%80%8b%e5%bb%a3%e5%91%8a-app/",
      "date": "2026-07-22"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "充送",
      "url": "https://ltmltm.cn/bk/1480.html",
      "date": "2026-07-22"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "2026 年度榜单前三奖杯效果图正式出炉",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1264",
      "date": "2026-07-22"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "中国护照免签情报1｜俄罗斯对中国免签政策延长",
      "url": "https://me.xu19.com/china-passport-visa-free-intelligence-report-1-russia-extends-visa-free-policy-for-chinese-citizens/",
      "date": "2026-07-22"
    },
    {
      "name": "河马",
      "year": "08",
      "title": "天津联通->阿里云东京 Traceroute",
      "url": "https://www.iamhippo.com/2026-07/2001.html",
      "date": "2026-07-22"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "减肥一周总结暨今日饮食记录",
      "url": "https://www.linyufan.com/post/5915",
      "date": "2026-07-22"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "全屋小米智能家居，从设计到安装，自己搞定",
      "url": "https://blog.52hyjs.com/post-1283.html",
      "date": "2026-07-22"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海让你结束上班时代！",
      "url": "https://www.ccgxk.com/codeother/816.html",
      "date": "2026-07-22"
    },
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "10小时预警的服务器搬家 vs 零通知重启全球服务器：低价 VPS 界的操作越来越离谱了",
      "url": "https://www.tjsky.net/natter/1726",
      "date": "2026-07-22"
    }
  ],
  "2020": [
    {
      "name": "老卢",
      "year": "20",
      "title": "说说：#2026-07-22 15:17",
      "url": "https://blog.el9.cn/memos/6a606ea3382b7.html",
      "date": "2026-07-22"
    }
  ],
  "2021": [
    {
      "name": "yveji",
      "year": "21",
      "title": "舞阳吃什么？",
      "url": "https://www.yveji.com/Delicacy/henan-wuyang.html",
      "date": "2026-07-22"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "入手GoPro7运动相机",
      "url": "https://ygz.ink/archives/5590.html",
      "date": "2026-07-22"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "最被忽视但真正推动成效的SEO策略",
      "url": "https://www.bailuze.com/24261.html",
      "date": "2026-07-22"
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
