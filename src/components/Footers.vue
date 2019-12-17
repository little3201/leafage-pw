<template>
  <v-footer app>
    <v-row justify="center">
      <v-col>
        Copyright &copy; {{ new Date().getFullYear() }} · 陕ICP备19017836号-1 · Powerd By
        <a href="/introduce" style="color: rgba(0, 0, 0, 0.87);">布吉岛</a>
      </v-col>
    </v-row>
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
.col {
  text-align: center;
}
</style>
