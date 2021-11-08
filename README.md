<p align="center">
  <a href="https://www.leafage.top" title="logo" target="_blank">
    <img alt="Leafage Logo" width="200" src="public/logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://github.com/little3201/leafage-pw/blob/master/LICENSE" title="github license">
    <img src="https://img.shields.io/github/license/little3201/leafage-pw.svg" alt="License">
  </a>
  <img src="https://sonarcloud.io/api/project_badges/measure?project=little3201_leafage-pw&metric=alert_status" alt="Quality Gate Status">
</p>

## 项目介绍

leafage-pw，一个使用 Nuxt.js、 Tailwindcss 的博客网站，不太喜欢 wordpress，gihub pages 等一些开源工具，所以自己动手做一个博客。

项目中的接口可以直接替换为自己的服务接口，后端服务[leafage-basic](https://github.com/little3201/leafage-basic) ，希望大家使用本项目的同时也能一起学习，分享。

项目开发秉持整洁、高质量、规范的代码，尽可能的减少代码来实现功能；


**访问地址：**<a href="https://www.leafage.top">博客站点</a>&nbsp;&nbsp;<a href="https://console.leafage.top">后台管理系统</a>

项目创建与 2019-05-23 历经好几次改版（查看[关于](https://www.leafage.top/about)了解更多），虽然过程很折腾，但是也明白和体会了很多，对于一些技术点理接更深了，近期更新请查看[更新日志](CHANGELOG.md) 。

### 工具、依赖：

- [x] nuxt —— 开发框架；
- [x] axios —— 接口数据请求；
- [x] tailwindcss —— 页面样式；
- [x] @tailwindcss/typography —— 排版优化；
- [x] @tailwindcss/aspect-ratio —— 图片比例；
- [x] markdown-it —— markdown解析；
- [x] hightlight.js —— 代码高亮，使用 ir-black；


# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).