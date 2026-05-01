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

// ==================== 博客年份导航数据 ====================
const blogYearsData = {
    '94': [{name:'贾斯汀', url:'/go.htm?url=https://links.net/'
                    rss: 'https://links.net/feed',  // 候选: https://links.net/atom.xml, https://links.net/rss.xml, https://links.net/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '00': [{name:'Luca', url:'/go.htm?url=https://wlj.me/'
                    rss: 'https://wlj.me/feed',  // 候选: https://wlj.me/atom.xml, https://wlj.me/rss.xml, https://wlj.me/feed.xml 等}, {name:'卢昌海 ', url:'/go.htm?url=https://www.changhai.org/'
                    rss: 'https://www.changhai.org/feed',  // 候选: https://www.changhai.org/atom.xml, https://www.changhai.org/rss.xml, https://www.changhai.org/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}],
    '01': [{name:'nc-show', url:'/go.htm?url=https://nicrosoft.net/'
                    rss: 'https://nicrosoft.net/feed',  // 候选: https://nicrosoft.net/atom.xml, https://nicrosoft.net/rss.xml, https://nicrosoft.net/feed.xml 等}, {name:'阿江守候', url:'/go.htm?url=http://www.ajiang.net/'
                    rss: 'http://www.ajiang.net/feed',  // 候选: http://www.ajiang.net/atom.xml, http://www.ajiang.net/rss.xml, http://www.ajiang.net/feed.xml 等}, {name:'东评衿就', url:'/go.htm?url=https://dongjunke.cn/'
                    rss: 'https://dongjunke.cn/feed',  // 候选: https://dongjunke.cn/atom.xml, https://dongjunke.cn/rss.xml, https://dongjunke.cn/feed.xml 等}, {name:'老痛', url:'ttps://toonkam.com'
                    rss: 'null/feed',  // 候选: null/atom.xml, null/rss.xml, null/feed.xml 等}, {name:' ', url:''}],
    '02': [{name:'Paul Graham', url:'/go.htm?url=https://paulgraham.com/'
                    rss: 'https://paulgraham.com/feed',  // 候选: https://paulgraham.com/atom.xml, https://paulgraham.com/rss.xml, https://paulgraham.com/feed.xml 等}, {name:'守望轩', url:'/go.htm?url=https://www.watch-life.net/'
                    rss: 'https://www.watch-life.net/feed',  // 候选: https://www.watch-life.net/atom.xml, https://www.watch-life.net/rss.xml, https://www.watch-life.net/feed.xml 等}, {name:' Wangjianshuo', url:'/go.htm?url=https://home.wangjianshuo.com/'
                    rss: 'https://home.wangjianshuo.com/feed',  // 候选: https://home.wangjianshuo.com/atom.xml, https://home.wangjianshuo.com/rss.xml, https://home.wangjianshuo.com/feed.xml 等},  {name:' ', url:''}],
    '03': [{name:'张智勇', url:'/go.htm?url=https://www.zyzhang.com/'
                    rss: 'https://www.zyzhang.com/feed',  // 候选: https://www.zyzhang.com/atom.xml, https://www.zyzhang.com/rss.xml, https://www.zyzhang.com/feed.xml 等},{name:'王建硕', url:'/go.htm?url=https://home.wangjianshuo.com/cn'
                    rss: 'https://home.wangjianshuo.com/feed',  // 候选: https://home.wangjianshuo.com/atom.xml, https://home.wangjianshuo.com/rss.xml, https://home.wangjianshuo.com/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '04': [{name:'kaix.in', url:'/go.htm?url=https://kaix.in/'
                    rss: 'https://kaix.in/feed',  // 候选: https://kaix.in/atom.xml, https://kaix.in/rss.xml, https://kaix.in/feed.xml 等}, {name:'龙哥', url:'/go.htm?url=https://long.ge/'
                    rss: 'https://long.ge/feed',  // 候选: https://long.ge/atom.xml, https://long.ge/rss.xml, https://long.ge/feed.xml 等}, {name:'一片瓦', url:'/go.htm?url=https://www.ixsz.com/'
                    rss: 'https://www.ixsz.com/feed',  // 候选: https://www.ixsz.com/atom.xml, https://www.ixsz.com/rss.xml, https://www.ixsz.com/feed.xml 等}, {name:'Architecting', url:'/go.htm?url=https://xujiwei.com/blog/'
                    rss: 'https://xujiwei.com/feed',  // 候选: https://xujiwei.com/atom.xml, https://xujiwei.com/rss.xml, https://xujiwei.com/feed.xml 等}, {name:'puo', url:'/go.htm?url=http://puo.cn/'
                    rss: 'http://puo.cn/feed',  // 候选: http://puo.cn/atom.xml, http://puo.cn/rss.xml, http://puo.cn/feed.xml 等}, {name:'猫大叔', url:'/go.htm?url=https://21ido.com/'
                    rss: 'https://21ido.com/feed',  // 候选: https://21ido.com/atom.xml, https://21ido.com/rss.xml, https://21ido.com/feed.xml 等}, {name:'chen', url:'/go.htm?url=https://chen.info/'
                    rss: 'https://chen.info/feed',  // 候选: https://chen.info/atom.xml, https://chen.info/rss.xml, https://chen.info/feed.xml 等}, {name:'孙老四', url:'/go.htm?url=https://lao.si/'
                    rss: 'https://lao.si/feed',  // 候选: https://lao.si/atom.xml, https://lao.si/rss.xml, https://lao.si/feed.xml 等}, {name:' 小陈故事', url:'/go.htm?url=https://www.chener.net/'
                    rss: 'https://www.chener.net/feed',  // 候选: https://www.chener.net/atom.xml, https://www.chener.net/rss.xml, https://www.chener.net/feed.xml 等}, {name:'酷壳', url:'/go.htm?url=https://coolshell.cn/'
                    rss: 'https://coolshell.cn/feed',  // 候选: https://coolshell.cn/atom.xml, https://coolshell.cn/rss.xml, https://coolshell.cn/feed.xml 等}, {name:'笨狗又一窝', url:'/go.htm?url=https://www.yewen.us/'
                    rss: 'https://www.yewen.us/feed',  // 候选: https://www.yewen.us/atom.xml, https://www.yewen.us/rss.xml, https://www.yewen.us/feed.xml 等}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}],
    '05': [{name:'王志勇', url:'/go.htm?url=http://www.auiou.com/'
                    rss: 'http://www.auiou.com/feed',  // 候选: http://www.auiou.com/atom.xml, http://www.auiou.com/rss.xml, http://www.auiou.com/feed.xml 等}, {name:'忆秋年', url:'/go.htm?url=http://www.hanshuailing.com/wordpress/'
                    rss: 'http://www.hanshuailing.com/feed',  // 候选: http://www.hanshuailing.com/atom.xml, http://www.hanshuailing.com/rss.xml, http://www.hanshuailing.com/feed.xml 等}, {name:'春田', url:'/go.htm?url=http://kaikeimura.way-nifty.com/'
                    rss: 'http://kaikeimura.way-nifty.com/feed',  // 候选: http://kaikeimura.way-nifty.com/atom.xml, http://kaikeimura.way-nifty.com/rss.xml, http://kaikeimura.way-nifty.com/feed.xml 等}, {name:'尚磊', url:'/go.htm?url=https://shanglei.net/'
                    rss: 'https://shanglei.net/feed',  // 候选: https://shanglei.net/atom.xml, https://shanglei.net/rss.xml, https://shanglei.net/feed.xml 等}, {name:'云风', url:'/go.htm?url=https://blog.codingnow.com/'
                    rss: 'https://blog.codingnow.com/feed',  // 候选: https://blog.codingnow.com/atom.xml, https://blog.codingnow.com/rss.xml, https://blog.codingnow.com/feed.xml 等}, {name:'大嘴狗狗', url:'/go.htm?url=https://www.sirit.com.cn/'
                    rss: 'https://www.sirit.com.cn/feed',  // 候选: https://www.sirit.com.cn/atom.xml, https://www.sirit.com.cn/rss.xml, https://www.sirit.com.cn/feed.xml 等}, {name:'扶苏', url:'/go.htm?url=https://pwsz.com/'
                    rss: 'https://pwsz.com/feed',  // 候选: https://pwsz.com/atom.xml, https://pwsz.com/rss.xml, https://pwsz.com/feed.xml 等}, {name:'yaner', url:'/go.htm?url=https://yaner.cc/'
                    rss: 'https://yaner.cc/feed',  // 候选: https://yaner.cc/atom.xml, https://yaner.cc/rss.xml, https://yaner.cc/feed.xml 等}, {name:'佐仔志', url:'/go.htm?url=https://www.jinbo123.com/'
                    rss: 'https://www.jinbo123.com/feed',  // 候选: https://www.jinbo123.com/atom.xml, https://www.jinbo123.com/rss.xml, https://www.jinbo123.com/feed.xml 等},{name:'Felix021', url:'/go.htm?url=https://www.felix021.com/'
                    rss: 'https://www.felix021.com/feed',  // 候选: https://www.felix021.com/atom.xml, https://www.felix021.com/rss.xml, https://www.felix021.com/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}],
    '06': [{name:'土木坛子', url:'/go.htm?url=https://tumutanzi.com/'
                    rss: 'https://tumutanzi.com/feed',  // 候选: https://tumutanzi.com/atom.xml, https://tumutanzi.com/rss.xml, https://tumutanzi.com/feed.xml 等}, {name:'s星球', url:'/go.htm?url=http://www.snbk.cn/'
                    rss: 'http://www.snbk.cn/feed',  // 候选: http://www.snbk.cn/atom.xml, http://www.snbk.cn/rss.xml, http://www.snbk.cn/feed.xml 等}, {name:'傻猫', url:'/go.htm?url=https://www.samool.com/'
                    rss: 'https://www.samool.com/feed',  // 候选: https://www.samool.com/atom.xml, https://www.samool.com/rss.xml, https://www.samool.com/feed.xml 等}, {name:'隔叶黄莺', url:'/go.htm?url=https://yanbin.blog/'
                    rss: 'https://yanbin.blog/feed',  // 候选: https://yanbin.blog/atom.xml, https://yanbin.blog/rss.xml, https://yanbin.blog/feed.xml 等}, {name:'bang', url:'/go.htm?url=https://blog.cnbang.net/'
                    rss: 'https://blog.cnbang.net/feed',  // 候选: https://blog.cnbang.net/atom.xml, https://blog.cnbang.net/rss.xml, https://blog.cnbang.net/feed.xml 等}, {name:'小胡', url:'/go.htm?url=https://hmilyld.com/'
                    rss: 'https://hmilyld.com/feed',  // 候选: https://hmilyld.com/atom.xml, https://hmilyld.com/rss.xml, https://hmilyld.com/feed.xml 等},{name:'Mukti', url:'/go.htm?url=https://feizhaojun.com/'
                    rss: 'https://feizhaojun.com/feed',  // 候选: https://feizhaojun.com/atom.xml, https://feizhaojun.com/rss.xml, https://feizhaojun.com/feed.xml 等}, {name:'joojen Zhou', url:'/go.htm?url=https://joojen.com/'
                    rss: 'https://joojen.com/feed',  // 候选: https://joojen.com/atom.xml, https://joojen.com/rss.xml, https://joojen.com/feed.xml 等}, {name:'eallion', url:'/go.htm?url=https://www.eallion.com/'
                    rss: 'https://www.eallion.com/feed',  // 候选: https://www.eallion.com/atom.xml, https://www.eallion.com/rss.xml, https://www.eallion.com/feed.xml 等}, {name:'黄杰敏', url:'/go.htm?url=https://www.jiemin.com/'
                    rss: 'https://www.jiemin.com/feed',  // 候选: https://www.jiemin.com/atom.xml, https://www.jiemin.com/rss.xml, https://www.jiemin.com/feed.xml 等}, {name:'香水', url:'/go.htm?url=https://xsui.com/'
                    rss: 'https://xsui.com/feed',  // 候选: https://xsui.com/atom.xml, https://xsui.com/rss.xml, https://xsui.com/feed.xml 等}, {name:'平顶山', url:'/go.htm?url=https://pingdingshan.me/'
                    rss: 'https://pingdingshan.me/feed',  // 候选: https://pingdingshan.me/atom.xml, https://pingdingshan.me/rss.xml, https://pingdingshan.me/feed.xml 等}, {name:'Slyar', url:'/go.htm?url=https://www.slyar.com/'
                    rss: 'https://www.slyar.com/feed',  // 候选: https://www.slyar.com/atom.xml, https://www.slyar.com/rss.xml, https://www.slyar.com/feed.xml 等}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}],
    '07': [{name:'祁劲松', url:'/go.htm?url=https://jamesqi.com/'
                    rss: 'https://jamesqi.com/feed',  // 候选: https://jamesqi.com/atom.xml, https://jamesqi.com/rss.xml, https://jamesqi.com/feed.xml 等}, {name:'张子阳', url:'/go.htm?url=http://www.tracefact.net/'
                    rss: 'http://www.tracefact.net/feed',  // 候选: http://www.tracefact.net/atom.xml, http://www.tracefact.net/rss.xml, http://www.tracefact.net/feed.xml 等}, {name:'longluo', url:'/go.htm?url=https://www.longluo.me/'
                    rss: 'https://www.longluo.me/feed',  // 候选: https://www.longluo.me/atom.xml, https://www.longluo.me/rss.xml, https://www.longluo.me/feed.xml 等}, {name:'梁波', url:'/go.htm?url=http://www.liangbo.org/'
                    rss: 'http://www.liangbo.org/feed',  // 候选: http://www.liangbo.org/atom.xml, http://www.liangbo.org/rss.xml, http://www.liangbo.org/feed.xml 等}, {name:'威言威语', url:'/go.htm?url=https://www.weisay.com/blog/'
                    rss: 'https://www.weisay.com/feed',  // 候选: https://www.weisay.com/atom.xml, https://www.weisay.com/rss.xml, https://www.weisay.com/feed.xml 等}, {name:'PHP', url:'/go.htm?url=https://www.liqingbo.com/'
                    rss: 'https://www.liqingbo.com/feed',  // 候选: https://www.liqingbo.com/atom.xml, https://www.liqingbo.com/rss.xml, https://www.liqingbo.com/feed.xml 等}, {name:'joyqi', url:'/go.htm?url=https://joyqi.com/'
                    rss: 'https://joyqi.com/feed',  // 候选: https://joyqi.com/atom.xml, https://joyqi.com/rss.xml, https://joyqi.com/feed.xml 等}, {name:'无标题文档', url:'/go.htm?url=https://www.gracecode.com/'
                    rss: 'https://www.gracecode.com/feed',  // 候选: https://www.gracecode.com/atom.xml, https://www.gracecode.com/rss.xml, https://www.gracecode.com/feed.xml 等}, {name:'悠见', url:'/go.htm?url=https://yufm.com/'
                    rss: 'https://yufm.com/feed',  // 候选: https://yufm.com/atom.xml, https://yufm.com/rss.xml, https://yufm.com/feed.xml 等}, {name:'FROYO', url:'/go.htm?url=https://www.izhuyue.com/'
                    rss: 'https://www.izhuyue.com/feed',  // 候选: https://www.izhuyue.com/atom.xml, https://www.izhuyue.com/rss.xml, https://www.izhuyue.com/feed.xml 等}, {name:'织梦岁月', url:'/go.htm?url=https://zhujianlin.com/'
                    rss: 'https://zhujianlin.com/feed',  // 候选: https://zhujianlin.com/atom.xml, https://zhujianlin.com/rss.xml, https://zhujianlin.com/feed.xml 等},{name:'苏洋', url:'/go.htm?url=https://soulteary.com/'
                    rss: 'https://soulteary.com/feed',  // 候选: https://soulteary.com/atom.xml, https://soulteary.com/rss.xml, https://soulteary.com/feed.xml 等}, {name:'似水流年', url:'/go.htm?url=https://www.longlan.net/'
                    rss: 'https://www.longlan.net/feed',  // 候选: https://www.longlan.net/atom.xml, https://www.longlan.net/rss.xml, https://www.longlan.net/feed.xml 等}, {name:'龙天小筑', url:'/go.htm?url=https://www.dragongod.net/'
                    rss: 'https://www.dragongod.net/feed',  // 候选: https://www.dragongod.net/atom.xml, https://www.dragongod.net/rss.xml, https://www.dragongod.net/feed.xml 等}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}],
    '08': [{name:'阿呆生活志', url:'/go.htm?url=https://qsir.cn/'
                    rss: 'https://qsir.cn/feed',  // 候选: https://qsir.cn/atom.xml, https://qsir.cn/rss.xml, https://qsir.cn/feed.xml 等}, {name:'懋和道人', url:'/go.htm?url=https://www.dao.js.cn/'
                    rss: 'https://www.dao.js.cn/feed',  // 候选: https://www.dao.js.cn/atom.xml, https://www.dao.js.cn/rss.xml, https://www.dao.js.cn/feed.xml 等}, {name:'杜郎俊赏', url:'/go.htm?url=https://dujun.io/'
                    rss: 'https://dujun.io/feed',  // 候选: https://dujun.io/atom.xml, https://dujun.io/rss.xml, https://dujun.io/feed.xml 等}, {name:'虹墨', url:'/go.htm?url=https://www.imaegoo.com/'
                    rss: 'https://www.imaegoo.com/feed',  // 候选: https://www.imaegoo.com/atom.xml, https://www.imaegoo.com/rss.xml, https://www.imaegoo.com/feed.xml 等}, {name:'军', url:'/go.htm?url=https://me.xu19.com/'
                    rss: 'https://me.xu19.com/feed',  // 候选: https://me.xu19.com/atom.xml, https://me.xu19.com/rss.xml, https://me.xu19.com/feed.xml 等}, {name:'小气的神', url:'/go.htm?url=https://mdong.org/'
                    rss: 'https://mdong.org/feed',  // 候选: https://mdong.org/atom.xml, https://mdong.org/rss.xml, https://mdong.org/feed.xml 等}, {name:'蓝卡', url:'/go.htm?url=https://www.lanka.cn/'
                    rss: 'https://www.lanka.cn/feed',  // 候选: https://www.lanka.cn/atom.xml, https://www.lanka.cn/rss.xml, https://www.lanka.cn/feed.xml 等},{name:'龙Ge笔迹', url:'/go.htm?url=https://www.izhailong.com/'
                    rss: 'https://www.izhailong.com/feed',  // 候选: https://www.izhailong.com/atom.xml, https://www.izhailong.com/rss.xml, https://www.izhailong.com/feed.xml 等}, {name:'刘荣星', url:'/go.htm?url=https://www.liurongxing.com/'
                    rss: 'https://www.liurongxing.com/feed',  // 候选: https://www.liurongxing.com/atom.xml, https://www.liurongxing.com/rss.xml, https://www.liurongxing.com/feed.xml 等}, {name:'纸短情长', url:'/go.htm?url=https://www.gtdstudy.com/'
                    rss: 'https://www.gtdstudy.com/feed',  // 候选: https://www.gtdstudy.com/atom.xml, https://www.gtdstudy.com/rss.xml, https://www.gtdstudy.com/feed.xml 等}, {name:'小桥流水人家', url:'/go.htm?url=https://baiqiuyi.com/'
                    rss: 'https://baiqiuyi.com/feed',  // 候选: https://baiqiuyi.com/atom.xml, https://baiqiuyi.com/rss.xml, https://baiqiuyi.com/feed.xml 等}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}],
    '09': [{name:'老张', url:'/go.htm?url=https://laozhang.org/'
                    rss: 'https://laozhang.org/feed',  // 候选: https://laozhang.org/atom.xml, https://laozhang.org/rss.xml, https://laozhang.org/feed.xml 等}, {name:'laike9m', url:'/go.htm?url=https://laike9m.com/'
                    rss: 'https://laike9m.com/feed',  // 候选: https://laike9m.com/atom.xml, https://laike9m.com/rss.xml, https://laike9m.com/feed.xml 等}, {name:'一起养蜂', url:'/go.htm?url=https://artfax.com/'
                    rss: 'https://artfax.com/feed',  // 候选: https://artfax.com/atom.xml, https://artfax.com/rss.xml, https://artfax.com/feed.xml 等}, {name:'多多', url:'/go.htm?url=https://ddlog.cn/'
                    rss: 'https://ddlog.cn/feed',  // 候选: https://ddlog.cn/atom.xml, https://ddlog.cn/rss.xml, https://ddlog.cn/feed.xml 等}, {name:'老刘', url:'/go.htm?url=https://iliu.org/'
                    rss: 'https://iliu.org/feed',  // 候选: https://iliu.org/atom.xml, https://iliu.org/rss.xml, https://iliu.org/feed.xml 等}, {name:'欧雷', url:'/go.htm?url=https://ourai.ws/'
                    rss: 'https://ourai.ws/feed',  // 候选: https://ourai.ws/atom.xml, https://ourai.ws/rss.xml, https://ourai.ws/feed.xml 等}, {name:'1900', url:'/go.htm?url=https://1900.live/'
                    rss: 'https://1900.live/feed',  // 候选: https://1900.live/atom.xml, https://1900.live/rss.xml, https://1900.live/feed.xml 等}, {name:'老卫', url:'/go.htm?url=https://waylau.com/'
                    rss: 'https://waylau.com/feed',  // 候选: https://waylau.com/atom.xml, https://waylau.com/rss.xml, https://waylau.com/feed.xml 等}, {name:'纸鹿摸鱼处', url:'/go.htm?url=https://blog.zhilu.site/'
                    rss: 'https://blog.zhilu.site/feed',  // 候选: https://blog.zhilu.site/atom.xml, https://blog.zhilu.site/rss.xml, https://blog.zhilu.site/feed.xml 等}, {name:'大峰笔记', url:'/go.htm?url=https://dafengbiji.com/'
                    rss: 'https://dafengbiji.com/feed',  // 候选: https://dafengbiji.com/atom.xml, https://dafengbiji.com/rss.xml, https://dafengbiji.com/feed.xml 等},{name:'木木木木木', url:'/go.htm?url=https://immmmm.com/'
                    rss: 'https://immmmm.com/feed',  // 候选: https://immmmm.com/atom.xml, https://immmmm.com/rss.xml, https://immmmm.com/feed.xml 等}, {name:'邹志强', url:'/go.htm?url=http://www.zouzhiqiang.com/'
                    rss: 'http://www.zouzhiqiang.com/feed',  // 候选: http://www.zouzhiqiang.com/atom.xml, http://www.zouzhiqiang.com/rss.xml, http://www.zouzhiqiang.com/feed.xml 等}, {name:'谁见到过风？', url:'/go.htm?url=https://www.seenthewind.com/'
                    rss: 'https://www.seenthewind.com/feed',  // 候选: https://www.seenthewind.com/atom.xml, https://www.seenthewind.com/rss.xml, https://www.seenthewind.com/feed.xml 等}, {name:'张鑫旭', url:'/go.htm?url=https://www.zhangxinxu.com/'
                    rss: 'https://www.zhangxinxu.com/feed',  // 候选: https://www.zhangxinxu.com/atom.xml, https://www.zhangxinxu.com/rss.xml, https://www.zhangxinxu.com/feed.xml 等}, {name:'疆飞', url:'/go.htm?url=https://www.jiangfei.net/'
                    rss: 'https://www.jiangfei.net/feed',  // 候选: https://www.jiangfei.net/atom.xml, https://www.jiangfei.net/rss.xml, https://www.jiangfei.net/feed.xml 等}, {name:'魅力', url:'/go.htm?url=http://www.58zn.cn/'
                    rss: 'http://www.58zn.cn/feed',  // 候选: http://www.58zn.cn/atom.xml, http://www.58zn.cn/rss.xml, http://www.58zn.cn/feed.xml 等}, {name:'', url:''}],
    '10': [{name:'宇间草', url:'/go.htm?url=https://2days.org/'
                    rss: 'https://2days.org/feed',  // 候选: https://2days.org/atom.xml, https://2days.org/rss.xml, https://2days.org/feed.xml 等}, {name:'老谢', url:'/go.htm?url=https://www.xj123.info/'
                    rss: 'https://www.xj123.info/feed',  // 候选: https://www.xj123.info/atom.xml, https://www.xj123.info/rss.xml, https://www.xj123.info/feed.xml 等}, {name:'lilydjwg', url:'/go.htm?url=https://blog.lilydjwg.me/'
                    rss: 'https://blog.lilydjwg.me/feed',  // 候选: https://blog.lilydjwg.me/atom.xml, https://blog.lilydjwg.me/rss.xml, https://blog.lilydjwg.me/feed.xml 等}, {name:'the5fire', url:'/go.htm?url=https://www.the5fire.com/'
                    rss: 'https://www.the5fire.com/feed',  // 候选: https://www.the5fire.com/atom.xml, https://www.the5fire.com/rss.xml, https://www.the5fire.com/feed.xml 等}, {name:'piglei', url:'/go.htm?url=https://www.piglei.com/'
                    rss: 'https://www.piglei.com/feed',  // 候选: https://www.piglei.com/atom.xml, https://www.piglei.com/rss.xml, https://www.piglei.com/feed.xml 等}, {name:'雅余', url:'/go.htm?url=https://yayu.net/'
                    rss: 'https://yayu.net/feed',  // 候选: https://yayu.net/atom.xml, https://yayu.net/rss.xml, https://yayu.net/feed.xml 等}, {name:'limboy', url:'/go.htm?url=https://limboy.me/'
                    rss: 'https://limboy.me/feed',  // 候选: https://limboy.me/atom.xml, https://limboy.me/rss.xml, https://limboy.me/feed.xml 等},{name:'天一生水', url:'/go.htm?url=https://www.jiangyu.org/'
                    rss: 'https://www.jiangyu.org/feed',  // 候选: https://www.jiangyu.org/atom.xml, https://www.jiangyu.org/rss.xml, https://www.jiangyu.org/feed.xml 等}, {name:'笨笨天地', url:'/go.htm?url=https://www.713660.com/'
                    rss: 'https://www.713660.com/feed',  // 候选: https://www.713660.com/atom.xml, https://www.713660.com/rss.xml, https://www.713660.com/feed.xml 等}, {name:'忆往事', url:'/go.htm?url=https://zhou.ge/'
                    rss: 'https://zhou.ge/feed',  // 候选: https://zhou.ge/atom.xml, https://zhou.ge/rss.xml, https://zhou.ge/feed.xml 等}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}, {name:'', url:''}],
    '11': [{name:'耳朵的主人', url:'/go.htm?url=https://www.edzbe.com/'
                    rss: 'https://www.edzbe.com/feed',  // 候选: https://www.edzbe.com/atom.xml, https://www.edzbe.com/rss.xml, https://www.edzbe.com/feed.xml 等}, {name:'老孙', url:'/go.htm?url=https://www.imsun.org/'
                    rss: 'https://www.imsun.org/feed',  // 候选: https://www.imsun.org/atom.xml, https://www.imsun.org/rss.xml, https://www.imsun.org/feed.xml 等}, {name:'小癞子', url:'/go.htm?url=https://justyy.com/'
                    rss: 'https://justyy.com/feed',  // 候选: https://justyy.com/atom.xml, https://justyy.com/rss.xml, https://justyy.com/feed.xml 等}, {name:'陪她去流浪', url:'/go.htm?url=https://blog.twofei.com/'
                    rss: 'https://blog.twofei.com/feed',  // 候选: https://blog.twofei.com/atom.xml, https://blog.twofei.com/rss.xml, https://blog.twofei.com/feed.xml 等}, {name:'罗磊', url:'/go.htm?url=https://luolei.org/'
                    rss: 'https://luolei.org/feed',  // 候选: https://luolei.org/atom.xml, https://luolei.org/rss.xml, https://luolei.org/feed.xml 等}, {name:'phodal', url:'/go.htm?url=https://www.phodal.com/blog/'
                    rss: 'https://www.phodal.com/feed',  // 候选: https://www.phodal.com/atom.xml, https://www.phodal.com/rss.xml, https://www.phodal.com/feed.xml 等},{name:'周涛', url:'/go.htm?url=https://www.ediok.cn/'
                    rss: 'https://www.ediok.cn/feed',  // 候选: https://www.ediok.cn/atom.xml, https://www.ediok.cn/rss.xml, https://www.ediok.cn/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}],
    '12': [{name:'贱志', url:'/go.htm?url=https://fatesinger.com/'
                    rss: 'https://fatesinger.com/feed',  // 候选: https://fatesinger.com/atom.xml, https://fatesinger.com/rss.xml, https://fatesinger.com/feed.xml 等}, {name:'香菇肥牛', url:'/go.htm?url=https://qing.su/'
                    rss: 'https://qing.su/feed',  // 候选: https://qing.su/atom.xml, https://qing.su/rss.xml, https://qing.su/feed.xml 等}, {name:'徐建伟', url:'/go.htm?url=http://www.xulog.cn/'
                    rss: 'http://www.xulog.cn/feed',  // 候选: http://www.xulog.cn/atom.xml, http://www.xulog.cn/rss.xml, http://www.xulog.cn/feed.xml 等}, {name:'Tokin', url:'/go.htm?url=https://biji.io/'
                    rss: 'https://biji.io/feed',  // 候选: https://biji.io/atom.xml, https://biji.io/rss.xml, https://biji.io/feed.xml 等}, {name:'王鑫', url:'/go.htm?url=https://wonse.info/'
                    rss: 'https://wonse.info/feed',  // 候选: https://wonse.info/atom.xml, https://wonse.info/rss.xml, https://wonse.info/feed.xml 等}, {name:'方糖', url:'/go.htm?url=https://fangtang.net/'
                    rss: 'https://fangtang.net/feed',  // 候选: https://fangtang.net/atom.xml, https://fangtang.net/rss.xml, https://fangtang.net/feed.xml 等}, {name:'金马', url:'/go.htm?url=https://lijinma.com/'
                    rss: 'https://lijinma.com/feed',  // 候选: https://lijinma.com/atom.xml, https://lijinma.com/rss.xml, https://lijinma.com/feed.xml 等}, {name:'郭晓力', url:'/go.htm?url=https://guoxiaoli.com/'
                    rss: 'https://guoxiaoli.com/feed',  // 候选: https://guoxiaoli.com/atom.xml, https://guoxiaoli.com/rss.xml, https://guoxiaoli.com/feed.xml 等}, {name:'半日闲', url:'/go.htm?url=https://www.xiaoa.me/'
                    rss: 'https://www.xiaoa.me/feed',  // 候选: https://www.xiaoa.me/atom.xml, https://www.xiaoa.me/rss.xml, https://www.xiaoa.me/feed.xml 等}, {name:'正是修行时', url:'/go.htm?url=https://www.qtter.com/'
                    rss: 'https://www.qtter.com/feed',  // 候选: https://www.qtter.com/atom.xml, https://www.qtter.com/rss.xml, https://www.qtter.com/feed.xml 等},{name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '13': [{name:'始终', url:'/go.htm?url=https://liam.page/'
                    rss: 'https://liam.page/feed',  // 候选: https://liam.page/atom.xml, https://liam.page/rss.xml, https://liam.page/feed.xml 等}, {name:'小z', url:'/go.htm?url=https://blog.xiaoz.org/'
                    rss: 'https://blog.xiaoz.org/feed',  // 候选: https://blog.xiaoz.org/atom.xml, https://blog.xiaoz.org/rss.xml, https://blog.xiaoz.org/feed.xml 等}, {name:'卡瓦邦噶', url:'/go.htm?url=https://www.kawabangga.com/'
                    rss: 'https://www.kawabangga.com/feed',  // 候选: https://www.kawabangga.com/atom.xml, https://www.kawabangga.com/rss.xml, https://www.kawabangga.com/feed.xml 等}, {name:'刘志军', url:'/go.htm?url=https://foofish.net/'
                    rss: 'https://foofish.net/feed',  // 候选: https://foofish.net/atom.xml, https://foofish.net/rss.xml, https://foofish.net/feed.xml 等}, {name:'二丫讲梵', url:'/go.htm?url=https://wiki.eryajf.net/'
                    rss: 'https://wiki.eryajf.net/feed',  // 候选: https://wiki.eryajf.net/atom.xml, https://wiki.eryajf.net/rss.xml, https://wiki.eryajf.net/feed.xml 等}, {name:'彼岸临窗', url:'/go.htm?url=https://oneblog.net/'
                    rss: 'https://oneblog.net/feed',  // 候选: https://oneblog.net/atom.xml, https://oneblog.net/rss.xml, https://oneblog.net/feed.xml 等}, {name:'关关', url:'/go.htm?url=https://951008.com/'
                    rss: 'https://951008.com/feed',  // 候选: https://951008.com/atom.xml, https://951008.com/rss.xml, https://951008.com/feed.xml 等}, {name:'Frank', url:'/go.htm?url=https://nyan.im/'
                    rss: 'https://nyan.im/feed',  // 候选: https://nyan.im/atom.xml, https://nyan.im/rss.xml, https://nyan.im/feed.xml 等}, {name:'辛未羊', url:'/go.htm?url=https://panqiincs.me/'
                    rss: 'https://panqiincs.me/feed',  // 候选: https://panqiincs.me/atom.xml, https://panqiincs.me/rss.xml, https://panqiincs.me/feed.xml 等}, {name:'林羽凡', url:'/go.htm?url=https://www.linyufan.com/'
                    rss: 'https://www.linyufan.com/feed',  // 候选: https://www.linyufan.com/atom.xml, https://www.linyufan.com/rss.xml, https://www.linyufan.com/feed.xml 等}, {name:'luca,s notepad', url:'/go.htm?url=https://wulujia.com/'
                    rss: 'https://wulujia.com/feed',  // 候选: https://wulujia.com/atom.xml, https://wulujia.com/rss.xml, https://wulujia.com/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '14': [{name:'天书', url:'/go.htm?url=https://tianshu.xyz/blog/'
                    rss: 'https://tianshu.xyz/feed',  // 候选: https://tianshu.xyz/atom.xml, https://tianshu.xyz/rss.xml, https://tianshu.xyz/feed.xml 等}, {name:'ying', url:'/go.htm?url=https://izualzhy.cn/'
                    rss: 'https://izualzhy.cn/feed',  // 候选: https://izualzhy.cn/atom.xml, https://izualzhy.cn/rss.xml, https://izualzhy.cn/feed.xml 等}, {name:'gaoce', url:'/go.htm?url=https://gaocegege.com/Blog/'
                    rss: 'https://gaocegege.com/feed',  // 候选: https://gaocegege.com/atom.xml, https://gaocegege.com/rss.xml, https://gaocegege.com/feed.xml 等}, {name:'Y!an\'s Blog', url:'/go.htm?url=https://yian.me/blog/'}, {name:'Henry Z', url:'/go.htm?url=https://changchen.me/'
                    rss: 'https://changchen.me/feed',  // 候选: https://changchen.me/atom.xml, https://changchen.me/rss.xml, https://changchen.me/feed.xml 等}, {name:'静觅', url:'/go.htm?url=https://cuiqingcai.com/'
                    rss: 'https://cuiqingcai.com/feed',  // 候选: https://cuiqingcai.com/atom.xml, https://cuiqingcai.com/rss.xml, https://cuiqingcai.com/feed.xml 等}, {name:'松茸', url:'/go.htm?url=https://zrs.xyz/'
                    rss: 'https://zrs.xyz/feed',  // 候选: https://zrs.xyz/atom.xml, https://zrs.xyz/rss.xml, https://zrs.xyz/feed.xml 等}, {name:'简单点', url:'/go.htm?url=https://blog.caiwenhao.cn/'
                    rss: 'https://blog.caiwenhao.cn/feed',  // 候选: https://blog.caiwenhao.cn/atom.xml, https://blog.caiwenhao.cn/rss.xml, https://blog.caiwenhao.cn/feed.xml 等}, {name:'缙哥哥', url:'/go.htm?url=https://www.dujin.org/'
                    rss: 'https://www.dujin.org/feed',  // 候选: https://www.dujin.org/atom.xml, https://www.dujin.org/rss.xml, https://www.dujin.org/feed.xml 等}, {name:'运营不加班', url:'/go.htm?url=https://nops.icu/'
                    rss: 'https://nops.icu/feed',  // 候选: https://nops.icu/atom.xml, https://nops.icu/rss.xml, https://nops.icu/feed.xml 等}, {name:'哥斯拉', url:'/go.htm?url=http://gojira.net/'
                    rss: 'http://gojira.net/feed',  // 候选: http://gojira.net/atom.xml, http://gojira.net/rss.xml, http://gojira.net/feed.xml 等}, {name:' A/B‘s Blog', url:'/go.htm?url=https://zmoe.com/'
                    rss: 'https://zmoe.com/feed',  // 候选: https://zmoe.com/atom.xml, https://zmoe.com/rss.xml, https://zmoe.com/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '15': [{name:'东哥', url:'/go.htm?url=https://blog.dongge.org/'
                    rss: 'https://blog.dongge.org/feed',  // 候选: https://blog.dongge.org/atom.xml, https://blog.dongge.org/rss.xml, https://blog.dongge.org/feed.xml 等}, {name:'HEO', url:'/go.htm?url=https://blog.zhheo.com/'
                    rss: 'https://blog.zhheo.com/feed',  // 候选: https://blog.zhheo.com/atom.xml, https://blog.zhheo.com/rss.xml, https://blog.zhheo.com/feed.xml 等}, {name:'牧人池塘', url:'/go.htm?url=https://dbanote.com/'
                    rss: 'https://dbanote.com/feed',  // 候选: https://dbanote.com/atom.xml, https://dbanote.com/rss.xml, https://dbanote.com/feed.xml 等}, {name:'质数人生', url:'/go.htm?url=https://2357.life/'
                    rss: 'https://2357.life/feed',  // 候选: https://2357.life/atom.xml, https://2357.life/rss.xml, https://2357.life/feed.xml 等}, {name:'泽泽社长', url:'/go.htm?url=https://blog.aihaonv.com/'
                    rss: 'https://blog.aihaonv.com/feed',  // 候选: https://blog.aihaonv.com/atom.xml, https://blog.aihaonv.com/rss.xml, https://blog.aihaonv.com/feed.xml 等}, {name:'满心', url:'/go.htm?url=https://zhoutian.com/'
                    rss: 'https://zhoutian.com/feed',  // 候选: https://zhoutian.com/atom.xml, https://zhoutian.com/rss.xml, https://zhoutian.com/feed.xml 等}, {name:'青山', url:'/go.htm?url=https://blog.yanqingshan.com/'
                    rss: 'https://blog.yanqingshan.com/feed',  // 候选: https://blog.yanqingshan.com/atom.xml, https://blog.yanqingshan.com/rss.xml, https://blog.yanqingshan.com/feed.xml 等}, {name:'酸菜鱼', url:'/go.htm?url=https://suancaixiong.com/'
                    rss: 'https://suancaixiong.com/feed',  // 候选: https://suancaixiong.com/atom.xml, https://suancaixiong.com/rss.xml, https://suancaixiong.com/feed.xml 等}, {name:'石头', url:'/go.htm?url=https://www.pweb123.com/'
                    rss: 'https://www.pweb123.com/feed',  // 候选: https://www.pweb123.com/atom.xml, https://www.pweb123.com/rss.xml, https://www.pweb123.com/feed.xml 等}, {name:'Luminous', url:'/go.htm?url=https://luotianyi.vc/'
                    rss: 'https://luotianyi.vc/feed',  // 候选: https://luotianyi.vc/atom.xml, https://luotianyi.vc/rss.xml, https://luotianyi.vc/feed.xml 等}, {name:'库拉饭', url:'/go.htm?url=https://www.kulafan.com/'
                    rss: 'https://www.kulafan.com/feed',  // 候选: https://www.kulafan.com/atom.xml, https://www.kulafan.com/rss.xml, https://www.kulafan.com/feed.xml 等}, {name:' ', url:'/go.htm?url='}, {name:' ', url:'/go.htm?url='}],
    '16': [{name:'孟坤', url:'/go.htm?url=https://mkblog.cn/'
                    rss: 'https://mkblog.cn/feed',  // 候选: https://mkblog.cn/atom.xml, https://mkblog.cn/rss.xml, https://mkblog.cn/feed.xml 等}, {name:'太隐', url:'/go.htm?url=https://wangyurui.com/'
                    rss: 'https://wangyurui.com/feed',  // 候选: https://wangyurui.com/atom.xml, https://wangyurui.com/rss.xml, https://wangyurui.com/feed.xml 等}, {name:'i007', url:'/go.htm?url=https://i007.vip:15443/wordpress/'
                    rss: 'https://i007.vip:15443/feed',  // 候选: https://i007.vip:15443/atom.xml, https://i007.vip:15443/rss.xml, https://i007.vip:15443/feed.xml 等}, {name:'若水斋', url:'/go.htm?url=https://blog.werner.wiki/'
                    rss: 'https://blog.werner.wiki/feed',  // 候选: https://blog.werner.wiki/atom.xml, https://blog.werner.wiki/rss.xml, https://blog.werner.wiki/feed.xml 等}, {name:'kwen', url:'/go.htm?url=https://www.kwen.page/'
                    rss: 'https://www.kwen.page/feed',  // 候选: https://www.kwen.page/atom.xml, https://www.kwen.page/rss.xml, https://www.kwen.page/feed.xml 等}, {name:'ximi', url:'/go.htm?url=https://www.ximi.me/'
                    rss: 'https://www.ximi.me/feed',  // 候选: https://www.ximi.me/atom.xml, https://www.ximi.me/rss.xml, https://www.ximi.me/feed.xml 等}, {name:'小可', url:'/go.htm?url=https://keke.su/'
                    rss: 'https://keke.su/feed',  // 候选: https://keke.su/atom.xml, https://keke.su/rss.xml, https://keke.su/feed.xml 等}, {name:'阿锦', url:'/go.htm?url=https://www.ajinol.com/'
                    rss: 'https://www.ajinol.com/feed',  // 候选: https://www.ajinol.com/atom.xml, https://www.ajinol.com/rss.xml, https://www.ajinol.com/feed.xml 等}, {name:'宝玉', url:'/go.htm?url=https://baoyu.io/blog'
                    rss: 'https://baoyu.io/feed',  // 候选: https://baoyu.io/atom.xml, https://baoyu.io/rss.xml, https://baoyu.io/feed.xml 等}, {name:'友人C', url:'/go.htm?url=https://www.ihewro.com/'
                    rss: 'https://www.ihewro.com/feed',  // 候选: https://www.ihewro.com/atom.xml, https://www.ihewro.com/rss.xml, https://www.ihewro.com/feed.xml 等}, {name:'大雄', url:'/go.htm?url=https://199508.com/'
                    rss: 'https://199508.com/feed',  // 候选: https://199508.com/atom.xml, https://199508.com/rss.xml, https://199508.com/feed.xml 等}, {name:'Keyle', url:'/go.htm?url=https://vrast.cn/'
                    rss: 'https://vrast.cn/feed',  // 候选: https://vrast.cn/atom.xml, https://vrast.cn/rss.xml, https://vrast.cn/feed.xml 等}, {name:'吴昊', url:'/go.htm?url=https://blog.whsir.com/'
                    rss: 'https://blog.whsir.com/feed',  // 候选: https://blog.whsir.com/atom.xml, https://blog.whsir.com/rss.xml, https://blog.whsir.com/feed.xml 等}, {name:'woodwhales', url:'/go.htm?url=https://woodwhales.cn/'
                    rss: 'https://woodwhales.cn/feed',  // 候选: https://woodwhales.cn/atom.xml, https://woodwhales.cn/rss.xml, https://woodwhales.cn/feed.xml 等}, {name:'幻影', url:'/go.htm?url=https://blog.52hyjs.com/'
                    rss: 'https://blog.52hyjs.com/feed',  // 候选: https://blog.52hyjs.com/atom.xml, https://blog.52hyjs.com/rss.xml, https://blog.52hyjs.com/feed.xml 等}, {name:'woodu', url:'/go.htm?url=https://woodu.me/'
                    rss: 'https://woodu.me/feed',  // 候选: https://woodu.me/atom.xml, https://woodu.me/rss.xml, https://woodu.me/feed.xml 等}, {name:'青木', url:'/go.htm?url=https://www.iyoubo.com/'
                    rss: 'https://www.iyoubo.com/feed',  // 候选: https://www.iyoubo.com/atom.xml, https://www.iyoubo.com/rss.xml, https://www.iyoubo.com/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '17': [{name:'科学空间', url:'/go.htm?url=https://kexue.fm/'
                    rss: 'https://kexue.fm/feed',  // 候选: https://kexue.fm/atom.xml, https://kexue.fm/rss.xml, https://kexue.fm/feed.xml 等}, {name:'王叨叨', url:'/go.htm?url=https://wangdaodao.com/'
                    rss: 'https://wangdaodao.com/feed',  // 候选: https://wangdaodao.com/atom.xml, https://wangdaodao.com/rss.xml, https://wangdaodao.com/feed.xml 等}, {name:'consiiii', url:'/go.htm?url=https://www.consiiii.me/'
                    rss: 'https://www.consiiii.me/feed',  // 候选: https://www.consiiii.me/atom.xml, https://www.consiiii.me/rss.xml, https://www.consiiii.me/feed.xml 等}, {name:'vimiix', url:'/go.htm?url=https://www.vimiix.com/'
                    rss: 'https://www.vimiix.com/feed',  // 候选: https://www.vimiix.com/atom.xml, https://www.vimiix.com/rss.xml, https://www.vimiix.com/feed.xml 等}, {name:'不败君', url:'/go.htm?url=https://www.bubaijun.com/'
                    rss: 'https://www.bubaijun.com/feed',  // 候选: https://www.bubaijun.com/atom.xml, https://www.bubaijun.com/rss.xml, https://www.bubaijun.com/feed.xml 等}, {name:'九层台', url:'/go.htm?url=https://blog.wj2015.com/'
                    rss: 'https://blog.wj2015.com/feed',  // 候选: https://blog.wj2015.com/atom.xml, https://blog.wj2015.com/rss.xml, https://blog.wj2015.com/feed.xml 等}, {name:'iam', url:'/go.htm?url=https://5ime.cn/'
                    rss: 'https://5ime.cn/feed',  // 候选: https://5ime.cn/atom.xml, https://5ime.cn/rss.xml, https://5ime.cn/feed.xml 等}, {name:'马春杰杰', url:'/go.htm?url=https://www.machunjie.com/'
                    rss: 'https://www.machunjie.com/feed',  // 候选: https://www.machunjie.com/atom.xml, https://www.machunjie.com/rss.xml, https://www.machunjie.com/feed.xml 等}, {name:'AI柠檬', url:'/go.htm?url=https://blog.ailemon.net/'
                    rss: 'https://blog.ailemon.net/feed',  // 候选: https://blog.ailemon.net/atom.xml, https://blog.ailemon.net/rss.xml, https://blog.ailemon.net/feed.xml 等}, {name:'沈唁志', url:'/go.htm?url=https://qq52o.me/'
                    rss: 'https://qq52o.me/feed',  // 候选: https://qq52o.me/atom.xml, https://qq52o.me/rss.xml, https://qq52o.me/feed.xml 等}, {name:'染念', url:'/go.htm?url=https://dyedd.cn/'
                    rss: 'https://dyedd.cn/feed',  // 候选: https://dyedd.cn/atom.xml, https://dyedd.cn/rss.xml, https://dyedd.cn/feed.xml 等}, {name:'串串狗小刊', url:'/go.htm?url=https://www.ccgxk.com/'
                    rss: 'https://www.ccgxk.com/feed',  // 候选: https://www.ccgxk.com/atom.xml, https://www.ccgxk.com/rss.xml, https://www.ccgxk.com/feed.xml 等}, {name:'染念', url:'/go.htm?url=https://dyedd.cn/'
                    rss: 'https://dyedd.cn/feed',  // 候选: https://dyedd.cn/atom.xml, https://dyedd.cn/rss.xml, https://dyedd.cn/feed.xml 等}, {name:'atpx', url:'/go.htm?url=https://atpx.com/'
                    rss: 'https://atpx.com/feed',  // 候选: https://atpx.com/atom.xml, https://atpx.com/rss.xml, https://atpx.com/feed.xml 等}, {name:'83小驿站', url:'/go.htm?url=https://888333.xyz/'
                    rss: 'https://888333.xyz/feed',  // 候选: https://888333.xyz/atom.xml, https://888333.xyz/rss.xml, https://888333.xyz/feed.xml 等}, {name:'碎言', url:'/go.htm?url=https://www.suiyan.cc/'
                    rss: 'https://www.suiyan.cc/feed',  // 候选: https://www.suiyan.cc/atom.xml, https://www.suiyan.cc/rss.xml, https://www.suiyan.cc/feed.xml 等}, {name:' ', url:'/go.htm?url='}, {name:' ', url:'/go.htm?url='}, {name:' ', url:'/go.htm?url='}],
    '18': [{name:'涛叔', url:'/go.htm?url=https://tao.zz.ac/'
                    rss: 'https://tao.zz.ac/feed',  // 候选: https://tao.zz.ac/atom.xml, https://tao.zz.ac/rss.xml, https://tao.zz.ac/feed.xml 等}, {name:'周松松', url:'/go.htm?url=https://zhousongsong.com/'
                    rss: 'https://zhousongsong.com/feed',  // 候选: https://zhousongsong.com/atom.xml, https://zhousongsong.com/rss.xml, https://zhousongsong.com/feed.xml 等}, {name:'codedump', url:'/go.htm?url=https://www.codedump.info/'
                    rss: 'https://www.codedump.info/feed',  // 候选: https://www.codedump.info/atom.xml, https://www.codedump.info/rss.xml, https://www.codedump.info/feed.xml 等}, {name:'海了个螺', url:'/go.htm?url=https://www.nnnuo.com/'
                    rss: 'https://www.nnnuo.com/feed',  // 候选: https://www.nnnuo.com/atom.xml, https://www.nnnuo.com/rss.xml, https://www.nnnuo.com/feed.xml 等}, {name:'刘宇帅', url:'/go.htm?url=https://liuyushuai.com/'
                    rss: 'https://liuyushuai.com/feed',  // 候选: https://liuyushuai.com/atom.xml, https://liuyushuai.com/rss.xml, https://liuyushuai.com/feed.xml 等}, {name:'枋柚梓的猫会发光', url:'/go.htm?url=https://inkss.cn/'
                    rss: 'https://inkss.cn/feed',  // 候选: https://inkss.cn/atom.xml, https://inkss.cn/rss.xml, https://inkss.cn/feed.xml 等}, {name:'阳', url:'/go.htm?url=https://yooer.me/'
                    rss: 'https://yooer.me/feed',  // 候选: https://yooer.me/atom.xml, https://yooer.me/rss.xml, https://yooer.me/feed.xml 等}, {name:'鸟叔', url:'/go.htm?url=https://thornbird.org/'
                    rss: 'https://thornbird.org/feed',  // 候选: https://thornbird.org/atom.xml, https://thornbird.org/rss.xml, https://thornbird.org/feed.xml 等}, {name:'运维咖啡吧', url:'/go.htm?url=https://blog.ops-coffee.com/'
                    rss: 'https://blog.ops-coffee.com/feed',  // 候选: https://blog.ops-coffee.com/atom.xml, https://blog.ops-coffee.com/rss.xml, https://blog.ops-coffee.com/feed.xml 等}, {name:'希仁之拥', url:'/go.htm?url=https://blog.keepchen.com/'
                    rss: 'https://blog.keepchen.com/feed',  // 候选: https://blog.keepchen.com/atom.xml, https://blog.keepchen.com/rss.xml, https://blog.keepchen.com/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '19': [{name:'沧海月明', url:'/go.htm?url=https://www.inlighting.org/'
                    rss: 'https://www.inlighting.org/feed',  // 候选: https://www.inlighting.org/atom.xml, https://www.inlighting.org/rss.xml, https://www.inlighting.org/feed.xml 等}, {name:'流情', url:'/go.htm?url=https://liuqingwushui.top/'
                    rss: 'https://liuqingwushui.top/feed',  // 候选: https://liuqingwushui.top/atom.xml, https://liuqingwushui.top/rss.xml, https://liuqingwushui.top/feed.xml 等}, {name:'时光散记', url:'/go.htm?url=https://www.sanji.one/'
                    rss: 'https://www.sanji.one/feed',  // 候选: https://www.sanji.one/atom.xml, https://www.sanji.one/rss.xml, https://www.sanji.one/feed.xml 等}, {name:'李锋镝', url:'/go.htm?url=https://www.lifengdi.com/'
                    rss: 'https://www.lifengdi.com/feed',  // 候选: https://www.lifengdi.com/atom.xml, https://www.lifengdi.com/rss.xml, https://www.lifengdi.com/feed.xml 等}, {name:'启尚', url:'/go.htm?url=https://blog.wuxhqi.com/'
                    rss: 'https://blog.wuxhqi.com/feed',  // 候选: https://blog.wuxhqi.com/atom.xml, https://blog.wuxhqi.com/rss.xml, https://blog.wuxhqi.com/feed.xml 等}, {name:'imglan', url:'/go.htm?url=https://imglan.com/'
                    rss: 'https://imglan.com/feed',  // 候选: https://imglan.com/atom.xml, https://imglan.com/rss.xml, https://imglan.com/feed.xml 等}, {name:'风向标', url:'/go.htm?url=https://sbcoder.cn/'
                    rss: 'https://sbcoder.cn/feed',  // 候选: https://sbcoder.cn/atom.xml, https://sbcoder.cn/rss.xml, https://sbcoder.cn/feed.xml 等}, {name:'herman', url:'/go.htm?url=https://herman.bearblog.dev/blog/'
                    rss: 'https://herman.bearblog.dev/feed',  // 候选: https://herman.bearblog.dev/atom.xml, https://herman.bearblog.dev/rss.xml, https://herman.bearblog.dev/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '20': [ {name:'瓦解', url:'/go.htm?url=https://hin.cool/'
                    rss: 'https://hin.cool/feed',  // 候选: https://hin.cool/atom.xml, https://hin.cool/rss.xml, https://hin.cool/feed.xml 等}, {name:'happyxiao', url:'/go.htm?url=https://happyxiao.com/'
                    rss: 'https://happyxiao.com/feed',  // 候选: https://happyxiao.com/atom.xml, https://happyxiao.com/rss.xml, https://happyxiao.com/feed.xml 等}, {name:'vinchent', url:'/go.htm?url=https://www.vinchent.xyz/'
                    rss: 'https://www.vinchent.xyz/feed',  // 候选: https://www.vinchent.xyz/atom.xml, https://www.vinchent.xyz/rss.xml, https://www.vinchent.xyz/feed.xml 等}, {name:'鸡米饭', url:'/go.htm?url=http://jimifan.com/'
                    rss: 'http://jimifan.com/feed',  // 候选: http://jimifan.com/atom.xml, http://jimifan.com/rss.xml, http://jimifan.com/feed.xml 等}, {name:'天书vip', url:'/go.htm?url=https://www.skybook.vip/'
                    rss: 'https://www.skybook.vip/feed',  // 候选: https://www.skybook.vip/atom.xml, https://www.skybook.vip/rss.xml, https://www.skybook.vip/feed.xml 等}, {name:'TXY', url:'/go.htm?url=https://tanxinyu.work/'
                    rss: 'https://tanxinyu.work/feed',  // 候选: https://tanxinyu.work/atom.xml, https://tanxinyu.work/rss.xml, https://tanxinyu.work/feed.xml 等}, {name:'老卢', url:'/go.htm?url=https://blog.el9.cn/'
                    rss: 'https://blog.el9.cn/feed',  // 候选: https://blog.el9.cn/atom.xml, https://blog.el9.cn/rss.xml, https://blog.el9.cn/feed.xml 等}, {name:'共享', url:'/go.htm?url=https://www.sharedbk.com/'
                    rss: 'https://www.sharedbk.com/feed',  // 候选: https://www.sharedbk.com/atom.xml, https://www.sharedbk.com/rss.xml, https://www.sharedbk.com/feed.xml 等}, {name:'世俗', url:'/go.htm?url=https://shi.su/'
                    rss: 'https://shi.su/feed',  // 候选: https://shi.su/atom.xml, https://shi.su/rss.xml, https://shi.su/feed.xml 等}, {name:'WishMeLz', url:'/go.htm?url=https://blog.itsse.cn/'
                    rss: 'https://blog.itsse.cn/feed',  // 候选: https://blog.itsse.cn/atom.xml, https://blog.itsse.cn/rss.xml, https://blog.itsse.cn/feed.xml 等}, {name:'naiba', url:'/go.htm?url=https://lifelonglearn.ing/'
                    rss: 'https://lifelonglearn.ing/feed',  // 候选: https://lifelonglearn.ing/atom.xml, https://lifelonglearn.ing/rss.xml, https://lifelonglearn.ing/feed.xml 等}, {name:'HEMING', url:'/go.htm?url=https://heming.org/'
                    rss: 'https://heming.org/feed',  // 候选: https://heming.org/atom.xml, https://heming.org/rss.xml, https://heming.org/feed.xml 等}, {name:'落英缤纷', url:'/go.htm?url=https://www.im2828.com/'
                    rss: 'https://www.im2828.com/feed',  // 候选: https://www.im2828.com/atom.xml, https://www.im2828.com/rss.xml, https://www.im2828.com/feed.xml 等}, {name:'bk随笔', url:'/go.htm?url=https://www.suibibk.com/'
                    rss: 'https://www.suibibk.com/feed',  // 候选: https://www.suibibk.com/atom.xml, https://www.suibibk.com/rss.xml, https://www.suibibk.com/feed.xml 等}, {name:'章工', url:'/go.htm?url=https://blog.zzppjj.top/'
                    rss: 'https://blog.zzppjj.top/feed',  // 候选: https://blog.zzppjj.top/atom.xml, https://blog.zzppjj.top/rss.xml, https://blog.zzppjj.top/feed.xml 等}, {name:'子舒', url:'/go.htm?url=https://zishu.me/'
                    rss: 'https://zishu.me/feed',  // 候选: https://zishu.me/atom.xml, https://zishu.me/rss.xml, https://zishu.me/feed.xml 等}, {name:'chaofa', url:'/go.htm?url=https://yuanchaofa.com/'
                    rss: 'https://yuanchaofa.com/feed',  // 候选: https://yuanchaofa.com/atom.xml, https://yuanchaofa.com/rss.xml, https://yuanchaofa.com/feed.xml 等}, {name:'优世界', url:'/go.htm?url=https://usj.cc/'
                    rss: 'https://usj.cc/feed',  // 候选: https://usj.cc/atom.xml, https://usj.cc/rss.xml, https://usj.cc/feed.xml 等}, {name:'粥里有勺糖', url:'/go.htm?url=https://sugarat.top/'
                    rss: 'https://sugarat.top/feed',  // 候选: https://sugarat.top/atom.xml, https://sugarat.top/rss.xml, https://sugarat.top/feed.xml 等}, {name:'鸽子窝', url:'/go.htm?url=https://www.wudilad.com/'
                    rss: 'https://www.wudilad.com/feed',  // 候选: https://www.wudilad.com/atom.xml, https://www.wudilad.com/rss.xml, https://www.wudilad.com/feed.xml 等}, {name:'隔壁老刘', url:'/go.htm?url=https://www.lzhs.com/'
                    rss: 'https://www.lzhs.com/feed',  // 候选: https://www.lzhs.com/atom.xml, https://www.lzhs.com/rss.xml, https://www.lzhs.com/feed.xml 等}, {name:'登山亦有道', url:'/go.htm?url=https://chenyan98.cn/'
                    rss: 'https://chenyan98.cn/feed',  // 候选: https://chenyan98.cn/atom.xml, https://chenyan98.cn/rss.xml, https://chenyan98.cn/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '21': [{name:'硅谷王川', url:'/go.htm?url=https://chuan.us/'
                    rss: 'https://chuan.us/feed',  // 候选: https://chuan.us/atom.xml, https://chuan.us/rss.xml, https://chuan.us/feed.xml 等}, {name:'辣条', url:'/go.htm?url=https://www.latiao.org/'
                    rss: 'https://www.latiao.org/feed',  // 候选: https://www.latiao.org/atom.xml, https://www.latiao.org/rss.xml, https://www.latiao.org/feed.xml 等}, {name:'blogc', url:'/go.htm?url=https://blogc.com/'
                    rss: 'https://blogc.com/feed',  // 候选: https://blogc.com/atom.xml, https://blogc.com/rss.xml, https://blogc.com/feed.xml 等}, {name:'yveji', url:'/go.htm?url=https://www.yveji.com/'
                    rss: 'https://www.yveji.com/feed',  // 候选: https://www.yveji.com/atom.xml, https://www.yveji.com/rss.xml, https://www.yveji.com/feed.xml 等}, {name:'leorain', url:'/go.htm?url=https://www.leorain.cn/'
                    rss: 'https://www.leorain.cn/feed',  // 候选: https://www.leorain.cn/atom.xml, https://www.leorain.cn/rss.xml, https://www.leorain.cn/feed.xml 等}, {name:'可爱静', url:'/go.htm?url=https://keaijing.com/'
                    rss: 'https://keaijing.com/feed',  // 候选: https://keaijing.com/atom.xml, https://keaijing.com/rss.xml, https://keaijing.com/feed.xml 等}, {name:'毒蛊', url:'/go.htm?url=https://blog.idg8.cn/'
                    rss: 'https://blog.idg8.cn/feed',  // 候选: https://blog.idg8.cn/atom.xml, https://blog.idg8.cn/rss.xml, https://blog.idg8.cn/feed.xml 等}, {name:'云云星羽', url:'/go.htm?url=https://starssr.com/'
                    rss: 'https://starssr.com/feed',  // 候选: https://starssr.com/atom.xml, https://starssr.com/rss.xml, https://starssr.com/feed.xml 等}, {name:'z', url:'/go.htm?url=https://www.zzxsorld.com/'
                    rss: 'https://www.zzxsorld.com/feed',  // 候选: https://www.zzxsorld.com/atom.xml, https://www.zzxsorld.com/rss.xml, https://www.zzxsorld.com/feed.xml 等}, {name:'XXY', url:'/go.htm?url=https://blog.xuxiny.top/'
                    rss: 'https://blog.xuxiny.top/feed',  // 候选: https://blog.xuxiny.top/atom.xml, https://blog.xuxiny.top/rss.xml, https://blog.xuxiny.top/feed.xml 等}, {name:'记录生活', url:'/go.htm?url=https://9sb.net'
                    rss: 'https://9sb.net/feed',  // 候选: https://9sb.net/atom.xml, https://9sb.net/rss.xml, https://9sb.net/feed.xml 等}, {name:'诺依阁', url:'/go.htm?url=https://blog.nuoyis.net/'
                    rss: 'https://blog.nuoyis.net/feed',  // 候选: https://blog.nuoyis.net/atom.xml, https://blog.nuoyis.net/rss.xml, https://blog.nuoyis.net/feed.xml 等}, {name:'小威', url:'/go.htm?url=https://www.xiaoweio.com/'
                    rss: 'https://www.xiaoweio.com/feed',  // 候选: https://www.xiaoweio.com/atom.xml, https://www.xiaoweio.com/rss.xml, https://www.xiaoweio.com/feed.xml 等}, {name:'ovo', url:'/go.htm?url=https://ovo.cc/'
                    rss: 'https://ovo.cc/feed',  // 候选: https://ovo.cc/atom.xml, https://ovo.cc/rss.xml, https://ovo.cc/feed.xml 等}, {name:'迷荼小栈', url:'/go.htm?url=https://www.mkinit.com/'
                    rss: 'https://www.mkinit.com/feed',  // 候选: https://www.mkinit.com/atom.xml, https://www.mkinit.com/rss.xml, https://www.mkinit.com/feed.xml 等}, {name:'小阿成', url:'/go.htm?url=https://www.xiaoac.com/'
                    rss: 'https://www.xiaoac.com/feed',  // 候选: https://www.xiaoac.com/atom.xml, https://www.xiaoac.com/rss.xml, https://www.xiaoac.com/feed.xml 等}, {name:'站长笔记', url:'/go.htm?url=https://www.080210.com/'
                    rss: 'https://www.080210.com/feed',  // 候选: https://www.080210.com/atom.xml, https://www.080210.com/rss.xml, https://www.080210.com/feed.xml 等}, {name:'Dayu', url:'/go.htm?url=https://anotherdayu.com/'
                    rss: 'https://anotherdayu.com/feed',  // 候选: https://anotherdayu.com/atom.xml, https://anotherdayu.com/rss.xml, https://anotherdayu.com/feed.xml 等}, {name:'bing', url:'/go.htm?url=https://imcbc.cn/'
                    rss: 'https://imcbc.cn/feed',  // 候选: https://imcbc.cn/atom.xml, https://imcbc.cn/rss.xml, https://imcbc.cn/feed.xml 等}, {name:'極客死亡計劃', url:'/go.htm?url=https://www.geedea.pro/'
                    rss: 'https://www.geedea.pro/feed',  // 候选: https://www.geedea.pro/atom.xml, https://www.geedea.pro/rss.xml, https://www.geedea.pro/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '22': [{name:'果壳中的宇宙', url:'/go.htm?url=https://www.guoke.co/'
                    rss: 'https://www.guoke.co/feed',  // 候选: https://www.guoke.co/atom.xml, https://www.guoke.co/rss.xml, https://www.guoke.co/feed.xml 等}, {name:'相思明月', url:'/go.htm?url=https://xsmy.wang/'
                    rss: 'https://xsmy.wang/feed',  // 候选: https://xsmy.wang/atom.xml, https://xsmy.wang/rss.xml, https://xsmy.wang/feed.xml 等}, {name:'cynosura', url:'/go.htm?url=https://cynosura.one/'
                    rss: 'https://cynosura.one/feed',  // 候选: https://cynosura.one/atom.xml, https://cynosura.one/rss.xml, https://cynosura.one/feed.xml 等}, {name:'ZHU', url:'/go.htm?url=https://yfzhu.cn/'
                    rss: 'https://yfzhu.cn/feed',  // 候选: https://yfzhu.cn/atom.xml, https://yfzhu.cn/rss.xml, https://yfzhu.cn/feed.xml 等}, {name:'Lee.Sir', url:'/go.htm?url=https://saysay.cc/'
                    rss: 'https://saysay.cc/feed',  // 候选: https://saysay.cc/atom.xml, https://saysay.cc/rss.xml, https://saysay.cc/feed.xml 等}, {name:'皓月星际', url:'/go.htm?url=https://www.shimail.cn/'
                    rss: 'https://www.shimail.cn/feed',  // 候选: https://www.shimail.cn/atom.xml, https://www.shimail.cn/rss.xml, https://www.shimail.cn/feed.xml 等}, {name:'吃猫的鱼', url:'/go.htm?url=https://www.fish9.cn/'
                    rss: 'https://www.fish9.cn/feed',  // 候选: https://www.fish9.cn/atom.xml, https://www.fish9.cn/rss.xml, https://www.fish9.cn/feed.xml 等}, {name:'远梦', url:'/go.htm?url=https://blog.qoz.cc/'
                    rss: 'https://blog.qoz.cc/feed',  // 候选: https://blog.qoz.cc/atom.xml, https://blog.qoz.cc/rss.xml, https://blog.qoz.cc/feed.xml 等}, {name:'烧饼', url:'/go.htm?url=https://u.sb/'
                    rss: 'https://u.sb/feed',  // 候选: https://u.sb/atom.xml, https://u.sb/rss.xml, https://u.sb/feed.xml 等}, {name:'唯知', url:'/go.htm?url=https://note.weizwz.com/'
                    rss: 'https://note.weizwz.com/feed',  // 候选: https://note.weizwz.com/atom.xml, https://note.weizwz.com/rss.xml, https://note.weizwz.com/feed.xml 等}, {name:'白少宣', url:'/go.htm?url=https://baishaoxuan.com/'
                    rss: 'https://baishaoxuan.com/feed',  // 候选: https://baishaoxuan.com/atom.xml, https://baishaoxuan.com/rss.xml, https://baishaoxuan.com/feed.xml 等}, {name:'海涛贝塔', url:'/go.htm?url=https://haitaobeta.com/'
                    rss: 'https://haitaobeta.com/feed',  // 候选: https://haitaobeta.com/atom.xml, https://haitaobeta.com/rss.xml, https://haitaobeta.com/feed.xml 等}, {name:'kejilion', url:'/go.htm?url=https://blog.kejilion.pro/'
                    rss: 'https://blog.kejilion.pro/feed',  // 候选: https://blog.kejilion.pro/atom.xml, https://blog.kejilion.pro/rss.xml, https://blog.kejilion.pro/feed.xml 等}, {name:'VeryJack', url:'/go.htm?url=https://veryjack.com/'
                    rss: 'https://veryjack.com/feed',  // 候选: https://veryjack.com/atom.xml, https://veryjack.com/rss.xml, https://veryjack.com/feed.xml 等}, {name:'探人间', url:'/go.htm?url=https://www.hydsb0.com/'
                    rss: 'https://www.hydsb0.com/feed',  // 候选: https://www.hydsb0.com/atom.xml, https://www.hydsb0.com/rss.xml, https://www.hydsb0.com/feed.xml 等}, {name:'栋dong', url:'/go.htm?url=https://itdong.me/'
                    rss: 'https://itdong.me/feed',  // 候选: https://itdong.me/atom.xml, https://itdong.me/rss.xml, https://itdong.me/feed.xml 等}, {name:'ay', url:'/go.htm?url=https://blue.ss/'
                    rss: 'https://blue.ss/feed',  // 候选: https://blue.ss/atom.xml, https://blue.ss/rss.xml, https://blue.ss/feed.xml 等}, {name:'倦意', url:'/go.htm?url=https://jyblog.cn/'
                    rss: 'https://jyblog.cn/feed',  // 候选: https://jyblog.cn/atom.xml, https://jyblog.cn/rss.xml, https://jyblog.cn/feed.xml 等}, {name:'zhecydn', url:'/go.htm?url=https://blog.zhecydn.asia/'
                    rss: 'https://blog.zhecydn.asia/feed',  // 候选: https://blog.zhecydn.asia/atom.xml, https://blog.zhecydn.asia/rss.xml, https://blog.zhecydn.asia/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '23': [{name:'小归客', url:'/go.htm?url=https://xgk.pw/'
                    rss: 'https://xgk.pw/feed',  // 候选: https://xgk.pw/atom.xml, https://xgk.pw/rss.xml, https://xgk.pw/feed.xml 等}, {name:'八九日记', url:'/go.htm?url=https://bkm.net/'
                    rss: 'https://bkm.net/feed',  // 候选: https://bkm.net/atom.xml, https://bkm.net/rss.xml, https://bkm.net/feed.xml 等}, {name:'lefineder', url:'/go.htm?url=https://www.lefineder.com/'
                    rss: 'https://www.lefineder.com/feed',  // 候选: https://www.lefineder.com/atom.xml, https://www.lefineder.com/rss.xml, https://www.lefineder.com/feed.xml 等}, {name:'zpaeng', url:'/go.htm?url=http://zpaeng.com/'
                    rss: 'http://zpaeng.com/feed',  // 候选: http://zpaeng.com/atom.xml, http://zpaeng.com/rss.xml, http://zpaeng.com/feed.xml 等}, {name:'建站百科', url:'/go.htm?url=https://www.jzbk.net/'
                    rss: 'https://www.jzbk.net/feed',  // 候选: https://www.jzbk.net/atom.xml, https://www.jzbk.net/rss.xml, https://www.jzbk.net/feed.xml 等}, {name:'bo', url:'/go.htm?url=https://bokebo.com/'
                    rss: 'https://bokebo.com/feed',  // 候选: https://bokebo.com/atom.xml, https://bokebo.com/rss.xml, https://bokebo.com/feed.xml 等}, {name:'宗宗酱', url:'/go.htm?url=https://ygz.ink/'
                    rss: 'https://ygz.ink/feed',  // 候选: https://ygz.ink/atom.xml, https://ygz.ink/rss.xml, https://ygz.ink/feed.xml 等}, {name:'Jeffer.Z', url:'/go.htm?url=https://www.jeffer.xyz/'
                    rss: 'https://www.jeffer.xyz/feed',  // 候选: https://www.jeffer.xyz/atom.xml, https://www.jeffer.xyz/rss.xml, https://www.jeffer.xyz/feed.xml 等}, {name:'维奥洛', url:'/go.htm?url=https://vioulo.com/'
                    rss: 'https://vioulo.com/feed',  // 候选: https://vioulo.com/atom.xml, https://vioulo.com/rss.xml, https://vioulo.com/feed.xml 等}, {name:'小何', url:'/go.htm?url=https://022220.xyz/'
                    rss: 'https://022220.xyz/feed',  // 候选: https://022220.xyz/atom.xml, https://022220.xyz/rss.xml, https://022220.xyz/feed.xml 等}, {name:'语沐', url:'/go.htm?url=https://www.yumu.cc/'
                    rss: 'https://www.yumu.cc/feed',  // 候选: https://www.yumu.cc/atom.xml, https://www.yumu.cc/rss.xml, https://www.yumu.cc/feed.xml 等}, {name:'本源归一', url:'/go.htm?url=https://ww-fs.com/'
                    rss: 'https://ww-fs.com/feed',  // 候选: https://ww-fs.com/atom.xml, https://ww-fs.com/rss.xml, https://ww-fs.com/feed.xml 等}, {name:'小野', url:'/go.htm?url=https://lb5.net/'
                    rss: 'https://lb5.net/feed',  // 候选: https://lb5.net/atom.xml, https://lb5.net/rss.xml, https://lb5.net/feed.xml 等}, {name:'鹿泽', url:'/go.htm?url=https://www.bailuze.com/'
                    rss: 'https://www.bailuze.com/feed',  // 候选: https://www.bailuze.com/atom.xml, https://www.bailuze.com/rss.xml, https://www.bailuze.com/feed.xml 等}, {name:'火米', url:'/go.htm?url=https://huo.me/'
                    rss: 'https://huo.me/feed',  // 候选: https://huo.me/atom.xml, https://huo.me/rss.xml, https://huo.me/feed.xml 等}, {name:'Siwei Li', url:'/go.htm?url=https://siwei.li/'
                    rss: 'https://siwei.li/feed',  // 候选: https://siwei.li/atom.xml, https://siwei.li/rss.xml, https://siwei.li/feed.xml 等}, {name:'Shiina', url:'/go.htm?url=https://blog.shiina.fun/'
                    rss: 'https://blog.shiina.fun/feed',  // 候选: https://blog.shiina.fun/atom.xml, https://blog.shiina.fun/rss.xml, https://blog.shiina.fun/feed.xml 等}, {name:'兔哥', url:'/go.htm?url=https://uuzi.net/'
                    rss: 'https://uuzi.net/feed',  // 候选: https://uuzi.net/atom.xml, https://uuzi.net/rss.xml, https://uuzi.net/feed.xml 等}, {name:'仲小树', url:'/go.htm?url=https://zxs.me/'
                    rss: 'https://zxs.me/feed',  // 候选: https://zxs.me/atom.xml, https://zxs.me/rss.xml, https://zxs.me/feed.xml 等}, {name:'小破站', url:'/go.htm?url=https://symlzz.cn/'
                    rss: 'https://symlzz.cn/feed',  // 候选: https://symlzz.cn/atom.xml, https://symlzz.cn/rss.xml, https://symlzz.cn/feed.xml 等}, {name:'康丰', url:'/go.htm?url=https://www.okang.top/'
                    rss: 'https://www.okang.top/feed',  // 候选: https://www.okang.top/atom.xml, https://www.okang.top/rss.xml, https://www.okang.top/feed.xml 等}, {name:'无敌', url:'/go.htm?url=https://blog.tangwudi.com/'
                    rss: 'https://blog.tangwudi.com/feed',  // 候选: https://blog.tangwudi.com/atom.xml, https://blog.tangwudi.com/rss.xml, https://blog.tangwudi.com/feed.xml 等}, {name:'聊点趣事', url:'/go.htm?url=https://www.milesytech.com/'
                    rss: 'https://www.milesytech.com/feed',  // 候选: https://www.milesytech.com/atom.xml, https://www.milesytech.com/rss.xml, https://www.milesytech.com/feed.xml 等}, {name:'蘑菇', url:'/go.htm?url=https://home.ad/'
                    rss: 'https://home.ad/feed',  // 候选: https://home.ad/atom.xml, https://home.ad/rss.xml, https://home.ad/feed.xml 等}, {name:' ', url:'/go.htm?url='}, {name:' ', url:'/go.htm?url='}, {name:' ', url:'/go.htm?url='}],
    '24': [ {name:'阿伟', url:'/go.htm?url=https://awei.cc/'
                    rss: 'https://awei.cc/feed',  // 候选: https://awei.cc/atom.xml, https://awei.cc/rss.xml, https://awei.cc/feed.xml 等}, {name:'无名', url:'/go.htm?url=https://wuminboke.site/'
                    rss: 'https://wuminboke.site/feed',  // 候选: https://wuminboke.site/atom.xml, https://wuminboke.site/rss.xml, https://wuminboke.site/feed.xml 等}, {name:'索玛', url:'/go.htm?url=https://suo.ma/'
                    rss: 'https://suo.ma/feed',  // 候选: https://suo.ma/atom.xml, https://suo.ma/rss.xml, https://suo.ma/feed.xml 等}, {name:'何权洪', url:'/go.htm?url=https://www.hequanhong.cn/'
                    rss: 'https://www.hequanhong.cn/feed',  // 候选: https://www.hequanhong.cn/atom.xml, https://www.hequanhong.cn/rss.xml, https://www.hequanhong.cn/feed.xml 等}, {name:'逆鳞笔记', url:'/go.htm?url=https://nilin.cc/'
                    rss: 'https://nilin.cc/feed',  // 候选: https://nilin.cc/atom.xml, https://nilin.cc/rss.xml, https://nilin.cc/feed.xml 等}, {name:'大方', url:'/go.htm?url=https://blog.mmp.cc/'
                    rss: 'https://blog.mmp.cc/feed',  // 候选: https://blog.mmp.cc/atom.xml, https://blog.mmp.cc/rss.xml, https://blog.mmp.cc/feed.xml 等}, {name:'倾城于你', url:'/go.htm?url=https://qninq.cn'
                    rss: 'https://qninq.cn/feed',  // 候选: https://qninq.cn/atom.xml, https://qninq.cn/rss.xml, https://qninq.cn/feed.xml 等}, {name:'姓王者', url:'/go.htm?url=https://xingwangzhe.fun/'
                    rss: 'https://xingwangzhe.fun/feed',  // 候选: https://xingwangzhe.fun/atom.xml, https://xingwangzhe.fun/rss.xml, https://xingwangzhe.fun/feed.xml 等}, {name:'程序猿', url:'/go.htm?url=https://hskun.com/'
                    rss: 'https://hskun.com/feed',  // 候选: https://hskun.com/atom.xml, https://hskun.com/rss.xml, https://hskun.com/feed.xml 等}, {name:'Evan\'s Space', url:'/go.htm?url=https://www.evan.xin/'}, {name:'言语', url:'/go.htm?url=https://www.yan.ink/'
                    rss: 'https://www.yan.ink/feed',  // 候选: https://www.yan.ink/atom.xml, https://www.yan.ink/rss.xml, https://www.yan.ink/feed.xml 等}, {name:'旺东', url:'/go.htm?url=https://wang618.cn/'
                    rss: 'https://wang618.cn/feed',  // 候选: https://wang618.cn/atom.xml, https://wang618.cn/rss.xml, https://wang618.cn/feed.xml 等}, {name:'小鸽志', url:'/go.htm?url=https://www.xiaoge.org/'
                    rss: 'https://www.xiaoge.org/feed',  // 候选: https://www.xiaoge.org/atom.xml, https://www.xiaoge.org/rss.xml, https://www.xiaoge.org/feed.xml 等}, {name:'ImQi1', url:'/go.htm?url=https://imqi1.com/'
                    rss: 'https://imqi1.com/feed',  // 候选: https://imqi1.com/atom.xml, https://imqi1.com/rss.xml, https://imqi1.com/feed.xml 等}, {name:'奶狗', url:'/go.htm?url=https://www.naigou.cn/blog'
                    rss: 'https://www.naigou.cn/feed',  // 候选: https://www.naigou.cn/atom.xml, https://www.naigou.cn/rss.xml, https://www.naigou.cn/feed.xml 等}, {name:'三叔', url:'/go.htm?url=https://www.sanshu.cn/'
                    rss: 'https://www.sanshu.cn/feed',  // 候选: https://www.sanshu.cn/atom.xml, https://www.sanshu.cn/rss.xml, https://www.sanshu.cn/feed.xml 等}, {name:'谈杂思漫', url:'/go.htm?url=https://misc.zz.ac/'
                    rss: 'https://misc.zz.ac/feed',  // 候选: https://misc.zz.ac/atom.xml, https://misc.zz.ac/rss.xml, https://misc.zz.ac/feed.xml 等}, {name:'DandyAPI', url:'/go.htm?url=https://blog.dandyapi.com/'
                    rss: 'https://blog.dandyapi.com/feed',  // 候选: https://blog.dandyapi.com/atom.xml, https://blog.dandyapi.com/rss.xml, https://blog.dandyapi.com/feed.xml 等}, {name:'黄建春', url:'/go.htm?url=https://www.huangjianchun.cn/'
                    rss: 'https://www.huangjianchun.cn/feed',  // 候选: https://www.huangjianchun.cn/atom.xml, https://www.huangjianchun.cn/rss.xml, https://www.huangjianchun.cn/feed.xml 等}, {name:'二叉树树', url:'/go.htm?url=https://2x.nz/'
                    rss: 'https://2x.nz/feed',  // 候选: https://2x.nz/atom.xml, https://2x.nz/rss.xml, https://2x.nz/feed.xml 等}, {name:'Sun', url:'/go.htm?url=https://blog.csun.site/'
                    rss: 'https://blog.csun.site/feed',  // 候选: https://blog.csun.site/atom.xml, https://blog.csun.site/rss.xml, https://blog.csun.site/feed.xml 等}, {name:'Runoneall', url:'/go.htm?url=https://blog.oneall.eu.org/'
                    rss: 'https://blog.oneall.eu.org/feed',  // 候选: https://blog.oneall.eu.org/atom.xml, https://blog.oneall.eu.org/rss.xml, https://blog.oneall.eu.org/feed.xml 等}, {name:'', url:'/go.htm?url='}, {name:'', url:'/go.htm?url='}, {name:'', url:'/go.htm?url='}],
    '25': [{name:'巴适小馨', url:'/go.htm?url=http://p4z.cn/'
                    rss: 'http://p4z.cn/feed',  // 候选: http://p4z.cn/atom.xml, http://p4z.cn/rss.xml, http://p4z.cn/feed.xml 等}, {name:'礼印外盒', url:'/go.htm?url=https://liyinwaihe.com/'
                    rss: 'https://liyinwaihe.com/feed',  // 候选: https://liyinwaihe.com/atom.xml, https://liyinwaihe.com/rss.xml, https://liyinwaihe.com/feed.xml 等}, {name:'Gavin', url:'/go.htm?url=https://sji.cc/'
                    rss: 'https://sji.cc/feed',  // 候选: https://sji.cc/atom.xml, https://sji.cc/rss.xml, https://sji.cc/feed.xml 等}, {name:'N', url:'/go.htm?url=https://nmsl.cn/'
                    rss: 'https://nmsl.cn/feed',  // 候选: https://nmsl.cn/atom.xml, https://nmsl.cn/rss.xml, https://nmsl.cn/feed.xml 等}, {name:'极客星球网', url:'/go.htm?url=https://www.wvn.cn'
                    rss: 'https://www.wvn.cn/feed',  // 候选: https://www.wvn.cn/atom.xml, https://www.wvn.cn/rss.xml, https://www.wvn.cn/feed.xml 等}, {name:'王先生', url:'/go.htm?url=https://www.wangxiansheng.com/'
                    rss: 'https://www.wangxiansheng.com/feed',  // 候选: https://www.wangxiansheng.com/atom.xml, https://www.wangxiansheng.com/rss.xml, https://www.wangxiansheng.com/feed.xml 等}, {name:'Clark', url:'/go.htm?url=https://clarkf.site/zh/blog'
                    rss: 'https://clarkf.site/feed',  // 候选: https://clarkf.site/atom.xml, https://clarkf.site/rss.xml, https://clarkf.site/feed.xml 等}, {name:'青萍', url:'/go.htm?url=https://blog.lusyoe.com/'
                    rss: 'https://blog.lusyoe.com/feed',  // 候选: https://blog.lusyoe.com/atom.xml, https://blog.lusyoe.com/rss.xml, https://blog.lusyoe.com/feed.xml 等}, {name:'我的窝', url:'/go.htm?url=https://hl.xo.je/'
                    rss: 'https://hl.xo.je/feed',  // 候选: https://hl.xo.je/atom.xml, https://hl.xo.je/rss.xml, https://hl.xo.je/feed.xml 等}, {name:'心记', url:'/go.htm?url=https://blog.moodlog.cn/'
                    rss: 'https://blog.moodlog.cn/feed',  // 候选: https://blog.moodlog.cn/atom.xml, https://blog.moodlog.cn/rss.xml, https://blog.moodlog.cn/feed.xml 等}, {name:'落花雨记', url:'/go.htm?url=https://www.luohuayu.cn/'
                    rss: 'https://www.luohuayu.cn/feed',  // 候选: https://www.luohuayu.cn/atom.xml, https://www.luohuayu.cn/rss.xml, https://www.luohuayu.cn/feed.xml 等}, {name:'绝非善类', url:'/go.htm?url=https://6angel.com/'
                    rss: 'https://6angel.com/feed',  // 候选: https://6angel.com/atom.xml, https://6angel.com/rss.xml, https://6angel.com/feed.xml 等}, {name:'左手平凡', url:'/go.htm?url=https://blog.perass.com/'
                    rss: 'https://blog.perass.com/feed',  // 候选: https://blog.perass.com/atom.xml, https://blog.perass.com/rss.xml, https://blog.perass.com/feed.xml 等}, {name:'道言', url:'/go.htm?url=https://lhn.wang/'
                    rss: 'https://lhn.wang/feed',  // 候选: https://lhn.wang/atom.xml, https://lhn.wang/rss.xml, https://lhn.wang/feed.xml 等}, {name:'', url:'/go.htm?url='}, {name:'', url:'/go.htm?url='}],
	'26': [{name:'华立', url:'/go.htm?url=https://www.renhuali.cn/'
                    rss: 'https://www.renhuali.cn/feed',  // 候选: https://www.renhuali.cn/atom.xml, https://www.renhuali.cn/rss.xml, https://www.renhuali.cn/feed.xml 等}, {name:'悦已', url:'/go.htm?url=https://yueji.org/'
                    rss: 'https://yueji.org/feed',  // 候选: https://yueji.org/atom.xml, https://yueji.org/rss.xml, https://yueji.org/feed.xml 等}, {name:'', url:''}]
};

// ==================== 论坛数据 ====================
const forumData = {
    '91': [{name:'中国惠多网', url:'/go.htm?url=https://www.cfido.com/'
                    rss: 'https://www.cfido.com/feed',  // 候选: https://www.cfido.com/atom.xml, https://www.cfido.com/rss.xml, https://www.cfido.com/feed.xml 等}],
    '95': [{name:'水木社区', url:'/go.htm?url=https://www.newsmth.net/'
                    rss: 'https://www.newsmth.net/feed',  // 候选: https://www.newsmth.net/atom.xml, https://www.newsmth.net/rss.xml, https://www.newsmth.net/feed.xml 等}],
    '99': [{name:'仪器社区', url:'/go.htm?url=https://bbs.instrument.com.cn/'
                    rss: 'https://bbs.instrument.com.cn/feed',  // 候选: https://bbs.instrument.com.cn/atom.xml, https://bbs.instrument.com.cn/rss.xml, https://bbs.instrument.com.cn/feed.xml 等}],
    '00': [{name:'免费吧', url:'/go.htm?url=https://www.free8.net/forum.php'
                    rss: 'https://www.free8.net/feed',  // 候选: https://www.free8.net/atom.xml, https://www.free8.net/rss.xml, https://www.free8.net/feed.xml 等}, {name:'蜂鸟摄影论坛', url:'/go.htm?url=https://bbs.fengniao.com/'
                    rss: 'https://bbs.fengniao.com/feed',  // 候选: https://bbs.fengniao.com/atom.xml, https://bbs.fengniao.com/rss.xml, https://bbs.fengniao.com/feed.xml 等}, {name:'色影无忌摄影论坛', url:'/go.htm?url=https://forum.xitek.com/'
                    rss: 'https://forum.xitek.com/feed',  // 候选: https://forum.xitek.com/atom.xml, https://forum.xitek.com/rss.xml, https://forum.xitek.com/feed.xml 等}, {name:'凯迪猫眼社区', url:'/go.htm?url=https://www.9kd.com/community'
                    rss: 'https://www.9kd.com/feed',  // 候选: https://www.9kd.com/atom.xml, https://www.9kd.com/rss.xml, https://www.9kd.com/feed.xml 等}, {name:'看雪论坛', url:'/go.htm?url=https://bbs.kanxue.com/'
                    rss: 'https://bbs.kanxue.com/feed',  // 候选: https://bbs.kanxue.com/atom.xml, https://bbs.kanxue.com/rss.xml, https://bbs.kanxue.com/feed.xml 等}],
    '01': [{name:'落伍者', url:'/go.htm?url=https://www.im286.net/'
                    rss: 'https://www.im286.net/feed',  // 候选: https://www.im286.net/atom.xml, https://www.im286.net/rss.xml, https://www.im286.net/feed.xml 等}, {name:'小木虫', url:'/go.htm?url=https://muchong.com/bbs/'
                    rss: 'https://muchong.com/feed',  // 候选: https://muchong.com/atom.xml, https://muchong.com/rss.xml, https://muchong.com/feed.xml 等}, {name:'金光论坛', url:'/go.htm?url=https://jglt.net/'
                    rss: 'https://jglt.net/feed',  // 候选: https://jglt.net/atom.xml, https://jglt.net/rss.xml, https://jglt.net/feed.xml 等}, {name:'福步外贸论坛', url:'/go.htm?url=https://bbs.fobshanghai.com/'
                    rss: 'https://bbs.fobshanghai.com/feed',  // 候选: https://bbs.fobshanghai.com/atom.xml, https://bbs.fobshanghai.com/rss.xml, https://bbs.fobshanghai.com/feed.xml 等}, {name:'无忧启动', url:'/go.htm?url=https://wuyou.net/'
                    rss: 'https://wuyou.net/feed',  // 候选: https://wuyou.net/atom.xml, https://wuyou.net/rss.xml, https://wuyou.net/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '02': [{name:'nga', url:'/go.htm?url=https://bbs.nga.cn/'
                    rss: 'https://bbs.nga.cn/feed',  // 候选: https://bbs.nga.cn/atom.xml, https://bbs.nga.cn/rss.xml, https://bbs.nga.cn/feed.xml 等}, {name:'理想论坛', url:'/go.htm?url=https://www.55188.com/'
                    rss: 'https://www.55188.com/feed',  // 候选: https://www.55188.com/atom.xml, https://www.55188.com/rss.xml, https://www.55188.com/feed.xml 等}],
    '03': [{name:'鳥哥的Linux私房菜', url:'/go.htm?url=https://phorum.vbird.org/index.php'
                    rss: 'https://phorum.vbird.org/feed',  // 候选: https://phorum.vbird.org/atom.xml, https://phorum.vbird.org/rss.xml, https://phorum.vbird.org/feed.xml 等}, {name:'NamePros', url:'/go.htm?url=https://www.namepros.com/'
                    rss: 'https://www.namepros.com/feed',  // 候选: https://www.namepros.com/atom.xml, https://www.namepros.com/rss.xml, https://www.namepros.com/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}],
    '04': [{name:'其乐', url:'/go.htm?url=https://keylol.com/'
                    rss: 'https://keylol.com/feed',  // 候选: https://keylol.com/atom.xml, https://keylol.com/rss.xml, https://keylol.com/feed.xml 等}, {name:'虎扑', url:'/go.htm?url=https://bbs.hupu.com/'
                    rss: 'https://bbs.hupu.com/feed',  // 候选: https://bbs.hupu.com/atom.xml, https://bbs.hupu.com/rss.xml, https://bbs.hupu.com/feed.xml 等}, {name:'海川化工', url:'/go.htm?url=https://bbs.hcbbs.com/'
                    rss: 'https://bbs.hcbbs.com/feed',  // 候选: https://bbs.hcbbs.com/atom.xml, https://bbs.hcbbs.com/rss.xml, https://bbs.hcbbs.com/feed.xml 等}],
    '06': [{name:'迅维', url:'/go.htm?url=https://www.chinafix.com/forum.php'
                    rss: 'https://www.chinafix.com/feed',  // 候选: https://www.chinafix.com/atom.xml, https://www.chinafix.com/rss.xml, https://www.chinafix.com/feed.xml 等}, {name:'飞卢', url:'/go.htm?url=https://bbs.faloo.com/'
                    rss: 'https://bbs.faloo.com/feed',  // 候选: https://bbs.faloo.com/atom.xml, https://bbs.faloo.com/rss.xml, https://bbs.faloo.com/feed.xml 等}, {name:'煎蛋', url:'/go.htm?url=https://jandan.net/bbs'
                    rss: 'https://jandan.net/feed',  // 候选: https://jandan.net/atom.xml, https://jandan.net/rss.xml, https://jandan.net/feed.xml 等}, {name:'绝客', url:'/go.htm?url=https://jkmrp.com/'
                    rss: 'https://jkmrp.com/feed',  // 候选: https://jkmrp.com/atom.xml, https://jkmrp.com/rss.xml, https://jkmrp.com/feed.xml 等}],
    '07': [{name:'chiphell', url:'/go.htm?url=https://www.chiphell.com/forum.php'
                    rss: 'https://www.chiphell.com/feed',  // 候选: https://www.chiphell.com/atom.xml, https://www.chiphell.com/rss.xml, https://www.chiphell.com/feed.xml 等}, {name:'矿石收音机', url:'/go.htm?url=http://www.crystalradio.cn/forum.php'
                    rss: 'http://www.crystalradio.cn/feed',  // 候选: http://www.crystalradio.cn/atom.xml, http://www.crystalradio.cn/rss.xml, http://www.crystalradio.cn/feed.xml 等}],
    '08': [{name:'hostloc', url:'/go.htm?url=https://hostloc.com/'
                    rss: 'https://hostloc.com/feed',  // 候选: https://hostloc.com/atom.xml, https://hostloc.com/rss.xml, https://hostloc.com/feed.xml 等}, {name:'吾爱破解', url:'/go.htm?url=https://www.52pojie.cn/index.php'
                    rss: 'https://www.52pojie.cn/feed',  // 候选: https://www.52pojie.cn/atom.xml, https://www.52pojie.cn/rss.xml, https://www.52pojie.cn/feed.xml 等}],
    '09': [{name:'北邮人论坛', url:'/go.htm?url=https://bbs.byr.cn/'
                    rss: 'https://bbs.byr.cn/feed',  // 候选: https://bbs.byr.cn/atom.xml, https://bbs.byr.cn/rss.xml, https://bbs.byr.cn/feed.xml 等}, {name:'Ruby中文社区', url:'/go.htm?url=https://ruby-china.org/'
                    rss: 'https://ruby-china.org/feed',  // 候选: https://ruby-china.org/atom.xml, https://ruby-china.org/rss.xml, https://ruby-china.org/feed.xml 等}],
    '10': [{name:'v2ex', url:'/go.htm?url=https://www.v2ex.com/'
                    rss: 'https://www.v2ex.com/feed',  // 候选: https://www.v2ex.com/atom.xml, https://www.v2ex.com/rss.xml, https://www.v2ex.com/feed.xml 等}],
    '11': [{name:'王牌技术员联盟', url:'/go.htm?url=https://wangpai.2345.cn/'
                    rss: 'https://wangpai.2345.cn/feed',  // 候选: https://wangpai.2345.cn/atom.xml, https://wangpai.2345.cn/rss.xml, https://wangpai.2345.cn/feed.xml 等}, {name:'cnodejs', url:'/go.htm?url=https://cnodejs.org/'
                    rss: 'https://cnodejs.org/feed',  // 候选: https://cnodejs.org/atom.xml, https://cnodejs.org/rss.xml, https://cnodejs.org/feed.xml 等}],
    '12': [{name:'顶渲论坛', url:'/go.htm?url=https://www.toprender.com/forum.php'
                    rss: 'https://www.toprender.com/feed',  // 候选: https://www.toprender.com/atom.xml, https://www.toprender.com/rss.xml, https://www.toprender.com/feed.xml 等}, {name:'UG爱好者', url:'/go.htm?url=https://www.ugsnx.com/forum.php'
                    rss: 'https://www.ugsnx.com/feed',  // 候选: https://www.ugsnx.com/atom.xml, https://www.ugsnx.com/rss.xml, https://www.ugsnx.com/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '13': [{name:'虫部落', url:'/go.htm?url=https://www.chongbuluo.com/'
                    rss: 'https://www.chongbuluo.com/feed',  // 候选: https://www.chongbuluo.com/atom.xml, https://www.chongbuluo.com/rss.xml, https://www.chongbuluo.com/feed.xml 等}],
    '14': [{name:'过早客', url:'/go.htm?url=https://www.guozaoke.com/'
                    rss: 'https://www.guozaoke.com/feed',  // 候选: https://www.guozaoke.com/atom.xml, https://www.guozaoke.com/rss.xml, https://www.guozaoke.com/feed.xml 等}, {name:'learnku', url:'/go.htm?url=https://learnku.com/'
                    rss: 'https://learnku.com/feed',  // 候选: https://learnku.com/atom.xml, https://learnku.com/rss.xml, https://learnku.com/feed.xml 等}],
    '15': [{name:'超理', url:'/go.htm?url=https://chaoli.club/'
                    rss: 'https://chaoli.club/feed',  // 候选: https://chaoli.club/atom.xml, https://chaoli.club/rss.xml, https://chaoli.club/feed.xml 等}, {name:'什么值得买社区', url:'/go.htm?url=https://post.smzdm.com/'
                    rss: 'https://post.smzdm.com/feed',  // 候选: https://post.smzdm.com/atom.xml, https://post.smzdm.com/rss.xml, https://post.smzdm.com/feed.xml 等}],
    '17': [{name:'4414', url:'/go.htm?url=https://www.4414.cn/'
                    rss: 'https://www.4414.cn/feed',  // 候选: https://www.4414.cn/atom.xml, https://www.4414.cn/rss.xml, https://www.4414.cn/feed.xml 等}],
    '18': [{name:'0xffff', url:'/go.htm?url=https://0xffff.one/'
                    rss: 'https://0xffff.one/feed',  // 候选: https://0xffff.one/atom.xml, https://0xffff.one/rss.xml, https://0xffff.one/feed.xml 等}],
    '19': [{name:'代码厨房社区', url:'/go.htm?url=https://codekitchen.community/'
                    rss: 'https://codekitchen.community/feed',  // 候选: https://codekitchen.community/atom.xml, https://codekitchen.community/rss.xml, https://codekitchen.community/feed.xml 等}, {name:'w2solo独立开发者社区', url:'/go.htm?url=https://w2solo.com/'
                    rss: 'https://w2solo.com/feed',  // 候选: https://w2solo.com/atom.xml, https://w2solo.com/rss.xml, https://w2solo.com/feed.xml 等}],
    '20': [{name:'大佬论坛', url:'https://www.dalao.net/'
                    rss: 'https://www.dalao.net/feed',  // 候选: https://www.dalao.net/atom.xml, https://www.dalao.net/rss.xml, https://www.dalao.net/feed.xml 等}, {name:'Mergeek产品爱好者社区', url:'/go.htm?url=https://www.mergeek.com/'
                    rss: 'https://www.mergeek.com/feed',  // 候选: https://www.mergeek.com/atom.xml, https://www.mergeek.com/rss.xml, https://www.mergeek.com/feed.xml 等}],
    '21': [{name:'obsidian', url:'/go.htm?url=https://forum-zh.obsidian.md/'
                    rss: 'https://forum-zh.obsidian.md/feed',  // 候选: https://forum-zh.obsidian.md/atom.xml, https://forum-zh.obsidian.md/rss.xml, https://forum-zh.obsidian.md/feed.xml 等}, {name:'2号站长网', url:'/go.htm?url=https://www.zz2zz.com/circle/'
                    rss: 'https://www.zz2zz.com/feed',  // 候选: https://www.zz2zz.com/atom.xml, https://www.zz2zz.com/rss.xml, https://www.zz2zz.com/feed.xml 等}],
    '22': [{name:'个站论坛', url:'/go.htm?url=https://storeweb.cn/forum'
                    rss: 'https://storeweb.cn/feed',  // 候选: https://storeweb.cn/atom.xml, https://storeweb.cn/rss.xml, https://storeweb.cn/feed.xml 等}, {name:'nodeseek', url:'/go.htm?url=https://www.nodeseek.com/'
                    rss: 'https://www.nodeseek.com/feed',  // 候选: https://www.nodeseek.com/atom.xml, https://www.nodeseek.com/rss.xml, https://www.nodeseek.com/feed.xml 等}, {name:'云盘135论坛', url:'/go.htm?url=http://www.yunpan135.com/'
                    rss: 'http://www.yunpan135.com/feed',  // 候选: http://www.yunpan135.com/atom.xml, http://www.yunpan135.com/rss.xml, http://www.yunpan135.com/feed.xml 等}],
    '23': [{name:'nodeloc', url:'/go.htm?url=https://www.nodeloc.com/'
                    rss: 'https://www.nodeloc.com/feed',  // 候选: https://www.nodeloc.com/atom.xml, https://www.nodeloc.com/rss.xml, https://www.nodeloc.com/feed.xml 等}, {name:'linux do', url:'/go.htm?url=https://linux.do/'
                    rss: 'https://linux.do/feed',  // 候选: https://linux.do/atom.xml, https://linux.do/rss.xml, https://linux.do/feed.xml 等}, {name:'hifiti', url:'/go.htm?url=https://hifiti.com/'
                    rss: 'https://hifiti.com/feed',  // 候选: https://hifiti.com/atom.xml, https://hifiti.com/rss.xml, https://hifiti.com/feed.xml 等}],
    '24': [{name:'科技LION社区', url:'/go.htm?url=https://bbs.kejilion.pro/'
                    rss: 'https://bbs.kejilion.pro/feed',  // 候选: https://bbs.kejilion.pro/atom.xml, https://bbs.kejilion.pro/rss.xml, https://bbs.kejilion.pro/feed.xml 等}, {name:'编程导航', url:'/go.htm?url=https://www.codefather.cn/'
                    rss: 'https://www.codefather.cn/feed',  // 候选: https://www.codefather.cn/atom.xml, https://www.codefather.cn/rss.xml, https://www.codefather.cn/feed.xml 等}, {name:'邮箱论坛', url:'/go.htm?url=https://bbs.emailhouse.cn/'
                    rss: 'https://bbs.emailhouse.cn/feed',  // 候选: https://bbs.emailhouse.cn/atom.xml, https://bbs.emailhouse.cn/rss.xml, https://bbs.emailhouse.cn/feed.xml 等}],
    '25': [ {name:'博客录论坛', url:'/go.htm?url=https://boke.lu/forums'
                    rss: 'https://boke.lu/feed',  // 候选: https://boke.lu/atom.xml, https://boke.lu/rss.xml, https://boke.lu/feed.xml 等}, {name:'涵云社区', url:'/go.htm?url=https://www.vhany.top/'
                    rss: 'https://www.vhany.top/feed',  // 候选: https://www.vhany.top/atom.xml, https://www.vhany.top/rss.xml, https://www.vhany.top/feed.xml 等}, {name:'劳动者论坛', url:'/go.htm?url=https://www.laodongzhe.cn'
                    rss: 'https://www.laodongzhe.cn/feed',  // 候选: https://www.laodongzhe.cn/atom.xml, https://www.laodongzhe.cn/rss.xml, https://www.laodongzhe.cn/feed.xml 等},{name:'2libra', url:'/go.htm?url=https://2libra.com/'
                    rss: 'https://2libra.com/feed',  // 候选: https://2libra.com/atom.xml, https://2libra.com/rss.xml, https://2libra.com/feed.xml 等}],
    '26': [{name:'摸鱼论坛', url:'/go.htm?url=https://mylt.net/'
                    rss: 'https://mylt.net/feed',  // 候选: https://mylt.net/atom.xml, https://mylt.net/rss.xml, https://mylt.net/feed.xml 等}, {name:'discoke', url:'/go.htm?url=https://www.discoke.com/'
                    rss: 'https://www.discoke.com/feed',  // 候选: https://www.discoke.com/atom.xml, https://www.discoke.com/rss.xml, https://www.discoke.com/feed.xml 等}, {name:'mjjzz', url:'/go.htm?url=https://www.mjjzz.com/'
                    rss: 'https://www.mjjzz.com/feed',  // 候选: https://www.mjjzz.com/atom.xml, https://www.mjjzz.com/rss.xml, https://www.mjjzz.com/feed.xml 等}, {name:'博客之家论坛', url:'/go.htm?url=https://52blog.cn/'
                    rss: 'https://52blog.cn/feed',  // 候选: https://52blog.cn/atom.xml, https://52blog.cn/rss.xml, https://52blog.cn/feed.xml 等}, {name:'侠客岛', url:'/go.htm?url=https://bbs.hk0.cc/'
                    rss: 'https://bbs.hk0.cc/feed',  // 候选: https://bbs.hk0.cc/atom.xml, https://bbs.hk0.cc/rss.xml, https://bbs.hk0.cc/feed.xml 等}, {name:'虚拟资源爱好者的乌托邦', url:'/go.htm?url=https://zzoo.im/'
                    rss: 'https://zzoo.im/feed',  // 候选: https://zzoo.im/atom.xml, https://zzoo.im/rss.xml, https://zzoo.im/feed.xml 等}, {name:'', url:'/go.htm?url='}, {name:'', url:'/go.htm?url='}, {name:'', url:'/go.htm?url='}, {name:'', url:'/go.htm?url='}]
};

// ==================== 博客大全导航数据 ====================
const blogNavData = {
    '06': [{name:'博客志', url:'/go.htm?url=http://www.jetli.com.cn/'
                    rss: 'http://www.jetli.com.cn/feed',  // 候选: http://www.jetli.com.cn/atom.xml, http://www.jetli.com.cn/rss.xml, http://www.jetli.com.cn/feed.xml 等}],
    '08': [{name:'优秀博客集锦', url:'/go.htm?url=https://woodwhales.cn/2018/12/22/002/'
                    rss: 'https://woodwhales.cn/feed',  // 候选: https://woodwhales.cn/atom.xml, https://woodwhales.cn/rss.xml, https://woodwhales.cn/feed.xml 等}],
    '09': [{name:'卢松松博客大全', url:'/go.htm?url=https://daohang.lusongsong.com/'
                    rss: 'https://daohang.lusongsong.com/feed',  // 候选: https://daohang.lusongsong.com/atom.xml, https://daohang.lusongsong.com/rss.xml, https://daohang.lusongsong.com/feed.xml 等}],
    '14': [{name:'rssblog', url:'/go.htm?url=https://rssblog.imcbc.cn/member/'
                    rss: 'https://rssblog.imcbc.cn/feed',  // 候选: https://rssblog.imcbc.cn/atom.xml, https://rssblog.imcbc.cn/rss.xml, https://rssblog.imcbc.cn/feed.xml 等}],
    '16': [{name:'个站商店', url:'/go.htm?url=https://storeweb.cn/'
                    rss: 'https://storeweb.cn/feed',  // 候选: https://storeweb.cn/atom.xml, https://storeweb.cn/rss.xml, https://storeweb.cn/feed.xml 等}],
    '17': [{name:'十年之约', url:'/go.htm?url=https://www.foreverblog.cn/'
                    rss: 'https://www.foreverblog.cn/feed',  // 候选: https://www.foreverblog.cn/atom.xml, https://www.foreverblog.cn/rss.xml, https://www.foreverblog.cn/feed.xml 等}],
    '20': [{name:'BlogFinder', url:'/go.htm?url=https://bf.zzxworld.com/s'
                    rss: 'https://bf.zzxworld.com/feed',  // 候选: https://bf.zzxworld.com/atom.xml, https://bf.zzxworld.com/rss.xml, https://bf.zzxworld.com/feed.xml 等}, {name:'博客大全', url:'/go.htm?url=https://boke.wangzhidaquan.com/'
                    rss: 'https://boke.wangzhidaquan.com/feed',  // 候选: https://boke.wangzhidaquan.com/atom.xml, https://boke.wangzhidaquan.com/rss.xml, https://boke.wangzhidaquan.com/feed.xml 等}, {name:'站长笔记博客大全', url:'/go.htm?url=https://www.080210.com/link/'
                    rss: 'https://www.080210.com/feed',  // 候选: https://www.080210.com/atom.xml, https://www.080210.com/rss.xml, https://www.080210.com/feed.xml 等}],
    '21': [{name:'博客圈', url:'/go.htm?url=https://bokequan.cn/boke'
                    rss: 'https://bokequan.cn/feed',  // 候选: https://bokequan.cn/atom.xml, https://bokequan.cn/rss.xml, https://bokequan.cn/feed.xml 等}, {name:'Ye Olde Blogroll', url:'/go.htm?url=https://blogroll.org/'
                    rss: 'https://blogroll.org/feed',  // 候选: https://blogroll.org/atom.xml, https://blogroll.org/rss.xml, https://blogroll.org/feed.xml 等}],
    '22': [{name:'集博栈', url:'/go.htm?url=https://www.zhblogs.net/'
                    rss: 'https://www.zhblogs.net/feed',  // 候选: https://www.zhblogs.net/atom.xml, https://www.zhblogs.net/rss.xml, https://www.zhblogs.net/feed.xml 等}],
    '23': [{name:'博友圈', url:'/go.htm?url=https://www.boyouquan.com/blogs'
                    rss: 'https://www.boyouquan.com/feed',  // 候选: https://www.boyouquan.com/atom.xml, https://www.boyouquan.com/rss.xml, https://www.boyouquan.com/feed.xml 等}, {name:'博客录', url:'/go.htm?url=https://boke.lu/'
                    rss: 'https://boke.lu/feed',  // 候选: https://boke.lu/atom.xml, https://boke.lu/rss.xml, https://boke.lu/feed.xml 等}, {name:'笔墨迹', url:'/go.htm?url=https://blogscn.fun/'
                    rss: 'https://blogscn.fun/feed',  // 候选: https://blogscn.fun/atom.xml, https://blogscn.fun/rss.xml, https://blogscn.fun/feed.xml 等}],
    '24': [{name:'技术博客大全', url:'/go.htm?url=https://laodongzhe.cn/'
                    rss: 'https://laodongzhe.cn/feed',  // 候选: https://laodongzhe.cn/atom.xml, https://laodongzhe.cn/rss.xml, https://laodongzhe.cn/feed.xml 等}, {name:'blogsclub', url:'/go.htm?url=https://www.blogsclub.org/members.html'
                    rss: 'https://www.blogsclub.org/feed',  // 候选: https://www.blogsclub.org/atom.xml, https://www.blogsclub.org/rss.xml, https://www.blogsclub.org/feed.xml 等}, {name:'浪海导航', url:'/go.htm?url=https://www.langhai.net/'
                    rss: 'https://www.langhai.net/feed',  // 候选: https://www.langhai.net/atom.xml, https://www.langhai.net/rss.xml, https://www.langhai.net/feed.xml 等}, {name:'博客说', url:'/go.htm?url=https://blogtalk.org/blogs'
                    rss: 'https://blogtalk.org/feed',  // 候选: https://blogtalk.org/atom.xml, https://blogtalk.org/rss.xml, https://blogtalk.org/feed.xml 等}, {name:'blog114', url:'/go.htm?url=https://blog114.com/'
                    rss: 'https://blog114.com/feed',  // 候选: https://blog114.com/atom.xml, https://blog114.com/rss.xml, https://blog114.com/feed.xml 等}, {name:'蛋卷box技术博客收集', url:'/go.htm?url=https://dogerolls.com/'
                    rss: 'https://dogerolls.com/feed',  // 候选: https://dogerolls.com/atom.xml, https://dogerolls.com/rss.xml, https://dogerolls.com/feed.xml 等}, {name:'webteleporter', url:'/go.htm?url=https://webteleporter.top/list'
                    rss: 'https://webteleporter.top/feed',  // 候选: https://webteleporter.top/atom.xml, https://webteleporter.top/rss.xml, https://webteleporter.top/feed.xml 等}, {name:'开往成员列表', url:'/go.htm?url=https://list.travellings.cn/'
                    rss: 'https://list.travellings.cn/feed',  // 候选: https://list.travellings.cn/atom.xml, https://list.travellings.cn/rss.xml, https://list.travellings.cn/feed.xml 等}],
    '25': [{name:'忘归潮', url:'/go.htm?url=https://blogbay.cn/'
                    rss: 'https://blogbay.cn/feed',  // 候选: https://blogbay.cn/atom.xml, https://blogbay.cn/rss.xml, https://blogbay.cn/feed.xml 等}, {name:'博客联盟', url:'/go.htm?url=https://www.bokelianmeng.com/'
                    rss: 'https://www.bokelianmeng.com/feed',  // 候选: https://www.bokelianmeng.com/atom.xml, https://www.bokelianmeng.com/rss.xml, https://www.bokelianmeng.com/feed.xml 等}, {name:'博客星球', url:'/go.htm?url=https://blogplanet.cn/'
                    rss: 'https://blogplanet.cn/feed',  // 候选: https://blogplanet.cn/atom.xml, https://blogplanet.cn/rss.xml, https://blogplanet.cn/feed.xml 等}, {name:'博客集', url:'/go.htm?url=https://bloginc.cn/'
                    rss: 'https://bloginc.cn/feed',  // 候选: https://bloginc.cn/atom.xml, https://bloginc.cn/rss.xml, https://bloginc.cn/feed.xml 等}, {name:'博客小镇', url:'/go.htm?url=https://blog.town/'
                    rss: 'https://blog.town/feed',  // 候选: https://blog.town/atom.xml, https://blog.town/rss.xml, https://blog.town/feed.xml 等}, {name:'hot166博客导航', url:'/go.htm?url=https://hot166.com/blogger'
                    rss: 'https://hot166.com/feed',  // 候选: https://hot166.com/atom.xml, https://hot166.com/rss.xml, https://hot166.com/feed.xml 等}, {name:'morerss', url:'/go.htm?url=https://www.morerss.com/zh/博客'
                    rss: 'https://www.morerss.com/feed',  // 候选: https://www.morerss.com/atom.xml, https://www.morerss.com/rss.xml, https://www.morerss.com/feed.xml 等}, {name:'无聊湾', url:'/go.htm?url=https://boringbay.com/'
                    rss: 'https://boringbay.com/feed',  // 候选: https://boringbay.com/atom.xml, https://boringbay.com/rss.xml, https://boringbay.com/feed.xml 等}, {name:'博客名录', url:'/go.htm?url=https://blog.tz1989.net/'
                    rss: 'https://blog.tz1989.net/feed',  // 候选: https://blog.tz1989.net/atom.xml, https://blog.tz1989.net/rss.xml, https://blog.tz1989.net/feed.xml 等}, {name:'BOZHU.LINK', url:'/go.htm?url=https://blogger.toocool.cc/'
                    rss: 'https://blogger.toocool.cc/feed',  // 候选: https://blogger.toocool.cc/atom.xml, https://blogger.toocool.cc/rss.xml, https://blogger.toocool.cc/feed.xml 等}, {name:'朋.友', url:'/go.htm?url=https://peng.you/'
                    rss: 'https://peng.you/feed',  // 候选: https://peng.you/atom.xml, https://peng.you/rss.xml, https://peng.you/feed.xml 等},{name:'博客圈论坛', url:'/go.htm?url=https://bkq.net.cn/'
                    rss: 'https://bkq.net.cn/feed',  // 候选: https://bkq.net.cn/atom.xml, https://bkq.net.cn/rss.xml, https://bkq.net.cn/feed.xml 等},{name:'博客中心', url:'/go.htm?url=https://bokehub.com/home'
                    rss: 'https://bokehub.com/feed',  // 候选: https://bokehub.com/atom.xml, https://bokehub.com/rss.xml, https://bokehub.com/feed.xml 等},{name:'Wiwi.Blog 的部落卷', url:'/go.htm?url=https://wiwi.blog/blogroll'
                    rss: 'https://wiwi.blog/feed',  // 候选: https://wiwi.blog/atom.xml, https://wiwi.blog/rss.xml, https://wiwi.blog/feed.xml 等},{name:'部落卷卷', url:'/go.htm?url=https://blogblog.club/blogrollroll'
                    rss: 'https://blogblog.club/feed',  // 候选: https://blogblog.club/atom.xml, https://blogblog.club/rss.xml, https://blogblog.club/feed.xml 等},{name:'BlogRoll-notion', url:'/go.htm?url=https://blogroll.notion.site/'
                    rss: 'https://blogroll.notion.site/feed',  // 候选: https://blogroll.notion.site/atom.xml, https://blogroll.notion.site/rss.xml, https://blogroll.notion.site/feed.xml 等}, {name:'博客之家', url:'/go.htm?url=https://www.perass.com/'
                    rss: 'https://www.perass.com/feed',  // 候选: https://www.perass.com/atom.xml, https://www.perass.com/rss.xml, https://www.perass.com/feed.xml 等}, {name:'时光链', url:'/go.htm?url=http://www.leow.cn/link/'
                    rss: 'http://www.leow.cn/feed',  // 候选: http://www.leow.cn/atom.xml, http://www.leow.cn/rss.xml, http://www.leow.cn/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '26': [{name:'若梦博客', url:'/go.htm?url=http://www.rmbk.cc/'
                    rss: 'http://www.rmbk.cc/feed',  // 候选: http://www.rmbk.cc/atom.xml, http://www.rmbk.cc/rss.xml, http://www.rmbk.cc/feed.xml 等}, {name:'拾趣博客导航', url:'/go.htm?url=https://s7.fan/'
                    rss: 'https://s7.fan/feed',  // 候选: https://s7.fan/atom.xml, https://s7.fan/rss.xml, https://s7.fan/feed.xml 等}, {name:'有个站', url:'/go.htm?url=https://www.ygz.ink/'
                    rss: 'https://www.ygz.ink/feed',  // 候选: https://www.ygz.ink/atom.xml, https://www.ygz.ink/rss.xml, https://www.ygz.ink/feed.xml 等}, {name:'大佬论坛摸鱼', url:'/go.htm?url=https://www.dalao.net/index-1-2.htm'
                    rss: 'https://www.dalao.net/feed',  // 候选: https://www.dalao.net/atom.xml, https://www.dalao.net/rss.xml, https://www.dalao.net/feed.xml 等}]
};

// ==================== 随机访问博客数据 ====================
const randomBlogData = {
    '20': [{name:'开往', url:'/go.htm?url=https://www.travellings.cn/go.html'
                    rss: 'https://www.travellings.cn/feed',  // 候选: https://www.travellings.cn/atom.xml, https://www.travellings.cn/rss.xml, https://www.travellings.cn/feed.xml 等}],
    '21': [{name:'十年之约虫洞', url:'/go.htm?url=https://foreverblog.cn/go.html'
                    rss: 'https://foreverblog.cn/feed',  // 候选: https://foreverblog.cn/atom.xml, https://foreverblog.cn/rss.xml, https://foreverblog.cn/feed.xml 等}],
    '23': [{name:'博客路随机博客', url:'/go.htm?url=https://boke.lu/sj/'
                    rss: 'https://boke.lu/feed',  // 候选: https://boke.lu/atom.xml, https://boke.lu/rss.xml, https://boke.lu/feed.xml 等}],
    '24': [{name:'blogsclub空间穿梭', url:'/go.htm?url=https://www.blogsclub.org/go'
                    rss: 'https://www.blogsclub.org/feed',  // 候选: https://www.blogsclub.org/atom.xml, https://www.blogsclub.org/rss.xml, https://www.blogsclub.org/feed.xml 等}],
    '25': [{name:'晓梦羊博客集友谊之桥', url:'/go.htm?url=https://bloginc.cn/go.html'
                    rss: 'https://bloginc.cn/feed',  // 候选: https://bloginc.cn/atom.xml, https://bloginc.cn/rss.xml, https://bloginc.cn/feed.xml 等}, {name:'独立博客传送门', url:'/go.htm?url=https://webteleporter.top/'
                    rss: 'https://webteleporter.top/feed',  // 候选: https://webteleporter.top/atom.xml, https://webteleporter.top/rss.xml, https://webteleporter.top/feed.xml 等}, {name:'揪蝉', url:'/go.htm?url=https://www.jiuchan.org/'
                    rss: 'https://www.jiuchan.org/feed',  // 候选: https://www.jiuchan.org/atom.xml, https://www.jiuchan.org/rss.xml, https://www.jiuchan.org/feed.xml 等}, {name:'漫游', url:'/go.htm?url=https://blogger.toocool.cc/manyou'
                    rss: 'https://blogger.toocool.cc/feed',  // 候选: https://blogger.toocool.cc/atom.xml, https://blogger.toocool.cc/rss.xml, https://blogger.toocool.cc/feed.xml 等}],
	'26': [{name:'走访-劳动者随机博客', url:'/go.htm?url=https://laodongzhe.cn/goto.htm'
                    rss: 'https://laodongzhe.cn/feed',  // 候选: https://laodongzhe.cn/atom.xml, https://laodongzhe.cn/rss.xml, https://laodongzhe.cn/feed.xml 等}],
};

// ==================== 博客程序数据 ====================
const blogProgramData = {
    '03': [{name:'wordpress', url:'/go.htm?url=https://cn.wordpress.org/'
                    rss: 'https://cn.wordpress.org/feed',  // 候选: https://cn.wordpress.org/atom.xml, https://cn.wordpress.org/rss.xml, https://cn.wordpress.org/feed.xml 等}],
    '05': [{name:'zblog', url:'/go.htm?url=https://www.zblogcn.com/'
                    rss: 'https://www.zblogcn.com/feed',  // 候选: https://www.zblogcn.com/atom.xml, https://www.zblogcn.com/rss.xml, https://www.zblogcn.com/feed.xml 等}],
    '06': [{name:'typecho', url:'/go.htm?url=https://typecho.org/'
                    rss: 'https://typecho.org/feed',  // 候选: https://typecho.org/atom.xml, https://typecho.org/rss.xml, https://typecho.org/feed.xml 等}],
    '14': [{name:'TaoBlog', url:'/go.htm?url=https://blog.twofei.com/blog'
                    rss: 'https://blog.twofei.com/feed',  // 候选: https://blog.twofei.com/atom.xml, https://blog.twofei.com/rss.xml, https://blog.twofei.com/feed.xml 等}],
    '21': [{name:'清雨', url:'/go.htm?url=https://prain.cn/'
                    rss: 'https://prain.cn/feed',  // 候选: https://prain.cn/atom.xml, https://prain.cn/rss.xml, https://prain.cn/feed.xml 等}],
    '25': [{name:'serenade', url:'/go.htm?url=https://dyedd.cn/posts/serenade'
                    rss: 'https://dyedd.cn/feed',  // 候选: https://dyedd.cn/atom.xml, https://dyedd.cn/rss.xml, https://dyedd.cn/feed.xml 等}]
};

// ==================== AI导航数据 ====================
const aiNavData = {
    '21': [{name:'AInav人工智能导航', url:'/go.htm?url=https://www.ainav.cn/'
                    rss: 'https://www.ainav.cn/feed',  // 候选: https://www.ainav.cn/atom.xml, https://www.ainav.cn/rss.xml, https://www.ainav.cn/feed.xml 等}],
    '23': [{name:'深度AI导航', url:'/go.htm?url=https://www.deepdhai.com/'
                    rss: 'https://www.deepdhai.com/feed',  // 候选: https://www.deepdhai.com/atom.xml, https://www.deepdhai.com/rss.xml, https://www.deepdhai.com/feed.xml 等}, {name:'2345ai导航', url:'/go.htm?url=https://ai.2345.com/'
                    rss: 'https://ai.2345.com/feed',  // 候选: https://ai.2345.com/atom.xml, https://ai.2345.com/rss.xml, https://ai.2345.com/feed.xml 等}, {name:'tools-ai', url:'/go.htm?url=https://www.tools-ai.cn/'
                    rss: 'https://www.tools-ai.cn/feed',  // 候选: https://www.tools-ai.cn/atom.xml, https://www.tools-ai.cn/rss.xml, https://www.tools-ai.cn/feed.xml 等}, {name:'aibase', url:'/go.htm?url=https://top.aibase.com/'
                    rss: 'https://top.aibase.com/feed',  // 候选: https://top.aibase.com/atom.xml, https://top.aibase.com/rss.xml, https://top.aibase.com/feed.xml 等}, {name:'xiaobiuAI导航', url:'/go.htm?url=https://www.xiaobiu.cn/'
                    rss: 'https://www.xiaobiu.cn/feed',  // 候选: https://www.xiaobiu.cn/atom.xml, https://www.xiaobiu.cn/rss.xml, https://www.xiaobiu.cn/feed.xml 等}, {name:'非猪ai导航', url:'/go.htm?url=https://feizhuke.com/'
                    rss: 'https://feizhuke.com/feed',  // 候选: https://feizhuke.com/atom.xml, https://feizhuke.com/rss.xml, https://feizhuke.com/feed.xml 等}, {name:'aitobox', url:'/go.htm?url=https://aitobox.cn/nav/'
                    rss: 'https://aitobox.cn/feed',  // 候选: https://aitobox.cn/atom.xml, https://aitobox.cn/rss.xml, https://aitobox.cn/feed.xml 等}, {name:'AI技术导航', url:'/go.htm?url=https://www.codernav.cn/ai'
                    rss: 'https://www.codernav.cn/feed',  // 候选: https://www.codernav.cn/atom.xml, https://www.codernav.cn/rss.xml, https://www.codernav.cn/feed.xml 等}, {name:'aitoolbox', url:'/go.htm?url=https://aitoolbox.cn/'
                    rss: 'https://aitoolbox.cn/feed',  // 候选: https://aitoolbox.cn/atom.xml, https://aitoolbox.cn/rss.xml, https://aitoolbox.cn/feed.xml 等}, {name:'ai-toolbox net', url:'/go.htm?url=https://www.ai-toolbox.net/'
                    rss: 'https://www.ai-toolbox.net/feed',  // 候选: https://www.ai-toolbox.net/atom.xml, https://www.ai-toolbox.net/rss.xml, https://www.ai-toolbox.net/feed.xml 等}, {name:'零沫AI', url:'/go.htm?url=https://0mo.com/'
                    rss: 'https://0mo.com/feed',  // 候选: https://0mo.com/atom.xml, https://0mo.com/rss.xml, https://0mo.com/feed.xml 等}, {name:'ailookme', url:'/go.htm?url=https://www.ailookme.com/'
                    rss: 'https://www.ailookme.com/feed',  // 候选: https://www.ailookme.com/atom.xml, https://www.ailookme.com/rss.xml, https://www.ailookme.com/feed.xml 等}, {name:'ainavpro', url:'/go.htm?url=https://www.ainavpro.com/'
                    rss: 'https://www.ainavpro.com/feed',  // 候选: https://www.ainavpro.com/atom.xml, https://www.ainavpro.com/rss.xml, https://www.ainavpro.com/feed.xml 等}, {name:'易之网AI', url:'/go.htm?url=https://www.yizz.cn/'
                    rss: 'https://www.yizz.cn/feed',  // 候选: https://www.yizz.cn/atom.xml, https://www.yizz.cn/rss.xml, https://www.yizz.cn/feed.xml 等}, {name:'ai138', url:'/go.htm?url=https://www.ai138.com/'
                    rss: 'https://www.ai138.com/feed',  // 候选: https://www.ai138.com/atom.xml, https://www.ai138.com/rss.xml, https://www.ai138.com/feed.xml 等}],
    '24': [{name:'秒开导航', url:'/go.htm?url=https://www.mkdh.cn/'
                    rss: 'https://www.mkdh.cn/feed',  // 候选: https://www.mkdh.cn/atom.xml, https://www.mkdh.cn/rss.xml, https://www.mkdh.cn/feed.xml 等}, {name:'趣玩AI导航', url:'/go.htm?url=https://www.7wan.com.cn/'
                    rss: 'https://www.7wan.com.cn/feed',  // 候选: https://www.7wan.com.cn/atom.xml, https://www.7wan.com.cn/rss.xml, https://www.7wan.com.cn/feed.xml 等}, {name:'终极AI导航', url:'/go.htm?url=https://ai.zjnav.com/'
                    rss: 'https://ai.zjnav.com/feed',  // 候选: https://ai.zjnav.com/atom.xml, https://ai.zjnav.com/rss.xml, https://ai.zjnav.com/feed.xml 等}, {name:'AI001工具导航', url:'/go.htm?url=https://www.ai001.com/'
                    rss: 'https://www.ai001.com/feed',  // 候选: https://www.ai001.com/atom.xml, https://www.ai001.com/rss.xml, https://www.ai001.com/feed.xml 等}, {name:'AI派', url:'/go.htm?url=https://www.aipie.top/home'
                    rss: 'https://www.aipie.top/feed',  // 候选: https://www.aipie.top/atom.xml, https://www.aipie.top/rss.xml, https://www.aipie.top/feed.xml 等}, {name:'AI吧', url:'/go.htm?url=https://ai-bar.cn/'
                    rss: 'https://ai-bar.cn/feed',  // 候选: https://ai-bar.cn/atom.xml, https://ai-bar.cn/rss.xml, https://ai-bar.cn/feed.xml 等}, {name:'AI一站通', url:'/go.htm?url=https://www.aiyzt.com/'
                    rss: 'https://www.aiyzt.com/feed',  // 候选: https://www.aiyzt.com/atom.xml, https://www.aiyzt.com/rss.xml, https://www.aiyzt.com/feed.xml 等}, {name:'meoai', url:'/go.htm?url=https://www.meoai.net/'
                    rss: 'https://www.meoai.net/feed',  // 候选: https://www.meoai.net/atom.xml, https://www.meoai.net/rss.xml, https://www.meoai.net/feed.xml 等}, {name:'热卡卡AI导航', url:'/go.htm?url=http://www.aidh.cn/'
                    rss: 'http://www.aidh.cn/feed',  // 候选: http://www.aidh.cn/atom.xml, http://www.aidh.cn/rss.xml, http://www.aidh.cn/feed.xml 等}, {name:'aittdh', url:'/go.htm?url=https://ai.ttdh.cn/favorites/gn'
                    rss: 'https://ai.ttdh.cn/feed',  // 候选: https://ai.ttdh.cn/atom.xml, https://ai.ttdh.cn/rss.xml, https://ai.ttdh.cn/feed.xml 等}, {name:'aiaiv', url:'/go.htm?url=https://aiaiv.cn/'
                    rss: 'https://aiaiv.cn/feed',  // 候选: https://aiaiv.cn/atom.xml, https://aiaiv.cn/rss.xml, https://aiaiv.cn/feed.xml 等}, {name:'懂AI', url:'/go.htm?url=https://www.dongaigc.com/nav'
                    rss: 'https://www.dongaigc.com/feed',  // 候选: https://www.dongaigc.com/atom.xml, https://www.dongaigc.com/rss.xml, https://www.dongaigc.com/feed.xml 等}, {name:'AI设计导航', url:'/go.htm?url=https://aiiiii.com.cn/'
                    rss: 'https://aiiiii.com.cn/feed',  // 候选: https://aiiiii.com.cn/atom.xml, https://aiiiii.com.cn/rss.xml, https://aiiiii.com.cn/feed.xml 等}, {name:'hui-ai', url:'/go.htm?url=https://www.hui-ai.cn/'
                    rss: 'https://www.hui-ai.cn/feed',  // 候选: https://www.hui-ai.cn/atom.xml, https://www.hui-ai.cn/rss.xml, https://www.hui-ai.cn/feed.xml 等}, {name:'aiopenminds', url:'/go.htm?url=https://www.aiopenminds.com/common'
                    rss: 'https://www.aiopenminds.com/feed',  // 候选: https://www.aiopenminds.com/atom.xml, https://www.aiopenminds.com/rss.xml, https://www.aiopenminds.com/feed.xml 等}, {name:'霂明AI导航', url:'/go.htm?url=https://n.mumingfang.com/ai'
                    rss: 'https://n.mumingfang.com/feed',  // 候选: https://n.mumingfang.com/atom.xml, https://n.mumingfang.com/rss.xml, https://n.mumingfang.com/feed.xml 等}, {name:'图钉ai', url:'/go.htm?url=https://www.tudingai.com/'
                    rss: 'https://www.tudingai.com/feed',  // 候选: https://www.tudingai.com/atom.xml, https://www.tudingai.com/rss.xml, https://www.tudingai.com/feed.xml 等}, {name:'xinfangs-Ai工具箱', url:'/go.htm?url=https://ai.xinfangs.com/'
                    rss: 'https://ai.xinfangs.com/feed',  // 候选: https://ai.xinfangs.com/atom.xml, https://ai.xinfangs.com/rss.xml, https://ai.xinfangs.com/feed.xml 等}, {name:'aitool8', url:'/go.htm?url=https://aitool8.com/'
                    rss: 'https://aitool8.com/feed',  // 候选: https://aitool8.com/atom.xml, https://aitool8.com/rss.xml, https://aitool8.com/feed.xml 等}, {name:'千库AI导航', url:'/go.htm?url=https://kubao.588tool.com/'
                    rss: 'https://kubao.588tool.com/feed',  // 候选: https://kubao.588tool.com/atom.xml, https://kubao.588tool.com/rss.xml, https://kubao.588tool.com/feed.xml 等}, {name:'尘埃AI', url:'/go.htm?url=https://www.chenai.com/category.html'
                    rss: 'https://www.chenai.com/feed',  // 候选: https://www.chenai.com/atom.xml, https://www.chenai.com/rss.xml, https://www.chenai.com/feed.xml 等}],
    '25': [{name:'AI工具集导航', url:'/go.htm?url=https://ai-bot.cn/'
                    rss: 'https://ai-bot.cn/feed',  // 候选: https://ai-bot.cn/atom.xml, https://ai-bot.cn/rss.xml, https://ai-bot.cn/feed.xml 等}, {name:'AI导航站', url:'/go.htm?url=https://ai-nav.net/'
                    rss: 'https://ai-nav.net/feed',  // 候选: https://ai-nav.net/atom.xml, https://ai-nav.net/rss.xml, https://ai-nav.net/feed.xml 等}, {name:'AI导航', url:'/go.htm?url=https://aidh.net/'
                    rss: 'https://aidh.net/feed',  // 候选: https://aidh.net/atom.xml, https://aidh.net/rss.xml, https://aidh.net/feed.xml 等}, {name:'AI神器榜·脑榜', url:'/go.htm?url=https://www.naobang.com/'
                    rss: 'https://www.naobang.com/feed',  // 候选: https://www.naobang.com/atom.xml, https://www.naobang.com/rss.xml, https://www.naobang.com/feed.xml 等}, {name:'Toolify', url:'/go.htm?url=https://www.toolify.ai/zh/'
                    rss: 'https://www.toolify.ai/feed',  // 候选: https://www.toolify.ai/atom.xml, https://www.toolify.ai/rss.xml, https://www.toolify.ai/feed.xml 等}, {name:'aihub', url:'/go.htm?url=https://www.aihub.cn/'
                    rss: 'https://www.aihub.cn/feed',  // 候选: https://www.aihub.cn/atom.xml, https://www.aihub.cn/rss.xml, https://www.aihub.cn/feed.xml 等}, {name:'aigc', url:'/go.htm?url=https://www.aigc.cn/'
                    rss: 'https://www.aigc.cn/feed',  // 候选: https://www.aigc.cn/atom.xml, https://www.aigc.cn/rss.xml, https://www.aigc.cn/feed.xml 等}, {name:'发现AI', url:'/go.htm?url=https://www.faxianai.com/'
                    rss: 'https://www.faxianai.com/feed',  // 候选: https://www.faxianai.com/atom.xml, https://www.faxianai.com/rss.xml, https://www.faxianai.com/feed.xml 等}, {name:'360AI导航', url:'/go.htm?url=https://ai.hao.360.com/'
                    rss: 'https://ai.hao.360.com/feed',  // 候选: https://ai.hao.360.com/atom.xml, https://ai.hao.360.com/rss.xml, https://ai.hao.360.com/feed.xml 等}, {name:'AI神器', url:'/go.htm?url=https://aishenqi.net/'
                    rss: 'https://aishenqi.net/feed',  // 候选: https://aishenqi.net/atom.xml, https://aishenqi.net/rss.xml, https://aishenqi.net/feed.xml 等}, {name:'AI工具箱', url:'/go.htm?url=https://ai-kit.cn/'
                    rss: 'https://ai-kit.cn/feed',  // 候选: https://ai-kit.cn/atom.xml, https://ai-kit.cn/rss.xml, https://ai-kit.cn/feed.xml 等}, {name:'2ai', url:'/go.htm?url=https://www.2ai.cn/'
                    rss: 'https://www.2ai.cn/feed',  // 候选: https://www.2ai.cn/atom.xml, https://www.2ai.cn/rss.xml, https://www.2ai.cn/feed.xml 等}, {name:'墨鱼', url:'/go.htm?url=https://www.moyuxx.com/'
                    rss: 'https://www.moyuxx.com/feed',  // 候选: https://www.moyuxx.com/atom.xml, https://www.moyuxx.com/rss.xml, https://www.moyuxx.com/feed.xml 等}, {name:'爱搜AI导航站', url:'/go.htm?url=https://aiso.space/'
                    rss: 'https://aiso.space/feed',  // 候选: https://aiso.space/atom.xml, https://aiso.space/rss.xml, https://aiso.space/feed.xml 等}, {name:'AIG123-AI工具导航', url:'/go.htm?url=https://www.aig123.com/'
                    rss: 'https://www.aig123.com/feed',  // 候选: https://www.aig123.com/atom.xml, https://www.aig123.com/rss.xml, https://www.aig123.com/feed.xml 等}, {name:'aitools', url:'/go.htm?url=https://aitools.fyi/zh'
                    rss: 'https://aitools.fyi/feed',  // 候选: https://aitools.fyi/atom.xml, https://aitools.fyi/rss.xml, https://aitools.fyi/feed.xml 等}, {name:'AMZ123', url:'/go.htm?url=https://www.amz123.com/ai'
                    rss: 'https://www.amz123.com/feed',  // 候选: https://www.amz123.com/atom.xml, https://www.amz123.com/rss.xml, https://www.amz123.com/feed.xml 等}, {name:'优设AI导航', url:'/go.htm?url=https://hao.uisdc.com/ai/'
                    rss: 'https://hao.uisdc.com/feed',  // 候选: https://hao.uisdc.com/atom.xml, https://hao.uisdc.com/rss.xml, https://hao.uisdc.com/feed.xml 等}, {name:'得到AI学习圈工具箱', url:'/go.htm?url=https://aitools.dedao.cn/'
                    rss: 'https://aitools.dedao.cn/feed',  // 候选: https://aitools.dedao.cn/atom.xml, https://aitools.dedao.cn/rss.xml, https://aitools.dedao.cn/feed.xml 等}, {name:'猫目', url:'/go.htm?url=https://maomu.com/'
                    rss: 'https://maomu.com/feed',  // 候选: https://maomu.com/atom.xml, https://maomu.com/rss.xml, https://maomu.com/feed.xml 等}, {name:'openi', url:'/go.htm?url=https://openi.cn/'
                    rss: 'https://openi.cn/feed',  // 候选: https://openi.cn/atom.xml, https://openi.cn/rss.xml, https://openi.cn/feed.xml 等}, {name:'Ai集思', url:'/go.htm?url=https://www.thinkinginai.cn/'
                    rss: 'https://www.thinkinginai.cn/feed',  // 候选: https://www.thinkinginai.cn/atom.xml, https://www.thinkinginai.cn/rss.xml, https://www.thinkinginai.cn/feed.xml 等}, {name:'ai云导航', url:'/go.htm?url=https://ai.yunwz.net/'
                    rss: 'https://ai.yunwz.net/feed',  // 候选: https://ai.yunwz.net/atom.xml, https://ai.yunwz.net/rss.xml, https://ai.yunwz.net/feed.xml 等}, {name:'botlib AI导航', url:'/go.htm?url=https://botlib.cn/'
                    rss: 'https://botlib.cn/feed',  // 候选: https://botlib.cn/atom.xml, https://botlib.cn/rss.xml, https://botlib.cn/feed.xml 等}, {name:'AI工具', url:'/go.htm?url=https://www.aigongjuji.com.cn/'
                    rss: 'https://www.aigongjuji.com.cn/feed',  // 候选: https://www.aigongjuji.com.cn/atom.xml, https://www.aigongjuji.com.cn/rss.xml, https://www.aigongjuji.com.cn/feed.xml 等}, {name:'果果ai', url:'/go.htm?url=https://www.gogoai.com/'
                    rss: 'https://www.gogoai.com/feed',  // 候选: https://www.gogoai.com/atom.xml, https://www.gogoai.com/rss.xml, https://www.gogoai.com/feed.xml 等}, {name:'智研社AI导航', url:'/go.htm?url=https://www.ai-blog.cn/site'
                    rss: 'https://www.ai-blog.cn/feed',  // 候选: https://www.ai-blog.cn/atom.xml, https://www.ai-blog.cn/rss.xml, https://www.ai-blog.cn/feed.xml 等}, {name:'toolifyai', url:'/go.htm?url=https://toolifyai.cn/'
                    rss: 'https://toolifyai.cn/feed',  // 候选: https://toolifyai.cn/atom.xml, https://toolifyai.cn/rss.xml, https://toolifyai.cn/feed.xml 等}, {name:'2345ai', url:'/go.htm?url=https://www.2345ai.com/'
                    rss: 'https://www.2345ai.com/feed',  // 候选: https://www.2345ai.com/atom.xml, https://www.2345ai.com/rss.xml, https://www.2345ai.com/feed.xml 等}],
    '26': [{name:'AI收录网', url:'/go.htm?url=https://www.aislw.com/'
                    rss: 'https://www.aislw.com/feed',  // 候选: https://www.aislw.com/atom.xml, https://www.aislw.com/rss.xml, https://www.aislw.com/feed.xml 等}]
};

// ==================== 特色网址导航数据 ====================
const featuredNavData = {
    '06': [{name:'香港網IM123', url:'/go.htm?url=https://im123.com/'
                    rss: 'https://im123.com/feed',  // 候选: https://im123.com/atom.xml, https://im123.com/rss.xml, https://im123.com/feed.xml 等}, {name:'world68世界各国网址大全', url:'/go.htm?url=https://www.world68.com/'
                    rss: 'https://www.world68.com/feed',  // 候选: https://www.world68.com/atom.xml, https://www.world68.com/rss.xml, https://www.world68.com/feed.xml 等}],
    '08': [{name:'开源软件分类导航', url:'/go.htm?url=https://www.oschina.net/project/tags'
                    rss: 'https://www.oschina.net/feed',  // 候选: https://www.oschina.net/atom.xml, https://www.oschina.net/rss.xml, https://www.oschina.net/feed.xml 等}],
    '09': [{name:'海外导航', url:'/go.htm?url=https://www.hhlink.com/'
                    rss: 'https://www.hhlink.com/feed',  // 候选: https://www.hhlink.com/atom.xml, https://www.hhlink.com/rss.xml, https://www.hhlink.com/feed.xml 等}, {name:'有趣网址之家', url:'/go.htm?url=https://youquhome.com/'
                    rss: 'https://youquhome.com/feed',  // 候选: https://youquhome.com/atom.xml, https://youquhome.com/rss.xml, https://youquhome.com/feed.xml 等}, {name:'凤凰网财经导航', url:'/go.htm?url=https://finance.ifeng.com/partners.shtml'
                    rss: 'https://finance.ifeng.com/feed',  // 候选: https://finance.ifeng.com/atom.xml, https://finance.ifeng.com/rss.xml, https://finance.ifeng.com/feed.xml 等}],
    '10': [{name:'高考789网址导航', url:'/go.htm?url=http://www.gaokao789.com/'
                    rss: 'http://www.gaokao789.com/feed',  // 候选: http://www.gaokao789.com/atom.xml, http://www.gaokao789.com/rss.xml, http://www.gaokao789.com/feed.xml 等}, {name:'egouz国外网址大全', url:'/go.htm?url=https://www.egouz.com/'
                    rss: 'https://www.egouz.com/feed',  // 候选: https://www.egouz.com/atom.xml, https://www.egouz.com/rss.xml, https://www.egouz.com/feed.xml 等}],
    '11': [{name:'199it大数据导航', url:'/go.htm?url=https://hao.199it.com/'
                    rss: 'https://hao.199it.com/feed',  // 候选: https://hao.199it.com/atom.xml, https://hao.199it.com/rss.xml, https://hao.199it.com/feed.xml 等}, {name:'pm265产品经理导航', url:'/go.htm?url=https://www.pm265.com/'
                    rss: 'https://www.pm265.com/feed',  // 候选: https://www.pm265.com/atom.xml, https://www.pm265.com/rss.xml, https://www.pm265.com/feed.xml 等}],
    '12': [{name:'雪球财经网址导航', url:'/go.htm?url=https://xueqiu.com/dh'
                    rss: 'https://xueqiu.com/feed',  // 候选: https://xueqiu.com/atom.xml, https://xueqiu.com/rss.xml, https://xueqiu.com/feed.xml 等}, {name:'jyshare菜鸟开发设计工具大全', url:'/go.htm?url=https://www.jyshare.com/'
                    rss: 'https://www.jyshare.com/feed',  // 候选: https://www.jyshare.com/atom.xml, https://www.jyshare.com/rss.xml, https://www.jyshare.com/feed.xml 等}],
    '13': [{name:'优设导航', url:'/go.htm?url=https://hao.uisdc.com/'
                    rss: 'https://hao.uisdc.com/feed',  // 候选: https://hao.uisdc.com/atom.xml, https://hao.uisdc.com/rss.xml, https://hao.uisdc.com/feed.xml 等}, {name:'HUI前端网址导航', url:'/go.htm?url=http://www.h-ui.net/site.shtml'
                    rss: 'http://www.h-ui.net/feed',  // 候选: http://www.h-ui.net/atom.xml, http://www.h-ui.net/rss.xml, http://www.h-ui.net/feed.xml 等}, {name:'红歌会网址导航', url:'/go.htm?url=https://hao.szhgh.com/'
                    rss: 'https://hao.szhgh.com/feed',  // 候选: https://hao.szhgh.com/atom.xml, https://hao.szhgh.com/rss.xml, https://hao.szhgh.com/feed.xml 等}],
    '14': [{name:'1纳米学习导航', url:'/go.htm?url=http://1nami.com/'
                    rss: 'http://1nami.com/feed',  // 候选: http://1nami.com/atom.xml, http://1nami.com/rss.xml, http://1nami.com/feed.xml 等}, {name:'知筑导航', url:'/go.htm?url=http://www.archi123.com/#/archi'
                    rss: 'http://www.archi123.com/feed',  // 候选: http://www.archi123.com/atom.xml, http://www.archi123.com/rss.xml, http://www.archi123.com/feed.xml 等}],
    '15': [{name:'设计导航', url:'/go.htm?url=https://hao.shejidaren.com/'
                    rss: 'https://hao.shejidaren.com/feed',  // 候选: https://hao.shejidaren.com/atom.xml, https://hao.shejidaren.com/rss.xml, https://hao.shejidaren.com/feed.xml 等}, {name:'萌导航', url:'/go.htm?url=https://www.moe48.com/'
                    rss: 'https://www.moe48.com/feed',  // 候选: https://www.moe48.com/atom.xml, https://www.moe48.com/rss.xml, https://www.moe48.com/feed.xml 等}, {name:'料网外贸导航', url:'/go.htm?url=https://www.liaosam.com/go/'
                    rss: 'https://www.liaosam.com/feed',  // 候选: https://www.liaosam.com/atom.xml, https://www.liaosam.com/rss.xml, https://www.liaosam.com/feed.xml 等}],
    '16': [{name:'虫部落快搜', url:'/go.htm?url=https://search.chongbuluo.com/'
                    rss: 'https://search.chongbuluo.com/feed',  // 候选: https://search.chongbuluo.com/atom.xml, https://search.chongbuluo.com/rss.xml, https://search.chongbuluo.com/feed.xml 等}, {name:'虫部落学术搜索', url:'/go.htm?url=https://scholar.chongbuluo.com/'
                    rss: 'https://scholar.chongbuluo.com/feed',  // 候选: https://scholar.chongbuluo.com/atom.xml, https://scholar.chongbuluo.com/rss.xml, https://scholar.chongbuluo.com/feed.xml 等}, {name:'创造狮创意工作者导航', url:'/go.htm?url=https://chuangzaoshi.com/'
                    rss: 'https://chuangzaoshi.com/feed',  // 候选: https://chuangzaoshi.com/atom.xml, https://chuangzaoshi.com/rss.xml, https://chuangzaoshi.com/feed.xml 等}, {name:'AMZ123跨境导航', url:'/go.htm?url=https://www.amz123.com/'
                    rss: 'https://www.amz123.com/feed',  // 候选: https://www.amz123.com/atom.xml, https://www.amz123.com/rss.xml, https://www.amz123.com/feed.xml 等}],
    '17': [{name:'allsaas应用导航', url:'/go.htm?url=https://www.allsaas.cn/'
                    rss: 'https://www.allsaas.cn/feed',  // 候选: https://www.allsaas.cn/atom.xml, https://www.allsaas.cn/rss.xml, https://www.allsaas.cn/feed.xml 等}, {name:'creativemass创意导航', url:'/go.htm?url=https://creativemass.cn/'
                    rss: 'https://creativemass.cn/feed',  // 候选: https://creativemass.cn/atom.xml, https://creativemass.cn/rss.xml, https://creativemass.cn/feed.xml 等}, {name:'善其事运营导航', url:'/go.htm?url=https://www.shanqishi.com/'
                    rss: 'https://www.shanqishi.com/feed',  // 候选: https://www.shanqishi.com/atom.xml, https://www.shanqishi.com/rss.xml, https://www.shanqishi.com/feed.xml 等}, {name:'木虫学术导航', url:'/go.htm?url=https://hao.muchong.com/'
                    rss: 'https://hao.muchong.com/feed',  // 候选: https://hao.muchong.com/atom.xml, https://hao.muchong.com/rss.xml, https://hao.muchong.com/feed.xml 等}, {name:'北邮人导航', url:'/go.htm?url=https://byr-navi.com/'
                    rss: 'https://byr-navi.com/feed',  // 候选: https://byr-navi.com/atom.xml, https://byr-navi.com/rss.xml, https://byr-navi.com/feed.xml 等}, {name:'黑客之门', url:'/go.htm?url=https://www.hackerdoor.com/'
                    rss: 'https://www.hackerdoor.com/feed',  // 候选: https://www.hackerdoor.com/atom.xml, https://www.hackerdoor.com/rss.xml, https://www.hackerdoor.com/feed.xml 等}],
    '18': [{name:'三顿PPT导航', url:'/go.htm?url=https://www.sandunppt.com/'
                    rss: 'https://www.sandunppt.com/feed',  // 候选: https://www.sandunppt.com/atom.xml, https://www.sandunppt.com/rss.xml, https://www.sandunppt.com/feed.xml 等}],
    '19': [{name:'考拉新媒体导航', url:'/go.htm?url=https://www.kaolamedia.com/'
                    rss: 'https://www.kaolamedia.com/feed',  // 候选: https://www.kaolamedia.com/atom.xml, https://www.kaolamedia.com/rss.xml, https://www.kaolamedia.com/feed.xml 等}, {name:'91搜图导航', url:'/go.htm?url=https://www.91sotu.com/'
                    rss: 'https://www.91sotu.com/feed',  // 候选: https://www.91sotu.com/atom.xml, https://www.91sotu.com/rss.xml, https://www.91sotu.com/feed.xml 等}, {name:'addog广告人导航', url:'/go.htm?url=https://www.addog.vip/'
                    rss: 'https://www.addog.vip/feed',  // 候选: https://www.addog.vip/atom.xml, https://www.addog.vip/rss.xml, https://www.addog.vip/feed.xml 等}, {name:'媒帮派', url:'/go.htm?url=https://123.meibp.com/'
                    rss: 'https://123.meibp.com/feed',  // 候选: https://123.meibp.com/atom.xml, https://123.meibp.com/rss.xml, https://123.meibp.com/feed.xml 等}],
    '20': [{name:'资源帝电子书导航', url:'/go.htm?url=https://shu.ziyuandi.cn/'
                    rss: 'https://shu.ziyuandi.cn/feed',  // 候选: https://shu.ziyuandi.cn/atom.xml, https://shu.ziyuandi.cn/rss.xml, https://shu.ziyuandi.cn/feed.xml 等}, {name:'SciHub学术导航', url:'/go.htm?url=https://www.scihub.net.cn/'
                    rss: 'https://www.scihub.net.cn/feed',  // 候选: https://www.scihub.net.cn/atom.xml, https://www.scihub.net.cn/rss.xml, https://www.scihub.net.cn/feed.xml 等}, {name:'学吧导航', url:'/go.htm?url=https://www.xue8nav.com/'
                    rss: 'https://www.xue8nav.com/feed',  // 候选: https://www.xue8nav.com/atom.xml, https://www.xue8nav.com/rss.xml, https://www.xue8nav.com/feed.xml 等}, {name:'广告没门广告人导航', url:'/go.htm?url=https://adnodoor.com/nav/'
                    rss: 'https://adnodoor.com/feed',  // 候选: https://adnodoor.com/atom.xml, https://adnodoor.com/rss.xml, https://adnodoor.com/feed.xml 等}, {name:'pickfree', url:'/go.htm?url=https://www.pickfree.cn/'
                    rss: 'https://www.pickfree.cn/feed',  // 候选: https://www.pickfree.cn/atom.xml, https://www.pickfree.cn/rss.xml, https://www.pickfree.cn/feed.xml 等}],
    '21': [{name:'drugx药研导航', url:'/go.htm?url=https://drugx.cn/'
                    rss: 'https://drugx.cn/feed',  // 候选: https://drugx.cn/atom.xml, https://drugx.cn/rss.xml, https://drugx.cn/feed.xml 等}, {name:'cns学术导航', url:'/go.htm?url=https://cnspub.com/'
                    rss: 'https://cnspub.com/feed',  // 候选: https://cnspub.com/atom.xml, https://cnspub.com/rss.xml, https://cnspub.com/feed.xml 等}, {name:'CXY521程序员导航', url:'/go.htm?url=http://cxy521.com/'
                    rss: 'http://cxy521.com/feed',  // 候选: http://cxy521.com/atom.xml, http://cxy521.com/rss.xml, http://cxy521.com/feed.xml 等}, {name:'果壳任意门', url:'/go.htm?url=https://gate.guohere.com/'
                    rss: 'https://gate.guohere.com/feed',  // 候选: https://gate.guohere.com/atom.xml, https://gate.guohere.com/rss.xml, https://gate.guohere.com/feed.xml 等}, {name:'程序员盒子', url:'/go.htm?url=https://www.coderutil.com/'
                    rss: 'https://www.coderutil.com/feed',  // 候选: https://www.coderutil.com/atom.xml, https://www.coderutil.com/rss.xml, https://www.coderutil.com/feed.xml 等}, {name:'办公人导航', url:'/go.htm?url=https://www.bgrdh.com/'
                    rss: 'https://www.bgrdh.com/feed',  // 候选: https://www.bgrdh.com/atom.xml, https://www.bgrdh.com/rss.xml, https://www.bgrdh.com/feed.xml 等}, {name:'甲方叭叭设计导航', url:'/go.htm?url=https://jiafangbb.com/'
                    rss: 'https://jiafangbb.com/feed',  // 候选: https://jiafangbb.com/atom.xml, https://jiafangbb.com/rss.xml, https://jiafangbb.com/feed.xml 等}],
    '22': [{name:'法律时代·导航', url:'/go.htm?url=https://yesen.cn/'
                    rss: 'https://yesen.cn/feed',  // 候选: https://yesen.cn/atom.xml, https://yesen.cn/rss.xml, https://yesen.cn/feed.xml 等}],
    '23': [{name:'影视宝藏导航', url:'/go.htm?url=https://tv.baozangdh.com/'
                    rss: 'https://tv.baozangdh.com/feed',  // 候选: https://tv.baozangdh.com/atom.xml, https://tv.baozangdh.com/rss.xml, https://tv.baozangdh.com/feed.xml 等}, {name:'OSLAW', url:'/go.htm?url=https://www.oslaw.cn/site-nav'
                    rss: 'https://www.oslaw.cn/feed',  // 候选: https://www.oslaw.cn/atom.xml, https://www.oslaw.cn/rss.xml, https://www.oslaw.cn/feed.xml 等}],
    '24': [{name:'二次元宝藏导航', url:'/go.htm?url=https://acg.baozangdh.com/'
                    rss: 'https://acg.baozangdh.com/feed',  // 候选: https://acg.baozangdh.com/atom.xml, https://acg.baozangdh.com/rss.xml, https://acg.baozangdh.com/feed.xml 等}, {name:'资源帝VR导航', url:'/go.htm?url=https://vr.ziyuandi.cn/'
                    rss: 'https://vr.ziyuandi.cn/feed',  // 候选: https://vr.ziyuandi.cn/atom.xml, https://vr.ziyuandi.cn/rss.xml, https://vr.ziyuandi.cn/feed.xml 等}, {name:'mjj网址导航', url:'/go.htm?url=http://www.mjj.vip/'
                    rss: 'http://www.mjj.vip/feed',  // 候选: http://www.mjj.vip/atom.xml, http://www.mjj.vip/rss.xml, http://www.mjj.vip/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '25': [{name:'猫步求职导航', url:'/go.htm?url=https://nav.maobucv.com/'
                    rss: 'https://nav.maobucv.com/feed',  // 候选: https://nav.maobucv.com/atom.xml, https://nav.maobucv.com/rss.xml, https://nav.maobucv.com/feed.xml 等},  {name:'图标西西', url:'/go.htm?url=https://icon.cc/'
                    rss: 'https://icon.cc/feed',  // 候选: https://icon.cc/atom.xml, https://icon.cc/rss.xml, https://icon.cc/feed.xml 等}]
};

// ==================== 工具导航数据 ====================
const toolNavData = {
    '97': [{name:'archive网站历史', url:'/go.htm?url=https://archive.org/'
                    rss: 'https://archive.org/feed',  // 候选: https://archive.org/atom.xml, https://archive.org/rss.xml, https://archive.org/feed.xml 等}],
    '07': [{name:'蛙蛙工具', url:'/go.htm?url=https://www.iamwawa.cn/'
                    rss: 'https://www.iamwawa.cn/feed',  // 候选: https://www.iamwawa.cn/atom.xml, https://www.iamwawa.cn/rss.xml, https://www.iamwawa.cn/feed.xml 等}],
    '13': [{name:'trustasia证书在线工具集', url:'/go.htm?url=https://www.trustasia.com/tools'
                    rss: 'https://www.trustasia.com/feed',  // 候选: https://www.trustasia.com/atom.xml, https://www.trustasia.com/rss.xml, https://www.trustasia.com/feed.xml 等}],
    '14': [{name:'创可贴', url:'/go.htm?url=https://www.chuangkit.com/'
                    rss: 'https://www.chuangkit.com/feed',  // 候选: https://www.chuangkit.com/atom.xml, https://www.chuangkit.com/rss.xml, https://www.chuangkit.com/feed.xml 等}],
    '16': [{name:'万能计算器', url:'/go.htm?url=https://www.omnicalculator.com/'
                    rss: 'https://www.omnicalculator.com/feed',  // 候选: https://www.omnicalculator.com/atom.xml, https://www.omnicalculator.com/rss.xml, https://www.omnicalculator.com/feed.xml 等}],
    '17': [{name:'奶牛快传', url:'/go.htm?url=https://cowtransfer.com/'
                    rss: 'https://cowtransfer.com/feed',  // 候选: https://cowtransfer.com/atom.xml, https://cowtransfer.com/rss.xml, https://cowtransfer.com/feed.xml 等}, {name:'孟坤工具', url:'/go.htm?url=https://tool.mkblog.cn/'
                    rss: 'https://tool.mkblog.cn/feed',  // 候选: https://tool.mkblog.cn/atom.xml, https://tool.mkblog.cn/rss.xml, https://tool.mkblog.cn/feed.xml 等}],
    '18': [{name:'airportal空投快传', url:'/go.htm?url=https://www.airportal.cn/'
                    rss: 'https://www.airportal.cn/feed',  // 候选: https://www.airportal.cn/atom.xml, https://www.airportal.cn/rss.xml, https://www.airportal.cn/feed.xml 等}, {name:'remove抠图', url:'/go.htm?url=https://www.remove.bg/zh'
                    rss: 'https://www.remove.bg/feed',  // 候选: https://www.remove.bg/atom.xml, https://www.remove.bg/rss.xml, https://www.remove.bg/feed.xml 等}],
    '19': [{name:'docsmall', url:'/go.htm?url=https://docsmall.com/'
                    rss: 'https://docsmall.com/feed',  // 候选: https://docsmall.com/atom.xml, https://docsmall.com/rss.xml, https://docsmall.com/feed.xml 等}, {name:'效率工具', url:'/go.htm?url=https://blog.luckly-mjw.cn/tool-show/index.html'
                    rss: 'https://blog.luckly-mjw.cn/feed',  // 候选: https://blog.luckly-mjw.cn/atom.xml, https://blog.luckly-mjw.cn/rss.xml, https://blog.luckly-mjw.cn/feed.xml 等}, {name:'m3u8视频提取', url:'/go.htm?url=http://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html'
                    rss: 'http://blog.luckly-mjw.cn/feed',  // 候选: http://blog.luckly-mjw.cn/atom.xml, http://blog.luckly-mjw.cn/rss.xml, http://blog.luckly-mjw.cn/feed.xml 等}, {name:'橘子seo网站历史等', url:'/go.htm?url=https://seo.juziseo.com/'
                    rss: 'https://seo.juziseo.com/feed',  // 候选: https://seo.juziseo.com/atom.xml, https://seo.juziseo.com/rss.xml, https://seo.juziseo.com/feed.xml 等}],
    '20': [{name:'白描', url:'/go.htm?url=https://web.baimiaoapp.com/'
                    rss: 'https://web.baimiaoapp.com/feed',  // 候选: https://web.baimiaoapp.com/atom.xml, https://web.baimiaoapp.com/rss.xml, https://web.baimiaoapp.com/feed.xml 等}],
    '21': [{name:'美图秀秀在线版', url:'/go.htm?url=https://pc.meitu.com/toolbox'
                    rss: 'https://pc.meitu.com/feed',  // 候选: https://pc.meitu.com/atom.xml, https://pc.meitu.com/rss.xml, https://pc.meitu.com/feed.xml 等}],
    '22': [{name:'迅捷Markdown', url:'/go.htm?url=https://markdown.liuchengtu.com/'
                    rss: 'https://markdown.liuchengtu.com/feed',  // 候选: https://markdown.liuchengtu.com/atom.xml, https://markdown.liuchengtu.com/rss.xml, https://markdown.liuchengtu.com/feed.xml 等}, {name:'imathtool公式编辑器', url:'/go.htm?url=https://www.imathtool.com/'
                    rss: 'https://www.imathtool.com/feed',  // 候选: https://www.imathtool.com/atom.xml, https://www.imathtool.com/rss.xml, https://www.imathtool.com/feed.xml 等}, {name:'屏幕录制', url:'/go.htm?url=https://utils.fun/screen-record'
                    rss: 'https://utils.fun/feed',  // 候选: https://utils.fun/atom.xml, https://utils.fun/rss.xml, https://utils.fun/feed.xml 等}],
    '23': [{name:'okmiku', url:'/go.htm?url=https://okmiku.com/'
                    rss: 'https://okmiku.com/feed',  // 候选: https://okmiku.com/atom.xml, https://okmiku.com/rss.xml, https://okmiku.com/feed.xml 等}, {name:'TextIn Tools免费OCR工具', url:'/go.htm?url=https://tools.textin.com/'
                    rss: 'https://tools.textin.com/feed',  // 候选: https://tools.textin.com/atom.xml, https://tools.textin.com/rss.xml, https://tools.textin.com/feed.xml 等}, {name:'myfreemp3', url:'/go.htm?url=https://www.myfreemp3.com.cn/'
                    rss: 'https://www.myfreemp3.com.cn/feed',  // 候选: https://www.myfreemp3.com.cn/atom.xml, https://www.myfreemp3.com.cn/rss.xml, https://www.myfreemp3.com.cn/feed.xml 等}],
    '24': [{name:'iping', url:'/go.htm?url=https://www.iping.cc/'
                    rss: 'https://www.iping.cc/feed',  // 候选: https://www.iping.cc/atom.xml, https://www.iping.cc/rss.xml, https://www.iping.cc/feed.xml 等}],
    '25': [{name:'base64', url:'/go.htm?url=https://www.base64.sh/zh-Hans/'
                    rss: 'https://www.base64.sh/feed',  // 候选: https://www.base64.sh/atom.xml, https://www.base64.sh/rss.xml, https://www.base64.sh/feed.xml 等}, {name:'二𫈉转换', url:'/go.htm?url=https://ejz.is-an.org/'
                    rss: 'https://ejz.is-an.org/feed',  // 候选: https://ejz.is-an.org/atom.xml, https://ejz.is-an.org/rss.xml, https://ejz.is-an.org/feed.xml 等}, {name:'30万财务', url:'/go.htm?url=https://300000.cn/'
                    rss: 'https://300000.cn/feed',  // 候选: https://300000.cn/atom.xml, https://300000.cn/rss.xml, https://300000.cn/feed.xml 等}, {name:'apples ai工具推荐', url:'/go.htm?url=https://apples.cn/'
                    rss: 'https://apples.cn/feed',  // 候选: https://apples.cn/atom.xml, https://apples.cn/rss.xml, https://apples.cn/feed.xml 等}]
};

// ==================== 工具箱导航数据 ====================
const toolboxData = {
    '06': [{name:'chinaz站长工具', url:'/go.htm?url=https://tool.chinaz.com/'
                    rss: 'https://tool.chinaz.com/feed',  // 候选: https://tool.chinaz.com/atom.xml, https://tool.chinaz.com/rss.xml, https://tool.chinaz.com/feed.xml 等}],
    '07': [{name:'蛙蛙工具', url:'/go.htm?url=https://www.iamwawa.cn/'
                    rss: 'https://www.iamwawa.cn/feed',  // 候选: https://www.iamwawa.cn/atom.xml, https://www.iamwawa.cn/rss.xml, https://www.iamwawa.cn/feed.xml 等}, {name:'脚本之家在线工具', url:'/go.htm?url=https://tools.jb51.net/'
                    rss: 'https://tools.jb51.net/feed',  // 候选: https://tools.jb51.net/atom.xml, https://tools.jb51.net/rss.xml, https://tools.jb51.net/feed.xml 等}],
    '12': [{name:'tool lu在线工具', url:'/go.htm?url=https://tool.lu/'
                    rss: 'https://tool.lu/feed',  // 候选: https://tool.lu/atom.xml, https://tool.lu/rss.xml, https://tool.lu/feed.xml 等}],
    '13': [{name:'oschina工具', url:'/go.htm?url=https://tool.oschina.net/'
                    rss: 'https://tool.oschina.net/feed',  // 候选: https://tool.oschina.net/atom.xml, https://tool.oschina.net/rss.xml, https://tool.oschina.net/feed.xml 等}, {name:'trustasia证书在线工具集', url:'/go.htm?url=https://www.trustasia.com/tools'
                    rss: 'https://www.trustasia.com/feed',  // 候选: https://www.trustasia.com/atom.xml, https://www.trustasia.com/rss.xml, https://www.trustasia.com/feed.xml 等}],
    '15': [{name:'爱资料工具', url:'/go.htm?url=https://www.toolnb.com/'
                    rss: 'https://www.toolnb.com/feed',  // 候选: https://www.toolnb.com/atom.xml, https://www.toolnb.com/rss.xml, https://www.toolnb.com/feed.xml 等}],
    '19': [{name:'docsmall', url:'/go.htm?url=https://docsmall.com/'
                    rss: 'https://docsmall.com/feed',  // 候选: https://docsmall.com/atom.xml, https://docsmall.com/rss.xml, https://docsmall.com/feed.xml 等}],
    '20': [{name:'uu在线工具', url:'/go.htm?url=https://uutool.cn/'
                    rss: 'https://uutool.cn/feed',  // 候选: https://uutool.cn/atom.xml, https://uutool.cn/rss.xml, https://uutool.cn/feed.xml 等}],
    '22': [{name:'工具哇', url:'/go.htm?url=https://toolwa.com/'
                    rss: 'https://toolwa.com/feed',  // 候选: https://toolwa.com/atom.xml, https://toolwa.com/rss.xml, https://toolwa.com/feed.xml 等}, {name:'p2hp程序员工具', url:'/go.htm?url=https://tool.p2hp.com/'
                    rss: 'https://tool.p2hp.com/feed',  // 候选: https://tool.p2hp.com/atom.xml, https://tool.p2hp.com/rss.xml, https://tool.p2hp.com/feed.xml 等}],
    '23': [{name:'精准云工具', url:'/go.htm?url=https://tool.caoniang.com/'
                    rss: 'https://tool.caoniang.com/feed',  // 候选: https://tool.caoniang.com/atom.xml, https://tool.caoniang.com/rss.xml, https://tool.caoniang.com/feed.xml 等}, {name:'千图工具', url:'/go.htm?url=https://1000tool.com/'
                    rss: 'https://1000tool.com/feed',  // 候选: https://1000tool.com/atom.xml, https://1000tool.com/rss.xml, https://1000tool.com/feed.xml 等}, {name:'okmiku', url:'/go.htm?url=https://okmiku.com/'
                    rss: 'https://okmiku.com/feed',  // 候选: https://okmiku.com/atom.xml, https://okmiku.com/rss.xml, https://okmiku.com/feed.xml 等}],
    '24': [{name:'46啦工具', url:'/go.htm?url=https://www.46.la/'
                    rss: 'https://www.46.la/feed',  // 候选: https://www.46.la/atom.xml, https://www.46.la/rss.xml, https://www.46.la/feed.xml 等}, {name:'V3在线工具', url:'/go.htm?url=http://www.v3ol.com/'
                    rss: 'http://www.v3ol.com/feed',  // 候选: http://www.v3ol.com/atom.xml, http://www.v3ol.com/rss.xml, http://www.v3ol.com/feed.xml 等}, {name:'AI图片变清晰等处理', url:'/go.htm?url=https://imgupscaler.ai/zh/photo-enhancer/'
                    rss: 'https://imgupscaler.ai/feed',  // 候选: https://imgupscaler.ai/atom.xml, https://imgupscaler.ai/rss.xml, https://imgupscaler.ai/feed.xml 等},{name:'', url:'/go.htm?url= '},{name:'', url:'/go.htm?url='},{name:'', url:'/go.htm?url= '}],
    '25': [{name:'魔方工具', url:'/go.htm?url=https://www.mofangtool.com/'
                    rss: 'https://www.mofangtool.com/feed',  // 候选: https://www.mofangtool.com/atom.xml, https://www.mofangtool.com/rss.xml, https://www.mofangtool.com/feed.xml 等}, {name:'tcp-mk工具箱', url:'/go.htm?url=https://tcp.mk/'
                    rss: 'https://tcp.mk/feed',  // 候选: https://tcp.mk/atom.xml, https://tcp.mk/rss.xml, https://tcp.mk/feed.xml 等}]
};

// ==================== whois导航数据 ====================
const whoisData = {
    '23': [{name:'who.cx', url:'/go.htm?url=https://who.cx/'
                    rss: 'https://who.cx/feed',  // 候选: https://who.cx/atom.xml, https://who.cx/rss.xml, https://who.cx/feed.xml 等}],
    '25': [{name:'w.is whois', url:'/go.htm?url=https://w.is/'
                    rss: 'https://w.is/feed',  // 候选: https://w.is/atom.xml, https://w.is/rss.xml, https://w.is/feed.xml 等}],
    '26': [{name:'hu.is', url:'/go.htm?url=https://hu.is/'
                    rss: 'https://hu.is/feed',  // 候选: https://hu.is/atom.xml, https://hu.is/rss.xml, https://hu.is/feed.xml 等}]
};

// ==================== 邮箱导航数据 ====================
const emailData = {
    '97': [{name:'163邮箱', url:'/go.htm?url=https://mail.163.com/'
                    rss: 'https://mail.163.com/feed',  // 候选: https://mail.163.com/atom.xml, https://mail.163.com/rss.xml, https://mail.163.com/feed.xml 等}],
    '02': [{name:'qq邮箱', url:'/go.htm?url=https://mail.qq.com/'
                    rss: 'https://mail.qq.com/feed',  // 候选: https://mail.qq.com/atom.xml, https://mail.qq.com/rss.xml, https://mail.qq.com/feed.xml 等}],
    '03': [{name:'126邮箱', url:'/go.htm?url=https://mail.126.com/'
                    rss: 'https://mail.126.com/feed',  // 候选: https://mail.126.com/atom.xml, https://mail.126.com/rss.xml, https://mail.126.com/feed.xml 等}],
    '04': [{name:'gmail', url:'/go.htm?url=http://gmail.com/'
                    rss: 'http://gmail.com/feed',  // 候选: http://gmail.com/atom.xml, http://gmail.com/rss.xml, http://gmail.com/feed.xml 等}],
    '07': [{name:'yeah邮箱', url:'/go.htm?url=https://mail.yeah.net/'
                    rss: 'https://mail.yeah.net/feed',  // 候选: https://mail.yeah.net/atom.xml, https://mail.yeah.net/rss.xml, https://mail.yeah.net/feed.xml 等}],
    '10': [{name:'腾讯企业邮', url:'/go.htm?url=https://exmail.qq.com/login'
                    rss: 'https://exmail.qq.com/feed',  // 候选: https://exmail.qq.com/atom.xml, https://exmail.qq.com/rss.xml, https://exmail.qq.com/feed.xml 等}]
};

// ==================== 官方博客导航 ====================
const officialblogdata = {
    '22': [{name:'kaqi', url:'/go.htm?url=https://blog.kagi.com/'
                    rss: 'https://blog.kagi.com/feed',  // 候选: https://blog.kagi.com/atom.xml, https://blog.kagi.com/rss.xml, https://blog.kagi.com/feed.xml 等}]
};

// ==================== 付费博客导航 ====================
const paidBlogData = {
    '20': [{name:'happyxiao', url:'/go.htm?url=https://happyxiao.com/'
                    rss: 'https://happyxiao.com/feed',  // 候选: https://happyxiao.com/atom.xml, https://happyxiao.com/rss.xml, https://happyxiao.com/feed.xml 等}]
};

// ==================== 百科大全导航 ====================
const pediadata = {
    '10': [{name:'发音字典', url:'/go.htm?url=https://www.voicedic.com/'
                    rss: 'https://www.voicedic.com/feed',  // 候选: https://www.voicedic.com/atom.xml, https://www.voicedic.com/rss.xml, https://www.voicedic.com/feed.xml 等}],
    '13': [{name:'wikihow', url:'/go.htm?url=https://zh.wikihow.com/'
                    rss: 'https://zh.wikihow.com/feed',  // 候选: https://zh.wikihow.com/atom.xml, https://zh.wikihow.com/rss.xml, https://zh.wikihow.com/feed.xml 等}],
    '15': [{name:'观沧海', url:'/go.htm?url=https://www.ageeye.cn/'
                    rss: 'https://www.ageeye.cn/feed',  // 候选: https://www.ageeye.cn/atom.xml, https://www.ageeye.cn/rss.xml, https://www.ageeye.cn/feed.xml 等}],
    '16': [{name:'纪妖', url:'/go.htm?url=https://www.cbaigui.com/'
                    rss: 'https://www.cbaigui.com/feed',  // 候选: https://www.cbaigui.com/atom.xml, https://www.cbaigui.com/rss.xml, https://www.cbaigui.com/feed.xml 等}],
    '18': [{name:'全历史', url:'/go.htm?url=https://www.allhistory.com/'
                    rss: 'https://www.allhistory.com/feed',  // 候选: https://www.allhistory.com/atom.xml, https://www.allhistory.com/rss.xml, https://www.allhistory.com/feed.xml 等}]
};

// ==================== 搜索引擎大全导航 ====================
const SearchEngineData = {
    '00': [{name:'百度', url:'/go.htm?url=https://www.baidu.com/'
                    rss: 'https://www.baidu.com/feed',  // 候选: https://www.baidu.com/atom.xml, https://www.baidu.com/rss.xml, https://www.baidu.com/feed.xml 等}],
    '09': [{name:'bing', url:'/go.htm?url=https://www.bing.com/'
                    rss: 'https://www.bing.com/feed',  // 候选: https://www.bing.com/atom.xml, https://www.bing.com/rss.xml, https://www.bing.com/feed.xml 等}],
    '18': [{name:'kaqi', url:'/go.htm?url=https://kagi.com/'
                    rss: 'https://kagi.com/feed',  // 候选: https://kagi.com/atom.xml, https://kagi.com/rss.xml, https://kagi.com/feed.xml 等}]
};

// ==================== RSS工具数据 ====================
const rssData = {
    '19': [{name:'Feedval', url:'/go.htm?url=http://cn.eonval.com/'
                    rss: 'http://cn.eonval.com/feed',  // 候选: http://cn.eonval.com/atom.xml, http://cn.eonval.com/rss.xml, http://cn.eonval.com/feed.xml 等}]
};

// ==================== 学习导航数据 ====================
const studyNavData = {
    '06': [{name:'X', url:'/go.htm?url=https://www.X.COM/'
                    rss: 'https://www.x.com/feed',  // 候选: https://www.x.com/atom.xml, https://www.x.com/rss.xml, https://www.x.com/feed.xml 等}],
    '09': [{name:'微博', url:'/go.htm?url=https://www.WEIBO.COM'
                    rss: 'https://www.weibo.com/feed',  // 候选: https://www.weibo.com/atom.xml, https://www.weibo.com/rss.xml, https://www.weibo.com/feed.xml 等}],
    '11': [{name:'知乎', url:'/go.htm?url=https://www.zhihu.com/'
                    rss: 'https://www.zhihu.com/feed',  // 候选: https://www.zhihu.com/atom.xml, https://www.zhihu.com/rss.xml, https://www.zhihu.com/feed.xml 等}],
    '15': [{name:'微信读书', url:'/go.htm?url=https://weread.qq.com/'
                    rss: 'https://weread.qq.com/feed',  // 候选: https://weread.qq.com/atom.xml, https://weread.qq.com/rss.xml, https://weread.qq.com/feed.xml 等}],
    '25': [{name:'赤子社', url:'/go.htm?url=http://www.chizishe.cn'
                    rss: 'http://www.chizishe.cn/feed',  // 候选: http://www.chizishe.cn/atom.xml, http://www.chizishe.cn/rss.xml, http://www.chizishe.cn/feed.xml 等}]
};

// ==================== 域名注册网站数据 ====================
const domainRegData = {
    '99': [{name:'阿里云万网', url:'/go.htm?url=https://www.net.cn/'
                    rss: 'https://www.net.cn/feed',  // 候选: https://www.net.cn/atom.xml, https://www.net.cn/rss.xml, https://www.net.cn/feed.xml 等}, {name:'中资源', url:'/go.htm?url=https://www.zzy.com/'
                    rss: 'https://www.zzy.com/feed',  // 候选: https://www.zzy.com/atom.xml, https://www.zzy.com/rss.xml, https://www.zzy.com/feed.xml 等}, {name:'新网', url:'/go.htm?url=https://www.xinnet.com/'
                    rss: 'https://www.xinnet.com/feed',  // 候选: https://www.xinnet.com/atom.xml, https://www.xinnet.com/rss.xml, https://www.xinnet.com/feed.xml 等}, {name:'godaddy', url:'/go.htm?url=http://www.godaddy.com/'
                    rss: 'http://www.godaddy.com/feed',  // 候选: http://www.godaddy.com/atom.xml, http://www.godaddy.com/rss.xml, http://www.godaddy.com/feed.xml 等}],
    '00': [{name:'namecheap', url:'/go.htm?url=https://www.namecheap.com/'
                    rss: 'https://www.namecheap.com/feed',  // 候选: https://www.namecheap.com/atom.xml, https://www.namecheap.com/rss.xml, https://www.namecheap.com/feed.xml 等}],
    '02': [{name:'西部数码', url:'/go.htm?url=https://www.west.cn/'
                    rss: 'https://www.west.cn/feed',  // 候选: https://www.west.cn/atom.xml, https://www.west.cn/rss.xml, https://www.west.cn/feed.xml 等}, {name:'dynadot', url:'/go.htm?url=https://www.dynadot.com/zh/'
                    rss: 'https://www.dynadot.com/feed',  // 候选: https://www.dynadot.com/atom.xml, https://www.dynadot.com/rss.xml, https://www.dynadot.com/feed.xml 等}],
    '04': [{name:'三五互联', url:'/go.htm?url=https://www.35.com/'
                    rss: 'https://www.35.com/feed',  // 候选: https://www.35.com/atom.xml, https://www.35.com/rss.xml, https://www.35.com/feed.xml 等}],
    '05': [{name:'易名', url:'/go.htm?url=https://www.ename.com/'
                    rss: 'https://www.ename.com/feed',  // 候选: https://www.ename.com/atom.xml, https://www.ename.com/rss.xml, https://www.ename.com/feed.xml 等}],
    '09': [{name:'爱名网', url:'/go.htm?url=https://www.22.cn/'
                    rss: 'https://www.22.cn/feed',  // 候选: https://www.22.cn/atom.xml, https://www.22.cn/rss.xml, https://www.22.cn/feed.xml 等}, {name:'cloudflare', url:'/go.htm?url=https://www.cloudflare.com'
                    rss: 'https://www.cloudflare.com/feed',  // 候选: https://www.cloudflare.com/atom.xml, https://www.cloudflare.com/rss.xml, https://www.cloudflare.com/feed.xml 等}],
    '12': [{name:'西部数码英文站', url:'/go.htm?url=https://www.west.xyz/'
                    rss: 'https://www.west.xyz/feed',  // 候选: https://www.west.xyz/atom.xml, https://www.west.xyz/rss.xml, https://www.west.xyz/feed.xml 等}, {name:'聚名网', url:'/go.htm?url=https://www.juming.com/'
                    rss: 'https://www.juming.com/feed',  // 候选: https://www.juming.com/atom.xml, https://www.juming.com/rss.xml, https://www.juming.com/feed.xml 等}],
    '13': [{name:'趣域网', url:'/go.htm?url=https://www.quyu.net/'
                    rss: 'https://www.quyu.net/feed',  // 候选: https://www.quyu.net/atom.xml, https://www.quyu.net/rss.xml, https://www.quyu.net/feed.xml 等}],
    '14': [{name:'porkbun', url:'/go.htm?url=https://porkbun.com/'
                    rss: 'https://porkbun.com/feed',  // 候选: https://porkbun.com/atom.xml, https://porkbun.com/rss.xml, https://porkbun.com/feed.xml 等}, {name:'wordpress', url:'/go.htm?url=https://wordpress.com/zh-cn/domains/'
                    rss: 'https://wordpress.com/feed',  // 候选: https://wordpress.com/atom.xml, https://wordpress.com/rss.xml, https://wordpress.com/feed.xml 等}],
    '16': [{name:'百度智能云', url:'/go.htm?url=https://cloud.baidu.com/product/bcd.html'
                    rss: 'https://cloud.baidu.com/feed',  // 候选: https://cloud.baidu.com/atom.xml, https://cloud.baidu.com/rss.xml, https://cloud.baidu.com/feed.xml 等}],
    '18': [{name:'腾讯云', url:'/go.htm?url=https://cloud.tencent.com/product/domain'
                    rss: 'https://cloud.tencent.com/feed',  // 候选: https://cloud.tencent.com/atom.xml, https://cloud.tencent.com/rss.xml, https://cloud.tencent.com/feed.xml 等}],
    '19': [{name:'阿里云国际站', url:'/go.htm?url=https://www.alibabacloud.com/'
                    rss: 'https://www.alibabacloud.com/feed',  // 候选: https://www.alibabacloud.com/atom.xml, https://www.alibabacloud.com/rss.xml, https://www.alibabacloud.com/feed.xml 等}, {name:'spaceship', url:'/go.htm?url=https://www.spaceship.com/zh/'
                    rss: 'https://www.spaceship.com/feed',  // 候选: https://www.spaceship.com/atom.xml, https://www.spaceship.com/rss.xml, https://www.spaceship.com/feed.xml 等}],
    '20': [{name:'西部数码国际版', url:'/go.htm?url=https://www.365.hk/'
                    rss: 'https://www.365.hk/feed',  // 候选: https://www.365.hk/atom.xml, https://www.365.hk/rss.xml, https://www.365.hk/feed.xml 等}],
    '21': [{name:'gname', url:'/go.htm?url=https://www.gname.com/zhcn/'
                    rss: 'https://www.gname.com/feed',  // 候选: https://www.gname.com/atom.xml, https://www.gname.com/rss.xml, https://www.gname.com/feed.xml 等}],
    '22': [{name:'火山引擎', url:'/go.htm?url=https://www.volcengine.com/product/domain-service'
                    rss: 'https://www.volcengine.com/feed',  // 候选: https://www.volcengine.com/atom.xml, https://www.volcengine.com/rss.xml, https://www.volcengine.com/feed.xml 等}],
    '25': [{name:'宝塔', url:'/go.htm?url=https://www.bt.cn/new/domain-register.html'
                    rss: 'https://www.bt.cn/feed',  // 候选: https://www.bt.cn/atom.xml, https://www.bt.cn/rss.xml, https://www.bt.cn/feed.xml 等}]
};

// ==================== 域名工具导航数据 ====================
const domainToolData = {
    '15': [{name:'tld-list域名比价', url:'/go.htm?url=https://zh-hans.tld-list.com/'
                    rss: 'https://zh-hans.tld-list.com/feed',  // 候选: https://zh-hans.tld-list.com/atom.xml, https://zh-hans.tld-list.com/rss.xml, https://zh-hans.tld-list.com/feed.xml 等}],
    '17': [{name:'玩米历史米价查询', url:'/go.htm?url=http://www.wanmi.cc/'
                    rss: 'http://www.wanmi.cc/feed',  // 候选: http://www.wanmi.cc/atom.xml, http://www.wanmi.cc/rss.xml, http://www.wanmi.cc/feed.xml 等}],
    '20': [{name:'哪煮米', url:'/go.htm?url=https://www.nazhumi.com/'
                    rss: 'https://www.nazhumi.com/feed',  // 候选: https://www.nazhumi.com/atom.xml, https://www.nazhumi.com/rss.xml, https://www.nazhumi.com/feed.xml 等}],
    '21': [{name:'可备域名后缀查询', url:'/go.htm?url=https://domain.miit.gov.cn/chinayu.jsp'
                    rss: 'https://domain.miit.gov.cn/feed',  // 候选: https://domain.miit.gov.cn/atom.xml, https://domain.miit.gov.cn/rss.xml, https://domain.miit.gov.cn/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '23': [{name:'who.cx', url:'/go.htm?url=https://who.cx/'
                    rss: 'https://who.cx/feed',  // 候选: https://who.cx/atom.xml, https://who.cx/rss.xml, https://who.cx/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}],
    '25': [{name:'w.is whois', url:'/go.htm?url=https://w.is/'
                    rss: 'https://w.is/feed',  // 候选: https://w.is/atom.xml, https://w.is/rss.xml, https://w.is/feed.xml 等}],
    '26': [{name:'hu.is', url:'/go.htm?url=https://hu.is/'
                    rss: 'https://hu.is/feed',  // 候选: https://hu.is/atom.xml, https://hu.is/rss.xml, https://hu.is/feed.xml 等},{name:'sanpin域管家', url:'/go.htm?url=https://sanpin.ltd'
                    rss: 'https://sanpin.ltd/feed',  // 候选: https://sanpin.ltd/atom.xml, https://sanpin.ltd/rss.xml, https://sanpin.ltd/feed.xml 等}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}, {name:' ', url:''}]
};

// ==================== 随机访问网站数据 ====================
const randomSiteData = {
    '25': [{name:'有趣网址之家-随机趣站', url:'/go.htm?url=https://youquhome.com/random/'
                    rss: 'https://youquhome.com/feed',  // 候选: https://youquhome.com/atom.xml, https://youquhome.com/rss.xml, https://youquhome.com/feed.xml 等}]
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
    '📡 RSS文案合集': rssFlatList,    // ← 现在 rssFlatList 已经定义好了
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
    '🤖 AI导航大全': aiNavData,
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