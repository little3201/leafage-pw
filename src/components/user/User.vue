<template>
  <div id="user">
    <a-table :columns="columns" :dataSource="datas" :pagination="pagination">
    </a-table>
    <a-pagination
      showQuickJumper
      :current="pagination.pageNum"
      :total="pagination.total"
      @change="onChange"
    />
  </div>
</template>

<script>
import { getUserInfo, findUsers } from "@/api/request";
import { columns } from "./user";

export default {
  data() {
    return {
      columns: [],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      datas: []
    };
  },
  beforeCreate() {
    this.columns = columns;
  },
  mounted: function() {
    return this.initUser();
  },
  methods: {
    /* 初始化用户列表 */
    initUser() {
      let pagination = {
        pageNum: this.pagination.pageNum - 1,
        pageSize: this.pagination.pageSize
      };
      findUsers(pagination).then(
        response => {
          this.datas = response.data.content;
          this.pagination.pageNum = response.data.pageable.pageNumber + 1;
          this.pagination.pageSize = response.data.pageable.pageSize;
          this.pagination.total = response.data.totalElements;
        },
        error => {
          // 执行失败的回调函数
          this.$Message.error({
            duration: 4,
            content: "数据初始化失败！" + error.message
          });
        }
      );
    },
    /* 根据userId查询用户 */
    getUser(userId) {
      getUserInfo(userId);
    },
    onChange(pageNumber) {
      this.pagination.pageNum = pageNumber;
      this.initUser();
    },
    /* 展示用户信息 */
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `
          用户ID：${this.datas[index].userId}<br/>
          中文名：${this.datas[index].userNameCn}<br/>
          英文名：${this.datas[index].userNameEn}<br/>
          手机号：${this.datas[index].userMobile}<br/>
          联系地址：${this.datas[index].userAddress}
        `
      });
    },
    /* 从列表中移除 */
    remove(index) {
      this.datas.splice(index, 1);
    }
  }
};
</script>

<style>
.ivu-table-wrapper {
  margin: 10px 10px;
}
.ivu-page {
  text-align: center;
  margin-bottom: 10px;
}
.ivu-button-add {
  float: right;
  margin: 5px 58px 0 0;
}
</style>
