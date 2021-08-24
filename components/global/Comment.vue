<template>
  <section class="my-10">
    <div class="flex divide-y-2 divide-gray-400 divide-dotted">
      <h3 class="uppercase font-bold">Comments</h3>
      <span class="flex-1 w-full ml-4 mt-3"></span>
    </div>
    <form class="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-200 p-4 my-6">
      <div>
        <label class="text-gray-600">Nickname:</label>
        <input
          type="text"
          name="nickname"
          v-model="formData.nickname"
          placeholder="Nickname"
          required
          class="w-full p-2 mt-1 outline-none focus:ring-1"
          autocomplete="off"
        />
      </div>
      <div>
        <label class="text-gray-600">Email:</label>
        <input
          type="email"
          name="email"
          v-model="formData.email"
          placeholder="Email"
          required
          class="w-full p-2 mt-1 outline-none focus:ring-1"
          autocomplete="off"
        />
      </div>
      <div class="lg:col-span-2">
        <label class="text-gray-600">Your Message:</label>
        <textarea
          name="content"
          v-model="formData.content"
          placeholder="Your Message"
          class="w-full p-2 mt-1 outline-none focus:ring-1"
          autocomplete="off"
        ></textarea>
      </div>
      <button
        @click="onSubmit"
        aria-label="send_comment"
        type="submit"
        class="text-white uppercase text-xs font-bold bg-gray-500 py-3 w-full outline-none"
      >Submit Comment</button>
    </form>
    <ul
      v-if="comments && comments.length > 0"
      class="w-full bg-gray-200 p-4 my-6 divide-y divide-gray-300"
    >
      <li v-for="comment in comments" :key="comment.code" class="py-4">
        <div class="flex justify-between text-xs">
          <span class="font-bold" v-text="comment.nickname + '：'"></span>
          <span class="text-gray-400">{{ new Date(comment.modifyTime).toLocaleDateString() }}</span>
        </div>
        <p class="ml-4 mt-1" v-text="comment.content"></p>
      </li>
    </ul>
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
      default: [],
    },
    code: {
      type: String,
      default: undefined,
    },
  },

  setup(props) {
    const { $axios } = useContext();

    const comments = ref(props.datas);
    const formData = ref({});

    // 留言
    const onSubmit = async () => {
      let data = { ...formData.value, posts: props.code };
      const latest = await $axios.$post(SERVER_URL.comment, data);
      comments.value.push(latest);
      formData.value = {}
    };

    return { formData, comments, onSubmit };
  },
});
</script>