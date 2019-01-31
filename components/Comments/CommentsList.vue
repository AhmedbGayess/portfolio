<template>
  <div class="comments mt-5 pt-3">
    <h4>Comments</h4>
    <Comment v-for="(comment, i) in comments" :key="i" :comment="comment"/>
  </div>
</template>

<script>
import Comment from "./Comment";
export default {
  name: "CommentsList",
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  components: {
    Comment
  }
};
</script>

<style scoped>
.comments {
  border-top: 1px solid lightgray;
}
</style>


