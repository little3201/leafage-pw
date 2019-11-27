<template>
  <el-row type="flex" justify="center">
    <el-col>
      <el-header style="position: fixed; width: 100%;">
        <el-menu mode="horizontal" style="padding: 1rem 5rem;">
            <router-link to="/" style="float: left;">
              <img
                style="height: 40px; margin: 0.5rem auto;"
                src="@/assets/logo.svg"
              />
            </router-link>
            <i class="el-icon-s-operation" style="font-size: 28px; float: right; margin: 1rem auto;"></i>
        </el-menu>
      </el-header>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
    }
  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
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
