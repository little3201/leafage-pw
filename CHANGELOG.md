<p align="center">
  <a href="https://www.leafage.top" title="logo" target="_blank">
    <img alt="Leafage Logo" width="200" src="static/logo.svg">
  </a>
</p>

## 更新记录

2021-12-06:
  1. 代码重构，移除 ts 代码（之前写的 ts 并不规范，且 nuxt.js 2.x 支持不好），改为 js 编写；
  2. 精简依赖，删除几乎不会用到的 dependencies；

2021-11-10:
  1. 精简组件，删除冗余的部分代码，优化组件复用；
  2. 更新整体布局，添加黑色模式；

2021-09-18:
  1. resource 样式问题修改；
  2. 列表添加评论图标即评论数的显示；
  3. 详情添加 tags 的展示；

2021-09-11:
  1. 更新 mobile-menu 为抽屉；

2021-09-07:
  1. sitemap 生成配置优化；

2021-08-21:
  1. 添加 @tailwindcss/aspect-ratio 插件；
  2. 页面样式优化，更好适配大小屏页面布局；

2021-08-19:
  1. 更新依赖；
  2. 使用 @nuxt/image 优化图片加载；

2021-07-20:
  1. 配置 resource 页；
  2. 移除详情页的 recentDatas 组件；
  3. 子组件 emit 问题修改；

2021-07-18:
  1. 添加骨架屏；
  2. 移除 recommend 组件；
  3. 移除 contact 页面，添加 resource 页面，提供资料；

2021-06-27:
  1. posts.vue 分类样式匹配问题修复；
  2. 重写about;

2021-06-24: 
  1. SideBar、RecentPosts、Recommond 改为 Lazy loading；
  2. Sonar 检测的 bug 修改；
  3. 替换本地图片地址，使用cdn加速；

2021-06-23: 
  1. 替换到 @vue/composition-api，使用 @nuxt/composition-api以准备更新到 nuxt3；
  2. 移除 store 的自定义配置，使用 useMeta() 更好的提供动态的详情页的 ssr meta;
  3. 更新所有依赖到最新版版；

2021-06-17: 
  1. 代码块高亮样式修改，使用ir-black；

2021-06-06: 
  1. 修改 posts 路由的参数获取问题，无参数也可正常访问；
  2. 统计总记录数的问题修改，分页更新；

2021-06-02: 
  1. 瀑布流改为横向布局；

2021-05-25: 
  1. 升级依赖；
  2. 百度统计配置修改；
  3. 完善 sidebar 样式；

2021-04-29: 
  1. 添加 tags 属性，作为 head 的 keyword；
  2. 首页 recommend 的图片溢出问题解决；
  3. 完善 about 和 contact 样式；

2021-04-19: 
  1. 去掉除_slug.vue 其他页面的like操作；
  2. 详情页日期，浏览量字体改为 sm ，图标大小调整；
  3. 完善 posts 和 resource 页的分类查询问题；

2021-04-12: 
  1. 解决详情页刷新，内容出现重复的问题，以及Failed to execute 'appendChild' on 'Node': This node type does not support this method...的错误：
  2. 修改了 robots.txt 错写为 robot.txt 的问题；
  3. 更新 highlight.js 高亮语言 sql 为 sql_more；

2021-04-10: 
  1. 高亮样式替换为ir-black；
  2. 帖子页面排版修改为使用 tailwindcss/typography, 移除 github-markdown-css;
  3. 删除 @nuxt/markdown-it 以及插件，自定义 markdown-it 和 highlight.js 进行代码高亮；

2021-04-06: 
- 优化: 
  1. 小屏下 hero.vue 组件 title 显示位置；
  2. 小屏下边距不统一的问题；

2021-04-02: 
- 优化: 
  1. meta 修改，去掉 og:xx 和 twitter:xx 的信息，补充详情页的 keywords；
  2. 优化详情页下 topThree 图片质量低的问题；

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
