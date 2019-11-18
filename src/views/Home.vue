<template>
  <div id="home">
    <headers :activeName="activeName" />
    <a-layout-content>
      <a-carousel vertical ref="carousel" :dots="false">
        <div id="onboarding">
            <h1>你有故事。。。</h1>
        </div>
        <div id="content">
            <h1>我有酒。。。</h1>
        </div>
        <div id="trip">
            <h1>咱两一起做朋友。。。</h1>
        </div>
      </a-carousel>
    </a-layout-content>
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
      activeName: 'home'
    }
  },
  mounted () {
    // 监听（绑定）滚轮 滚动事件, safari, firefox
    window.addEventListener('DOMMouseScroll', this.handleScroll, true)
    // chrome and ie
    window.addEventListener('mousewheel', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      // 页面滚动距顶部距离
      let e = window.event
      // 判断浏览器IE，谷歌滑轮事件
      if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
          // 当滑轮向上滚动时
          this.$refs.carousel.prev()
        } else {
          // 当滑轮向下滚动时
          this.$refs.carousel.next()
        }
      } else if (e.detail) {
        // Firefox滑轮事件
        if (e.detail > 0) {
          // 当滑轮向上滚动时
          this.$refs.carousel.prev()
        } else {
          // 当滑轮向下滚动时
          this.$refs.carousel.next()
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
#trip {
  background-image: url('../assets/trip.svg');
  background-repeat: no-repeat;
  background-position: center;
}
#onboarding {
  background-image: url('../assets/onboarding.svg');
  background-repeat: no-repeat;
  background-position: center;
}
#content {
  background-image: url('../assets/content.svg');
  background-repeat: no-repeat;
  background-position: center;
}
.ant-carousel /deep/ .slick-slide {
  background-color: #f8f8f9;
  text-align: center;
  line-height: 920px;
  overflow: hidden;
}
</style>
