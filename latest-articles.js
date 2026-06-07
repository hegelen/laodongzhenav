// ==================== latest-articles.js ====================
// 抓取日期: 6/7/2026, 8:21:16 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "点拿铁被误听成茶",
      "url": "https://wlj.me/notes/sp-note-20260607-142937/",
      "date": "2026-06-07"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Marketing clerks",
      "url": "https://seths.blog/2026/06/marketing-clerks/",
      "date": "2026-06-07"
    }
  ],
  "2005": [
    {
      "name": "yaner",
      "year": "05",
      "title": "wordpress数据导入blogger",
      "url": "https://yaner.cc/689.html",
      "date": "2026-06-07"
    }
  ],
  "2006": [
    {
      "name": "黄杰敏",
      "year": "06",
      "title": "高考二十载感怀",
      "url": "https://www.jiemin.com/archives/1830.html",
      "date": "2026-06-07"
    },
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "房子依然是很多人意难平",
      "url": "https://joojen.com/archives/9012.html",
      "date": "2026-06-07"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || AI编程有感",
      "url": "https://www.yishu.pro/221.html",
      "date": "2026-06-07"
    }
  ],
  "2010": [
    {
      "name": "磊磊落落",
      "year": "10",
      "title": "為什麼要讀古文？",
      "url": "https://leileiluoluo.com/posts/du-gu-wen.html",
      "date": "2026-06-07"
    }
  ],
  "2011": [
    {
      "name": "唐巧",
      "year": "11",
      "title": "更换搬瓦工 VPS IP",
      "url": "https://blog.devtang.com/2026/06/07/change-bandwagon-host-ip/",
      "date": "2026-06-07"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我开发多agent的智能体的总结",
      "url": "https://www.linyufan.com/post/5840",
      "date": "2026-06-07"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "《GPT 图解》笔记：Transformer",
      "url": "https://izualzhy.cn/llm-diagrammatize-transformer",
      "date": "2026-06-07"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "OpenAI 연구원이 밝힌 6년 걸릴 공부 3일 만에 끝내는 법 (탑다운 공부법)",
      "url": "https://www.thewordcracker.com/blog/ai-%ec%8b%9c%eb%8c%80%ec%9d%98-%ea%b3%b5%eb%b6%80%eb%b2%95/",
      "date": "2026-06-07"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "空话比废话更有危害 ｜隐说 NO.26",
      "url": "https://wangyurui.com/posts/kong-hua-bi-fei-hua-geng-you-wei-hai-yin-shuo-no-947bef58",
      "date": "2026-06-07"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "拆解 aidocmaker 这个 SEO 神站，聊聊 Lovart 的交互设计",
      "url": "https://www.ccgxk.com/codeother/771.html",
      "date": "2026-06-07"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-05-31 / 起夜级发行版",
      "url": "https://blog.xinshijiededa.men/daily/40/",
      "date": "2026-06-07"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "手生了就要多练",
      "url": "https://blog.solazy.me/20260607/",
      "date": "2026-06-07"
    }
  ],
  "2020": [
    {
      "name": "vinchent",
      "year": "20",
      "title": "2026全国I卷作文",
      "url": "https://www.vinchent.xyz/2026quan-guo-ijuan-zuo-wen",
      "date": "2026-06-07"
    }
  ],
  "2021": [
    {
      "name": "喵喵小站・博客志",
      "year": "21",
      "title": "美国大学女生快乐的校园生活，剧情真不错啊",
      "url": "https://www.mmbkz.cn/370cb772.html",
      "date": "2026-06-07"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "母语级英语的本质，不是英语",
      "url": "https://xice.cx/posts/English/",
      "date": "2026-06-06"
    }
  ],
  "2026": [
    {
      "name": "安迪",
      "year": "26",
      "title": "卸载搜狗输入法",
      "url": "https://i55.top/archives/532/",
      "date": "2026-06-07"
    },
    {
      "name": "妄司逸",
      "year": "26",
      "title": "自建图床服务",
      "url": "https://blog.flechazo.icu/2026/06/07/imghub/",
      "date": "2026-06-07"
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
