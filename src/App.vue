<template>
  <div id="app">
    <el-container>
      <Headers />
      <el-main style="padding: 0">
        <router-view />
      </el-main>
      <Footers />
    </el-container>
  </div>
</template>

<script>
import Headers from '@/components/Headers.vue'
import Footers from '@/components/Footers.vue'

export default {
  components: {
    Headers,
    Footers
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: Helvetica, 'PingFang SC', "Microsoft YaHei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
