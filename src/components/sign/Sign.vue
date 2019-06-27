<template>
  <div class="user-login">
    <div class="content-wrapper">
      <h2 class="slogan">
        欢迎使用 <br />
        Abeille 后台管理系统
      </h2>
      <div class="form-container">
        <h2 class="form-title">Sign In</h2>
        <Form
          ref="signForm"
          :model="user"
          :rules="rules"
        >
          <FormItem prop="username">
            <Input type="text" v-model="user.username" placeholder="Username">
              <Icon type="md-person" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem prop="password" style="margin-bottom: 10px">
            <Input
              type="password"
              v-model="user.password"
              placeholder="Password"
            >
              <Icon type="md-lock" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem style="margin-bottom: 5px">
            <Checkbox size="small" v-model="single">Remember me</Checkbox>
            <router-link to="">Forgot password</router-link>
          </FormItem>
          <FormItem style="margin-bottom: 10px">
            <Button long :loading="loading" shape="circle" type="primary" @click="onSubmit('signForm')">
              Sign In
            </Button>
            Or <router-link to="/sign">Register now!</router-link>
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
      single: false,
      loading: false,
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
          this.loading = true;
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
              this.loading = false;
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
