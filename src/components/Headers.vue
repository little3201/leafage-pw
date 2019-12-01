<template>
  <el-header style="position: fixed; width: 100%; z-index: 3">
    <el-row type="flex" justify="center">
      <el-col>
        <el-menu
          mode="horizontal"
          :default-active="activeIndex"
          :router="true"
          style="width: 100%;"
        >
          <el-menu-item>
            <router-link to="/">
              <img
                style="height: 3rem;"
                src="@/assets/logo.png"
              />
            </router-link>
          </el-menu-item>
          <!-- 这里设置了菜单靠右布局，所以菜单倒着排列 -->
          <el-menu-item index="/consol" style="float: right">
            <i class="el-icon-setting"></i>
            <span slot="title">控制台</span>
          </el-menu-item>
          <el-menu-item index="/introduce" style="float: right">
            <i class="el-icon-document"></i>
            <span slot="title">介绍</span>
          </el-menu-item>
          <el-submenu index="/resource" style="float: right">
            <template slot="title">
              <i class="el-icon-reading"></i><span>资源</span>
            </template>
            <el-menu-item index="/technology">技术博客</el-menu-item>
            <el-menu-item index="/translation">翻译文档</el-menu-item>
            <el-menu-item index="/travel">旅行记录</el-menu-item>
          </el-submenu>
          <el-menu-item index="/" style="float: right">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: 'headers',
  props: ['activeIndex'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.el-menu.el-menu--horizontal {
  border-bottom: 0;
  background: transparent;
}
li span{
  font-size: 16px;
}
</style>
