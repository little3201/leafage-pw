<template>
  <v-container fluid>
    <!-- If using vue-router -->
    <router-view></router-view>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'resource',
  data () {
    return {
      activeIndex: '/resource'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
