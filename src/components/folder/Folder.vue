<template>
  <div :style="{ margin: '3rem auto' }">
    <a-row :gutter="24" type="flex" justify="center">
      <a-col :lg="5" :md="22">
        <author />
      </a-col>
      <a-col :lg="16" :md="22" :xs="21">
        <share />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Author from "@/views/article/Author.vue";
import Share from "@/views/Share.vue";

export default {
  components: {
    Author,
    Share
  },
  data() {
    return {};
  }
};
</script>

<style></style>
