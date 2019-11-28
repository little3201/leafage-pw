<template>
  <el-row type="flex" justify="center">
    <el-col>
      <el-header style="position: fixed; width: 100%; z-index: 3">
        <el-menu mode="horizontal" style="padding: 1rem 5rem;">
            <router-link to="/" style="float: left;">
              <img
                style="height: 3.5rem; margin: 0.5rem auto;"
                src="@/assets/logo.png"
              />
            </router-link>
            <i class="el-icon-menu" @click="drawer = true" style="font-size: 28px; float: right; margin: 1.5rem auto;"></i>
        </el-menu>
        <el-drawer :visible.sync="drawer" :with-header="false">
          <el-menu
            :default-active="activeIndex"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
          >
            <el-menu-item index="home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="resource">
              <template slot="title">
                <i class="el-icon-reading"></i>
                <span>资源</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="technology">
                  <i class="el-icon-document"></i>技术博客
                </el-menu-item>
                <el-menu-item index="translate">
                  <i class="el-icon-notebook-2"></i>翻译文档
                </el-menu-item>
                <el-menu-item index="travel">
                  <i class="el-icon-notebook-1"></i>旅行记录
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="introduce">
              <i class="el-icon-document"></i>
              <span slot="title">介绍</span>
            </el-menu-item>
            <el-menu-item index="consol">
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
  border-bottom: solid 0;
  background: transparent;
}
</style>
