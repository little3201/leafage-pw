<template>
  <div id="footers">
    <a-layout-footer :style="{ textAlign: 'center' }">
      <div class="links">
        <a href="https://www.linkedin.com/in/文强-李-b90073104" target="_blank">
          <a-icon :style="{ fontSize: '18px' }" type="linkedin" />
        </a>
        <a href="https://github.com/little3201/abeille-ui" target="_blank">
          <a-icon :style="{ fontSize: '18px' }" type="github" />
        </a>
        <a-popover>
          <template slot="content">
            <img class="wechat" src="@/assets/wechat.jpg" />
          </template>
          <a-icon :style="{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.45)' }" type="wechat" />
        </a-popover>
      </div>
      <div :style="{ fontSize: '1rem' }">Copyright &copy; 2019 · 陕ICP备 19017836 · Powerd By Wilson Li</div>
    </a-layout-footer>
  </div>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
#footers {
  position: absolute;
  width: 100%;
  bottom: 0.5rem;
}
.ant-layout-footer {
  background-color: transparent;
}
.links {
  margin-bottom: 8px;
  a {
    color: rgba(0, 0, 0, 0.45);
    &:hover {
      color: rgba(255, 193, 7, 0.65);
    }
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
}
.wechat {
  width: 10rem;
  height: 10rem;
}
</style>
