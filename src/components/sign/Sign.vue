<template>
  <div class="user-login">
    <div class="content-wrapper">
      <h2 class="slogan">
        欢迎使用 <br />
        Abeille 后台管理系统
      </h2>
      <div class="form-container">
        <h2 class="form-title">登&emsp;录</h2>
        <Form ref="userForm" :model="user" :rules="rules">
          <FormItem prop="username">
            <Input
              type="text"
              v-model="user.username"
              placeholder="用户名/邮箱/手机号"
            >
              <Icon type="ios-person-outline" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="user.password" placeholder="密码">
              <Icon type="ios-lock-outline" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem>
            <Button
              long
              shape="circle"
              type="primary"
              @click="handleSubmit('userForm')"
            >
              登&emsp;&emsp;录
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import "./Sign.less";
export default {
  data() {
    return {
      user: {
        user: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码格式不正确",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.$router.push({
            name: this.$config.homeName
          });
        }
      });
    }
  }
};
</script>

<style>
.user-login {
  background-image: url("../../assets/laptop.png");
}
</style>
