// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-14 00:21:36
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Ten minutes a day",
      "url": "https://seths.blog/2026/11/ten-minutes-a-day/",
      "date": "2026-11-13"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：开展高价咨询业务的秘诀（价值巨大）",
      "url": "https://www.ufoer.com/post/14761.html",
      "date": "2026-11-13"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI 时代，云原生范式被反转：Agent 不再是 Cattle，而是你的 Pet",
      "url": "https://tonybai.com/2026/11/14/ai-era-cloud-native-paradigm-reversed-agents-are-pets/",
      "date": "2026-11-13"
    },
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "饺子到底是从哪儿来的",
      "url": "https://doyj.com/2026/11/13/%e9%a5%ba%e5%ad%90%e5%88%b0%e5%ba%95%e6%98%af%e4%bb%8e%e5%93%aa%e5%84%bf%e6%9d%a5%e7%9a%84/",
      "date": "2026-11-13"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "把 IFTTT 的東西搬到自架的 Node-RED 上",
      "url": "https://blog.gslin.org/archives/2026/11/14/13356/%e6%8a%8a-ifttt-%e7%9a%84%e6%9d%b1%e8%a5%bf%e6%90%ac%e5%88%b0%e8%87%aa%e6%9e%b6%e7%9a%84-node-red-%e4%b8%8a/",
      "date": "2026-11-13"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "年度网络焦点人物黄仁勋/AI行业",
      "url": "http://www.auiou.com/relevant/00002241.jsp",
      "date": "2026-11-13"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "各种行业键盘",
      "url": "https://acevs.com/5362/",
      "date": "2026-11-13"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "风骚律师S02E04",
      "url": "https://www.seis-jun.xyz/blog/2026-11-13-better-call-saul-s02e04.html",
      "date": "2026-11-13"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "写字状态一般，进入平台期",
      "url": "https://yufm.com/662548.html",
      "date": "2026-11-13"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "字体 || 收录8543个汉字的CAD字体：hztxt.shx",
      "url": "https://www.yishu.pro/403.html",
      "date": "2026-11-13"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "碎碎谈 · 11月13日 11:37",
      "url": "https://www.tjsky.net/shuoshuo/cvtufjnstdrqoqmaek77ak",
      "date": "2026-11-13"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "放心，Web 出海的同行并不多 ~",
      "url": "https://www.ccgxk.com/codeother/939.html",
      "date": "2026-11-13"
    }
  ],
  "2019": [
    {
      "name": "安静角落",
      "year": "19",
      "title": "和AI聊天",
      "url": "https://wuziya.com/322.html",
      "date": "2026-11-13"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "那英 宋佳《梦醒了》",
      "url": "https://9sb.net/archives/na-ying-song-jias-awakening-from-a-dream.html",
      "date": "2026-11-13"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-13：Plurai Simulation、YouArt Desktop App、Omnigraph",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-13",
      "date": "2026-11-13"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "Keywords Everywhere是什么？英文关键词调研工具使用教程完全指南",
      "url": "https://www.bailuze.com/24582.html",
      "date": "2026-11-13"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "📷前行",
      "url": "https://ygz.ink/archives/5937.html",
      "date": "2026-11-13"
    }
  ],
  "2024": [
    {
      "name": "程序猿",
      "year": "24",
      "title": "Debian / Ubuntu 下使用 nginx-acme 自动签发并配置 SSL 证书",
      "url": "https://hskun.com/jiaocheng/debian-ubuntu-%e4%b8%8b%e4%bd%bf%e7%94%a8-nginx-acme-%e8%87%aa%e5%8a%a8%e7%ad%be%e5%8f%91%e5%b9%b6%e9%85%8d%e7%bd%ae-ssl-%e8%af%81%e4%b9%a6/",
      "date": "2026-11-13"
    },
    {
      "name": "科技lion",
      "year": "24",
      "title": "KPanel 反向代理建站教程：从 IP 端口到域名 + HTTPS，四步完成",
      "url": "https://blog.kejilion.pro/kpanel-reverse-proxy-https-tutorial/",
      "date": "2026-11-13"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "黄岛城市阳台：五月的海",
      "url": "https://sheep5.net/archives/26111315.html",
      "date": "2026-11-13"
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
