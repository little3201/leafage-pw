<template>
  <v-app app>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      light
      flat
    >
      <v-toolbar-title
        class="ml-0 pl-4"
      >
        <router-link to="/">
          <img style="max-height: 3rem;" src="@/assets/logo.png" />
          <v-btn text class="headline">Abeille</v-btn>
        </router-link>
      </v-toolbar-title>
      <v-divider vertical inset></v-divider>
      <v-toolbar-items>
        <v-btn to="/community" text>COMMUNITY</v-btn>
        <v-btn to="/resource" text>RESOURCE</v-btn>
        <v-btn to="/document" text>DOCUMENT</v-btn>
        <v-btn to="/introduce" text>ABOUT</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        class="full-height"
      >
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
    <v-footer
      padless
    >
      <v-card
        flat
        tile
        class="text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <span>
            Copyright &copy; {{ new Date().getFullYear() }} · 陕ICP备19017836号-1 · Powerd By <strong>布吉岛</strong>
          </span>
        </v-card-text>
      </v-card>
    </v-footer>
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
