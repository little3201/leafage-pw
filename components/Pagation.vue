<template>
  <div class="flex justify-center items-center space-x-6 mb-4 dark:text-gray-300">
    <button
      type="button"
      aria-label="descrease"
      @click="setPage(current > 1 ? current-- : 1)"
      class="disabled:opacity-25 focus:outline-none w-8 h-8 rounded-full hover:border dark:border-gray-300 border-gray-900 inline-flex items-center justify-center"
    >
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
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
    <button
      v-for="index in pages"
      :key="index"
      type="button"
      aria-label="give"
      @click="setPage(index)"
      class="w-8 h-8 rounded-full focus:outline-none border dark:border-gray-400 border-black hover:bg-black hover:text-gray-300"
      :class="{
        'bg-black text-white ': current == index,
      }"
    >{{ index }}</button>
    <button
      type="button"
      aria-label="increase"
      @click="setPage(current < pages ? current++ : pages)"
      class="disabled:opacity-25 focus:outline-none w-8 h-8 rounded-full hover:border dark:border-gray-300 border-gray-900 inline-flex items-center justify-center"
    >
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
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagation",

  props: {
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 12,
    },
  },

  data() {
    return {
      current: 1
    }
  },

  computed: {
    pages() {
      if (this.total <= 1) {
        return 1;
      } else if (this.total % this.size > 0) {
        return ~~(this.total / this.size) + 1;
      } else {
        return ~~(this.total / this.size);
      }
    }
  },

  methods: {
    setPage(p) {
      this.current = p;
      this.$emit('chagePage', this.current)
    }
  }

}
</script>