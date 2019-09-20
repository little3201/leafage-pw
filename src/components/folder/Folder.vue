<template>
  <div>
    <a-row>
      <a-col :span="4"></a-col>
      <a-col :span="16">
        <a-list itemLayout="vertical" size="large" :dataSource="listData">
          <a-list-item slot="renderItem" slot-scope="item" key="item.title">
            <template slot="actions" v-for="{ type, text } in actions">
              <span :key="type">
                <a-icon :type="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
            <img slot="extra" width="272" :src="item.imageUrl" />
            <a-list-item-meta :description="item.description">
              <router-link slot="title" to="/article">
                {{ item.title }}
              </router-link>
              <a-avatar slot="avatar" src="http://img.wxcha.com/file/201810/23/5e623a6c2f.jpeg" />
            </a-list-item-meta>
            {{ item.content }}
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
