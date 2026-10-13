// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-13 23:22:54
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "两周出行上课工作玩耍配置",
      "url": "https://wlj.me/notes/sp-note-20261013-220958/",
      "date": "2026-10-13"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "为什么价格战都是第二名发起的?",
      "url": "https://www.ufoer.com/post/14635.html",
      "date": "2026-10-13"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "2029 年大限将至！Go 前密码学掌门人更新“密码学正确答案”：所有非对称算法都得换",
      "url": "https://tonybai.com/2026/10/14/post-quantum-cryptographic-right-answers-2026/",
      "date": "2026-10-13"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "出乎意料之中",
      "url": "https://acevs.com/5290/",
      "date": "2026-10-13"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Meta 也放出第一梯隊模型的消息",
      "url": "https://blog.gslin.org/archives/2026/10/13/13269/meta-%e4%b9%9f%e6%94%be%e5%87%ba%e7%ac%ac%e4%b8%80%e6%a2%af%e9%9a%8a%e6%a8%a1%e5%9e%8b%e7%9a%84%e6%b6%88%e6%81%af/",
      "date": "2026-10-13"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "文字为什么需要化妆？",
      "url": "https://www.seis-jun.xyz/blog/2026-10-13-why-do-we-have-to-make-up-our-words.html",
      "date": "2026-10-13"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "秋染林间，拾一抹金黄",
      "url": "https://www.mmtx.net/1191.html",
      "date": "2026-10-13"
    }
  ],
  "2011": [
    {
      "name": "老孙",
      "year": "11",
      "title": "Typecho评论抽奖插件",
      "url": "https://www.imsun.org/archives/1800.html",
      "date": "2026-10-13"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "wordpress评论表单中旧链接安全检查插件",
      "url": "https://www.leitao.cn/11498.html",
      "date": "2026-10-13"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "我已经很久没有见过他了",
      "url": "https://d-d.design/single/20506",
      "date": "2026-10-13"
    }
  ],
  "2015": [
    {
      "name": "网工格物",
      "year": "15",
      "title": "PVE9 超融合基础设施 - 4.PVE 虚拟化网络 - VLAN",
      "url": "https://songxwn.com/PVE-HCI-4/",
      "date": "2026-10-13"
    },
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 500 내부 서버 오류 (Internal Server Error) 해결 방법",
      "url": "https://www.thewordcracker.com/intermediate/500-internal-server-error-in-wordpress/",
      "date": "2026-10-13"
    }
  ],
  "2016": [
    {
      "name": "故事里",
      "year": "16",
      "title": "会变得永远只是人心而已",
      "url": "https://www.gushi.li/what-changes-in-the-end-is-only-the-human-heart.html",
      "date": "2026-10-13"
    }
  ],
  "2018": [
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "拒绝花哨，手搓 Typecho 工作台",
      "url": "https://yxgoa.cn/index.php/archives/3/",
      "date": "2026-10-13"
    }
  ],
  "2019": [
    {
      "name": "流情",
      "year": "19",
      "title": "【景点篇】都江堰",
      "url": "https://liuqingwushui.top/archives/202/",
      "date": "2026-10-13"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-13：Google EmbeddingGemma 2、ngram 2.0、Base Code",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-13",
      "date": "2026-10-13"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "检车",
      "url": "https://xiangming.site/1166.html",
      "date": "2026-10-13"
    },
    {
      "name": "小野",
      "year": "23",
      "title": "战争走向由我说了算",
      "url": "https://lb5.net/276.html",
      "date": "2026-10-13"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "搜狗问问停止服务公告：将于 2026年11月7日23时59分 正式停止服务",
      "url": "https://www.bailuze.com/26197.html",
      "date": "2026-10-13"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "西雅图随感",
      "url": "https://www.immarcus.com/blog/seattle-random-thoughts",
      "date": "2026-10-13"
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
