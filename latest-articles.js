// ==================== latest-articles.js ====================
// 抓取日期: 5/7/2026, 8:20:53 PM
// 只抓取最近7天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "kaix.in",
      "year": "04",
      "title": "桌面宠物",
      "url": "https://kaix.in/2026/0504/",
      "date": "2026-05-04"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "难得正版Windows又打骨折！白菜价",
      "url": "https://me.xu19.com/windows11-big-discount/",
      "date": "2026-05-01"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "读《金阁寺》",
      "url": "https://www.kawabangga.com/posts/7246",
      "date": "2026-05-04"
    }
  ],
  "2015": [
    {
      "name": "Luminous",
      "year": "15",
      "title": "【frp】双端内网环境XTCP协议P2P打洞互通实践",
      "url": "https://luotianyi.vc/9435.html",
      "date": "2026-05-03"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "隐说 NO.22 小人多了，坏人就会兴风作浪",
      "url": "https://wangyurui.com/posts/yin-shuo-no-22-xiao-ren-duo-liao-pi-ren-jiu-hui-99146411",
      "date": "2026-05-04"
    },
    {
      "name": "woodu",
      "year": "16",
      "title": "JVS时代的经典乘客——《太鼓之达人 6》",
      "url": "https://woodu.me/jvsshidaidejingdiancheng/",
      "date": "2026-05-02"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "如何更科学地估计矩阵的谱范数？",
      "url": "https://kexue.fm/archives/11736",
      "date": "2026-05-04"
    }
  ],
  "2021": [
    {
      "name": "诺依阁",
      "year": "21",
      "title": "openclaw命令行与搭建(2026.5.3版本)",
      "url": "https://blog.nuoyis.net/posts/93b5.html",
      "date": "2026-05-04"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "狐蒂云疑似准备跑路：低价云服务器的水有多深",
      "url": "https://lb5.net/253.html",
      "date": "2026-05-06"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "Robots.txt与SEO：2026年需要了解的事项",
      "url": "https://www.bailuze.com/24057.html",
      "date": "2026-05-07"
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

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇最近7天文章');
