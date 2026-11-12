// ==================== latest-articles.js ====================
// 抓取日期:  2026-11-12 01:28:39
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "GitHub Actions 的 workflow lockfiles",
      "url": "https://blog.gslin.org/archives/2026/11/12/13353/github-actions-%e7%9a%84-workflow-lockfiles/",
      "date": "2026-11-12"
    }
  ],
  "2007": [
    {
      "name": "朱小呆",
      "year": "07",
      "title": "羊年明信片上线预告",
      "url": "https://zhujay.com/talk/talk_detail.html?id=1292",
      "date": "2026-11-11"
    },
    {
      "name": "悠见",
      "year": "07",
      "title": "站着写字还是容易紧张手抖",
      "url": "https://yufm.com/662541.html",
      "date": "2026-11-11"
    },
    {
      "name": "树下语",
      "year": "07",
      "title": "冷冷清清的双十一",
      "url": "https://yishu-life.com/index.php/archives/563.html",
      "date": "2026-11-11"
    }
  ],
  "2012": [
    {
      "name": "郭晓力",
      "year": "12",
      "title": "这几天见了一些朋友-20261111",
      "url": "https://guoxiaoli.com/post/681.html",
      "date": "2026-11-11"
    }
  ],
  "2013": [
    {
      "name": "小z",
      "year": "13",
      "title": "2026 年 ChatGPT 会员充值指南：支付宝/微信就能搞定 GPT 代充",
      "url": "https://blog.xiaoz.org/archives/23721",
      "date": "2026-11-11"
    },
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "消费理念",
      "url": "https://www.kawabangga.com/posts/7449",
      "date": "2026-11-11"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 7.1.4 긴급 업데이트, 원격 코드 실행 취약점 공격 확산 (PHP 패치도 필수)",
      "url": "https://www.thewordcracker.com/basic/wordpress-7-1-4-rce-security-update/",
      "date": "2026-11-11"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "博客阅读随感与推荐 20261111",
      "url": "https://www.suiyan.cc/blog/20261111165725",
      "date": "2026-11-11"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "Web 出海之只有弱者才会坐等分配！",
      "url": "https://www.ccgxk.com/codeother/936.html",
      "date": "2026-11-11"
    }
  ],
  "2019": [
    {
      "name": "Zeruns",
      "year": "19",
      "title": "【开源】XT60功率计：90V/75A，24bit，触控彩屏，WiFi",
      "url": "https://blog.zeruns.com/archives/967.html",
      "date": "2026-11-11"
    },
    {
      "name": "So!azy",
      "year": "19",
      "title": "并不好笑的玩笑",
      "url": "https://blog.solazy.me/20261111/",
      "date": "2026-11-11"
    },
    {
      "name": "奶爸建站笔记",
      "year": "19",
      "title": "WP Panel助手发布：让VPS建站更简单",
      "url": "https://blog.naibabiji.com/vps-server/wp-panel-assistant.html",
      "date": "2026-11-11"
    }
  ],
  "2020": [
    {
      "name": "yihong0618",
      "year": "20",
      "title": "AI 时代我的生产力下降了 500%",
      "url": "https://blog.yihong0618.me/posts/issue-351/",
      "date": "2026-11-11"
    },
    {
      "name": "初然忆",
      "year": "20",
      "title": "加速通过科一和科四，成功预约科二和科三",
      "url": "https://www.imcry.vip/post/2026-11-12-639/",
      "date": "2026-11-11"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-11-11：Alsona、Maxma、TK by Medium",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-11-11",
      "date": "2026-11-11"
    },
    {
      "name": "Dayu",
      "year": "21",
      "title": "空白处有我",
      "url": "https://anotherdayu.com/1384/",
      "date": "2026-11-11"
    }
  ],
  "2023": [
    {
      "name": "小野",
      "year": "23",
      "title": "跑跑卡丁车 / 国服 - 无缝放油加速器 v2.0",
      "url": "https://lb5.net/283.html",
      "date": "2026-11-11"
    },
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "406MHz 车载电台在何方：共用对讲机现状与选购建议",
      "url": "https://blog.mfwt.top/index.php/archives/1732/",
      "date": "2026-11-11"
    }
  ],
  "2026": [
    {
      "name": "Sheep5",
      "year": "26",
      "title": "胶州新城区｜香港路",
      "url": "https://sheep5.net/archives/26111112.html",
      "date": "2026-11-11"
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
