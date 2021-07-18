<template>
  <section class="my-12">
    <div class="flex divide-y-2 divide-gray-400 divide-dotted">
      <h3 class="uppercase font-extrabold">Comments</h3>
      <span class="flex-1 w-full ml-4 mt-3"></span>
    </div>
    <form class="bg-gray-200 p-4 my-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2 md:col-span-1">
          <label class="text-gray-600">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            class="w-full p-2 mt-1 outline-none focus:ring-1"
            autocomplete="off"
          />
        </div>
        <div class="col-span-2 md:col-span-1">
          <label class="text-gray-600">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            class="w-full p-2 mt-1 outline-none focus:ring-1"
            autocomplete="off"
          />
        </div>
        <div class="col-span-2">
          <label class="text-gray-600">Your Message: </label>
          <textarea
            name="message"
            placeholder="Your Message"
            class="w-full p-2 mt-1 outline-none focus:ring-1"
            autocomplete="off"
          ></textarea>
        </div>
        <button
          aria-label="send_message"
          type="submit"
          class="
            text-white
            uppercase
            text-xs
            font-bold
            bg-gray-500
            py-3
            w-full
            md:w-1/2
            outline-none
          "
        >
          Send Message
        </button>
      </div>
    </form>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Comment",

  setup() {},
});
</script>