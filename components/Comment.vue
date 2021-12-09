<template>
  <div class="flex my-4">
    <div class="mt-6">
      <div class="items-center -mx-2 md:flex">
        <div class="w-full mx-2">
          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

          <input
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="text"
          />
        </div>

        <div class="w-full mx-2 mt-4 md:mt-0">
          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

          <input
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="email"
          />
        </div>
      </div>

      <div class="w-full mt-4">
        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>

        <textarea
          class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        ></textarea>
      </div>

      <div class="flex justify-center mt-6">
        <button
          class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >Send Message</button>
      </div>
    </div>

    <div class="flex-shrink-0 mr-3">
      <img
        class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
        :src="data.avatar"
        :alt="data.nickname"
        height="2rem"
        width="2rem"
      />
    </div>
    <div
      class="flex-1 border rounded px-4 py-2 sm:px-6 sm:py-4 leading-relaxed dark:text-gray-400 dark:border-gray-400"
    >
      <strong class="mr-4">{{ data.nickname }}</strong>
      <span class="text-xs text-gray-400">{{ new Date(data.modifyTime).toLocaleTimeString() }}</span>
      <p class="text-sm">{{ data.content }}</p>

      <div v-if="data.replies.length > 0" class="mt-4 flex items-center">
        <div class="flex -space-x-2 mr-2">
          <img
            v-for="reply in data.replies"
            class="rounded-full w-6 h-6 border border-gray-300"
            :src="reply.avatar"
            :alt="reply.nickname"
          />
        </div>
        <div class="text-sm text-gray-500 font-semibold">
          {{ data.replies.length }} Replies
          <button
            type="button"
            class="ml-4 focus:outline-none"
            @click="isShow = !isShow"
          >{{ isShow ? '收起评论' : '查看评论' }}</button>
        </div>
      </div>
      <h4
        v-show="isShow"
        class="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs"
      >Replies</h4>
      <div v-show="isShow" class="space-y-4">
        <Comment v-for="reply in data.replies" :data="reply" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    default: {},
  },
})

const isShow = ref(false)
</script>