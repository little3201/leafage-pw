<template>
  <header>
    <div class="container">
      <div class="top-bar">
        <div class="menu-btn">
          <a href="#" title="">
            <span class="bar1"></span>
            <span class="bar2"></span>
            <span class="bar3"></span>
          </a>
        </div>
        <!--menu-btn end-->
        <nav>
          <ul>
            <li><nuxt-link to="/" title="">Home</nuxt-link></li>
            <li><nuxt-link to="/blog" title="">Posts</nuxt-link></li>
            <li><nuxt-link to="/about" title="">About</nuxt-link></li>
            <li><nuxt-link to="/contact" title="">Contact</nuxt-link></li>
          </ul>
        </nav>
        <!--navigation end-->
        <div class="rt-subs">
          <a class="subscribe-btn" href="#" title=""
            ><i class="la la-envelope-o"></i> Subscribe</a
          >
          <a class="search-btn" href="#" title=""
            ><i class="la la-search"></i
          ></a>
        </div>
        <!--rt-subs end-->
        <div class="clearfix"></div>
      </div>
      <div class="bottom-header brb">
        <div class="container">
          <div class="logo">
            <h2><a href="#" title="">Heeney</a></h2>
          </div>
          <!-- logo end-->
        </div>
      </div>
      <!--bottom-header end-->
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Header",

  setup() {
    // soluations
    const cartOpen = ref(false);
    // more
    const isOpen = ref(false);
    // menu
    const menuOpen = ref(false);

    return {
      cartOpen,
      isOpen,
      menuOpen,
    };
  },
});
</script>
