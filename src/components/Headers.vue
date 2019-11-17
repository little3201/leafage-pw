<template>
  <div id="headers">
    <a-row :span="24">
      <a-col :xs="0" :sm="24">
        <a-layout-header :style="{ position: 'fixed', width: '100%' }">
          <div :style="{ float: 'left', padding: '0 20px' }">
            <router-link to="/">
              <img
                :style="{
                  height: '40px',
                  marginLeft: '4rem',
                  marginTop: '10px'
                }"
                src="@/assets/logo.svg"
              />
            </router-link>
          </div>
<!--
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="home"> <a-icon type="home" />首页</a-menu-item>
            <a-menu-item key="introduce"> <a-icon type="appstore" />介绍</a-menu-item>
            <a-menu-item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer"
                >Navigation Four - Link</a
              >
            </a-menu-item>
          </a-menu>
-->
<!--
          <a-menu mode="horizontal" :theme="theme" selectedKeys="home">
            <div :style="{ float: 'left', padding: '0 20px' }">
              <router-link to="/">
                <img
                  :style="{
                    height: '40px',
                    marginLeft: '4rem',
                    marginTop: '10px'
                  }"
                  src="@/assets/logo.svg"
                />
              </router-link>
            </div>
            <div class="layout-nav">
              <a-menu-item key="home">
                <Icon type="ios-home" />首页
              </a-menu-item>
              <a-menu-item key="introduce">
                <Icon type="ios-book" />介绍
              </a-menu-item>
              <a-menu-item key="resource">
                <Icon type="ios-paper" />资源
              </a-menu-item>
              <a-menu-item key="console">
                <Icon type="ios-cog" />控制台
              </a-menu-item>
            </div>
          </a-menu>
-->
        </a-layout-header>
      </a-col>
<!--
      <a-col :xs="24" :sm="0">
        <a-layout-header :style="{ position: 'fixed', width: '100%' }">
          <a-menu mode="horizontal" :theme="theme">
            <a-row type="flex" justify="space-between">
              <a-icon
                @click="isShow = true"
                type="ios-menu"
                size="28"
                color="#ff9900"
                :style="{ margin: '20px 1rem' }"
              />
              <a-col span="8">
                <div :style="{ margin: '8px auto' }">
                  <router-link to="/">
                    <img :style="{ height: '33px', margin: '6px auto' }" src="@/assets/logo.svg" />
                  </router-link>
                </div>
              </a-col>
              <a-icon
                type="ios-search"
                size="28"
                color="#ff9900"
                :style="{ margin: '18px 1rem' }"
                @click="searchEvent"
              />
            </a-row>
          </a-menu>
        </a-layout-header>
        <a-drawer placement="left" :closable="false" v-model="isShow">
          <a-menu :theme="theme" :active-name="activeName" @on-select="menuActive">
            <a-menu-item name="home" to="/">
              <a-icon type="ios-home" size="16" />首页
            </a-menu-item>
            <a-menu-item name="introduce" to="/introduce">
              <a-icon type="ios-book" size="16" />介绍
            </a-menu-item>
            <a-menu-item name="resource" to="/resource">
              <a-icon type="ios-paper" size="16" />资源
            </a-menu-item>
            <a-menu-item name="console" to="/signin">
              <a-icon type="ios-cog" size="16" />控制台
            </a-menu-item>
          </a-menu>
        </a-drawer>
      </a-col>
-->
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'headers',
  props: {
    activeName: String
  },
  data () {
    return {
      theme: 'light',
      isShow: false
    }
  }
}
</script>

<style lang="less" scoped>
.ant-layout-header {
  background-color: transparent;
  padding: 0;
  z-index: 1;
}
.layout-nav {
  float: right;
  margin-right: 4rem;
}
</style>
