<template>
  <div>
    <Hero />
    <Features />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: 'Home',
  setup() {
    const message = ref("This is a message");
    return {
      message,
    };
  },
});
</script>
