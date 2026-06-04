// ==================== latest-articles.js ====================
// 抓取日期: 6/4/2026, 9:04:04 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2006": [
    {
      "name": "黄杰敏",
      "year": "06",
      "title": "风吹一夏",
      "url": "https://www.jiemin.com/archives/1826.html",
      "date": "2026-06-04"
    }
  ],
  "2012": [
    {
      "name": "MacTalk-池建强的随想录",
      "year": "12",
      "title": "CatReader 上线：重启 RSS 阅读",
      "url": "https://macshuo.com/?p=2050",
      "date": "2026-06-04"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "简单总结：接入了阿里云的“读光”OCR识别票据，鸿蒙app显示markdown内容",
      "url": "https://www.linyufan.com/post/5838",
      "date": "2026-06-04"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "道德使我痛苦",
      "url": "https://wangyurui.com/posts/dao-de-shi-wo-tong-ku-928d6e2e",
      "date": "2026-06-04"
    },
    {
      "name": "ximi",
      "year": "16",
      "title": "一个轻量级本地网址收藏夹",
      "url": "https://www.ximi.me/post-6040.html",
      "date": "2026-06-03"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-05-30 / 土法 ansible",
      "url": "https://blog.xinshijiededa.men/daily/39/",
      "date": "2026-06-04"
    }
  ],
  "2020": [
    {
      "name": "优世界",
      "year": "20",
      "title": "用 Python 给博客字体瘦了一下身",
      "url": "https://usj.cc/202606041003.html",
      "date": "2026-06-04"
    },
    {
      "name": "呆哥",
      "year": "20",
      "title": "一个微信UI的双人打卡程序",
      "url": "https://www.dalao.net/thread-59355.htm",
      "date": "2026-06-04"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "免费撸英伟达的 API key",
      "url": "https://www.renhuali.cn/journal/cmpyqpt9s0009chn74loyyp5c",
      "date": "2026-06-04"
    },
    {
      "name": "周阿源",
      "year": "26",
      "title": "今日手绘｜元气小丫头",
      "url": "https://zhouayuan.com/post/48.html",
      "date": "2026-06-04"
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
