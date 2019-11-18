<template>
  <div id="footers">
    <el-footer :style="{ textAlign: 'center' }">
      <div class="links">
        <el-link type="info" href="https://www.linkedin.com/in/文强-李-b90073104" target="_blank">
          <i class="el-icon-edit"></i>
        </el-link>
        <el-link type="info" href="https://github.com/little3201/abeille-ui" target="_blank">
          <i class="el-icon-edit"></i>
        </el-link>
        <el-popover placement="top-start" width="200" trigger="hover">
          <el-image>
            <img class="wechat" src="@/assets/wechat.jpg" />
          </el-image>
          <i class="el-icon-edit"></i>
        </el-popover>
      </div>
      <div :style="{ fontSize: '1rem' }">Copyright &copy; 2019 · 陕ICP备 19017836 · Powerd By Wilson Li</div>
    </el-footer>
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

<style lang="scss" scoped>
#footers {
  position: absolute;
  width: 100%;
  bottom: 0.5rem;
}
.el-footer {
  background: transparent;
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
