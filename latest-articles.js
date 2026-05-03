// ==================== latest-articles.js ====================
// 抓取日期: 2026/5/3 14:28:28
// 共 48 篇文章

const latestArticlesByYear = {
  "2001": [
    {
      "name": "东评衿就",
      "year": "01",
      "title": "食草堂",
      "url": "https://dongjunke.cn/posts/2025/10/11/33842.html",
      "date": "2025-10-11"
    }
  ],
  "2002": [
    {
      "name": "Wangjianshuo",
      "year": "02",
      "title": "DuduCam: Multi-Angle Magic Made Simple",
      "url": "https://home.wangjianshuo.com/20250126_duducam-multi-angle-magic-made-simple.htm",
      "date": "2025-01-26"
    }
  ],
  "2003": [
    {
      "name": "张智勇",
      "year": "03",
      "title": "炒作口诀",
      "url": "https://zyzhang.com/%E7%82%92%E4%BD%9C%E5%8F%A3%E8%AF%80/",
      "date": "2026-01-12"
    },
    {
      "name": "王建硕",
      "year": "03",
      "title": "DuduCam: Multi-Angle Magic Made Simple",
      "url": "https://home.wangjianshuo.com/20250126_duducam-multi-angle-magic-made-simple.htm",
      "date": "2025-01-26"
    }
  ],
  "2004": [
    {
      "name": "酷壳",
      "year": "04",
      "title": "是微服务架构不香还是云不香？",
      "url": "https://coolshell.cn/articles/22422.html",
      "date": "2023-05-08"
    },
    {
      "name": "龙哥",
      "year": "04",
      "title": "用ipabc.de做了一个ip查询网站",
      "url": "https://long.ge/18063.html",
      "date": "2026-04-28"
    }
  ],
  "2005": [
    {
      "name": "大嘴狗狗",
      "year": "05",
      "title": "如何错峰使用 Google 的 Antigravity",
      "url": "https://www.sirit.com.cn/archives/727/",
      "date": "2026-03-17"
    },
    {
      "name": "佐仔志",
      "year": "05",
      "title": "2025年我都买了什么–购物清单分享",
      "url": "https://www.jinbo123.com/8286.html",
      "date": "2026-01-19"
    }
  ],
  "2006": [
    {
      "name": "bang",
      "year": "06",
      "title": "Agent 模型的思维链是什么",
      "url": "https://blog.cnbang.net/uncategorized/4279/",
      "date": "2026-01-12"
    },
    {
      "name": "平顶山",
      "year": "06",
      "title": "俄罗斯四-再次体验2G网络",
      "url": "https://pingdingshan.me/348.html",
      "date": "2025-08-01"
    }
  ],
  "2007": [
    {
      "name": "FROYO",
      "year": "07",
      "title": "我们可能是最惨的一代人",
      "url": "https://www.izhuyue.com/5820.html",
      "date": "2026-01-14"
    },
    {
      "name": "似水流年",
      "year": "07",
      "title": "★搬瓦工特价套餐★ 搬瓦工站起来了 年付$36.36 AMD 1T CN2GIA",
      "url": "https://www.longlan.net/2025/03/07/10628/",
      "date": "2025-03-07"
    }
  ],
  "2008": [
    {
      "name": "军",
      "year": "08",
      "title": "难得正版Windows又打骨折！白菜价",
      "url": "https://me.xu19.com/windows11-big-discount/",
      "date": "2026-05-01"
    },
    {
      "name": "杜郎俊赏",
      "year": "08",
      "title": "虚惊一场",
      "url": "https://dujun.io/4a67621e-989a-5db6-a33b-a340ffe2a85b.html",
      "date": "2026-04-22"
    }
  ],
  "2009": [
    {
      "name": "谁见到过风？",
      "year": "09",
      "title": "2025年12月5日 《毛泽东传》  二、师范生（上）",
      "url": "https://www.seenthewind.com/blog/2026/03/27/2025%e5%b9%b412%e6%9c%885%e6%97%a5-%e3%80%8a%e6%af%9b%e6%b3%bd%e4%b8%9c%e4%bc%a0%e3%80%8b-%e4%ba%8c%e3%80%81%e5%b8%88%e8%8c%83%e7%94%9f%ef%bc%88%e4%b8%8a%ef%bc%89/",
      "date": "2026-03-27"
    },
    {
      "name": "老张",
      "year": "09",
      "title": "我只会瞎折腾！暨兰空图床上传图片失败解决方法！",
      "url": "https://laozhang.org/archives/4056.html",
      "date": "2026-04-28"
    }
  ],
  "2010": [
    {
      "name": "lilydjwg",
      "year": "10",
      "title": "\n        Wayfire支持不缩放Xwayland啦\n      ",
      "url": "https://blog.lilydjwg.me/posts/217024.html",
      "date": "2026-04-18"
    },
    {
      "name": "the5fire",
      "year": "10",
      "title": "通过github actions部署aws lambda记录 - s3部署、ECR部署 以及固定出口IP",
      "url": "https://www.the5fire.com/aws_lambda_s3_ecr_github_actions.html",
      "date": "2024-06-26"
    }
  ],
  "2011": [
    {
      "name": "罗磊",
      "year": "11",
      "title": "开启我的「人生 AI」计划",
      "url": "https://luolei.org/life-ai",
      "date": "2026-03-10"
    },
    {
      "name": "老孙",
      "year": "11",
      "title": "又一款Typecho单栏主题Timellow",
      "url": "https://www.imsun.org/archives/1783.html",
      "date": "2026-04-27"
    }
  ],
  "2012": [
    {
      "name": "半日闲",
      "year": "12",
      "title": "Typecho仿百度响应式主题Xaink",
      "url": "https://www.xiaoa.me/archives/theme_xaink.html",
      "date": "2026-02-06"
    },
    {
      "name": "Tokin",
      "year": "12",
      "title": "1Panel V1 升级 V2，以及命令注入漏洞 CVE-2025-54424 相关问题",
      "url": "https://biji.io/2025/6053.html",
      "date": "2025-08-07"
    }
  ],
  "2013": [
    {
      "name": "卡瓦邦噶",
      "year": "13",
      "title": "雨季又来",
      "url": "https://www.kawabangga.com/posts/7243",
      "date": "2026-04-21"
    },
    {
      "name": "小z",
      "year": "13",
      "title": "5分钟拥有自己的“小龙虾”：PicoClaw Docker 部署教程",
      "url": "https://blog.xiaoz.org/archives/22928",
      "date": "2026-04-07"
    }
  ],
  "2014": [
    {
      "name": "松茸",
      "year": "14",
      "title": "猫咪QQ卸载记",
      "url": "https://zrs.xyz/2128.html",
      "date": "2026-04-03"
    },
    {
      "name": "缙哥哥",
      "year": "14",
      "title": "京东健康邀请3个新用户，轻松1分钱领取天晟体脂称",
      "url": "https://www.dujin.org/23698.html",
      "date": "2026-04-26"
    }
  ],
  "2015": [
    {
      "name": "泽泽社长",
      "year": "15",
      "title": "从MacbookAir换到MacbookPro",
      "url": "https://blog.aihaonv.com/macbookair-to-macbookpro.html",
      "date": "2026-04-28"
    },
    {
      "name": "牧人池塘",
      "year": "15",
      "title": "MySQL5.7/8.0/8.4/9.6配置文件生成器v1.0",
      "url": "https://dbanote.com/MySQL/mysql_make_cnf.html",
      "date": "2026-03-16"
    }
  ],
  "2016": [
    {
      "name": "幻影",
      "year": "16",
      "title": "OneBlog主题增加多表情包教程",
      "url": "https://blog.52hyjs.com/post-1266.html",
      "date": "2026-04-05"
    },
    {
      "name": "太隐",
      "year": "16",
      "title": "歧视不需要恶意",
      "url": "https://wangyurui.com/posts/qi-shi-bu-xu-yao-e-yi-fc2cb16c",
      "date": "2026-05-01"
    }
  ],
  "2017": [
    {
      "name": "科学空间",
      "year": "17",
      "title": "MuP之上：4. 坚守参数的稳定性",
      "url": "https://kexue.fm/archives/11729",
      "date": "2026-04-24"
    },
    {
      "name": "王叨叨",
      "year": "17",
      "title": "无题",
      "url": "https://wangdaodao.com/20260228/my-younger-brother.html",
      "date": "2026-02-28"
    }
  ],
  "2018": [
    {
      "name": "枋柚梓的猫会发光",
      "year": "18",
      "title": "极空间 NAS：SSH 高阶玩法实践",
      "url": "https://inkss.cn/post/3af25609/",
      "date": "2025-09-11"
    },
    {
      "name": "希仁之拥",
      "year": "18",
      "title": "【转载】谈谈不受欢迎的博客技术特征",
      "url": "https://blog.keepchen.com/a/Talk-about-the-technical-features-of-unpopular-blogs.html",
      "date": "2026-04-13"
    }
  ],
  "2019": [
    {
      "name": "启尚",
      "year": "19",
      "title": "Python 中的单元素解包语法：[b] = a 原理与最佳实践",
      "url": "https://blog.wuxhqi.com/python-%e4%b8%ad%e7%9a%84%e5%8d%95%e5%85%83%e7%b4%a0%e8%a7%a3%e5%8c%85%e8%af%ad%e6%b3%95%ef%bc%9ab-a-%e5%8e%9f%e7%90%86%e4%b8%8e%e6%9c%80%e4%bd%b3%e5%ae%9e%e8%b7%b5/",
      "date": "2026-01-27"
    },
    {
      "name": "流情",
      "year": "19",
      "title": "欢迎来到流情的博客<span style='color:#007AFF'>[置顶]</span>",
      "url": "https://liuqingwushui.top/archives/16/",
      "date": "2024-09-30"
    }
  ],
  "2020": [
    {
      "name": "天书vip",
      "year": "20",
      "title": "真正高效的收割机制，从不以恶的面目出现",
      "url": "https://www.skybook.vip/inn/142",
      "date": "2025-12-25"
    },
    {
      "name": "happyxiao",
      "year": "20",
      "title": "反向配重",
      "url": "https://happyxiao.com/counter/",
      "date": "2026-04-25"
    }
  ],
  "2021": [
    {
      "name": "毒蛊",
      "year": "21",
      "title": "音乐搜索器-多站合一音乐源码改造记录",
      "url": "https://blog.idg8.cn/915",
      "date": "2026-03-18"
    },
    {
      "name": "yveji",
      "year": "21",
      "title": "龙城的月光",
      "url": "https://www.yveji.com/Prose/the-moonlight-of-taiyuan.html",
      "date": "2026-03-31"
    }
  ],
  "2022": [
    {
      "name": "吃猫的鱼",
      "year": "22",
      "title": "OpenClaw 不是更聪明的 AI，而是能长期跑起来的 AI",
      "url": "https://www.fish9.cn/archives/476/",
      "date": "2026-02-06"
    },
    {
      "name": "栋dong",
      "year": "22",
      "title": "校园大内网远程桌面连接方案",
      "url": "https://itdong.me/school-network-rdp/",
      "date": "2025-04-16"
    }
  ],
  "2023": [
    {
      "name": "蘑菇",
      "year": "23",
      "title": "简易VPS服务器修改为密钥登录",
      "url": "https://home.ad/vps-server-changed-to-ssh-auth-key-login.html",
      "date": "2025-01-24"
    },
    {
      "name": "Siwei Li",
      "year": "23",
      "title": "长岭湖五一随拍",
      "url": "https://siwei.li/chang-ling-hu-wu-yi-sui-pai/",
      "date": "2026-05-01"
    }
  ],
  "2024": [
    {
      "name": "三叔",
      "year": "24",
      "title": "三叔工具箱",
      "url": "https://www.sanshu.cn/arc/126.html",
      "date": "2025-04-06"
    },
    {
      "name": "程序猿",
      "year": "24",
      "title": "如何在Ubuntu 24.04上安装 Google Chrome 浏览器 ?",
      "url": "https://hskun.com/jiaocheng/%e5%a6%82%e4%bd%95%e5%9c%a8ubuntu-24-04%e4%b8%8a%e5%ae%89%e8%a3%85-google-chrome-%e6%b5%8f%e8%a7%88%e5%99%a8/",
      "date": "2025-11-13"
    }
  ],
  "2025": [
    {
      "name": "心记",
      "year": "25",
      "title": "自运营的博客之家论坛已上线",
      "url": "https://blog.moodlog.cn/archives/16/",
      "date": "2026-04-29"
    },
    {
      "name": "礼印外盒",
      "year": "25",
      "title": "出现又离开",
      "url": "https://liyinwaihe.com/341.html",
      "date": "2025-12-08"
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

console.log('✅ 加载完成，共 ' + Object.keys(latestArticlesByYear).reduce((sum, y) => sum + latestArticlesByYear[y].length, 0) + ' 篇文章');
