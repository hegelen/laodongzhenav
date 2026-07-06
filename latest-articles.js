// ==================== latest-articles.js ====================
// 抓取日期: 7/6/2026, 9:02:00 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Facts and feelings",
      "url": "https://seths.blog/2026/07/facts-and-feelings/",
      "date": "2026-07-06"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "5 分钟上手 gvu：把 vanity import path 这件事，从“半天运维”变成一条命令",
      "url": "https://tonybai.com/2026/07/06/get-started-with-gvu-in-5-minutes/",
      "date": "2026-07-05"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "确定荣事达小冰箱",
      "url": "http://www.xlanda.net/posts/22311",
      "date": "2026-07-06"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "中公教育",
      "url": "https://synyan.cn/t/63094",
      "date": "2026-07-06"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "游泳池",
      "url": "https://acevs.com/5085/",
      "date": "2026-07-06"
    }
  ],
  "2006": [
    {
      "name": "忘记了回忆",
      "year": "06",
      "title": "停电",
      "url": "https://ltmltm.cn/bk/1472.html",
      "date": "2026-07-06"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "《新浪云终止服务》了，又一个云服务平台倒下了",
      "url": "https://www.linyufan.com/post/5884",
      "date": "2026-07-06"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "구글 사이트킷 'Unable to retrieve site connection' 오류 해결 방법",
      "url": "https://www.thewordcracker.com/basic/%ea%b5%ac%ea%b8%80-%ec%82%ac%ec%9d%b4%ed%8a%b8%ed%82%b7-%ec%97%b0%ea%b2%b0-%ec%98%a4%eb%a5%98-%ed%95%b4%ea%b2%b0/",
      "date": "2026-07-06"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "让炼丹更科学一些（七）：步长调度与权重平均",
      "url": "https://kexue.fm/archives/11804",
      "date": "2026-07-06"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Codex 敞开用的技巧和谷歌趋势的参考词",
      "url": "https://www.ccgxk.com/codeother/800.html",
      "date": "2026-07-06"
    },
    {
      "name": "碎言",
      "year": "17",
      "title": "AI自动回复评论，你怎么看？",
      "url": "https://www.suiyan.cc/blog/20260706192737",
      "date": "2026-07-06"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "GitHub一周热点",
      "url": "https://qiukui-note.happy365.day/20260706/github-trends-weekly/",
      "date": "2026-07-06"
    }
  ],
  "2019": [
    {
      "name": "吴诗涛",
      "year": "19",
      "title": "记远程办公新起点",
      "url": "https://shitao5.org/posts/remote-work-new-beginning/",
      "date": "2026-07-06"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "【景点篇】青城后山",
      "url": "https://liuqingwushui.top/archives/169/",
      "date": "2026-07-06"
    },
    {
      "name": "呢喃",
      "year": "19",
      "title": "世界，您好！",
      "url": "https://ninan.me/2026/07/06/hello-world/",
      "date": "2026-07-06"
    }
  ],
  "2023": [
    {
      "name": "小归客",
      "year": "23",
      "title": "小归客个人主页程序2026版本",
      "url": "https://xgk.pw/archives/310/",
      "date": "2026-07-06"
    },
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "镖人：风起大漠",
      "url": "https://jefftay.com/movies/blades-of-the-guardians",
      "date": "2026-07-06"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "世界奇妙物语",
      "url": "https://www.immarcus.com/blog/yonimo-kimyona-monogatari",
      "date": "2026-07-06"
    }
  ],
  "2026": [
    {
      "name": "一个博客",
      "year": "26",
      "title": "说说：时隔很久没有走进电影院，周星驰新作《功夫女足》定档 7 月 11 日，…",
      "url": "https://yigeboke.com/shuoshuo.php#shuo_34",
      "date": "2026-07-06"
    },
    {
      "name": "华立",
      "year": "26",
      "title": "自古不变的五大赚钱赛道",
      "url": "https://www.renhuali.cn/journal/cmr8mud1301twchyjc70i3kpr",
      "date": "2026-07-06"
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
