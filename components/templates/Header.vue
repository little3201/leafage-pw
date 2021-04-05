<template>
  <header>
    <div class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
      <div
        class="flex justify-between items-center border-black py-3 md:py-5 md:justify-start"
        style="border-bottom-width: 3px"
      >
        <div class="-my-2 md:hidden">
          <button
            type="button"
            @click="isOpen = !isOpen"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
        <nav class="hidden md:flex space-x-6 tracking-wide">
          <nuxt-link to="/" class="text-xs font-extrabold uppercase text-black">
            Home
          </nuxt-link>
          <nuxt-link
            to="/portfolio"
            class="text-xs font-extrabold uppercase text-black"
          >
            Portfolio
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="text-xs font-extrabold uppercase text-black"
          >
            About
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="text-xs font-extrabold uppercase text-black"
          >
            Contact
          </nuxt-link>
        </nav>
        <div class="flex items-center justify-end md:flex-1">
          <a
            class="text-gray-600 flex items-center uppercase text-xs font-bold tracking-wide"
            href="#"
            title=""
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
          <a class="ml-8 mr-2 lg:mr-0" href="javascript:;" @click="isSearch = !isSearch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6d6d6d"
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
      <MobileMenu v-show="isOpen" />
      <Search v-show="isSearch" @searchOption="searchOption" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Header",

  data() {
    return {
      isOpen: false,
      isSearch: false
    };
  },

  methods:{
    searchOption(isSearch: boolean){
      this.isSearch = isSearch
    }
  }
});
</script>