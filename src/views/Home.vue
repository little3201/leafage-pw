<template>
  <div name="home" class="layout">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%' }">
        <Menu mode="horizontal" theme="light" active-name="home">
          <div class="layout-logo">
            <router-link to="/">
              <img src="../assets/logo.png" />
            </router-link>
          </div>
          <div class="layout-nav">
            <MenuItem name="home" to="/">
              <Icon type="ios-home-outline" size="18" />
              首页
            </MenuItem>
            <MenuItem name="help" to="/help">
              <Icon type="ios-help-circle-outline" size="18" />
              帮助
            </MenuItem>
            <MenuItem name="contact" to="/default">
              <Icon type="ios-contact-outline" size="18" />
              联系我们
            </MenuItem>
            <MenuItem name="console" to="/sign">
              <Icon type="ios-cog-outline" size="18" />
              控制台
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{ margin: '80px 20px 0', background: '#fff' }">
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
export default {};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 3px;
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
  width: 430px;
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
}
</style>
