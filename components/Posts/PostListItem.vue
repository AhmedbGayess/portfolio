<template>
  <nuxt-link :to="link + post._id">
    <div class="post-card container p-5 mb-5">
      <div class="row">
        <div class="col-md-4 ">
          <img
            class="img-fluid rounded mb-3"
            :src="path + '/' + post.images[0]"
          >
        </div>
        <div class="col-md-8">
          <h2 class="mt-3 mb-3">{{post.title}}</h2>
          <p>{{post.description}}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean
    }
  },
  computed: {
    path() {
      return process.env.originPath;
    },
    link() {
      if (this.admin === true) {
        return "/admin/edit_post/";
      } else {
        return "/blog/";
      }
    }
  }
};
</script>

<style scoped>
.post-card {
  border: 1px solid lightgray;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.post-card:hover {
  transform: translateY(-10px) scale(1.03);
}
</style>

