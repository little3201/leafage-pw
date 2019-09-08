<template>
  <div>
    <div class="photoHeader">记录世界的美</div>
    <a-row type="flex" justify="space-around" align="top">
      <a-col :span="1"></a-col>
      <a-col :span="6">
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
      </a-col>
      <a-col :span="6">
        <a-card hoverable>
          <img src="../assets/nature.jpg" slot="cover" />
          <a-card-meta title="金沙滩">
            <template slot="description">
              金灿灿的沙滩
            </template>
          </a-card-meta>
        </a-card>
        <a-card hoverable>
          <img src="../assets/beach.jpg" slot="cover" />
          <a-card-meta title="夕斜">
            <template slot="description">
              日落西山
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card hoverable>
          <img src="../assets/sun.jpg" slot="cover" />
          <a-card-meta title="日暮">
            <template slot="description">
              夕阳西下
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="1"></a-col>
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
