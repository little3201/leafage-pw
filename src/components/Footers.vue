<template>
  <v-footer style="text-align: center; background: transparent">
    <div :style="{ fontSize: '1rem' }">Copyright &copy; 2019 · 陕ICP备19017836号-1 · Powerd By
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <span v-on="on">布吉岛</span>
        </template>
        <span><img src="@/assets/wechat.jpg" /></span>
      </v-tooltip>
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
