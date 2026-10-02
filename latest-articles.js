// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-02 01:34:39
// 只抓取最近14天内的文章，共 20 篇 
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Media and messages",
      "url": "https://seths.blog/2026/10/media-and-messages/",
      "date": "2026-10-01"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "2005，网页那一头",
      "url": "https://www.tortorse.com/archives/2005-the-other-end-of-the-web/",
      "date": "2026-10-01"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "AI时代，如何保持住那份编写代码的乐趣",
      "url": "https://tonybai.com/2026/10/02/how-to-keep-enjoying-programming-in-the-llm-era/",
      "date": "2026-10-01"
    },
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "国庆",
      "url": "https://ezo.biz/Diary/1714.html",
      "date": "2026-10-01"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "刷视频",
      "url": "https://acevs.com/5266/",
      "date": "2026-10-01"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "这一次的程序设计速度和防攻思路",
      "url": "http://www.auiou.com/relevant/00002210.jsp",
      "date": "2026-10-02"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "玩一下 Firecracker",
      "url": "https://blog.gslin.org/archives/2026/10/01/13239/%e7%8e%a9%e4%b8%80%e4%b8%8b-firecracker/",
      "date": "2026-10-01"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "国庆节旅行第一天",
      "url": "https://www.seis-jun.xyz/blog/2026-10-01-first-day-of-national-day-holiday.html",
      "date": "2026-10-01"
    },
    {
      "name": "平顶山",
      "year": "06",
      "title": "阿联酋二",
      "url": "https://pingdingshan.me/363.html",
      "date": "2026-10-01"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "国庆快乐加倍，烦恼统统清零！",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1281",
      "date": "2026-10-01"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "2026 国庆快乐",
      "url": "https://dujun.io/happy-national-day-2026.html",
      "date": "2026-10-01"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "凌晨一点了，牙疼得睡不着了",
      "url": "https://www.linyufan.com/post/6068",
      "date": "2026-10-01"
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
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "扎克伯格的励志故事，把我感动哭了",
      "url": "https://www.ccgxk.com/903.html",
      "date": "2026-10-01"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-07-26 / 配钥匙",
      "url": "https://blog.xinshijiededa.men/daily/85/",
      "date": "2026-10-01"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "WordPress插件WebpConverter：上传图片转换WebP图片格式，支持等比缩放/文件大小比较/原图备份/添加文字水印图片水印",
      "url": "https://www.bufanz.com/20261001967.html",
      "date": "2026-10-01"
    },
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "過程",
      "url": "https://blog.giveanornot.com/%E9%81%8E%E7%A8%8B/",
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
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "不放辣椒酱",
      "url": "https://www.immarcus.com/blog/without-chili-sauce",
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
