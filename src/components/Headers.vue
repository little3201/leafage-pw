<template>
  <el-header style="position: fixed; width: 100%; z-index: 3">
    <el-row type="flex" justify="space-around">
      <el-col :xs="24" :sm="6" style="padding: 1rem 3rem;">
        <router-link to="/">
          <img
            style="height: 3.5rem;"
            src="@/assets/logo.png"
          />
        </router-link>
      </el-col>
      <el-col :xs="0" :sm="18">
        <el-menu
          mode="horizontal"
          style="padding: 1rem 3rem; float: right;"
          :default-active="activeIndex"
          :router="true"
        >
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="/resource">
            <template slot="title">
              <i class="el-icon-reading"></i><span>资源</span>
            </template>
              <el-menu-item index="/technology">技术博客</el-menu-item>
              <el-menu-item index="/translation">翻译文档</el-menu-item>
              <el-menu-item index="/travel">旅行记录</el-menu-item>
          </el-submenu>
          <el-menu-item index="/introduce">
            <i class="el-icon-document"></i>
            <span slot="title">介绍</span>
          </el-menu-item>
          <el-menu-item index="/consol">
            <i class="el-icon-setting"></i>
            <span slot="title">控制台</span>
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
      drawer: false,
      direction: 'rtl'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu.el-menu--horizontal {
  border-bottom: 0;
  background: transparent;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 0;
}
.el-menu-item :hover {
  background-color: transparent;
}
.el-submenu.is-active .el-submenu__title {
  border-bottom: 0;
}
li span{
  font-size: 16px;
}
</style>
