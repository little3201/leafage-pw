<template>
  <div id="footer">
    <Footer :style="{ textAlign: 'center' }">
      <div class="links">
        <a href="https://www.linkedin.com/in/文强-李-b90073104" target="_blank">
          <Icon type="logo-linkedin" size="18" />
        </a>
        <a href="https://github.com/little3201/abeille-ui" target="_blank">
          <Icon type="logo-github" size="18" />
        </a>
        <Poptip content="content" placement="top" trigger="hover">
          <template slot="content">
            <img class="wechat" src="@/assets/wechat.jpg" />
          </template>
          <Icon :style="{ color: 'rgba(0, 0, 0, 0.45)' }" type="ios-chatbubbles" size="18" />
        </Poptip>
      </div>
      <div class="copyright">Copyright &copy; 2019 · 陕ICP备 19017836 · Powerd By Wilson Li</div>
    </Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footers extends Vue {}
</script>

<style lang="less" scoped>
.ivu-layout-footer {
  background-color: transparent;
}
.links {
  margin-bottom: 8px;
  a {
    color: rgba(0, 0, 0, 0.45);
    &:hover {
      color: rgba(45, 140, 240, 0.65);
    }
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
}
.hrefColor {
  color: rgba(0, 0, 0, 0.45);
}
.copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.wechat {
  width: 10rem;
  height: 10rem;
}
</style>

