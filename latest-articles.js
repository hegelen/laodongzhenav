// ==================== latest-articles.js ====================
// 抓取日期: 9/7/2026, 10:03:47 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：怎么用最土的AI工具，一个月收了几十万？",
      "url": "https://www.ufoer.com/post/14536.html",
      "date": "2026-09-07"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "破案",
      "url": "https://ezo.biz/Diary/1652.html",
      "date": "2026-09-07"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "物理 AI 淘金热：为何机器人是下一个数万亿美元级的超级风口",
      "url": "https://tonybai.com/2026/09/07/the-physical-ai-gold-rush/",
      "date": "2026-09-06"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026-09-07",
      "url": "https://acevs.com/5217/",
      "date": "2026-09-07"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "今天起名未成功",
      "url": "http://www.auiou.com/relevant/00002192.jsp",
      "date": "2026-09-07"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "AI 公司狂掃各種可能可以當作訓練資料的材料 (這次是破產的航空公司？)",
      "url": "https://blog.gslin.org/archives/2026/09/07/13188/ai-%e5%85%ac%e5%8f%b8%e7%8b%82%e6%8e%83%e5%90%84%e7%a8%ae%e5%8f%af%e8%83%bd%e5%8f%af%e4%bb%a5%e7%95%b6%e4%bd%9c%e8%a8%93%e7%b7%b4%e8%b3%87%e6%96%99%e7%9a%84%e6%9d%90%e6%96%99-%e9%80%99%e6%ac%a1/",
      "date": "2026-09-07"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "超过 2 年未使用，Google 帐户将被删除",
      "url": "https://www.munue.com/815.html",
      "date": "2026-09-07"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "真题 || 2022年真题【考试测评综合楼】 ",
      "url": "https://www.yishu.pro/241.html",
      "date": "2026-09-07"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "wordpress评论增加邮箱验证与中文检测",
      "url": "https://www.leitao.cn/10830.html",
      "date": "2026-09-07"
    }
  ],
  "2013": [
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "《无题·夜半偶得》——求个更好的诗名",
      "url": "https://wuqishi.com/archives/midnight-poem-seeking-poem-title",
      "date": "2026-09-07"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "林羽凡笔记 · 积分体系升级 & AI 对话计费正式上线",
      "url": "https://www.linyufan.com/post/5995",
      "date": "2026-09-07"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "一些随感和碎言",
      "url": "https://www.suiyan.cc/blog/20260907125645",
      "date": "2026-09-07"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Stripe 收款，Wise 港卡国内直接开通攻略！不用去夯港了！",
      "url": "https://www.ccgxk.com/codeother/875.html",
      "date": "2026-09-07"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "GitHub一周热点",
      "url": "https://qiukui-note.happy365.day/20260907/github-trends-weekly/",
      "date": "2026-09-07"
    },
    {
      "name": "吖远zzy",
      "year": "18",
      "title": "把吃灰五年的旧笔记本改成了NAS，翻车了但没完全翻",
      "url": "https://www.hzv5.cn/2026/09/07/Old-computer-NAS/",
      "date": "2026-09-07"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-07-18 / 皮炎猫",
      "url": "https://blog.xinshijiededa.men/daily/81/",
      "date": "2026-09-07"
    }
  ],
  "2020": [
    {
      "name": "老卢",
      "year": "20",
      "title": "说说：#2026-09-07 20:15",
      "url": "https://cis.el9.cn/memos/a9347777.html",
      "date": "2026-09-07"
    }
  ],
  "2021": [
    {
      "name": "DAIDAIFU",
      "year": "21",
      "title": "送给孩子的一首歌",
      "url": "https://www.ddf.im/index.php/2026/09/07/1265.html",
      "date": "2026-09-07"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "小论博客的更新速度",
      "url": "https://blog.mfwt.top/index.php/archives/1582/",
      "date": "2026-09-07"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "Geometry Dash",
      "url": "https://www.immarcus.com/blog/geometry-dash",
      "date": "2026-09-07"
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
