<template>
  <div class="animate-pulse flex space-x-4">
    <div class="flex-1 space-y-4 py-1">
      <div class="h-4 bg-blue-400 rounded w-3/4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-blue-400 rounded"></div>
        <div class="h-4 bg-blue-400 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Skeleton",
});
</script>