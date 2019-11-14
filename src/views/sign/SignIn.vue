<template>
  <div id="singin">
    <Row type="flex" justify="space-around">
      <Col :xs="20" :sm="18" :md="16" :lg="0">
        <Card :style="{ maxWidth: '17rem', margin: '6rem auto auto' }">
          <div>
            <img
              :style="{
                    height: '30px',
                    margin: '1em auto'
                  }"
              src="@/assets/logo.svg"
            />
          </div>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
            <FormItem prop="username">
              <Input prefix="md-person" v-model="formValidate.name" placeholder="账号/手机号/邮箱" />
            </FormItem>
            <FormItem prop="password">
              <Input
                prefix="md-lock"
                type="password"
                v-model="formValidate.password"
                placeholder="密码"
              />
            </FormItem>
            <FormItem>
              <Button type="warning" long>登&nbsp;录</Button>
            </FormItem>
            <FormItem>
              <span>
                没有账号&nbsp;？&nbsp;
                <router-link to="/singup">注&nbsp;册</router-link>
              </span>
            </FormItem>
          </Form>
        </Card>
      </Col>
      <Col :xs="0" :sm="0" :md="0" :lg="6" offset="10">
        <Card :style="{ width: '17rem', margin: '12rem auto auto' }">
          <div>
            <img
              :style="{
                    height: '30px',
                    margin: '1em auto'
                  }"
              src="@/assets/logo.svg"
            />
          </div>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
            <FormItem prop="username">
              <Input prefix="md-person" v-model="formValidate.name" placeholder="账号/手机号/邮箱" />
            </FormItem>
            <FormItem prop="password">
              <Input
                prefix="md-lock"
                type="password"
                v-model="formValidate.password"
                placeholder="密码"
              />
            </FormItem>
            <FormItem>
              <Button type="warning" long>登&nbsp;录</Button>
            </FormItem>
            <FormItem>
              <span>
                没有账号&nbsp;？&nbsp;
                <router-link to="/singup">注&nbsp;册</router-link>
              </span>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>

    <!-- <div class="footer">
      <div class="links">
        <a href="_self">帮助</a>
        <a href="_self">隐私</a>
        <a href="_self">条款</a>
      </div>
      <div class="copyright">
        Copyright &copy; 2019 ·
        <a
          class="hrefColor"
          href="http://beian.miitbeian.gov.cn"
        >陕ICP备 19017836</a>
        <span>· Powerd By Wilson Li</span>
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class SignIn extends Vue {
  private formValidate: any = {}
  private ruleValidate: any = {}
}
</script>

<style lang="less">
#singin {
  background-image: url('/asstes/bowct-adyhs.svg');
}
</style>
