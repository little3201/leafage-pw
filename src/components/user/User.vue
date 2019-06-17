<template>
  <div id="user">
    <div style="width: auto; margin: 10px auto 0 10px">
      用户编号：
      <Input search placeholder="Enter something..." style="width: 160px" />
      <Button
        class="ivu-button-add"
        size="small"
        icon="md-add"
        type="success"
        shape="circle"
        @click="initUser()"
      >
      </Button>
    </div>
    <Table :columns="columns" :data="datas">
      <template slot-scope="{ row }" slot="status">
        <Tag color="green" v-show="row.accountNonLocked">正常</Tag>
        <Tag color="red" v-show="!row.accountNonLocked">锁定</Tag>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="info"
          shape="circle"
          size="small"
          icon="md-create"
          style="margin-right: 10px"
          @click="show(index)"
        ></Button>
        <Button
          type="error"
          shape="circle"
          size="small"
          icon="md-trash"
          @click="remove(index)"
        ></Button>
      </template>
    </Table>
    <Page
      :current="page.pageNum"
      :page-size="page.pageSize"
      :total="page.total"
      @on-change="pageChange"
      @on-page-size-change="pageSizeChange"
      size="small"
      show-total
      show-sizer
      show-elevator
    />
  </div>
</template>

<script>
import { getUserInfo, findUsers } from "@/api/request";

export default {
  data() {
    return {
      columns: [
        {
          title: "用户ID",
          key: "userId"
        },
        {
          title: "中文名",
          key: "userNameCn"
        },
        {
          title: "英文名",
          key: "userNameEn"
        },
        {
          title: "手机号",
          key: "userMobile"
        },
        {
          title: "邮箱",
          key: "userEmail"
        },
        {
          title: "联系地址",
          key: "userAddress"
        },
        {
          title: "状态",
          slot: "status",
          key: "accountNonLocked",
          align: "center"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      datas: []
    };
  },
  mounted: function() {
    return this.initUser();
  },
  methods: {
    /* 初始化用户列表 */
    initUser() {
      let page = {
        pageNum: this.page.pageNum - 1,
        pageSize: this.page.pageSize
      };
      findUsers(page).then(
        response => {
          this.datas = response.data.content;
          this.page.pageNum = response.data.pageable.pageNumber + 1;
          this.page.pageSize = response.data.pageable.pageSize;
          this.page.total = response.data.totalElements;
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
    pageChange(pageNum) {
      this.page.pageNum = pageNum;
      this.initUser();
    },
    pageSizeChange(pageSize) {
      this.page.pageSize = pageSize;
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
