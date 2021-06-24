<template>
  <div class="px-2 mb-8">
    <ul class="divide-y divide-black font-extrabold uppercase text-center">
      <li class="my-2">
        <nuxt-link title="home_mobile" @click.native="closeMenu" to="/"
          >Home</nuxt-link
        >
      </li>
      <li class="my-2 pt-2">
        <nuxt-link
          title="portfolio_mobile"
          @click.native="closeMenu"
          to="/portfolio"
          >Portfolio</nuxt-link
        >
      </li>
      <li class="my-2 pt-2">
        <nuxt-link title="about_mobile" @click.native="closeMenu" to="/about"
          >About</nuxt-link
        >
      </li>
      <li class="my-2 pt-2">
        <nuxt-link
          title="contact_mobile"
          @click.native="closeMenu"
          to="/contact"
          >Contact</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "MobileMenu",

  setup({ emit }) {
    const closeMenu = () => {
      emit("menuAction", false);
    };

    return { closeMenu };
  },
});
</script>