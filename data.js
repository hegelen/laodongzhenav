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

// ==================== 博客年份导航数据    , {name:'', url:'/go.htm?url=', rss:''}     ====================
const blogYearsData = {  
    '94': [{name:'贾斯汀', url:'/go.htm?url=https://links.net/', rss:'https://links.net/feed'}],
	 '99': [{name:'秘密花园', url:'/go.htm?url=http://www.yini.org/', rss:'http://www.yini.org/feed'}],
    '00': [{name:'Luca', url:'/go.htm?url=https://wlj.me/', rss:'https://wlj.me/index.xml'}, {name:'卢昌海 ', url:'/go.htm?url=https://www.changhai.org/', rss:'https://www.changhai.org/feed'}, {name:' ', url:''}, {name:' ', url:''}],
    '01': [{name:'nc-show', url:'/go.htm?url=https://nicrosoft.net/', rss:'https://nicrosoft.net/feed'}, {name:'阿江守候', url:'/go.htm?url=http://www.ajiang.net/', rss:'http://www.ajiang.net/feed'}, {name:'东评衿就', url:'/go.htm?url=https://dongjunke.cn/', rss:'https://dongjunke.cn/atom.xml'}, {name:'老痛', url:'/go.htm?url=https://toonkam.com' , rss:'https://toonkam.com/feed'}, {name:' ', url:''}],
    '02': [{name:'Paul Graham', url:'/go.htm?url=https://paulgraham.com/', rss:'https://paulgraham.com/feed'}, {name:'守望轩', url:'/go.htm?url=https://www.watch-life.net/', rss:'https://www.watch-life.net/feed'}, {name:' Wangjianshuo', url:'/go.htm?url=https://home.wangjianshuo.com/', rss:'https://home.wangjianshuo.com/feed'},  {name:'seth', url:'/go.htm?url=https://seths.blog/', rss:'https://seths.blog/feed/'}],
    '03': [{name:'张智勇', url:'/go.htm?url=https://www.zyzhang.com/', rss:'https://www.zyzhang.com/feed'},{name:'王建硕', url:'/go.htm?url=https://home.wangjianshuo.com/cn', rss:'https://home.wangjianshuo.com/feed'}, {name:'阮一峰', url:'/go.htm?url=https://www.ruanyifeng.com/', rss:'http://www.ruanyifeng.com/blog/atom.xml'}, {name:'愆伏', url:'/go.htm?url=https://www.tortorse.com/', rss:'https://www.tortorse.com/atom.xml'}],
    '04': [{name:'kaix.in', url:'/go.htm?url=https://kaix.in/', rss:'https://kaix.in/feed'}, {name:'龙哥', url:'/go.htm?url=https://long.ge/', rss:'https://long.ge/feed'}, {name:'一片瓦', url:'/go.htm?url=https://www.ixsz.com/', rss:'https://www.ixsz.com/feed'}, {name:'Architecting', url:'/go.htm?url=https://xujiwei.com/blog/', rss:'https://xujiwei.com/feed'}, {name:'puo', url:'/go.htm?url=http://puo.cn/', rss:'http://puo.cn/feed'}, {name:'猫大叔', url:'/go.htm?url=https://21ido.com/', rss:'https://21ido.com/feed'}, {name:'chen', url:'/go.htm?url=https://chen.info/', rss:'https://chen.info/feed'}, {name:'孙老四', url:'/go.htm?url=https://lao.si/', rss:'https://lao.si/feed'}, {name:' 小陈故事', url:'/go.htm?url=https://www.chener.net/', rss:'https://www.chener.net/feed'}, {name:'酷壳', url:'/go.htm?url=https://coolshell.cn/', rss:'https://coolshell.cn/feed'}, {name:'笨狗又一窝', url:'/go.htm?url=https://www.yewen.us/', rss:'https://www.yewen.us/feed'}, {name:'廖雪峰', url:'/go.htm?url=https://liaoxuefeng.com/', rss:'https://rss.app/feeds/nTHThMu9s8ymyaxa.xml'}],
    '05': [{name:'王志勇', url:'/go.htm?url=http://www.auiou.com/', rss:'http://www.auiou.com/feed'}, {name:'忆秋年', url:'/go.htm?url=http://www.hanshuailing.com/wordpress/', rss:'http://www.hanshuailing.com/feed'}, {name:'春田', url:'/go.htm?url=http://kaikeimura.way-nifty.com/', rss:'http://kaikeimura.way-nifty.com/feed'}, {name:'尚磊', url:'/go.htm?url=https://shanglei.net/', rss:'https://shanglei.net/feed'}, {name:'云风', url:'/go.htm?url=https://blog.codingnow.com/', rss:'https://blog.codingnow.com/feed'}, {name:'大嘴狗狗', url:'/go.htm?url=https://www.sirit.com.cn/', rss:'https://www.sirit.com.cn/feed'}, {name:'扶苏', url:'/go.htm?url=https://pwsz.com/', rss:'https://pwsz.com/feed'}, {name:'yaner', url:'/go.htm?url=https://yaner.cc/', rss:'https://yaner.cc/feed'}, {name:'佐仔志', url:'/go.htm?url=https://www.jinbo123.com/', rss:'https://www.jinbo123.com/feed'},{name:'Felix021', url:'/go.htm?url=https://www.felix021.com/', rss:'https://www.felix021.com/feed'}, {name:' ', url:'', rss:''}],
    '06': [{name:'土木坛子', url:'/go.htm?url=https://tumutanzi.com/', rss:'https://tumutanzi.com/feed'}, {name:'s星球', url:'/go.htm?url=http://www.snbk.cn/', rss:'http://www.snbk.cn/feed'}, {name:'傻猫', url:'/go.htm?url=https://www.samool.com/', rss:'https://www.samool.com/feed'}, {name:'隔叶黄莺', url:'/go.htm?url=https://yanbin.blog/', rss:'https://yanbin.blog/feed'}, {name:'bang', url:'/go.htm?url=https://blog.cnbang.net/', rss:'https://blog.cnbang.net/feed'}, {name:'小胡', url:'/go.htm?url=https://hmilyld.com/', rss:'https://hmilyld.com/feed'},{name:'Mukti', url:'/go.htm?url=https://feizhaojun.com/', rss:'https://feizhaojun.com/feed'}, {name:'joojen Zhou', url:'/go.htm?url=https://joojen.com/', rss:'https://joojen.com/feed'}, {name:'eallion', url:'/go.htm?url=https://www.eallion.com/', rss:'https://www.eallion.com/feed'}, {name:'黄杰敏', url:'/go.htm?url=https://www.jiemin.com/', rss:'https://www.jiemin.com/feed'}, {name:'香水', url:'/go.htm?url=https://xsui.com/', rss:'https://xsui.com/feed'}, {name:'平顶山', url:'/go.htm?url=https://pingdingshan.me/', rss:'https://pingdingshan.me/feed'}, {name:'Slyar', url:'/go.htm?url=https://www.slyar.com/', rss:'https://www.slyar.com/feed'}, {name:'bang', url:'/go.htm?url=https://blog.cnbang.net/', rss:'https://blog.cnbang.net/feed/'}],
    '07': [{name:'祁劲松', url:'/go.htm?url=https://jamesqi.com/', rss:'https://jamesqi.com/feed'}, {name:'张子阳', url:'/go.htm?url=http://www.tracefact.net/', rss:'http://www.tracefact.net/feed'}, {name:'longluo', url:'/go.htm?url=https://www.longluo.me/', rss:'https://www.longluo.me/feed'}, {name:'梁波', url:'/go.htm?url=http://www.liangbo.org/', rss:'http://www.liangbo.org/feed'}, {name:'威言威语', url:'/go.htm?url=https://www.weisay.com/blog/', rss:'https://www.weisay.com/feed'}, {name:'PHP', url:'/go.htm?url=https://www.liqingbo.com/', rss:'https://www.liqingbo.com/feed'}, {name:'joyqi', url:'/go.htm?url=https://joyqi.com/', rss:'https://joyqi.com/feed'}, {name:'无标题文档', url:'/go.htm?url=https://www.gracecode.com/', rss:'https://www.gracecode.com/feed'}, {name:'悠见', url:'/go.htm?url=https://yufm.com/', rss:'https://yufm.com/feed'}, {name:'FROYO', url:'/go.htm?url=https://www.izhuyue.com/', rss:'https://www.izhuyue.com/feed'}, {name:'织梦岁月', url:'/go.htm?url=https://zhujianlin.com/', rss:'https://zhujianlin.com/feed'},{name:'苏洋', url:'/go.htm?url=https://soulteary.com/', rss:'https://soulteary.com/feed'}, {name:'似水流年', url:'/go.htm?url=https://www.longlan.net/', rss:'https://www.longlan.net/feed'}, {name:'龙天小筑', url:'/go.htm?url=https://www.dragongod.net/', rss:'https://www.dragongod.net/feed'}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}],
    '08': [{name:'阿呆生活志', url:'/go.htm?url=https://qsir.cn/', rss:'https://qsir.cn/feed'}, {name:'懋和道人', url:'/go.htm?url=https://www.dao.js.cn/', rss:'https://www.dao.js.cn/feed'}, {name:'杜郎俊赏', url:'/go.htm?url=https://dujun.io/', rss:'https://dujun.io/feed'}, {name:'虹墨', url:'/go.htm?url=https://www.imaegoo.com/', rss:'https://www.imaegoo.com/feed'}, {name:'军', url:'/go.htm?url=https://me.xu19.com/', rss:'https://me.xu19.com/feed'}, {name:'小气的神', url:'/go.htm?url=https://mdong.org/', rss:'https://mdong.org/feed'}, {name:'蓝卡', url:'/go.htm?url=https://www.lanka.cn/', rss:'https://www.lanka.cn/feed'},{name:'龙Ge笔迹', url:'/go.htm?url=https://www.izhailong.com/', rss:'https://www.izhailong.com/feed'}, {name:'刘荣星', url:'/go.htm?url=https://www.liurongxing.com/', rss:'https://www.liurongxing.com/feed'}, {name:'纸短情长', url:'/go.htm?url=https://www.gtdstudy.com/', rss:'https://www.gtdstudy.com/feed'}, {name:'小桥流水人家', url:'/go.htm?url=https://baiqiuyi.com/', rss:'https://baiqiuyi.com/feed'}   , {name:'有氧呼吸', url:'/go.htm?url=https://www.oxy.one/', rss:'https://www.oxy.one/feeds/posts/default'}   , {name:'Wandai', url:'/go.htm?url=https://twd2.me/', rss:'https://twd2.me/feed'}    ],
    '09': [{name:'老张', url:'/go.htm?url=https://laozhang.org/', rss:'https://laozhang.org/feed'}, {name:'laike9m', url:'/go.htm?url=https://laike9m.com/', rss:'https://laike9m.com/feed'}, {name:'一起养蜂', url:'/go.htm?url=https://blog.artfax.com/', rss:'https://blog.artfax.com/feed'}, {name:'多多', url:'/go.htm?url=https://ddlog.cn/', rss:'https://ddlog.cn/?feed=rss2'}, {name:'老刘', url:'/go.htm?url=https://iliu.org/', rss:'https://iliu.org/index.xml'}, {name:'欧雷', url:'/go.htm?url=https://ourai.ws/', rss:'https://ourai.ws/feed'}, {name:'1900', url:'/go.htm?url=https://1900.live/', rss:'https://1900.live/feed'}, {name:'老卫', url:'/go.htm?url=https://waylau.com/', rss:'https://waylau.com/feed'}, {name:'纸鹿摸鱼处', url:'/go.htm?url=https://blog.zhilu.site/', rss:'https://blog.zhilu.site/feed'}, {name:'大峰笔记', url:'/go.htm?url=https://dafengbiji.com/', rss:'https://dafengbiji.com/feed'},{name:'木木木木木', url:'/go.htm?url=https://immmmm.com/', rss:'https://immmmm.com/feed'}, {name:'邹志强', url:'/go.htm?url=http://www.zouzhiqiang.com/', rss:'http://www.zouzhiqiang.com/feed'}, {name:'谁见到过风？', url:'/go.htm?url=https://www.seenthewind.com/', rss:'https://www.seenthewind.com/feed'}, {name:'张鑫旭', url:'/go.htm?url=https://www.zhangxinxu.com/', rss:'https://www.zhangxinxu.com/wordpress/feed/'}, {name:'疆飞', url:'/go.htm?url=https://www.jiangfei.net/', rss:'https://www.jiangfei.net/feed'}, {name:'魅力', url:'/go.htm?url=http://www.58zn.cn/', rss:'http://www.58zn.cn/feed'}, {name:'老卫（柳伟卫）的技术站', url:'/go.htm?url=https://waylau.com/', rss:'https://waylau.com/feed.xml'}],
    '10': [{name:'宇间草', url:'/go.htm?url=https://2days.org/', rss:'https://2days.org/feed'}, {name:'老谢', url:'/go.htm?url=https://www.xj123.info/', rss:'https://www.xj123.info/feed'}, {name:'lilydjwg', url:'/go.htm?url=https://blog.lilydjwg.me/', rss:'https://blog.lilydjwg.me/feed'}, {name:'the5fire', url:'/go.htm?url=https://www.the5fire.com/', rss:'https://www.the5fire.com/feed'}, {name:'piglei', url:'/go.htm?url=https://www.piglei.com/', rss:'https://www.piglei.com/feed'}, {name:'雅余', url:'/go.htm?url=https://yayu.net/', rss:'https://yayu.net/feed'}, {name:'limboy', url:'/go.htm?url=https://limboy.me/', rss:'https://limboy.me/feed'},{name:'天一生水', url:'/go.htm?url=https://www.jiangyu.org/', rss:'https://www.jiangyu.org/feed'}, {name:'笨笨天地', url:'/go.htm?url=https://www.713660.com/', rss:'https://www.713660.com/feed'}, {name:'忆往事', url:'/go.htm?url=https://zhou.ge/', rss:'https://zhou.ge/feed'}, {name:'麦麦同学', url:'/go.htm?url=https://www.mmtx.net/', rss:'https://www.mmtx.net/feed/ '} ],
    '11': [{name:'耳朵的主人', url:'/go.htm?url=https://www.edzbe.com/', rss:'https://www.edzbe.com/feed'}, {name:'老孙', url:'/go.htm?url=https://www.imsun.org/', rss:'https://www.imsun.org/feed'}, {name:'小癞子', url:'/go.htm?url=https://justyy.com/', rss:'https://justyy.com/feed'}, {name:'陪她去流浪', url:'/go.htm?url=https://blog.twofei.com/', rss:'https://blog.twofei.com/feed'}, {name:'罗磊', url:'/go.htm?url=https://luolei.org/', rss:'https://luolei.org/feed'}, {name:'phodal', url:'/go.htm?url=https://www.phodal.com/blog/', rss:'https://www.phodal.com/feed'},{name:'周涛', url:'/go.htm?url=https://www.ediok.cn/', rss:'https://www.ediok.cn/feed'}, {name:'Verne', url:'/go.htm?url=https://blog.einverne.info/', rss:'https://blog.einverne.info/feed.xml'}],
    '12': [{name:'贱志', url:'/go.htm?url=https://fatesinger.com/', rss:'https://fatesinger.com/feed'}, {name:'香菇肥牛', url:'/go.htm?url=http://qing.su/', rss:'https://qing.su/feed'}, {name:'徐建伟', url:'/go.htm?url=http://www.xulog.cn/', rss:'http://www.xulog.cn/index.php?act=rss'}, {name:'Tokin', url:'/go.htm?url=https://biji.io/', rss:'https://biji.io/feed'}, {name:'王鑫', url:'/go.htm?url=https://wonse.info/', rss:'https://wonse.info/feed'}, {name:'方糖', url:'/go.htm?url=https://fangtang.net/', rss:'https://fangtang.net/feed'}, {name:'金马', url:'/go.htm?url=https://lijinma.com/', rss:'https://lijinma.com/feed'}, {name:'郭晓力', url:'/go.htm?url=https://guoxiaoli.com/', rss:'https://guoxiaoli.com/feed'}, {name:'半日闲', url:'/go.htm?url=https://www.xiaoa.me/', rss:'https://www.xiaoa.me/feed'}, {name:'正是修行时', url:'/go.htm?url=https://www.qtter.com/', rss:'https://www.qtter.com/feed'}, {name:'MacTalk-池建强的随想录', url:'/go.htm?url=https://macshuo.com/', rss:'https://macshuo.com/?feed=rss2'}   , {name:'把酒诗代码', url:'/go.htm?url=https://102no.com/', rss:'https://102no.com/atom.xml'}   ],
    '13': [{name:'始终', url:'/go.htm?url=https://liam.page/', rss:'https://liam.page/feed'}, {name:'小z', url:'/go.htm?url=https://blog.xiaoz.org/', rss:'https://blog.xiaoz.org/feed'}, {name:'卡瓦邦噶', url:'/go.htm?url=https://www.kawabangga.com/', rss:'https://www.kawabangga.com/feed'}, {name:'刘志军', url:'/go.htm?url=https://foofish.net/', rss:'https://foofish.net/feed'}, {name:'二丫讲梵', url:'/go.htm?url=https://wiki.eryajf.net/', rss:'https://wiki.eryajf.net/feed'}, {name:'彼岸临窗', url:'/go.htm?url=https://oneblog.net/', rss:'https://oneblog.net/feed'}, {name:'关关', url:'/go.htm?url=https://951008.com/', rss:'https://951008.com/feed'}, {name:'Frank', url:'/go.htm?url=https://nyan.im/', rss:'https://nyan.im/feed'}, {name:'辛未羊', url:'/go.htm?url=https://panqiincs.me/', rss:'https://panqiincs.me/feed'}, {name:'林羽凡', url:'/go.htm?url=https://www.linyufan.com/', rss:'https://www.linyufan.com/feed'}, {name:'luca,s notepad', url:'/go.htm?url=https://wulujia.com/', rss:'https://wulujia.com/feed'}, {name:'jet', url:'/go.htm?url=https://jetyu.me/', rss:'https://jetyu.me/atom.xml'} ],
    '14': [{name:'天书', url:'/go.htm?url=https://tianshu.xyz/blog/', rss:'https://tianshu.xyz/feed'}, {name:'ying', url:'/go.htm?url=https://izualzhy.cn/', rss:'https://izualzhy.cn/feed'}, {name:'gaoce', url:'/go.htm?url=https://gaocegege.com/Blog/', rss:'https://gaocegege.com/feed'}, {name:'Y!an\'s Blog', url:'/go.htm?url=https://yian.me/blog/', rss:'https://yian.me/feed'}, {name:'Henry Z', url:'/go.htm?url=https://changchen.me/', rss:'https://changchen.me/feed'}, {name:'静觅', url:'/go.htm?url=https://cuiqingcai.com/', rss:'https://cuiqingcai.com/feed'}, {name:'松茸', url:'/go.htm?url=https://zrs.xyz/', rss:'https://zrs.xyz/feed'}, {name:'简单点', url:'/go.htm?url=https://blog.caiwenhao.cn/', rss:'https://blog.caiwenhao.cn/feed'}, {name:'缙哥哥', url:'/go.htm?url=https://www.dujin.org/', rss:'https://www.dujin.org/feed'}, {name:'运营不加班', url:'/go.htm?url=https://nops.icu/', rss:'https://nops.icu/feed'}, {name:'哥斯拉', url:'/go.htm?url=http://gojira.net/', rss:'http://gojira.net/feed'}, {name:' A/B\'s Blog', url:'/go.htm?url=https://zmoe.com/', rss:'https://zmoe.com/feed'}, {name:'很少明白', url:'/go.htm?url=https://p0werdown.com/', rss:'https://p0werdown.com/feed.xml'}],
    '15': [{name:'胡东东', url:'/go.htm?url=https://blog.hudd.cn/', rss:'https://blog.dongge.org/feed'}, {name:'HEO', url:'/go.htm?url=https://blog.zhheo.com/', rss:'https://blog.zhheo.com/feed'}, {name:'牧人池塘', url:'/go.htm?url=https://dbanote.com/', rss:'https://dbanote.com/feed'}, {name:'质数人生', url:'/go.htm?url=https://2357.life/', rss:'https://2357.life/feed'}, {name:'泽泽社长', url:'/go.htm?url=https://blog.aihaonv.com/', rss:'https://blog.aihaonv.com/feed'}, {name:'满心', url:'/go.htm?url=https://zhoutian.com/', rss:'https://zhoutian.com/rss.xml'}, {name:'青山', url:'/go.htm?url=https://blog.yanqingshan.com/', rss:'https://blog.yanqingshan.com/feed'}, {name:'酸菜鱼', url:'/go.htm?url=https://suancaixiong.com/', rss:'https://suancaixiong.com/feed'}, {name:'石头', url:'/go.htm?url=https://www.pweb123.com/', rss:'https://www.pweb123.com/feed'}, {name:'Luminous', url:'/go.htm?url=https://luotianyi.vc/', rss:'https://luotianyi.vc/feed'}, {name:'库拉饭', url:'/go.htm?url=https://www.kulafan.com/', rss:'https://www.kulafan.com/feed'}],
    '16': [{name:'孟坤', url:'/go.htm?url=https://mkblog.cn/', rss:'https://mkblog.cn/feed'}, {name:'太隐', url:'/go.htm?url=https://wangyurui.com/', rss:'https://wangyurui.com/feed'}, {name:'i007', url:'/go.htm?url=https://i007.vip:15443/wordpress/', rss:'https://i007.vip:15443/feed'}, {name:'若水斋', url:'/go.htm?url=https://blog.werner.wiki/', rss:'https://blog.werner.wiki/feed'}, {name:'kwen', url:'/go.htm?url=https://www.kwen.page/', rss:'https://www.kwen.page/feed'}, {name:'ximi', url:'/go.htm?url=https://www.ximi.me/', rss:'https://www.ximi.me/feed'}, {name:'小可', url:'/go.htm?url=https://keke.su/', rss:'https://keke.su/feed'}, {name:'阿锦', url:'/go.htm?url=https://www.ajinol.com/', rss:'https://www.ajinol.com/feed'}, {name:'宝玉', url:'/go.htm?url=https://baoyu.io/blog', rss:'https://baoyu.io/feed.xml'}, {name:'友人C', url:'/go.htm?url=https://www.ihewro.com/', rss:'https://www.ihewro.com/feed'}, {name:'大雄', url:'/go.htm?url=https://199508.com/', rss:'https://199508.com/feed'}, {name:'Keyle', url:'/go.htm?url=https://vrast.cn/', rss:'https://vrast.cn/feed'}, {name:'吴昊', url:'/go.htm?url=https://blog.whsir.com/', rss:'https://blog.whsir.com/feed'}, {name:'woodwhales', url:'/go.htm?url=https://woodwhales.cn/', rss:'https://woodwhales.cn/feed'}, {name:'幻影', url:'/go.htm?url=https://blog.52hyjs.com/', rss:'https://blog.52hyjs.com/feed'}, {name:'woodu', url:'/go.htm?url=https://woodu.me/', rss:'https://woodu.me/feed'}, {name:'青木', url:'/go.htm?url=https://www.iyoubo.com/', rss:'https://www.iyoubo.com/feed'}, {name:'Frost', url:'/go.htm?url=https://frostming.com/' ,rss:'https://frostming.com/feed.xml' }],
    '17': [{name:'科学空间', url:'/go.htm?url=https://kexue.fm/', rss:'https://kexue.fm/feed'}, {name:'王叨叨', url:'/go.htm?url=https://wangdaodao.com/', rss:'https://wangdaodao.com/feed'}, {name:'consiiii', url:'/go.htm?url=https://www.consiiii.me/', rss:'https://www.consiiii.me/feed'}, {name:'vimiix', url:'/go.htm?url=https://www.vimiix.com/', rss:'https://www.vimiix.com/feed'}, {name:'不败君', url:'/go.htm?url=https://www.bubaijun.com/', rss:'https://www.bubaijun.com/feed'}, {name:'九层台', url:'/go.htm?url=https://blog.wj2015.com/', rss:'https://blog.wj2015.com/feed'}, {name:'iam', url:'/go.htm?url=https://5ime.cn/', rss:'https://5ime.cn/feed'}, {name:'马春杰杰', url:'/go.htm?url=https://www.machunjie.com/', rss:'https://www.machunjie.com/feed'}, {name:'AI柠檬', url:'/go.htm?url=https://blog.ailemon.net/', rss:'https://blog.ailemon.net/feed'}, {name:'沈唁志', url:'/go.htm?url=https://qq52o.me/', rss:'https://qq52o.me/feed'}, {name:'染念', url:'/go.htm?url=https://dyedd.cn/', rss:'https://dyedd.cn/feed'}, {name:'串串狗小刊', url:'/go.htm?url=https://www.ccgxk.com/', rss:'https://www.ccgxk.com/rss.php'}, {name:'染念', url:'/go.htm?url=https://dyedd.cn/', rss:'https://dyedd.cn/feed'}, {name:'atpx', url:'/go.htm?url=https://atpx.com/', rss:'https://atpx.com/feed'}, {name:'83小驿站', url:'/go.htm?url=https://888333.xyz/', rss:'https://888333.xyz/feed'}, {name:'碎言', url:'/go.htm?url=https://www.suiyan.cc/', rss:'https://www.suiyan.cc/feed'}, {name:'zj', url:'/go.htm?url=https://www.zjhuiwan.cn/', rss:'https://www.zjhuiwan.cn/feed.xml'} , {name:'老胡', url:'/go.htm?url=https://www.vsay.net/', rss:'https://www.vsay.net/rss.php'}    , {name:'2broear', url:'/go.htm?url=https://blog.2broear.com/', rss:'https://blog.2broear.com/feed'}   , {name:'Usubeni Fantasy', url:'/go.htm?url=https://ssshooter.com/', rss:'https://ssshooter.com/atom.xml'}    ],
    '18': [{name:'涛叔', url:'/go.htm?url=https://tao.zz.ac/', rss:'https://tao.zz.ac/feed'}, {name:'周松松', url:'/go.htm?url=https://zhousongsong.com/', rss:'https://zhousongsong.com/feed'}, {name:'codedump', url:'/go.htm?url=https://www.codedump.info/', rss:'https://www.codedump.info/feed'}, {name:'海了个螺', url:'/go.htm?url=http://www.nnnuo.com/', rss:'https://www.nnnuo.com/feed'}, {name:'刘宇帅', url:'/go.htm?url=https://liuyushuai.com/', rss:'https://liuyushuai.com/feed'}, {name:'枋柚梓的猫会发光', url:'/go.htm?url=https://inkss.cn/', rss:'https://inkss.cn/feed'}, {name:'阳', url:'/go.htm?url=https://yooer.me/', rss:'https://yooer.me/feed'}, {name:'鸟叔', url:'/go.htm?url=https://thornbird.org/', rss:'https://thornbird.org/feed'}, {name:'运维咖啡吧', url:'/go.htm?url=https://blog.ops-coffee.com/', rss:'https://blog.ops-coffee.com/feed'}, {name:'希仁之拥', url:'/go.htm?url=https://blog.keepchen.com/', rss:'https://blog.keepchen.com/feed'},{name:'guanngxu', url:'/go.htm?url=https://guanngxu.com/', rss:'https://guanngxu.com/atom.xml'}  , {name:'Zero', url:'/go.htm?url=https://mikuac.com/', rss:'https://mikuac.com/atom.xml'}    , {name:'leadwhite', url:'/go.htm?url=https://www.leadwhite.net/', rss:'https://www.leadwhite.net/feed/'}    ],
	// ==================== 复制方便    , {name:'', url:'/go.htm?url=', rss:''}     ====================
    '19': [{name:'沧海月明', url:'/go.htm?url=https://www.inlighting.org/', rss:'https://www.inlighting.org/feed'}, {name:'流情', url:'/go.htm?url=https://liuqingwushui.top/', rss:'https://liuqingwushui.top/feed'}, {name:'时光散记', url:'/go.htm?url=https://www.sanji.one/', rss:'https://www.sanji.one/feed'}, {name:'李锋镝', url:'/go.htm?url=https://www.lifengdi.com/', rss:'https://www.lifengdi.com/feed'}, {name:'启尚', url:'/go.htm?url=https://blog.wuxhqi.com/', rss:'https://blog.wuxhqi.com/feed'}, {name:'imglan', url:'/go.htm?url=https://imglan.com/', rss:'https://imglan.com/feed'}, {name:'风向标', url:'/go.htm?url=https://sbcoder.cn/', rss:'https://sbcoder.cn/feed'}, {name:'herman', url:'/go.htm?url=https://herman.bearblog.dev/blog/', rss:'https://herman.bearblog.dev/feed'} , {name:'风记星辰', url:'/go.htm?url=https://www.thyuu.com/', rss:'https://www.thyuu.com/feed/'}   , {name:'Zeruns', url:'/go.htm?url=https://blog.zeruns.com/', rss:'https://blog.zeruns.com/feed/'}   , {name:'jdeal', url:'/go.htm?url=https://www.jdeal.cn/', rss:'https://www.jdeal.cn/feed'}   , {name:'Allen Hua ', url:'/go.htm?url=https://hellodk.cn/', rss:'https://hellodk.cn/feed/'}    , {name:'新世界的大门', url:'/go.htm?url=https://blog.xinshijiededa.men/', rss:'https://blog.xinshijiededa.men/atom.xml/'}       ],
    '20': [ {name:'瓦解', url:'/go.htm?url=https://hin.cool/', rss:'https://hin.cool/feed'}, {name:'happyxiao', url:'/go.htm?url=https://happyxiao.com/', rss:'https://happyxiao.com/feed'}, {name:'vinchent', url:'/go.htm?url=https://www.vinchent.xyz/', rss:'https://www.vinchent.xyz/feed'}, {name:'鸡米饭', url:'/go.htm?url=http://jimifan.com/', rss:'http://jimifan.com/feed'}, {name:'天书vip', url:'/go.htm?url=https://www.skybook.vip/', rss:'https://www.skybook.vip/feed'}, {name:'TXY', url:'/go.htm?url=https://tanxinyu.work/', rss:'https://tanxinyu.work/feed'}, {name:'老卢', url:'/go.htm?url=https://blog.el9.cn/', rss:'https://blog.el9.cn/feed'}, {name:'共享', url:'/go.htm?url=https://www.sharedbk.com/', rss:'https://www.sharedbk.com/feed'}, {name:'世俗', url:'/go.htm?url=https://shi.su/', rss:'https://shi.su/feed'}, {name:'WishMeLz', url:'/go.htm?url=https://blog.itsse.cn/', rss:'https://blog.itsse.cn/feed'}, {name:'naiba', url:'/go.htm?url=https://lifelonglearn.ing/', rss:'https://lifelonglearn.ing/feed'}, {name:'HEMING', url:'/go.htm?url=https://heming.org/', rss:'https://heming.org/feed'}, {name:'落英缤纷', url:'/go.htm?url=https://www.im2828.com/', rss:'https://www.im2828.com/feed'}, {name:'bk随笔', url:'/go.htm?url=https://www.suibibk.com/', rss:'https://www.suibibk.com/feed'}, {name:'章工', url:'/go.htm?url=https://blog.zzppjj.top/', rss:'https://blog.zzppjj.top/feed'}, {name:'子舒', url:'/go.htm?url=https://zishu.me/', rss:'https://zishu.me/feed'}, {name:'chaofa', url:'/go.htm?url=https://yuanchaofa.com/', rss:'https://yuanchaofa.com/feed'}, {name:'优世界', url:'/go.htm?url=https://usj.cc/', rss:'https://usj.cc/feed'}, {name:'粥里有勺糖', url:'/go.htm?url=https://sugarat.top/', rss:'https://sugarat.top/feed'}, {name:'鸽子窝', url:'/go.htm?url=https://www.wudilad.com/', rss:'https://www.wudilad.com/feed'}, {name:'隔壁老刘', url:'/go.htm?url=https://www.lzhs.com/', rss:'https://www.lzhs.com/feed'}, {name:'登山亦有道', url:'/go.htm?url=https://chenyan98.cn/', rss:'https://chenyan98.cn/feed'}, {name:'方圆小站', url:'/go.htm?url=https://fangyuanxiaozhan.com/', rss:'https://fangyuanxiaozhan.com/feed/'}  , {name:'无梦梦游记', url:'/go.htm?url=https://bkryofu.cn/', rss:'https://bkryofu.cn/atom.xml'}  , {name:'Z次元', url:'/go.htm?url=https://blog.ahzoo.cn/', rss:'https://blog.ahzoo.cn/rss.xml'}  , {name:'資工小廢物 - JN', url:'/go.htm?url=https://blog.giveanornot.com/', rss:'https://blog.giveanornot.com/index.xml'}    ],
    '21': [{name:'硅谷王川', url:'/go.htm?url=https://chuan.us/', rss:'https://chuan.us/feed'}, {name:'辣条', url:'/go.htm?url=https://www.latiao.org/', rss:'https://www.latiao.org/feed'}, {name:'blogc', url:'/go.htm?url=http://blogc.com/', rss:'https://blogc.com/feed'}, {name:'yveji', url:'/go.htm?url=https://www.yveji.com/', rss:'https://www.yveji.com/feed'}, {name:'leorain', url:'/go.htm?url=https://www.leorain.cn/', rss:'https://www.leorain.cn/feed'}, {name:'可爱静', url:'/go.htm?url=https://keaijing.com/', rss:'https://keaijing.com/feed'}, {name:'毒蛊', url:'/go.htm?url=https://blog.idg8.cn/', rss:'https://blog.idg8.cn/feed'}, {name:'云云星羽', url:'/go.htm?url=https://starssr.com/', rss:'https://starssr.com/feed'}, {name:'XXY', url:'/go.htm?url=https://blog.xuxiny.top/', rss:'https://blog.xuxiny.top/feed'}, {name:'记录生活', url:'/go.htm?url=https://9sb.net', rss:'https://9sb.net/feed'}, {name:'诺依阁', url:'/go.htm?url=https://blog.nuoyis.net/', rss:'https://blog.nuoyis.net/feed'}, {name:'小威', url:'/go.htm?url=https://www.xiaoweio.com/', rss:'https://www.xiaoweio.com/feed'}, {name:'ovo', url:'/go.htm?url=https://ovo.cc/', rss:'https://ovo.cc/feed'}, {name:'迷荼小栈', url:'/go.htm?url=https://www.mkinit.com/', rss:'https://www.mkinit.com/feed'}, {name:'小阿成', url:'/go.htm?url=https://www.xiaoac.com/', rss:'https://www.xiaoac.com/feed'}, {name:'站长笔记', url:'/go.htm?url=https://www.080210.com/', rss:'https://www.080210.com/feed'}, {name:'Dayu', url:'/go.htm?url=https://anotherdayu.com/', rss:'https://anotherdayu.com/feed'}, {name:'bing', url:'/go.htm?url=https://imcbc.cn/', rss:'https://imcbc.cn/feed'}, {name:'極客死亡計劃', url:'/go.htm?url=https://www.geedea.pro/', rss:'https://www.geedea.pro/feed'}  , {name:'邹江', url:'/go.htm?url=https://www.zoujiang.com/', rss:'https://www.zoujiang.com/feed/'}   , {name:'Save The Web Project', url:'/go.htm?url=https://blog.save-web.org/', rss:'https://blog.save-web.org/feed/'}    , {name:'阿锋的小宇宙', url:'/go.htm?url=https://feng.pub/', rss:'https://feng.pub/feed'}   , {name:'喵喵小站・博客志', url:'/go.htm?url=https://www.mmbkz.cn/', rss:'https://www.mmbkz.cn/feed/'}      ],
    '22': [{name:'果壳中的宇宙', url:'/go.htm?url=https://www.guoke.co/', rss:'https://www.guoke.co/feed'},{name:'cynosura', url:'/go.htm?url=https://cynosura.one/', rss:'https://cynosura.one/feed'}, {name:'ZHU', url:'/go.htm?url=https://yfzhu.cn/', rss:'https://yfzhu.cn/feed'}, {name:'Lee.Sir', url:'/go.htm?url=https://saysay.cc/', rss:'https://saysay.cc/feed'}, {name:'皓月星际', url:'/go.htm?url=https://www.shimail.cn/', rss:'https://www.shimail.cn/feed'}, {name:'吃猫的鱼', url:'/go.htm?url=https://www.fish9.cn/', rss:'https://www.fish9.cn/feed'}, {name:'远梦', url:'/go.htm?url=https://blog.qoz.cc/', rss:'https://blog.qoz.cc/feed'}, {name:'烧饼', url:'/go.htm?url=https://u.sb/', rss:'https://u.sb/feed'}, {name:'唯知', url:'/go.htm?url=https://note.weizwz.com/', rss:'https://note.weizwz.com/feed'}, {name:'白少宣', url:'/go.htm?url=https://baishaoxuan.com/', rss:'https://baishaoxuan.com/feed'}, {name:'kejilion', url:'/go.htm?url=https://blog.kejilion.pro/', rss:'https://blog.kejilion.pro/feed'}, {name:'VeryJack', url:'/go.htm?url=https://veryjack.com/', rss:'https://veryjack.com/feed'}, {name:'探人间', url:'/go.htm?url=https://www.hydsb0.com/', rss:'https://www.hydsb0.com/feed'}, {name:'栋dong', url:'/go.htm?url=https://itdong.me/', rss:'https://itdong.me/feed'}, {name:'ay', url:'/go.htm?url=http://blue.ss/', rss:'https://blue.ss/feed'}, {name:'倦意', url:'/go.htm?url=https://jyblog.cn/', rss:'https://jyblog.cn/feed'}, {name:'zhecydn', url:'/go.htm?url=https://blog.zhecydn.asia/', rss:'https://blog.zhecydn.asia/feed'}  , {name:'林林杂语', url:'/go.htm?url=https://www.xiaozonglin.cn/', rss:'https://www.xiaozonglin.cn/feed/'}  ], 
    '23': [{name:'小归客', url:'/go.htm?url=https://xgk.pw/', rss:'https://xgk.pw/feed'},{name:'lefineder', url:'/go.htm?url=https://www.lefineder.com/', rss:'https://www.lefineder.com/feed'}, {name:'zpaeng', url:'/go.htm?url=http://zpaeng.com/', rss:'http://zpaeng.com/feed'}, {name:'建站百科', url:'/go.htm?url=https://www.jzbk.net/', rss:'https://www.jzbk.net/feed'}, {name:'bo', url:'/go.htm?url=https://bokebo.com/', rss:'https://bokebo.com/feed'}, {name:'宗宗酱', url:'/go.htm?url=https://ygz.ink/', rss:'https://ygz.ink/feed'}, {name:'Jeffer.Z', url:'/go.htm?url=https://www.jeffer.xyz/', rss:'https://www.jeffer.xyz/feed'}, {name:'维奥洛', url:'/go.htm?url=https://vioulo.com/', rss:'https://vioulo.com/feed'}, {name:'小何', url:'/go.htm?url=https://022220.xyz/', rss:'https://022220.xyz/feed'}, {name:'语沐', url:'/go.htm?url=https://www.yumu.cc/', rss:'https://www.yumu.cc/feed'}, {name:'本源归一', url:'/go.htm?url=https://ww-fs.com/', rss:'https://ww-fs.com/feed'}, {name:'小野', url:'/go.htm?url=https://lb5.net/', rss:'https://lb5.net/feed'}, {name:'鹿泽', url:'/go.htm?url=https://www.bailuze.com/', rss:'https://www.bailuze.com/feed'}, {name:'火米', url:'/go.htm?url=https://huo.me/', rss:'https://huo.me/feed'}, {name:'Siwei Li', url:'/go.htm?url=https://siwei.li/', rss:'https://siwei.li/feed'}, {name:'Shiina', url:'/go.htm?url=https://blog.shiina.fun/', rss:'https://blog.shiina.fun/feed'}, {name:'兔哥', url:'/go.htm?url=https://uuzi.net/', rss:'https://uuzi.net/feed'}, {name:'仲小树', url:'/go.htm?url=https://zxs.me/', rss:'https://zxs.me/feed'}, {name:'小破站', url:'/go.htm?url=https://symlzz.cn/', rss:'https://symlzz.cn/feed'}, {name:'康丰', url:'/go.htm?url=https://www.okang.top/', rss:'https://www.okang.top/feed'}, {name:'无敌', url:'/go.htm?url=https://blog.tangwudi.com/', rss:'https://blog.tangwudi.com/feed'}, {name:'聊点趣事', url:'/go.htm?url=https://www.milesytech.com/', rss:'https://www.milesytech.com/feed'}, {name:'蘑菇', url:'/go.htm?url=https://home.ad/', rss:'https://home.ad/feed'}  , {name:'鄢云峰', url:'/go.htm?url=https://yanyunfeng.com/', rss:'https://yanyunfeng.com/rss'}    ],
    '24': [ {name:'阿伟', url:'/go.htm?url=https://awei.cc/', rss:'https://awei.cc/feed'}, {name:'无名', url:'/go.htm?url=https://wuminboke.site/', rss:'https://wuminboke.site/feed'}, {name:'索玛', url:'/go.htm?url=https://suo.ma/', rss:'https://suo.ma/feed'}, {name:'何权洪', url:'/go.htm?url=https://www.hequanhong.cn/', rss:'https://www.hequanhong.cn/feed'}, {name:'逆鳞笔记', url:'/go.htm?url=https://nilin.cc/', rss:'https://nilin.cc/feed'}, {name:'大方', url:'/go.htm?url=https://blog.mmp.cc/', rss:'https://blog.mmp.cc/feed'}, {name:'倾城于你', url:'/go.htm?url=https://qninq.cn', rss:'https://qninq.cn/feed'}, {name:'姓王者', url:'/go.htm?url=https://xingwangzhe.fun/', rss:'https://xingwangzhe.fun/feed'}, {name:'程序猿', url:'/go.htm?url=https://hskun.com/', rss:'https://hskun.com/feed'}, {name:'Evan\'s Space', url:'/go.htm?url=https://www.evan.xin/', rss:'https://www.evan.xin/feed'}, {name:'言语', url:'/go.htm?url=https://www.yan.ink/', rss:'https://www.yan.ink/feed'}, {name:'旺东', url:'/go.htm?url=https://wang618.cn/', rss:'https://wang618.cn/feed'}, {name:'小鸽志', url:'/go.htm?url=https://www.xiaoge.org/', rss:'https://www.xiaoge.org/feed'}, {name:'ImQi1', url:'/go.htm?url=https://imqi1.com/', rss:'https://imqi1.com/feed'}, {name:'奶狗', url:'/go.htm?url=https://www.naigou.cn/blog', rss:'https://www.naigou.cn/feed'}, {name:'三叔', url:'/go.htm?url=https://www.sanshu.cn/', rss:'https://www.sanshu.cn/feed'}, {name:'谈杂思漫', url:'/go.htm?url=https://misc.zz.ac/', rss:'https://misc.zz.ac/feed'}, {name:'DandyAPI', url:'/go.htm?url=https://blog.dandyapi.com/', rss:'https://blog.dandyapi.com/feed'}, {name:'黄建春', url:'/go.htm?url=https://www.huangjianchun.cn/', rss:'https://www.huangjianchun.cn/feed'}, {name:'二叉树树', url:'/go.htm?url=https://2x.nz/', rss:'https://2x.nz/feed'}, {name:'Sun', url:'/go.htm?url=https://blog.csun.site/', rss:'https://blog.csun.site/feed'}, {name:'Runoneall', url:'/go.htm?url=https://blog.oneall.eu.org/', rss:'https://blog.oneall.eu.org/feed'}  , {name:'敲代码的卡卡罗特', url:'/go.htm?url=https://blog.share888.top/', rss:'https://blog.share888.top/feed'} ],
    '25': [{name:'巴适小馨', url:'/go.htm?url=http://p4z.cn/', rss:'http://p4z.cn/feed'}, {name:'礼印外盒', url:'/go.htm?url=https://liyinwaihe.com/', rss:'https://liyinwaihe.com/feed'}, {name:'Gavin', url:'/go.htm?url=https://sji.cc/', rss:'https://sji.cc/feed'}, {name:'N', url:'/go.htm?url=https://nmsl.cn/', rss:'https://nmsl.cn/feed'}, {name:'极客星球网', url:'/go.htm?url=https://www.wvn.cn', rss:'https://www.wvn.cn/feed'}, {name:'王先生', url:'/go.htm?url=https://www.wangxiansheng.com/', rss:'https://www.wangxiansheng.com/feed'}, {name:'Clark', url:'/go.htm?url=https://clarkf.site/zh/blog', rss:'https://clarkf.site/feed'}, {name:'青萍', url:'/go.htm?url=https://blog.lusyoe.com/', rss:'https://blog.lusyoe.com/feed'}, {name:'我的窝', url:'/go.htm?url=https://hl.xo.je/', rss:'https://hl.xo.je/feed'}, {name:'心记', url:'/go.htm?url=https://blog.moodlog.cn/', rss:'https://blog.moodlog.cn/feed'}, {name:'落花雨记', url:'/go.htm?url=https://www.luohuayu.cn/', rss:'https://www.luohuayu.cn/feed'}, {name:'绝非善类', url:'/go.htm?url=https://6angel.com/', rss:'https://6angel.com/feed'}, {name:'左手平凡', url:'/go.htm?url=https://blog.perass.com/', rss:'https://blog.perass.com/feed'}, {name:'道言', url:'/go.htm?url=https://lhn.wang/', rss:'https://lhn.wang/feed'} , {name:'吴明辉', url:'/go.htm?url=http://wuminghui.cn/', rss:'http://wuminghui.cn/feed'}],
    '26': [{name:'华立', url:'/go.htm?url=https://www.renhuali.cn/', rss:'https://www.renhuali.cn/feed'}, {name:'悦已', url:'/go.htm?url=https://yueji.org/', rss:'https://yueji.org/feed'}, {name:'麦子的思绪', url:'/go.htm?url=https://mzdsx.com/', rss:'https://mzdsx.com/feed/'} , {name:'一万先生', url:'/go.htm?url=https://mryvan.com/', rss:'https://mryvan.com/rss.xml'} ]
};


// ==================== 论坛数据 , {name:'', url:'/go.htm?url='}    , {name:'', url:'/go.htm?url=', rss:''}      ====================
const forumData = {
    '91': [{name:'中国惠多网', url:'/go.htm?url=https://www.cfido.com/'}],
    '95': [{name:'水木社区', url:'/go.htm?url=https://www.newsmth.net/'}],
    '99': [{name:'仪器社区', url:'/go.htm?url=https://bbs.instrument.com.cn/'}],
    '00': [{name:'免费吧', url:'/go.htm?url=https://www.free8.net/forum.php'}, {name:'蜂鸟摄影论坛', url:'/go.htm?url=https://bbs.fengniao.com/'}, {name:'色影无忌摄影论坛', url:'/go.htm?url=https://forum.xitek.com/'}, {name:'凯迪猫眼社区', url:'/go.htm?url=https://www.9kd.com/community'}, {name:'看雪论坛', url:'/go.htm?url=https://bbs.kanxue.com/'}],
    '01': [{name:'落伍者', url:'/go.htm?url=https://www.im286.net/'}, {name:'小木虫', url:'/go.htm?url=https://muchong.com/bbs/'}, {name:'金光论坛', url:'/go.htm?url=https://jglt.net/'}, {name:'福步外贸论坛', url:'/go.htm?url=https://bbs.fobshanghai.com/'}, {name:'无忧启动', url:'/go.htm?url=https://wuyou.net/'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '02': [{name:'nga', url:'/go.htm?url=https://bbs.nga.cn/'}, {name:'理想论坛', url:'/go.htm?url=https://www.55188.com/'}],
    '03': [{name:'鳥哥的Linux私房菜', url:'/go.htm?url=https://phorum.vbird.org/index.php'}, {name:'NamePros', url:'/go.htm?url=https://www.namepros.com/'}, {name:' ', url:''}, {name:' ', url:''}],
    '04': [{name:'其乐', url:'/go.htm?url=https://keylol.com/'}, {name:'虎扑', url:'/go.htm?url=https://bbs.hupu.com/'}, {name:'海川化工', url:'/go.htm?url=https://bbs.hcbbs.com/'}],
	'05': [{name:'reddit', url:'/go.htm?url=aHR0cHM6Ly93d3cucmVkZGl0LmNvbS8%3D'}],
    '06': [{name:'迅维', url:'/go.htm?url=https://www.chinafix.com/forum.php'}, {name:'飞卢', url:'/go.htm?url=https://bbs.faloo.com/'}, {name:'煎蛋', url:'/go.htm?url=https://jandan.net/bbs'}, {name:'绝客', url:'/go.htm?url=https://jkmrp.com/'}],
    '07': [{name:'chiphell', url:'/go.htm?url=https://www.chiphell.com/forum.php'}, {name:'矿石收音机', url:'/go.htm?url=http://www.crystalradio.cn/forum.php'}],
    '08': [{name:'hostloc', url:'/go.htm?url=https://hostloc.com/'}, {name:'吾爱破解', url:'/go.htm?url=https://www.52pojie.cn/index.php'}],
    '09': [{name:'北邮人论坛', url:'/go.htm?url=https://bbs.byr.cn/'}, {name:'Ruby中文社区', url:'/go.htm?url=https://ruby-china.org/'}],
    '10': [{name:'v2ex', url:'/go.htm?url=https://www.v2ex.com/'}],
    '11': [{name:'王牌技术员联盟', url:'/go.htm?url=https://wangpai.2345.cn/'}, {name:'cnodejs', url:'/go.htm?url=https://cnodejs.org/'}, {name:'思否', url:'/go.htm?url=https://segmentfault.com/'}],
    '12': [{name:'顶渲论坛', url:'/go.htm?url=https://www.toprender.com/forum.php'}, {name:'UG爱好者', url:'/go.htm?url=https://www.ugsnx.com/forum.php'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '13': [{name:'虫部落', url:'/go.htm?url=https://www.chongbuluo.com/'}],
    '14': [{name:'过早客', url:'/go.htm?url=https://www.guozaoke.com/'}, {name:'learnku', url:'/go.htm?url=https://learnku.com/'}],
    '15': [{name:'超理', url:'/go.htm?url=https://chaoli.club/'}, {name:'什么值得买社区', url:'/go.htm?url=https://post.smzdm.com/'}],
    '17': [{name:'4414', url:'/go.htm?url=https://www.4414.cn/'}],
    '18': [{name:'0xffff', url:'/go.htm?url=https://0xffff.one/'}],
    '19': [{name:'代码厨房社区', url:'/go.htm?url=https://codekitchen.community/'}, {name:'w2solo独立开发者社区', url:'/go.htm?url=https://w2solo.com/'}],
    '20': [{name:'大佬论坛', url:'https://www.dalao.net/'}, {name:'Mergeek产品爱好者社区', url:'/go.htm?url=https://www.mergeek.com/'}],
    '21': [{name:'obsidian', url:'/go.htm?url=https://forum-zh.obsidian.md/'}, {name:'2号站长网', url:'/go.htm?url=https://www.zz2zz.com/circle/'}],
    '22': [{name:'个站论坛', url:'/go.htm?url=https://storeweb.cn/forum'}, {name:'nodeseek', url:'/go.htm?url=https://www.nodeseek.com/'}, {name:'云盘135论坛', url:'/go.htm?url=http://www.yunpan135.com/'}],
    '23': [{name:'nodeloc', url:'/go.htm?url=https://www.nodeloc.com/'}, {name:'linux do', url:'/go.htm?url=https://linux.do/'}, {name:'hifiti', url:'/go.htm?url=https://hifiti.com/'}],
    '24': [{name:'科技LION社区', url:'/go.htm?url=https://bbs.kejilion.pro/'}, {name:'编程导航', url:'/go.htm?url=https://www.codefather.cn/'}, {name:'邮箱论坛', url:'/go.htm?url=https://bbs.emailhouse.cn/'}],
    '25': [ {name:'博客录论坛', url:'/go.htm?url=https://boke.lu/forums'}, {name:'涵云社区', url:'/go.htm?url=https://www.vhany.top/'}, {name:'劳动者论坛', url:'/go.htm?url=https://www.laodongzhe.cn'},{name:'2libra', url:'/go.htm?url=https://2libra.com/'}],
    '26': [{name:'摸鱼论坛', url:'/go.htm?url=https://mylt.net/'}, {name:'discoke', url:'/go.htm?url=https://www.discoke.com/'}, {name:'mjjzz', url:'/go.htm?url=https://www.mjjzz.com/'}, {name:'博客之家论坛', url:'/go.htm?url=https://52blog.cn/'}, {name:'侠客岛', url:'/go.htm?url=https://bbs.hk0.cc/'}, {name:'虚拟资源爱好者的乌托邦', url:'/go.htm?url=https://zzoo.im/'}, {name:'', url:'/go.htm?url='}, {name:'', url:'/go.htm?url='}, {name:'', url:'/go.htm?url='}, {name:'', url:'/go.htm?url='}]
};

// ==================== 博客大全导航数据  , {name:'', url:'/go.htm?url='}  ====================
const blogNavData = {
    '06': [{name:'博客志', url:'/go.htm?url=http://www.jetli.com.cn/'}],
    '09': [{name:'卢松松博客大全', url:'/go.htm?url=https://daohang.lusongsong.com/'}],
    '14': [{name:'rssblog', url:'/go.htm?url=https://rssblog.imcbc.cn/member/'}, {name:'feedspot-bloggers', url:'/go.htm?url=https://bloggers.feedspot.com/'}],
    '16': [{name:'个站商店', url:'/go.htm?url=https://storeweb.cn/'}],
    '17': [{name:'十年之约', url:'/go.htm?url=https://www.foreverblog.cn/'}, {name:'jekyll wiki', url:'/go.htm?url=https://github.com/jekyll/jekyll/wiki/Sites'} ],
    '20': [{name:'BlogFinder', url:'/go.htm?url=https://bf.zzxworld.com/s'}, {name:'博客大全', url:'/go.htm?url=https://boke.wangzhidaquan.com/'}, {name:'站长笔记博客大全', url:'/go.htm?url=https://www.080210.com/link/'}],
    '21': [{name:'博客圈', url:'/go.htm?url=https://bokequan.cn/boke'}, {name:'Ye Olde Blogroll', url:'/go.htm?url=https://blogroll.org/'}],
    '22': [{name:'集博栈', url:'/go.htm?url=https://www.zhblogs.net/'}, {name:'中文博客琅琊榜', url:'/go.htm?url=https://github.com/qianguyihao/blog-list/'}],
    '23': [{name:'博友圈', url:'/go.htm?url=https://www.boyouquan.com/blogs'}, {name:'博客录', url:'/go.htm?url=https://boke.lu/'}, {name:'笔墨迹', url:'/go.htm?url=https://blogscn.fun/'}],
    '24': [{name:'劳动者独立技术博客志', url:'/go.htm?url=https://laodongzhe.cn/'}, {name:'blogsclub', url:'/go.htm?url=https://www.blogsclub.org/members.html'}, {name:'浪海导航', url:'/go.htm?url=https://www.langhai.net/'}, {name:'博客说', url:'/go.htm?url=https://blogtalk.org/blogs'}, {name:'blog114', url:'/go.htm?url=https://blog114.com/'}, {name:'蛋卷box技术博客收集', url:'/go.htm?url=https://dogerolls.com/'}, {name:'webteleporter', url:'/go.htm?url=https://webteleporter.top/list'}, {name:'开往成员列表', url:'/go.htm?url=https://list.travellings.cn/'}, {name:'morerss', url:'/go.htm?url=https://www.morerss.com/'}, {name:' ', url:'/go.htm?url='}, {name:' ', url:'/go.htm?url='}, {name:' ', url:'/go.htm?url='}],
    '25': [{name:'忘归潮', url:'/go.htm?url=https://blogbay.cn/'}, {name:'博客联盟', url:'/go.htm?url=https://www.bokelianmeng.com/'}, {name:'博客星球', url:'/go.htm?url=https://blogplanet.cn/'}, {name:'博客集', url:'/go.htm?url=https://bloginc.cn/'}, {name:'博客小镇', url:'/go.htm?url=https://blog.town/'}, {name:'hot166博客导航', url:'/go.htm?url=https://hot166.com/blogger'}, {name:'无聊湾', url:'/go.htm?url=https://boringbay.com/'}, {name:'博客名录', url:'/go.htm?url=https://blog.tz1989.net/'}, {name:'BOZHU.LINK', url:'/go.htm?url=https://blogger.toocool.cc/'}, {name:'朋.友', url:'/go.htm?url=https://peng.you/'},{name:'博客圈论坛', url:'/go.htm?url=https://bkq.net.cn/'},{name:'博客中心', url:'/go.htm?url=https://bokehub.com/home'},{name:'Wiwi.Blog 的部落卷', url:'/go.htm?url=https://wiwi.blog/blogroll'},{name:'部落卷卷', url:'/go.htm?url=https://blogblog.club/blogrollroll'},{name:'BlogRoll-notion', url:'/go.htm?url=https://blogroll.notion.site/'}, {name:'博客之家', url:'/go.htm?url=https://www.perass.com/'}, {name:'时光链', url:'/go.htm?url=http://www.leow.cn/link/'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '26': [{name:'若梦博客', url:'/go.htm?url=http://www.rmbk.cc/'}, {name:'拾趣博客导航', url:'/go.htm?url=https://s7.fan/'}, {name:'有个站', url:'/go.htm?url=https://www.ygz.ink/'}, {name:'大佬论坛摸鱼', url:'/go.htm?url=https://www.dalao.net/index-1-2.htm'}, {name:'周松松博客精选', url:'/go.htm?url=https://zhousongsong.com/daohang/'}, {name:'好站网', url:'/go.htm?url=https://haozhan.wang/'} ]
};

// ==================== 随机访问博客数据 ====================
const randomBlogData = {
    '20': [{name:'开往', url:'/go.htm?url=https://www.travellings.cn/go.html'}],
    '21': [{name:'十年之约虫洞', url:'/go.htm?url=https://foreverblog.cn/go.html'}],
    '23': [{name:'博客路随机博客', url:'/go.htm?url=https://boke.lu/sj/'}],
    '24': [{name:'blogsclub空间穿梭', url:'/go.htm?url=https://www.blogsclub.org/go'}],
    '25': [{name:'晓梦羊博客集友谊之桥', url:'/go.htm?url=https://bloginc.cn/go.html'}, {name:'独立博客传送门', url:'/go.htm?url=https://webteleporter.top/'}, {name:'揪蝉', url:'/go.htm?url=https://www.jiuchan.org/'}, {name:'漫游', url:'/go.htm?url=https://blogger.toocool.cc/manyou'}],
	'26': [{name:'走访-劳动者随机博客', url:'https://laodongzhe.cn/goto.htm'}],
};

// ==================== 博客程序数据 ====================
const blogProgramData = {
    '03': [{name:'wordpress', url:'/go.htm?url=https://cn.wordpress.org/'}],
    '05': [{name:'zblog', url:'/go.htm?url=https://www.zblogcn.com/'}],
    '06': [{name:'typecho', url:'/go.htm?url=https://typecho.org/'}],
    '14': [{name:'TaoBlog', url:'/go.htm?url=https://blog.twofei.com/blog'}],
    '21': [{name:'清雨', url:'/go.htm?url=https://prain.cn/'}],
    '25': [{name:'serenade', url:'/go.htm?url=https://dyedd.cn/posts/serenade'}]
};

// ==================== AI导航数据 ====================
const aiNavData = {
    '21': [{name:'AInav人工智能导航', url:'/go.htm?url=https://www.ainav.cn/'}],
    '23': [{name:'深度AI导航', url:'/go.htm?url=https://www.deepdhai.com/'}, {name:'2345ai导航', url:'/go.htm?url=https://ai.2345.com/'}, {name:'tools-ai', url:'/go.htm?url=https://www.tools-ai.cn/'}, {name:'aibase', url:'/go.htm?url=https://top.aibase.com/'}, {name:'xiaobiuAI导航', url:'/go.htm?url=https://www.xiaobiu.cn/'}, {name:'非猪ai导航', url:'/go.htm?url=https://feizhuke.com/'}, {name:'aitobox', url:'/go.htm?url=https://aitobox.cn/nav/'}, {name:'AI技术导航', url:'/go.htm?url=https://www.codernav.cn/ai'}, {name:'aitoolbox', url:'/go.htm?url=https://aitoolbox.cn/'}, {name:'ai-toolbox net', url:'/go.htm?url=https://www.ai-toolbox.net/'}, {name:'零沫AI', url:'/go.htm?url=https://0mo.com/'}, {name:'ailookme', url:'/go.htm?url=https://www.ailookme.com/'}, {name:'ainavpro', url:'/go.htm?url=https://www.ainavpro.com/'}, {name:'易之网AI', url:'/go.htm?url=https://www.yizz.cn/'}, {name:'ai138', url:'/go.htm?url=https://www.ai138.com/'}],
    '24': [{name:'秒开导航', url:'/go.htm?url=https://www.mkdh.cn/'}, {name:'趣玩AI导航', url:'/go.htm?url=https://www.7wan.com.cn/'}, {name:'终极AI导航', url:'/go.htm?url=https://ai.zjnav.com/'}, {name:'AI001工具导航', url:'/go.htm?url=https://www.ai001.com/'}, {name:'AI派', url:'/go.htm?url=https://www.aipie.top/home'}, {name:'AI吧', url:'/go.htm?url=https://ai-bar.cn/'}, {name:'AI一站通', url:'/go.htm?url=https://www.aiyzt.com/'}, {name:'meoai', url:'/go.htm?url=https://www.meoai.net/'}, {name:'热卡卡AI导航', url:'/go.htm?url=http://www.aidh.cn/'}, {name:'aittdh', url:'/go.htm?url=https://ai.ttdh.cn/favorites/gn'}, {name:'aiaiv', url:'/go.htm?url=https://aiaiv.cn/'}, {name:'懂AI', url:'/go.htm?url=https://www.dongaigc.com/nav'}, {name:'AI设计导航', url:'/go.htm?url=https://aiiiii.com.cn/'}, {name:'hui-ai', url:'/go.htm?url=https://www.hui-ai.cn/'}, {name:'aiopenminds', url:'/go.htm?url=https://www.aiopenminds.com/common'}, {name:'霂明AI导航', url:'/go.htm?url=https://n.mumingfang.com/ai'}, {name:'图钉ai', url:'/go.htm?url=https://www.tudingai.com/'}, {name:'xinfangs-Ai工具箱', url:'/go.htm?url=https://ai.xinfangs.com/'}, {name:'aitool8', url:'/go.htm?url=https://aitool8.com/'}, {name:'千库AI导航', url:'/go.htm?url=https://kubao.588tool.com/'}, {name:'尘埃AI', url:'/go.htm?url=https://www.chenai.com/category.html'}],
    '25': [{name:'AI工具集导航', url:'/go.htm?url=https://ai-bot.cn/'}, {name:'AI导航站', url:'/go.htm?url=https://ai-nav.net/'}, {name:'AI导航', url:'/go.htm?url=https://aidh.net/'}, {name:'AI神器榜·脑榜', url:'/go.htm?url=https://www.naobang.com/'}, {name:'Toolify', url:'/go.htm?url=https://www.toolify.ai/zh/'}, {name:'aihub', url:'/go.htm?url=https://www.aihub.cn/'}, {name:'aigc', url:'/go.htm?url=https://www.aigc.cn/'}, {name:'发现AI', url:'/go.htm?url=https://www.faxianai.com/'}, {name:'360AI导航', url:'/go.htm?url=https://ai.hao.360.com/'}, {name:'AI神器', url:'/go.htm?url=https://aishenqi.net/'}, {name:'AI工具箱', url:'/go.htm?url=https://ai-kit.cn/'}, {name:'2ai', url:'/go.htm?url=https://www.2ai.cn/'}, {name:'墨鱼', url:'/go.htm?url=https://www.moyuxx.com/'}, {name:'爱搜AI导航站', url:'/go.htm?url=https://aiso.space/'}, {name:'AIG123-AI工具导航', url:'/go.htm?url=https://www.aig123.com/'}, {name:'aitools', url:'/go.htm?url=https://aitools.fyi/zh'}, {name:'AMZ123', url:'/go.htm?url=https://www.amz123.com/ai'}, {name:'优设AI导航', url:'/go.htm?url=https://hao.uisdc.com/ai/'}, {name:'得到AI学习圈工具箱', url:'/go.htm?url=https://aitools.dedao.cn/'}, {name:'猫目', url:'/go.htm?url=https://maomu.com/'}, {name:'openi', url:'/go.htm?url=https://openi.cn/'}, {name:'Ai集思', url:'/go.htm?url=https://www.thinkinginai.cn/'}, {name:'ai云导航', url:'/go.htm?url=https://ai.yunwz.net/'}, {name:'botlib AI导航', url:'/go.htm?url=https://botlib.cn/'}, {name:'AI工具', url:'/go.htm?url=https://www.aigongjuji.com.cn/'}, {name:'果果ai', url:'/go.htm?url=https://www.gogoai.com/'}, {name:'智研社AI导航', url:'/go.htm?url=https://www.ai-blog.cn/site'}, {name:'toolifyai', url:'/go.htm?url=https://toolifyai.cn/'}, {name:'2345ai', url:'/go.htm?url=https://www.2345ai.com/'}],
    '26': [{name:'AI收录网', url:'/go.htm?url=https://www.aislw.com/'}]
};

// ==================== 特色网址导航数据    , {name:'', url:'/go.htm?url='}     ====================
const featuredNavData = {
    '06': [{name:'香港網IM123', url:'/go.htm?url=https://im123.com/'}, {name:'world68世界各国网址大全', url:'/go.htm?url=https://www.world68.com/'}],
    '08': [{name:'开源软件分类导航', url:'/go.htm?url=https://www.oschina.net/project/tags'}],
    '09': [{name:'海外导航', url:'/go.htm?url=https://www.hhlink.com/'}, {name:'有趣网址之家', url:'/go.htm?url=https://youquhome.com/'}, {name:'凤凰网财经导航', url:'/go.htm?url=https://finance.ifeng.com/partners.shtml'}],
    '10': [{name:'高考789网址导航', url:'/go.htm?url=http://www.gaokao789.com/'}, {name:'egouz国外网址大全', url:'/go.htm?url=https://www.egouz.com/'}],
    '11': [{name:'199it大数据导航', url:'/go.htm?url=https://hao.199it.com/'}, {name:'pm265产品经理导航', url:'/go.htm?url=https://www.pm265.com/'}],
    '12': [{name:'雪球财经网址导航', url:'/go.htm?url=https://xueqiu.com/dh'}, {name:'jyshare菜鸟开发设计工具大全', url:'/go.htm?url=https://www.jyshare.com/'}],
    '13': [{name:'优设导航', url:'/go.htm?url=https://hao.uisdc.com/'}, {name:'HUI前端网址导航', url:'/go.htm?url=http://www.h-ui.net/site.shtml'}, {name:'红歌会网址导航', url:'/go.htm?url=https://hao.szhgh.com/'}],
    '14': [{name:'1纳米学习导航', url:'/go.htm?url=http://1nami.com/'}, {name:'知筑导航', url:'/go.htm?url=http://www.archi123.com/#/archi'}],
    '15': [{name:'设计导航', url:'/go.htm?url=https://hao.shejidaren.com/'}, {name:'萌导航', url:'/go.htm?url=https://www.moe48.com/'}, {name:'料网外贸导航', url:'/go.htm?url=https://www.liaosam.com/go/'}],
    '16': [{name:'虫部落快搜', url:'/go.htm?url=https://search.chongbuluo.com/'}, {name:'虫部落学术搜索', url:'/go.htm?url=https://scholar.chongbuluo.com/'}, {name:'创造狮创意工作者导航', url:'/go.htm?url=https://chuangzaoshi.com/'}, {name:'AMZ123跨境导航', url:'/go.htm?url=https://www.amz123.com/'}],
    '17': [{name:'allsaas应用导航', url:'/go.htm?url=https://www.allsaas.cn/'}, {name:'creativemass创意导航', url:'/go.htm?url=https://creativemass.cn/'}, {name:'善其事运营导航', url:'/go.htm?url=https://www.shanqishi.com/'}, {name:'木虫学术导航', url:'/go.htm?url=https://hao.muchong.com/'}, {name:'北邮人导航', url:'/go.htm?url=https://byr-navi.com/'}, {name:'黑客之门', url:'/go.htm?url=https://www.hackerdoor.com/'}],
    '18': [{name:'三顿PPT导航', url:'/go.htm?url=https://www.sandunppt.com/'}],
    '19': [{name:'考拉新媒体导航', url:'/go.htm?url=https://www.kaolamedia.com/'}, {name:'91搜图导航', url:'/go.htm?url=https://www.91sotu.com/'}, {name:'addog广告人导航', url:'/go.htm?url=https://www.addog.vip/'}, {name:'媒帮派', url:'/go.htm?url=https://123.meibp.com/'}],
    '20': [{name:'资源帝电子书导航', url:'/go.htm?url=https://shu.ziyuandi.cn/'}, {name:'SciHub学术导航', url:'/go.htm?url=https://www.scihub.net.cn/'}, {name:'学吧导航', url:'/go.htm?url=https://www.xue8nav.com/'}, {name:'广告没门广告人导航', url:'/go.htm?url=https://adnodoor.com/nav/'}, {name:'pickfree', url:'/go.htm?url=https://www.pickfree.cn/'}],
    '21': [{name:'drugx药研导航', url:'/go.htm?url=https://drugx.cn/'}, {name:'cns学术导航', url:'/go.htm?url=https://cnspub.com/'}, {name:'CXY521程序员导航', url:'/go.htm?url=http://cxy521.com/'}, {name:'果壳任意门', url:'/go.htm?url=https://gate.guohere.com/'}, {name:'程序员盒子', url:'/go.htm?url=https://www.coderutil.com/'}, {name:'办公人导航', url:'/go.htm?url=https://www.bgrdh.com/'}, {name:'甲方叭叭设计导航', url:'/go.htm?url=https://jiafangbb.com/'}],
    '22': [{name:'法律时代·导航', url:'/go.htm?url=https://yesen.cn/'}],
    '23': [{name:'影视宝藏导航', url:'/go.htm?url=https://tv.baozangdh.com/'}, {name:'OSLAW', url:'/go.htm?url=https://www.oslaw.cn/site-nav'}],
    '24': [{name:'二次元宝藏导航', url:'/go.htm?url=https://acg.baozangdh.com/'}, {name:'资源帝VR导航', url:'/go.htm?url=https://vr.ziyuandi.cn/'}, {name:'mjj网址导航', url:'/go.htm?url=http://www.mjj.vip/'} , {name:'卡卡罗特导航', url:'/go.htm?url=https://blog.share888.top/nav/'}  ],
    '25': [{name:'猫步求职导航', url:'/go.htm?url=https://nav.maobucv.com/'},  {name:'图标西西', url:'/go.htm?url=https://icon.cc/'}]
};

// ==================== 工具导航数据, {name:'', url:'/go.htm?url='}   ====================
const toolNavData = {
    '97': [{name:'archive网站历史', url:'/go.htm?url=aHR0cHM6Ly9hcmNoaXZlLm9yZy8%3D'}],
    '07': [{name:'蛙蛙工具', url:'/go.htm?url=https://www.iamwawa.cn/'}],
	  '08': [{name:'github', url:'/go.htm?url=https://github.com/'}],
    '13': [{name:'trustasia证书在线工具集', url:'/go.htm?url=https://www.trustasia.com/tools'}],
    '14': [{name:'创可贴', url:'/go.htm?url=https://www.chuangkit.com/'}],
    '16': [{name:'万能计算器', url:'/go.htm?url=https://www.omnicalculator.com/'}],
    '17': [{name:'奶牛快传', url:'/go.htm?url=https://cowtransfer.com/'}, {name:'孟坤工具', url:'/go.htm?url=https://tool.mkblog.cn/'}],
    '18': [{name:'airportal空投快传', url:'/go.htm?url=https://www.airportal.cn/'}, {name:'remove抠图', url:'/go.htm?url=https://www.remove.bg/zh'}],
    '19': [{name:'docsmall', url:'/go.htm?url=https://docsmall.com/'}, {name:'效率工具', url:'/go.htm?url=https://blog.luckly-mjw.cn/tool-show/index.html'}, {name:'m3u8视频提取', url:'/go.htm?url=http://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html'}, {name:'橘子seo网站历史等', url:'/go.htm?url=https://seo.juziseo.com/'}, {name:'emojiall', url:'/go.htm?url=https://www.emojiall.com/'}  ],
    '20': [{name:'白描', url:'/go.htm?url=https://web.baimiaoapp.com/'}],
    '21': [{name:'美图秀秀在线版', url:'/go.htm?url=https://pc.meitu.com/toolbox'}],
    '22': [{name:'迅捷Markdown', url:'/go.htm?url=https://markdown.liuchengtu.com/'}, {name:'imathtool公式编辑器', url:'/go.htm?url=https://www.imathtool.com/'}, {name:'屏幕录制', url:'/go.htm?url=https://utils.fun/screen-record'}],
    '23': [{name:'okmiku', url:'/go.htm?url=https://okmiku.com/'}, {name:'TextIn Tools免费OCR工具', url:'/go.htm?url=https://tools.textin.com/'}, {name:'myfreemp3', url:'/go.htm?url=https://www.myfreemp3.com.cn/'}],
    '24': [{name:'iping', url:'/go.htm?url=https://www.iping.cc/'}],
    '25': [{name:'base64', url:'/go.htm?url=https://www.base64.sh/zh-Hans/'}, {name:'二𫈉转换', url:'/go.htm?url=https://ejz.is-an.org/'}, {name:'30万财务', url:'/go.htm?url=https://300000.cn/'}, {name:'apples ai工具推荐', url:'/go.htm?url=https://apples.cn/'}],
	 '26': [{name:'base64-URL‑safe ', url:'/go.htm?url=https://laodongzhe.cn/tools/base64-tool.html'}]
};

// ==================== 工具箱导航数据 ====================
const toolboxData = {
    '06': [{name:'chinaz站长工具', url:'/go.htm?url=https://tool.chinaz.com/'}],
    '07': [{name:'蛙蛙工具', url:'/go.htm?url=https://www.iamwawa.cn/'}, {name:'脚本之家在线工具', url:'/go.htm?url=https://tools.jb51.net/'}],
    '12': [{name:'tool lu在线工具', url:'/go.htm?url=https://tool.lu/'}],
    '13': [{name:'oschina工具', url:'/go.htm?url=https://tool.oschina.net/'}, {name:'trustasia证书在线工具集', url:'/go.htm?url=https://www.trustasia.com/tools'}],
    '15': [{name:'爱资料工具', url:'/go.htm?url=https://www.toolnb.com/'}],
    '19': [{name:'docsmall', url:'/go.htm?url=https://docsmall.com/'}],
    '20': [{name:'uu在线工具', url:'/go.htm?url=https://uutool.cn/'}],
    '22': [{name:'工具哇', url:'/go.htm?url=https://toolwa.com/'}, {name:'p2hp程序员工具', url:'/go.htm?url=https://tool.p2hp.com/'}],
    '23': [{name:'精准云工具', url:'/go.htm?url=https://tool.caoniang.com/'}, {name:'千图工具', url:'/go.htm?url=https://1000tool.com/'}, {name:'okmiku', url:'/go.htm?url=https://okmiku.com/'}],
    '24': [{name:'46啦工具', url:'/go.htm?url=https://www.46.la/'}, {name:'V3在线工具', url:'/go.htm?url=http://www.v3ol.com/'}, {name:'AI图片变清晰等处理', url:'/go.htm?url=https://imgupscaler.ai/zh/photo-enhancer/'},{name:'', url:'/go.htm?url= '},{name:'', url:'/go.htm?url='},{name:'', url:'/go.htm?url= '}],
    '25': [{name:'魔方工具', url:'/go.htm?url=https://www.mofangtool.com/'}, {name:'tcp-mk工具箱', url:'/go.htm?url=https://tcp.mk/'}],
	 '26': [{name:'劳动者工具箱', url:'/go.htm?url=https://laodongzhe.cn/tools/'}]
};

// ==================== whois导航数据 , {name:'', url:'/go.htm?url='}   ====================
const whoisData = {
    '23': [{name:'who.cx', url:'/go.htm?url=https://who.cx/'}],
    '25': [{name:'w.is whois', url:'/go.htm?url=https://w.is/'}],
    '26': [{name:'hu.is', url:'/go.htm?url=https://hu.is/'}]
};

// ==================== 邮箱导航数据 ====================
const emailData = {
    '97': [{name:'163邮箱', url:'/go.htm?url=https://mail.163.com/'}],
    '02': [{name:'qq邮箱', url:'/go.htm?url=https://mail.qq.com/'}],
    '03': [{name:'126邮箱', url:'/go.htm?url=https://mail.126.com/'}],
    '04': [{name:'gmail', url:'/go.htm?url=http://gmail.com/'}],
    '07': [{name:'yeah邮箱', url:'/go.htm?url=https://mail.yeah.net/'}],
    '10': [{name:'腾讯企业邮', url:'/go.htm?url=https://exmail.qq.com/login'}]
};

// ==================== 官方博客导航 , {name:'', url:'/go.htm?url='} ====================
const officialblogdata = {
	'10': [{name:'cloudflare博客', url:'/go.htm?url=https://blog.cloudflare.com/'}],
	'13': [{name:'美团技术团队', url:'/go.htm?url=https://tech.meituan.com/'}, {name:'有道技术博客', url:'/go.htm?url=https://techblog.youdao.com/'} ],
	'16': [{name:'谷歌官方博客', url:'/go.htm?url=aHR0cHM6Ly9ibG9nLmdvb2dsZS8%3D'}],
		'21': [{name:'cloudflare中文博客', url:'/go.htm?url=https://blog.cloudflare.com/zh-cn/'}],

    '22': [{name:'kaqi官方博客', url:'/go.htm?url=https://blog.kagi.com/'}]
};

// ==================== 付费博客导航 ====================
const paidBlogData = {
    '20': [{name:'happyxiao', url:'/go.htm?url=https://happyxiao.com/'}]
};
// ==================== ai人工智能 ====================
const aiData = {
    '23': [{name:'deepseek', url:'/go.htm?url=www.deepseek.com'},{name:'豆包', url:'/go.htm?url=https://www.doubao.com/'}, {name:'千问', url:'/go.htm?url=https://www.qianwen.com/'}],
	'24': [{name:'纳米ai', url:'/go.htm?url=http://www.n.cn'}]
};

// ==================== 百科大全导航 ====================
const pediadata = {
	'01': [{name:'wikipedia', url:'/go.htm?url=aHR0cHM6Ly93d3cud2lraXBlZGlhLm9yZy8%3D'}],
	'05': [{name:'快懂百科', url:'/go.htm?url=https://www.baike.com/'}],
	'05': [{name:'百度百科', url:'/go.htm?url=https://baike.baidu.com/'}],
    '10': [{name:'发音字典', url:'/go.htm?url=https://www.voicedic.com/'}],
    '13': [{name:'wikihow', url:'/go.htm?url=https://zh.wikihow.com/'}],
    '15': [{name:'观沧海', url:'/go.htm?url=https://www.ageeye.cn/'}],
    '16': [{name:'纪妖', url:'/go.htm?url=https://www.cbaigui.com/'}],
    '18': [{name:'全历史', url:'/go.htm?url=https://www.allhistory.com/'}]
};

// ==================== 搜索引擎大全导航 , {name:'', url:'/go.htm?url='}   ====================
const SearchEngineData = {
	 '98': [{name:'谷歌', url:'/go.htm?url=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D'}],
    '00': [{name:'百度', url:'/go.htm?url=https://www.baidu.com/'}, {name:'谷歌高级搜索', url:'/go.htm?url=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9hZHZhbmNlZF9zZWFyY2g%3D'}],
	'03': [{name:'百度高级搜索', url:'/go.htm?url=https://www.baidu.com/gaoji/advanced.html'}],
	'07': [{name:'搜狗高级搜搜', url:'/go.htm?url=https://www.sogou.com/advanced/advanced.html'}],
    '09': [{name:'bing', url:'/go.htm?url=https://www.bing.com/'}],
	 '12': [{name:'360搜索', url:'/go.htm?url=https://www.so.com/'}],
    '18': [{name:'kaqi', url:'/go.htm?url=https://kagi.com/'}],
	'20': [{name:'百度开发者搜索', url:'/go.htm?url=https://kaifa.baidu.com/'}],
	'24': [{name:'丑搜-博客搜索', url:'/go.htm?url=https://search.save-web.org/'}]
};

// ==================== RSS工具数据 ====================
const rssData = {
    '19': [{name:'Feedval', url:'/go.htm?url=http://cn.eonval.com/'}]
};

// ==================== 学习导航数据 ====================
const studyNavData = {
    '93': [{name:'马克思主义文库', url:'/go.htm?url=aHR0cHM6Ly93d3cubWFyeGlzdHMub3JnLw%3D%3D'}],
	'06': [{name:'X', url:'/go.htm?url=https://www.X.COM/'}],
    '09': [{name:'微博', url:'/go.htm?url=https://www.WEIBO.COM'}],
    '11': [{name:'知乎', url:'/go.htm?url=https://www.zhihu.com/'}],
    '15': [{name:'微信读书', url:'/go.htm?url=https://weread.qq.com/'}],
    '25': [{name:'劳动者技术部落', url:'/go.htm?url=http://www.laodongzhe.cn'}]
};

// ==================== 域名注册网站数据  , {name:'', url:'/go.htm?url='}  ====================
const domainRegData = {
    '99': [{name:'阿里云万网', url:'/go.htm?url=https://www.net.cn/'}, {name:'中资源', url:'/go.htm?url=https://www.zzy.com/'}, {name:'新网', url:'/go.htm?url=https://www.xinnet.com/'}, {name:'godaddy', url:'/go.htm?url=http://www.godaddy.com/'}],
    '00': [{name:'namecheap', url:'/go.htm?url=https://www.namecheap.com/'}],
    '02': [{name:'西部数码', url:'/go.htm?url=https://www.west.cn/'}, {name:'dynadot', url:'/go.htm?url=https://www.dynadot.com/zh/'}],
    '04': [{name:'三五互联', url:'/go.htm?url=https://www.35.com/'}],
    '05': [{name:'易名', url:'/go.htm?url=https://www.ename.com/'}],
    '09': [{name:'爱名网', url:'/go.htm?url=https://www.22.cn/'}, {name:'cloudflare', url:'/go.htm?url=https://www.cloudflare.com'}],
    '12': [{name:'西部数码英文站', url:'/go.htm?url=https://www.west.xyz/'}, {name:'聚名网', url:'/go.htm?url=https://www.juming.com/'}],
    '13': [{name:'趣域网', url:'/go.htm?url=https://www.quyu.net/'}],
    '14': [{name:'porkbun', url:'/go.htm?url=https://porkbun.com/'}, {name:'wordpress', url:'/go.htm?url=https://wordpress.com/zh-cn/domains/'}],
    '16': [{name:'百度智能云', url:'/go.htm?url=https://cloud.baidu.com/product/bcd.html'}],
    '18': [{name:'腾讯云', url:'/go.htm?url=https://cloud.tencent.com/product/domain'}],
    '19': [{name:'阿里云国际站', url:'/go.htm?url=https://www.alibabacloud.com/'}, {name:'spaceship', url:'/go.htm?url=https://www.spaceship.com/zh/'}],
    '20': [{name:'西部数码国际版', url:'/go.htm?url=https://www.365.hk/'}],
    '21': [{name:'gname', url:'/go.htm?url=https://www.gname.com/zhcn/'}],
    '22': [{name:'火山引擎', url:'/go.htm?url=https://www.volcengine.com/product/domain-service'}],
    '25': [{name:'宝塔', url:'/go.htm?url=https://www.bt.cn/new/domain-register.html'}]
};

// ==================== 域名工具导航数据 ====================
const domainToolData = {
    '15': [{name:'tld-list域名比价', url:'/go.htm?url=https://zh-hans.tld-list.com/'}],
    '17': [{name:'玩米历史米价查询', url:'/go.htm?url=http://www.wanmi.cc/'}],
    '20': [{name:'哪煮米', url:'/go.htm?url=https://www.nazhumi.com/'}],
    '21': [{name:'可备域名后缀查询', url:'/go.htm?url=https://domain.miit.gov.cn/chinayu.jsp'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '23': [{name:'who.cx', url:'/go.htm?url=https://who.cx/'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '25': [{name:'w.is whois', url:'/go.htm?url=https://w.is/'}],
    '26': [{name:'hu.is', url:'/go.htm?url=https://hu.is/'},{name:'sanpin域管家', url:'/go.htm?url=https://sanpin.ltd'}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}]
};

// ==================== 随机访问网站数据 ====================
const randomSiteData = {
    '25': [{name:'有趣网址之家-随机趣站', url:'/go.htm?url=https://youquhome.com/random/'}]
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
                if (cleanUrl.startsWith('/go.htm?url=')) {
                    cleanUrl = cleanUrl.replace('/go.htm?url=', '');
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
    '👤 技术博客导航': blogYearsData,
    // '📡 RSS文案合集': rssFlatList, 取消这一项了 下面的rss才是   // ← 现在 rssFlatList 已经定义好了
	' RSS最新文章': 'https://laodongzhe.cn/rss.html',  // ←  添加外部链接
    '💬 独立论坛导航': forumData,
    '✉️ 邮箱服务大全': emailData,
    '📚 博客大全导航': blogNavData,
    '🎲 随机访问博客': randomBlogData,
    '☑️ 官方博客导航': officialblogdata,
    '🔍︎ 搜索引擎大全': SearchEngineData,
    '📡 独立RSS工具': rssData,
    '💻 独立博客程序': blogProgramData,
    '📖 学习导航大全': studyNavData,
    '📚︎ 独立百科大全': pediadata,
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
