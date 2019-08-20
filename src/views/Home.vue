<template>
  <div id="home">
    <a-carousel autoplay>
      <div>
        <img src="./../assets/gen.svg" />
      </div>
      <div>
        <img src="./../assets/gen-2.svg" />
      </div>
    </a-carousel>
    <div class="content">
      <div>
        <p class="title">Abeille 小程序+</p>
        <p class="description">
          小程序主动打开放大倍数可达 5.55，为订阅号提升阅读量 20.28%
          <br />
          现在注册，我们将为有复杂需求的内容品牌，定制一份小程序建议方案
        </p>
        <a-button size="large" :style="{ marginTop: '30px' }">
          立即使用
        </a-button>
      </div>
    </div>
    <div :style="{ margin: '100px auto' }">
      <a-row>
        <a-col :span="12">
          <div class="leftDiv">
            <img src="../assets/book.png" />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="rightDiv">
            <p class="title">用杂志小程序完整呈现你的品牌</p>
            <p class="description">
              聚合全平台精选内容，多种排版样式自由组合
              <br />
              自助配置 15 种品牌视觉元素
              <br />
              基于话题的社群互动，推送通知唤醒用户
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#home {
  border: 1px solid white;
}
.slick-slide img {
  border: 5px solid #ffffff;
  display: block;
  margin: auto;
  max-width: 90%;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  line-height: 160px;
  overflow: hidden;
}
.content {
  text-align: center;
}
.title {
  font-family: Wawati SC;
  font-size: 42px;
}
.description {
  font-size: 20px;
}
.groupDiv {
  margin: 100px auto;
}
.leftDiv {
  margin-right: -25px;
  background-color: #f6f7f7;
  height: 500px;
  width: 500px;
  float: right;
}
.rightDiv {
  float: left;
  margin-left: -25px;
  margin-top: 50px;
  background-color: #d4e2e9;
  height: 500px;
  width: 500px;
  padding: 50px;
}
</style>
