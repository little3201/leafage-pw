/**
 * 百度统计插件
 */
 export default ({ app: { router }, store }) => {
    if (
      process.client &&
      process.env.NODE_ENV === 'production'
    ) {
      window._hmt = window._hmt || []
      const hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?afb964e86bcad4267c09806a48c3ccbd'
      hm.async = true
      const s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
      // 防止第一次进入页面时统计，与router.afterEach重叠
      window._hmt.push(['_setAutoPageview', false])
    }
    /*
     ** 每次路由变更时进行pv统计
     */
    router.afterEach((to, from) => {
      /*
       ** 告诉 _hmt 增加一个 PV
       */
      if (undefined !== window._hmt)
        window._hmt.push(['_trackPageview', to.fullPath])
    })
  }