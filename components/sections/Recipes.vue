<template>
  <div class="divide-y divide-gray-100">
    <Nav>
      <NavItem href="/featured" isActive>Featured</NavItem>
      <NavItem href="/popular">Popular</NavItem>
      <NavItem href="/recent">Recent</NavItem>
    </Nav>
    <List>
      <ListItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </List>
  </div>
</template>

<script>
import Nav from './base/Nav.vue'
import NavItem from './base/NavItem.vue'
import List from './base/List.vue'
import ListItem from './base/ListItem.vue'

export default {
  props: ['recipes'],
  components: {
    Nav,
    NavItem,
    List,
    ListItem,
  },
}
</script>