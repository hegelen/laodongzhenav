// ==================== latest-articles.js ====================
// 抓取日期: 6/25/2026, 2:32:48 AM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "低功耗运行换更长试错期",
      "url": "https://wlj.me/notes/sp-note-20260624-172644/",
      "date": "2026-06-24"
    }
  ],
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "垃圾轮转",
      "url": "http://www.xlanda.net/posts/22286",
      "date": "2026-06-25"
    },
    {
      "name": "扫地老僧",
      "year": "04",
      "title": "关于长城的误解",
      "url": "https://doyj.com/2026/06/24/%e5%85%b3%e4%ba%8e%e9%95%bf%e5%9f%8e%e7%9a%84%e8%af%af%e8%a7%a3/",
      "date": "2026-06-24"
    }
  ],
  "2005": [
    {
      "name": "ACEVS",
      "year": "05",
      "title": "汽车为什么是gdp利器？",
      "url": "https://acevs.com/5061/",
      "date": "2026-06-25"
    },
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "www.hinet.net 被消滅了",
      "url": "https://blog.gslin.org/archives/2026/06/24/13081/www-hinet-net-%e8%a2%ab%e6%b6%88%e6%bb%85%e4%ba%86/",
      "date": "2026-06-24"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "日更是没用的",
      "url": "https://joojen.com/archives/9040.html",
      "date": "2026-06-24"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "CSS color-scheme属性与light-dark()颜色函数",
      "url": "https://www.zhangxinxu.com/wordpress/2026/06/css-color-theme-light-dark-function/",
      "date": "2026-06-24"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "第七章 资本主义的镜子：马克思主义的洞见与歧途",
      "url": "https://www.leitao.cn/10384.html",
      "date": "2026-06-25"
    }
  ],
  "2014": [
    {
      "name": "梦幻辰风",
      "year": "14",
      "title": "狗蛋的居家生活",
      "url": "https://www.mhcf.net/post-1210.html",
      "date": "2026-06-24"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스에서 갑자기 '응답이 올바른 JSON 응답이 아닙니다' 오류가 발생하는 경우",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4%ec%97%90%ec%84%9c-%ea%b0%91%ec%9e%90%ea%b8%b0-%ec%9d%91%eb%8b%b5%ec%9d%b4-%ec%98%ac%eb%b0%94%eb%a5%b8-json-%ec%9d%91%eb%8b%b5%ec%9d%b4-%ec%95%84/",
      "date": "2026-06-24"
    }
  ],
  "2017": [
    {
      "name": "碎言",
      "year": "17",
      "title": "腻了",
      "url": "https://www.suiyan.cc/blog/20260624182301",
      "date": "2026-06-24"
    },
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "出海 Web 之  Vercel 的必踩坑和 140 分钟需求调研",
      "url": "https://www.ccgxk.com/codeother/788.html",
      "date": "2026-06-24"
    }
  ],
  "2018": [
    {
      "name": "秋葵",
      "year": "18",
      "title": "Java中Thread类join方法的原理",
      "url": "https://qiukui-note.happy365.day/20260624/introduce-thread-join-in-java/",
      "date": "2026-06-24"
    }
  ],
  "2020": [
    {
      "name": "Battle Le",
      "year": "20",
      "title": "天台（tāi）游记",
      "url": "https://battlele.com/tiantai-trip/",
      "date": "2026-06-24"
    }
  ],
  "2021": [
    {
      "name": "记录生活",
      "year": "21",
      "title": "我又没忍住，又去找AI帮忙了，这次还好没翻车",
      "url": "https://9sb.net/archives/i-couldnt-hold-back-and-went-to-ai-for-help-again-fortunately-i-didnt-overturn-this-time.html",
      "date": "2026-06-24"
    },
    {
      "name": "WSH",
      "year": "21",
      "title": "观天龙八部2-王语嫣与AI",
      "url": "https://www.wsh233.cn/post/观天龙八部2-王语嫣与大模型",
      "date": "2026-06-24"
    },
    {
      "name": "Dayu",
      "year": "21",
      "title": "我的背包",
      "url": "https://anotherdayu.com/my-backpack/",
      "date": "2026-06-24"
    }
  ],
  "2023": [
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "人生的第一台单反：尼康D3200",
      "url": "https://ygz.ink/archives/5347.html",
      "date": "2026-06-24"
    }
  ],
  "2024": [
    {
      "name": "姓王者",
      "year": "24",
      "title": "人工智能实训Day3：Agent智能体实践——工具调用与多技能协作",
      "url": "https://xingwangzhe.fun/posts/ai-training-agent-day3/",
      "date": "2026-06-24"
    }
  ],
  "2025": [
    {
      "name": "桃子味",
      "year": "25",
      "title": "经验福利—异次元发卡配置支付宝当面付教程",
      "url": "https://www.taoziwei.com/339/",
      "date": "2026-06-24"
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
