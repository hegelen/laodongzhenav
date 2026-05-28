// ==================== latest-articles.js ====================
// 抓取日期: 5/27/2026, 9:06:36 PM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "规模越大Token烧得越猛",
      "url": "https://wlj.me/notes/sp-note-20260527-152509/",
      "date": "2026-05-27"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Which one do you want?",
      "url": "https://seths.blog/2026/05/which-one-do-you-want/",
      "date": "2026-05-27"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "记录一个笔记智能体的开发经过（1）",
      "url": "https://www.linyufan.com/post/5828",
      "date": "2026-05-27"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "无聊是一种很新的病",
      "url": "https://wangyurui.com/posts/wu-liao-shi-yi-chong-hen-xin-de-bing-6ce2c401",
      "date": "2026-05-27"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "别用“开源正义”道德绑架了！聊聊二次开发的开源协议、责任边界、人情世故",
      "url": "https://www.tjsky.net/natter/1613",
      "date": "2026-05-27"
    }
  ],
  "2018": [
    {
      "name": "阳",
      "year": "18",
      "title": "Linux系统优化",
      "url": "https://yooer.me/847.html",
      "date": "2026-05-27"
    }
  ],
  "2019": [
    {
      "name": "herman",
      "year": "19",
      "title": "Resurfacing posts",
      "url": "https://herman.bearblog.dev/resurfacing-posts/",
      "date": "2026-05-27"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "Typecho-Riven主题正式发售啦",
      "url": "https://9sb.net/archives/typecho-riven-theme-officially-released.html",
      "date": "2026-05-27"
    },
    {
      "name": "Dayu",
      "year": "21",
      "title": "熟悉一个城市",
      "url": "https://anotherdayu.com/mycity/",
      "date": "2026-05-27"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "网站崩溃半夜起床维护",
      "url": "https://ygz.ink/archives/5047.html",
      "date": "2026-05-27"
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
