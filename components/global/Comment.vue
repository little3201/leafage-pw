<template>
  <section class="my-12">
    <div class="flex divide-y-2 divide-gray-400 divide-dotted">
      <h3 class="uppercase font-extrabold">Comments</h3>
      <span class="flex-1 w-full ml-4 mt-3"></span>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <form @submit.prevent="onSubmit" class="bg-gray-200 p-4 my-6">
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
        @click="onSubmit"
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
      </form>
      <ul>
        <li v-for="data in comments" :key="data.code">
          <span v-text="data.nickname"></span>
          <span v-text="data.content"></span>
        </li>
      </ul>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent, ref, useContext } from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Comment",

  props: {
    datas: {
      type: Array,
      default: []
    }
  },

  setup( props ) {
    const { $axios } = useContext();

    const comments = ref(props.datas);
    const comment = ref({});

    // 留言
    const onSubmit = async () => {
      const latest = await $axios.$post(SERVER_URL.comment, comment.value);
      comments.value.push(latest);
    };

    return { comment, comments, onSubmit };
  },
});
</script>