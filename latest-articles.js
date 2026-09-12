// ==================== latest-articles.js ====================
// 抓取日期: 9/12/2026, 9:26:30 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "菜鸟学画二十天仍不稳定",
      "url": "https://wlj.me/notes/sp-note-20260912-232330/",
      "date": "2026-09-12"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "确认损失",
      "url": "https://ezo.biz/Diary/1664.html",
      "date": "2026-09-12"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "Rust 要变成下一个C++？",
      "url": "https://tonybai.com/2026/09/12/rust-complexity-debate-2026/",
      "date": "2026-09-11"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "re.match() 變成 re.prefixmatch()",
      "url": "https://blog.gslin.org/archives/2026/09/13/13200/re-match-%e8%ae%8a%e6%88%90-re-prefixmatch/",
      "date": "2026-09-12"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "碎片2026年9月12日",
      "url": "https://acevs.com/5227/",
      "date": "2026-09-12"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0005",
      "url": "https://lenciel.com/2026/09/fragments-0x0005/",
      "date": "2026-09-12"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "Google Chrome 查看标签页的新方式：垂直显示标签页",
      "url": "https://www.munue.com/816.html",
      "date": "2026-09-12"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "写字的快乐与写得好坏无关",
      "url": "https://yufm.com/662367.html",
      "date": "2026-09-12"
    },
    {
      "name": "树下语",
      "year": "07",
      "title": "相忘于江湖",
      "url": "https://yishu-life.com/index.php/archives/555.html",
      "date": "2026-09-12"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "51LA统计跳转色情网站问题",
      "url": "https://bwskyer.com/51la-statistics-redirect-issue.html",
      "date": "2026-09-12"
    }
  ],
  "2011": [
    {
      "name": "Be For Web",
      "year": "11",
      "title": "针对 iPhone Duo 纵向灵动岛的设计调整",
      "url": "http://beforweb.com/node/1154",
      "date": "2026-09-12"
    }
  ],
  "2015": [
    {
      "name": "elmagnifico",
      "year": "15",
      "title": "有点无语",
      "url": "https://elmagnifico.tech/2026/09/13/DreamComeTrue/",
      "date": "2026-09-12"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "搞 SEO 的，不要与程序员抢赛道！",
      "url": "https://www.ccgxk.com/codeother/881.html",
      "date": "2026-09-12"
    },
    {
      "name": "浴沂咏归",
      "year": "17",
      "title": "基于「道德本位，权责统一」原理的社会成员二元划分新论",
      "url": "https://zexwoo.blog/posts/gossip/binary-classification/",
      "date": "2026-09-12"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "博客阅读随感：也谈记忆",
      "url": "https://www.suiyan.cc/blog/20260912201512",
      "date": "2026-09-12"
    }
  ],
  "2019": [
    {
      "name": "紫塞",
      "year": "19",
      "title": "48岁，戒酒、限食、训练34天：两次验血给了我答案",
      "url": "https://zisai.com/posts/34-days-without-alcohol-what-my-blood-tests-revealed/",
      "date": "2026-09-12"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "无用命途：自制三天王",
      "url": "https://blog.mfwt.top/index.php/archives/1546/",
      "date": "2026-09-12"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "SEO基础：初学者指南",
      "url": "https://www.bailuze.com/24414.html",
      "date": "2026-09-12"
    }
  ],
  "2024": [
    {
      "name": "xgclevo",
      "year": "24",
      "title": "低功耗蓝牙通信安全",
      "url": "https://blog.xgclevo.top/posts/6cd8efe4/",
      "date": "2026-09-12"
    },
    {
      "name": "姓王者",
      "year": "24",
      "title": "辽宁省往年高考成绩查询方法",
      "url": "https://xingwangzhe.fun/posts/liaoning-gaokao-score-history/",
      "date": "2026-09-12"
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
