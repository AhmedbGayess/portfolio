<template>
  <div>
    <h1 class="mb-5">Blog Posts</h1>
    <p class="mb-5 text-center">A little blog section where I write posts about programming, tech and my journey as a web developer.</p>
    <posts-list />
  </div>
</template>

<script>
import PostsList from "@/components/Posts/PostsList";
export default {
  components: {
    PostsList
  }
}
</script>

<style scoped>
h1 {
  overflow: hidden;
  text-align: center;
}
h1:before,
h1:after {
  background-color: #333;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}
h1:before {
  right: 0.5em;
  margin-left: -50%;
}
h1:after {
  left: 0.5em;
  margin-right: -50%;
}
</style>

