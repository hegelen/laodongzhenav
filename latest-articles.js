// ==================== latest-articles.js ====================
// 抓取日期: 5/28/2026, 9:16:09 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Two video upgrades",
      "url": "https://seths.blog/2026/05/two-video-upgrades/",
      "date": "2026-05-28"
    }
  ],
  "2008": [
    {
      "name": "生活的左上角",
      "year": "08",
      "title": "观《给阿嬷的情书》有感：只为情义",
      "url": "https://bwskyer.com/dear-you-review-love-and-trust.html",
      "date": "2026-05-28"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "Typecho1.3.0修订版来了，非官网的",
      "url": "https://www.mmtx.net/1166.html",
      "date": "2026-05-28"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "讲一下谷歌 SEO 常用的 8 个工具",
      "url": "https://www.ccgxk.com/codeother/761.html",
      "date": "2026-05-28"
    }
  ],
  "2019": [
    {
      "name": "李锋镝",
      "year": "19",
      "title": "Claude Haiku 4.5、Claude Sonnet 4.6、Claude Opus 4.7 区别以及各自的新特性",
      "url": "https://www.lifengdi.com/ren-gong-zhi-neng/4715",
      "date": "2026-05-28"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "「官」方認證",
      "url": "https://blog.giveanornot.com/verified/",
      "date": "2026-05-27"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-05-28",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-05-28",
      "date": "2026-05-28"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "通过专业SEO和企业网页设计服务吸引更多客户",
      "url": "https://www.bailuze.com/24097.html",
      "date": "2026-05-28"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "儿童节的烦恼",
      "url": "https://ygz.ink/archives/5054.html",
      "date": "2026-05-28"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "还有哪些老登还在追漫剧",
      "url": "https://www.renhuali.cn/journal/cmpplp89l0017chiqi4l0bldo",
      "date": "2026-05-28"
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
