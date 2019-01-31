<template>
  <div v-show="posts">
    <post-list-item v-for="(post, i) in posts" :key="i" :post="post" :admin="admin"></post-list-item>
  </div>
</template>

<script>
import PostListItem from "./PostListItem";
export default {
  name: "PostsList",
  components: {
    PostListItem
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  props: {
    admin: {
      type: Boolean
    }
  }
};
</script>


