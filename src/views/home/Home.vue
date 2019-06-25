<template>
  <div name="home" class="layout">
    <a-layout id="home-layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo">
          <router-link to="/">
            <img class="logo" src="../../assets/abeille.png" />
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
            <a-menu-item key="help">
              <a-icon type="question-circle" />帮助
            </a-menu-item>
            <a-menu-item key="share">
              <a-icon type="share-alt" />分享
            </a-menu-item>
            <a-menu-item key="setting">
              <a-icon type="setting" />控制台
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{  background: '#fff', padding: '0', marginTop: '64px' }"
      >
        <div class="mini-program">
          <p class="mini-program-title">小程序+</p>
          <p class="mini-program-content">
            小程序主动打开放大倍数可达 5.55，为订阅号提升阅读量 20.28%。
            现在注册，我们将为有复杂需求的内容品牌，定制一份小程序建议方案。
          </p>
        </div>
        <div>
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        2018-2019 &copy; Abeille Group Ltd.
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import "./Home.less";
export default {
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
        case "help":
          this.$router.push({
            name: "help"
          });
          break;
        case "share":
          this.$router.push({
            name: "share"
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
  margin: 9px 24px 16px 0;
  float: left;
}
.ant-layout-header {
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}
.layout-nav {
  width: 385px;
  margin: 0 auto;
  margin-right: 0;
}
</style>
