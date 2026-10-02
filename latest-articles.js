// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-02 10:01:57
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Modern vanity",
      "url": "https://seths.blog/2026/10/modern-vanity/",
      "date": "2026-10-02"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "国庆",
      "url": "https://ezo.biz/Diary/1714.html",
      "date": "2026-10-01"
    },
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI时代，如何保持住那份编写代码的乐趣",
      "url": "https://tonybai.com/2026/10/02/how-to-keep-enjoying-programming-in-the-llm-era/",
      "date": "2026-10-01"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "example.com 的改版",
      "url": "https://blog.gslin.org/archives/2026/10/02/13243/example-com-%e7%9a%84%e6%94%b9%e7%89%88/",
      "date": "2026-10-02"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x000F",
      "url": "https://lenciel.com/2026/10/fragments-0x000f/",
      "date": "2026-10-02"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "脸上的黄褐斑",
      "url": "https://acevs.com/5268/",
      "date": "2026-10-02"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "这一次的程序设计速度和防攻思路",
      "url": "http://www.auiou.com/relevant/00002210.jsp",
      "date": "2026-10-02"
    }
  ],
  "2006": [
    {
      "name": "平顶山",
      "year": "06",
      "title": "阿联酋二",
      "url": "https://pingdingshan.me/363.html",
      "date": "2026-10-01"
    },
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "黄山之行",
      "url": "https://www.seis-jun.xyz/blog/2026-10-02-yellow-mountain.html",
      "date": "2026-10-02"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "牙疼的反省",
      "url": "https://www.linyufan.com/post/6069",
      "date": "2026-10-02"
    }
  ],
  "2014": [
    {
      "name": "xulihang",
      "year": "14",
      "title": "囤积LCD手机",
      "url": {
        "$": {
          "href": "https://blog.xulihang.me/hoarding-LCD-phones/"
        }
      },
      "date": "2026-10-01"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "두 번째 크롬북... 살 만 할까?",
      "url": "https://www.thewordcracker.com/blog/%eb%91%90-%eb%b2%88%ec%a7%b8-%ed%81%ac%eb%a1%ac%eb%b6%81-%ec%82%b4-%eb%a7%8c-%ed%95%a0%ea%b9%8c/",
      "date": "2026-10-02"
    }
  ],
  "2017": [
    {
      "name": "atpx",
      "year": "17",
      "title": "西北三日游",
      "url": "https://atpx.com/blog/northwest-china-tour/",
      "date": "2026-10-02"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "扎克伯格的励志故事，把我感动哭了",
      "url": "https://www.ccgxk.com/903.html",
      "date": "2026-10-01"
    }
  ],
  "2020": [
    {
      "name": "HEMING",
      "year": "20",
      "title": "Riven Cloud Japan Tokyo Premium VPS Gen2 AMD Ryzen 9 9950X",
      "url": "https://heming.org/2864.html",
      "date": "2026-10-02"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "评论组件被人恶意sql注入，25端口被封，邮件无法发信",
      "url": "https://usj.cc/202610021614.html",
      "date": "2026-10-02"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "WordPress插件WebpConverter：上传图片转换WebP图片格式，支持等比缩放/文件大小比较/原图备份/添加文字水印图片水印",
      "url": "https://www.bufanz.com/20261001967.html",
      "date": "2026-10-01"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-10-01",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-01",
      "date": "2026-10-01"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "生活碎碎念：在夹缝里成长的人",
      "url": "https://blog.mfwt.top/index.php/archives/1518/",
      "date": "2026-10-01"
    },
    {
      "name": "无敌",
      "year": "23",
      "title": "从知识获取到能力调用：MCP 如何改变 AI 应用架构",
      "url": "https://blog.tangwudi.com/technology/homedatacenter14729/",
      "date": "2026-10-02"
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
