// ==================== latest-articles.js ====================
// 抓取日期: 9/27/2026, 10:03:34 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "挑情",
      "url": "https://ezo.biz/movies/1705.html",
      "date": "2026-09-27"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "月饼还没开动",
      "url": "http://www.xlanda.net/posts/22498",
      "date": "2026-09-27"
    }
  ],
  "2005": [
    {
      "name": "当下",
      "year": "05",
      "title": "1-9月空瓶",
      "url": "https://blog.fueis.com/26-empty",
      "date": "2026-09-27"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "中秋节琐碎",
      "url": "https://acevs.com/5258/",
      "date": "2026-09-27"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "本机安装PHP 8",
      "url": "http://www.auiou.com/relevant/00002203.jsp",
      "date": "2026-09-27"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "九月小记：在嘈杂与如常之间",
      "url": "https://zhujay.com/blog/blog_detail.html?id=1280",
      "date": "2026-09-27"
    },
    {
      "name": "无标题文档",
      "year": "07",
      "title": "Wayland 在 4K 显示器下 鼠标卡顿的问题",
      "url": "https://www.gracecode.com/posts/3210.html",
      "date": "2026-09-27"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "EdgeOne Pages 改名 EdgeOne Makers",
      "url": "https://ddlog.cn/?p=568",
      "date": "2026-09-27"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.9.27",
      "url": "https://www.linyufan.com/post/6054",
      "date": "2026-09-27"
    }
  ],
  "2014": [
    {
      "name": "ying",
      "year": "14",
      "title": "Fast &amp; Efficient LLM Inference with vLLM-II",
      "url": "https://izualzhy.cn/fast-and-efficient-llm-inference-with-vllm-part-II",
      "date": "2026-09-27"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "律师为什么替坏人说话",
      "url": "https://wangyurui.com/posts/lu-shi-wei-shi-yao-ti-pi-ren-shuo-hua-f80c7126",
      "date": "2026-09-27"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "碎碎谈 · 9月27日 17:55",
      "url": "https://www.tjsky.net/shuoshuo/j9jldpwbbdrhgqvhsb3yv5",
      "date": "2026-09-27"
    }
  ],
  "2019": [
    {
      "name": "飞蚊话",
      "year": "19",
      "title": "该说不说，AI确实好用",
      "url": "https://www.bwsl.wang/talk/184.html",
      "date": "2026-09-27"
    },
    {
      "name": "浪浪山下那个村",
      "year": "19",
      "title": "OmniRoute 本地模型代理快速入门指南",
      "url": "https://www.zeekling.cn/articles/2026/09/27/1790495011424.html",
      "date": "2026-09-27"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "前挡玻璃上的划痕",
      "url": "https://blog.solazy.me/20260927/",
      "date": "2026-09-27"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "自私",
      "url": "https://www.wsh233.cn/post/自私",
      "date": "2026-09-27"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-27",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-27",
      "date": "2026-09-27"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "如何寻找与选购免执照的 409MHz 公众对讲机",
      "url": "https://blog.mfwt.top/index.php/archives/1640/",
      "date": "2026-09-27"
    }
  ],
  "2024": [
    {
      "name": "Chongxi",
      "year": "24",
      "title": "华为小米粉丝互联网骂架的深入分析",
      "url": "https://xice.cx/posts/huaweiVsXiaomi/",
      "date": "2026-09-27"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "2026.09.27 博客阅读周荐 - Jaron Writes",
      "url": "https://www.immarcus.com/blog/weekly-20260927",
      "date": "2026-09-27"
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
