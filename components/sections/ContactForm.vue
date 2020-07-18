<template>
  <section id="contact-form">
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <h2>KEEP IN TOUCH WITH ME</h2>
          <v-divider class="mb-6 primary divider-under" />
          <v-list>
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title">
                <v-list-item-icon>
                  <v-icon large class="my-4" v-text="item.icon" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="my-4" v-text="item.text" />
                </v-list-item-content>
              </v-list-item>

              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              />
            </template>
          </v-list>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h2>MAIL ME YOUR MESSAGE</h2>
          <v-divider class="mb-6 primary divider-under" />
          <v-text-field
            outlined
            dense
            single-line
            label="Name"
          />
          <v-text-field
            outlined
            dense
            single-line
            label="Email"
          />
          <v-text-field
            outlined
            dense
            single-line
            label="Subject"
          />
          <v-textarea
            outlined
            dense
            single-line
            label="Your Need & Description"
          />

          <v-btn
            :color="!theme.isDark ? 'primary' : 'white'"
            href="mailto:little3201@163.com?subject=Abeille%20Website%20Question"
            outlined
            target="_blank"
          >
            Send message
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BaseContactForm',

  // Injected from the Vuetify Themeable mixin
  inject: ['theme'],

  data: () => ({
    items: [
      {
        icon: 'mdi-map-marker-outline',
        title: 'Address',
        text: '陕西省 · 西安市 · 碑林区 · 长安北路'
      },
      {
        icon: 'mdi-email',
        title: 'Email',
        text: 'little3201@gmail.com little3201@163.com'
      },
      {
        icon: 'mdi-wechat',
        title: 'Wechat',
        text: '布吉岛: q335699669'
      },
      {
        icon: 'mdi-qqchat',
        title: 'QQ',
        text: '布吉岛: 973587595'
      }
    ]
  })
}
</script>

<style lang="sass">
.divider-under
  border-width: 3px 0 0 0 !important
  max-width: 28px
</style>
