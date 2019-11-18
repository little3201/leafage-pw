<template>
  <div id="headers">
    <a-layout-header :style="{ position: 'fixed', width: '100%' }">
      <a-row :span="24">
        <a-col :style="{ padding: '0 5rem' }">
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
            <a-icon
              @click="showDrawer"
              type="align-right"
              :style="{  margin: '22px 1rem', fontSize: '28px' }"
            />
          </div>
        </a-col>
        <!-- <a-col>
          <div :style="{ float: 'left', padding: '0 20px' }">
            <router-link to="/">
              <img
                :style="{
                  height: '40px',
                  marginLeft: '4rem',
                  marginTop: '10px'
                }"
                src="@/assets/logo.svg"
              />
            </router-link>
          </div>
          <div>
            <a-icon
              @click="showDrawer"
              type="bars"
              :style="{  margin: '18px 1rem', fontSize: '20px' }"
            />
          </div>
        </a-col> -->
      </a-row>
    </a-layout-header>
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

<style lang="less" scoped>
.ant-layout-header {
  background-color: transparent;
  padding: 0;
  z-index: 1;
}
</style>
