<template>
  <nav class="fixed inset-y-0 right-0 flex z-10">
    <div class="w-64">
      <div class="h-full flex flex-col px-4 py-3 bg-gray-300 shadow-2xl overflow-y-scroll">
        <div class="flex justify-center items-center h-32 md:h-40">
          <nuxt-link
            to="/"
            class="text-4xl tracking-widest font-black uppercase text-black text-center"
          >
            <figure class="inline-flex justify-center">
              <nuxt-picture
                src="https://cdn.leafage.top/logo-only.png"
                alt="Leafage"
                width="48"
                height="48"
              />
            </figure>
            <h1>Leafage</h1>
          </nuxt-link>
        </div>
        <ul class="divide-y divide-gray-500 font-bold uppercase text-center my-8">
          <li class="my-4">
            <nuxt-link title="home_mobile" @click.native="$emit('menuAction', false)" to="/">Home</nuxt-link>
          </li>
          <li class="my-4 pt-4">
            <nuxt-link
              title="posts_mobile"
              @click.native="$emit('menuAction', false)"
              to="/posts"
            >Posts</nuxt-link>
          </li>
          <li class="my-4 pt-4">
            <nuxt-link
              title="about_mobile"
              @click.native="$emit('menuAction', false)"
              to="/about"
            >About</nuxt-link>
          </li>
          <li class="my-4 pt-4">
            <nuxt-link
              title="resource_mobile"
              @click.native="$emit('menuAction', false)"
              to="/resource"
            >Resource</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "MobileMenu",

  setup() {
  },
});
</script>