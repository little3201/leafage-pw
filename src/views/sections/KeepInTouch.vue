<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <base-business-info title="KEEP IN TOUCH WITH US">
            模块还在开发中。。。
          </base-business-info>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <base-contact-form title="MAIL US YOUR MESSAGE" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionKeepInTouch'
}
</script>
