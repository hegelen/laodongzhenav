// ==================== latest-articles.js ====================
// 抓取日期: 6/10/2026, 9:35:55 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Video games, movies and books",
      "url": "https://seths.blog/2026/06/video-games-movies-and-books/",
      "date": "2026-06-10"
    }
  ],
  "2003": [
    {
      "name": "王通",
      "year": "03",
      "title": "王通：【凝神聚气秘法】让你不再神耗气散力疲！",
      "url": "https://www.ufoer.com/post/13518.html",
      "date": "2026-06-10"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "TP-LINK连锐捷",
      "url": "http://www.xlanda.net/posts/22251",
      "date": "2026-06-10"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "沙丘",
      "url": "https://acevs.com/5029/",
      "date": "2026-06-10"
    },
    {
      "name": "春田",
      "year": "05",
      "title": "１０７８．「働く」について考える　(５)レンガ職人の話",
      "url": "http://kaikeimura.way-nifty.com/blog/2026/06/post-9dbbab.html",
      "date": "2026-06-10"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "Linux 上的 Firefox 要支援 Vulkan Video Decoding 了？",
      "url": "https://blog.gslin.org/archives/2026/06/10/13066/linux-%e4%b8%8a%e7%9a%84-firefox-%e8%a6%81%e6%94%af%e6%8f%b4-vulkan-video-decoding-%e4%ba%86%ef%bc%9f/",
      "date": "2026-06-09"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "Rectangle Pro 使用教程：买了之后才搞懂",
      "url": "https://blog.forecho.com/rectangle-pro-usage-guide.html",
      "date": "2026-06-10"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "服务器高性能网络调优",
      "url": "https://www.kawabangga.com/posts/7292",
      "date": "2026-06-10"
    }
  ],
  "2016": [
    {
      "name": "ximi",
      "year": "16",
      "title": "用了安卓才发现，我只能自己写个备忘录了",
      "url": "https://www.ximi.me/post-6041.html",
      "date": "2026-06-10"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "两个朋友做跨境独立站编程出海的经历、找词技巧",
      "url": "https://www.ccgxk.com/codeother/774.html",
      "date": "2026-06-10"
    }
  ],
  "2018": [
    {
      "name": "游钓四方",
      "year": "18",
      "title": "Photosuite EXIF 优化",
      "url": "https://blog.lhasa.icu/posts/technology/2026-06-09-photosuite-v0-5-0-beta/",
      "date": "2026-06-10"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "千呼萬喚的露狗！還有新的烘焙雞！",
      "url": "https://blog.giveanornot.com/new-homepage/",
      "date": "2026-06-10"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-10",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-10",
      "date": "2026-06-10"
    }
  ],
  "2023": [
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "第一个微信小程序上线（体表面积BSA）",
      "url": "https://siwei.li/di-yi-ge-wei-xin-xiao-cheng-xu-shang-xian-ti-biao-mian-ji-bsa/",
      "date": "2026-06-10"
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "为博客构建“轻量级知识索引”（四）：系列文章导航与阅读路径设计",
      "url": "http://blog.tangwudi.com/technology/homedatacenter14334/",
      "date": "2026-06-10"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "什么是AEO？它如何改变SEO的未来？",
      "url": "https://www.bailuze.com/24139.html",
      "date": "2026-06-10"
    },
    {
      "name": "火米",
      "year": "23",
      "title": "一个安全的玩耍空间",
      "url": "https://huo.me/studio/",
      "date": "2026-06-10"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "我做了一个现代Web版本的标签云，支持图片视频Web组件",
      "url": "https://xingwangzhe.fun/posts/modern-tags-cloud-3d/",
      "date": "2026-06-10"
    }
  ],
  "2025": [
    {
      "name": "青萍",
      "year": "25",
      "title": "AI漫剧之配音篇",
      "url": "https://blog.lusyoe.com/article/ai-comic-drama-dubbing",
      "date": "2026-06-10"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "梦和灵感论AI自主意识与人类是另一种AI(圈养)的可能性",
      "url": "https://www.renhuali.cn/journal/cmq7cw7e20050ch3o0ewt1aog",
      "date": "2026-06-10"
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
