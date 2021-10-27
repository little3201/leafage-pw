<template>
    <div>
        <CommonHero />
        <div class="flex justify-between">
            <CommonMain />
            <LayoutAside />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    layout: "default"
};
</script>


<script lang="ts" setup>
// const { data: recentPosts } = await useAsyncData('count', () => $fetch('/api/posts'))
</script>