<template>
  <div id="signup">
    <el-card :hoverable="true" style="max-width: 17rem;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :hide-required-asterisk="true">
        <el-form-item>
          <router-link to="/">
            <img style="height: 3rem;" src="@/assets/logo.svg" />
          </router-link>
        </el-form-item>
        <el-form-item prop="username">
          <el-input icon="el-icon-user" v-model="ruleForm.username" placeholder="账号/手机号/邮箱" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="登录密码" />
        </el-form-item>
        <el-form-item prop="remberme">
          <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
#signup {
  background-image: url('https://oss.abeille.top//place.svg');
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 100%;
}
</style>
