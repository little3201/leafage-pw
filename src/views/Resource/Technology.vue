<template>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :xs="24" :sm="16" :md="15" :lg="14">
      <el-card style="margin-bottom: 20px;">
        <div style="display: flex;">
          <h3>
            <i class="el-icon-chat-line-square"></i>话题
          </h3>
          <div style="flex-grow: 1;"></div>
          <div>
            <el-link :underline="false" style="top: 4px;">换一换</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false" style="top: 4px;">全部话题</el-link>
          </div>
        </div>
        <ul>
          <li v-for="(item, index) in topics" :key="index" style="display: flex; margin: 10px auto;">
            <el-link :underline="false" href="/article" class="topic">{{ item.topic }}</el-link>
            <div style="flex-grow: 1;"></div>
            <span class="count">{{ item.onlooker }} 次围观</span>
          </li>
        </ul>
      </el-card>
      <el-card>
        <h3 style="flex-grow: 1;">
          <i class="el-icon-tickets"></i>推荐内容
        </h3>
        <ul>
          <li v-for="(item, index) in datas" :key="index" class="li-content">
            <el-image class="title-img" src="https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg" />
            <el-link href="/article" :underline="false" style="font-size: 1rem;">{{ item.title }}</el-link>
            <p class="li-text text-tag">作者：{{ item.author }}</p>
            <p class="li-text text-content">
              {{ item.content }}
            </p>
            <p class="li-text text-tag">
              <span style="margin-right: 30px">评论：{{ item.comment }} 条</span>
              <span>阅读：{{ item.scan }} 次</span>
            </p>
          </li>
        </ul>
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </el-card>
    </el-col>
    <el-col :xs="0" :sm="8" :md="7" :lg="6">
      <el-card style="margin-bottom: 20px;">
        <div style="display: flex;">
          <h3 style="flex-grow: 1;">
            <i class="el-icon-hot-water"></i>热点
          </h3>
          <el-link :underline="false" style="top: 4px;">
            查看更多
            <i class="el-icon-arrow-right"></i>
          </el-link>
        </div>
        <div style="text-align: center;">
          <el-divider></el-divider>
          <el-link :underline="false">7天</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link :underline="false">1个月</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link :underline="false">6个月</el-link>
          <el-divider></el-divider>
        </div>
        <ul>
          <li v-for="index in 10" :key="index">
            <el-tag size="mini" effect="plain">{{ index }}</el-tag>
            <el-link :underline="false" href="/article" style="margin: 0 10px">七天快速入门Go语言</el-link>
          </li>
        </ul>
      </el-card>
      <el-card>
        <div style="display: flex;">
          <h3 style="flex-grow: 1;">
            <i class="el-icon-hot-water"></i>新闻资讯
          </h3>
          <el-link :underline="false" style="top: 4px;">
            查看更多
            <i class="el-icon-arrow-right"></i>
          </el-link>
        </div>
        <ul>
          <li v-for="index in 10" :key="index">
            <el-link :underline="false" style="margin: 0 10px">马云套现40亿</el-link>
          </li>
        </ul>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'technology',
  components: {
  },
  data () {
    return {
      datas: [
        {
          title: '如何快速掌握Redis技巧',
          author: '布吉岛',
          content: '一个类被加载、连接、初始化后它的生命周期就开始了，当对应的Class对象不再被引用，即触不可及时',
          url: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Redis技巧',
          author: '布吉岛',
          content: '一个类被加载、连接、初始化后它的生命周期就开始了，当对应的Class对象不再被引用，即触不可及时',
          url: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Redis技巧',
          author: '布吉岛',
          content: '一个类被加载、连接、初始化后它的生命周期就开始了，当对应的Class对象不再被引用，即触不可及时',
          url: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        }
      ],
      topics: [
        {
          topic: '# 9012年了，是选择创业还是上班工作呢？ ｜ 话题',
          onlooker: '102'
        },
        {
          topic: '# 9012年了，是选择创业还是上班工作呢？ ｜ 话题',
          onlooker: '102'
        },
        {
          topic: '# 9012年了，是选择创业还是上班工作呢？ ｜ 话题',
          onlooker: '102'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-divider--horizontal {
  margin: 10px 0;
}
.el-divider--vertical{
  margin: 0 15px;
  top: 4px;
}
.el-tag--mini {
  width: 26px;
  text-align: center;
  height: 16px;
  line-height: 15px;
}
.el-link {
  justify-content: flex-start;
}
h3 {
  margin: 0;
  display: inline-block;
}
ul {
  padding: 0;
  list-style: none;
  li {
    margin: 10px auto;
  }
  .li-content {
    padding: 20px 0;
    border-bottom: solid 1px #e6e6e6;
  }
}
.count {
  font-size: 14px;
  color: #828a92;
}
.topic {
  font-size: 1rem;
}
i {
  margin-right: 5px;
}
.title-img {
  max-width: 206px;
  max-height: 116px;
  float: right;
  margin-left: 10px;
  border-radius: 5px;
}
.li-text {
  margin: 5px auto;
}
.text-tag {
  font-size: 12px;
}
.text-content {
  font-size: 14px;
}
</style>
