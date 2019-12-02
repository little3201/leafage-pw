<template>
  <el-footer class="footers">
    <el-link :underline="false" class="items">帮助</el-link>
    <el-link :underline="false" class="items">条款</el-link>
    <el-link :underline="false" class="items">隐私</el-link>
    <div style="color:#606266;">
      Copyright &copy; {{ new Date().getFullYear() }} · 陕ICP备19017836号-1 · Powerd By
      <el-link :underline="false" class="introduce" href="/introduce">
        布吉岛
      </el-link>
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
  position: fixed;
  width: 100%;
  bottom: 0.5rem;
  z-index: 3;
  text-align: center;
}
.items {
  vertical-align: initial;
  margin: 5px 10px;
}
.introduce {
  font-size: 1rem;
  vertical-align: initial;
  font-weight: initial;
}
</style>
