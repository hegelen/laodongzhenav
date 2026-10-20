// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-20 22:18:24
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Thieves’ cant slang",
      "url": "https://seths.blog/2026/10/thieves-cant-slang/",
      "date": "2026-10-20"
    }
  ],
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "QWERTY 键盘布局的发展历史",
      "url": "https://blog.codingnow.com/2026/10/qwerty.html",
      "date": "2026-10-20"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Tor 的 exit node 被 MITM 攻擊 SSH 連線",
      "url": "https://blog.gslin.org/archives/2026/10/21/13287/tor-%e7%9a%84-exit-node-%e8%a2%ab-mitm-%e6%94%bb%e6%93%8a-ssh-%e9%80%a3%e7%b7%9a/",
      "date": "2026-10-20"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "博客/网页有没有必要做访问量统计？",
      "url": "http://www.auiou.com/relevant/00002226.jsp",
      "date": "2026-10-20"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "包尖钢笔错误修复失败",
      "url": "https://acevs.com/5310/",
      "date": "2026-10-20"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "贾鲁河史歌",
      "url": "https://www.iliu.org/posts/jialu-he-shige/",
      "date": "2026-10-20"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.20-搞了南瓜小米馒头",
      "url": "https://www.linyufan.com/post/6099",
      "date": "2026-10-20"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "为你千千万万遍",
      "url": "https://d-d.design/single/20591",
      "date": "2026-10-20"
    }
  ],
  "2016": [
    {
      "name": "宝玉",
      "year": "16",
      "title": "NotebookLM's Video Overview System Prompt: The Full Creation Workflow",
      "url": "https://baoyu.io/blog/2026-10-20/notebooklm-video-overview-system-prompt",
      "date": "2026-10-20"
    },
    {
      "name": "幻影",
      "year": "16",
      "title": "一场雨后，天慢慢凉了",
      "url": "https://blog.52hyjs.com/post-1291.html",
      "date": "2026-10-20"
    }
  ],
  "2018": [
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "碎碎念的生活才完美",
      "url": "https://yxgoa.cn/index.php/archives/14/",
      "date": "2026-10-20"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "早上九点在驾校迷失方向",
      "url": "https://www.imcry.vip/post/2026-10-20-1603/",
      "date": "2026-10-20"
    },
    {
      "name": "孙振超",
      "year": "20",
      "title": "【备份驱动】",
      "url": "https://www.aqzx.com/blog/post/51.html",
      "date": "2026-10-20"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-20：Beam.win、Figma Specs、readywhen",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-20",
      "date": "2026-10-20"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "常用可吸收缝线：支撑与吸收时间",
      "url": "https://siwei.li/absorbable-sutures-strength-retention/",
      "date": "2026-10-20"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "分类信息网站如何优化？",
      "url": "https://www.bailuze.com/24518.html",
      "date": "2026-10-20"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "域名涨价了我在纠结是否续费",
      "url": "https://t-t.live/archives/ky13tepf",
      "date": "2026-10-20"
    },
    {
      "name": "无名",
      "year": "24",
      "title": "佳能 Powershot SX220 HS / SX230 HS 更换电池盖胶皮",
      "url": "https://wuminboke.site/uncategorized/canon-powershot-sx220-hs-sx230-hs-battery-door-rubber-replacement/",
      "date": "2026-10-20"
    }
  ],
  "2025": [
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "一次 Typecho 未授权 RCE 的应急修补记录",
      "url": "https://liyinwaihe.com/14.html",
      "date": "2026-10-20"
    },
    {
      "name": "Marcus",
      "year": "25",
      "title": "八十亿分之一",
      "url": "https://www.immarcus.com/blog/one-in-8b",
      "date": "2026-10-20"
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
