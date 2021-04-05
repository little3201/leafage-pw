## FAQ文档

### 问题描述:

1. nuxt-content 只能使用$content.fetch()来获取/content目录下的指定类型文件，读取之后加载显示，无法通过远程接口获取信息加载的问题。

**解决方案：**

使用 [nuxt-markdown](https://github.com/nuxt/markdown) (目前还没有release，具体示例还没有，做尝试但是在typescript下没有支持) 或者 [nuxt-markdownit](https://github.com/nuxt-community/markdownit-module) 来替换 (可参考本项目使用，具体在/pages/posts/_slug.vue中使用，以及nuxt.config.js配置)

2. 请求远程数据，组件(components/目录下)和页面(pages/目录下)如何实现？

**解决方案：**

components目录下，可以使用fetch()方法，pages目录下使用asyncData()方法，具体使用及方法参照帖子： [Leafage 诞生记（二）](https://www.leafage.top/posts/detail/213489UI)

