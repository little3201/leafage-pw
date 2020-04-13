<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    class="base-body body-1"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <!-- Only use v-html for user data -->
    <div
      v-if="text"
      v-text="text"
    />

    <div
      v-else-if="html"
      v-html="html"
    />

    <slot v-else />
  </component>
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseBody',

    mixins: [Heading],

    inject: ['theme'],

    props: {
      html: String,
      maxWidth: {
        type: [Number, String],
        default: undefined,
      },
      space: {
        type: [Number, String],
        default: 10,
      },
      tag: {
        type: String,
        default: 'p',
      },
      text: String,
    },

    computed: {
      classes () {
        return [
          'grey--text',
          this.theme.isDark ? 'text--lighten-1' : 'text--darken-1',
          `text-${this.heading.align}`,
          `mb-${this.space}`,
        ]
      },
      styles () {
        return {
          maxWidth: `${this.maxWidth}px`,
        }
      },
    },
  }
</script>
