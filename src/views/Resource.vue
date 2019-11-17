<template>
  <div id="resource">
    <headers :activeName="activeName" />
    <a-layout-content style="margin-top:60px">
      <h1>眼里只有你。。。</h1>
    </a-layout-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'

export default {
  name: 'resource',
  components: {
    Headers
  },
  data () {
    return {
      activeName: 'resource'
    }
  }
}
</script>

<style lang="less" scoped>
#resource{
  background-image: url('../assets/undraw_content_vbqo.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
