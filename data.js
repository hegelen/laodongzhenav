// ==================== data.js - 劳动者独立网站大全共享数据 ====================

// 年份转换函数（供其他页面使用）
function convertToFullYear(yearStr) {
    const year = parseInt(yearStr);
    if (year >= 90 && year <= 99) {
        return 1900 + year;
    } else if (year >= 0 && year <= 26) {
        return 2000 + year;
    }
    return year;
} 

function getYearValue(yearStr) {
    return convertToFullYear(yearStr);
}

// ==================== 博客年份导航数据    , {name:'', url:'', rss:''}     ====================
const blogYearsData = {  
    '94': [{name:'贾斯汀', url:'https://links.net/', rss:'https://links.net/feed'}],
					// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================
					'98': [{name:'peterme', url:'http://www.peterme.com/', rss:'http://feeds.feedburner.com/Peterme'}],
					// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

	'99': [{name:'秘密花园', url:'http://www.yini.org/', rss:'http://www.yini.org/feed'}],
   				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

   '00': [{name:'Luca', url:'https://wlj.me/', rss:'https://wlj.me/index.xml'}, {name:'卢昌海 ', url:'https://www.changhai.org/', rss:'https://www.changhai.org/feed'},  {name:'阳志平', url:'https://yangzhiping.com/', rss:'https://yangzhiping.com/feed/'}  ],
   				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

   '01': [{name:'nc-show', url:'https://nicrosoft.net/blog/', rss:'https://nicrosoft.net/blog/feed/'}, {name:'阿江守候', url:'http://www.ajiang.net/', rss:'http://www.ajiang.net/feed'}, {name:'东评衿就', url:'https://dongjunke.cn/', rss:'https://dongjunke.cn/atom.xml'}, {name:'老痛', url:'https://toonkam.com' , rss:'https://toonkam.com/feed'}, {name:' ', url:''}],
   				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

   '02': [{name:'Paul Graham', url:'https://paulgraham.com/', rss:'https://paulgraham.com/feed'}, {name:'守望轩', url:'https://www.watch-life.net/', rss:'https://www.watch-life.net/feed'}, {name:' Wangjianshuo', url:'https://home.wangjianshuo.com/', rss:'https://home.wangjianshuo.com/feed'},  {name:'seth', url:'https://seths.blog/', rss:'https://seths.blog/feed/'}  , {name:'不吐不快', url:'https://mianao.info/', rss:'https://mianao.info/atom.xml'} , {name:'车东', url:'https://www.chedong.com/', rss:'https://www.chedong.com/blog/index.xml'}   ],
    				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

	'03': [{name:'张智勇', url:'https://www.zyzhang.com/', rss:'https://www.zyzhang.com/feed'},{name:'王建硕', url:'https://home.wangjianshuo.com/cn', rss:'https://home.wangjianshuo.com/cn/index.xml'}, {name:'阮一峰', url:'https://www.ruanyifeng.com/', rss:'http://www.ruanyifeng.com/blog/atom.xml'}, {name:'愆伏', url:'https://www.tortorse.com/', rss:'https://www.tortorse.com/atom.xml'}  , {name:'zonble', url:'https://zonble.net/', rss:'https://zonble.net/feed'}  , {name:'王通', url:'https://www.ufoer.com/', rss:'https://www.ufoer.com/feed'}   , {name:'爱情在线', url:'https://aqzx.com/blog.asp', rss:'https://aqzx.com/rss.asp'}   ],
				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

	'04': [{name:'kaix.in', url:'https://kaix.in/', rss:'https://kaix.in/feed'}, {name:'龙哥', url:'https://long.ge/', rss:'https://long.ge/feed'}, {name:'一片瓦', url:'https://www.ixsz.com/', rss:'https://www.ixsz.com/feed'}, {name:'Architecting', url:'https://xujiwei.com/blog/', rss:'https://xujiwei.com/feed'}, {name:'猫大叔', url:'https://21ido.com/', rss:'https://21ido.com/feed'}, {name:'chen', url:'https://chen.info/', rss:'https://chen.info/feed'}, {name:'孙老四', url:'https://lao.si/', rss:'https://lao.si/feed'}, {name:' 小陈故事', url:'https://www.chener.net/', rss:'https://www.chener.net/feed'}, {name:'酷壳', url:'https://coolshell.cn/', rss:'https://coolshell.cn/feed'}, {name:'笨狗又一窝', url:'https://www.yewen.us/', rss:'https://www.yewen.us/feed'}, {name:'廖雪峰', url:'https://liaoxuefeng.com/', rss:'https://rss.app/feeds/nTHThMu9s8ymyaxa.xml'} , {name:'我的天', url:'http://www.xlanda.net/', rss:'http://www.xlanda.net/feed/atom'}    , {name:'iTimothy', url:'https://xiaozhou.net/', rss:'https://xiaozhou.net/atom.xml'}    , {name:'扫地老僧', url:'https://doyj.com/', rss:'https://doyj.com/feed/'}   , {name:'小猪的窝', url:'https://ezo.biz/', rss:'https://ezo.biz/feed/'}    , {name:'竹炉山房', url:'https://synyan.cn/t/', rss:'https://synyan.cn/t/feed/'}  , {name:'delphij', url:'https://blog.delphij.net/', rss:'https://blog.delphij.net/index.xml'}   , {name:'chengbo', url:'https://blog.chengbo.net/', rss:'https://blog.chengbo.net/feed'}   , {name:'鬼脚七', url:'https://blog.sina.com.cn/guijiaoqi7', rss:'https://blog.sina.com.cn/guijiaoqi7/feed'}  , {name:'TonyBai', url:'https://tonybai.com/', rss:'https://tonybai.com/feed/'}   , {name:'Jake', url:'https://jaketao.com/blog', rss:'https://jaketao.com/feed'}    ],
  				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

  '05': [{name:'王志勇', url:'http://www.auiou.com/', rss:'http://www.auiou.com/feed'}, {name:'忆秋年', url:'http://www.hanshuailing.com/wordpress/', rss:'http://www.hanshuailing.com/feed'}, {name:'春田', url:'http://kaikeimura.way-nifty.com/', rss:'http://kaikeimura.way-nifty.com/blog/index.rdf'}, {name:'尚磊', url:'https://shanglei.net/', rss:'https://shanglei.net/feed'}, {name:'云风', url:'https://blog.codingnow.com/', rss:'https://blog.codingnow.com/atom.xml'}, {name:'大嘴狗狗', url:'https://www.sirit.com.cn/', rss:'https://www.sirit.com.cn/feed/'}, {name:'扶苏', url:'https://pwsz.com/', rss:'https://pwsz.com/feed'}, {name:'yaner', url:'https://yaner.cc/', rss:'https://yaner.cc/feed'}, {name:'佐仔志', url:'https://www.jinbo123.com/', rss:'https://www.jinbo123.com/feed'},{name:'Felix021', url:'https://www.felix021.com/', rss:'https://www.felix021.com/feed'}      , {name:'浮云游子意', url:'https://leonson.me/', rss:'https://leonson.me/feed.xml'}    , {name:'Lenciel', url:'https://lenciel.com/', rss:'https://lenciel.com/feed.xml'}       , {name:'0x01 byte', url:'https://1byte.io/', rss:'https://1byte.io/articles/index.xml'}     , {name:'月光', url:'https://www.williamlong.info/', rss:'https://www.williamlong.info/rss.xml'}       , {name:'Gea-Suan Lin', url:'https://blog.gslin.org/', rss:'https://blog.gslin.org/feed/'}   , {name:'破袜子', url:'https://pewae.com/', rss:'https://pewae.com/feed'}    , {name:'当下', url:'https://blog.fueis.com/', rss:'https://blog.fueis.com/feed'}   , {name:'ACEVS', url:'https://acevs.com/', rss:'https://acevs.com/feed/'}  , {name:'谢益辉', url:'https://yihui.org/cn/', rss:'https://yihui.org/cn/index.xml'}      ],
    				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

	'06': [{name:'土木坛子', url:'https://tumutanzi.com/', rss:'https://tumutanzi.com/feed'}, {name:'s星球', url:'http://www.snbk.cn/', rss:'http://www.snbk.cn/feed'}, {name:'傻猫', url:'https://www.samool.com/', rss:'https://www.samool.com/feed'}, {name:'隔叶黄莺', url:'https://yanbin.blog/', rss:'https://yanbin.blog/feed'}, {name:'bang', url:'https://blog.cnbang.net/', rss:'https://blog.cnbang.net/feed'}, {name:'小胡', url:'https://hmilyld.com/', rss:'https://hmilyld.com/feed'},{name:'Mukti', url:'https://feizhaojun.com/', rss:'https://feizhaojun.com/feed'}, {name:'joojen Zhou', url:'https://joojen.com/', rss:'https://joojen.com/feed'}, {name:'eallion', url:'https://www.eallion.com/', rss:'https://www.eallion.com/feed'}, {name:'黄杰敏', url:'https://www.jiemin.com/', rss:'https://www.jiemin.com/feed'}, {name:'香水', url:'https://xsui.com/', rss:'https://xsui.com/feed'}, {name:'平顶山', url:'https://pingdingshan.me/', rss:'https://pingdingshan.me/feed'}, {name:'Slyar', url:'https://www.slyar.com/', rss:'https://www.slyar.com/blog/feed'}, {name:'bang', url:'https://blog.cnbang.net/', rss:'https://blog.cnbang.net/feed/'}, {name:'后端技术 by Tim Yang', url:'https://timyang.net/', rss:'https://timyang.net/feed/'}    , {name:'bang', url:'https://blog.cnbang.net/', rss:'https://blog.cnbang.net/feed/'}   , {name:'郑永', url:'https://xptt.com/', rss:'https://xptt.com/feed'}   , {name:'古仔', url:'https://www.kootinlok.com/blog4.0/blog/blogList.php', rss:'https://www.kootinlok.com/blog4.0/blog/blogList.php/feed'}  , {name:'随风沐虐', url:'https://www.munue.com/', rss:'https://www.munue.com/feed'} , {name:'忘记了回忆', url:'https://ltmltm.cn/bk/', rss:'https://ltmltm.cn/bk/feed'}     , {name:'子痕', url:'https://www.mzihen.com/', rss:'https://www.mzihen.com/feed/'} , {name:'寂寞火山', url:'https://www.huoshan.org/blog/', rss:'https://www.huoshan.org/blog/feed/'}  ],
    				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

	'07': [{name:'祁劲松', url:'https://jamesqi.com/', rss:'https://jamesqi.com/feed'}, {name:'张子阳', url:'http://www.tracefact.net/', rss:'http://www.tracefact.net/feed'}, {name:'longluo', url:'https://www.longluo.me/', rss:'https://www.longluo.me/feed'}, {name:'梁波', url:'http://www.liangbo.org/', rss:'http://www.liangbo.org/feed'}, {name:'威言威语', url:'https://www.weisay.com/blog/', rss:'https://www.weisay.com/feed'}, {name:'PHP', url:'https://www.liqingbo.com/', rss:'https://www.liqingbo.com/feed'}, {name:'joyqi', url:'https://joyqi.com/', rss:'https://joyqi.com/feed'}, {name:'无标题文档', url:'https://www.gracecode.com/', rss:'https://www.gracecode.com/feed'}, {name:'悠见', url:'https://yufm.com/', rss:'https://yufm.com/feed'}, {name:'FROYO', url:'https://www.izhuyue.com/', rss:'https://www.izhuyue.com/feed'}, {name:'织梦岁月', url:'https://zhujianlin.com/', rss:'https://zhujianlin.com/feed'},{name:'苏洋', url:'https://soulteary.com/', rss:'https://soulteary.com/feed'}, {name:'似水流年', url:'https://www.longlan.net/', rss:'https://www.longlan.net/feed'}, {name:'龙天小筑', url:'https://www.dragongod.net/', rss:'https://www.dragongod.net/feed'} , {name:'老杨', url:'https://yangyq.net/', rss:'https://yangyq.net/feed'}    , {name:'朱小呆', url:'https://zhujay.com/', rss:'https://zhujay.com/feed/'}  , {name:'树下语', url:'https://yishu-life.com/', rss:'https://yishu-life.com/index.php/feed/'}  , {name:'Yihui', url:'https://yihui.org/en/', rss:'https://yihui.org/en/index.xml'}   , {name:'不靠谱颜论', url:'https://yanlinlin.cn/', rss:'https://yanlinlin.cn/index.xml'}   , {name:'可能吧', url:'https://kenengba.com/', rss:'https://kenengba.com/feed'}    ],
   				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

   '08': [{name:'阿呆生活志', url:'https://qsir.cn/', rss:'https://qsir.cn/feed'}, {name:'懋和道人', url:'https://www.dao.js.cn/', rss:'https://www.dao.js.cn/feed'}, {name:'杜郎俊赏', url:'https://dujun.io/', rss:'https://dujun.io/feed'}, {name:'虹墨', url:'https://www.imaegoo.com/', rss:'https://www.imaegoo.com/feed'}, {name:'军', url:'https://me.xu19.com/', rss:'https://me.xu19.com/feed'}, {name:'小气的神', url:'https://mdong.org/', rss:'https://mdong.org/feed'}, {name:'蓝卡', url:'https://www.lanka.cn/', rss:'https://www.lanka.cn/feed'},{name:'龙Ge笔迹', url:'https://www.izhailong.com/', rss:'https://www.izhailong.com/feed'}, {name:'刘荣星', url:'https://www.liurongxing.com/', rss:'https://www.liurongxing.com/feed'}, {name:'纸短情长', url:'https://www.gtdstudy.com/', rss:'https://www.gtdstudy.com/feed'}, {name:'小桥流水人家', url:'https://baiqiuyi.com/', rss:'https://baiqiuyi.com/feed'}   , {name:'有氧呼吸', url:'https://www.oxy.one/', rss:'https://www.oxy.one/feeds/posts/default'}   , {name:'Wandai', url:'https://twd2.me/', rss:'https://twd2.me/feed'}   , {name:'四火的唠叨', url:'https://www.raychase.net/', rss:'https://www.raychase.net/feed'}   , {name:'生活的左上角', url:'https://bwskyer.com/', rss:'https://bwskyer.com/feed'}    , {name:'Kwx', url:'https://kwx.cc/', rss:'https://kwx.cc/feed'}  , {name:'The Second Culture', url:'https://www.bjt.name/', rss:'https://www.bjt.name/rss.xml'}    , {name:'ZWWoOoOo', url:'https://zww.me/', rss:'https://zww.me/feed'}      , {name:'河马', url:'https://www.iamhippo.com/', rss:'https://www.iamhippo.com/feed'}   , {name:'小气的神', url:'https://mdong.org/', rss:'https://mdong.org/feed/'}        ],
    				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

	'09': [{name:'老张', url:'https://laozhang.org/', rss:'https://laozhang.org/feed'}, {name:'laike9m', url:'https://laike9m.com/', rss:'https://laike9m.com/feed'}, {name:'一起养蜂', url:'https://blog.artfax.com/', rss:'https://blog.artfax.com/feed'}, {name:'多多', url:'https://ddlog.cn/', rss:'https://ddlog.cn/?feed=rss2'}, {name:'老刘', url:'https://iliu.org/', rss:'https://iliu.org/index.xml'}, {name:'欧雷', url:'https://ourai.ws/', rss:'https://ourai.ws/feed'}, {name:'1900的灯泡店', url:'https://1900.live/', rss:'https://1900.live/rss'}, {name:'老卫', url:'https://waylau.com/', rss:'https://waylau.com/feed'}, {name:'纸鹿摸鱼处', url:'https://blog.zhilu.site/', rss:'https://blog.zhilu.site/feed'},{name:'木木木木木', url:'https://immmmm.com/', rss:'https://immmmm.com/atom.xml'}, {name:'邹志强', url:'http://www.zouzhiqiang.com/', rss:'http://www.zouzhiqiang.com/feed'}, {name:'谁见到过风？', url:'https://www.seenthewind.com/', rss:'https://www.seenthewind.com/feed'}, {name:'张鑫旭', url:'https://www.zhangxinxu.com/', rss:'https://www.zhangxinxu.com/wordpress/feed/'}, {name:'疆飞', url:'https://www.jiangfei.net/', rss:'https://www.jiangfei.net/feed'}, {name:'魅力', url:'http://www.58zn.cn/', rss:'http://www.58zn.cn/feed'}, {name:'老卫（柳伟卫）的技术站', url:'https://waylau.com/', rss:'https://waylau.com/feed.xml'}  , {name:'欧雷流', url:'https://ourai.ws/', rss:'https://ourai.ws/atom.xml'}   , {name:'标点符', url:'https://www.biaodianfu.com/', rss:'https://www.biaodianfu.com/feed'}     , {name:'异数', url:'https://www.yishu.pro/', rss:'https://www.yishu.pro/feed/'}    , {name:'lms', url:'https://lms.im/', rss:'https://lms.im/feed'}     , {name:'三斗室', url:'https://chenlinux.com/', rss:'https://chenlinux.com/feed'}   , {name:'且听书吟', url:'https://yufan.me/', rss:'https://yufan.me/feed'}   , {name:'孙琪峥', url:'https://www.sunqizheng.com/', rss:'https://www.sunqizheng.com/feed'}   ],
  				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

  '10': [{name:'宇间草', url:'https://2days.org/', rss:'https://2days.org/feed'}, {name:'老谢', url:'https://www.xj123.info/', rss:'https://www.xj123.info/feed'}, {name:'lilydjwg', url:'https://blog.lilydjwg.me/', rss:'https://blog.lilydjwg.me/feed'}, {name:'the5fire', url:'https://www.the5fire.com/', rss:'https://www.the5fire.com/feed'}, {name:'piglei', url:'https://www.piglei.com/', rss:'https://www.piglei.com/feed'}, {name:'雅余', url:'https://yayu.net/', rss:'https://yayu.net/feed'}, {name:'limboy', url:'https://limboy.me/', rss:'https://limboy.me/feed'},{name:'天一生水', url:'https://www.jiangyu.org/', rss:'https://www.jiangyu.org/feed'}, {name:'笨笨天地', url:'https://www.713660.com/', rss:'https://www.713660.com/feed'}, {name:'忆往事', url:'https://zhou.ge/', rss:'https://zhou.ge/feed'}, {name:'麦麦同学', url:'https://www.mmtx.net/', rss:'https://www.mmtx.net/feed/ '} , {name:'磊磊落落', url:'https://leileiluoluo.com/', rss:'https://leileiluoluo.com/index.xml'}   , {name:'Jeray', url:'https://hi.jeray.wang/', rss:'https://hi.jeray.wang/feed/'}   , {name:'limboy', url:'https://limboy.me/', rss:'https://limboy.me/index.xml'}  , {name:'设计达人', url:'https://www.shejidaren.com/', rss:'https://www.shejidaren.com/feed'}    ],
	// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================
    '11': [{name:'耳朵的主人', url:'https://www.edzbe.com/', rss:'https://www.edzbe.com/feed'}, {name:'老孙', url:'https://www.imsun.org/', rss:'https://www.imsun.org/feed'}, {name:'小癞子', url:'https://justyy.com/', rss:'https://justyy.com/feed'}, {name:'陪她去流浪', url:'https://blog.twofei.com/', rss:'https://blog.twofei.com/feed'}, {name:'罗磊', url:'https://luolei.org/', rss:'https://luolei.org/rss.xml'}, {name:'phodal', url:'https://www.phodal.com/blog/', rss:'https://www.phodal.com/feed'},{name:'周涛', url:'https://www.ediok.cn/', rss:'https://www.ediok.cn/feed'}, {name:'Verne', url:'https://blog.einverne.info/', rss:'https://blog.einverne.info/feed.xml'}  , {name:'forecho', url:'https://blog.forecho.com/', rss:'https://blog.forecho.com/atom.xml'}  , {name:'君子不器', url:'https://www.colinjiang.com/', rss:'https://www.colinjiang.com/feed'}   , {name:'第七星尘', url:'https://blog.star7th.com/', rss:'https://blog.star7th.com/feed'}  , {name:'Yi', url:'https://wangyi.ai/', rss:'https://wangyi.ai/atom.xml'}   , {name:'前端小武', url:'https://xuexb.com/', rss:'https://xuexb.com/rss.html'}  , {name:'灵尘居', url:'https://lingchenzi.com/', rss:'https://lingchenzi.com/feed'}   , {name:'唐巧', url:'https://blog.devtang.com/', rss:'https://blog.devtang.com/atom.xml'}    , {name:'Be For Web', url:'http://beforweb.com/', rss:'http://beforweb.com/rss.xml'}   ],
    				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

	'12': [{name:'贱志', url:'https://fatesinger.com/', rss:'https://fatesinger.com/feed'}, {name:'香菇肥牛', url:'http://qing.su/', rss:'https://qing.su/feed'}, {name:'徐建伟', url:'http://www.xulog.cn/', rss:'http://www.xulog.cn/index.php?act=rss'}, {name:'Tokin', url:'https://biji.io/', rss:'https://biji.io/feed'}, {name:'王鑫', url:'https://wonse.info/', rss:'https://wonse.info/feed'}, {name:'方糖', url:'https://fangtang.net/', rss:'https://fangtang.net/feed'}, {name:'郭晓力', url:'https://guoxiaoli.com/', rss:'https://guoxiaoli.com/feed'}, {name:'半日闲', url:'https://www.xiaoa.me/', rss:'https://www.xiaoa.me/feed'}, {name:'正是修行时', url:'https://www.qtter.com/', rss:'https://www.qtter.com/feed'}, {name:'MacTalk-池建强的随想录', url:'https://macshuo.com/', rss:'https://macshuo.com/?feed=rss2'}   , {name:'把酒诗代码', url:'https://102no.com/', rss:'https://102no.com/atom.xml'} , {name:'郭晓力', url:'https://guoxiaoli.com/', rss:'https://guoxiaoli.com/feed.php'}  , {name:'王国平', url:'http://guopingblog.com/', rss:'http://guopingblog.com/feed.php'}   , {name:'Cysime', url:'https://cysi.me/', rss:'https://blog.cysi.me/index.xml'}   , {name:'水拍石', url:'https://www.leitao.cn/', rss:'https://www.leitao.cn/feed'}    , {name:'看川', url:'https://kanchuan.com/', rss:'https://kanchuan.com/feed.xml'}   , {name:'Yuxin', url:'https://ppwwyyxx.com/blog/', rss:'https://ppwwyyxx.com/blog/atom.xml'}     ],
    				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

	'13': [{name:'始终', url:'https://liam.page/', rss:'https://liam.page/feed'}, {name:'小z', url:'https://blog.xiaoz.org/', rss:'https://blog.xiaoz.org/feed'}, {name:'卡瓦邦噶', url:'https://www.kawabangga.com/', rss:'https://www.kawabangga.com/feed'},  {name:'二丫讲梵', url:'https://wiki.eryajf.net/', rss:'https://wiki.eryajf.net/feed'}, {name:'彼岸临窗', url:'https://onenote.io/', rss:'https://onenote.io/feed/'}, {name:'关关', url:'https://951008.com/', rss:'https://951008.com/feed'}, {name:'Frank', url:'https://nyan.im/', rss:'https://nyan.im/feed'}, {name:'辛未羊', url:'https://panqiincs.me/', rss:'https://panqiincs.me/feed'}, {name:'林羽凡', url:'https://www.linyufan.com/', rss:'https://blogapi.linyufan.com/rss.xml'}, {name:'luca,s notepad', url:'https://wulujia.com/', rss:'https://wulujia.com/feed'}, {name:'jet', url:'https://jetyu.me/', rss:'https://jetyu.me/atom.xml'}  , {name:'WEB骇客', url:'https://www.webhek.com/', rss:'https://www.webhek.com/feed/'}  , {name:'王登科', url:'https://greatdk.com/', rss:'https://greatdk.com/rss'}   , {name:'901web前端', url:'https://901web.com/', rss:'https://901web.com/rss.html'}   , {name:'蛋蛋', url:'https://wuqishi.com/', rss:'https://wuqishi.com/rss.xml'}   , {name:'Frank', url:'https://blog.linshuang.info/', rss:'https://blog.linshuang.info/index.xml'}  , {name:'Jonty', url:'https://nobb.cc/', rss:'https://nobb.cc/feed/'}  ],
		// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '14': [{name:'天书', url:'https://tianshu.xyz/blog/', rss:'https://tianshu.xyz/feed'}, {name:'ying', url:'https://izualzhy.cn/', rss:'https://izualzhy.cn/feed'}, {name:'gaoce', url:'https://gaocegege.com/Blog/', rss:'https://gaocegege.com/feed'}, {name:'Y!an\'s Blog', url:'https://yian.me/blog/', rss:'https://yian.me/feed'}, {name:'Henry Z', url:'https://changchen.me/', rss:'https://changchen.me/feed'}, {name:'静觅', url:'https://cuiqingcai.com/', rss:'https://cuiqingcai.com/feed'}, {name:'松茸', url:'https://zrs.xyz/', rss:'https://zrs.xyz/feed'}, {name:'简单点', url:'https://blog.caiwenhao.cn/', rss:'https://blog.caiwenhao.cn/feed'}, {name:'缙哥哥', url:'https://www.dujin.org/', rss:'https://www.dujin.org/feed'}, {name:'运营不加班', url:'https://nops.icu/', rss:'https://nops.icu/feed'}, {name:'哥斯拉', url:'http://gojira.net/', rss:'http://gojira.net/feed'}, {name:' A/B\'s Blog', url:'https://zmoe.com/', rss:'https://zmoe.com/feed'}, {name:'很少明白', url:'https://p0werdown.com/', rss:'https://p0werdown.com/feed.xml'} , {name:'卡片创作实验室', url:'https://www.cnfeat.com/', rss:'https://www.cnfeat.com/feed'}   , {name:'IT人生', url:'http://www.aiti123.com/', rss:'http://www.aiti123.com/?feed=rss2'}  , {name:'猫箱内の六軒島', url:'https://batora.ushiromiya.com/', rss:'https://batora.ushiromiya.com/feed/'}   , {name:'梦幻辰风', url:'https://www.mhcf.net/', rss:'https://www.mhcf.net/rss.php'}     , {name:'xulihang', url:'https://blog.xulihang.me/', rss:'https://blog.xulihang.me/feed/'}   , {name:'孤斗', url:'https://d-d.design/', rss:'https://d-d.design/wp/feed/'}    ],
		// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '15': [ {name:'HEO', url:'https://blog.zhheo.com/', rss:'https://blog.zhheo.com/feed'}, {name:'牧人池塘', url:'https://dbanote.com/', rss:'https://dbanote.com/feed'}, {name:'质数人生', url:'https://2357.life/', rss:'https://2357.life/feed'}, {name:'泽泽社长', url:'https://blog.aihaonv.com/', rss:'https://blog.aihaonv.com/feed'}, {name:'满心', url:'https://zhoutian.com/', rss:'https://zhoutian.com/rss.xml'}, {name:'青山', url:'https://blog.yanqingshan.com/', rss:'https://blog.yanqingshan.com/feed'}, {name:'酸菜鱼', url:'https://suancaixiong.com/', rss:'https://suancaixiong.com/feed'}, {name:'石头', url:'https://www.pweb123.com/', rss:'https://www.pweb123.com/feed'}, {name:'Luminous', url:'https://luotianyi.vc/', rss:'https://luotianyi.vc/feed'}, {name:'库拉饭', url:'https://www.kulafan.com/', rss:'https://www.kulafan.com/feed'}  , {name:'elmagnifico', url:'https://elmagnifico.tech/', rss:'https://elmagnifico.tech/feed.xml'}  , {name:'WordPress 知识宝库', url:'https://www.thewordcracker.com/', rss:'https://www.thewordcracker.com/feed/'}  , {name:'侯锐的思考与分享', url:'https://www.nosuchfield.com/', rss:'https://www.nosuchfield.com/atom.xml'}     , {name:'Guyskk', url:'https://blog.guyskk.com/', rss:'https://blog.guyskk.com/feed.xml'}    , {name:'木先森', url:'https://www.meizg.cn/', rss:'https://www.meizg.cn/feed/'}     , {name:'小屁君', url:'https://blog.ouxiaopi.com/', rss:'https://blog.ouxiaopi.com/feed'}   , {name:'胡东东', url:'https://blog.hudd.cn/', rss:'https://blog.hudd.cn/feed/'}     , {name:'网工格物', url:'https://songxwn.com/', rss:'https://songxwn.com/atom.xml'}   ],
			// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '16': [{name:'孟坤', url:'https://mkblog.cn/', rss:'https://mkblog.cn/feed'}, {name:'太隐', url:'https://wangyurui.com/', rss:'https://wangyurui.com/feed'}, {name:'若水斋', url:'https://blog.werner.wiki/', rss:'https://blog.werner.wiki/feed'}, {name:'kwen', url:'https://www.kwen.page/', rss:'https://www.kwen.page/feed'}, {name:'ximi', url:'https://www.ximi.me/', rss:'https://www.ximi.me/feed'}, {name:'小可', url:'https://keke.su/', rss:'https://keke.su/feed'}, {name:'阿锦', url:'https://www.ajinol.com/', rss:'https://www.ajinol.com/feed'}, {name:'宝玉', url:'https://baoyu.io/blog', rss:'https://baoyu.io/feed.xml'}, {name:'友人C', url:'https://www.ihewro.com/', rss:'https://www.ihewro.com/feed'}, {name:'大雄', url:'https://199508.com/', rss:'https://199508.com/feed'}, {name:'Keyle', url:'https://vrast.cn/', rss:'https://vrast.cn/atom.xml'}, {name:'吴昊', url:'https://blog.whsir.com/', rss:'https://blog.whsir.com/feed'}, {name:'woodwhales', url:'https://woodwhales.cn/', rss:'https://woodwhales.cn/feed'}, {name:'幻影', url:'https://blog.52hyjs.com/', rss:'https://blog.52hyjs.com/feed'}, {name:'woodu', url:'https://woodu.me/', rss:'https://woodu.me/feed'}, {name:'青木', url:'https://www.iyoubo.com/', rss:'https://www.iyoubo.com/feed'}, {name:'Frost', url:'https://frostming.com/' ,rss:'https://frostming.com/feed.xml' }   , {name:'阿珏酱', url:'https://moejue.cn/', rss:'https://moejue.cn/feed'}    , {name:'故事里', url:'https://www.gushi.li/', rss:'https://www.gushi.li/feed'}    , {name:'闲一鱼', url:'https://www.macrr.com/', rss:'https://www.macrr.com/feed'}   , {name:'云游君', url:'https://www.yunyoujun.cn/', rss:'https://www.yunyoujun.cn/atom.xml'}  , {name:'黄湘云', url:'https://xiangyun.rbind.io/', rss:'https://xiangyun.rbind.io/index.xml'}   , {name:'弹霄博科', url:'https://www.txisfine.cn/', rss:'https://www.txisfine.cn/atom.xml'}  ],
			// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '17': [{name:'科学空间', url:'https://kexue.fm/', rss:'https://kexue.fm/feed'}, {name:'王叨叨', url:'https://wangdaodao.com/', rss:'https://wangdaodao.com/feed'}, {name:'consiiii', url:'https://www.consiiii.me/', rss:'https://www.consiiii.me/feed'}, {name:'vimiix', url:'https://www.vimiix.com/', rss:'https://www.vimiix.com/feed'}, {name:'不败君', url:'https://www.bubaijun.com/', rss:'https://www.bubaijun.com/feed'}, {name:'九层台', url:'https://blog.wj2015.com/', rss:'https://blog.wj2015.com/feed'}, {name:'iam', url:'https://5ime.cn/', rss:'https://5ime.cn/feed'}, {name:'马春杰杰', url:'https://www.machunjie.com/', rss:'https://www.machunjie.com/feed'}, {name:'AI柠檬', url:'https://blog.ailemon.net/', rss:'https://blog.ailemon.net/feed'}, {name:'沈唁志', url:'https://qq52o.me/', rss:'https://qq52o.me/feed'}, {name:'染念', url:'https://dyedd.cn/', rss:'https://dyedd.cn/feed'}, {name:'串串狗小刊', url:'https://www.ccgxk.com/', rss:'https://www.ccgxk.com/rss.php'}, {name:'染念', url:'https://dyedd.cn/', rss:'https://dyedd.cn/feed'}, {name:'atpx', url:'https://atpx.com/', rss:'https://atpx.com/feed'}, {name:'83小驿站', url:'https://888333.xyz/', rss:'https://888333.xyz/feed'}, {name:'碎言', url:'https://www.suiyan.cc/', rss:'https://www.suiyan.cc/feed.xml'}, {name:'zj', url:'https://www.zjhuiwan.cn/', rss:'https://www.zjhuiwan.cn/feed.xml'}   , {name:'2broear', url:'https://blog.2broear.com/', rss:'https://blog.2broear.com/feed'}   , {name:'Usubeni Fantasy', url:'https://ssshooter.com/', rss:'https://ssshooter.com/atom.xml'}   , {name:'技术家园', url:'https://www.songshizhao.com/', rss:'https://www.songshizhao.com/blog/rss.xml'}   , {name:'SimonAKing', url:'https://simonaking.com/', rss:'https://simonaking.com/blog/atom.xml'}   , {name:'飞刀', url:'https://www.feidaoboke.com/', rss:'https://www.feidaoboke.com/feed.php'}   , {name:'秋风于渭水', url:'https://www.tjsky.net/', rss:'https://www.tjsky.net/feed'}    , {name:'微风忆夏', url:'https://sumiler.com/', rss:'https://sumiler.com/feed'}   , {name:'刘承', url:'https://czhlove.cn/', rss:'https://czhlove.cn/rss.xml'}   , {name:'yugasun', url:'https://yugasun.com/', rss:'https://yugasun.com/feed'}   , {name:'朱某', url:'https://zhuxu.asia/', rss:'https://cs.zhuxu.asia/api/rss'}      , {name:'idealclover', url:'https://idealclover.top/', rss:'https://idealclover.top/feed'}      , {name:'浴沂咏归', url:'https://zexwoo.blog/', rss:'https://zexwoo.blog/index.xml'}   , {name:'雨中野游', url:'https://hqidi.com/', rss:'https://hqidi.com/feed'}   , {name:'arun', url:'https://arun.is/', rss:'https://arun.is/rss.xml'}  , {name:'肖楠', url:' https://nanx.me/', rss:' https://nanx.me/index.xml '} , {name:'jacklandrin', url:'https://www.jacklandrin.com/', rss:'https://www.jacklandrin.com/feed.xml'}     ],
		// ==================== 复制方便    , {name:'', url:'', rss:''}   ====================

    '18': [{name:'涛叔', url:'https://tao.zz.ac/', rss:'https://tao.zz.ac/feed'}, {name:'周松松', url:'https://zhousongsong.com/', rss:'https://zhousongsong.com/feed'}, {name:'codedump', url:'https://www.codedump.info/', rss:'https://www.codedump.info/feed'}, {name:'海了个螺', url:'http://www.nnnuo.com/', rss:'https://www.nnnuo.com/feed'}, {name:'刘宇帅', url:'https://liuyushuai.com/', rss:'https://liuyushuai.com/feed'}, {name:'枋柚梓的猫会发光', url:'https://inkss.cn/', rss:'https://inkss.cn/feed'}, {name:'阳', url:'https://yooer.me/', rss:'https://yooer.me/feed'}, {name:'鸟叔', url:'https://thornbird.org/', rss:'https://thornbird.org/feed'}, {name:'运维咖啡吧', url:'https://blog.ops-coffee.com/', rss:'https://blog.ops-coffee.com/feed'}, {name:'希仁之拥', url:'https://blog.keepchen.com/', rss:'https://blog.keepchen.com/feed'},{name:'guanngxu', url:'https://guanngxu.com/', rss:'https://guanngxu.com/atom.xml'}  , {name:'Zero', url:'https://mikuac.com/', rss:'https://mikuac.com/atom.xml'}    , {name:'leadwhite', url:'https://www.leadwhite.net/', rss:'https://www.leadwhite.net/feed/'}  , {name:'shidenggui', url:'https://shidenggui.com/', rss:'https://shidenggui.com/feeds'}  , {name:'TendCode', url:'https://tendcode.com/', rss:'https://tendcode.com/feed/'}   , {name:'Ground Oddity', url:'http://idle.systems/', rss:'http://idle.systems/atom.xml'}  , {name:'云奚小屋', url:'https://yxbok.cn/', rss:'https://yxgoa.cn/index.php/feed/'}  , {name:'紫慕', url:'https://90zm.net/', rss:'https://90zm.net/feed/'}  , {name:'水清无鱼', url:'https://bosir.cn/', rss:'https://bosir.cn/rss.xml'}   , {name:'游钓四方', url:'https://blog.lhasa.icu/', rss:'https://blog.lhasa.icu/rss.xml'}  , {name:' Xianying', url:'https://shrektan.com/', rss:'https://shrektan.com/zh/index.xml'}   , {name:'吖远zzy', url:'https://www.hzv5.cn/', rss:'https://www.hzv5.cn/atom.xml'}   , {name:'黑桃三', url:'https://heitaosan.com/', rss:'https://heitaosan.com/feed/'}   , {name:'秋葵', url:'https://qiukui-note.happy365.day/', rss:'https://qiukui-note.happy365.day/atom.xml'}    ],
	// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================
    '19': [{name:'沧海月明', url:'https://www.inlighting.org/', rss:'https://www.inlighting.org/feed'}, {name:'流情', url:'https://liuqingwushui.top/', rss:'https://liuqingwushui.top/feed'}, {name:'时光散记', url:'https://www.sanji.one/', rss:'https://www.sanji.one/feed'}, {name:'李锋镝', url:'https://www.lifengdi.com/', rss:'https://www.lifengdi.com/feed'}, {name:'启尚', url:'https://blog.wuxhqi.com/', rss:'https://blog.wuxhqi.com/feed'}, {name:'imglan', url:'https://imglan.com/', rss:'https://imglan.com/feed'}, {name:'风向标', url:'https://sbcoder.cn/', rss:'https://sbcoder.cn/feed'}, {name:'herman', url:'https://herman.bearblog.dev/blog/', rss:'https://herman.bearblog.dev/feed'} , {name:'风记星辰', url:'https://www.thyuu.com/', rss:'https://www.thyuu.com/feed/'}   , {name:'Zeruns', url:'https://blog.zeruns.com/', rss:'https://blog.zeruns.com/feed/'}   , {name:'jdeal', url:'https://www.jdeal.cn/', rss:'https://www.jdeal.cn/feed'}   , {name:'Allen Hua ', url:'https://hellodk.cn/', rss:'https://hellodk.cn/feed/'}    , {name:'新世界的大门', url:'https://blog.xinshijiededa.men/', rss:'https://blog.xinshijiededa.men/atom.xml/'}   , {name:'浪浪山下那个村', url:'https://www.zeekling.cn/', rss:'https://www.zeekling.cn/rss.xml'}     , {name:'菜鸟之志', url:'http://loonlog.com/', rss:'http://loonlog.com/feed/'}  , {name:'LJF.COM', url:'https://ljf.com/', rss:'https://ljf.com/feed/'}  , {name:'凌飞', url:'https://www.llingfei.com/', rss:'https://www.llingfei.com/feed/'}  , {name:'呢喃', url:'https://ninan.me/', rss:'https://ninan.me/feed/'}   , {name:'安静角落', url:'https://wuziya.com/', rss:'https://wuziya.com/feed/'}    , {name:'passo', url:'https://passo.uno/', rss:'https://passo.uno/talks/index.xml'}   , {name:'神奇的程序员', url:'https://www.kaisir.cn/', rss:'https://www.kaisir.cn/feed'}     , {name:'So!azy', url:'https://blog.solazy.me/', rss:'https://blog.solazy.me/feed/'}       , {name:'吴诗涛', url:'https://shitao5.org/', rss:'https://shitao5.org/index.xml'} , {name:'奶爸建站笔记', url:'https://blog.naibabiji.com/', rss:'https://blog.naibabiji.com/feed'}   , {name:'飞蚊话', url:'https://www.bwsl.wang/', rss:'https://www.bwsl.wang/feed/'}   , {name:'紫塞', url:'https://zisai.com/', rss:'https://zisai.com/index.xml'}  , {name:'瓜老汉', url:'https://www.gualaohan.com/', rss:'https://www.gualaohan.com/feed/atom'}  ],
			// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '20': [ {name:'瓦解', url:'https://hin.cool/', rss:'https://hin.cool/atom.xml'}, {name:'happyxiao', url:'https://happyxiao.com/', rss:'https://happyxiao.com/feed'}, {name:'vinchent', url:'https://www.vinchent.xyz/', rss:'https://www.vinchent.xyz/feed'},{name:'天书vip', url:'https://www.skybook.vip/', rss:'https://www.skybook.vip/feed'}, {name:'TXY', url:'https://tanxinyu.work/', rss:'https://tanxinyu.work/feed'}, {name:'老卢', url:'https://blog.el9.cn/', rss:'https://blog.el9.cn/feed'}, {name:'共享', url:'https://www.sharedbk.com/', rss:'https://www.sharedbk.com/feed'}, {name:'世俗', url:'https://shi.su/', rss:'https://shi.su/feed'}, {name:'WishMeLz', url:'https://blog.itsse.cn/', rss:'https://blog.itsse.cn/feed'}, {name:'naiba', url:'https://lifelonglearn.ing/', rss:'https://lifelonglearn.ing/feed'}, {name:'HEMING', url:'https://heming.org/', rss:'https://heming.org/feed'}, {name:'落英缤纷', url:'https://www.im2828.com/', rss:'https://www.im2828.com/feed'}, {name:'bk随笔', url:'https://www.suibibk.com/', rss:'https://www.suibibk.com/feed'}, {name:'章工', url:'https://blog.zzppjj.top/', rss:'https://blog.zzppjj.top/feed'}, {name:'子舒', url:'https://zishu.me/', rss:'https://zishu.me/feed'}, {name:'chaofa', url:'https://yuanchaofa.com/', rss:'https://yuanchaofa.com/feed'}, {name:'优世界', url:'https://usj.cc/', rss:'https://usj.cc/rss.xml'}, {name:'粥里有勺糖', url:'https://sugarat.top/', rss:'https://sugarat.top/feed'}, {name:'鸽子窝', url:'https://www.wudilad.com/', rss:'https://www.wudilad.com/feed'}, {name:'隔壁老刘', url:'https://www.lzhs.com/', rss:'https://www.lzhs.com/feed'}, {name:'登山亦有道', url:'https://chenyan98.cn/', rss:'https://chenyan98.cn/feed'}, {name:'方圆小站', url:'https://fangyuanxiaozhan.com/', rss:'https://fangyuanxiaozhan.com/feed/'}  , {name:'无梦梦游记', url:'https://bkryofu.cn/', rss:'https://bkryofu.cn/atom.xml'}  , {name:'Z次元', url:'https://blog.ahzoo.cn/', rss:'https://blog.ahzoo.cn/rss.xml'}  , {name:'資工小廢物 - JN', url:'https://blog.giveanornot.com/', rss:'https://blog.giveanornot.com/index.xml'}   , {name:'yihong0618', url:'https://blog.yihong0618.me/', rss:'https://blog.yihong0618.me/rss'}  , {name:'Battle Le', url:'https://battlele.com/', rss:'https://battlele.com/atom.xml'}   , {name:'onlytl', url:'https://onlytl.com/', rss:'https://onlytl.com/rss.xml'}    , {name:'我不是咕咕鸽', url:'https://blog.laoda.de/', rss:'https://blog.laoda.de/rss.xml'}     , {name:'EdNovas', url:'https://ednovas.xyz/', rss:'https://ednovas.xyz/atom.xml'}   , {name:'初然忆', url:'https://www.imcry.vip/', rss:'https://www.imcry.vip/index.xml'}    , {name:'呆哥', url:'https://dai.ge/', rss:'https://dai.ge/feed'}  , {name:'无妄当自持', url:'https://www.insidentally.com/', rss:'https://www.insidentally.com/atom.xml'}  , {name:'Hongtao Hao', url:'https://hongtaoh.com/en/blog/', rss:'https://hongtaoh.com/en/blog/index.xml'} , {name:'郝鸿涛', url:'https://hongtaoh.com/cn/blog/', rss:'https://hongtaoh.com/cn/blog/index.xml'}     , {name:'不凡', url:'https://www.bufanz.com/', rss:'https://www.bufanz.com/feed/'}    , {name:'孙振超', url:'https://www.aqzx.com/blog/', rss:'https://www.aqzx.com/blog/feed.asp'}   , {name:'卟言', url:'https://qaqbuyan.com:88/', rss:'https://qaqbuyan.com:88/%E4%B9%94%E5%AE%89%E6%96%87%E7%AB%A0/rss'}    ],
				// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '21': [{name:'硅谷王川', url:'https://chuan.us/', rss:'https://chuan.us/feed'}, {name:'辣条', url:'https://www.latiao.org/', rss:'https://www.latiao.org/feed'}, {name:'blogc', url:'http://blogc.com/', rss:'https://blogc.com/feed'}, {name:'yveji', url:'https://www.yveji.com/', rss:'https://www.yveji.com/feed'}, {name:'leorain', url:'https://www.leorain.cn/', rss:'https://www.leorain.cn/feed'}, {name:'毒蛊', url:'https://blog.idg8.cn/', rss:'https://blog.idg8.cn/feed'}, {name:'云云星羽', url:'https://starssr.com/', rss:'https://starssr.com/feed'}, {name:'XXY', url:'https://blog.xuxiny.top/', rss:'https://blog.xuxiny.top/feed'}, {name:'记录生活', url:'https://9sb.net', rss:'https://9sb.net/feed'}, {name:'诺依阁', url:'https://blog.nuoyis.net/', rss:'https://blog.nuoyis.net/feed'}, {name:'小威', url:'https://www.xiaoweio.com/', rss:'https://www.xiaoweio.com/feed'}, {name:'ovo', url:'https://ovo.cc/', rss:'https://ovo.cc/feed'}, {name:'迷荼小栈', url:'https://www.mkinit.com/', rss:'https://www.mkinit.com/feed'}, {name:'小阿成', url:'https://www.xiaoac.com/', rss:'https://www.xiaoac.com/feed'}, {name:'站长笔记', url:'https://www.080210.com/', rss:'https://www.080210.com/feed'}, {name:'Dayu', url:'https://anotherdayu.com/', rss:'https://anotherdayu.com/feed'}, {name:'bing', url:'https://imcbc.cn/', rss:'https://imcbc.cn/feed'}, {name:'極客死亡計劃', url:'https://www.geedea.pro/', rss:'https://www.geedea.pro/feed'}  , {name:'邹江', url:'https://www.zoujiang.com/', rss:'https://www.zoujiang.com/feed/'}   , {name:'Save The Web Project', url:'https://blog.save-web.org/', rss:'https://blog.save-web.org/feed/'}    , {name:'阿锋的小宇宙', url:'https://feng.pub/', rss:'https://feng.pub/feed'}   , {name:'喵喵小站・博客志', url:'https://www.mmbkz.cn/', rss:'https://www.mmbkz.cn/feed/'}  , {name:'hiRipple -Ripple', url:'https://hiripple.com/', rss:'https://hiripple.com/feed.xml'}    , {name:'DevNow', url:'https://www.laughingzhu.cn/', rss:'https://www.laughingzhu.cn/rss.xml'}     , {name:'DAIDAIFU', url:'https://www.ddf.im/', rss:'https://www.ddf.im/index.php/feed/'}  , {name:'Robes', url:'https://robes.xin/', rss:'https://robes.xin/feed/'}   , {name:'5had0w', url:'https://www.5had0w.com/', rss:'https://www.5had0w.com/atom.xml'}  , {name:'WSH', url:'https://www.wsh233.cn/', rss:'https://www.wsh233.cn/feed.xml'}   , {name:'淇云', url:'https://www.88pq.cn/', rss:'https://www.88pq.cn/feed'}   ],
					// ==================== 复制方便    , {name:'', url:'', rss:''}     ==================== 

    '22': [{name:'果壳中的宇宙', url:'https://www.guoke.co/', rss:'https://www.guoke.co/feed'},{name:'cynosura', url:'https://cynosura.one/', rss:'https://cynosura.one/feed'}, {name:'ZHU', url:'https://yfzhu.cn/', rss:'https://yfzhu.cn/feed'}, {name:'Lee.Sir', url:'https://saysay.cc/', rss:'https://saysay.cc/feed'}, {name:'皓月星际', url:'https://www.shimail.cn/', rss:'https://www.shimail.cn/feed'}, {name:'吃猫的鱼', url:'https://www.fish9.cn/', rss:'https://www.fish9.cn/feed'}, {name:'远梦', url:'https://blog.qoz.cc/', rss:'https://blog.qoz.cc/feed'}, {name:'烧饼', url:'https://u.sb/', rss:'https://u.sb/feed'}, {name:'唯知', url:'https://note.weizwz.com/', rss:'https://note.weizwz.com/feed'}, {name:'白少宣', url:'https://baishaoxuan.com/', rss:'https://baishaoxuan.com/feed'}, {name:'kejilion', url:'https://blog.kejilion.pro/', rss:'https://blog.kejilion.pro/feed'}, {name:'VeryJack', url:'https://veryjack.com/', rss:'https://veryjack.com/feed'}, {name:'探人间', url:'https://www.hydsb0.com/', rss:'https://www.hydsb0.com/feed'}, {name:'栋dong', url:'https://itdong.me/', rss:'https://itdong.me/feed'}, {name:'ay', url:'http://blue.ss/', rss:'https://blue.ss/feed'}, {name:'倦意', url:'https://jyblog.cn/', rss:'https://jyblog.cn/feed'}, {name:'zhecydn', url:'https://blog.zhecydn.asia/', rss:'https://blog.zhecydn.asia/feed'}  , {name:'林林杂语', url:'https://www.xiaozonglin.cn/', rss:'https://www.xiaozonglin.cn/feed/'}   , {name:'晴雀堂', url:'https://blog.verynb.net/', rss:'https://blog.verynb.net/atom.xml'}    , {name:'蒂诺星球', url:'https://ink.tino.im/', rss:'https://ink.tino.im/feed'}   ], 
					// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '23': [{name:'小归客', url:'https://xgk.pw/', rss:'https://xgk.pw/feed'},{name:'lefineder', url:'https://www.lefineder.com/', rss:'https://www.lefineder.com/feed'}, {name:'zpaeng', url:'http://zpaeng.com/', rss:'http://zpaeng.com/feed'}, {name:'建站百科', url:'https://www.jzbk.net/', rss:'https://www.jzbk.net/feed'}, {name:'bo', url:'https://bokebo.com/', rss:'https://bokebo.com/feed'}, {name:'宗宗酱', url:'https://ygz.ink/', rss:'https://ygz.ink/feed'}, {name:'Jeffer.Z', url:'https://www.jeffer.xyz/', rss:'https://www.jeffer.xyz/feed'}, {name:'维奥洛', url:'https://vioulo.com/', rss:'https://vioulo.com/feed'}, {name:'小何', url:'https://022220.xyz/', rss:'https://022220.xyz/feed'}, {name:'语沐', url:'https://www.yumu.cc/', rss:'https://www.yumu.cc/feed'}, {name:'本源归一', url:'https://ww-fs.com/', rss:'https://ww-fs.com/feed'}, {name:'小野', url:'https://lb5.net/', rss:'https://lb5.net/feed'}, {name:'鹿泽', url:'https://www.bailuze.com/', rss:'https://www.bailuze.com/feed'}, {name:'火米', url:'https://huo.me/', rss:'https://huo.me/feed'}, {name:'Siwei Li', url:'https://siwei.li/', rss:'https://siwei.li/feed'}, {name:'Shiina', url:'https://blog.shiina.fun/', rss:'https://blog.shiina.fun/feed'}, {name:'兔哥', url:'https://uuzi.net/', rss:'https://uuzi.net/feed'}, {name:'仲小树', url:'https://zxs.me/', rss:'https://zxs.me/feed'}, {name:'小破站', url:'https://symlzz.cn/', rss:'https://symlzz.cn/feed'}, {name:'康丰', url:'https://www.okang.top/', rss:'https://www.okang.top/feed'}, {name:'无敌', url:'https://blog.tangwudi.com/', rss:'https://blog.tangwudi.com/feed'}, {name:'聊点趣事', url:'https://www.milesytech.com/', rss:'https://www.milesytech.com/feed'}, {name:'蘑菇', url:'https://home.ad/', rss:'https://home.ad/feed'}  , {name:'鄢云峰', url:'https://yanyunfeng.com/', rss:'https://yanyunfeng.com/rss'}  , {name:'果果开发', url:'https://www.ggdoc.cn/', rss:'https://www.ggdoc.cn/feed'}  , {name:'按钮与磁带', url:'https://jefftay.com/index.xml', rss:'https://jefftay.com/index.xml'}     , {name:'Mimosa', url:'https://loneapex.cn/', rss:'https://loneapex.cn/feed'}  , {name:'liseezn', url:'https://blog.liseezn.top/', rss:'https://blog.liseezn.top/feed/'}    , {name:'隔壁老王', url:'https://gblw.cn/', rss:'https://gblw.cn/feed/'}  , {name:'湘铭', url:'https://xiangming.site/', rss:'https://xiangming.site/feed/'}   , {name:'枫林灯语', url:'https://blog.mfwt.top/', rss:'https://blog.mfwt.top/index.php/feed/'}    , {name:'核桃', url:'https://www.htaoo.com/', rss:'https://www.htaoo.com/rss.xml'}     ],
					// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '24': [ {name:'阿伟', url:'https://awei.cc/', rss:'https://awei.cc/feed'}, {name:'无名', url:'https://wuminboke.site/', rss:'https://wuminboke.site/feed'}, {name:'索玛', url:'https://suo.ma/', rss:'https://suo.ma/rss.xml'}, {name:'何权洪', url:'https://www.hequanhong.cn/', rss:'https://www.hequanhong.cn/feed'}, {name:'逆鳞笔记', url:'https://nilin.cc/', rss:'https://nilin.cc/feed'}, {name:'大方', url:'https://blog.mmp.cc/', rss:'https://blog.mmp.cc/feed'}, {name:'倾城于你', url:'https://qninq.cn', rss:'https://qninq.cn/feed'}, {name:'姓王者', url:'https://xingwangzhe.fun/', rss:'https://xingwangzhe.fun/rss.xml'}, {name:'程序猿', url:'https://hskun.com/', rss:'https://hskun.com/feed'}, {name:'Evan\'s Space', url:'https://www.evan.xin/', rss:'https://www.evan.xin/feed'}, {name:'言语', url:'https://www.yan.ink/', rss:'https://www.yan.ink/feed'}, {name:'旺东', url:'https://wang618.cn/', rss:'https://wang618.cn/feed'}, {name:'小鸽志', url:'https://www.xiaoge.org/', rss:'https://www.xiaoge.org/feed'}, {name:'ImQi1', url:'https://imqi1.com/', rss:'https://imqi1.com/feed'}, {name:'奶狗', url:'https://www.naigou.cn/blog', rss:'https://www.naigou.cn/feed'}, {name:'三叔', url:'https://www.sanshu.cn/', rss:'https://www.sanshu.cn/feed'}, {name:'谈杂思漫', url:'https://misc.zz.ac/', rss:'https://misc.zz.ac/feed'}, {name:'DandyAPI', url:'https://blog.dandyapi.com/', rss:'https://blog.dandyapi.com/feed'}, {name:'黄建春', url:'https://www.huangjianchun.cn/', rss:'https://www.huangjianchun.cn/feed'}, {name:'二叉树树', url:'https://2x.nz/', rss:'https://2x.nz/feed'}, {name:'Sun', url:'https://blog.csun.site/', rss:'https://blog.csun.site/feed'}, {name:'Runoneall', url:'https://blog.oneall.eu.org/', rss:'https://blog.oneall.eu.org/feed'}  , {name:'敲代码的卡卡罗特', url:'https://blog.share888.top/', rss:'https://blog.share888.top/feed'}  , {name:'大军自由赚', url:'https://ieearn.com/', rss:'https://ieearn.com/feed/'} , {name:'Chongxi', url:'https://xice.cx/', rss:'https://xice.cx/atom.xml'} , {name:'科技lion', url:'https://blog.kejilion.pro/', rss:'https://blog.kejilion.pro/feed'}    , {name:'团团生活志', url:'https://t-t.live/', rss:'https://t-t.live/rss.xml'} , {name:'刘郎阁', url:'https://vjo.cc/', rss:'https://vjo.cc/feed/'}  , {name:'爱吃猫的鱼', url:'https://blog.talen.top/', rss:'https://blog.talen.top/atom.xml'}  , {name:'Chongxi', url:'https://xice.cx/', rss:'https://xice.cx/atom.xml'}   , {name:'xgclevo', url:'https://blog.xgclevo.top/', rss:'https://blog.xgclevo.top/atom.xml'}   , {name:'阿尔', url:'https://blog.algieba12.cn/', rss:'https://blog.algieba12.cn/atom.xml'}     ],
					// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '25': [{name:'巴适小馨', url:'http://p4z.cn/', rss:'http://p4z.cn/feed'}, {name:'礼印外盒', url:'https://liyinwaihe.com/', rss:'https://liyinwaihe.com/feed'}, {name:'Gavin', url:'https://sji.cc/', rss:'https://sji.cc/feed'}, {name:'N', url:'https://nmsl.cn/', rss:'https://nmsl.cn/feed'}, {name:'极客星球网', url:'https://www.wvn.cn', rss:'https://www.wvn.cn/feed'}, {name:'王先生', url:'https://www.wangxiansheng.com/', rss:'https://www.wangxiansheng.com/feed'}, {name:'Clark', url:'https://clarkf.site/zh/blog', rss:'https://clarkf.site/feed'}, {name:'青萍', url:'https://blog.lusyoe.com/', rss:'https://blog.lusyoe.com/feed'}, {name:'我的窝', url:'https://hl.xo.je/', rss:'https://hl.xo.je/feed'}, {name:'心记', url:'https://blog.moodlog.cn/', rss:'https://blog.moodlog.cn/feed'}, {name:'落花雨记', url:'https://www.luohuayu.cn/', rss:'https://www.luohuayu.cn/feed'}, {name:'绝非善类', url:'https://6angel.com/', rss:'https://6angel.com/feed'}, {name:'左手平凡', url:'https://blog.perass.com/', rss:'https://blog.perass.com/feed'}, {name:'道言', url:'https://lhn.wang/', rss:'https://lhn.wang/feed'} , {name:'吴明辉', url:'http://wuminghui.cn/', rss:'http://wuminghui.cn/feed'}  , {name:'左手平凡', url:'https://blog.perass.com/', rss:'https://blog.perass.com/feed'}   , {name:'Marcus', url:'https://immarcus.com/blog/', rss:'https://immarcus.com/blog/rss.xml'}    , {name:'桃子味', url:'https://www.taoziwei.com/', rss:'https://www.taoziwei.com/feed/'}   ],
					// ==================== 复制方便    , {name:'', url:'', rss:''}     ====================

    '26': [{name:'华立', url:'https://www.renhuali.cn/', rss:'https://www.renhuali.cn/api/rss'}, {name:'悦已', url:'https://yueji.org/', rss:'https://yueji.org/feed'}, {name:'麦子的思绪', url:'https://mzdsx.com/', rss:'https://mzdsx.com/feed/'} , {name:'一万先生', url:'https://mryvan.com/', rss:'https://mryvan.com/rss.xml'} , {name:'寻生纪', url:'https://www.iseeklife.com/', rss:'https://www.iseeklife.com/feed'}   , {name:'Sam', url:'https://blog.acidbunny.cn/', rss:'https://blog.acidbunny.cn/feed'}    , {name:'周阿源', url:'https://zhouayuan.com/', rss:'https://zhouayuan.com/feed.php'}    , {name:'妄司逸', url:'https://blog.flechazo.icu/', rss:'https://blog.flechazo.icu/atom.xml'}      , {name:'JiuLiu', url:'https://myblog.icu/', rss:'https://api.myblog.icu/api/public/rss'}  , {name:'安迪', url:'https://i55.top/', rss:'https://i55.top/feed/'}  , {name:'远山默立', url:'https://cmypage.com/', rss:'https://cmypage.com/feed/'}   , {name:'一个博客', url:'https://yigeboke.com/', rss:'https://yigeboke.com/rss.php'} , {name:'LiMhy', url:'https://i.lilog.cn/', rss:'https://i.lilog.cn/feed'}     ]
};


// ==================== 论坛数据 , {name:'', url:''}    , {name:'', url:'', rss:''}      ====================
const forumData = {
    '91': [{name:'中国惠多网', url:'https://www.cfido.com/'}],
    '95': [{name:'水木社区', url:'https://www.newsmth.net/'}],
    '99': [{name:'仪器社区', url:'https://bbs.instrument.com.cn/'} , {name:'天涯', url:'https://tianya.net/'}],
    '00': [{name:'免费吧', url:'https://www.free8.net/forum.php'}, {name:'蜂鸟摄影论坛', url:'https://bbs.fengniao.com/'}, {name:'色影无忌摄影论坛', url:'https://forum.xitek.com/'}, {name:'凯迪猫眼社区', url:'https://www.9kd.com/community'}, {name:'看雪论坛', url:'https://bbs.kanxue.com/'}],
    '01': [{name:'落伍者', url:'https://www.im286.net/'}, {name:'小木虫', url:'https://muchong.com/bbs/'}, {name:'金光论坛', url:'https://jglt.net/'}, {name:'福步外贸论坛', url:'https://bbs.fobshanghai.com/'}, {name:'无忧启动', url:'https://wuyou.net/'} , {name:'ifixit维修社区', url:'https://ifixit.com/'}],
    '02': [{name:'nga', url:'https://bbs.nga.cn/'}, {name:'理想论坛', url:'https://www.55188.com/'}],
    '03': [{name:'鳥哥的Linux私房菜', url:'https://phorum.vbird.org/index.php'}, {name:'NamePros', url:'https://www.namepros.com/'}, {name:' ', url:''}, {name:' ', url:''}],
    '04': [{name:'其乐', url:'https://keylol.com/'}, {name:'虎扑', url:'https://bbs.hupu.com/'}, {name:'海川化工', url:'https://bbs.hcbbs.com/'}, {name:'中国龙珠论坛', url:'https://bbs.dragonballcn.com/'} ],
	'05': [{name:'reddit', url:'aHR0cHM6Ly93d3cucmVkZGl0LmNvbS8%3D'}],
    '06': [{name:'迅维', url:'https://www.chinafix.com/forum.php'}, {name:'飞卢', url:'https://bbs.faloo.com/'}, {name:'煎蛋', url:'https://jandan.net/bbs'}, {name:'绝客', url:'https://jkmrp.com/'}],
    '07': [{name:'chiphell', url:'https://www.chiphell.com/forum.php'}, {name:'矿石收音机', url:'http://www.crystalradio.cn/forum.php'}  , {name:'广告中国', url:'https://www.advertcn.com/'}   ],
    '08': [{name:'hostloc', url:'https://hostloc.com/'}, {name:'吾爱破解', url:'https://www.52pojie.cn/index.php'}],
    '09': [{name:'北邮人论坛', url:'https://bbs.byr.cn/'}, {name:'Ruby中文社区', url:'https://ruby-china.org/'}, {name:'w3ctech前端技术社区', url:'https://w3ctech.com/'} ],
    '10': [{name:'v2ex', url:'https://www.v2ex.com/'}],
    '11': [{name:'王牌技术员联盟', url:'https://wangpai.2345.cn/'}, {name:'cnodejs', url:'https://cnodejs.org/'}, {name:'思否', url:'https://segmentfault.com/'}],
    '12': [{name:'顶渲论坛', url:'https://www.toprender.com/forum.php'}, {name:'UG爱好者', url:'https://www.ugsnx.com/forum.php'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '13': [{name:'虫部落', url:'https://www.chongbuluo.com/'}],
    '14': [{name:'过早客', url:'https://www.guozaoke.com/'}, {name:'learnku', url:'https://learnku.com/'}],
    '15': [{name:'超理', url:'https://chaoli.club/'}, {name:'什么值得买社区', url:'https://post.smzdm.com/'}],
    '16': [{name:'小众软件论坛', url:'https://meta.appinn.net/'}],
	'17': [{name:'4414', url:'https://www.4414.cn/'}],
    '18': [{name:'0xffff', url:'https://0xffff.one/'}  , {name:'腾讯开发者社区', url:'https://cloud.tencent.com/developer'} , {name:'wap0816y站长论坛', url:'http://wap.0816y.com/'}  ],
    '19': [{name:'代码厨房社区', url:'https://codekitchen.community/'}, {name:'w2solo独立开发者社区', url:'https://w2solo.com/'}],
    '20': [{name:'大佬论坛☑️',url:'https://www.dalao.net/', desc:'认证:大佬论坛daolao.net-域名站长论坛'}, {name:'Mergeek产品爱好者社区', url:'https://www.mergeek.com/'}],
    '21': [{name:'obsidian', url:'https://forum-zh.obsidian.md/'}, {name:'2号站长网', url:'https://www.zz2zz.com/circle/'}],
    '22': [{name:'个站论坛', url:'https://storeweb.cn/forum'}, {name:'nodeseek', url:'https://www.nodeseek.com/'}, {name:'云盘135论坛', url:'http://www.yunpan135.com/'}],
    '23': [{name:'nodeloc', url:'https://www.nodeloc.com/'}, {name:'linux do', url:'https://linux.do/'}, {name:'hifiti', url:'https://hifiti.com/'}],
    '24': [{name:'科技LION社区', url:'https://bbs.kejilion.pro/'}, {name:'编程导航社区', url:'https://www.codefather.cn/'}, {name:'邮箱论坛', url:'https://bbs.emailhouse.cn/'}],
    '25': [ {name:'博客录论坛', url:'https://boke.lu/forums'},  {name:'劳动者论坛', url:'https://www.laodongzhe.cn'},{name:'2libra', url:'https://2libra.com/'}],
    '26': [{name:'摸鱼论坛', url:'https://mylt.net/'}, {name:'mjjzz', url:'https://www.mjjzz.com/'}, {name:'博客之家论坛', url:'https://52blog.cn/'}, {name:'侠客岛', url:'https://bbs.hk0.cc/'},  {name:'blog.do', url:'https://bbs.blog.do/'}, {name:'jiza', url:'https://jiza.net'}  , {name:'middlefun', url:'https://www.middlefun.com/'}   , {name:'260站长论坛', url:'https://www.260.cn/'} ]
};

// ==================== 博客大全导航数据  , {name:'', url:''}  ====================
const blogNavData = {
   // = '06': [{name:'博客志-http://www.jetli.com.cn/网址打不开', url:''}], ===
	'09': [{name:'松松博客大全', url:'https://daohang.lusongsong.com/webdir.html'} , {name:'nownownow', url:'https://nownownow.com/'}],
    '14': [{name:'rssblog', url:'https://rssblog.imcbc.cn/member/'}, {name:'feedspot-bloggers', url:'https://bloggers.feedspot.com/'}],
    '16': [{name:'个站商店', url:'https://storeweb.cn/'}],
    '17': [{name:'十年之约', url:'https://www.foreverblog.cn/'}, {name:'jekyll wiki', url:'https://github.com/jekyll/jekyll/wiki/Sites'} ],
    '20': [{name:'BlogFinder', url:'https://bf.zzxworld.com/s'},{name:'ʕ•ᴥ•ʔ熊', url:'https://bearblog.dev/discover/'}    ],
  	// ==================== 复制方便    , {name:'', url:''}   ====================

  '21': [{name:'博客圈', url:'https://bokequan.cn/boke'}, {name:'Ye Olde Blogroll', url:'https://blogroll.org/'} , {name:'翻一会', url:'https://fanyihui.net/'}],
  	// ==================== 复制方便    , {name:'', url:''}   ====================

  '22': [{name:'集博栈', url:'https://www.zhblogs.net/'}, {name:'中文博客琅琊榜', url:'https://github.com/qianguyihao/blog-list/'}],
   	// ==================== 复制方便    , {name:'', url:''}   ====================

   '23': [{name:'博友圈', url:'https://www.boyouquan.com/blogs'}, {name:'博客录', url:'https://boke.lu/'}, {name:'笔墨迹', url:'https://blogscn.fun/'}],
   	// ==================== 复制方便    , {name:'', url:''}   ====================

   '24': [{name:'劳动者独立技术博客志', url:'https://laodongzhe.cn/'}, {name:'blogsclub', url:'https://www.blogsclub.org/members.html'}, {name:'浪海导航', url:'https://www.langhai.net/'}, {name:'博客说', url:'https://blogtalk.org/blogs'}, {name:'蛋卷box技术博客收集', url:'https://dogerolls.com/'}, {name:'webteleporter', url:'https://webteleporter.top/list'}, {name:'开往成员列表', url:'https://list.travellings.cn/'}, {name:'morerss', url:'https://www.morerss.com/'}, {name:'findblog ', url:'https://www.findblog.net/'}, {name:' ', url:''}, {name:' ', url:''}],
	// ==================== 复制方便    , {name:'', url:''}   ====================

    '25': [ {name:'博客联盟', url:'https://www.bokelianmeng.com/'}, {name:'博客星球', url:'https://blogplanet.cn/'}, {name:'博客集', url:'https://bloginc.cn/'}, {name:'hot166博客导航', url:'https://hot166.com/blogger'}, {name:'无聊湾', url:'https://boringbay.com/'}, {name:'BOZHU.LINK', url:'https://blogger.toocool.cc/'}, {name:'朋.友', url:'https://peng.you/'},{name:'BlogHub-BKQ', url:'https://bkq.net.cn/'},{name:'博客中心', url:'https://bokehub.com/home'},{name:'部落卷卷', url:'https://blogblog.club/blogrollroll'},{name:'BlogRoll-notion', url:'https://blogroll.notion.site/'}, {name:'博客之家', url:'https://www.perass.com/'}, {name:'时光链', url:'http://www.leow.cn/link/'}, {name:'BlogDo博客导航大全', url:'https://www.blog.do/'} , {name:'博客星球', url:'https://www.blogplanet.cn/'}  , {name:'xinaliu博客导航', url:'http://www.xinaliu.com/'}   , {name:'三年之约', url:'https://www.snzy.cc/'}  ],
  	// ==================== 复制方便    , {name:'', url:''}   ====================

  '26': [{name:'若梦博客', url:'http://www.rmbk.cc/'}, {name:'有个站', url:'https://www.ygz.ink/'}, {name:'大佬论坛摸鱼', url:'https://www.dalao.net/index-1-2.htm'}, {name:'好站网', url:'https://haozhan.wang/'}  , {name:'博客圈子', url:'https://bkqz.cn/'}  , {name:'聚合文摘', url:'https://juhewenzhai.com/'}  , {name:'utc8times博客俱乐部', url:'https://utc8times.elsetech.app/'}   , {name:'你来了', url:'https://nilai.la/'}   , {name:'博客集市', url:'https://cnb.cool/Blog_Bazaar'}    , {name:'兰亭序博客联盟', url:'https://lanti.ng/'}       ]
};

// ==================== 随机访问博客数据    , {name:'', url:''}   ====================
const randomBlogData = {
    '20': [{name:'开往', url:'https://www.travellings.cn/go.html'}],
    '21': [{name:'十年之约虫洞', url:'https://foreverblog.cn/go.html'}],
    '23': [{name:'博客路随机博客', url:'https://boke.lu/sj/'}],
    '24': [{name:'blogsclub空间穿梭', url:'https://www.blogsclub.org/go'}],
    '25': [{name:'晓梦羊博客集友谊之桥', url:'https://bloginc.cn/go.html'}, {name:'独立博客传送门', url:'https://webteleporter.top/'}, {name:'揪蝉', url:'https://www.jiuchan.org/'}, {name:'漫游', url:'https://blogger.toocool.cc/manyou'}],
	'26': [{name:'筋斗-劳动者随机博客', url:'https://laodongzhe.cn/goto.htm'}],
};

// ==================== 博客程序数据 ====================
const blogProgramData = {
    '03': [{name:'wordpress', url:'https://cn.wordpress.org/'}],
    '05': [{name:'zblog', url:'https://www.zblogcn.com/'}],
    '06': [{name:'typecho', url:'https://typecho.org/'}],
    '14': [{name:'TaoBlog', url:'https://blog.twofei.com/blog'}],
    '21': [{name:'清雨', url:'https://prain.cn/'}],
    '25': [{name:'serenade', url:'https://dyedd.cn/posts/serenade'}],
	  '26': [{name:'MYBLOG博客网站项目', url:'https://github.com/DCSCDF'}  , {name:'FlecBlog', url:'https://github.com/talen8/FlecBlog'} ]
};

// ==================== AI导航数据                   , {name:'', url:''}       ====================
const aiNavData = {
    '21': [{name:'AInav人工智能导航', url:'https://www.ainav.cn/'}],
    '23': [{name:'深度AI导航', url:'https://www.deepdhai.com/'}, {name:'2345ai导航', url:'https://ai.2345.com/'}, {name:'tools-ai', url:'https://www.tools-ai.cn/'}, {name:'aibase', url:'https://top.aibase.com/'}, {name:'xiaobiuAI导航', url:'https://www.xiaobiu.cn/'}, {name:'非猪ai导航', url:'https://feizhuke.com/'}, {name:'aitobox', url:'https://aitobox.cn/nav/'}, {name:'AI技术导航', url:'https://www.codernav.cn/ai'}, {name:'aitoolbox', url:'https://aitoolbox.cn/'}, {name:'ai-toolbox net', url:'https://www.ai-toolbox.net/'}, {name:'零沫AI', url:'https://0mo.com/'}, {name:'ailookme', url:'https://www.ailookme.com/'}, {name:'ainavpro', url:'https://www.ainavpro.com/'}, {name:'易之网AI', url:'https://www.yizz.cn/'}, {name:'ai138', url:'https://www.ai138.com/'}],
    '24': [{name:'秒开导航', url:'https://www.mkdh.cn/'}, {name:'趣玩AI导航', url:'https://www.7wan.com.cn/'}, {name:'终极AI导航', url:'https://ai.zjnav.com/'}, {name:'AI001工具导航', url:'https://www.ai001.com/'}, {name:'AI派', url:'https://www.aipie.top/home'}, {name:'AI吧', url:'https://ai-bar.cn/'}, {name:'AI一站通', url:'https://www.aiyzt.com/'}, {name:'meoai', url:'https://www.meoai.net/'}, {name:'热卡卡AI导航', url:'http://www.aidh.cn/'}, {name:'aittdh', url:'https://ai.ttdh.cn/favorites/gn'}, {name:'aiaiv', url:'https://aiaiv.cn/'}, {name:'懂AI', url:'https://www.dongaigc.com/nav'}, {name:'AI设计导航', url:'https://aiiiii.com.cn/'}, {name:'hui-ai', url:'https://www.hui-ai.cn/'}, {name:'aiopenminds', url:'https://www.aiopenminds.com/common'}, {name:'霂明AI导航', url:'https://n.mumingfang.com/ai'}, {name:'图钉ai', url:'https://www.tudingai.com/'}, {name:'xinfangs-Ai工具箱', url:'https://ai.xinfangs.com/'}, {name:'aitool8', url:'https://aitool8.com/'}, {name:'千库AI导航', url:'https://kubao.588tool.com/'}, {name:'尘埃AI', url:'https://www.chenai.com/category.html'}],
    '25': [{name:'AI工具集导航', url:'https://ai-bot.cn/'}, {name:'AI导航站', url:'https://ai-nav.net/'}, {name:'AI导航', url:'https://aidh.net/'}, {name:'AI神器榜·脑榜', url:'https://www.naobang.com/'}, {name:'Toolify', url:'https://www.toolify.ai/zh/'}, {name:'aihub', url:'https://www.aihub.cn/'}, {name:'aigc', url:'https://www.aigc.cn/'}, {name:'发现AI', url:'https://www.faxianai.com/'}, {name:'360AI导航', url:'https://ai.hao.360.com/'}, {name:'AI神器', url:'https://aishenqi.net/'}, {name:'AI工具箱', url:'https://ai-kit.cn/'}, {name:'2ai', url:'https://www.2ai.cn/'}, {name:'墨鱼', url:'https://www.moyuxx.com/'}, {name:'爱搜AI导航站', url:'https://aiso.space/'}, {name:'AIG123-AI工具导航', url:'https://www.aig123.com/'}, {name:'aitools', url:'https://aitools.fyi/zh'}, {name:'AMZ123', url:'https://www.amz123.com/ai'}, {name:'优设AI导航', url:'https://hao.uisdc.com/ai/'}, {name:'得到AI学习圈工具箱', url:'https://aitools.dedao.cn/'}, {name:'猫目', url:'https://maomu.com/'}, {name:'openi', url:'https://openi.cn/'}, {name:'Ai集思', url:'https://www.thinkinginai.cn/'}, {name:'ai云导航', url:'https://ai.yunwz.net/'}, {name:'botlib AI导航', url:'https://botlib.cn/'}, {name:'AI工具', url:'https://www.aigongjuji.com.cn/'}, {name:'果果ai', url:'https://www.gogoai.com/'}, {name:'智研社AI导航', url:'https://www.ai-blog.cn/site'}, {name:'toolifyai', url:'https://toolifyai.cn/'}, {name:'2345ai', url:'https://www.2345ai.com/'}],
    '26': [{name:'AI收录网', url:'https://www.aislw.com/'}]
};

// ==================== 特色网址导航数据    , {name:'', url:''}     ====================
const featuredNavData = {
    '00': [{name:'5566精彩网址', url:'https://5566.org/'}], 
	'06': [{name:'香港網IM123', url:'https://im123.com/'}, {name:'world68世界各国网址大全', url:'https://www.world68.com/'}],
    '08': [{name:'开源软件分类导航', url:'https://www.oschina.net/project/tags'}],
    '09': [{name:'海外导航', url:'https://www.hhlink.com/'}, {name:'有趣网址之家', url:'https://youquhome.com/'}, {name:'凤凰网财经导航', url:'https://finance.ifeng.com/partners.shtml'}],
    '10': [{name:'高考789网址导航', url:'http://www.gaokao789.com/'}, {name:'egouz国外网址大全', url:'https://www.egouz.com/'}],
    '11': [{name:'199it大数据导航', url:'https://hao.199it.com/'}, {name:'pm265产品经理导航', url:'https://www.pm265.com/'}],
    '12': [{name:'雪球财经网址导航', url:'https://xueqiu.com/dh'}, {name:'jyshare菜鸟开发设计工具大全', url:'https://www.jyshare.com/'}],
    '13': [{name:'优设导航', url:'https://hao.uisdc.com/'}, {name:'HUI前端网址导航', url:'http://www.h-ui.net/site.shtml'}, {name:'红歌会网址导航', url:'https://hao.szhgh.com/'}],
    '14': [{name:'1纳米学习导航', url:'http://1nami.com/'}, {name:'知筑导航', url:'http://www.archi123.com/#/archi'}],
    '15': [{name:'设计导航', url:'https://hao.shejidaren.com/'}, {name:'萌导航', url:'https://www.moe48.com/'}, {name:'料网外贸导航', url:'https://www.liaosam.com/go/'}],
    '16': [{name:'虫部落快搜', url:'https://search.chongbuluo.com/'}, {name:'虫部落学术搜索', url:'https://scholar.chongbuluo.com/'}, {name:'创造狮创意工作者导航', url:'https://chuangzaoshi.com/'}, {name:'AMZ123跨境导航', url:'https://www.amz123.com/'}],
    '17': [{name:'allsaas应用导航', url:'https://www.allsaas.cn/'}, {name:'creativemass创意导航', url:'https://creativemass.cn/'}, {name:'善其事运营导航', url:'https://www.shanqishi.com/'}, {name:'木虫学术导航', url:'https://hao.muchong.com/'}, {name:'北邮人导航', url:'https://byr-navi.com/'}, {name:'黑客之门', url:'https://www.hackerdoor.com/'}],
    '18': [{name:'三顿PPT导航', url:'https://www.sandunppt.com/'}],
    '19': [{name:'考拉新媒体导航', url:'https://www.kaolamedia.com/'}, {name:'91搜图导航', url:'https://www.91sotu.com/'}, {name:'addog广告人导航', url:'https://www.addog.vip/'}, {name:'媒帮派', url:'https://123.meibp.com/'}],
    '20': [{name:'资源帝电子书导航', url:'https://shu.ziyuandi.cn/'}, {name:'SciHub学术导航', url:'https://www.scihub.net.cn/'}, {name:'学吧导航', url:'https://www.xue8nav.com/'}, {name:'广告没门广告人导航', url:'https://adnodoor.com/nav/'}, {name:'pickfree', url:'https://www.pickfree.cn/'}],
    '21': [{name:'drugx药研导航', url:'https://drugx.cn/'}, {name:'cns学术导航', url:'https://cnspub.com/'}, {name:'CXY521程序员导航', url:'http://cxy521.com/'}, {name:'果壳任意门', url:'https://gate.guohere.com/'}, {name:'程序员盒子', url:'https://www.coderutil.com/'}, {name:'办公人导航', url:'https://www.bgrdh.com/'}, {name:'甲方叭叭设计导航', url:'https://jiafangbb.com/'}   , {name:'一对123教学工具导航', url:'https://edui123.com/'}    ],
    '22': [{name:'法律时代·导航', url:'https://yesen.cn/'}  , {name:'宅仓库', url:'https://www.zhaicangku.com/'}  ],
    '23': [{name:'影视宝藏导航', url:'https://tv.baozangdh.com/'}, {name:'OSLAW', url:'https://www.oslaw.cn/site-nav'}, {name:'科技lion导航', url:'https://dh.kejilion.pro/'}],
    '24': [{name:'二次元宝藏导航', url:'https://acg.baozangdh.com/'}, {name:'资源帝VR导航', url:'https://vr.ziyuandi.cn/'}, {name:'mjj网址导航', url:'http://www.mjj.vip/'} , {name:'卡卡罗特导航', url:'https://blog.share888.top/nav/'}  ],
    '25': [{name:'猫步求职导航', url:'https://nav.maobucv.com/'},  {name:'图标西西', url:'https://icon.cc/'}],
	'26': [{name:'松松导航', url:'https://daohang.lusongsong.com/'} , {name:'联名导航网', url:'http://unionname.cn/'} , {name:'鹅毛导航', url:'https://www.iemao.com/'}  , {name:'官网大全', url:'https://gwdir.com/'}        ],
};

// ==================== 工具导航数据    , {name:'', url:''}    ====================
const toolNavData = {
   '96': [{name:'Internet Archive', url:'https://archive.org/'}],
    '07': [{name:'蛙蛙工具', url:'https://www.iamwawa.cn/'}],
	  '08': [{name:'github', url:'https://github.com/'}],
	  '10': [{name:'imgbun文本转图片', url:'https://imgbun.com/'}],
	  '12': [{name:'archive.today', url:'https://archive.ph/'}],
    '13': [{name:'trustasia证书在线工具集', url:'https://www.trustasia.com/tools'}],
    '14': [{name:'创可贴', url:'https://www.chuangkit.com/'}],
    '16': [{name:'万能计算器', url:'https://www.omnicalculator.com/'}],
    '17': [{name:'奶牛快传', url:'https://cowtransfer.com/'}, {name:'孟坤工具', url:'https://tool.mkblog.cn/'}],
    '18': [{name:'airportal空投快传', url:'https://www.airportal.cn/'}, {name:'remove抠图', url:'https://www.remove.bg/zh'}],
    '19': [{name:'docsmall', url:'https://docsmall.com/'}, {name:'效率工具', url:'https://blog.luckly-mjw.cn/tool-show/index.html'}, {name:'m3u8视频提取', url:'http://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html'}, {name:'橘子seo网站历史等', url:'https://seo.juziseo.com/'}, {name:'emojiall', url:'https://www.emojiall.com/'}  ],
    '20': [{name:'白描', url:'https://web.baimiaoapp.com/'}],
    '21': [{name:'美图秀秀在线版', url:'https://pc.meitu.com/toolbox'}],
    '22': [{name:'迅捷Markdown', url:'https://markdown.liuchengtu.com/'}, {name:'imathtool公式编辑器', url:'https://www.imathtool.com/'}, {name:'屏幕录制', url:'https://utils.fun/screen-record'}],
    '23': [{name:'okmiku', url:'https://okmiku.com/'}, {name:'TextIn Tools免费OCR工具', url:'https://tools.textin.com/'}, {name:'myfreemp3', url:'https://www.myfreemp3.com.cn/'}],
    '24': [{name:'iping', url:'https://www.iping.cc/'}],
    '25': [{name:'base64', url:'https://www.base64.sh/zh-Hans/'}, {name:'二𫈉转换', url:'https://ejz.is-an.org/'}, {name:'30万财务', url:'https://300000.cn/'}, {name:'apples ai工具推荐', url:'https://apples.cn/'}],
	 '26': [{name:'base64-URL‑safe ', url:'https://laodongzhe.cn/tools/base64-tool.html'}]
};

// ==================== 工具箱导航数据 ====================
const toolboxData = {
    '06': [{name:'chinaz站长工具', url:'https://tool.chinaz.com/'}],
    '07': [{name:'蛙蛙工具', url:'https://www.iamwawa.cn/'}, {name:'脚本之家在线工具', url:'https://tools.jb51.net/'}, {name:'百度统计', url:'https://tongji.baidu.com/'} ],
    '12': [{name:'tool lu在线工具', url:'https://tool.lu/'}],
    '13': [{name:'oschina工具', url:'https://tool.oschina.net/'}, {name:'trustasia证书在线工具集', url:'https://www.trustasia.com/tools'}],
    '14': [{name:'5118关键词工具', url:'https://www.5118.com/'}],
	'15': [{name:'爱资料工具', url:'https://www.toolnb.com/'}],
    '19': [{name:'docsmall', url:'https://docsmall.com/'}],
    '20': [{name:'uu在线工具', url:'https://uutool.cn/'}],
    '22': [{name:'工具哇', url:'https://toolwa.com/'}, {name:'p2hp程序员工具', url:'https://tool.p2hp.com/'}],
    '23': [{name:'精准云工具', url:'https://tool.caoniang.com/'}, {name:'千图工具', url:'https://1000tool.com/'}, {name:'okmiku', url:'https://okmiku.com/'}],
    '24': [{name:'46啦工具', url:'https://www.46.la/'}, {name:'V3在线工具', url:'http://www.v3ol.com/'}, {name:'AI图片变清晰等处理', url:'https://imgupscaler.ai/zh/photo-enhancer/'},{name:'', url:' '},{name:'', url:''},{name:'', url:' '}],
    '25': [{name:'魔方工具', url:'https://www.mofangtool.com/'}, {name:'tcp-mk工具箱', url:'https://tcp.mk/'}],
	 '26': [{name:'劳动者工具箱', url:'https://laodongzhe.cn/tools/'}]
};

// ==================== whois导航数据 , {name:'', url:''}   ====================
const whoisData = {
    '23': [{name:'who.cx', url:'https://who.cx/'}],
    '25': [{name:'w.is whois', url:'https://w.is/'}],
    '26': [{name:'hu.is', url:'https://hu.is/'}]
};

// ==================== 邮箱导航数据 ====================
const emailData = {
    '97': [{name:'163邮箱', url:'https://mail.163.com/'}],
    '02': [{name:'qq邮箱', url:'https://mail.qq.com/'}],
    '03': [{name:'126邮箱', url:'https://mail.126.com/'}],   
    '07': [{name:'yeah邮箱', url:'https://mail.yeah.net/'}],
    '10': [{name:'腾讯企业邮', url:'https://exmail.qq.com/login'}]
};

// ==================== 官方博客导航   , {name:'', url:''} ====================
const officialblogdata = {
	'07': [{name:'阿里巴巴国际站设计', url:'https://www.aliued.com/'}],
	'10': [{name:'cloudflare博客', url:'https://blog.cloudflare.com/'}],
	'11': [{name:'腾讯全端', url:'http://www.alloyteam.com/'}],
	'13': [{name:'美团技术团队', url:'https://tech.meituan.com/'}, {name:'有道技术博客', url:'https://techblog.youdao.com/'} ],
	'14': [{name:'阿里淘系技术', url:'https://blog.csdn.net/Taobaojishu'}      , {name:'Elastic 中国社区博客', url:'https://elasticstack.blog.csdn.net/'}     , {name:'亚马逊AWS博客', url:'https://aws.amazon.com/blogs/aws/'}   , {name:'菠萝阁-Z-Blog官方博客', url:'https://blog.zblogcn.com/'}       ],
	'15': [{name:'有赞技术团队', url:'https://tech.youzan.com/'}],
	'16': [ {name:'华为云开发者联盟', url:'https://blog.csdn.net/devcloud'}   , {name:'京东用户体验设计部 凹凸实验室', url:'https://aotu.io/'}, {name:'debug蚊子博客', url:'https://blog.debug.com/'} ],
	'17': [{name:'字节跳动技术团队', url:'https://blog.csdn.net/ByteDanceTech'}   , {name:'腾讯技术工程', url:'https://blog.csdn.net/Tencent_TEG'}  , {name:'闲鱼技术', url:'https://blog.csdn.net/weixin_38912070'}  , {name:'饿了么大前端', url:'https://www.zhihu.com/people/elemefe'}   , {name:'uber blog', url:'https://www.uber.com/blog/'}    ],
	'18': [{name:'小米信息部技术团队', url:'https://xiaomi-info.github.io/'}  , {name:'tensorflow博客', url:'https://blog.tensorflow.org/'}     ],
	'19': [{name:'滴滴技术', url:'https://blog.csdn.net/DiDi_Tech'} , {name:'IBM开发者博客', url:'https://developer.ibm.com/blogs/'}  , {name:'百度fex', url:'https://fex-team.github.io/'}  , {name:'Microsoft开发者博客', url:'https://devblogs.microsoft.com/'}    ],
	'20': [{name:'archive-is博客', url:'https://archive-is.tumblr.com/'}],
	'21': [{name:'cloudflare中文博客', url:'https://blog.cloudflare.com/zh-cn/'}     , {name:'HarmonyOS SDK', url:'https://blog.csdn.net/HUAWEI_HMSCore'}   ],

    '22': [{name:'kaqi官方博客', url:'https://blog.kagi.com/'}],
	 '23': [{name:'MDN博客', url:'https://developer.mozilla.org/en-US/blog/'}],
	 '25': [{name:'小米mimo博客', url:'https://mimo.xiaomi.com/zh/index#blog'}],
	  '26': [{name:'slax博客', url:'https://slax.com/zh-Hans/blog/'}]
};

// ==================== 付费博客导航    , {name:'', url:''}     ====================
const paidBlogData = {
    '20': [{name:'happyxiao', url:'https://happyxiao.com/'}]
};

// ==================== 下载网站导航    , {name:'', url:''}     ====================
const downwebData = {
	 '13': [{name:'中国科学技术大学开源软件镜像', url:'https://mirrors.ustc.edu.cn/'}],
    '13': [{name:'清华大学开源软件镜像站', url:'https://mirror.tuna.tsinghua.edu.cn/'}]
};

// ==================== 教程文档导航 ====================
const guidedata = {
    '04': [{name:'MDN Web Docs', url:'https://developer.mozilla.org/'}],
	'06': [{name:'w3school', url:'https://www.w3school.com.cn/'}],
	 '15': [{name:'菜鸟教程', url:'https://www.runoob.com/'}],
	 '16': [{name:'全国农技推广网', url:'https://www.natesc.org.cn/'}],
	 '18': [{name:'印记中文-前端', url:'https://www.docschina.org/'}],
	 '24': [{name:'一亩田农业技术', url:'https://www.ymt.com/argtech'}]
};

// ==================== 游戏导航 ==================== 
const gameData = {
    '26': [{name:'2048', url:'https://laodongzhe.cn/games/2048.html'}, {name:'五子棋', url:'/games/wuziqi.html'}, {name:'中国象棋', url:'/games/xiangqi.html'}]
};
// ==================== ai人工智能     , {name:'', url:''} ====================
const aiData = {
    '23': [{name:'deepseek', url:'www.deepseek.com'},{name:'豆包', url:'https://www.doubao.com/'}, {name:'千问', url:'https://www.qianwen.com/'}],
	'24': [{name:'纳米ai', url:'http://www.n.cn'}],
	'25': [{name:'小米mimo', url:'https://aistudio.xiaomimimo.com/'}]
};

// ==================== 百科大全导航 ====================
const pediadata = {
	'01': [ {name:'ifixit维修百科', url:'https://ifixit.com/'}  ],
	'05': [{name:'快懂百科', url:'https://www.baike.com/'}],
	'06': [{name:'百度百科', url:'https://baike.baidu.com/'}],
	'08': [{name:'蓝色理想百科', url:'http://wiki.blueidea.com/'}],
    '10': [{name:'发音字典', url:'https://www.voicedic.com/'}],
    '13': [{name:'wikihow', url:'https://zh.wikihow.com/'}],
    '15': [{name:'观沧海', url:'https://www.ageeye.cn/'}   , {name:'灰机wiki', url:'https://www.huijiwiki.com/'}                 ],
    '16': [{name:'纪妖', url:'https://www.cbaigui.com/'}],
    '18': [{name:'全历史', url:'https://www.allhistory.com/'}]
};

// ==================== 搜索引擎大全导航 , {name:'', url:''}    , {name:'', url:'', desc:'' }   ====================
const SearchEngineData = {
	    '00': [{name:'百度', url:'https://www.baidu.com/'}],
	'03': [{name:'百度高级搜索', url:'https://www.baidu.com/gaoji/advanced.html'}],
	'07': [{name:'搜狗高级搜搜', url:'https://www.sogou.com/advanced/advanced.html'}],
    '09': [{name:'bing', url:'https://www.bing.com/'}],
	'12': [{name:'360搜索', url:'https://www.so.com/'}],
	'17': [{name:'wiby', url:'https://wiby.me/', desc:'个人主页搜索'}],
    '18': [{name:'kaqi', url:'https://kagi.com/'}],
	'20': [{name:'百度开发者搜索', url:'https://kaifa.baidu.com/'}],
	'24': [{name:'丑搜-博客搜索', url:'https://search.save-web.org/'}]
};

// ==================== RSS工具数据 ====================
const rssData = {
    '19': [{name:'Feedval', url:'http://cn.eonval.com/'}]
};

// ==================== 学习导航数据 ====================
const studyNavData = {    
    '09': [{name:'微博', url:'https://www.WEIBO.COM'}],
    '11': [{name:'知乎', url:'https://www.zhihu.com/'}],
    '15': [{name:'微信读书', url:'https://weread.qq.com/'}],
    '25': [{name:'劳动者技术部落', url:'http://www.laodongzhe.cn'}]
};

// ==================== 域名注册网站数据  , {name:'', url:''}  ====================
const domainRegData = {
    '99': [{name:'阿里云万网', url:'https://www.net.cn/'}, {name:'中资源', url:'https://www.zzy.com/'}, {name:'新网', url:'https://www.xinnet.com/'}, {name:'godaddy', url:'http://www.godaddy.com/'}],
    '00': [{name:'namecheap', url:'https://www.namecheap.com/'}],
    '02': [{name:'西部数码', url:'https://www.west.cn/'}, {name:'dynadot', url:'https://www.dynadot.com/zh/'}],
    '04': [{name:'三五互联', url:'https://www.35.com/'}],
    '05': [{name:'易名', url:'https://www.ename.com/'}],
    '09': [{name:'爱名网', url:'https://www.22.cn/'}, {name:'cloudflare', url:'https://www.cloudflare.com'}],
    '12': [{name:'西部数码英文站', url:'https://www.west.xyz/'}, {name:'聚名网', url:'https://www.juming.com/'}],
    '13': [{name:'趣域网', url:'https://www.quyu.net/'}],
    '14': [{name:'porkbun', url:'https://porkbun.com/'}, {name:'wordpress', url:'https://wordpress.com/zh-cn/domains/'}],
    '16': [{name:'百度智能云', url:'https://cloud.baidu.com/product/bcd.html'}],
    '18': [{name:'腾讯云', url:'https://cloud.tencent.com/product/domain'}],
    '19': [{name:'阿里云国际站', url:'https://www.alibabacloud.com/'}, {name:'spaceship', url:'https://www.spaceship.com/zh/'}],
    '20': [{name:'西部数码国际版', url:'https://www.365.hk/'}],
    '21': [{name:'gname', url:'https://www.gname.com/zhcn/'}],
    '22': [{name:'火山引擎', url:'https://www.volcengine.com/product/domain-service'}],
    '25': [{name:'宝塔', url:'https://www.bt.cn/new/domain-register.html'}]
};

// ==================== 域名工具导航数据 , {name:'', url:''}     ====================
const domainToolData = {
    '15': [{name:'tld-list域名比价', url:'https://zh-hans.tld-list.com/'}],
    '17': [{name:'玩米历史米价查询', url:'http://www.wanmi.cc/'}],
    '20': [{name:'哪煮米', url:'https://www.nazhumi.com/'}],
    '21': [{name:'可备域名后缀查询', url:'https://domain.miit.gov.cn/chinayu.jsp'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '23': [{name:'who.cx', url:'https://who.cx/'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '25': [{name:'w.is whois', url:'https://w.is/'} , {name:'米情局', url:'https://miqingju.com/'}   ],
    '26': [{name:'hu.is', url:'https://hu.is/'},{name:'sanpin域管家', url:'https://sanpin.ltd'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}]
};

// ==================== 随机访问网站数据 ====================
const randomSiteData = {
    '25': [{name:'有趣网址之家-随机趣站', url:'https://youquhome.com/random/'}]
};

// ==================== RSS文案合集（从 blogYearsData 自动生成） ====================
// 注意：这段代码必须放在 categories 定义之前！

// 生成 RSS 扁平化数据（用于主页分类显示）
const rssFlatList = (function() {
    const items = [];
    for (const year in blogYearsData) {
        const yearBlogs = blogYearsData[year];
        if (!Array.isArray(yearBlogs)) continue;
        
        for (const blog of yearBlogs) {
            if (blog.url && blog.url.trim() && blog.name && blog.name.trim()) {
                // 处理 URL，提取真实地址
                let cleanUrl = blog.url;
                if (cleanUrl.startsWith('')) {
                    cleanUrl = cleanUrl.replace('', '');
                }
                const baseUrl = cleanUrl.replace(/\/$/, '');
                
                items.push({
                    name: blog.name.trim(),
                    blogUrl: blog.url,
                    rssUrl: baseUrl + '/feed',  // 常见的 WordPress RSS 格式
                    year: year
                });
            }
        }
    }
    
    // 按年份分组
    const groupedByYear = {};
    items.forEach(item => {
        const yearKey = item.year;
        if (!groupedByYear[yearKey]) {
            groupedByYear[yearKey] = [];
        }
        groupedByYear[yearKey].push({ 
            name: item.name, 
            url: item.rssUrl,      // ← 显示 RSS 地址
            blogUrl: item.blogUrl   // ← 保留原博客地址
        });
    });
    
    return groupedByYear;
})();

// 控制台输出确认
console.log('📡 RSS文案合集已生成，共 ' + Object.keys(rssFlatList).reduce((sum, year) => sum + rssFlatList[year].length, 0) + ' 个 RSS 订阅源');


// ==================== 所有分类定义（供 index.html 使用） ====================
const categories = {
    '👤 技术综合博客': blogYearsData,
    // '📡 RSS文案合集': rssFlatList, 取消这一项了 下面的rss才是   // ← 现在 rssFlatList 已经定义好了
	' RSS最新文章': 'https://laodongzhe.cn/rss.html',  // ←  添加外部链接
	'🗁 技术教程文档': guidedata,
    '💬 独立论坛导航': forumData,
    '✉️ 邮箱服务大全': emailData,
	'🛝 独立休闲游戏':gameData,
    '📚 博客大全导航': blogNavData,
    '🎲 随机访问博客': randomBlogData,
    '☑️ 官方博客导航': officialblogdata,
    '🔍︎ 搜索引擎大全': SearchEngineData,
    '📡 独立RSS工具': rssData,
    '💻 独立博客程序': blogProgramData,
    '📖 学习导航大全': studyNavData,
    '📚︎ 独立百科大全': pediadata,
	' ⬇ 下载网站大全': downwebData,
	'🤖 AI人工智能': aiData,
    '🛰 AI导航大全': aiNavData,
    '⭐ 特色网址导航': featuredNavData,
    '🛠️ 独立工具导航': toolNavData,
    '🧰 工具箱导航': toolboxData,
    '🌐 域名注册网站': domainRegData,
    '🔧 域名工具导航': domainToolData,
    '🔍 独立whois导航': whoisData,
    '🎯 随机访问网站': randomSiteData
};

// ==================== 自动生成随机博客列表（从 blogYearsData 提取） ====================
const allBlogs = [];
for (const year in blogYearsData) {
    blogYearsData[year].forEach(blog => {
        if (blog.url && blog.url.trim() !== '' && blog.name && blog.name.trim() !== '') {
            allBlogs.push({ name: blog.name, url: blog.url });
        }
    });
}

// 控制台输出确认
console.log('data.js 加载完成，共加载 ' + allBlogs.length + ' 个博客链接');

// 兼容 Node.js 环境（如果使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allBlogs, blogYearsData, forumData, categories };
}
