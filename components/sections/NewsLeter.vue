<template>
  <v-theme-provider dark>
    <section
      id="contact-us"
      class="primary"
      space="36"
    >
      <v-row
        align="center"
        class="ma-0"
        justify="center"
      >
        <p
          space="0"
          title="GET OUR NEWSLETTER"
        />

        <v-responsive
          class="px-4 mx-6"
          max-width="600"
          width="100%"
        >
          <v-text-field
            hide-details
            label="Your Email Address"
          >
            <template v-slot:append-outer>
              <v-btn
                class="ml-n1"
                height="40"
                outlined
                style="margin-top: -7px;"
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