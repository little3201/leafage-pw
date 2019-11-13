<template>
  <div class="home">
    <Layout>
      <headers />
      <Contents />
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from "@/components/Headers.vue";
import Contents from "@/components/Contents.vue";

export default {
  name: "home",
  components: {
    Headers,
    Contents
  }
};
</script>
