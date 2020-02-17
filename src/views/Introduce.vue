<template>
  <v-app app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      temporary
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

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
        <v-btn href="/blog" text>博客</v-btn>
        <v-btn href="/translation" text>翻译</v-btn>
        <v-btn href="/signin" text>登录</v-btn>
        <v-btn href="/signup" text>注册</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
      >
        <!-- If using vue-router -->
        <v-row justify="center" class="my-0">
          <v-col cols="12" md="10" lg="10" xl="8">
            <v-card class="pa-7">
              <h2>{{ introduction.title }}</h2>
              <p v-html="introduction.content"></p>
              <p v-html="introduction.contact"></p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
// @ is an alias to /src
import { queryTranslationFunc } from '@/api/method'

export default {
  name: 'introduce',
  data () {
    return {
      drawer: null,
      menus: [
        {
          title: '首页',
          url: '/'
        },
        {
          title: '博客',
          url: '/blog'
        },
        {
          title: '翻译',
          url: '/translation'
        },
        {
          title: '登录',
          url: '/signin'
        },
        {
          title: '注册',
          url: '/signup'
        }
      ],
      introduction: {
        title: '关于我',
        content: '还没想好写点啥',
        contact: '<h3>联系方式：</h3><p>CSDN：https://me.csdn.net/zx110503</p><p>GitHub：https://github.com/little3201</p>'
      }
    }
  },
  methods: {
    queryIntroduce () {
      queryTranslationFunc().then(
        response => {
          this.introduction = response.data
        },
        error => {
          alert(error.message)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
