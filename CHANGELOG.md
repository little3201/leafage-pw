<p align="center">
  <a href="https://www.leafage.top" target="_blank">
    <img alt="Leafage Logo" width="200" src="static/logo.svg">
  </a>
</p>

## 更新记录

2021-04-10: 
  1. 高亮样式替换为ir-black；
  2. typography修改为使用tailwindcss/typography, 移除github-markdown-css;
  3. 删除@nuxt/markdown-it以及插件，自定义markdown-it和highlight.js进行代码高亮；

2021-04-06: 
- 优化: 
  1. 小屏下hero.vue组件title显示位置；
  2. 小屏下边距不统一的问题；

2021-04-02: 
- 优化: 
  1. meta修改，去掉og:xx 和 twitter:xx的信息，补充详情页的keywords；
  2. 优化详情页下topThree图片质量低的问题；

2021-03-29: 
- 优化: 
  1. 小屏样式优化，主要优化首页图片大小问题；
  2. 根据 lighthouse、google speed test 结果，进行部分页面的优化；
- upgrade:
  1. 更新 tailwindcss 到 2.x 版本；

2021-03-28: 
- bugfix: 
  1. 类目点击后不匹配样式的问题；
  2. 分类查询接口请求结果问题；
- 优化:
  1. search输入框位置，背景透明度优化； 
