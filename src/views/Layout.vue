<template>
  <div name="home">
    <a-layout id="home-layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div>
          <router-link to="/">
            <img class="logo" src="../assets/logo.svg" />
          </router-link>
        </div>
        <div class="layout-nav">
          <a-menu
            theme="light"
            mode="horizontal"
            :openKeys="openKeys"
            :defaultSelectedKeys="['home']"
            :style="{ lineHeight: '62px' }"
            @click="changeMenu"
          >
            <a-menu-item key="home"><a-icon type="home" />首页</a-menu-item>
            <a-menu-item key="share">
              <a-icon type="share-alt" />技术博客
            </a-menu-item>
            <a-menu-item key="camera">
              <a-icon type="camera" />摄影分享
            </a-menu-item>
            <a-menu-item key="setting">
              <a-icon type="setting" />控制台
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          background: '#ffffff',
          padding: '0',
          marginTop: '34px'
        }"
      >
        <div :style="{ marginTop: '30px' }">
          <router-view />
        </div>
        <a-back-top />
      </a-layout-content>
      <!-- 底部布局 -->
      <g-footer />
    </a-layout>
  </div>
</template>

<script>
import GFooter from "@/components/main/GFooter.vue";

export default {
  components: {
    GFooter
  },
  data() {
    return {
      openKeys: ["home"]
    };
  },
  methods: {
    changeMenu(openKeys) {
      switch (openKeys.key) {
        case "share":
          this.$router.push({
            name: "share"
          });
          break;
        case "camera":
          this.$router.push({
            name: "photograph"
          });
          break;
        case "setting":
          this.$router.push({
            name: "main"
          });
          break;
        default:
          this.$router.push({
            name: "home"
          });
      }
    }
  }
};
</script>

<style scoped>
#home-layout .logo {
  height: 2rem;
  margin: 16px 10px 16px 10px;
  float: left;
}
.ant-layout-header {
  padding: 0 5rem;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}
.layout-nav {
  float: right;
}
</style>
