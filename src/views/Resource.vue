<template>
  <el-container>
    <Headers :activeIndex="activeIndex"/>
    <el-main style="padding: 0;">
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
  }
}
</script>

<style lang="scss" scoped>

</style>
