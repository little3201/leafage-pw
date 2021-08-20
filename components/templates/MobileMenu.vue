<template>
  <div class="px-2 mb-8">
    <ul class="divide-y divide-black font-bold uppercase text-center">
      <li class="my-2">
        <nuxt-link title="home_mobile" @click.native="$emit('menuAction', false)" to="/"
          >Home</nuxt-link
        >
      </li>
      <li class="my-2 pt-2">
        <nuxt-link title="posts_mobile" @click.native="$emit('menuAction', false)" to="/posts"
          >Posts</nuxt-link
        >
      </li>
      <li class="my-2 pt-2">
        <nuxt-link title="about_mobile" @click.native="$emit('menuAction', false)" to="/about"
          >About</nuxt-link
        >
      </li>
      <li class="my-2 pt-2">
        <nuxt-link
          title="resource_mobile"
          @click.native="$emit('menuAction', false)"
          to="/resource"
          >Resource</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "MobileMenu",
  
  setup() {
  },
});
</script>