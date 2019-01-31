<template>
  <div>
    <div v-if="!post">Loading...</div>
    <div v-else>
      <div class="text-center">
        <h1 class="mb-5">{{post.title}}</h1>
        <p class="mb-5 text-secondary">By Ahmed Ben Gayess -- {{date}}</p>
        <div>
          <img v-if="post.images" class="img-fluid rounded mb-3" :src="path + '/' + post.images[0]">
        </div>
        <h4 class="mb-5 description">{{post.description}}</h4>
      </div>
      <p class="lead mb-5 body">{{post.body}}</p>
      <post-author class="mb-5"/>
      <comments-list :comments="post.comments"/>
      <comment-form :id="post._id"/>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import CommentForm from "@/components/Comments/CommentForm";
import CommentsList from "@/components/Comments/CommentsList";
import PostAuthor from "@/components/Posts/PostAuthor";
export default {
  name: "PostPage",
  created() {
    this.$store.dispatch("getPost", this.$route.params.id);
  },
  computed: {
    post() {
      return this.$store.getters.post;
    },
    date() {
      return moment(this.post.publishedAt).format("MM-DD-YY hh:mm");
    },
    path() {
      return process.env.originPath;
    }
  },
  components: {
    CommentForm,
    CommentsList,
    PostAuthor
  }
};
</script>

<style>
h1 {
  text-transform: capitalize;
  font-weight: bold;
}

.description::first-letter,
.body::first-letter {
  text-transform: uppercase;
}
</style>

