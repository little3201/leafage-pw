<p align="center">
  <a href="https://www.leafage.top" title="logo" target="_blank">
    <img alt="Leafage Logo" width="200" src="static/logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://github.com/little3201/leafage-pw/blob/master/LICENSE" title="github license">
    <img src="https://img.shields.io/github/license/little3201/leafage-pw.svg" alt="License">
  </a>
  <img src="https://sonarcloud.io/api/project_badges/measure?project=little3201_leafage-pw&metric=alert_status" alt="Quality Gate Status">
</p>

## 项目介绍

leafage-pw，一个使用 Nuxt.js、 Tailwindcss 的博客网站，项目创建之初是为了做一个个人博客，因为看过 wordpress，gihub pages 等一些开源的博客网站的创建很不好用，而且不灵活，大家都是一套模版走天下。

项目中的接口可以直接替换为自己的服务接口，后端服务[leafage-basic](https://github.com/little3201/leafage-basic) ，希望大家使用本项目的同时也能一起学习，分享。


**访问地址：**<a href="https://www.leafage.top">博客站点</a>&nbsp;&nbsp;<a href="https://console.leafage.top">后台管理系统</a>

项目创建与 2019-05-23 历经好几次改版（查看[关于](https://www.leafage.top/about)了解更多），虽然过程很折腾，但是也明白和体会了很多，对于一些技术点理接更深了，近期更新请查看[更新日志](CHANGELOG.md) 。

### 功能依赖

- [x] @nuxt/sitemap —— 自生成sitemap
- [x] @nuxt/image —— 图片加载优化
- [x] @tailwindcss/typography —— 排版优化
- [x] @tailwindcss/aspect-ratio —— 图片排版优化
- [x] markdown-it/hightlight.js —— markdown解析，代码高亮


如果你遇到了 [FAQ文档](FAQ.md) 中没有出现的问题，并且已经解决了，欢迎联系我进行修改。

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

<a href="LICENSE" title="license">
  <h2>MIT</h2>
</a>
