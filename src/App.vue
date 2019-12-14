<template>
  <v-app>
    <!-- If using vue-router -->
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
