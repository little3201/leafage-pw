<template>
  <div id="headers">
    <el-header :style="{ position: 'fixed', width: '100%' }">
      <el-menu mode="horizontal" style="padding: 0 5rem">
          <router-link to="/" style="float: left">
            <img
              style="height: 3rem"
              src="@/assets/logo.svg"
            />
          </router-link>
          <i class="el-icon-s-operation" style="font-size: 28px; float: right; margin: 10px auto; color: #FFC107"></i>
      </el-menu>
    </el-header>
  </div>
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
.ant-layout-header {
  background: transparent;
  padding: 0;
  z-index: 1;
}
</style>
