<template>
  <v-theme-provider dark>
    <base-section
      id="info-alt"
      class="grey darken-4"
    >
      <v-responsive
        class="mx-auto"
        max-width="1400"
      >
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              md="3"
            >
              <base-info />
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <base-info-card title="Contact" />

              <base-business-contact dense />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <contact-form />
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'SectionBusinessInfo',

  components: {
    ContactForm: () => import('@/components/base/ContactForm')
    // Portfolio: () => import('@/components/Portfolio')
  }
}
</script>

<style lang="sass">
  #info-alt a
    text-decoration: none
</style>
