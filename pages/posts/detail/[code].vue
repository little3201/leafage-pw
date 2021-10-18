<template>
    <div>
        <h1 class="text-5xl font-bold">{{ $route.params.code }}</h1>
    </div>
</template>

<script lang="ts" setup>
const { params } = useRoute()

</script>