<template>
  <div>
    <a-carousel autoplay>
      <div>
        <img src="./../assets/gen.svg" />
      </div>
      <div>
        <img src="./../assets/gen-2.svg" />
      </div>
    </a-carousel>
    <div class="mini">
      <p class="title">Abeille 小程序+</p>
      <p class="description">
        小程序主动打开放大倍数可达 5.55，为订阅号提升阅读量 20.28%
        <br />
        现在注册，我们将为有复杂需求的内容品牌，定制一份小程序建议方案
      </p>
      <a-button size="large">立即使用</a-button>
      <div></div>
    </div>
  </div>
</template>

<script>
import { getArticleContent } from "@/api/request";

export default {
  data() {
    return {};
  },
  methods: {
    openArticle(articleId) {
      getArticleContent(articleId).then(
        response => {
          response.data;
          //设置token
          this.$router.push({
            name: "article"
          });
        },
        error => {
          // 执行失败的回调函数
          this.$message.error(error.message);
        }
      );
    }
  }
};
</script>

<style scoped>
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
.mini {
  text-align: center;
}
.title {
  font-size: 42px;
}
.description {
  font-size: 20px;
}
</style>
