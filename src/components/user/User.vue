<template>
  <div id="user">
    <div>
      <Input
        search
        placeholder="Enter something..."
        style="width: auto; margin: 10px auto 0 10px"
      />
      <Button
        class="ivu-button-add"
        size="small"
        icon="md-add"
        type="success"
        shape="circle"
        @click="getUser(1)"
      >
      </Button>
    </div>
    <Table :columns="columns" :data="datas">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
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
    <Page size="small" :total="60" show-total show-sizer show-elevator />
  </div>
</template>

<script>
import { getUserInfo } from "@/api/request";
	
export default {
  data() {
    return {
      columns: [
        {
          title: "Name",
          slot: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      datas: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
		getUser(userId){
      getUserInfo(userId);
		},
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.datas[index].name}<br>
          Age：${this.datas[index].age}<br>
          Address：${this.datas[index].address}`
      });
    },
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
  margin: 15px 55px 0 0;
}
</style>
