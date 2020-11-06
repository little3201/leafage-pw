<template>
  <header>
    <nav class="inset-x-0 top-0 z-10" style="margin-bottom: -62px" :class="mode ? 'text-white' : ''">
      <div
        class="md:max-w-6xl xl:max-w-screen-xl md:mx-auto md:flex md:items-center md:justify-between"
      >
        <div class="p-4">
          <div
            class="flex justify-between items-center font-extrabold tracking-widest text-xl"
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
        <div class="p-4 hidden md:flex justify-between font-bold">
          <a
            id="hide-after-click"
            href="#about"
            class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-orange-600 transition duration-500"
            >Portfilio
          </a>
          <nuxt-link
            to="/blog"
            class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-orange-600 transition duration-500"
            >Blog
          </nuxt-link>
          <a
            id="hide-after-click"
            href="#about"
            class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-orange-600 transition duration-500"
            >About
          </a>
          <a
            href="#showcase"
            class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-orange-600 transition duration-500"
            >More
          </a>
        </div>
      </div>
    </nav>

    <!-- Opened Nav in Mobile -->
    <nav
      v-show="opened"
      class="fixed inset-x-0 md:hidden bg-black bg-opacity-75 h-full w-2/3 pt-16 text-white z-10"  style="margin-bottom: -62px"
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
    const mode = ref(false);

    return {
      opened,
      mode
    };

  },
});
</script>