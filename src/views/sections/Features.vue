<template>
  <section
    id="features"
    class="grey lighten-3"
  >
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="text-h3 font-weight-bold mb-3">FEATURES</h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card
            class="py-12 px-4"
            color="grey lighten-5"
            flat
          >
            <v-theme-provider dark>
              <div>
                <v-avatar
                  color="primary"
                  size="88"
                >
                  <v-icon
                    large
                    v-text="icon"
                  ></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            ></v-card-title>

            <v-card-text
              class="text-subtitle-1"
              v-text="text"
            >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  name: 'SectionFeatures',

  data: () => ({
    features: [
      {
        icon: 'mdi-account-group-outline',
        title: '资源开放',
        text: '所有资源免费下载使用，请联系处理'
      },
      {
        icon: 'mdi-update',
        title: '代码开源',
        text: '相关代码全部开源，包括前端、后端'
      },
      {
        icon: 'mdi-shield-outline',
        title: '长期支持',
        text: '所有代码长期维护，欢迎关注，升级'
      }
    ]
  })
}
</script>
