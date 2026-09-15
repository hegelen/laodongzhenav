// ==================== latest-articles.js ====================
// 抓取日期: 9/15/2026, 10:07:38 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "日常星标链接阅读清单",
      "url": "https://wlj.me/notes/sp-note-20260915-230458/",
      "date": "2026-09-15"
    }
  ],
  "2004": [
    {
      "name": "小猪的窝",
      "year": "04",
      "title": "逛论坛",
      "url": "https://ezo.biz/Diary/1673.html",
      "date": "2026-09-15"
    },
    {
      "name": "kaix.in",
      "year": "04",
      "title": "骆驼、狮子、孩子、路飞、大笑",
      "url": "https://kaix.in/2026/0915/",
      "date": "2026-09-15"
    }
  ],
  "2005": [
    {
      "name": "王志勇",
      "year": "05",
      "title": "更新提示：《关于作者》页更新",
      "url": "http://www.auiou.com/relevant/00010006.jsp",
      "date": "2026-09-15"
    },
    {
      "name": "ACEVS",
      "year": "05",
      "title": "魔兽争霸 更新dlc 增加中立新英雄 死亡骑士他爸",
      "url": "https://acevs.com/5233/",
      "date": "2026-09-15"
    },
    {
      "name": "Lenciel",
      "year": "05",
      "title": "Fragments 0x0006",
      "url": "https://lenciel.com/2026/09/fragments-0x0006/",
      "date": "2026-09-15"
    }
  ],
  "2007": [
    {
      "name": "树下语",
      "year": "07",
      "title": "给自己留点时间",
      "url": "https://yishu-life.com/index.php/archives/556.html",
      "date": "2026-09-15"
    }
  ],
  "2009": [
    {
      "name": "老张",
      "year": "09",
      "title": "我用的Obsidian插件",
      "url": "https://laozhang.org/archives/4356.html",
      "date": "2026-09-15"
    },
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "新时代下的tooltip提示效果的最佳实现",
      "url": "https://www.zhangxinxu.com/wordpress/2026/09/best-tooltip-effect/",
      "date": "2026-09-15"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "今日减肥餐记录-2026.9.15",
      "url": "https://www.linyufan.com/post/6018",
      "date": "2026-09-15"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 GP Premium 애드센스/네이버 및 구글 사이트 소유 확인 코드 추가 방법",
      "url": "https://www.thewordcracker.com/basic/themes/gp-premium-%ec%95%a0%eb%93%9c%ec%84%bc%ec%8a%a4-%eb%84%a4%ec%9d%b4%eb%b2%84-%ea%b5%ac%ea%b8%80-%ec%bd%94%eb%93%9c-%ec%b6%94%ea%b0%80-%eb%b0%a9%eb%b2%95/",
      "date": "2026-09-15"
    }
  ],
  "2016": [
    {
      "name": "故事里",
      "year": "16",
      "title": "学会告别",
      "url": "https://www.gushi.li/learning-to-say-goodbye.html",
      "date": "2026-09-15"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "为什么 OPC 里 30 个能有 28 个都失败？",
      "url": "https://www.ccgxk.com/codeother/885.html",
      "date": "2026-09-15"
    }
  ],
  "2019": [
    {
      "name": "新世界的大门",
      "year": "19",
      "title": "2026-07-21 / 魔爪拌饭",
      "url": "https://blog.xinshijiededa.men/daily/82/",
      "date": "2026-09-15"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "工作结束，路在何方",
      "url": "https://liuqingwushui.top/archives/196/",
      "date": "2026-09-15"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "RE：部落格閱讀周薦 - JN",
      "url": "https://blog.giveanornot.com/re-immarcus-weekly/",
      "date": "2026-09-15"
    },
    {
      "name": "不凡",
      "year": "20",
      "title": "ServerMonitor插件更新：新增「水墨宣纸」样式、新增「面板默认形态」",
      "url": "https://www.bufanz.com/20260915920.html",
      "date": "2026-09-15"
    }
  ],
  "2021": [
    {
      "name": "WSH",
      "year": "21",
      "title": "软件个性化时代",
      "url": "https://www.wsh233.cn/post/软件个性化时代",
      "date": "2026-09-15"
    }
  ],
  "2025": [
    {
      "name": "Marcus",
      "year": "25",
      "title": "人生的意义（微积分版）",
      "url": "https://www.immarcus.com/blog/meaning-of-life-from-a-calculus-perspective",
      "date": "2026-09-15"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "陪娃写作业，一个小学题 脑壳疼，用AI搞了一个 正方体展开图",
      "url": "https://www.renhuali.cn/journal/cmu2sn44l01ldchnmtvbse04l",
      "date": "2026-09-15"
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
