<template>
  <div name="home" class="layout">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%' }">
        <Menu mode="horizontal" theme="light" active-name="console">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="home" to="/">
              <Icon type="ios-home-outline" size="18"></Icon>
              首页
            </MenuItem>
            <MenuItem name="help">
              <Icon type="ios-help-circle-outline" size="18"></Icon>
              帮助
            </MenuItem>
            <MenuItem name="contact">
              <Icon type="ios-contact-outline" size="18"></Icon>
              联系我们
            </MenuItem>
            <MenuItem name="console">
              <Icon type="ios-cog-outline" size="18"></Icon>
              控制台
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content
        class="content"
        :style="{ margin: '70px 20px 0', background: '#fff' }"
      >
        Content
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
.layout-nav {
  width: 420px;
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
.bread-crumb {
  padding-bottom: 7px;
}
.content {
  height: 500px;
}
</style>
