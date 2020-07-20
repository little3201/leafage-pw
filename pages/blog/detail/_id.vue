<template>
  <v-container>
    <v-row>
      {{ data }}
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: undefined
    }
  }
}
</script>
