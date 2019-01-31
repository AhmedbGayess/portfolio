<template>
  <div>
    <div v-if="step === 1">
      <h3 class="text-center m-5">1. Project Data</h3>
      <form-input-field
        v-model="name"
        :v="$v.name"
        label="Name *"
        name="name"
        placeholder="The name of your project"
        error="Please enter the name of your project"
      />
      <form-text-area
        v-model="description"
        :v="$v.description"
        label="Description *"
        name="description"
        placeholder="The description of your project"
        error="Please enter a description for your project"
        :value="description"
      />
      <tech-form
        :v="$v.technologies"
        :technologies="technologies"
        @tech="addTech"
        @deleteTech="deleteTech"
      />
      <form-input-field
        v-model="liveDemo"
        :v="$v.liveDemo"
        label="Live Demo"
        name="demo"
        placeholder="Link for a live demo"
        error="Please enter a title for your project"
      />
      <form-input-field
        v-model="code"
        :v="$v.code"
        label="Code"
        name="code"
        placeholder="Link for repository"
        error="Please enter a link for a repository"
      />
      <button
        class="btn btn-outline-success"
        @click="step = 2"
        :disabled="$v.$invalid || technologies.length === 0"
      >Next</button>
      <p>
        <small>*Must be filled to submit your post</small>
      </p>
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
    <div v-show="step === 3">
      <project-preview
        :name="name"
        :description="description"
        :technologies="technologies"
        :images="images"
        :code="code"
        :demo="liveDemo"
        @submitProject="submit"
      />
    </div>
  </div>
</template>

<script>
import FormInputField from "@/components/Common/FormInputField";
import FormTextArea from "@/components/Common/FormTextArea";
import ImageUploadInput from "@/components/Common/ImageUploadInput";
import TechForm from "./TechForm";
import ProjectPreview from "./ProjectPreview";
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  components: {
    FormInputField,
    FormTextArea,
    ImageUploadInput,
    TechForm,
    ProjectPreview
  },
  data() {
    return {
      name: this.project ? this.project.name : "",
      description: this.project ? this.project.description : "",
      technologies: this.project ? this.project.technologies : [],
      images: this.project ? this.project.images : [],
      code: this.project ? this.project.code : "",
      liveDemo: this.project ? this.project.liveDemo : "",
      step: 1
    };
  },
  methods: {
    ...mapActions(["addProject", "editProject", "deleteImage"]),
    submit() {
      const project = {
        name: this.name,
        description: this.description,
        technologies: this.technologies,
        images: this.images,
        code: this.code,
        liveDemo: this.liveDemo
      };
      if (this.$route.path.includes("edit_project")) {
        this.editProject(project).then(() =>
          this.$router.push("/admin/portfolio")
        );
      } else {
        this.addProject(project).then(() =>
          this.$router.push("/admin/portfolio")
        );
      }
    },
    addImage(image) {
      this.images.push(image);
    },
    addTech(tech) {
      this.technologies.push(tech);
    },
    deleteTech(index) {
      this.technologies.splice(index, 1);
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
    name: {
      required
    },
    description: {
      required,
      minimum: minLength(2)
    },
    liveDemo: {},
    code: {}
  },
  props: {
    project: {
      type: Object
    }
  }
};
</script>