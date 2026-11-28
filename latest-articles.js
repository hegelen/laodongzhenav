// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-28 01:55:03
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Draft your own team",
      "url": "https://seths.blog/2026/11/draft-your-own-team/",
      "date": "2026-11-27"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "开会时练字",
      "url": "https://www.xlanda.net/posts/22650",
      "date": "2026-11-28"
    },
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "又是个不眠夜",
      "url": "https://synyan.cn/t/64421",
      "date": "2026-11-27"
    }
  ],
  "2005": [
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0027",
      "url": "https://lenciel.com/2026/11/fragments-0x0027/",
      "date": "2026-11-27"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "什么样的博文URL美化是最好的？",
      "url": "https://www.auiou.com/pub/2248",
      "date": "2026-11-28"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "皇权本位下的宋江和关羽",
      "url": "https://acevs.com/5393/",
      "date": "2026-11-27"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "第一次使用AI + Figma MCP开发网页小结",
      "url": "https://www.zhangxinxu.com/wordpress/2026/11/ai-figma-mcp/",
      "date": "2026-11-27"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "用ImDisk Toolkit开启内存盘",
      "url": "https://www.leitao.cn/11646.html",
      "date": "2026-11-27"
    }
  ],
  "2013": [
    {
      "name": "蛋蛋",
      "year": "13",
      "title": "暖心日历",
      "url": "https://wuqishi.com/archives/heartwarming-calendar",
      "date": "2026-11-27"
    }
  ],
  "2018": [
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "枝叶之间听风的名字",
      "url": "https://yxgoa.cn/index.php/archives/1035/",
      "date": "2026-11-27"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "生活中那些 backup 给我的安全感",
      "url": "https://blog.solazy.me/20261127/",
      "date": "2026-11-27"
    }
  ],
  "2020": [
    {
      "name": "郝鸿涛",
      "year": "20",
      "title": "我能想到的未来",
      "url": "https://hongtaoh.com/cn/2026/11/27/future/",
      "date": "2026-11-27"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "土地与人口",
      "url": "https://www.wsh233.cn/post/土地与人口",
      "date": "2026-11-27"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-27：Hub、QA.tech MCP、ExtraOrbital",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-27",
      "date": "2026-11-27"
    }
  ],
  "2023": [
    {
      "name": "湘铭",
      "year": "23",
      "title": "本来想突破 2 公里，结果被一个包子和 AI 坑在了周末",
      "url": "https://xiangming.site/1208.html",
      "date": "2026-11-27"
    },
    {
      "name": "鹿泽",
      "year": "23",
      "title": "公司网站如何全面做SEO分析？",
      "url": "https://www.bailuze.com/24718.html",
      "date": "2026-11-27"
    },
    {
      "name": "核桃",
      "year": "23",
      "title": "2026年11月21日，顺德机车文化月",
      "url": "https://www.htaoo.com/record/945.html",
      "date": "2026-11-27"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "2026 OSGJ 日志二：把战斗调试拆成看得见的场景",
      "url": "https://xingwangzhe.fun/posts/osgj-devlog-2-debuggable-battle/",
      "date": "2026-11-27"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "成功的博客",
      "url": "https://www.immarcus.com/blog/successful-blog",
      "date": "2026-11-28"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "Altare 容器 透传 做宝塔Web服务记录",
      "url": "https://www.renhuali.cn/journal/cmwyezjpg07kqchnmama76nbw",
      "date": "2026-11-27"
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
