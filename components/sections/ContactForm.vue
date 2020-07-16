<template>
  <section id="contact-form">
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <base-business-info title="KEEP IN TOUCH WITH US" />
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h2>MAIL US YOUR MESSAGE</h2>
          
          <v-divider class="mb-6 primary" style="border-width: 2px 0 0 0 !important;" />
          
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
  inject: ['theme']
}
</script>