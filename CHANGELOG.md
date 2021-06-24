<p align="center">
  <a href="https://www.leafage.top" title="logo" target="_blank">
    <img alt="Leafage Logo" width="200" src="static/logo.svg">
  </a>
</p>

## 更新记录
2021-06-23: 
  1. SideBar、RecentPosts、Recommond 改为Lazy loading；

2021-06-23: 
  1. 替换到@vue/composition-api，使用@nuxt/composition-api以准备更新到nuxt3；
  2. 移除store的自定义配置，使用useMeta()更好的提供动态的详情页的ssr meta;
  3. 更新所有依赖到最新版版；

2021-06-17: 
  1. 代码块高亮样式修改，使用ir-black；

2021-06-06: 
  1. 修改posts路由的参数获取问题，无参数也可正常访问；
  2. 统计总记录数的问题修改，分页更新；

2021-06-02: 
  1. 瀑布流改为横向布局；

2021-05-25: 
  1. 升级依赖；
  2. 百度统计配置修改；
  3. 完善sidebar样式；

2021-04-29: 
  1. 添加tags属性，作为head的keyword；
  2. 首页recommend的图片溢出问题解决；
  3. 完善about和contact样式；

2021-04-19: 
  1. 去掉除_slug.vue其他页面的like操作；
  2. 详情页日期，浏览量字体改为sm，图标大小调整；
  3. 完善posts和portfolio页的分类查询问题；

2021-04-12: 
  1. 结局了详情页刷新，内容出现重复的问题，以及Failed to execute 'appendChild' on 'Node': This node type does not support this method...的错误：
  2. 修改了robots.txt错写为robot.txt的问题；
  3. 更新highlight.js高亮语言sql为sql_more；

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
