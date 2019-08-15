<template>
  <div name="home">
    <a-layout id="home-layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo">
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
              <a-icon type="share-alt" />技术分享
            </a-menu-item>
            <a-menu-item key="camera">
              <a-icon type="camera" />摄影博客
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
          marginTop: '64px'
        }"
      >
        <div :style="{ marginTop: '30px' }">
          <router-view />
        </div>
        <a-back-top />
      </a-layout-content>
      <!-- 底部布局 -->
      <a-footer />
    </a-layout>
  </div>
</template>

<script>
import AFooter from "@/components/main/AFooter.vue";

export default {
  components: {
    AFooter
  },
  data() {
    return {
      openKeys: ["home"]
    };
  },
  watch: {
    openKeys(val) {
      this.openKeys.splice(val);
    }
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
  width: 120px;
  height: 31px;
  margin: 8px 24px 16px 10px;
  float: left;
}
.ant-layout-header {
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}
.layout-nav {
  float: right;
}
</style>
