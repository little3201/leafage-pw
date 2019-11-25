<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Abeille</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/">首页</v-btn>
        <v-btn text to="/about">介绍</v-btn>
        <v-btn text to="/signin">控制台</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
