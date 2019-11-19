<template>
  <div id="introduce">
    <headers />
    <a-layout-content style="margin-top:60px">
      <h1>眼里只有你。。。</h1>
    </a-layout-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'

export default {
  name: 'introduce',
  components: {
    Headers
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
