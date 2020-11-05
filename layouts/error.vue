<template>
  <!-- BEGIN: Error Page -->
  <div
    class="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left"
  >
    <div class="-intro-x lg:mr-20">
      <img
        alt="error"
        class="h-48 lg:h-auto"
        style="width: 450px"
        src="@/static/error-illustration.svg"
      />
    </div>
    <div class="mt-10 lg:mt-0">
      <div class="intro-x text-6xl font-medium">
        {{ code }}
      </div>
      <div class="intro-x text-xl lg:text-3xl font-medium">
        Oops. This page has gone missing.
      </div>
      <div class="intro-x text-lg mt-3">
        You may have mistyped the address or the page may have moved.
      </div>
      <button class="intro-x py-1 px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 rounded-md font-medium cursor-pointer border mt-10 focus:outline-none focus:shadow-outline">
        Back to Home
      </button>
    </div>
  </div>
  <!-- END: Error Page -->
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "Error",
  props: {
    code: {
      type: Number,
      default: 404,
    },
  },
});
</script>