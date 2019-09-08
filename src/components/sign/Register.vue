<template>
  <div class="user-login">
    <div class="content-wrapper">
      <div class="form-container">
        <h2 class="form-title">Sign Up</h2>
        <a-form ref="formRegister" :form="form" id="formRegister">
          <a-form-item>
            <a-input
              type="text"
              placeholder="email"
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      required: true,
                      type: 'email',
                      message: 'a email wanted'
                    }
                  ],
                  validateTrigger: ['change', 'blur']
                }
              ]"
            ></a-input>
          </a-form-item>

          <a-popover
            placement="rightTop"
            :trigger="['focus']"
            :getPopupContainer="trigger => trigger.parentElement"
            v-model="state.passwordLevelChecked"
          >
            <template slot="content">
              <div :style="{ width: '240px' }">
                <div :class="['user-register', passwordLevelClass]">
                  safety：
                  <span>{{ passwordLevelName }}</span>
                </div>
                <a-progress
                  :percent="state.percent"
                  :showInfo="false"
                  :strokeColor="passwordLevelColor"
                />
                <div style="margin-top: 10px;">
                  <span>at least six chars, need safety.</span>
                </div>
              </div>
            </template>
            <a-form-item>
              <a-input
                type="password"
                @click="handlePasswordInputClick"
                autocomplete="false"
                placeholder="password，match case"
                v-decorator="[
                  'password',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'at least six chars，match case'
                      },
                      { validator: this.handlePasswordLevel }
                    ],
                    validateTrigger: ['change', 'blur']
                  }
                ]"
              ></a-input>
            </a-form-item>
          </a-popover>

          <a-form-item>
            <a-input
              type="password"
              autocomplete="false"
              placeholder="confirm password"
              v-decorator="[
                'password2',
                {
                  rules: [
                    {
                      required: true,
                      message: 'at least six chars，match case'
                    },
                    { validator: this.handlePasswordCheck }
                  ],
                  validateTrigger: ['change', 'blur']
                }
              ]"
            ></a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              placeholder="11 phone numbers"
              v-decorator="[
                'mobile',
                {
                  rules: [
                    {
                      required: true,
                      message: 'a right number wanted',
                      pattern: /^1[3456789]\d{9}$/
                    },
                    { validator: this.handlePhoneCheck }
                  ],
                  validateTrigger: ['change', 'blur']
                }
              ]"
            >
              <a-select slot="addonBefore" defaultValue="+86">
                <a-select-option value="+86">+86</a-select-option>
                <a-select-option value="+87">+87</a-select-option>
              </a-select>
            </a-input>
          </a-form-item>

          <a-row :gutter="13">
            <a-col class="gutter-row" :span="13">
              <a-form-item>
                <a-input
                  class="getCaptcha"
                  type="text"
                  placeholder="verify code"
                  v-decorator="[
                    'captcha',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'a verify code wanted'
                        }
                      ],
                      validateTrigger: 'blur'
                    }
                  ]"
                >
                  <a-icon
                    slot="prefix"
                    type="safety-certificate"
                    :style="{ color: 'rgba(0,0,0,.25)' }"
                  />
                </a-input>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-button
                :disabled="state.smsSendBtn"
                @click.stop.prevent="getCaptcha"
                v-text="!state.smsSendBtn && 'verify code' || state.time + ' s'"
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
            >
              Sign Up
            </a-button>
            <router-link class="login" to="/login">
              Had Account
            </router-link>
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
import { getSmsCaptcha } from "@/api/request";

const levelNames = {
  1: "低",
  2: "中",
  3: "强"
};
const levelClass = {
  1: "error",
  2: "warning",
  3: "success"
};
const levelColor = {
  1: "#ff0000",
  2: "#ff7e05",
  3: "#52c41a"
};
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
        progressColor: "#FF0000"
      },
      registerBtn: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  computed: {
    passwordLevelClass() {
      return levelClass[this.state.passwordLevel];
    },
    passwordLevelName() {
      return levelNames[this.state.passwordLevel];
    },
    passwordLevelColor() {
      return levelColor[this.state.passwordLevel];
    }
  },
  methods: {
    handlePasswordLevel(rule, value, callback) {
      let level = 0;
      // 判断这个字符串中有没有数字
      if (/[0-9]/.test(value)) {
        level++;
      }
      // 判断字符串中有没有字母
      if (/[a-zA-Z]/.test(value)) {
        level++;
      }
      // 判断字符串中有没有特殊符号
      if (/[^0-9a-zA-Z_]/.test(value)) {
        level++;
      }
      this.state.passwordLevel = level;
      this.state.percent = level * 30;
      if (level >= 2) {
        if (level >= 3) {
          this.state.percent = 100;
        }
        callback();
      } else {
        if (level === 0) {
          this.state.percent = 10;
        }
        callback(new Error("not safety"));
      }
    },
    handlePasswordCheck(rule, value, callback) {
      const password = this.form.getFieldValue("password");
      if (value === undefined) {
        callback(new Error("a password wanted"));
      }
      if (value && password && value.trim() !== password.trim()) {
        callback(new Error("password not coincide"));
      }
      callback();
    },
    handlePhoneCheck(rule, value, callback) {
      callback();
    },
    handlePasswordInputClick() {
      if (!this.isMobile()) {
        this.state.passwordLevelChecked = true;
        return;
      }
      this.state.passwordLevelChecked = false;
    },
    handleSubmit() {
      const {
        form: { validateFields },
        state,
        $router
      } = this;
      validateFields({ force: true }, (err, values) => {
        if (!err) {
          state.passwordLevelChecked = false;
          $router.push({ name: "registerResult", params: { ...values } });
        }
      });
    },
    getCaptcha(e) {
      e.preventDefault();
      const {
        form: { validateFields },
        state,
        $message,
        $notification
      } = this;
      validateFields(["mobile"], { force: true }, (err, values) => {
        if (!err) {
          state.smsSendBtn = true;
          const interval = window.setInterval(() => {
            if (state.time-- <= 0) {
              state.time = 60;
              state.smsSendBtn = false;
              window.clearInterval(interval);
            }
          }, 1000);
          const hide = $message.loading("verify code sending..", 0);
          getSmsCaptcha({ mobile: values.mobile })
            .then(res => {
              setTimeout(hide, 2500);
              $notification["success"]({
                message: "notice",
                description: "send code success，it's：" + res.result.captcha,
                duration: 8
              });
            })
            .catch(err => {
              setTimeout(hide, 1);
              clearInterval(interval);
              state.time = 60;
              state.smsSendBtn = false;
              this.requestFailed(err);
            });
        }
      });
    },
    requestFailed(err) {
      this.$notification["error"]({
        message: "error",
        description:
          ((err.response || {}).data || {}).message ||
          "request error，retry later",
        duration: 4
      });
      this.registerBtn = false;
    }
  }
};
</script>

<style lang="less">
@import "./Sign.less";
.user-login {
  background-image: url("../../assets/background.svg");
}
.ant-form-item {
  margin-bottom: 15px;
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
  margin: 2rem 0 1.2rem 0;
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
  width: 19rem;
}
.getCaptcha {
  display: block;
  width: 100%;
  height: 30px;
}
.register-button {
  width: 50%;
}
.hrefColor {
  color: rgba(0, 0, 0, 0.65);
}
.login {
  float: right;
  line-height: 40px;
}
</style>
