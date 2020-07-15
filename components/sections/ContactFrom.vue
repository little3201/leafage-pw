<template>
  <section id="contact-form">

    <v-text-field outlined dense single-line label="Name" />

    <v-text-field outlined dense single-line label="Email" />

    <v-text-field outlined dense single-line label="Subject" />

    <v-text-field outlined dense single-line 
      class="mb-6"
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
  </section>
</template>

<script>
export default {
  name: 'BaseContactForm',

  // Injected from the Vuetify Themeable mixin
  inject: ['theme'],

  props: {
    subtitle: String,
    title: {
      type: String,
      default: 'MAIL US YOUR MESSAGE'
    }
  }
}
</script>