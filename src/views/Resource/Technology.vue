<template>
  <el-row type="flex">
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <div v-for="o in 4" :key="o">
          {{'列表内容 ' + o }}
        </div>
        <div slot="header">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'technology',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
