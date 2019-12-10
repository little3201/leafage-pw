<template>
  <div>
    <v-carousel height="100vh" :hide-delimiters="true" :vertical="true" :continuous="false">
      <v-carousel-item
        v-for="(item, i) in datas"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash' // 引入节流函数

export default {
  name: 'home',
  data () {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ],
      activeIndex: '/',
      datas: [
        {
          src: 'https://oss.abeille.top/content.svg',
          title: 'Bienvenue, Abeille 欢迎你！',
          link: '/introduce',
          text: '阅读更多',
          content: 'Abeille 是蜜蜂法语词语，选择这个词也是希望这里能成为Ruche（蜂巢），<br />希望所有注册用户都像一只勤劳的小蜜蜂一样，共同做一些事情...<br /><br />本站持续开发优化，梦想还是要有的，万一实现了呢。'
        },
        {
          src: 'https://oss.abeille.top/upload.svg',
          title: '一点介绍',
          link: '/article',
          text: '获取资料',
          content: '本站提供技术博文、游行博客、翻译文档等资料，<br />可供免费使用，同时希望大家发现问题，能指正错误...'
        },
        {
          src: 'https://oss.abeille.top/onboarding.svg',
          title: '关于站长',
          link: '/introduce',
          text: '了解站长',
          content: '一个菜鸟程序员，主要做后端开发，前端也能写。<br />生长在关中大地上，向往美好的事物，追求完美（其实是有点挑），<br />没事出去旅旅游（瞎溜达），拍拍照、修修图，学习下技术，<br />毕竟新技术更新迭代特别快啊，不想被辞退啊...'
        }
      ]
    }
  },
  mounted () {
    // 监听（绑定）滚轮 滚动事件, safari, firefox, chrome
    this.$nextTick(function () {
      // 监听当前组件的滚动事件
      let mousewheelevt = 'onwheel' in document.createElement('div') ? 'wheel'// 各个厂商的高版本浏览器都支持"wheel"
        : document.onmousewheel !== undefined ? 'mousewheel' // Webkit 和 IE一定支持"mousewheel"
          : 'DOMMouseScroll' // 低版本firefox
      if (window.addEventListener) {
        // { 'trailing': false } 调用在节流结束后，默认为true，即表示允许在 wait 期间多次调用
        window.addEventListener(mousewheelevt, _.throttle(this.handleScroll, 1200, { 'trailing': false }), false)
      }
    })
  },
  methods: {
    handleScroll (event) {
      // 页面滚动距顶部距离
      if (!event) event = window.event
      let wheel = event.wheelDelta === undefined ? (event.detail === undefined ? false : event.detail)
        : event.wheelDelta
      let carousel = this.$refs.carousel
      // 需要判断是否走马灯对象存在，避免鼠标左右滑动触法
      if (wheel && carousel) {
        if (event.wheelDelta > 0) {
          // 当滑轮向上滚动时
          carousel.prev()
        } else {
          // 当滑轮向下滚动时
          carousel.next()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
