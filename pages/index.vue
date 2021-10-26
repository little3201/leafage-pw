<template>
    <div id="home">
        <!-- <Hero :datas="recentDatas" />
        <Featured :datas="recentDatas" />-->
        <CommonMain />
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