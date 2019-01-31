<template>
  <div class="comment m-5">
    <p>{{comment.text}}</p>
      <small>Published at {{date}}</small>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      date: ""
    }
  },
  mounted() {
    this.date =  moment(comment.publishedAt).format("MM-DD-YYYY hh:mm");
  }
};
</script>

<style scoped>
.comment {
  border-bottom: 1px solid lightgray;
}

p::first-letter {
  text-transform: uppercase;
}
</style>




