<template>
  <div>
    <ve-map :style="{ maxWidth: '45rem' }" :data="chartData"></ve-map>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      chartData: {
        columns: ["位置", "用户数", "访问量", "提交量"],
        rows: [
          { 位置: "吉林", 用户数: 123, 访问量: 123, 提交量: 92134 },
          { 位置: "北京", 用户数: 1223, 访问量: 2123, 交量: 29234 },
          { 位置: "上海", 用户数: 2123, 访问量: 1243, 提交量: 94234 },
          { 位置: "浙江", 用户数: 4123, 访问量: 5123, 提交量: 29234 }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
