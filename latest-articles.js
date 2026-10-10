// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-10 22:30:27
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "踩断脚踏板为何不能明说",
      "url": "https://wlj.me/notes/sp-note-20261010-210032/",
      "date": "2026-10-10"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "mise 裝 youplot...",
      "url": "https://blog.gslin.org/archives/2026/10/11/13263/mise-%e8%a3%9d-youplot/",
      "date": "2026-10-10"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "永恒之塔2再次记录",
      "url": "https://acevs.com/5284/",
      "date": "2026-10-10"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "真玄学心得(26)：最新消息",
      "url": "http://www.auiou.com/relevant/00002219.jsp",
      "date": "2026-10-10"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "似乎所有人造物都有广告属性",
      "url": "https://www.seis-jun.xyz/blog/2026-10-10-every-manmade-stuff-has-the-characteristic-of-advertisement.html",
      "date": "2026-10-10"
    }
  ],
  "2008": [
    {
      "name": "Wandai",
      "year": "08",
      "title": "准备前往北京",
      "url": "https://twd2.me/archives/21193",
      "date": "2026-10-10"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "我重构了我的烂大街网络工具箱 TCPLab，能做你的备胎吗？",
      "url": "https://blog.xiaoz.org/archives/23554",
      "date": "2026-10-10"
    },
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.10-煎了个韭菜鸡蛋包",
      "url": "https://www.linyufan.com/post/6082",
      "date": "2026-10-10"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "必应中国也学百度：搜索结果广告置顶，以假乱真",
      "url": "https://www.dujin.org/23853.html",
      "date": "2026-10-10"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "前端娱乐圈重磅新闻！Deno团队加入Cloudflare且不再维护 Deno",
      "url": "https://www.ccgxk.com/emlog_dev/913.html",
      "date": "2026-10-10"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "JN 最近在幹嘛（20261010 更新）",
      "url": "https://blog.giveanornot.com/now/20261002/",
      "date": "2026-10-10"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件WebpConverter更新：新增编辑器侧栏显示添加水印开关和水印添加位置",
      "url": "https://www.bufanz.com/202610101021.html",
      "date": "2026-10-10"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "EVE:欧贝的超旗战",
      "url": "https://www.imcry.vip/post/2026-10-10-2106/",
      "date": "2026-10-10"
    },
    {
      "name": "瓦解",
      "year": "20",
      "title": "十月近况",
      "url": "https://hin.cool/posts/busyoct.html",
      "date": "2026-10-10"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "送娃上学冻了一路，让我领教了早晚温差",
      "url": "https://9sb.net/archives/sending-my-child-to-school-was-frozen-all-the-way-which-taught-me-about-the-temperature-difference-between-morning-and-evening.html",
      "date": "2026-10-10"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-10：Busabase、Zernio、Playground by Google Labs",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-10",
      "date": "2026-10-10"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "博客留言自动填充更新了",
      "url": "https://xiangming.site/1165.html",
      "date": "2026-10-10"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "新的SEO方式：2026年现代SEO的实际运作方式",
      "url": "https://www.bailuze.com/24482.html",
      "date": "2026-10-10"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "果然不应该裸游",
      "url": "https://www.immarcus.com/blog/better-be-prepared",
      "date": "2026-10-10"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "DeepSeek Harness 会话删除插件",
      "url": "https://www.renhuali.cn/journal/cmv1rj2y803pwchnm9pfgg99d",
      "date": "2026-10-10"
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
