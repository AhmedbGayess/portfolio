<template>
  <div>
    <Comment v-for="(comment, i) in comments" :key="i" :comment="comment"/>
  </div>
</template>

<script>
import Comment from "./Comment";
export default {
  name: "Comments",
  components: {
    Comment
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
};
</script>

