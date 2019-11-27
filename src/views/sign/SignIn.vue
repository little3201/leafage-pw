<template>
  <el-row type="flex">
    <el-col :span="24">
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
            <el-checkbox label="记住我 ？"  v-model="ruleForm.remberme" />
            <el-button type="text">忘记密码 ？</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      ruleForm: {
        username: '',
        password: '',
        remberme: false
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
</style>
