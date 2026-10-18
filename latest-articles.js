// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-18 21:33:25
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Anticipating confusion",
      "url": "https://seths.blog/2026/10/anticipating-confusion/",
      "date": "2026-10-18"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "简单调整主机风道",
      "url": "https://ezo.biz/Play_More/1758.html",
      "date": "2026-10-18"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "给Rust代码办一张“数学身份证”：亚马逊揭秘Nitro背后的形式化验证武器Verus",
      "url": "https://tonybai.com/2026/10/18/verus-rust-formal-verification-amazon-nitro/",
      "date": "2026-10-17"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "整數乘法的進展",
      "url": "https://blog.gslin.org/archives/2026/10/18/13280/%e6%95%b4%e6%95%b8%e4%b9%98%e6%b3%95%e7%9a%84%e9%80%b2%e5%b1%95/",
      "date": "2026-10-18"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "AI编程和人工编程的差别",
      "url": "http://www.auiou.com/relevant/00002224.jsp",
      "date": "2026-10-18"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "会飞的汽车",
      "url": "https://www.seis-jun.xyz/blog/2026-10-18-roadster.html",
      "date": "2026-10-18"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "确诊 2 型糖尿病",
      "url": "https://dujun.io/e5ebffc0-8960-5860-9cbf-e70f53106d6a.html",
      "date": "2026-10-18"
    }
  ],
  "2014": [
    {
      "name": "孤斗",
      "year": "14",
      "title": "听我说，虽然不是我说",
      "url": "https://d-d.design/single/20579",
      "date": "2026-10-18"
    },
    {
      "name": "xulihang",
      "year": "14",
      "title": "日常生活中遇到的虫子",
      "url": {
        "$": {
          "href": "https://blog.xulihang.me/bugs-you-may-meet-in-daily-life/"
        }
      },
      "date": "2026-10-18"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "成本十几块，就能屏蔽全家的广告！",
      "url": "https://www.ccgxk.com/922.html",
      "date": "2026-10-18"
    },
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "Nginx 防恶意解析失效了？2000 条拦截日志揪出 HTTPS 时代的默认站点陷阱",
      "url": "https://www.tjsky.net/tutorial/2139",
      "date": "2026-10-18"
    }
  ],
  "2019": [
    {
      "name": "瓜老汉",
      "year": "19",
      "title": "江城大学，江城是一个神奇的地方",
      "url": "http://www.gualaohan.com/post/828",
      "date": "2026-10-18"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "周末流水账 1018",
      "url": "https://blog.solazy.me/20261018/",
      "date": "2026-10-18"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "报名三轮车的驾驶培训",
      "url": "https://www.imcry.vip/post/2026-10-18-631/",
      "date": "2026-10-17"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "WordPress插件评论邮件通知：异步发送邮件/聊天对话式邮件模板/底部自定义HTML可用于博客签名或广告位",
      "url": "https://www.bufanz.com/202610181163.html",
      "date": "2026-10-18"
    }
  ],
  "2021": [
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "鞍山、沈阳短途游（2026）",
      "url": "https://www.mmbkz.cn/fa3df801.html",
      "date": "2026-10-18"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "一只没有尾巴的猪",
      "url": "https://www.wsh233.cn/post/一只没有尾巴的猪",
      "date": "2026-10-18"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "网络转载的一篇短文",
      "url": "https://ygz.ink/archives/5909.html",
      "date": "2026-10-18"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "3D 关系图的极致优化：GPT-6.1 sol Ultra 的神力",
      "url": "https://xingwangzhe.fun/posts/3d-graph-extreme-optimization-gpt-6-1-sol-ultra/",
      "date": "2026-10-18"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.10.18 博客阅读周荐 - 映屿",
      "url": "https://www.immarcus.com/blog/weekly-20261018",
      "date": "2026-10-18"
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
