<template>
  <div class="user-login">
    <div class="content-wrapper">
      <div class="form-container">
        <h2 class="form-title">Sign In Console</h2>
        <h3>
          <span>注册</span>
        </h3>
        <a-form ref="formRegister" :form="form" id="formRegister">
          <a-form-item>
            <a-input
              type="text"
              placeholder="邮箱"
              v-decorator="['email', {rules: [{ required: true, type: 'email', message: '请输入邮箱地址' }], validateTrigger: ['change', 'blur']}]"
            ></a-input>
          </a-form-item>

          <a-popover
            placement="rightTop"
            :trigger="['focus']"
            :getPopupContainer="(trigger) => trigger.parentElement"
            v-model="state.passwordLevelChecked"
          >
            <template slot="content">
              <div :style="{ width: '240px' }">
                <div :class="['user-register', passwordLevelClass]">
                  强度：
                  <span>{{ passwordLevelName }}</span>
                </div>
                <a-progress
                  :percent="state.percent"
                  :showInfo="false"
                  :strokeColor=" passwordLevelColor "
                />
                <div style="margin-top: 10px;">
                  <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
                </div>
              </div>
            </template>
            <a-form-item>
              <a-input
                type="password"
                @click="handlePasswordInputClick"
                autocomplete="false"
                placeholder="至少6位密码，区分大小写"
                v-decorator="['password', {rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"
              ></a-input>
            </a-form-item>
          </a-popover>

          <a-form-item>
            <a-input
              type="password"
              autocomplete="false"
              placeholder="确认密码"
              v-decorator="['password2', {rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"
            ></a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              placeholder="11 位手机号"
              v-decorator="['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"
            >
              <a-select slot="addonBefore" size="large" defaultValue="+86">
                <a-select-option value="+86">+86</a-select-option>
                <a-select-option value="+87">+87</a-select-option>
              </a-select>
            </a-input>
          </a-form-item>
          <!--<a-input-group size="large" compact>
            <a-select style="width: 20%" size="large" defaultValue="+86">
              <a-select-option value="+86">+86</a-select-option>
              <a-select-option value="+87">+87</a-select-option>
            </a-select>
            <a-input style="width: 80%" size="large" placeholder="11 位手机号"></a-input>
          </a-input-group>-->

          <a-row :gutter="16">
            <a-col class="gutter-row" :span="16">
              <a-form-item>
                <a-input
                  type="text"
                  placeholder="验证码"
                  v-decorator="['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"
                >
                  <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }" />
                </a-input>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-button
                class="getCaptcha"
                :disabled="state.smsSendBtn"
                @click.stop.prevent="getCaptcha"
                v-text="!state.smsSendBtn && '获取验证码'||(state.time+' s')"
              ></a-button>
            </a-col>
          </a-row>

          <a-form-item>
            <a-button
              type="primary"
              htmlType="submit"
              class="register-button"
              :loading="registerBtn"
              @click.stop.prevent="handleSubmit"
              :disabled="registerBtn"
            >注册</a-button>
            <router-link class="login" :to="{ name: 'login' }">使用已有账户登录</router-link>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="footer">
      <div class="links">
        <a href="/">帮助</a>
        <a href="/">隐私</a>
        <a href="/">条款</a>
      </div>
      <div class="copyright">Copyright &copy; 2019 Abeille.top Serviced</div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/request";
import { setToken } from "@/utils/assist/cookies";

const levelNames = {
  0: '低',
  1: '低',
  2: '中',
  3: '强'
}
const levelClass = {
  0: 'error',
  1: 'error',
  2: 'warning',
  3: 'success'
}
const levelColor = {
  0: '#ff0000',
  1: '#ff0000',
  2: '#ff7e05',
  3: '#52c41a'
}
export default {
  data() {
    return {
      loading: false,
      state: {
        time: 60,
        smsSendBtn: false,
        passwordLevel: 0,
        passwordLevelChecked: false,
        percent: 10,
        progressColor: '#FF0000'
      },
      registerBtn: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  computed: {
    passwordLevelClass () {
      return levelClass[this.state.passwordLevel]
    },
    passwordLevelName () {
      return levelNames[this.state.passwordLevel]
    },
    passwordLevelColor () {
      return levelColor[this.state.passwordLevel]
    }
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
              setToken(response.data.access_token);
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
<style lang="less" scoped>
.form-container {
	width: 400px
}
</style>
