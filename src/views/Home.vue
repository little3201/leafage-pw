<template>
  <div name="home" class="layout">
    <Layout>
      <Header :style="{ width: '100%' }">
        <Menu mode="horizontal" theme="light" active-name="console">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="home" to="/">
              <Icon type="ios-home-outline" size="18"></Icon>
              首页
            </MenuItem>
            <MenuItem name="help" to="/help">
              <Icon type="ios-help-circle-outline" size="18"></Icon>
              帮助
            </MenuItem>
            <MenuItem name="contact">
              <Icon type="ios-contact-outline" size="18"></Icon>
              联系我们
            </MenuItem>
            <MenuItem name="console" to="/sign">
              <Icon type="ios-cog-outline" size="18"></Icon>
              控制台
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :arrow="false" :style="{ padding: '0 50px', background: '#ffffff' }">
        <Carousel autoplay v-model="value2" loop>
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">4</div>
          </CarouselItem>
        </Carousel>
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
  border-radius: 4px;
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
  width: 430px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
.ivu-layout-header {
  background-color: #ffffff;
}
</style>
