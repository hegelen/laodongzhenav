// ==================== latest-articles.js ====================
// 抓取日期: 6/5/2026, 8:59:09 PM
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2000": [
    {
      "name": "Luca",
      "year": "00",
      "title": "长途飞行才想起来登网",
      "url": "https://wlj.me/notes/sp-note-20260605-214143/",
      "date": "2026-06-05"
    }
  ],
  "2002": [
    {
      "name": "seth",
      "year": "02",
      "title": "How to teach marketing",
      "url": "https://seths.blog/2026/06/how-to-teach-marketing/",
      "date": "2026-06-05"
    }
  ],
  "2003": [
    {
      "name": "阮一峰",
      "year": "03",
      "title": "科技爱好者周刊（第 399 期）：中国 AI 大厂访问记",
      "url": "http://www.ruanyifeng.com/blog/2026/06/weekly-issue-399.html",
      "date": "2026-06-05"
    }
  ],
  "2004": [
    {
      "name": "竹炉山房",
      "year": "04",
      "title": "跑路+1",
      "url": "https://synyan.cn/t/62443",
      "date": "2026-06-05"
    },
    {
      "name": "我的天",
      "year": "04",
      "title": "复杂的广电",
      "url": "http://www.xlanda.net/posts/22241",
      "date": "2026-06-05"
    }
  ],
  "2006": [
    {
      "name": "joojen Zhou",
      "year": "06",
      "title": "房价又要起飞了？",
      "url": "https://joojen.com/archives/9003.html",
      "date": "2026-06-05"
    }
  ],
  "2009": [
    {
      "name": "多多",
      "year": "09",
      "title": "Git 无法连接到你本地 127.0.0.1:xxxx 这个地址处理办法",
      "url": "https://ddlog.cn/?p=536",
      "date": "2026-06-05"
    }
  ],
  "2012": [
    {
      "name": "把酒诗代码",
      "year": "12",
      "title": "干煸藕丝",
      "url": "https://102no.com/2026/06/05/gan-bian-ou-si/",
      "date": "2026-06-05"
    }
  ],
  "2013": [
    {
      "name": "林羽凡",
      "year": "13",
      "title": "简单总结：给“林羽凡笔记”Agent增加了“记账”相关功能，增加了发邮件",
      "url": "https://www.linyufan.com/post/5839",
      "date": "2026-06-05"
    }
  ],
  "2015": [
    {
      "name": "WordPress 知识宝库",
      "year": "15",
      "title": "워드프레스 Kirki 플러그인 보안 경고: 인증 없이 권한 상승 가능한 치명적 취약점 발견",
      "url": "https://www.thewordcracker.com/basic/%ec%9b%8c%eb%93%9c%ed%94%84%eb%a0%88%ec%8a%a4-kirki-%ed%94%8c%eb%9f%ac%ea%b7%b8%ec%9d%b8-%eb%b3%b4%ec%95%88-%ea%b2%bd%ea%b3%a0/",
      "date": "2026-06-05"
    }
  ],
  "2017": [
    {
      "name": "串串狗小刊",
      "year": "17",
      "title": "关键词评估和 reddit、HN、product hurt 起号运营小妙招！",
      "url": "https://www.ccgxk.com/codeother/769.html",
      "date": "2026-06-05"
    }
  ],
  "2019": [
    {
      "name": "herman",
      "year": "19",
      "title": "The Giant's Cup",
      "url": "https://herman.bearblog.dev/the-giants-cup/",
      "date": "2026-06-05"
    }
  ],
  "2020": [
    {
      "name": "資工小廢物 - JN",
      "year": "20",
      "title": "正確的廢話",
      "url": "https://blog.giveanornot.com/technically-correct-bullshit/",
      "date": "2026-06-05"
    },
    {
      "name": "优世界",
      "year": "20",
      "title": "分享一个一直自用的博客评论自动填充脚本",
      "url": "https://usj.cc/202606051411.html",
      "date": "2026-06-05"
    }
  ],
  "2023": [
    {
      "name": "鹿泽",
      "year": "23",
      "title": "为什么SaaS公司开始转向专业SEO代理机构",
      "url": "https://www.bailuze.com/24119.html",
      "date": "2026-06-05"
    },
    {
      "name": "宗宗酱",
      "year": "23",
      "title": "你的RSS订阅源有跳菠菜的风险",
      "url": "https://ygz.ink/archives/5167.html",
      "date": "2026-06-05"
    },
    {
      "name": "火米",
      "year": "23",
      "title": "面对 ai 的语音输入，不需要精确",
      "url": "https://huo.me/input/",
      "date": "2026-06-05"
    }
  ],
  "2024": [
    {
      "name": "团团生活志",
      "year": "24",
      "title": "iphone17ProMax和Macmini4初体验",
      "url": "https://t-t.live/archives/WhZQ281H",
      "date": "2026-06-05"
    }
  ],
  "2025": [
    {
      "name": "青萍",
      "year": "25",
      "title": "用 Hermes 打造 LLM Wiki 知识库：Karpathy 方法实战指南",
      "url": "https://blog.lusyoe.com/article/hermes-llm-wiki-guide",
      "date": "2026-06-05"
    }
  ],
  "2026": [
    {
      "name": "华立",
      "year": "26",
      "title": "墨迹博客(InkBlog) v1.26.6.03 to v1.26.6.05 升级指南",
      "url": "https://www.renhuali.cn/journal/cmq08m3c10001chn9yutw0lis",
      "date": "2026-06-05"
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
