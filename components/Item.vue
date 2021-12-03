<template>
  <NuxtLink :to="'/posts/detail/' + data.code" class="group">
    <div class="w-full aspect-w-3 aspect-h-2 bg-gray-300 overflow-hidden">
      <img
        :src="data.cover + '?imageMogr2/thumbnail/272x182/format/webp/interlace/1/blur/1x0/quality/100'"
        :alt="data.title"
        class="w-full h-full object-center object-cover group-hover:opacity-75"
        height="272"
        width="182"
      />
    </div>
    <div class="flex justify-between mt-4 text-sm uppercase text-gray-600 dark:text-gray-400">
      <h3>{{ data.category }}</h3>
      <span>{{ new Date(data.modifyTime).toLocaleDateString() }}</span>
    </div>
    <p
      class="my-3 md:text-md font-bold text-gray-800 dark:text-gray-300 group-hover:underline"
    >{{ data.title }}</p>
    <div class="flex justify-between text-xs text-gray-600 dark:text-gray-400">
      <div>
        <div class="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-eye mr-1"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {{ data.viewed }}
        </div>
        <div class="inline-flex items-center mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-message-square mr-1"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {{ data.comment }}
        </div>
        <div class="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-heart mr-1"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
          {{ data.likes }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "Item",

  props: {
    data: {
      type: Object,
      default: {},
    },
  }
}
</script>