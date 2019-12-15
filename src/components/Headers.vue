<template>
  <v-app-bar app :flat="flat">
      <v-app-bar-nav-icon v-show="drawer" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/">
          <img style="height: 3.5rem;" src="@/assets/logo.png" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn href="/" text>首页</v-btn>
        <v-btn href="/introduce" text>资源</v-btn>
        <v-btn href="/travel" text>游记</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
  name: 'headers',
  props: {
    flat: Boolean
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  padding-top: 8px;
}
</style>
