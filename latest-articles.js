// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-16 22:04:33
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "博客新调整计划",
      "url": "http://www.auiou.com/relevant/00002221.jsp",
      "date": "2026-10-16"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "别人的东西就是香吗？",
      "url": "https://www.seis-jun.xyz/blog/2026-10-16-is-other-persions-stuff-better.html",
      "date": "2026-10-16"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "降低期望，写字只为静心，不要期望达到很高的水平",
      "url": "https://yufm.com/662479.html",
      "date": "2026-10-16"
    }
  ],
  "2009": [
    {
      "name": "孙琪峥",
      "year": "09",
      "title": "geh72wnk516acz",
      "url": "https://www.sunqizheng.com/blog/2693.html",
      "date": "2026-10-16"
    },
    {
      "name": "异数",
      "year": "09",
      "title": "随笔 || 第一款博客插件",
      "url": "https://www.yishu.pro/252.html",
      "date": "2026-10-16"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "一罐 1.9 元的汽水，和一通举报电话",
      "url": "https://www.mmtx.net/1193.html",
      "date": "2026-10-16"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.10.16 - 自制煎饼",
      "url": "https://www.linyufan.com/post/6091",
      "date": "2026-10-16"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "孤岛上的现代人",
      "url": "https://wangyurui.com/posts/gu-dao-shang-de-xian-dai-ren-91d2389f",
      "date": "2026-10-16"
    }
  ],
  "2017": [
    {
      "name": "2broear",
      "year": "17",
      "title": "新增站点外链访问确认 – 博客更新（一百二十六）",
      "url": "https://blog.2broear.com/weblog/16-10-2026_%e6%96%b0%e5%a2%9e%e7%ab%99%e7%82%b9%e5%a4%96%e9%93%be%e8%ae%bf%e9%97%ae%e7%a1%ae%e8%ae%a4-%e5%8d%9a%e5%ae%a2%e6%9b%b4%e6%96%b0%ef%bc%88%e4%b8%80%e7%99%be%e4%ba%8c%e5%8d%81%e5%85%ad%ef%bc%89",
      "date": "2026-10-16"
    }
  ],
  "2019": [
    {
      "name": "瓜老汉",
      "year": "19",
      "title": "linuxmint安装kicad最新10版本",
      "url": "http://www.gualaohan.com/post/826",
      "date": "2026-10-15"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "装了一路的那本书",
      "url": "https://blog.solazy.me/20261016/",
      "date": "2026-10-16"
    },
    {
      "name": "Zeruns",
      "year": "19",
      "title": "Lightlayer 台湾VPS 测评，1核1G 10兆 仅需13.9元/月，三网直连",
      "url": "https://blog.zeruns.com/archives/966.html",
      "date": "2026-10-16"
    },
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "將無所用歟？",
      "url": "https://blog.xinshijiededa.men/sometimes-i-do-not-think-it-is-a-curse-to-be-able-to-write-frontend/",
      "date": "2026-10-16"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "装死的蟑螂",
      "url": "https://www.imcry.vip/post/2026-10-17-306/",
      "date": "2026-10-16"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-16：Talanoa、Navige、Apple HomeView",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-16",
      "date": "2026-10-16"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "人生片段",
      "url": "https://www.wsh233.cn/post/人生片段",
      "date": "2026-10-16"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "Typecho 曝出 SSRF 漏洞，我自己的博客也中了，顺手把补丁打上",
      "url": "https://9sb.net/archives/typecho-exposed-ssrf-vulnerability-and-my-own-blog-was-also-hit-i-casually-applied-the-patch.html",
      "date": "2026-10-16"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "无用命途：食堂自选窗口，DVD倒带机",
      "url": "https://blog.mfwt.top/index.php/archives/1634/",
      "date": "2026-10-16"
    }
  ],
  "2024": [
    {
      "name": "无名",
      "year": "24",
      "title": "如何为 Lightroom 自制镜头矫正文件",
      "url": "https://wuminboke.site/uncategorized/lightroom-custom-lens-correction-profile/",
      "date": "2026-10-16"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "喜欢音乐，就不要去学音乐？",
      "url": "https://www.immarcus.com/blog/love-music-avoid-studying-music",
      "date": "2026-10-16"
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
