<template>
  <div class="bread-crumb">
    <Breadcrumb>
      <BreadcrumbItem
        v-for="item in list"
        :to="item.to"
        :key="`bread-crumb-${item.name}`"
      >
        <Icon type="item.icon"></Icon>{{ showTitle(item) }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
import { showTitle } from "@/utils/assist/util";

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showTitle(item) {
      return showTitle(item, this);
    },
    isCustomIcon(iconName) {
      return iconName.indexOf("_") === 0;
    },
    getCustomIconName(iconName) {
      return iconName.slice(1);
    }
  }
};
</script>

<style>
.bread-crumb {
  display: inline-block;
  vertical-align: top;
}
</style>
