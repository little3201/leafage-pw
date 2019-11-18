<template>
  <div id="signin">
    <a-row type="flex" justify="space-around">
      <a-col :xs="20" :sm="18" :md="16" :lg="0">
        <a-card :style="{ maxWidth: '17rem', margin: '6rem auto auto' }">
          <div>
            <img
              :style="{
                    height: '30px',
                    margin: '1em auto'
                  }"
              src="@/assets/logo.svg"
            />
          </div>
          <a-form ref="formValidate" :model="formValidate" :rules="ruleValidate">
            <a-form-item prop="username">
              <a-input prefix="user" v-model="formValidate.name" placeholder="账号/手机号/邮箱" />
            </a-form-item>
            <a-form-item prop="password">
              <a-input
                prefix="lock"
                type="password"
                v-model="formValidate.password"
                placeholder="密码"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="warning" long>登&nbsp;录</a-button>
            </a-form-item>
            <a-form-item>
              <span>
                没有账号&nbsp;？&nbsp;
                <router-link to="/singup">立即注册</router-link>
              </span>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
      <a-col :xs="0" :sm="0" :md="0" :lg="6" offset="10">
        <a-card :style="{ width: '17rem', margin: '12rem auto auto' }">
          <div>
            <img
              :style="{
                    height: '30px',
                    margin: '1em auto'
                  }"
              src="@/assets/logo.svg"
            />
          </div>
          <a-form ref="formValidate" :model="formValidate" :rules="ruleValidate">
            <a-form-item prop="username">
              <Input prefix="md-person" v-model="formValidate.name" placeholder="账号/手机号/邮箱" />
            </a-form-item>
            <a-form-item prop="password">
              <a-input
                prefix="md-lock"
                type="password"
                v-model="formValidate.password"
                placeholder="密码"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" long>注&nbsp;册</a-button>
            </a-form-item>
            <a-form-item>
              <span>
                已有账号&nbsp;？&nbsp;
                <router-link to="/signup">立即登录</router-link>
              </span>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      formValidate: {},
      ruleValidate: {}
    }
  }
}
</script>

<style lang="less">
#signin {
  background-image: url('../../assets/biking.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
