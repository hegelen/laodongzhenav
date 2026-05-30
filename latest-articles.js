// ==================== latest-articles.js ====================
// 抓取日期: 5/30/2026, 3:57:25 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "“Because you’re the cheapest”",
      "url": "https://seths.blog/2026/05/because-youre-the-cheapest/",
      "date": "2026-05-29"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "菜场到底是靠谁活下来的",
      "url": "https://www.tortorse.com/archives/wet-market-weekend-observation/",
      "date": "2026-05-30"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "工作日早上打的卡",
      "url": "http://www.xlanda.net/posts/22228",
      "date": "2026-05-30"
    }
  ],
  "2009": [
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || 2026年建筑师考试小结",
      "url": "https://www.yishu.pro/217.html",
      "date": "2026-05-29"
    },
    {
      "name": "多多",
      "year": "09",
      "title": "腾讯eo pages 网站访问显示404",
      "url": "https://ddlog.cn/?p=510",
      "date": "2026-05-29"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 목차 플러그인 목차가 표시되지 않는 문제 해결 방법",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-%eb%aa%a9%ec%b0%a8-%eb%af%b8%ed%91%9c%ec%8b%9c-%eb%ac%b8%ec%a0%9c/",
      "date": "2026-05-29"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "时代在轮回，2026 年做网站又开始流行起来",
      "url": "https://www.ccgxk.com/codeother/762.html",
      "date": "2026-05-29"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "浅谈EVE欧服的加速器设置",
      "url": "https://www.imcry.vip/post/2026-5-29-1905/",
      "date": "2026-05-29"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "手痒没忍住，把家里的珍珠柏给剪了",
      "url": "https://9sb.net/archives/unable-to-resist-itching-i-cut-the-pearl-cypress-at-hom.html",
      "date": "2026-05-30"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "放假了按摩放松下",
      "url": "https://ygz.ink/archives/5071.html",
      "date": "2026-05-29"
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
