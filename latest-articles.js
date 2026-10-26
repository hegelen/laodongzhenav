// ==================== latest-articles.js ====================
// 抓取日期:  2026-10-26 23:09:29
// 只抓取最近14天内的文章，共 20 篇
// 目标 20 篇，实际 20 篇

const latestArticlesByYear = {
  "2004": [
    {
      "name": "我的天",
      "year": "04",
      "title": "架子上路",
      "url": "https://www.xlanda.net/posts/22574",
      "date": "2026-10-26"
    },
    {
      "name": "delphij",
      "year": "04",
      "title": "整理BIND 9配置：把琐碎的子域合并为一个zone",
      "url": "https://blog.delphij.net/posts/2026/10/merge-dns-zones/",
      "date": "2026-10-26"
    }
  ],
  "2005": [
    {
      "name": "Gea-Suan Lin",
      "year": "05",
      "title": "OpenAI 放出 GPT-6.1 Terra",
      "url": "https://blog.gslin.org/archives/2026/10/27/13303/openai-%e6%94%be%e5%87%ba-gpt-6-1-terra/",
      "date": "2026-10-26"
    },
    {
      "name": "王志勇",
      "year": "05",
      "title": "数码评测(79)：最好用的平价鼠标和维修/改装",
      "url": "http://www.auiou.com/relevant/00002229.jsp",
      "date": "2026-10-26"
    }
  ],
  "2006": [
    {
      "name": "SEISAMUSE",
      "year": "06",
      "title": "一立方的下午",
      "url": "https://www.seis-jun.xyz/blog/2026-10-26-a-square-meter-of-afternoon.html",
      "date": "2026-10-26"
    }
  ],
  "2007": [
    {
      "name": "悠见",
      "year": "07",
      "title": "读帖比练字本身更重要",
      "url": "https://yufm.com/662499.html",
      "date": "2026-10-26"
    }
  ],
  "2009": [
    {
      "name": "张鑫旭",
      "year": "09",
      "title": "算了，还是讲下named-feature() @supports规则检测吧",
      "url": "https://www.zhangxinxu.com/wordpress/2026/10/css-supports-named-feature/",
      "date": "2026-10-26"
    }
  ],
  "2010": [
    {
      "name": "麦麦同学",
      "year": "10",
      "title": "少年砺剑，橙战必胜！泰山 B 队拿下胜利！青训兴，泰山兴！",
      "url": "https://www.mmtx.net/1198.html",
      "date": "2026-10-26"
    }
  ],
  "2011": [
    {
      "name": "forecho",
      "year": "11",
      "title": "17 分钟搞懂 ICT 核心概念：流动性、FVG、Power of 3 与订单块（视频笔记与中文图解）",
      "url": "https://blog.forecho.com/learn-every-ict-concept.html",
      "date": "2026-10-26"
    },
    {
      "name": "Verne",
      "year": "11",
      "title": "入手 GL.iNet Comet Pro（RM10）：支持 Wi-Fi 6 的远程 IP KVM",
      "url": "https://blog.einverne.info/post/2026/10/gl-inet-comet-pro-rm10-ip-kvm.html",
      "date": "2026-10-26"
    },
    {
      "name": "Be For Web",
      "year": "11",
      "title": "About a Designer (8) 别太艺术家了，前端工程师",
      "url": "http://beforweb.com/node/1167",
      "date": "2026-10-26"
    }
  ],
  "2012": [
    {
      "name": "水拍石",
      "year": "12",
      "title": "未来三四年内黄金价格可能平稳走高",
      "url": "https://www.leitao.cn/11529.html",
      "date": "2026-10-26"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "演讲视频：Do you want to be a SRE?",
      "url": "https://www.kawabangga.com/posts/7443",
      "date": "2026-10-26"
    }
  ],
  "2017": [
    {
      "name": "秋风于渭水",
      "year": "17",
      "title": "宝塔 Nginx 免费防火墙 8.4 赶紧卸载吧：偷偷上传文件，凭据明文裸奔",
      "url": "https://www.tjsky.net/tutorial/2167",
      "date": "2026-10-26"
    }
  ],
  "2019": [
    {
      "name": "紫塞",
      "year": "19",
      "title": "开门的一瞬间，世界完成了渲染",
      "url": "https://zisai.com/posts/the-world-rendered-when-i-opened-the-door/",
      "date": "2026-10-26"
    }
  ],
  "2020": [
    {
      "name": "初然忆",
      "year": "20",
      "title": "驾考趣事：服从安排！",
      "url": "https://www.imcry.vip/post/2026-10-26-2344/",
      "date": "2026-10-26"
    }
  ],
  "2021": [
    {
      "name": "DevNow",
      "year": "21",
      "title": "Product Hunt 热榜 2026-10-26：Moli by Lexmount、Badgey、AgentGrid.io",
      "url": "https://www.laughingzhu.cn/posts/ph-daily-2026-10-26",
      "date": "2026-10-26"
    }
  ],
  "2023": [
    {
      "name": "枫林灯语",
      "year": "23",
      "title": "漫谈心底那份夜雨与深秋",
      "url": "https://blog.mfwt.top/index.php/archives/1679/",
      "date": "2026-10-26"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "DSH EVA Theme：为 DeepSeek Harness 打造的 EVA 双角色主题插件",
      "url": "https://www.sanshu.cn/atc/6.html",
      "date": "2026-10-26"
    },
    {
      "name": "刘郎阁",
      "year": "24",
      "title": "高性价比人生指南",
      "url": "https://vjo.cc/2020",
      "date": "2026-10-26"
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
