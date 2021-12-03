<template>
  <div class="flex justify-center items-center space-x-6 mb-4">
    <button
      type="button"
      aria-label="descrease"
      @click="$emit('retrieve', curPage > 0 ? curPage-- : 0)"
      class="disabled:opacity-25 focus:outline-none w-8 h-8 rounded-full hover:border border-gray-900 inline-flex items-center justify-center"
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
      @click="(curPage = index - 1), $emit('retrieve', index - 1)"
      class="w-8 h-8 rounded-full focus:outline-none border border-black hover:bg-black hover:text-white"
      :class="{
        'bg-black text-white ': curPage == index - 1,
      }"
    >{{ index }}</button>
    <button
      type="button"
      aria-label="increment"
      @click="$emit('retrieve', curPage < pages - 1 ? curPage++ : pages)"
      class="disabled:opacity-25 focus:outline-none w-8 h-8 rounded-full hover:border border-gray-900 inline-flex items-center justify-center"
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
      default: 10,
    },
  },

  data() {
    return {
      curPage: 0
    }
  },

  computed: {
    pages: () => {
      // if (this.props.total < 1) {
      //   return 1;
      // } else if (this.props.total % this.props.size > 0) {
      //   return ~~(this.props.total / this.props.size) + 1;
      // } else {
      //   return ~~(this.props.total / this.props.size);
      // }
      1
    }
  }

}
</script>