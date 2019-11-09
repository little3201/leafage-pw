<template>
  <div id="header">
    <Row :span="24">
      <Col :xs="0" :sm="24">
        <Header :style="{ position: 'fixed', width: '100%' }">
          <Menu mode="horizontal" :theme="theme" active-name="home">
            <div :style="{ float: 'left' }">
              <router-link to="/">
                <img
                  :style="{
                    height: '30px',
                    marginLeft: '60px',
                    marginTop: '14px'
                  }"
                  src="../assets/logo.svg"
                />
              </router-link>
            </div>
            <div class="layout-nav">
              <MenuItem name="home"><Icon type="ios-home" />首页</MenuItem>
              <MenuItem name="introduce"><Icon type="ios-book" />介绍</MenuItem>
              <MenuItem name="resource"><Icon type="ios-paper" />资源</MenuItem>
              <MenuItem name="console"><Icon type="ios-cog" />控制台</MenuItem>
            </div>
          </Menu>
        </Header>
      </Col>
      <Col :xs="24" :sm="0">
        <Header :style="{ position: 'fixed', width: '100%' }">
          <Menu mode="horizontal" :theme="theme" active-name="home">
            <Row type="flex" justify="space-between">
              <Icon
                @click="isShow = true"
                type="ios-menu"
                size="28"
                :style="{ margin: '18px 1rem' }"
              />
              <Col span="8">
                <div :style="{ margin: '8px auto' }">
                  <router-link to="/">
                    <img :style="{ height: '26px' }" src="../assets/logo.svg" />
                  </router-link>
                </div>
              </Col>
              <Icon
                type="ios-search"
                size="28"
                :style="{ margin: '18px 1rem' }"
              />
            </Row>
          </Menu>
        </Header>
        <Drawer placement="left" :closable="false" v-model="isShow">
          <Menu :theme="theme">
            <MenuItem name="home"><Icon type="ios-home" />首页</MenuItem>
            <MenuItem name="introduce"><Icon type="ios-book" />介绍</MenuItem>
            <MenuItem name="resource"><Icon type="ios-paper" />资源</MenuItem>
            <MenuItem name="console"><Icon type="ios-cog" />控制台</MenuItem>
          </Menu>
        </Drawer>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Headers extends Vue {
  private theme: string = "light";
  private isShow: boolean = false;
}
</script>

<style lang="less" scoped>
.ivu-layout-header {
  background-color: #fff;
  padding: 0;
  z-index: 1;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
