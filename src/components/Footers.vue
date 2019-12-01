<template>
  <el-footer class="footers">
    <el-link :underline="false" style="vertical-align: initial; margin: 5px 10px;">帮助</el-link>
    <el-link :underline="false" style="vertical-align: initial; margin: 5px 10px;">条款</el-link>
    <el-link :underline="false" style="vertical-align: initial; margin: 5px 10px;">隐私</el-link>
    <div style="color:#606266;">
      Copyright &copy; {{ new Date().getFullYear() }} · 陕ICP备19017836号-1 · Powerd By 布吉岛
    </div>
  </el-footer>
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
.footers {
  position: absolute;
  width: 100%;
  bottom: 0.5rem;
  z-index: 3;
  text-align: center;
}
</style>
