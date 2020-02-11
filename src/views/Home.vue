<template>
  <v-app app>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
      <v-toolbar-title
        class="ml-0 pl-4"
      >
        <router-link to="/">
          <img class="mt-3" style="max-height: 3rem;" src="@/assets/logo.png" />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
        rounded
        dense
      />
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="/" text>首页</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text style="padding-right: 0;">
              博客<v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menus"
              :key="index"
              :href="item.url"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn href="/introduce" text>介绍</v-btn>
        <v-btn href="/" text>帮助</v-btn>
        <v-btn href="/signin" text>登录</v-btn>
        <v-btn href="/signup" text>注册</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
      >
        <!-- If using vue-router -->
        <v-row justify="center" class="my-0" outlined hover>
          <v-col cols="12" md="10" lg="10" xl="8">
            <v-card class="pa-7">
              <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
              ></v-sparkline>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea']
]

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    dialog: false,
    drawer: null,
    menus: [
      {
        title: '技术博文',
        url: '/technology'
      },
      {
        title: '翻译文档',
        url: '/translation'
      },
      {
        title: '摄影记录',
        url: '/travel'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
