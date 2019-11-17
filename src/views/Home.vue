<template>
  <div id="home">
    <headers :activeName="activeName" />
    <a-layout-content style="margin-top:60px">
      <a-carousel vertical ref="carousel" :dots='false'>
        <div><introduce /></div>
        <div><resource /></div>
      </a-carousel>
    </a-layout-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'
import Introduce from '@/views/Introduce.vue'
import Resource from '@/views/Resource.vue'

export default {
  name: 'home',
  components: {
    Headers,
    Introduce,
    Resource
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
        if (e.wheelDelta > 0) { // 当滑轮向上滚动时
          this.$refs.carousel.prev()
        } else { // 当滑轮向下滚动时
          this.$refs.carousel.next()
        }
      } else if (e.detail) { // Firefox滑轮事件
        if (e.detail > 0) { // 当滑轮向上滚动时
          this.$refs.carousel.prev()
        } else { // 当滑轮向下滚动时
          this.$refs.carousel.next()
        }
      }
    }
  }
}
</script>

<style scoped>
/*
#home{
  background-image: url('../assets/undraw_trip_dv9f.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
*/
.ant-carousel >>> .slick-slide {
    text-align: center;
    height: 460px;
    line-height: 460px;
    overflow: hidden;
  }
</style>
