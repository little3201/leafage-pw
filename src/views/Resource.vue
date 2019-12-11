<template>
  <div>
    <Headers/>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footers />
  </div>
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
  margin: 60px auto;
  background: #f8f8f8;
}
.el-footer {
  background-color: #ffffff;
}
</style>
