<template>
  <li>
    <a
      :href="href"
      :class="['block px-4 py-2 rounded-md', { 'bg-amber-100 text-amber-700': isActive }]"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    isActive: Boolean,
  },
}
</script>