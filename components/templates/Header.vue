<template>
  <header class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div
      class="
        flex
        justify-between
        md:justify-start
        items-center
        border-black border-b-2
        py-3
        md:py-5
      "
    >
      <nav
        class="
          hidden
          md:flex
          space-x-6
          tracking-wide
          text-xs text-black
          uppercase
        "
      >
        <nuxt-link title="home" to="/" class="font-extrabold"> Home </nuxt-link>
        <nuxt-link title="portfolio" to="/portfolio" class="font-extrabold">
          Portfolio
        </nuxt-link>
        <nuxt-link title="about" to="/about" class="font-extrabold">
          About
        </nuxt-link>
        <nuxt-link
          title="contact"
          to="/contact"
          class="text-xs font-extrabold uppercase text-black"
        >
          Contact
        </nuxt-link>
      </nav>
      <div class="-my-2 md:hidden">
        <button
          type="button"
          aria-label="openMenu"
          @click="isOpen = !isOpen"
          class="m-2 items-center justify-center focus:outline-none"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div class="flex items-center justify-end md:flex-1">
        <a
          title="subscribe"
          class="
            text-gray-600
            flex
            items-center
            uppercase
            text-xs
            font-bold
            tracking-wide
          "
          href="#"
          rel="noopener"
          aria-label="subscribe"
        >
          <svg
            style="display: unset"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail mr-1"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Subscribe
        </a>
        <a
          title="searchOpen"
          class="ml-8 mr-2 lg:mr-0"
          href="javascript:;"
          aria-label="searchOpen"
          @click="isSearch = !isSearch"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>
      </div>
    </div>

    <div class="flex justify-center items-center h-32 md:h-40">
      <nuxt-link
        to="/"
        class="text-4xl tracking-widest font-black uppercase text-black"
      >
        <img src="/logo-only.png" alt="Leafage" class="w-16 h-16 mx-auto" />
        <h1>Leafage</h1>
      </nuxt-link>
    </div>
    <MobileMenu v-show="isOpen" @menuAction="menuOption" />
    <Search v-show="isSearch" @searchOption="searchOption" />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Header",

  setup() {
    const isOpen = ref(false);
    const isSearch = ref(false);

    const menuOption = (operate: boolean) => {
      isOpen.value = operate;
    };
    const searchOption = (operate: boolean) => {
      isSearch.value = operate;
    };

    return {
      isOpen,
      isSearch,

      menuOption,
      searchOption,
    };
  },
});
</script>