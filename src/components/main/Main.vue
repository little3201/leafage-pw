<template>
  <div class="layout">
    <a-layout id="main-layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo">
          <router-link to="/">
            <img class="logo" src="../../assets/abeille.png">
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
              <a-icon type="dashboard"/>看板
            </a-menu-item>
            <a-menu-item key="user">
              <a-icon type="user"/>用户
            </a-menu-item>
            <a-menu-item key="share">
              <a-icon type="share-alt"/>资源
            </a-menu-item>
            <a-menu-item>
              <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">强</a-avatar>
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ background: '#fff', padding: '0', marginTop: '64px' }">
        <a-breadcrumb :routes="routes">
          <template slot="itemRender" slot-scope="{route, params, routes, paths}">
            <span v-if="routes.indexOf(route) === routes.length - 1">{{route.name}}</span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">{{route.name}}</router-link>
          </template>
        </a-breadcrumb>
        <div>
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">2018-2019 &copy; Abeille Group Ltd.</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    const { lang } = this.$route.params;
    return {
      basePath: "/${lang}/components/breadcrumb",
      openKeys: ["home"],
      routes: []
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
        case "user":
          this.$router.push({
            name: "user"
          });
          break;
        case "sign":
          this.$router.push({
            name: "sign"
          });
          break;
        default:
          this.$router.push({
            name: "main"
          });
      }
    },
    directToSign(name) {
      if (name == "signOut") {
        this.$router.push({
          name: "sign"
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
  margin-right: 0;
}
</style>
