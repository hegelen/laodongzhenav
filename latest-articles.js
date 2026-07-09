// ==================== latest-articles.js ====================
// 抓取日期: 7/9/2026, 8:55:33 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Generous collusion",
      "url": "https://seths.blog/2026/07/generous-collusion/",
      "date": "2026-07-09"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：如何找到最吸引人的购买理由",
      "url": "https://www.ufoer.com/post/13974.html",
      "date": "2026-07-09"
    },
    {
      "name": "爱情在线",
      "year": "03",
      "title": "AI 眼中的我",
      "url": "https://aqzx.com/blog_view.asp?id=66",
      "date": "2026-07-09"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI 重写 Bun 为Rust全过程揭秘：101万行代码、11天、64个Claude并行开工",
      "url": "https://tonybai.com/2026/07/09/ai-rewrite-bun-in-rust/",
      "date": "2026-07-09"
    },
    {
      "name": "Jake",
      "year": "04",
      "title": "Syrovex 招聘｜寻找优秀的创业伙伴",
      "url": "https://jaketao.com/syrovex-hiring",
      "date": "2026-07-09"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "台风“巴威”",
      "url": "https://synyan.cn/t/63154",
      "date": "2026-07-09"
    }
  ],
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "小孩的英语辅导",
      "url": "https://blog.codingnow.com/2026/07/learning_english.html",
      "date": "2026-07-09"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "CO₂ 對工作效率的影響，或是 CO₂ 當作指標時對工作效率的影響",
      "url": "https://blog.gslin.org/archives/2026/07/10/13100/co%e2%82%82-%e5%b0%8d%e5%b7%a5%e4%bd%9c%e6%95%88%e7%8e%87%e7%9a%84%e5%bd%b1%e9%9f%bf%ef%bc%8c%e6%88%96%e6%98%af-co%e2%82%82-%e7%95%b6%e4%bd%9c%e6%8c%87%e6%a8%99%e6%99%82%e5%b0%8d%e5%b7%a5%e4%bd%9c/",
      "date": "2026-07-09"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "博客优化手记",
      "url": "https://bwskyer.com/blog-maintenance-notes.html",
      "date": "2026-07-09"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "前端快讯：setHTML()和Element.startViewTransition已支持",
      "url": "https://www.zhangxinxu.com/wordpress/2026/07/sethtml-element-startviewtransition/",
      "date": "2026-07-09"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "非科班出身能不能开发程序",
      "url": "https://www.linyufan.com/post/5891",
      "date": "2026-07-09"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "介绍几组我一直在使用的 Codex 插件",
      "url": "https://www.ccgxk.com/codeother/803.html",
      "date": "2026-07-09"
    }
  ],
  "2019": [
    {
      "name": "Zeruns",
      "year": "19",
      "title": "绿联（Ugreen）DXP4800Pro NAS 开箱评测与拆解，4盘位NAS，i3-1315U，存储服务器",
      "url": "https://blog.zeruns.com/archives/949.html",
      "date": "2026-07-09"
    },
    {
      "name": "沧海月明",
      "year": "19",
      "title": "OceanBase 的软件工程管理",
      "url": "https://www.inlighting.org/archives/software-engineering-management-in-oceanbase",
      "date": "2026-07-09"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "當部落格超越 Threads",
      "url": "https://blog.giveanornot.com/when-blog-beats-threads/",
      "date": "2026-07-09"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "给三花猫的小儿子起名“小不点”",
      "url": "https://www.bufanz.com/20260709727.html",
      "date": "2026-07-09"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "野生菌",
      "url": "https://www.wsh233.cn/post/野生菌",
      "date": "2026-07-09"
    }
  ],
  "2022": [
    {
      "name": "晴雀堂",
      "year": "22",
      "title": "为hexo博客添加隐藏ai文本的功能",
      "url": "https://blog.verynb.net/posts/57342.html",
      "date": "2026-07-09"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "申请 Edgeone Makers 提升额度",
      "url": "https://xingwangzhe.fun/posts/apply-edgeone-makers/",
      "date": "2026-07-09"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "说说：原本定好 7 月 11 号的《功夫女足》观影票调整到 12 日晚 19…",
      "url": "https://yigeboke.com/shuoshuo.php#shuo_35",
      "date": "2026-07-09"
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
