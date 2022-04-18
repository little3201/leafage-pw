<template>
  <div class="flex my-4">
    <figure class="shrink-0 mr-3 w-8 h-8 md:w-10 md:h-10">
      <img
        class="mt-4 rounded-full w-full h-full object-cover"
        :src="`/svg/${data.country ? data.country : 'china'}.svg`"
        :alt="data.location"
        height="32"
        width="32"
      />
      <figcaption
        class="text-gray-400 text-xs text-center my-2"
      >{{ data.country ? data.country.replace(data.country.substr(0, 1), data.country.substr(0, 1).toUpperCase()) : 'china' }}</figcaption>
    </figure>
    <div
      class="flex-1 border rounded px-4 py-2 md:px-6 md:py-4 leading-relaxed dark:text-gray-300 dark:border-gray-400"
    >
      <span class="text-xs text-gray-400 mr-4">{{ data.location ? data.location : '未知' }}</span>
      <span class="text-xs text-gray-400">{{ new Date(data.modifyTime).toLocaleString() }}</span>
      <p class="text-sm">{{ data.content }}</p>

      <div class="flex items-center justify-between mt-2">
        <div class="text-sm text-gray-400 font-semibold">
          <button
            type="button"
            @click="isOpen = !isOpen"
            class="inline-flex items-center focus:outline-none"
          >
            <span>{{ isOpen ? '取消' : '回复' }}</span>
          </button>
        </div>
        <div v-if="data.count > 0" class="inline-flex items-center">
          <div class="text-sm text-gray-400 font-semibold">
            {{ data.count }} Replies
            <button
              type="button"
              class="ml-4 focus:outline-none"
              @click="operation(isShow = !isShow, data.code)"
            >{{ isShow ? '收起评论' : '查看评论' }}</button>
          </div>
        </div>
      </div>
      <CommentForm
        :isShow="isOpen"
        :post="data.posts"
        :reply="data.code"
        @retrieve="retireveReplies"
      />
      <div v-show="isShow">
        <span class="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</span>
        <div v-if="data.count > 0" class="space-y-4">
          <CommentItem v-for="(reply, index) in replies" :key="index" :data="reply" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SERVER_URL } from "../../api/request";

export default {
  name: "CommentItem",

  props: {
    data: {
      type: Object,
      default: {},
    }
  },

  data() {
    return {
      isShow: false,
      isOpen: false,
      replies: []
    }
  },

  methods: {
    operation(show, code) {
      this.isShow = show
      if (show) {
        // 查询关联回复
        this.retireveReplies(code)
      }
    },
    retireveReplies(code) {
      this.$axios.get(`${SERVER_URL.comment}/${code}/replies`).then(res => this.replies = res.data)
    }
  }
}
</script>
