<template>
  <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      drawer: null
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
