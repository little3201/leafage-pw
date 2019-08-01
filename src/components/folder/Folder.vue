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
  mounted: function() {},
  methods: {
    onChange(pageNumber) {
      this.pagination.pageNum = pageNumber;
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
