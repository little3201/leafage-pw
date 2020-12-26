<template>
  <section class="container mx-auto">
    <div class="md:flex">
      <div class="w-full md:w-2/3">
        <div class="mb-12">
          <ul
            class="flex justify-between items-center text-center border-black"
            style="border-width: 1px"
            id="myTab"
            role="tablist"
          >
            <li class="bg-black text-white w-1/3">
              <button class="w-full h-10 text-xs font-bold uppercase">
                Trending
              </button>
            </li>
            <li class="w-1/3">
              <button class="w-full h-10 text-xs font-bold uppercase">
                Most View
              </button>
            </li>
            <li class="w-1/3">
              <button class="w-full h-10 text-xs font-bold uppercase">
                Popular
              </button>
            </li>
          </ul>

          <Common :datas="datas" />
          <!--tab-content end-->
        </div>
        <!--blog-section end-->
        <Top :datas="topDatas" />
        <!--blog-section end-->
        <Common :datas="datas" />
        <!--blog-section end-->
        <Latest :datas="datas" />
        <!--blog-section end-->
        
        <!--blog-section end-->
        <div class="mb-12">
          <ul class="flex justify-center items-center">
            <li class="mx-4">
              <button class="disabled:opacity-25" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </li>
            <li class="mx-4">
              <button
                class="w-8 h-8 bg-black text-white rounded-full border border-black"
              >
                1
              </button>
            </li>
            <li class="mx-4">
              <button
                class="w-8 h-8 rounded-full border border-black hover:bg-black hover:text-white"
              >
                2
              </button>
            </li>
            <li class="mx-4">
              <button
                class="w-8 h-8 rounded-full border border-black hover:bg-black hover:text-white"
              >
                3
              </button>
            </li>
            <li class="mx-4">
              <button class="disabled:opacity-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <!--heeney-pagination end-->
      </div>
      <SiderBar :trendingDatas="trendingDatas" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Common from "./Common.vue";

export default defineComponent({
  components: { Common },
  name: "Posts",

  props: {
    datas: Array,
    topDatas: Array,
    trendingDatas: Array,
  },
});
</script>