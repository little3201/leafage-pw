<template>
  <div>
    <v-card
      :height="height"
      :width="width"
      class="mb-4"
      flat
      tile
      v-bind="$attrs"
      v-on="$listeners"
      @click="$emit('click')"
    >
      <slot />
    </v-card>

    <base-title
      v-if="title"
      :title="title"
      class="text-uppercase"
      size="subtitle-1"
      space="0"
    />

    <base-subtitle
      v-if="subtitle"
      :title="subtitle"
    />
  </div>
</template>

<script>
  export default {
    name: 'BaseCard',

    inheritAttrs: false,

    props: {
      height: [Number, String],
      width: [Number, String],
      subtitle: String,
      title: String,
    },
  }
</script>
