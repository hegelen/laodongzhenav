// ==================== latest-articles.js ====================
// 抓取日期: 9/9/2026, 9:41:36 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "VPS 从 NixOS 迁出后，我会选 Debian",
      "url": "https://wlj.me/posts/20260909-nixos-server-debian/",
      "date": "2026-09-09"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "流放之路2体验 dnf体验 云游戏平台豆包推荐",
      "url": "https://acevs.com/5221/",
      "date": "2026-09-09"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "DIY(35-2)：6路×2 USB全自动电脑切换器",
      "url": "http://www.auiou.com/relevant/00002193.jsp",
      "date": "2026-09-09"
    }
  ],
  "2007": [
    {
      "name": "苏洋",
      "year": "07",
      "title": "Phorge 现代化改造实战（十七）：恢复简体中文支持，用工具持续维护 2.7 万行翻译文件",
      "url": "https://soulteary.com/2026/09/09/phorge-modernization-part-17-restore-simplified-chinese.html",
      "date": "2026-09-09"
    },
    {
      "name": "悠见",
      "year": "07",
      "title": "三个月没动毛笔了，临写颜真卿《颜勤礼碑》几个字",
      "url": "https://yufm.com/662356.html",
      "date": "2026-09-09"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "半价域名活动",
      "url": "https://me.xu19.com/half-price-domain-names-promotion/",
      "date": "2026-09-09"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": " 真题 || 2022年真题【数据应用科普中心】",
      "url": "https://www.yishu.pro/242.html",
      "date": "2026-09-09"
    },
    {
      "name": "老张",
      "year": "09",
      "title": "曾经用过的那些“灯”！",
      "url": "https://laozhang.org/archives/4337.html",
      "date": "2026-09-09"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "为你的发言付费",
      "url": "https://www.leitao.cn/10861.html",
      "date": "2026-09-09"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "BPG 连接建立失败问题的答案和解析",
      "url": "https://www.kawabangga.com/posts/7413",
      "date": "2026-09-09"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 Divi 5.12 릴리스: 베타 종료와 혁신적인 'AI 에이전트' 도입",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-divi-5-12-%eb%a6%b4%eb%a6%ac%ec%8a%a4/",
      "date": "2026-09-09"
    },
    {
      "name": "Luminous",
      "year": "15",
      "title": "【Vibe Coding】几个AI生成提高效率小工具的思路",
      "url": "https://luotianyi.vc/9489.html",
      "date": "2026-09-09"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "放下助人情结，我又辞职了",
      "url": "https://blog.solazy.me/20260909/",
      "date": "2026-09-09"
    }
  ],
  "2020": [
    {
      "name": "yihong0618",
      "year": "20",
      "title": "来，喝一杯",
      "url": "https://blog.yihong0618.me/posts/issue-346/",
      "date": "2026-09-09"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "为什么SEO至今仍然重要？",
      "url": "https://www.bailuze.com/24408.html",
      "date": "2026-09-09"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "分享一个摄影平台：Unsplash",
      "url": "https://siwei.li/sharing-photos-on-unsplash/",
      "date": "2026-09-09"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "Hello Halo",
      "url": "http://t-t.live/archives/hello-halo",
      "date": "2026-09-09"
    },
    {
      "name": "姓王者",
      "year": "24",
      "title": "【AI流水账】我先修好 Thunderbird 的 SSL，再用 Codex 读取东北大学邮箱",
      "url": "https://xingwangzhe.fun/posts/neu-mail-codex-20260909/",
      "date": "2026-09-09"
    }
  ],
  "2025": [
    {
      "name": "桃子味",
      "year": "25",
      "title": "海外教程—无需国外手机号！一键导出 ChatGPT 凭据登录 Codex 终极教程",
      "url": "https://www.taoziwei.com/431/",
      "date": "2026-09-09"
    },
    {
      "name": "Marcus",
      "year": "25",
      "title": "天经地义",
      "url": "https://www.immarcus.com/blog/taken-for-granted",
      "date": "2026-09-09"
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
