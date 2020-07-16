<template>
  <section id="contact-form">
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <h2>KEEP IN TOUCH WITH US</h2>
          
          <v-divider class="mb-6 primary" />
          
          <v-list>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon large v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-html="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h2>MAIL US YOUR MESSAGE</h2>
          
          <v-divider class="mb-6 primary" />
          
          <v-text-field outlined dense single-line label="Name" />

          <v-text-field outlined dense single-line label="Email" />

          <v-text-field outlined dense single-line label="Subject" />

          <v-textarea outlined dense single-line 
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
        text: '陕西省 · 西安市 <br/> 碑林区 · 长安北路'
      },
      {
        icon: 'mdi-wechat',
        title: 'Wechat',
        text: '布吉岛 <br/> q335699669'
      },
      {
        icon: 'mdi-email',
        title: 'Email',
        text: 'little3201@gmail.com <br/> little3201@163.com'
      }
    ]
  })
}
</script>

<style lang="sass">
.v-divider
  border-width: 3px 0 0 0 !important
  max-width: 28px
</style>