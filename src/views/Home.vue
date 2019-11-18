<template>
  <div id="home">
    <headers />
    <el-container>
      <el-carousel height="200px" direction="vertical" :autoplay="false" :loop="false">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-container>
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
      height: `${document.documentElement.clientHeight}`
    }
  },
  mounted () {
    // 监听（绑定）滚轮 滚动事件, safari, firefox
    window.addEventListener('DOMMouseScroll', this.handleScroll, false)
    // chrome and ie
    window.addEventListener('mousewheel', this.handleScroll, false)
    // 高度监听
    window.onresize = () => {
      // 可以在这里保存到浏览器中，也可以保存到其他地方
      this.height = `${document.documentElement.clientHeight}`
    }
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
        } else if (e.wheelDelta < 0) {
          // 当滑轮向下滚动时
          this.$refs.carousel.next()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
