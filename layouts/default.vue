<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      bottom
      color="transparent"
      fixed
      height="auto"
      overlay-color="secondary"
      overlay-opacity=".8"
      temporary
    >
      <v-list color="white" shaped>
        <v-list-item
          v-for="(item, index) in items"
          :key="`drawer-${index}`"
          :to="item.path"
          :exact="item.name === 'home'"
          color="primary"
          nuxt
        >
          <v-list-item-content>
            <v-list-item-title class="text-uppercase" v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- app-bar -->
    <v-app-bar app color="white" elevation="1">
      <v-img src="images/logo.png" class="mr-3 hidden-xs-only" contain max-width="42" width="100%" />
      <span :class="[$vuetify.breakpoint.smAndDown ? 'text-h6' : 'text-h5']">ABEILLE</span>

      <v-spacer />

      <div>
        <v-tabs class="hidden-sm-and-down" optional>
          <v-tab
            v-for="(item, index) in items"
            :key="`tab-${index}`"
            :to="item.path"
            :exact="item.name === 'home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <!-- main -->
    <v-main>
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </v-main>

    <!-- footer -->
    <v-footer color="grey darken-4" dark>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
              <template v-for="(text, index) in social">
                <a
                  :key="`tab-${index}`"
                  class="white--text pa-1 pa-md-0"
                  href="#"
                  style="text-decoration: none"
                  v-text="text"
                />

                <v-responsive
                  v-if="index + 1 < social.length"
                  :key="`divider-vertical=${index}`"
                  class="mx-4 shrink hidden-sm-and-down"
                  max-height="24"
                >
                  <v-divider vertical />
                </v-responsive>
              </template>
            </div>
          </v-col>

          <v-col class="text-center text-md-right" cols="12" md="6">
            Copyright &copy; {{ new Date().getFullYear() }} · 陕ICP备19017836号-1 · Made with 💜 by
            <strong>布吉岛</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { name: 'home', path: '/' },
        { name: 'blog', path: '/blog' },
        { name: 'portfolio', path: '/portfolio' },
        { name: 'about', path: '/about' },
        { name: 'contact', path: '/contact' }
      ],
      social: ['Github', 'Gitee', 'Wechat', 'Weibo']
    }
  }
}
</script>

<style lang="sass">
.v-tabs-slider
  max-width: 24px
  margin: 0 auto

.v-tab
  &::before
    display: none
</style>
