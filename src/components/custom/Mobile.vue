<template>
  <div class="device iphone-x">
    <!-- 外部轮廓 -->
    <div class="frame">
      <div class="content">
        <div class="time">10:19</div>
        <vue-markdown :source="content" />
      </div>
    </div>
    <!-- 天线 -->
    <div class="stripe"></div>
    <!-- 听筒孔 -->
    <div class="header">
      <div class="sensors"></div>
    </div>
    <!-- 按键 -->
    <div class="btns"></div>
    <div class="power"></div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown"; //直接作为一个组件引入

export default {
  components: {
    VueMarkdown // 声明组件
  },
  data() {
    return {
      content: "## 敬请期待。。。"
    };
  },
  methods: {}
};
</script>

<style lang="less">
@import "./mobile.less";
.time {
  padding: 4px 20px;
}
</style>
