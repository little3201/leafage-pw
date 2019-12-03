<template>
  <el-container style="background-color: #ffffff;">
    <Headers :activeIndex.sync="activeIndex"/>
    <el-main class="content">
      <router-view />
    </el-main>
    <Footers />
  </el-container>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'
import Footers from '@/components/Footers.vue'

export default {
  name: 'resource',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      activeIndex: '/resource'
    }
  },
  created () {
    // 组件创建完后获取数据，此时 data 已经被 observed 了
    this.activeMenu()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'activeMenu'
  },
  methods: {
    activeMenu () {
      this.activeIndex = this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #ffffff;
}
.content {
  margin-top: 60px;
  background: #f8f8f8;
}
</style>
