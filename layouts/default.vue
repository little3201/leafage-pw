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
      <v-list
        color="white"
        shaped
      >
        <v-list-item
          v-for="name in items"
          :key="name"
          :to="{ name }"
          :exact="name === 'Home'"
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title v-text="name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- app-bar -->
    <v-app-bar
      app
      color="white"
      elevation="1"
    >
      <v-img
        src="images/logo.png"
        class="mr-3 hidden-xs-only"
        contain
        max-width="42"
        width="100%"
      />
      <span :class="[$vuetify.breakpoint.smAndDown ? 'text-h6' : 'text-h5']">ABEILLE</span>

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <!-- main -->
    <v-main>
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </v-main>

    <!-- footer -->
    <v-footer
      color="grey darken-4"
      dark
    >
      <v-container> 
        <v-row>
          <v-col cols="12" md="6">
            <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
              <template v-for="(s, i) in social">
                <a
                  :key="s"
                  class="white--text pa-1 pa-md-0"
                  href="#"
                  style="text-decoration: none"
                  v-text="s"
                />

                <v-responsive
                  v-if="i < social.length - 1"
                  :key="`divider-${s}`"
                  class="mx-4 shrink hidden-sm-and-down"
                  max-height="24"
                >
                  <v-divider vertical />
                </v-responsive>
              </template>
            </div>
          </v-col>

          <v-col
            class="text-center text-md-right"
            cols="12"
            md="6"
          >
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
        'home',
        'blog',
        'portfolio',
        'about',
        'contact'
      ],
      social: [
        'Github',
        'Gitee',
        'Wechat',
        'Weibo'
      ]
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
