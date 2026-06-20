// ==================== latest-articles.js ====================
// 抓取日期: 6/20/2026, 8:28:18 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "花了一个月时间，才磕磕绊绊把这本书读了",
      "url": "https://wlj.me/notes/sp-note-20260620-164446/",
      "date": "2026-06-20"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "99% might be enough (or not)",
      "url": "https://seths.blog/2026/06/99-might-be-enough-or-not/",
      "date": "2026-06-20"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "初次吃荔乡凤",
      "url": "http://www.xlanda.net/posts/22276",
      "date": "2026-06-20"
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "英语词典Regdict.com更新改版成功",
      "url": "https://long.ge/18072.html",
      "date": "2026-06-20"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "大模型正在见顶！传奇架构师：欢迎来到“平坦曲线时代”",
      "url": "https://tonybai.com/2026/06/20/steve-yegge-the-flat-curve-society/",
      "date": "2026-06-19"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "电钢琴续2",
      "url": "https://acevs.com/5050/",
      "date": "2026-06-20"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "同学录",
      "url": "https://ltmltm.cn/bk/1467.html",
      "date": "2026-06-20"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "端午能不能快乐？",
      "url": "https://dujun.io/duan-wu-kuai-le.html",
      "date": "2026-06-20"
    },
    {
      "name": "军",
      "year": "08",
      "title": "满满一箱的战利品",
      "url": "https://me.xu19.com/full-box-of-diy-handmade-porcelain-from-jingdezhen/",
      "date": "2026-06-20"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "某年某月某日某时某分",
      "url": "https://www.mmtx.net/1170.html",
      "date": "2026-06-20"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "“林羽凡笔记”中的语音Agent开发完成了",
      "url": "https://www.linyufan.com/post/5860",
      "date": "2026-06-20"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "月入 4w 刀的小耳朵 sir 的出海经验",
      "url": "https://www.ccgxk.com/codeother/784.html",
      "date": "2026-06-20"
    }
  ],
  "2019": [
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "WordPress阿里云CDN配置教程：实现全站加速、自动清缓存与证书自动续期",
      "url": "https://blog.naibabiji.com/skill/aliyun-cdn.html",
      "date": "2026-06-20"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-20",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-20",
      "date": "2026-06-20"
    }
  ],
  "2023": [
    {
      "name": "建站百科",
      "year": "23",
      "title": "弘速云免费发放福利了，10台美国NTT双ISP VPS套餐抽奖活动！",
      "url": "https://www.jzbk.net/3114.html",
      "date": "2026-06-20"
    },
    {
      "name": "小归客",
      "year": "23",
      "title": "开源#纪念日提醒程序",
      "url": "https://xgk.pw/archives/298/",
      "date": "2026-06-20"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "腾讯推出腾讯网盘",
      "url": "https://ygz.ink/archives/5326.html",
      "date": "2026-06-20"
    }
  ],
  "2024": [
    {
      "name": "倾城于你",
      "year": "24",
      "title": "EasyNote：极简自托管记事本",
      "url": "https://qninq.cn/archives/easynote.html",
      "date": "2026-06-20"
    },
    {
      "name": "Chongxi",
      "year": "24",
      "title": "使用obisidian和git插件来完美管理静态博客",
      "url": "https://xice.cx/posts/useGitOnObisdian/",
      "date": "2026-06-20"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "MPC 的人生",
      "url": "https://www.immarcus.com/blog/model-predictive-controlled-life",
      "date": "2026-06-20"
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
