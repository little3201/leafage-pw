<template>
  <div>
    <a-carousel autoplay>
      <div>
        <img src="./../assets/photor.png" />
      </div>
      <div>
        <img src="./../assets/gramer.png" />
      </div>
    </a-carousel>
    <a-list itemLayout="horizontal" :dataSource="articleList">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <a slot="title" href="https://vue.ant.design/">{{ item.title }}</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleList: [
        {
          title: "Ant Design Title 1"
        },
        {
          title: "Ant Design Title 2"
        },
        {
          title: "Ant Design Title 3"
        },
        {
          title: "Ant Design Title 4"
        }
      ]
    };
  }
};
</script>

<style scoped>
.slick-slide img {
  border: 5px solid #ffffff;
  display: block;
  margin: auto;
  max-width: 80%;
}
</style>
