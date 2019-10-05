<template>
  <div :class="classObject" class="carousel">
    <!-- <h1>信息流通，共赢未来</h1> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "../../assets/destop.jpg"
    };
  },
  computed: {
    classObject: function() {
      return {
          backgroundImage: this.url
      };
    }
  }
};
</script>

<style lang="less">
.carousel {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
