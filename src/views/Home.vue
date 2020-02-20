<template>
  <v-app app>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      light
      flat
    >
      <v-toolbar-items>
        <v-btn to="/" text class="headline">
          <img style="max-height: 3rem;" src="@/assets/logo.png" />
          Abeille
        </v-btn>
      </v-toolbar-items>
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
        <v-row class="mt-n3">
          <v-img max-height="600"
            class="text-center white--text align-center"
            src="http://streetwill.co/uploads/post/photo/895/medium_2x_XSFQncCMaiKZwg0vmd6BWU43pRN-3GW7O_4OTFWW9SA.jpg">
            <p class="display-4 font-weight-bold">The beautiful、powerful products</p>
            <p class="headline font-weight-bold">The beautifuf and powerful products</p>
            <v-btn to="/document" color="orange" class="mx-6" x-large>DOCUMENT</v-btn>
            <v-btn to="/introduce" class="mx-6" x-large>ABOUT US</v-btn>
          </v-img>
        </v-row>
        <v-row justify="center" class="my-0">
          <v-col cols="12" sm="6" md="4" lg="3" xl="3">
            <v-card
              class="mx-auto"
              max-width="400"
              hover
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://streetwill.co/uploads/post/photo/889/medium_2x_iiz_sR-AWZvDOosSq5oB9wdtL78Z_xjDvd0T6fO8A0w.jpg"
              >
                <v-card-title>abeillt-ui</v-card-title>
             </v-img>
              <v-card-subtitle class="pb-0">前台展示</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>完全开源</div>
                <div>可直接使用，包括源码</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text>
                  查看演示
                </v-btn>
                <v-btn text>
                  源码获取
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="3">
            <v-card
              class="mx-auto"
              max-width="400"
              hover
            >
              <v-img
                class="white--text align-end"
                height="200px" src="http://streetwill.co/uploads/post/photo/888/medium_2x_8bbMKlZUndWjKSHqvjkVaeyCfLELY4jhN1DO_BVHWxY.jpg"
              >
                <v-card-title>abeille</v-card-title>
             </v-img>
              <v-card-subtitle class="pb-0">后端服务</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>完全开源</div>
                <div>可直接使用，包括源码</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text>
                  查看演示
                </v-btn>
                <v-btn text>
                  源码获取
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="3">
            <v-card
              class="mx-auto"
              max-width="400"
              hover
            >
              <v-img
                class="white--text align-end"
                height="200px" src="http://streetwill.co/uploads/post/photo/891/medium_2x_ateyvagPgadu0nptcKm_0kqBCim_BpguWr3TJbQ0nE4.jpg"
              >
                <v-card-title>abeille-manager</v-card-title>
             </v-img>
              <v-card-subtitle class="pb-0">后台管理</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>完全开源</div>
                <div>可直接使用，包括源码</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text>
                  查看演示
                </v-btn>
                <v-btn text>
                  源码获取
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-card class="ma-4 grey darken-3 text-center" height="200">
              <v-card-text class="mx-12 white--text display-1 font-weight-bold">Get started with Abeille today
                <v-btn color="orange" class="mx-8" x-large>try to free</v-btn>
                <v-btn outlined color="white" x-large>learn more</v-btn>
              </v-card-text>
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
        <!-- <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text> -->
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
export default {
  data: () => ({
    drawer: null
  })
}
</script>

<style lang="scss" scoped>
</style>
