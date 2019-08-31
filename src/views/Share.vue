<template>
  <div class="share">
    <div class="shareHeader">技术驱动未来</div>
    <a-row>
      <a-col :span="4"></a-col>
      <a-col :span="16">
        <a-list itemLayout="vertical" size="large" :dataSource="listData">
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
              <router-link slot="title" to="/article">
                {{ item.title }}
              </router-link>
              <a-avatar slot="avatar" :src="item.url" />
            </a-list-item-meta>
            {{ item.summary }}
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { findArticles } from "@/api/request";

export default {
  data() {
    return {
      listData: [],
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" }
      ]
    };
  },
  mounted() {
    this.initArticleList();
  },
  methods: {
    initArticleList() {
      const page = {
        pageNum: 0,
        pageSize: 10
      };
      findArticles(page).then(
        response => {
          //设置token
          this.$message.success("获取数据成功");
          this.listData = response.data.content;
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
.share {
  margin: 0 auto;
  max-width: 90%;
}
.shareHeader {
  height: 200px;
  font-size: 34px;
  text-align: center;
}
</style>
