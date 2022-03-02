<template>
  <div class="flex my-4">
    <div class="flex-shrink-0 mr-3">
      <img
        class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
        :src="data.avatar || '/avatar.svg'"
        :alt="data.nickname"
        height="2rem"
        width="2rem"
      />
    </div>
    <div
      class="flex-1 border rounded px-4 py-2 sm:px-6 sm:py-4 leading-relaxed dark:text-gray-400 dark:border-gray-400"
    >
      <strong class="mr-4">{{ data.nickname }}</strong>
      <span
        class="text-xs text-gray-400"
      >{{ new Date(data.modifyTime).toLocaleString('zh', { hour12: false }) }}</span>
      <p class="text-sm">{{ data.content }}</p>

      <div class="flex items-center justify-between mt-2">
        <!-- <div class="text-sm text-gray-500 font-semibold">
          <button type="button" class="inline-flex items-center focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-message-square mr-1"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>回复</span>
          </button>
        </div> -->
        <div v-if="data.replies" class="mt-4 flex items-center">
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
      </div>
      <h4
        v-show="isShow"
        class="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs"
      >Replies</h4>
      <div v-show="isShow" class="space-y-4">
        <Comment v-for="reply in data.replies" :key="reply.code" :data="reply" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",

  props: {
    data: {
      type: Object,
      default: {},
    }
  },

  data() {
    return { isShow: false }
  }
}
</script>