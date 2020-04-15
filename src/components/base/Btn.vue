<template>
  <v-btn
    :color="color"
    :depressed="depressed"
    :min-width="minWidth"
    :tile="tile"
    class="font-weight-bold"
    x-large
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'BaseBtn',

  props: {
    color: {
      type: String,
      default: 'primary'
    },
    depressed: {
      type: Boolean,
      default: true
    },
    minWidth: {
      type: [Number, String],
      default: 164
    },
    tile: {
      type: Boolean,
      default: true
    }
  }
}
</script>
