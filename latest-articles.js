// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-03 23:59:21
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "群晖 NAS：6.5 TB 空间被占用，所有界面都找不到",
      "url": "https://wlj.me/posts/synology-nas-hidden-6tb-btrfs-subvolume/",
      "date": "2026-11-03"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The emotions of voting",
      "url": "https://seths.blog/2026/11/the-emotions-of-voting/",
      "date": "2026-11-03"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Go 也要实现零堆分配？noalloc：让每一次内存分配都无处遁形",
      "url": "https://tonybai.com/2026/11/04/go-zero-heap-allocation-noalloc/",
      "date": "2026-11-03"
    },
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "是思想升华了，还是激素下降了？",
      "url": "https://doyj.com/2026/11/03/%e6%98%af%e6%80%9d%e6%83%b3%e5%8d%87%e5%8d%8e%e4%ba%86%ef%bc%8c%e8%bf%98%e6%98%af%e6%bf%80%e7%b4%a0%e4%b8%8b%e9%99%8d%e4%ba%86%ef%bc%9f/",
      "date": "2026-11-03"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "整理杂物",
      "url": "https://ezo.biz/Diary/1792.html",
      "date": "2026-11-03"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "袜子失踪的秘密",
      "url": "https://www.seis-jun.xyz/blog/2026-11-03-The-Mystery-of-the-Missing-Socks.html",
      "date": "2026-11-03"
    },
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "修路",
      "url": "https://ltmltm.cn/bk/1508.html",
      "date": "2026-11-03"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "WSL 3.0 系统化介绍",
      "url": "https://www.biaodianfu.com/wsl-3/",
      "date": "2026-11-03"
    }
  ],
  "2010": [
    {
      "name": "Jeray",
      "year": "10",
      "title": "魔改的朋友圈主题 - 待发布",
      "url": "https://hi.jeray.wang/K/230.html",
      "date": "2026-11-03"
    }
  ],
  "2012": [
    {
      "name": "王鑫",
      "year": "12",
      "title": "AI做网站之JMbiji：加密笔记本",
      "url": "https://wonse.info/jmbiji.html",
      "date": "2026-11-03"
    }
  ],
  "2013": [
    {
      "name": "Jonty",
      "year": "13",
      "title": "从零到一：Linux 服务器安全加固 + 日报监控完整部署指南",
      "url": "https://nobb.cc/archives/3784.html",
      "date": "2026-11-03"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.11.3-搞了死面饼",
      "url": "https://www.linyufan.com/post/6127",
      "date": "2026-11-03"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "JN 最近在幹嘛（20261103 更新）",
      "url": "https://blog.giveanornot.com/now/20261102/",
      "date": "2026-11-03"
    }
  ],
  "2021": [
    {
      "name": "Robes",
      "year": "21",
      "title": "同一段时光，不同的人生答卷",
      "url": "https://robes.xin/1251.html",
      "date": "2026-11-03"
    },
    {
      "name": "yveji",
      "year": "21",
      "title": "绿心公园不用专程去",
      "url": "https://www.yveji.com/Prose/luxe.html",
      "date": "2026-11-03"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-03：beacon.sh、UnleashX、Xmind 2027",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-03",
      "date": "2026-11-03"
    },
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "人真的是会变的。",
      "url": "https://www.ddf.im/index.php/2026/11/03/1277.html",
      "date": "2026-11-03"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "扁平式网站结构关键词布局分析",
      "url": "https://www.bailuze.com/24558.html",
      "date": "2026-11-03"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "入手iWatch S11及最近生活",
      "url": "https://t-t.live/archives/XoO1NsB4",
      "date": "2026-11-03"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "“公园小拿铁”",
      "url": "https://sheep5.net/archives/567.html",
      "date": "2026-11-03"
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
