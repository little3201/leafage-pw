<template>
  <section :id="id">
    <v-row no-gutters>
      <v-col cols="12">
        <component
          :is="`section-${section}`"
          v-for="section in sections"
          :key="section"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'BaseView',

  props: {
    id: {
      type: String,
      default: 'view'
    }
  },
  data: () => ({ sections: [] })
}
</script>
