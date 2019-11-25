<template>
  <div>
    <Headers />
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-carousel
          v-model="model"
          :show-arrows="false"
          :hide-delimiters="true"
          :vertical="true"
          :continuous="false"
          height="644"
        >
          <v-carousel-item v-for="src in imgs" :key="src">
            <v-img :src="src" aspect-ratio="2.16"/>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-content>
    <Footers />
  </div>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash' // 引入节流函数
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
  name: 'introduce',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      imgs: [
        'https://oss.abeille.top/upload.svg',
        'https://oss.abeille.top/onboarding.svg',
        'https://oss.abeille.top/content.svg'
      ],
      model: 0
    }
  },
  mounted () {
    // 监听（绑定）滚轮 滚动事件, safari, chrome
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
    // 滚动处理
    handleScroll (event) {
      if (!event) event = window.event
      let wheel = event.wheelDelta === undefined
        ? (event.detail === undefined ? false : event.detail) : event.wheelDelta
      if (wheel) {
        if (event.wheelDelta > 0) {
          // 当滑轮向下滚动时
          this.model -= 1
        } else {
          // 当滑轮向上滚动时
          if (this.model < this.imgs.length - 1) {
            this.model += 1
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container--fluid {
  padding: 0;
}
</style>
