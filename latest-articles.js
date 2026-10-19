// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-19 22:56:51
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Two commuting hacks",
      "url": "https://seths.blog/2026/10/two-commuting-hacks/",
      "date": "2026-10-19"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：钱是大风刮来的！一场关于趋势、能量与财富的深聊记录",
      "url": "https://www.ufoer.com/post/14664.html",
      "date": "2026-10-19"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "简单网络优化",
      "url": "https://ezo.biz/Play_More/1760.html",
      "date": "2026-10-19"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "谷歌开源Harness²：不碰权重，让Agent学会了“自我进化”",
      "url": "https://tonybai.com/2026/10/19/harness2-recursive-agent-harnessing-google-research/",
      "date": "2026-10-19"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "ccda大灾变类似游戏",
      "url": "https://acevs.com/5308/",
      "date": "2026-10-19"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Tor 自家推出的 VPN 方案",
      "url": "https://blog.gslin.org/archives/2026/10/20/13284/tor-%e8%87%aa%e5%ae%b6%e6%8e%a8%e5%87%ba%e7%9a%84-vpn-%e6%96%b9%e6%a1%88/",
      "date": "2026-10-19"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "出游",
      "url": "https://ltmltm.cn/bk/1503.html",
      "date": "2026-10-19"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "写字就是个熟练的过程。但书法不是，书法需要艺术细胞",
      "url": "https://yufm.com/662485.html",
      "date": "2026-10-19"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "这些天，折腾了什么",
      "url": "https://www.iliu.org/posts/what-have-i-been-tinkering/",
      "date": "2026-10-19"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.19",
      "url": "https://www.linyufan.com/post/6095",
      "date": "2026-10-19"
    },
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "ICP 备案和 ICP 许可证有什么区别？个人网站经营性判定指南",
      "url": "https://wuqishi.com/archives/personal-website-icp-beian-vs-license",
      "date": "2026-10-19"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "【10月更新】每月送258天网易云音乐黑胶VIP会员，先到先得！",
      "url": "https://www.dujin.org/17813.html",
      "date": "2026-10-19"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "포모도로 기법이란? 25분 집중·5분 휴식 제대로 실천하는 법",
      "url": "https://www.thewordcracker.com/blog/%ed%8f%ac%eb%aa%a8%eb%8f%84%eb%a1%9c-%ea%b8%b0%eb%b2%95%ec%9d%b4%eb%9e%80/",
      "date": "2026-10-19"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "连续化 Softmax Attention",
      "url": "https://kexue.fm/archives/11980",
      "date": "2026-10-19"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "无接触交通事故备案",
      "url": "https://www.suiyan.cc/blog/20261019082448",
      "date": "2026-10-19"
    }
  ],
  "2019": [
    {
      "name": "passo",
      "year": "19",
      "title": "Episode XI of Phase One: Why docs still need an owner, with CT Smith",
      "url": "https://passo.uno/episode-xi-phase-one-ct-smith-wtfm-docs-owner/",
      "date": "2026-10-19"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-19：Inbox Zero、MyLens、shim-cli",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-19",
      "date": "2026-10-19"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "网站SEO优化如何避免关键词堆砌？",
      "url": "https://www.bailuze.com/24513.html",
      "date": "2026-10-19"
    }
  ],
  "2024": [
    {
      "name": "刘郎阁",
      "year": "24",
      "title": "微信小程序开发日常：线缆工具",
      "url": "https://vjo.cc/2019",
      "date": "2026-10-19"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "分手真快乐",
      "url": "https://www.immarcus.com/blog/happy-farewell",
      "date": "2026-10-19"
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
