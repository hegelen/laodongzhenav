// ==================== latest-articles.js ====================
// 抓取日期: 5/16/2026, 8:33:59 AM
// 只抓取最近14天内的文章，共 10 篇
// 目标 10 篇，实际 10 篇

const latestArticlesByYear = {
  "2010": [
    {
      "name": "宇间草",
      "year": "10",
      "title": "修个设备还得“以命换命”？这锅老子不背了",
      "url": "https://2days.org/20108.html",
      "date": "2026-05-11"
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
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "《GPT 图解》笔记：N-Gram、NPLM、LSTM",
      "url": "https://izualzhy.cn/llm-diagrammatize-ngram-nplm-lstm",
      "date": "2026-05-10"
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
  "2018": [
    {
      "name": "枋柚梓的猫会发光",
      "year": "18",
      "title": "从 1Password 迁移到 Bitwarden：一次涨价引发的“搬家”",
      "url": "https://inkss.cn/post/5a013cf6/",
      "date": "2026-05-08"
    }
  ],
  "2019": [
    {
      "name": "李锋镝",
      "year": "19",
      "title": "SchedulingConfigurer详解",
      "url": "https://www.lifengdi.com/hou-duan/4701",
      "date": "2026-05-15"
    }
  ],
  "2022": [
    {
      "name": "倦意",
      "year": "22",
      "title": "当白嫖党的渠道都被封以后，天才程序员已陨落。",
      "url": "https://jyblog.cn/5552/",
      "date": "2026-05-12"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "发现宝藏！「好站网」",
      "url": "https://ygz.ink/archives/4915.html",
      "date": "2026-05-15"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "JPG图片格式是什么意思？",
      "url": "https://www.bailuze.com/24074.html",
      "date": "2026-05-16"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "通用的 AI IDE 账号管理工具 Cockpit-Tools",
      "url": "https://www.sanshu.cn/arc/262.html",
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

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇最近14天文章');
