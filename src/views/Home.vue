<template>
  <div id="home">
    <headers />
    <el-main style="width: 100vw">
      <el-carousel
        height="100vh"
        direction="vertical"
        :autoplay="false"
        :loop="false"
        ref="carousel"
        indicator-position="none"
      >
        <el-carousel-item>
          <img src="../assets/trip.svg" />
          <div class="center">
            <h1>语言和文字真的是不可执取的东西，当一句话说出来或者写下来，它就不是你的了，
            <br />你必须允许别人任意解读，甚至误读。所以最想说的话，其实在开口的一刹那就已经说完了。
            </h1>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/content.svg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/onboarding.svg" />
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <footers />
  </div>
</template>

<script>
// @ is an alias to /src
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
    }
  },
  mounted () {
    // 监听（绑定）滚轮 滚动事件, safari, firefox, chrome
    this.$nextTick(function () {
      // 监听当前组件的滚动事件
      let mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel'
      window.addEventListener(mousewheelevt, this.handleScroll, false)
    })
  },
  methods: {
    handleScroll (e) {
      // 页面滚动距顶部距离
      if (!e) e = window.event
      let carousel = this.$refs.carousel
      let wheel = e.wheelDelta === undefined ? (e.detail === undefined ? false : e.detail) : e.wheelDelta
      if (wheel) {
        if (e.wheelDelta > 0) {
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
.center {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 18px;
}
</style>
