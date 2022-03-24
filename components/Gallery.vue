<template>
  <div class="relative" :class="{ 'lg:col-span-2': aspect }">
    <NuxtLink :to="'/posts/detail/' + data.code" class="group">
      <figure
        class="h-full bg-gray-300 overflow-hidden"
        :class="{ 'aspect-w-16 aspect-h-9': aspect }"
      >
        <img
          :src="data.cover"
          class="w-full h-full object-cover object-center group-hover:opacity-75"
          :alt="data.title"
          :width="aspect ? 596 : 286"
          height="335"
        />
      </figure>
      <p
        class="p-4 text-xs uppercase leading-3 text-white absolute top-0 right-0"
      >{{ new Date(data.modifyTime).toLocaleDateString() }}</p>
      <div class="absolute bottom-0 left-0 p-4 md:p-6">
        <h2 class="text-lg font-semibold text-white group-hover:underline">{{ data.title }}</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Gallery",

  props: {
    data: {
      type: Object,
      default: {},
    },
    aspect: {
      type: Boolean,
      default: false
    }
  }
}
</script>