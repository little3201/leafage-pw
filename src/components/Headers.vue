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
          <span>我来啦!</span>
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
    handleClose (done) {
      alert('点击了')
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
