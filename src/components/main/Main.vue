<template>
  <div class="layout">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%' }">
        <Menu mode="horizontal" theme="light" active-name="main">
          <div class="layout-logo">
            <router-link to="/">
              <img src="../../assets/logo.png" />
            </router-link>
          </div>
          <div class="layout-nav">
            <MenuItem name="main" to="/main">
              <Icon type="ios-ionic-outline" size="18" />
              看板
            </MenuItem>
            <Submenu name="user">
              <template slot="title">
                <Icon type="ios-contacts-outline" size="18" />
                用户
              </template>
              <MenuItem name="user-save" to="/user">第三方</MenuItem>
              <MenuItem name="user-profile">内部</MenuItem>
            </Submenu>
            <MenuItem name="permission">
              <Icon type="ios-lock-outline" size="18" />
              权限
            </MenuItem>
            <MenuItem name="settings">
              <Icon type="ios-settings-outline" size="18" />
              设置
            </MenuItem>
            <MenuItem name="sign">
              <Dropdown @on-click="directToSign">
                <Avatar class="avatar" size="small">强</Avatar>
                <DropdownMenu slot="list">
                  <DropdownItem name="profile">个人中心</DropdownItem>
                  <DropdownItem name="notice">通知消息</DropdownItem>
                  <DropdownItem name="item">待办事项</DropdownItem>
                  <DropdownItem name="signout" divided>
                    退出登录
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{ margin: '110px 20px 0', background: '#ffffff' }">
        <breadcrumb :list="breadCrumbList"></breadcrumb>
        <!-- 视图 -->
        <router-view />
      </Content>
      <Footer class="layout-footer-center">
        2018-2019 &copy; Abeille Group Ltd.
      </Footer>
    </Layout>
  </div>
</template>

<script>
import breadcrumb from "./bread-crumb/breadcrumb.vue";

export default {
  components: {
    breadcrumb
  },
  computed: {
    breadCrumbList() {
      return this.$store.state.app.breadCrumbList;
    }
  },
  methods: {
    directToSign(name) {
      switch (name) {
        case "profile":
          this.$router.push({
            name: "profile"
          });
          break;
        case "notice":
          this.$router.push({
            name: "notice"
          });
          break;
        default:
          this.$router.push({
            name: "sign"
          });
      }
    }
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 5px;
}
.layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-logo img {
  width: 100px;
  padding-bottom: 10px;
}
.layout-nav {
  width: 460px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
.ivu-menu-horizontal {
  height: 64px;
  line-height: 62px;
}
.ivu-layout-header {
  background: #ffffff;
  z-index: 1;
}
.bread-crumb {
  padding-bottom: 7px;
}
.ivu-menu-horizontal .ivu-menu-submenu {
  padding-right: 0px;
}
</style>
