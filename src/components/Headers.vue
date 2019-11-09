<template>
  <div id="header" class="layout">
    <Header :style="{position: 'fixed', width: '100%'}" v-if="!isShow">
      <Menu mode="horizontal" :theme="theme" active-name="home">
        <div class="layout-nav">
          <MenuItem name="home">
            <Icon type="ios-home" size="20"></Icon>首页
          </MenuItem>
          <MenuItem name="introduce">
            <Icon type="ios-book" size="20"></Icon>介绍
          </MenuItem>
          <MenuItem name="resource">
            <Icon type="ios-paper" size="20"></Icon>资源
          </MenuItem>
          <MenuItem name="console">
            <Icon type="ios-cog" size="20"></Icon>控制台
          </MenuItem>
        </div>
      </Menu>
    </Header>
    <Button @click="isShow = true" type="primary">Open</Button>
    <Drawer placement="left" :closable="false" v-model="isShow">
      <Menu :theme="theme">
        <MenuItem name="home">
          <Icon type="ios-home"></Icon>首页
        </MenuItem>
        <MenuItem name="introduce">
          <Icon type="ios-book"></Icon>介绍
        </MenuItem>
        <MenuItem name="resource">
          <Icon type="ios-paper"></Icon>资源
        </MenuItem>
        <MenuItem name="console">
          <Icon type="ios-cog"></Icon>控制台
        </MenuItem>
      </Menu>
    </Drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Headers extends Vue {
  private theme: string = 'light'
  private isShow: boolean = false
}
</script>

<style lang="less" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #2c3e50;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>