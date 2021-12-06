<template>
  <div class="md:flex items-center justify-center text-center lg:text-left border-t border-black">
    <img alt="error" class="w-full mx-auto my-4" src="~/static/error.svg" />
    <div v-if="error.statusCode === 404">
      <div class="intro-x text-6xl font-medium">{{ error.statusCode }}</div>
      <div class="intro-x text-xl lg:text-3xl font-medium">Oops. This page has gone missing.</div>
      <div
        class="intro-x text-lg mt-3"
      >You may have mistyped the address or the page may have moved.</div>
    </div>
    <div v-else>
      <div class="intro-x text-6xl font-medium">{{ error.statusCode }}</div>
      <div class="intro-x text-xl lg:text-3xl font-medium">Oops. Look likes somethins error.</div>
      <div class="intro-x text-lg mt-3">Refreh your requested page.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",

  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>