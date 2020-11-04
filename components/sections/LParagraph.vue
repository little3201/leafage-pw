<template>
  <section class="text-black">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          :src="url"
        />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black"
        >
          {{ title }}
          <br class="hidden lg:inline-block" />goes here.
        </h1>
        <p class="mb-8 leading-relaxed">
          {{ content }}
        </p>
        <div class="flex justify-center">
          <button
            class="border-2 border-black text-black rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-white hover:text-indigo-500 transition ease-in-out duration-700"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: 'LParagraph',
  
  props: {
    url: String,
    title: String,
    content: String
  }
})
</script>