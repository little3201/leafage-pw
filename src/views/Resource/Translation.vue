<template>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :xs="24" :sm="16" :md="15" :lg="14">
      <el-card style="margin-bottom: 20px;">
        <div style="display: flex;">
          <h3>
            <i class="el-icon-chat-line-square"></i>翻译文档
          </h3>
          <div style="flex-grow: 1;"></div>
          <el-link :underline="false" style="top: 4px;">查看原文</el-link>
        </div>
        <ul>
          <li v-for="index in 3" :key="index" style="display: flex;">
            <el-link :underline="false" class="topic">
              # 9012年了，是选择创业还是上班工作呢？ ｜ 话题</el-link>
            <div style="flex-grow: 1;"></div>
            <span class="count">100次围观</span>
          </li>
        </ul>
      </el-card>
    </el-col>
    <el-col :xs="0" :sm="8" :md="7" :lg="6">
      <el-card style="margin-bottom: 20px;">
        <div>
          <h3>
            <i class="el-icon-hot-water"></i>《Prometheus》
          </h3>
        </div>
        <div style="text-align: center;">
          目录在这里生成
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'introduce',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.el-link {
  justify-content: flex-start;
}
h3 {
  margin: 0;
  display: inline-block;
}
ul {
  padding: 0;
  list-style: none;
  li {
    margin: 10px 0;
  }
}
.count {
  font-size: 14px;
  color: #828a92;
}
i {
  margin-right: 5px;
}
</style>
