<template>
  <section class="container mx-auto">
    <div class="md:flex">
      <div class="w-full md:w-2/3">
        <div class="mb-12">
          <ul
            class="flex justify-between items-center text-center border border-black"
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
          <ListItem />
        </div>
        <TopThree />
        <ListItem />
        <LatestThree />
        <Pagation />
      </div>
      <SiderBar />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Posts",
});
</script>