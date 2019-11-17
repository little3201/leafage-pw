<template>
  <div id="introduce">
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
  name: 'introduce',
  components: {
    Headers
  },
  data () {
    return {
      activeName: 'introduce'
    }
  }
}
</script>

<style lang="less" scoped>
#introduce{
  background-image: url('../assets/undraw_onboarding_o8mv.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
