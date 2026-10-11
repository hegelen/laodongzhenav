// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-11 22:50:42
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "Talent becomes media",
      "url": "https://seths.blog/2026/10/talent-becomes-media/",
      "date": "2026-10-11"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "OpenAI 的 API 分級制度改版",
      "url": "https://blog.gslin.org/archives/2026/10/12/13267/openai-%e7%9a%84-api-%e5%88%86%e7%b4%9a%e5%88%b6%e5%ba%a6%e6%94%b9%e7%89%88/",
      "date": "2026-10-11"
    },
    {
      "name": "云风",
      "year": "05",
      "title": "点老救世记的深度体验",
      "url": "https://blog.codingnow.com/2026/10/dotage.html",
      "date": "2026-10-11"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "人渣scum游戏测试",
      "url": "https://acevs.com/5286/",
      "date": "2026-10-11"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0011",
      "url": "https://lenciel.com/2026/10/fragments-0x0011/",
      "date": "2026-10-11"
    },
    {
      "name": "当下",
      "year": "05",
      "title": "人一旦倒霉起来就没轻没重的",
      "url": "https://blog.fueis.com/26-1011",
      "date": "2026-10-11"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "坚持悬肘书写毛笔字，闲时多记草书写法",
      "url": "https://yufm.com/662468.html",
      "date": "2026-10-11"
    }
  ],
  "2011": [
    {
      "name": "君子不器",
      "year": "11",
      "title": "2026年9月：四年级开学、旧友重逢，与地铁开通",
      "url": "https://www.colinjiang.com/archives/2026-09-back-to-school-reunion-and-metro-opening.html",
      "date": "2026-10-11"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "wsbk这次的SSP组别比赛把我看激动了",
      "url": "https://www.linyufan.com/post/6084",
      "date": "2026-10-11"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 이메일 발송 오류 해결: Resend 무료 SMTP 설정 방법",
      "url": "https://www.thewordcracker.com/intermediate/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-resend-%eb%ac%b4%eb%a3%8c-smtp-%ec%84%a4%ec%a0%95-%eb%b0%a9%eb%b2%95/",
      "date": "2026-10-11"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "论 Web 出海抱团互助的重要性！",
      "url": "https://www.ccgxk.com/codeother/914.html",
      "date": "2026-10-11"
    }
  ],
  "2018": [
    {
      "name": "云奚小屋",
      "year": "18",
      "title": "欢迎回到云奚小屋",
      "url": "https://yxgoa.cn/index.php/archives/1/",
      "date": "2026-10-11"
    }
  ],
  "2019": [
    {
      "name": "So!azy",
      "year": "19",
      "title": "周末流水账 1011",
      "url": "https://blog.solazy.me/20261011/",
      "date": "2026-10-11"
    }
  ],
  "2020": [
    {
      "name": "不凡",
      "year": "20",
      "title": "Typecho插件Mailer更新：修复后台打开个人资料页出现server 500错误的问题",
      "url": "https://www.bufanz.com/202610111052.html",
      "date": "2026-10-11"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "虎跳峡和雨崩",
      "url": "https://www.wsh233.cn/post/虎跳峡和雨崩",
      "date": "2026-10-11"
    },
    {
      "name": "记录生活",
      "year": "21",
      "title": "临时约的一场骑行，终点是邢台本地最大的朱庄水库",
      "url": "https://9sb.net/archives/a-temporary-bike-ride-with-the-destination-being-the-largest-local-zhuzhuang-reservoir-in-xingtai.html",
      "date": "2026-10-11"
    },
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-11：ReSO AI、Onepin、Claude Dashboards & Motion",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-11",
      "date": "2026-10-11"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "和校园网斗智斗勇的日子（第十辑）",
      "url": "https://blog.mfwt.top/index.php/archives/1685/",
      "date": "2026-10-11"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "蛋白粉也涨价了",
      "url": "https://siwei.li/protein-powder-price-increase/",
      "date": "2026-10-11"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "HUAWEI MateBook D15 2022 Ubuntu 指纹识别修复：Goodix GDIX51C0 采图超时",
      "url": "https://xingwangzhe.fun/posts/matebook-d15-goodix-gdix51c0-fingerprint/",
      "date": "2026-10-11"
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
