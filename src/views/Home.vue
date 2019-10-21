<template>
  <div id="home">
    <a-carousel autoplay>
      <div class="first"></div>
      <div class="second"></div>
    </a-carousel>
    <div class="content">
      <div>
        <p class="title">Abeille 小程序+</p>
        <p class="description">
          小程序主动打开放大倍数可达 5.55，为订阅号提升阅读量 20.28%
          <br />现在注册，我们将为有复杂需求的内容品牌，定制一份小程序建议方案
        </p>
        <a-button size="large" :style="{ marginTop: '2rem' }">
          立即使用
        </a-button>
      </div>
    </div>
    <div :style="{ margin: '5rem auto' }">
      <a-row :gutter="24" type="flex" justify="center">
        <a-col :lg="10" :md="20" :xs="22">
          <div class="leftDiv">
            <img src="../assets/book.png" />
          </div>
        </a-col>
        <a-col :lg="10" :md="20" :xs="22">
          <div class="rightDiv">
            <p class="title">用杂志小程序完整呈现你的品牌</p>
            <p class="description">
              聚合全平台精选内容，多种排版样式自由组合
              <br />自助配置 15 种品牌视觉元素
              <br />基于话题的社群互动，推送通知唤醒用户
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
  }
};
</script>

<style scoped>
#home {
  border: 1px solid white;
}
.ant-carousel {
  max-width: 90%;
  margin: 2rem auto;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  max-height: 800px;
}
.ant-carousel >>> .slick-slide .first {
  padding-top: 56.25%; /* 解决图片比例缩放，计算方法：例如：1920*1080 则 值为 1080 / 1920 * 100% = 56.25% */
  background-image: url("../assets/carousel-one.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.ant-carousel >>> .slick-slide .second {
  padding-top: 56.25%;
  background-image: url("../assets/carousel-two.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.content {
  margin: 20px auto;
  text-align: center;
  max-width: 90%;
}
.title {
  font-size: 2.5rem;
}
.description {
  font-size: 1.2rem;
}
.leftDiv {
  background-color: #f6f7f7;
  max-height: 35rem;
  max-width: 35rem;
}
.rightDiv {
  margin-top: 4rem;
  background-color: #d4e2e9;
  max-height: 35rem;
  max-width: 35rem;
  padding: 4rem;
}
</style>
