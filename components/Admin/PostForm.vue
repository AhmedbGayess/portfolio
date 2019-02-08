<template>
  <div>
    <div v-if="step === 1">
      <h3 class="text-center m-5">1. Post Data</h3>
      <form-input-field
        v-model="title"
        :v="$v.title"
        label="Title *"
        name="title"
        placeholder="The title of your post"
        error="Please enter a title for your post"
      />
      <form-input-field
        v-model="description"
        :v="$v.description"
        label="Description *"
        name="description"
        placeholder="The description of your post"
        error="Please enter a description for your post"
      />
      <form-text-area
        v-model="body"
        :v="$v.body"
        label="Body *"
        name="body"
        placeholder="The body of your post"
        error="Please enter a body for your post"
      />
      <p>
        <small>* All inputs must be filled to submit your post</small>
      </p>
      <button class="btn btn-outline-success" :disabled="$v.$invalid" @click="step = 2">Next</button>
    </div>
    <div v-if="step === 2">
      <h3 class="text-center m-5">2. Post Images</h3>
      <image-upload-input
        @imageUpload="addImage"
        @removeImage="removeImage"
        :images="images"
        @next="step = 3"
      />
    </div>
    <div v-if="step === 3">
      <post-preview
        :title="title"
        :body="body"
        :description="description"
        :images="images"
        @submitPost="submit"
      />
    </div>
  </div>
</template>

<script>
import FormInputField from "@/components/Common/FormInputField";
import FormTextArea from "@/components/Common/FormTextArea";
import ImageUploadInput from "@/components/Common/ImageUploadInput";
import PostPreview from "./PostPreview";
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  components: {
    FormInputField,
    FormTextArea,
    ImageUploadInput,
    PostPreview
  },
  data() {
    return {
      title: this.post ? this.post.title : "",
      body: this.post ? this.post.body : "",
      description: this.post ? this.post.description : "",
      images: this.post ? this.post.images : [],
      step: 1
    };
  },
  methods: {
    ...mapActions(["addPost", "editPost", "deleteImage"]),
    submit() {
      const postData = {
        title: this.title,
        body: this.body,
        description: this.description,
        images: this.images
      };
      if (this.$route.path.includes("edit_posts")) {
        this.$store
          .dispatch("editPost", {id: this.$route.params.id, updates: postData})
          .then(() => this.$router.push("/admin/posts"));
      } else {
        this.$store
          .dispatch("addPost", postData)
          .then(() => this.$router.push("/admin/posts"));
      }
    },
    addImage(image) {
      this.images.push(image);
    },
    removeImage(imageToDelete) {
      const imageIndex = this.images.findIndex(
        image => image === imageToDelete
      );
      this.deleteImage(imageToDelete).then(() =>
        this.images.splice(imageIndex, 1)
      );
    }
  },
  validations: {
    title: {
      required,
      minimum: minLength(2)
    },
    body: {
      required,
      minimum: minLength(10)
    },
    description: {
      required,
      minimum: minLength(2)
    }
  },
  props: {
    post: {
      type: Object
    }
  }
};
</script>
