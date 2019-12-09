<template>
 <el-row :gutter="20" type="flex" justify="center">
    <el-col :xs="24" :sm="6" :md="5" v-for="index in 4" :key="index">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'travel',
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
