<template>
  <form @submit.prevent="submitComment" class="p-4">
    <form-text-area
      v-model="comment"
      :v="$v.comment"
      label="Add a comment"
      name="comment"
      placeholder="Say something about this post..."
      error="Please enter a comment for your post (at least 5 characters)"
    />
    <button class="btn btn-outline-success" :disabled="$v.$invalid">Add Comment</button>
  </form>
</template>

<script>
import FormTextArea from "@/components/Common/FormTextArea";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  components: {
    FormTextArea
  },
  data() {
    return {
      comment: ""
    };
  },
  validations: {
    comment: {
      required,
      minimum: minLength(5)
    }
  },
  methods: {
    submitComment() {
      this.$store.dispatch("addComment", {
        id: this.id,
        comment: this.comment
      });

      this.comment = "";
      this.$v.$reset();
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
</style>

