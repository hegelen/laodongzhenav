// ==================== latest-articles.js ====================
// 抓取日期: 9/1/2026, 9:46:13 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Apophenia cuts both ways",
      "url": "https://seths.blog/2026/09/apophenia-cuts-both-ways/",
      "date": "2026-09-01"
    }
  ],
  "2004": [
    {
      "name": "TonyBai",
      "year": "04",
      "title": "一只机器鸭子，用 Rust 写了个“大脑”：拆解 Hugging Face 爆款机器人 Microduck",
      "url": "https://tonybai.com/2026/09/01/microduck-rust-robot-brain-deep-dive/",
      "date": "2026-08-31"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "實際跑 iOS kernel 的 vphone-cli",
      "url": "https://blog.gslin.org/archives/2026/09/01/13175/%e5%af%a6%e9%9a%9b%e8%b7%91-ios-kernel-%e7%9a%84-vphone-cli/",
      "date": "2026-09-01"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0001",
      "url": "https://lenciel.com/2026/09/fragments-0x0001/",
      "date": "2026-09-01"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "真玄学心得(25)：生存禁忌红线",
      "url": "http://www.auiou.com/relevant/00002187.jsp",
      "date": "2026-09-01"
    }
  ],
  "2006": [
    {
      "name": "随风沐虐",
      "year": "06",
      "title": "库克卸任苹果 CEO 发长文告别：我的头衔会变，但热爱永不会变",
      "url": "https://www.munue.com/814.html",
      "date": "2026-09-01"
    }
  ],
  "2008": [
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "第二次违停免罚",
      "url": "https://dujun.io/98209d6d-5c12-5f57-a080-413b9ed016d7.html",
      "date": "2026-09-01"
    }
  ],
  "2009": [
    {
      "name": "标点符",
      "year": "09",
      "title": "统一框架下的时序预测与异常检测Darts",
      "url": "https://www.biaodianfu.com/darts/",
      "date": "2026-09-01"
    },
    {
      "name": "老刘",
      "year": "09",
      "title": "腰围、膝盖和一辆自行车",
      "url": "https://www.iliu.org/posts/from-running-to-cycling/",
      "date": "2026-09-01"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "微信小程序支持个人支付开通了，工具类小程序可以开通“虚拟支付”",
      "url": "https://www.linyufan.com/post/5982",
      "date": "2026-09-01"
    },
    {
      "name": "Jonty",
      "year": "13",
      "title": "【飞牛NAS】EdgeOne+ESA智能分流访问-快-快-快！",
      "url": "https://nobb.cc/archives/3776.html",
      "date": "2026-09-01"
    }
  ],
  "2014": [
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "公共空间里的\"不自觉\"，才是最普遍的冒犯",
      "url": "https://www.dujin.org/23843.html",
      "date": "2026-09-01"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "구글 크롬 다중 계정 설정 및 프로필별 바로가기 만들기 (바탕화면/작업 표시줄)",
      "url": "https://www.thewordcracker.com/blog/%ea%b5%ac%ea%b8%80-%ed%81%ac%eb%a1%ac-%eb%8b%a4%ec%a4%91-%ea%b3%84%ec%a0%95-%ec%84%a4%ec%a0%95/",
      "date": "2026-09-01"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "不再期待下一份工作",
      "url": "https://blog.solazy.me/20260901/",
      "date": "2026-09-01"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "手机内存12+256GB采购价飙至2200元，华为小米荣耀手机涨价！",
      "url": "https://www.bufanz.com/20260901855.html",
      "date": "2026-09-01"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 每日热榜 | 2026-09-01",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-09-01",
      "date": "2026-09-01"
    }
  ],
  "2023": [
    {
      "name": "按钮与磁带",
      "year": "23",
      "title": "奥德赛",
      "url": "https://jefftay.com/movies/the-odyssey",
      "date": "2026-09-01"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "有个站升级：从聚合站到搜索站",
      "url": "https://ygz.ink/archives/5739.html",
      "date": "2026-09-01"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "星期二的下午",
      "url": "https://www.immarcus.com/blog/tuesday-afternoons",
      "date": "2026-09-01"
    }
  ],
  "2026": [
    {
      "name": "茶余饭后",
      "year": "26",
      "title": "孙宇晨怎么这么牛逼",
      "url": "https://chayufanhou.com/2026/09/01/%e5%ad%99%e5%ae%87%e6%99%a8%e6%80%8e%e4%b9%88%e8%bf%99%e4%b9%88%e7%89%9b%e9%80%bc/",
      "date": "2026-09-01"
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
