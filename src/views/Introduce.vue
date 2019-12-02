<template>
  <el-container style="background-color: #ffffff;">
    <Headers :activeIndex="activeIndex"/>
    <el-main class="content">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <el-card :body-style="{ padding: '20px 40px' }">
            <h2>简介</h2>
            <p>还没想好写点啥</p>
            <h3>联系方式：</h3>
            <p>CSDN：https://me.csdn.net/zx110503</p>
            <p>GitHub：https://github.com/little3201</p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <Footers />
  </el-container>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'
import Footers from '@/components/Footers.vue'

export default {
  name: 'introduce',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      activeIndex: '/introduce'
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 60px;
  height: 100vh;
  background: #f8f8f8;
}
</style>
