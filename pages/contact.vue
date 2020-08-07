<template>
  <v-container fluid class="pa-0">
    <contact-form />
  </v-container>
</template>

<script>
import ContactForm from '~/components/sections/ContactForm.vue'

export default {
  components: {
    ContactForm
  },

  head () {
    return {
      title: 'Contact - Abeille | 布吉岛',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'abeille, 布吉岛, contact, 联系' }
      ]
    }
  }
}
</script>
