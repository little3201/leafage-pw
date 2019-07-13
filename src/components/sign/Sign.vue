<template>
  <div class="user-login">
    <div class="content-wrapper">
      <h2 class="slogan">
        欢迎使用
        <br />Abeille 管理控制台
      </h2>
      <div class="form-container">
        <h2 class="form-title">Sign In Console</h2>
        <a-form
          id="form-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'username',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!'
                    }
                  ]
                }
              ]"
              placeholder="Username"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your Password!'
                    }
                  ]
                }
              ]"
              Input.Password
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true
                }
              ]"
            >
              Remember me
            </a-checkbox>
            <a class="login-form-forgot" href>Forgot password</a>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
              :loading="loading"
            >
              Sign in
            </a-button>
            Or
            <a href>register now!</a>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import "./Sign.less";
import { signIn } from "@/api/request";
import { setStore } from "@/utils/assist/storage";

export default {
  data() {
    return {
      loading: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      this.loading = true;
      // 执行校验
      e.preventDefault();
      this.form.validateFields((err, values) => {
        this.loading = false;
        if (!err) {
          signIn(values).then(
            response => {
              setStore("Access-token", response.data.access_token);
              //设置token
              this.$router.push({
                name: "main"
              });
            },
            error => {
              // 执行失败的回调函数
              this.$message.error(error.message);
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
#form-login .login-form-forgot {
  float: right;
}
#form-login .login-form-button {
  width: 100%;
}
</style>
