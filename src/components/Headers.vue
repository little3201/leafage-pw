<template>
  <el-row type="flex" justify="center">
    <el-col>
      <el-header style="position: fixed; width: 100%; z-index: 3">
        <el-menu mode="horizontal" style="padding: 1rem 5rem;">
            <router-link to="/" style="float: left;">
              <img
                style="height: 40px; margin: 0.5rem auto;"
                src="@/assets/logo.png"
              />
            </router-link>
            <i class="el-icon-menu" @click="drawer = true" style="font-size: 28px; float: right; margin: 1rem auto;"></i>
        </el-menu>
        <el-drawer :visible.sync="drawer" :with-header="false">
          <el-menu
            default-active="2"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-reading"></i>
                <span>资源</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">技术文档</el-menu-item>
                <el-menu-item index="1-1">翻译文档</el-menu-item>
                <el-menu-item index="1-2">游行博客</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">介绍</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">控制台</span>
            </el-menu-item>
          </el-menu>
        </el-drawer>
      </el-header>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'headers',
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
  border-bottom: solid 0;
  background: transparent;
}
</style>
