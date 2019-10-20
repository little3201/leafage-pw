<template>
  <div :style="{ margin: '3rem auto' }">
    <a-row :gutter="24" type="flex" justify="space-around" align="top">
      <a-col :xs="20" :sm="16" :md="12" :lg="6">
        <a-card hoverable>
          <img src="../assets/beach.jpg" slot="cover" />
          <a-card-meta title="夕斜">
            <template slot="description">
              日落西山
            </template>
          </a-card-meta>
        </a-card>
        <a-card hoverable>
          <img src="../assets/sun.jpg" slot="cover" />
          <a-card-meta title="日暮">
            <template slot="description">
              夕阳西下
            </template>
          </a-card-meta>
        </a-card>
        <a-card hoverable>
          <img src="../assets/nature.jpg" slot="cover" />
          <a-card-meta title="金沙滩">
            <template slot="description">
              金灿灿的沙滩
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.ant-card {
  margin: 30px auto;
}
.photoHeader {
  height: 200px;
  font-size: 34px;
  text-align: center;
}
</style>
