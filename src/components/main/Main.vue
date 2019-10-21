<template>
  <div id="main">
    <a-layout id="main-layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div>
          <router-link to="/">
            <img class="logo" src="../../assets/logo.svg" />
          </router-link>
        </div>
        <div class="avatar">
          <avatar />
        </div>
        <div class="layout-nav">
          <a-menu
            theme="light"
            mode="horizontal"
            :openKeys="openKeys"
            :defaultSelectedKeys="['dashbord']"
            :style="{ lineHeight: '62px' }"
            @click="changeMenu"
          >
            <a-menu-item key="dashbord">
              <a-icon type="dashboard" />看板
            </a-menu-item>
            <a-menu-item key="folder">
              <a-icon type="folder" />博文管理
            </a-menu-item>
            <a-menu-item key="appstore">
              <a-icon type="appstore" />分享管理
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{ background: '#ffffff', padding: '0', marginTop: '64px' }"
      >
        <router-view />
      </a-layout-content>
      <!-- 底部布局 -->
      <g-footer />
    </a-layout>
  </div>
</template>

<script>
// components
import Avatar from "@/components/avatar/Avatar.vue";
import GFooter from "@/components/main/GFooter.vue";

export default {
  components: {
    Avatar,
    GFooter
  },
  data() {
    return {
      openKeys: ["dashboard"]
    };
  },
  beforeCreate() {
    this.routes = this.$router.options.routes;
  },
  watch: {
    openKeys(val) {
      this.openKeys.splice(val);
    }
  },
  methods: {
    changeMenu(openKeys) {
      switch (openKeys.key) {
        case "folder":
          this.$router.push({
            name: "folder"
          });
          break;
        case "dashboard":
          this.$router.push({
            name: "dashboard"
          });
          break;
        default:
          this.$router.push({
            name: "main"
          });
      }
    }
  }
};
</script>

<style scoped>
#main-layout .logo {
  height: 2rem;
  margin: 16px 10px 16px 10px;
  float: left;
}
.ant-layout-header {
  padding: 0px 5rem;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}
.layout-nav {
  float: right;
}
.avatar {
  float: right;
}
</style>
