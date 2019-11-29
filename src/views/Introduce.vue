<template>
  <el-container>
    <Headers :activeIndex="activeIndex"/>
    <el-main>
      <h1>眼里只有你。。。</h1>
    </el-main>
    <Footers />
  </el-container>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'
import Footers from '@/components/Footers.vue'

export default {
  name: 'introduce',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      activeIndex: '/introduce'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
