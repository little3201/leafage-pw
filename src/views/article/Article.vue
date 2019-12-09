<template>
  <el-container style="background-color: #ffffff;">
    <Headers :activeIndex="activeIndex"/>
    <el-main class="content">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <el-card :body-style="{ padding: '20px 40px' }">
            <h2>人生</h2>
            <p>好嗨呦</p>
            <h3>感觉人生已经到达了高潮</h3>
            <p>感觉人生已经到达了巅峰</p>
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
  name: 'article',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      activeIndex: '/technology'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #ffffff;
}
.content {
  margin-top: 60px;
  background: #f8f8f8;
}
</style>
