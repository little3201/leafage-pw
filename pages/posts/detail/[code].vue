<template>
    <div>
        <h2 class="text-5xl font-bold">{{ $route.params.code }}</h2>
    </div>
</template>

<script lang="ts" setup>
const { params } = useRoute()

</script>