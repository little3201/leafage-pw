<template>
  <div id="signin">
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
                <router-link to="/singup">立即注册</router-link>
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
                <router-link to="/signup">立即注册</router-link>
              </span>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignIn extends Vue {
  private formValidate: any = {}
  private ruleValidate: any = {}
}
</script>

<style lang="less">
#signin {
  background-image: url('../../assets/undraw_best_place_r685.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
