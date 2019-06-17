<template>
  <div class="user-login">
    <div class="content-wrapper">
      <h2 class="slogan">
        欢迎使用 <br />
        Abeille 后台管理系统
      </h2>
      <div class="form-container">
        <h2 class="form-title">登&emsp;录</h2>
        <Form ref="signForm" :model="user" :rules="rules">
          <FormItem prop="username">
            <Input type="text" v-model="user.username" placeholder="账号">
              <Icon type="md-person" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="user.password" placeholder="密码">
              <Icon type="md-lock" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem>
            <Button
              long
              shape="circle"
              type="primary"
              @click="onSubmit('signForm')"
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
import { signIn } from "@/api/request";
import { setToken } from "@/utils/assist/cookies";

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
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          signIn(this.user).then(
            response => {
              this.$Message.success("您好！登录成功");
              //设置token到cookie中
              setToken(response.data.access_token);
              this.$router.push({
                name: "main"
              });
            },
            error => {
              // 执行失败的回调函数
              this.$Message.error({
                duration: 3,
                content: "抱歉，因为 " + error.message + "，登录失败"
              });
            }
          );
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
