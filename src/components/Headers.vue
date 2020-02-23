<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      temporary
    >
      <v-list dense>
        <v-row>
          <v-col>
            <v-row justify="center">
              <router-link to="/" class="headline">
                <v-img max-width="4rem" src="https://oss.abeille.top/logo.png"></v-img>
                Abeille
              </router-link>
            </v-row>
          </v-col>
        </v-row>
        <v-divider />
        <template v-for="(item, index) in menus">
          <v-list-item
            :key="index"
            link
            :to="item.url"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      light
      flat
      hide-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />
      <v-spacer class="hidden-md-and-up" />
      <v-toolbar-items>
        <v-btn to="/" text class="headline">
          <v-img max-width="3rem" src="https://oss.abeille.top/logo.png"></v-img>
          Abeille
        </v-btn>
      </v-toolbar-items>
      <v-divider class="mx-3 hidden-sm-and-down" vertical inset></v-divider>
      <v-spacer class="hidden-sm-and-down" />
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
      <v-toolbar-items class="me-5 hidden-sm-and-down">
        <v-btn  v-for="(item, index) in menus" :key="index" :to="item.url" text>{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-btn icon class="hidden-md-and-up">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'headers',
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    menus: [
      {
        title: 'COMMUNTIY',
        url: '/community'
      },
      {
        title: 'RESOURCE',
        url: '/resource'
      },
      {
        title: 'DOCUMENT',
        url: '/document'
      },
      {
        title: 'ABOUT',
        url: '/introduce'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
