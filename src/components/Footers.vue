<template>
  <div id="footers">
    <el-footer style="text-align: center; background: transparent">
      <div :style="{ fontSize: '1rem' }">Copyright &copy; 2019 · 陕ICP备19017836号-1 · Powerd By 布吉岛</div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#footers {
  position: absolute;
  width: 100%;
  bottom: 0.5rem;
  z-index: 3;
}
</style>
