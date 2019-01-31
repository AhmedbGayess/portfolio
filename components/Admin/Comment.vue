<template>
  <div class="card p-5">
    <div class="row">
      <div class="col-md-10 mb-4">
        <p>{{comment.text}}</p>
        <small>Published at {{date}}</small>
      </div>
      <div class="col-md-2 text-center">
        <button @click="deleteComment" class="btn btn-outline-danger">Delete</button>
      </div>
    </div>
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
    };
  },
  mounted() {
    this.date =  moment(this.comment.publishedAt).format("MM-DD-YYYY hh:mm");
  },
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", {
        postId: this.$route.params.id,
        commentId: this.comment._id
      });
    }
  }
};
</script>
