<template>
  <v-app app>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      light
      flat
    >
      <v-toolbar-title
        class="ml-0 pl-4"
      >
        <router-link to="/" class="black--text">
          <v-img class="mt-3" style="max-height: 3rem;" src="@/assets/logo.png">
            Abeille
          </v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn href="/" text>首页</v-btn>
        <v-btn href="/blog" text>博客</v-btn>
        <v-btn href="/resource" text>资源</v-btn>
        <v-btn href="/" text>文档</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
      >
        <v-row>
          <v-img
            max-height="500"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            class="text-center white--text align-center"
          >
            <h1>开放，开源</h1>
            <p>开放心态，开源代码</p>
          </v-img>
        </v-row>
        <v-row justify="center">
          <h2>开源项目</h2>
        </v-row>
        <v-row justify="center" class="my-0">
          <v-col cols="12" sm="6" md="4" lg="3" xl="3">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              hover
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>abeillt-ui</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">前台展示</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>完全开源</div>
                <div>可直接使用，包括源码</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text>
                  查看演示
                </v-btn>
                <v-btn color="orange" text>
                  源码获取
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="3">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              hover
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>abeille</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">后端服务</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>完全开源</div>
                <div>可直接使用，包括源码</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text>
                  查看演示
                </v-btn>
                <v-btn color="orange" text>
                  源码获取
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="3">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              hover
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>abeille-manager</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">后台管理</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>完全开源</div>
                <div>可直接使用，包括源码</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text>
                  查看演示
                </v-btn>
                <v-btn color="orange" text>
                  源码获取
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <h2>项目热度</h2>
        </v-row>
        <v-row justify="center" class="my-0">
          <v-col cols="12" md="10" lg="10" xl="8">
            <v-card class="pa-7" outlined>
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
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Abeille</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
    drawer: null
  })
}
</script>

<style lang="scss" scoped>
</style>
