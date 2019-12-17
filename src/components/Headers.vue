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
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text style="padding-right: 0;">
              文档<v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :href="item.url"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn href="/introduce" text>介绍</v-btn>
        <v-btn href="/console" text>控制台</v-btn>
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
      drawer: false,
      items: [
        {
          title: '技术博文',
          url: '/technology'
        },
        {
          title: '翻译文档',
          url: '/translation'
        },
        {
          title: '旅行游记',
          url: '/travel'
        }
      ]
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
