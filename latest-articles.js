// ==================== latest-articles.js ====================
// 抓取日期: 6/12/2026, 3:35:08 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "也许是全球首个GEO鉴证skill",
      "url": "https://dongjunke.cn/posts/2026/06/11/10349.html",
      "date": "2026-06-11"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Values capture",
      "url": "https://seths.blog/2026/06/values-capture-2/",
      "date": "2026-06-11"
    }
  ],
  "2003": [
    {
      "name": "愆伏",
      "year": "03",
      "title": "专业的事，还是让专业的人做吧",
      "url": "https://www.tortorse.com/archives/leave-professional-work-to-professionals/",
      "date": "2026-06-11"
    },
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 400 期）：rsync 的争论",
      "url": "http://www.ruanyifeng.com/blog/2026/06/weekly-issue-400.html",
      "date": "2026-06-11"
    }
  ],
  "2005": [
    {
      "name": "云风",
      "year": "05",
      "title": "对基本有序的序列排序算法",
      "url": "https://blog.codingnow.com/2026/06/powersort.html",
      "date": "2026-06-11"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "老张博客更换Riven主题了！",
      "url": "https://laozhang.org/archives/4096.html",
      "date": "2026-06-11"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "我去，这些个大厂，接口还没用热乎呢，就下线接口功能了。",
      "url": "https://www.linyufan.com/post/5848",
      "date": "2026-06-11"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 UpdraftPlus 백업 복원 플러그인 보안 업데이트 - 인증 우회 취약점 해결",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-updraftplus-%ed%94%8c%eb%9f%ac%ea%b7%b8%ec%9d%b8-%eb%b3%b4%ec%95%88-%ec%97%85%eb%8d%b0%ec%9d%b4%ed%8a%b8/",
      "date": "2026-06-11"
    }
  ],
  "2016": [
    {
      "name": "太隐",
      "year": "16",
      "title": "写给斯大林的最后一封信",
      "url": "https://wangyurui.com/posts/xie-gei-si-da-lin-de-zui-hou-yi-feng-xin-a27f6e89",
      "date": "2026-06-11"
    },
    {
      "name": "故事里",
      "year": "16",
      "title": "如若一无所有，能否快乐自由",
      "url": "https://www.gushi.li/if-you-have-nothing-can-you-be-happy-and-free.html",
      "date": "2026-06-11"
    },
    {
      "name": "Keyle",
      "year": "16",
      "title": "《恶魔轮盘改》项目完整实现详解：架构、流程与双端同步",
      "url": "https://vrast.cn/posts/3735/",
      "date": "2026-06-12"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "我写了个 Chrome 扩展「Smart Tab Pinner」解决标签页总被误关的问题",
      "url": "https://www.tjsky.net/best-software/1642",
      "date": "2026-06-11"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "看电影时，我到底在期待什么",
      "url": "https://blog.solazy.me/20260611/",
      "date": "2026-06-11"
    }
  ],
  "2020": [
    {
      "name": "vinchent",
      "year": "20",
      "title": "关于死亡教育的一则通告",
      "url": "https://www.vinchent.xyz/guan-yu-si-wang-jiao-yu-de-ze-tong-gao",
      "date": "2026-06-11"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "解决阿里云邮件推送被微软屏蔽的问题",
      "url": "https://www.imcry.vip/post/2026-6-11-1133/",
      "date": "2026-06-11"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-06-11",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-06-11",
      "date": "2026-06-11"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "公众号差点被封",
      "url": "https://ygz.ink/archives/5206.html",
      "date": "2026-06-11"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "没想到我也经历了一次劳动维权",
      "url": "https://t-t.live/archives/14cF5QYJ",
      "date": "2026-06-11"
    }
  ],
  "2026": [
    {
      "name": "麦子的思绪",
      "year": "26",
      "title": "锈铁年月",
      "url": "https://mzdsx.com/2026/06/12/%e9%94%88%e9%93%81%e5%b9%b4%e6%9c%88/",
      "date": "2026-06-11"
    },
    {
      "name": "妄司逸",
      "year": "26",
      "title": "AI做了个部落冲突管理网站",
      "url": "https://blog.flechazo.icu/2026/06/12/coc-counter/",
      "date": "2026-06-12"
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
