<template>
  <a-card>
    <div class="swapper">
      <div class="avatar">
        <img src="http://img.wxcha.com/file/201810/23/5e623a6c2f.jpeg" />
      </div>
      <div class="username">王大锤</div>
      <div class="bio">海纳百川，有容乃大</div>
    </div>
    <div class="detail">
      <p><i class="title"></i>交互专家</p>
      <p><i class="group"></i>蚂蚁金服－UED</p>
      <p>
        <i class="address"></i>
        <span>浙江省</span>
        <span>杭州市</span>
      </p>
    </div>
    <a-divider />

    <div class="tags">
      <div class="tagsTitle">标签</div>
      <div>
        <template v-for="tag in tags">
          <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag"></a-tooltip>
          <a-tag v-else :key="tag">{{ tag }}</a-tag>
        </template>
      </div>
    </div>
    <a-divider :dashed="true" />

    <div class="team">
      <div class="teamTitle">最新文章</div>
      <div class="members">
        <template v-for="item in teams">
          <a href="#" :key="item">
            <span class="member">{{ item }}</span>
          </a>
        </template>
      </div>
    </div>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      tags: ["很有想法的", "专注设计", "辣~", "大长腿", "川妹子", "海纳百川"],
      teams: [
        "SpringSecurity原理1",
        "SpringSecurity原理2",
        "SpringSecurity原理3"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.swapper {
  text-align: center;
  margin-bottom: 24px;

  & > .avatar {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .username {
    color: rgba(0, 0, 0, 0.85);
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    margin-bottom: 4px;
  }
}

.detail {
  p {
    margin-bottom: 8px;
    padding-left: 26px;
    position: relative;
  }

  i {
    position: absolute;
    height: 14px;
    width: 14px;
    left: 0;
    top: 4px;
    background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
  }

  .title {
    background-position: 0 0;
  }
  .group {
    background-position: 0 -22px;
  }
  .address {
    background-position: 0 -44px;
  }
}

.tags {
  .ant-tag {
    margin-bottom: 8px;
  }
}

.team {
  .members {
    a {
      display: block;
      line-height: 24px;
      height: 24px;
      .member {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
      }
      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }
}

.tagsTitle,
.teamTitle {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 12px;
}
</style>
