<template>
  <v-textarea
    outlined
    dense
    single-line
    v-bind="{
      rows: 6,
      ...$attrs,
    }"
    v-on="$listeners"
  />
</template>

<script>
  export default {
    name: 'BaseTextarea',
  }
</script>

<style lang="sass">
  //
</style>
