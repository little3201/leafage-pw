<template>
  <div class="layout">
    <a-layout id="main-layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo">
          <router-link to="/">
            <img class="logo" src="../../assets/logo.svg" />
          </router-link>
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
              <a-icon type="folder" />文章管理
            </a-menu-item>
            <a-menu-item key="appstore">
              <a-icon type="appstore" />资源管理
            </a-menu-item>
          </a-menu>
        </div>
        <avatar />
      </a-layout-header>
      <a-layout-content
        :style="{ background: '#ff', padding: '0', marginTop: '64px' }"
      >
        <div>
          <router-view />
        </div>
      </a-layout-content>
      <abeille-footer />
    </a-layout>
  </div>
</template>

<script>
// components
import Avatar from "@/components/avatar/Avatar.vue";
import AbeilleFooter from "@/components/main/Footer.vue";

export default {
  components: {
    Avatar,
    AbeilleFooter
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
  width: 120px;
  height: 31px;
  margin: 9px 24px 16px 0;
  float: left;
}
.ant-layout-header {
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}
.layout-nav {
  width: 350px;
  margin: 0 auto;
  float: left;
}
</style>
