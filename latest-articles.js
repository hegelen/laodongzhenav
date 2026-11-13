// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-13 00:06:25
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "差旅住宿避雷亚朵烟味体验",
      "url": "https://wlj.me/notes/sp-note-20261112-125503/",
      "date": "2026-11-12"
    }
  ],
  "2004": [
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "聊聊刷牙：刷完别漱口，还有哪些习惯是错的",
      "url": "https://doyj.com/2026/11/12/%e8%81%8a%e8%81%8a%e5%88%b7%e7%89%99%ef%bc%9a%e5%88%b7%e5%ae%8c%e5%88%ab%e6%bc%b1%e5%8f%a3%ef%bc%8c%e8%bf%98%e6%9c%89%e5%93%aa%e4%ba%9b%e4%b9%a0%e6%83%af%e6%98%af%e9%94%99%e7%9a%84/",
      "date": "2026-11-12"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 终于要有官方有序 Map 了！继泛型 Set 之后，Go Collection API 再进一步",
      "url": "https://tonybai.com/2026/11/13/go-ordered-map-sorted-collection-proposal-60630/",
      "date": "2026-11-12"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "连续3个超市",
      "url": "https://www.xlanda.net/posts/22611",
      "date": "2026-11-12"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "重要测试：Debian 13.0",
      "url": "http://www.auiou.com/relevant/00002240.jsp",
      "date": "2026-11-12"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年11月12日",
      "url": "https://acevs.com/5360/",
      "date": "2026-11-12"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "GitHub Actions 的 workflow lockfiles",
      "url": "https://blog.gslin.org/archives/2026/11/12/13353/github-actions-%e7%9a%84-workflow-lockfiles/",
      "date": "2026-11-12"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "本站主题 Halo 复刻版发布",
      "url": "https://dujun.io/dujun-theme-for-halo.html",
      "date": "2026-11-12"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "我做了两款微信小游戏",
      "url": "https://blog.forecho.com/two-wechat-minigames.html",
      "date": "2026-11-12"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "聊聊Fable5.2生成仅1.4MB的3A画质大作《几猫》（原版叫《Saltline》）",
      "url": "https://www.ccgxk.com/codeother/938.html",
      "date": "2026-11-12"
    },
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "Win 11 开机启动项启动慢？改两个注册表值，5 分钟变 30 秒",
      "url": "https://www.tjsky.net/windows/2265",
      "date": "2026-11-12"
    }
  ],
  "2018": [
    {
      "name": "运维咖啡吧",
      "year": "18",
      "title": "向云端｜西南自驾14 - 北盘江",
      "url": "https://blog.ops-coffee.com/r/2026-southwest-road-trip-14-beipanjiang.html",
      "date": "2026-11-12"
    }
  ],
  "2019": [
    {
      "name": "安静角落",
      "year": "19",
      "title": "kaya.cat",
      "url": "https://wuziya.com/321.html",
      "date": "2026-11-12"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "因为妈有几次出门没关水龙头，爸给妈买了个“出门提示牌”",
      "url": "https://www.bufanz.com/202611121266.html",
      "date": "2026-11-12"
    },
    {
      "name": "yihong0618",
      "year": "20",
      "title": "AI 时代我的生产力下降了 500%",
      "url": "https://blog.yihong0618.me/posts/issue-351/",
      "date": "2026-11-12"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "数字经济中的注意力交易",
      "url": "https://www.wsh233.cn/post/数字经济中的注意力交易",
      "date": "2026-11-12"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-12：ScroogeFrog AI、Nod by n8n、CALL-E",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-12",
      "date": "2026-11-12"
    }
  ],
  "2022": [
    {
      "name": "kejilion",
      "year": "22",
      "title": "KPanel 1.30.0 正式发布：音乐库、影视海报墙与网站访问密码",
      "url": "https://blog.kejilion.pro/kpanel-1-30-0-music-cinema/",
      "date": "2026-11-12"
    }
  ],
  "2024": [
    {
      "name": "科技lion",
      "year": "24",
      "title": "KPanel 1.30.0 正式发布：音乐库、影视海报墙与网站访问密码",
      "url": "https://blog.kejilion.pro/kpanel-1-30-0-music-cinema/",
      "date": "2026-11-12"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "使用“爱回收”回收机卖废品",
      "url": "https://sheep5.net/archives/26111216.html",
      "date": "2026-11-12"
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
