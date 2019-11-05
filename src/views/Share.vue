<template>
  <div :style="{ margin: '3rem auto' }">
    <a-row :gutter="24" type="flex" justify="center">
      <a-col :xl="5" :lg="6" :md="20" :xs="20">
        <a-card hoverable style="width: 350px">
          <img
            src="https://ccdn.goodq.top/caches/3ddfe819fbff4df42c2816872195b7de/aHR0cHM6Ly81ZDQyNDBiMjU4OWM5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDcvNmI3ZWRjZTcwNDRlYjc3Y2Q2ZDllZDU4YmJjMzBlNGEuanBn.jpg"
            slot="cover"
          />
          <a-card-meta title="特斯拉CTO离职 公司股价受挫下跌跌超11%" description="实际上，此前为了提高利润率并实现盈利，特斯拉已经进行了裁员，并承诺关闭一些门店以降低成本。其目标是在第三季度实现盈利，为此，特斯拉在近几个月进行了产品定价调整">
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :xl="5" :lg="6" :md="20" :xs="20">
        <a-card hoverable style="width: 350px">
          <img
  src="https://ccdn.goodq.top/caches/3ddfe819fbff4df42c2816872195b7de/aHR0cHM6Ly81ZDQyNDBiMjU4OWM5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDcvNDFmMzM4YTM4NjM5MWEzYjJkMzY0MjYxNWMyOWY1ZTguanBn.jpg"
            slot="cover"
          />
          <a-card-meta title="确保群众“舌尖上的安全”有了明确时间表" description="实际上，此前为了提高利润率并实现盈利，特斯拉已经进行了裁员，并承诺关闭一些门店以降低成本。其目标是在第三季度实现盈利">
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :xl="5" :lg="6" :md="20" :xs="20">
        <a-card>
          <h3>最新文章</h3>
          <a-list itemLayout="vertical" size="large" :dataSource="listData">
            <a-list-item slot="renderItem" slot-scope="item" key="item.title">
              <img
                class="item-img"
                slot="extra"
                width="100"
                :src="item.imageUrl"
              />
              <a-list-item-meta>
                <router-link slot="title" :to="'/article/' + item.articleId">
                  {{ item.title }}
                </router-link>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { fetchArticle } from "@/api/request";

export default {
  data() {
    return {
      listData: [],
      actions: [
        { type: "star", text: "156" },
        { type: "like", text: "156" },
        { type: "message", text: "2" }
      ]
    };
  },
  mounted() {
    this.initArticleList();
  },
  methods: {
    initArticleList() {
      const pabeable = {
        pageNum: 0,
        pageSize: 10
      };
      fetchArticle(pabeable).then(
        response => {
          this.listData = response.data.content;
        },
        error => {
          // 执行失败的回调函数
          this.$message.error(error.message);
        }
      );
    }
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 160) {
        return value.slice(0, 160) + "...";
      }
      return value;
    }
  }
};
</script>

<style scoped></style>
