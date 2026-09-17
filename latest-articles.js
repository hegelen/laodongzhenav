// ==================== latest-articles.js ====================
// 抓取日期: 9/17/2026, 10:07:41 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "GFI (and the alternative)",
      "url": "https://seths.blog/2026/09/gfi-and-the-alternative/",
      "date": "2026-09-17"
    },
    {
      "name": "不吐不快",
      "year": "02",
      "title": "同文输入法添加雾凇拼音和中英文释义",
      "url": "https://mianao.info/add-chinese-english-translation-to-trime/",
      "date": "2026-09-17"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "不怯场",
      "url": "https://ezo.biz/Diary/1679.html",
      "date": "2026-09-17"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "磁盘满了",
      "url": "http://www.xlanda.net/posts/22474",
      "date": "2026-09-17"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "jemalloc 的新進展",
      "url": "https://blog.gslin.org/archives/2026/09/18/13206/jemalloc-%e7%9a%84%e6%96%b0%e9%80%b2%e5%b1%95/",
      "date": "2026-09-17"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0007",
      "url": "https://lenciel.com/2026/09/fragments-0x0007/",
      "date": "2026-09-17"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "十分感谢博友点评：博客互联㊿auiou.com自由勇 二十年博客的老程序员",
      "url": "http://www.auiou.com/relevant/00010007.jsp",
      "date": "2026-09-17"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "之前新办的手机号问题",
      "url": "https://acevs.com/5237/",
      "date": "2026-09-17"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "升级 Typecho 到最新版本 1.3.0，网站一切正常",
      "url": "https://www.munue.com/818.html",
      "date": "2026-09-17"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "CSS rex、rlh、ric等根家族单位简介",
      "url": "https://www.zhangxinxu.com/wordpress/2026/09/css-root-units/",
      "date": "2026-09-17"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "博客内容页大更新-增加可以翻动的相册展示",
      "url": "https://www.linyufan.com/post/6026",
      "date": "2026-09-17"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "티스토리 마이그레이션 플러그인을 사용하여 쉽게 티스토리 게시글을 워드프레스로 이전하기",
      "url": "https://www.thewordcracker.com/basic/%ed%8b%b0%ec%8a%a4%ed%86%a0%eb%a6%ac-%eb%a7%88%ec%9d%b4%ea%b7%b8%eb%a0%88%ec%9d%b4%ec%85%98-%ed%94%8c%eb%9f%ac%ea%b7%b8%ec%9d%b8/",
      "date": "2026-09-16"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "什么是尾递归？为什么那么优雅？",
      "url": "https://www.ccgxk.com/front-end/888.html",
      "date": "2026-09-17"
    }
  ],
  "2019": [
    {
      "name": "Zeruns",
      "year": "19",
      "title": "雨云 德国法兰克福VPS 测评，2核4G 100兆 仅需35元/月，联通优化",
      "url": "https://blog.zeruns.com/archives/958.html",
      "date": "2026-09-17"
    },
    {
      "name": "紫塞",
      "year": "19",
      "title": "宽广X超值：这个“X”是什么意思，这家店有多“硬”？",
      "url": "https://zisai.com/posts/kuanguang-x-value-hard-discount-explained/",
      "date": "2026-09-17"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件LinkTarget：文章正文与摘要中的链接自动添加target=&quot;_blank&quot;属性",
      "url": "https://www.bufanz.com/20260917936.html",
      "date": "2026-09-17"
    },
    {
      "name": "HEMING",
      "year": "20",
      "title": "VMISS.COM .JP.TKY.TRI.Basic",
      "url": "https://heming.org/2822.html",
      "date": "2026-09-17"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-17",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-17",
      "date": "2026-09-17"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "什么是网站优化，应该怎么做？",
      "url": "https://www.bailuze.com/24427.html",
      "date": "2026-09-17"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "也来细数一下我所有的离职瞬间",
      "url": "https://www.immarcus.com/blog/my-quitting-moments",
      "date": "2026-09-17"
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
