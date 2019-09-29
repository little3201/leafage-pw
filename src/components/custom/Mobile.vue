<template>
  <div class="device iphone-x">
    <!--    外部轮廓    -->
    <div class="frame frema">
      <div class="content">
        <div class="time">10:19</div>
        <vue-markdown v-marked :source="content" />
      </div>
    </div>
    <!--    天线    -->
    <div class="stripe"></div>
    <!--    听筒孔    -->
    <div class="header">
      <div class="sensors"></div>
    </div>
    <!--    按键    -->
    <div class="btns"></div>
    <div class="power"></div>
  </div>
</template>

<style lang="less">
@import "./mobile.less";
.time {
  padding: 4px 20px;
}
</style>
