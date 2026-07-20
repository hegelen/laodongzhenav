// ==================== latest-articles.js ====================
// 抓取日期: 7/20/2026, 8:32:58 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "The power of positive argument",
      "url": "https://seths.blog/2026/07/the-power-of-positive-argument/",
      "date": "2026-07-20"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "我开源了 cc-session-migrate ：让 Claude Code 会话在多台机器之间自由迁移",
      "url": "https://tonybai.com/2026/07/20/introducing-cc-session-migrate/",
      "date": "2026-07-19"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "記錄 Codex 重設 quota 的網站...？",
      "url": "https://blog.gslin.org/archives/2026/07/20/13119/%e8%a8%98%e9%8c%84-codex-%e9%87%8d%e8%a8%ad-quota-%e7%9a%84%e7%b6%b2%e7%ab%99-%ef%bc%9f/",
      "date": "2026-07-20"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "杂记2026年7月20日",
      "url": "https://acevs.com/5115/",
      "date": "2026-07-20"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "闪游：开元寺-泉州",
      "url": "https://yishu-life.com/index.php/archives/487.html",
      "date": "2026-07-20"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "realme主动退出中国市场、转做海外,下一个是谁？",
      "url": "https://www.mmtx.net/1176.html",
      "date": "2026-07-20"
    }
  ],
  "2011": [
    {
      "name": "老孙",
      "year": "11",
      "title": "听风就是雨与先射箭后画靶",
      "url": "https://www.imsun.org/archives/1795.html",
      "date": "2026-07-20"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录",
      "url": "https://www.linyufan.com/post/5913",
      "date": "2026-07-20"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 GeneratePress 테마 가독성 높이기 (본문 폰트, 줄 간격 조정)",
      "url": "https://www.thewordcracker.com/basic/generatepress-%ed%85%8c%eb%a7%88-%ea%b0%80%eb%8f%85%ec%84%b1-%eb%86%92%ec%9d%b4%ea%b8%b0-%eb%b3%b8%eb%ac%b8-%ed%8f%b0%ed%8a%b8-%ec%a4%84-%ea%b0%84%ea%b2%a9-%ec%a1%b0%ec%a0%95/",
      "date": "2026-07-20"
    },
    {
      "name": "满心",
      "year": "15",
      "title": "突然想聊聊我的父亲",
      "url": "https://zhoutian.com/388.html",
      "date": "2026-07-20"
    }
  ],
  "2016": [
    {
      "name": "黄湘云",
      "year": "16",
      "title": "《战争与和平》",
      "url": "https://xiangyun.rbind.io/2026/07/war-and-peace/",
      "date": "2026-07-20"
    },
    {
      "name": "Keyle",
      "year": "16",
      "title": "公司搬家",
      "url": "https://vrast.cn/posts/37997/",
      "date": "2026-07-20"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "GitHub一周热点",
      "url": "https://qiukui-note.happy365.day/20260720/github-trends-weekly/",
      "date": "2026-07-20"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "DMIT LAX.AS3.Pro.TINY: Excellent Performance, Even During Peak Hours",
      "url": "https://heming.org/2718.html",
      "date": "2026-07-20"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "通用智能体 + SKILL：GIS本地化探索",
      "url": "https://www.wsh233.cn/post/通用智能体加skill-gis本地化探索",
      "date": "2026-07-20"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-07-20",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-07-20",
      "date": "2026-07-20"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "拥有SEO优化有哪些好处？",
      "url": "https://www.bailuze.com/24254.html",
      "date": "2026-07-20"
    },
    {
      "name": "小何",
      "year": "23",
      "title": "GRUB优化：Windows+Ubuntu双系统引导配置指南",
      "url": "https://022220.xyz/note/120.html",
      "date": "2026-07-20"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "百元行车记录仪DIY平替运动相机Vlog方案",
      "url": "https://ygz.ink/archives/5568.html",
      "date": "2026-07-20"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "说说：今天凌晨西班牙成功拿下 2026 美加墨世界杯总冠军，翻出 6 月 1…",
      "url": "https://yigeboke.com/shuoshuo.php#shuo_36",
      "date": "2026-07-20"
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
