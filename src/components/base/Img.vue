<template>
  <v-img
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-img>
</template>

<script>
  export default {
    name: 'BaseImage',
  }
</script>
