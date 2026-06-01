// ==================== latest-articles.js ====================
// 抓取日期: 5/31/2026, 8:18:51 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "花样年华留白如侦探",
      "url": "https://wlj.me/notes/sp-note-20260531-193739/",
      "date": "2026-05-31"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "Codex 治好了我的博客不能被 VXNA 抓取的毛病",
      "url": "https://www.tortorse.com/archives/vxna-rss-cloudflare-codex-debugging/",
      "date": "2026-05-31"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "适应初夏",
      "url": "http://www.xlanda.net/posts/22230",
      "date": "2026-05-31"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "wp关闭评论办法",
      "url": "https://ddlog.cn/?p=519",
      "date": "2026-05-31"
    },
    {
      "name": "老张",
      "year": "09",
      "title": "typecho兰空图床上传插件V2版",
      "url": "https://laozhang.org/archives/4066.html",
      "date": "2026-05-31"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "读书方言《第二天》-20260531",
      "url": "https://guoxiaoli.com/post/663.html",
      "date": "2026-05-31"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "AI 生成的代码太啰嗦",
      "url": "https://www.ccgxk.com/emlog_dev/764.html",
      "date": "2026-05-31"
    }
  ],
  "2019": [
    {
      "name": "LJF.COM",
      "year": "19",
      "title": "华杉讲透《大学中庸》--- 《中庸》",
      "url": "https://ljf.com/2026/05/31/1544/",
      "date": "2026-05-31"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "没有宗门庇护的凡人，能修到哪一层？",
      "url": "https://ygz.ink/archives/5096.html",
      "date": "2026-05-31"
    }
  ],
  "2026": [
    {
      "name": "周阿源",
      "year": "26",
      "title": "六一拆盒｜女儿的星星人「一起白头」款",
      "url": "https://zhouayuan.com/post/45.html",
      "date": "2026-05-31"
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
