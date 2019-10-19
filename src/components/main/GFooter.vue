<template>
  <div>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <div class="links">
        <a href="https://www.linkedin.com/in/文强-李-b90073104" target="_blank">
          <a-icon type="linkedin" />
        </a>
        <a href="https://github.com/little3201/abeille-ui" target="_blank">
          <a-icon type="github" />
        </a>
      </div>
      <div class="copyright">
        Copyright &copy; 2019 ·
        <a class="hrefColor" href="http://beian.miitbeian.gov.cn">
          陕ICP备 19017836
        </a>
        <span> · Powerd By Wilson Li</span>
      </div>
    </a-layout-footer>
  </div>
</template>

<script>
export default {
  name: "AFooter",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.links {
  margin-bottom: 8px;
  a {
    color: rgba(0, 0, 0, 0.45);
    &:hover {
      color: rgba(255, 165, 0, 0.65);
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
</style>
