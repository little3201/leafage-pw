<template>
  <div class="layout">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%' }">
        <Menu mode="horizontal" theme="light" active-name="settings">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="dashbord" to="/main">
              <Icon type="ios-ionic-outline" size="18"></Icon>
              看板
            </MenuItem>
            <Submenu name="user">
              <template slot="title">
                <Icon type="ios-contacts-outline" size="18"></Icon>
                用户
              </template>
              <MenuItem name="user-save" to="/user">第三方</MenuItem>
              <MenuItem name="user-profile">内部</MenuItem>
            </Submenu>
            <MenuItem name="permission">
              <Icon type="ios-lock-outline" size="18"></Icon>
              权限
            </MenuItem>
            <MenuItem name="settings">
              <Icon type="ios-settings-outline" size="18"></Icon>
              设置
            </MenuItem>
            <MenuItem name="sign">
              <Dropdown @on-click="directToSign">
                <Avatar class="avatar" size="small">强</Avatar>
                <DropdownMenu slot="list">
                  <DropdownItem name="notice">通知</DropdownItem>
                  <DropdownItem name="item">待办事项</DropdownItem>
                  <DropdownItem name="sign-out" divided>
                    退出登录
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{ margin: '70px 20px 0', background: '#ffffff' }">
        <Breadcrumb class="bread-crumb" :style="{ background: '#f5f7f9' }">
          <BreadcrumbItem to="/">
            <Icon type="ios-settings-outline"></Icon> 设置
          </BreadcrumbItem>
          <BreadcrumbItem to="/components/breadcrumb">
            <Icon type="ios-key-outline"></Icon> 修改密码
          </BreadcrumbItem>
        </Breadcrumb>
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
export default {
  methods: {
    directToSign(name) {
      if (name == "sign-out") {
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
.ivu-layout-content {
  min-height: 580px;
  height: calc(100% - 50px - 20px);
}
.bread-crumb {
  padding-bottom: 7px;
}
.ivu-menu-horizontal .ivu-menu-submenu {
  padding-right: 0px;
}
</style>
