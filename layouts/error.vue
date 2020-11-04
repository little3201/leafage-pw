<template>
  <!-- BEGIN: Error Page -->
  <div
    class="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left"
  >
    <div class="-intro-x lg:mr-20">
      <img
        alt="error"
        class="h-48 lg:h-auto"
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
      <button class="intro-x button button--lg border mt-10">
        Back to Home
      </button>
    </div>
  </div>
  <!-- END: Error Page -->
</template>

<style scoped>
.error-page img {
  width: 450px;
}
.button {
  @apply py-2 px-3 rounded-md font-medium cursor-pointer;
  &:focus {
    @apply outline-none shadow-outline;
  }
  &:not(button) {
    @apply text-center;
  }
  &.button--sm {
    @apply py-1 px-2;
  }
  &.button--lg {
    @apply py-3 px-4;
  }
}
</style>

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