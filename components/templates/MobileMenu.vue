<template>
  <div class="px-2 mb-8">
    <ul class="divide-y divide-black font-extrabold uppercase text-center">
      <li class="my-2"><nuxt-link @click.native="closeMenu" to="/">Home</nuxt-link></li>
      <li class="my-2 pt-2">
        <nuxt-link @click.native="closeMenu" to="/portfolio">Portfolio</nuxt-link>
      </li>
      <li class="my-2 pt-2"><nuxt-link @click.native="closeMenu" to="/about">About</nuxt-link></li>
      <li class="my-2 pt-2"><nuxt-link @click.native="closeMenu" to="/contact">Contact</nuxt-link></li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MobileMenu",

  methods: {
    closeMenu() {
      this.$emit("menuAction", false);
    },
  }
});
</script>