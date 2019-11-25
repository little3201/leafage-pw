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
        >
          <v-carousel-item
            v-for="(color, i) in colors"
            :key="color"
          >
            <v-sheet
              :color="color"
              height="100%"
              tile
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">{{ i + 1 }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-content>
    <Footers />
  </div>
</template>

<script>
// @ is an alias to /src
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
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      model: 0
    }
  },
  mounted () {
    // 监听（绑定）滚轮 滚动事件, safari, firefox, chrome
    this.$nextTick(function () {
      // 监听当前组件的滚动事件
      let mousewheelevt = 'onwheel' in document.createElement('div') ? 'wheel'// 各个厂商的高版本浏览器都支持"wheel"
        : document.onmousewheel !== undefined ? 'mousewheel' // Webkit 和 IE一定支持"mousewheel"
          : 'DOMMouseScroll' // 低版本firefox
      window.addEventListener(mousewheelevt, this.handleScroll, false)
    })
  },
  methods: {
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
          if (this.model < this.colors.length - 1) {
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
