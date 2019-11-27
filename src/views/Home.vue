<template>
  <el-row type="flex">
    <el-col :span="24">
      <el-carousel
        height="100vh"
        direction="vertical"
        :autoplay="false"
        :loop="false"
        ref="carousel"
        indicator-position="none"
        style="overflow: hidden"
      >
        <el-carousel-item v-for="(item, index) in datas" :key="index">
          <div>
            <h1>{{ item.content }}</h1>
          </div>
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash' // 引入节流函数

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      datas: [
        {
          url: 'https://oss.abeille.top/creativity.svg',
          content: '你有故事...'
        },
        {
          url: 'https://oss.abeille.top/content.svg',
          content: '我有酒...'
        },
        {
          url: 'https://oss.abeille.top/upload.svg',
          content: '咱两一起做朋友...'
        },
        {
          url: 'https://oss.abeille.top/onboarding.svg',
          content: '背靠背，手拉手...'
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
