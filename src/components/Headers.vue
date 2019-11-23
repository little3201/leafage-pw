<template>
  <v-toolbar  app>

  </v-toolbar>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
    }
  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
