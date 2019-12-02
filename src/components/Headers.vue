<template>
  <el-header class="headers">
    <el-row type="flex" justify="center">
      <el-col>
        <!-- 根据flex布局，设置父容器display为flex，然后设置flex-grow就可以实现左右贴边 -->
        <el-menu
          mode="horizontal"
          :default-active="activeIndex"
          :router="true"
          style="width: 100%; display: flex;"
        >
          <el-menu-item>
            <router-link to="/" style="line-height: initial;">
              <img
                style="height: 3rem;"
                src="@/assets/logo.png"
              />
            </router-link>
          </el-menu-item>
          <div style="flex-grow: 1;"></div>
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
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.headers {
  position: fixed;
  width: 100%;
  z-index: 3;
}
.el-header{
  padding: 0 60px;
}

li {
  span{
    font-size: 1rem;
  }
}
</style>
