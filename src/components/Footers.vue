<template>
  <v-footer app>
    <!-- -->
    <a>帮助</a>
    <a>条款</a>
    <a>隐私</a>
    <div>
      Copyright &copy; {{ new Date().getFullYear() }} · 陕ICP备19017836号-1 · Powerd By
      <a href="/introduce">
        布吉岛
      </a>
    </div>
  </v-footer>
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

</style>
