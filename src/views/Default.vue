<template>
  <div class="default">
    <a-carousel autoplay>
      <div>
        <img src="./../assets/photor.png" />
      </div>
      <div>
        <img src="./../assets/gramer.png" />
      </div>
    </a-carousel>
    <!-- 分割线 -->
    <a-divider>With Text</a-divider>
    <!-- 列表 -->
    <a-list itemLayout="vertical" size="large" :dataSource="articleList">
      <a-list-item slot="renderItem" slot-scope="item" key="item.title">
        <template slot="actions" v-for="{ type, text } in actions">
          <span :key="type">
            <a-icon :type="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <img
          slot="extra"
          width="272"
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
        <a-list-item-meta :description="item.description">
          <a slot="title" :href="item.href">{{ item.title }}</a>
          <a-avatar slot="avatar" :src="item.avatar" />
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const articleList = [];
for (let i = 0; i < 5; i++) {
  articleList.push({
    href: "https://vue.ant.design/",
    title: `ant design vue part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}
export default {
  data() {
    return {
      articleList,
      busy: false,
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" }
      ]
    };
  }
};
</script>

<style scoped>
.default {
  margin: 0 auto;
  max-width: 70%;
}
.slick-slide img {
  border: 5px solid #ffffff;
  display: block;
  margin: auto;
  max-width: 80%;
}
</style>
