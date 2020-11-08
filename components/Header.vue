<template>
  <header>
    <nav class="inset-x-0 top-0 z-10">
      <div
        class="max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
      >
        <div class="p-4">
          <div
            class="flex justify-between items-center tracking-widest font-semibold"
          >
            <a href="/" class="duration-500 hover:text-orange-600">ABEILLE</a>
            <!-- Burger Nav Button on Mobile -->
            <div
              id="nav-open"
              class="inline-block cursor-pointer md:hidden"
              @click="opened = !opened"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>

        <!-- Nav Items Working on Tablet & Bigger Sceen -->
        <div class="p-4 hidden md:flex justify-between text-center font-semibold">
          <a
            id="hide-after-click"
            href="#about"
            class="mx-4 border-b-2 border-transparent hover:border-b-2 hover:border-orange-600 transition duration-500"
            >Portfilio
          </a>
          <nuxt-link
            to="/blog"
            class="mx-4 border-b-2 border-transparent hover:border-b-2 hover:border-orange-600 transition duration-500"
            >Blog
          </nuxt-link>
          <a
            id="hide-after-click"
            href="#about"
            class="mx-4 border-b-2 border-transparent hover:border-b-2 hover:border-orange-600 transition duration-500"
            >About
          </a>
          <a
            href="#showcase"
            class="mx-4 border-b-2 border-transparent hover:border-b-2 hover:border-orange-600 transition duration-500"
            >More
          </a>
        </div>
        
        <div class="relative md:flex justify-between text-gray-600">
          <input name="serch" placeholder="Search" class="bg-gray-200 w-32 h-8 px-5 pr-10 rounded-full text-sm focus:outline-none">
          <button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Opened Nav in Mobile -->
    <nav
      v-show="opened"
      class="top-0 fixed inset-x-0 md:hidden bg-black bg-opacity-75 h-full w-2/3 pt-16 text-white z-10"  style="margin-bottom: -62px"
    >
      <div class="p-2 divide-y divide-gray-600 flex flex-col">
        <a href="#about" class="p-2 font-semibold hover:text-orange-700"
          >Portfilio
        </a>
        <a href="/blog" class="p-2 font-semibold hover:text-orange-700"
          >Blog
        </a>
        <a href="#whyus" class="p-2 font-semibold hover:text-orange-700"
          >About
        </a>
        <a href="#showcase" class="p-2 font-semibold hover:text-orange-700"
          >More
        </a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "@vue/composition-api";

export default defineComponent({
  name: 'Header',
  
  setup() {
    const opened = ref(false);

    return {
      opened
    };

  },
});
</script>
