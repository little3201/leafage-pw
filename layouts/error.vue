<template>
  <!-- BEGIN: Error Page -->
  <div
    class="container mx-auto border-t border-black flex flex-row items-center justify-center text-center lg:text-left"
  >
    <img
      alt="error"
      class="w-1/2"
      src="~/static/error-illustration.svg"
    />
    <div v-if="error.statusCode === 404">
      <div class="intro-x text-6xl font-medium">
        {{ error.statusCode }}
      </div>
      <div class="intro-x text-xl lg:text-3xl font-medium">
        Oops. This page has gone missing.
      </div>
      <div class="intro-x text-lg mt-3">
        You may have mistyped the address or the page may have moved.
      </div>
    </div>
    <div v-else>
      <div class="intro-x text-6xl font-medium">
        {{ error.statusCode }}
      </div>
      <div class="intro-x text-xl lg:text-3xl font-medium">
        Oops. Look likes somethins error.
      </div>
      <div class="intro-x text-lg mt-3">Refreh your requested page.</div>
    </div>
  </div>
  <!-- END: Error Page -->
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "Error",
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
});
</script>