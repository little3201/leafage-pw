<template>
  <div class="user-login">
    <div class="content-wrapper">
      <h2 class="slogan">
        欢迎使用
        <br />Abeille 管理控制台
      </h2>
      <div class="form-container">
        <h2 class="form-title">Sign In Console</h2>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="Username" prop="username">
            <Input v-model="formValidate.name" placeholder="Enter your username" />
          </FormItem>
          <FormItem label="Password" prop="password" type="password">
            <Input v-model="formValidate.password" placeholder="Enter your password" />
          </FormItem>
        </Form>
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
        <a class="hrefColor" href="http://beian.miitbeian.gov.cn">陕ICP备 19017836</a>
        <span>· Powerd By Wilson Li</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class SignIn extends Vue {
  private formValidate: any = {};
  private ruleValidate: any = {};
}
</script>

<style lang="less"></style>
