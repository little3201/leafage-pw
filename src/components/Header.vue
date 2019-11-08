<template>
  <div>
    <Header :style="{position: 'fixed', width: '100%'}">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <MenuItem name="1">
            <Icon type="ios-home"></Icon>首页
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>介绍
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>资源
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-paper"></Icon>控制台
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>