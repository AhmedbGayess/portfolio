<template>
  <div class="container">
    <h1>Edit Post</h1>
    <post-form v-show="post" :post="post" class="mb-5"/>
    <div class="m-5">
      <h4>Comments</h4>
    <comments :comments="post.comments" />
    </div>
    <div class="text-center p-5 m-5 delete">
      <h4 class="mb-4">Delete Post</h4>
      <p>This post will be deleted permanently?</p>
      <button @click="removePost" class="btn btn-outline-danger">Delete</button>
    </div>
  </div>
</template>


<script>
import PostForm from "@/components/Admin/PostForm";
import Comments from "@/components/Admin/Comments";
import { mapActions } from "vuex";
export default {
  layout: "admin",
  components: {
    PostForm,
    Comments
  },
  created() {
    this.$store.dispatch("getPost", this.$route.params.id);
  },
  computed: {
    post() {
      return this.$store.getters.post;
    }
  },
  methods: {
    ...mapActions(["deletePost", "deleteImage"]),
    removePost() {
      this.post.images.forEach(image => {
        this.deleteImage(image);
      });
      this.deletePost(this.$route.params.id).then(() =>
        this.$router.push("/admin/posts")
      );
    }
  }
};
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

.delete {
  border: 1px solid lightgray;
}
</style>
