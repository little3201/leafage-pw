<template>
  <el-container>
    <Headers />
    <el-main style="padding: 0;">
      <el-carousel
        height="100vh"
        direction="vertical"
        :autoplay="false"
        :loop="false"
        ref="carousel"
        indicator-position="none"
      >
        <el-carousel-item v-for="(item, index) in datas" :key="index">
          <el-row type="flex" justify="center" align="middle">
            <div style="position: absolute; text-align: center; z-index: 3;">
              <p style="font-size: 32px;" v-html="item.title"></p>
              <p style="font-size: 18px;" v-html="item.content"></p>
            </div>
            <el-image :src="item.url" fit="contain" />
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <Footers />
  </el-container>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash' // 引入节流函数
import Headers from '@/components/Headers.vue'
import Footers from '@/components/Footers.vue'

export default {
  name: 'home',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      datas: [
        {
          url: 'https://oss.abeille.top/content.svg',
          title: 'Bienvenue, 欢迎来到Abeille',
          content: 'Abeille 是蜜蜂法语词语，选择这个词也是希望这里能成为Ruche（蜂巢），<br />希望所有注册用户都像一只勤劳的小蜜蜂一样，共同做一些事情...<br />本站提供用户注册功能，注册用户可对站内有权限的资源进行操作。'
        },
        {
          url: 'https://oss.abeille.top/upload.svg',
          title: '一点介绍',
          content: '咱两一起做朋友...'
        },
        {
          url: 'https://oss.abeille.top/onboarding.svg',
          title: '关于站长',
          content: '一个菜鸟程序员，生长在观众'
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
        // { 'trailing': false }调用在节流结束后，默认为true，即表示允许在 wait 期间多次调用
        window.addEventListener(mousewheelevt, _.throttle(this.handleScroll, 1200, { 'trailing': false }), false)
      }
    })
  },
  methods: {
    handleScroll (event) {
      // 页面滚动距顶部距离
      if (!event) event = window.event
      let wheel = event.wheelDelta === undefined ? (event.detail === undefined ? false : event.detail) : event.wheelDelta
      let carousel = this.$refs.carousel
      if (wheel) {
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
.el-main {
  text-align: center;
  padding: 0;
}
img {
  max-height: 100%;
  width: auto;
  opacity: 0.8;
}
</style>
