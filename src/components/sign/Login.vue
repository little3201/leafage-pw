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
              type="password"
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
              Log In
            </a-button>
            Or
            <router-link to="/register">Register now!</router-link>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="footer">
      <div class="links">
        <a href="_self">帮助</a>
        <a href="_self">隐私</a>
        <a href="_self">条款</a>
      </div>
      <div class="copyright">
        Copyright &copy; 2019 ·
        <a class="hrefColor" href="http://beian.miitbeian.gov.cn">
          陕ICP备 19017836
        </a>
        <span> · Powerd By Wilson Li</span>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/request";
import { setToken } from "@/utils/assist/cookies";

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
          login(values).then(
            response => {
              this.$notification.open({
                message: "Welcome back",
                description: "miss you much"
              });
              setToken(response.data.access_token);
              //设置token
              this.$router.push({
                name: "main"
              });
            },
            error => {
              this.$notification.open({
                message: "Ops!!! sorry",
                description: "an error occured."
              });
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

<style lang="less">
@import "./Sign.less";
.user-login {
  background-image: url("../../assets/background.svg");
}
#form-login .login-form-forgot {
  float: right;
}
#form-login .login-form-button {
  width: 100%;
}
.form-container {
  width: 300px;
}
.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;
    font-size: 14px;
    a {
      color: rgba(0, 0, 0, 0.65);
      transition: all 0.3s;
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
}
</style>

<style scoped>
.hrefColor {
  color: rgba(0, 0, 0, 0.65);
}
.form-container {
  width: 300px;
}
</style>
