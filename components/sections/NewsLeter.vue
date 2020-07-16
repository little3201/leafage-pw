<template>
<v-theme-provider dark>
  <section
    id="news-leter"
    class="primary pa-8"
  >
    <v-row align="center" justify="center">
      <h2 class="white--text">
        GET OUR NEWSLETTER
      </h2>

      <v-responsive
        class="px-4 mx-6"
        max-width="600"
        width="100%"
      >
        <v-text-field
          hide-details
          outlined
          dense
          single-line
          label="Your Email Address"
        >
          <template v-slot:append-outer>
            <v-btn
              height="40"
              outlined
              style="margin-top: -8px;"
            >
              Subscribe
            </v-btn>
          </template>
        </v-text-field>
      </v-responsive>
    </v-row>
  </section>
</v-theme-provider>
</template>

<script>
export default {
  name: 'SectionNewsletter'
}
</script>