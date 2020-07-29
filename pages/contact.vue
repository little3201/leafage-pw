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
      title: 'Abeille-布吉岛，一座永不沉没的网络小岛',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'abeille, 布吉岛, contact, 联系' }
      ]
    }
  }
}
</script>
