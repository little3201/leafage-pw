<template>
  <div id="headers">
    <el-header :style="{ position: 'fixed', width: '100%' }">
      <el-row :span="24">
        <el-col :style="{ padding: '0 5rem' }">
          <div :style="{ float: 'left' }">
            <router-link to="/">
              <img
                :style="{
                  height: '40px',
                  marginTop: '10px'
                }"
                src="@/assets/logo.svg"
              />
            </router-link>
          </div>
          <div :style="{ float: 'right' }">
            <i class="el-icon-edit"></i>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      theme: 'light',
      visible: false
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
