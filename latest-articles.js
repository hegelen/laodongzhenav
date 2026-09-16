// ==================== latest-articles.js ====================
// 抓取日期: 9/16/2026, 10:05:22 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "搞不懂Grok用量规则换自建",
      "url": "https://wlj.me/notes/sp-note-20260916-163310/",
      "date": "2026-09-16"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Work isn’t optional…",
      "url": "https://seths.blog/2026/09/work-isnt-optional/",
      "date": "2026-09-16"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "AI智能体怎么赚钱？6种模式，我按”值不值钱”排了个序",
      "url": "https://www.ufoer.com/post/14563.html",
      "date": "2026-09-16"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "十四年磨一剑：Go 标准库encoding/json/v2 演进全史",
      "url": "https://tonybai.com/2026/09/16/go-json-v2-history/",
      "date": "2026-09-15"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "blog打不开&#038;谈谈豆包输入法",
      "url": "http://www.xlanda.net/posts/22472",
      "date": "2026-09-16"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Claude Code 的 promotion 降為 25% boost",
      "url": "https://blog.gslin.org/archives/2026/09/16/13205/claude-code-%e7%9a%84-promotion-%e9%99%8d%e7%82%ba-25-boost/",
      "date": "2026-09-16"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "当地学区房政策又变了",
      "url": "https://me.xu19.com/local-school-district-housing-policy-changes-again/",
      "date": "2026-09-16"
    }
  ],
  "2009": [
    {
      "name": "老刘",
      "year": "09",
      "title": "把跟了我四十多年的痣给切了",
      "url": "https://www.iliu.org/posts/mole-removal/",
      "date": "2026-09-16"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "赛力斯和华为分手了",
      "url": "https://www.leitao.cn/10915.html",
      "date": "2026-09-16"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "我做了一个免费SVG工具箱：一句话就能生成SVG图标",
      "url": "https://blog.xiaoz.org/archives/23482",
      "date": "2026-09-16"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "鸿蒙应用”竹子记账“开发笔记（增加端侧大模型语音识别，Ai页面优化）",
      "url": "https://www.linyufan.com/post/6021",
      "date": "2026-09-16"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 관리자 계정 변경 방법 (사용자명 및 이메일 주소)",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%ea%b4%80%eb%a6%ac%ec%9e%90-%ea%b3%84%ec%a0%95-%eb%b3%80%ea%b2%bd-%eb%b0%a9%eb%b2%95/",
      "date": "2026-09-16"
    }
  ],
  "2017": [
    {
      "name": "2broear",
      "year": "17",
      "title": "AI真的会杀死人类吗？",
      "url": "https://blog.2broear.com/notes/16-09-2026_will-ai-kill-us-all",
      "date": "2026-09-16"
    }
  ],
  "2019": [
    {
      "name": "Zeruns",
      "year": "19",
      "title": "【开源】Discourse 回帖可见/登录可见插件（discourse-reply-to-view），回复解锁隐藏内容",
      "url": "https://blog.zeruns.com/archives/957.html",
      "date": "2026-09-16"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "WordPress站点的服务器，重装系统、换运维面板、升级Web运行环境",
      "url": "https://www.bufanz.com/20260916922.html",
      "date": "2026-09-16"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "初遇肾绞痛",
      "url": "https://www.wsh233.cn/post/初遇肾绞痛",
      "date": "2026-09-16"
    },
    {
      "name": "辣条",
      "year": "21",
      "title": "关于失业，我与生活的一场和解与迷茫",
      "url": "https://www.latiao.org/2299.html",
      "date": "2026-09-16"
    },
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "说说：#2026-09-16 20:01",
      "url": "https://www.mmbkz.cn/dd9f8905.html",
      "date": "2026-09-16"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "7个扼杀SEO的错误链接建设",
      "url": "https://www.bailuze.com/24425.html",
      "date": "2026-09-16"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "剧本也是一个游戏——不剧透的《万箭穿心》迷你解读",
      "url": "https://www.immarcus.com/blog/feng-shui-movie-review-no-spoiler",
      "date": "2026-09-16"
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
