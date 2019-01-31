<template>
    <div class="project-card container p-5 mb-5">
      <div class="row">
        <div class="col-md-2">
          <img class="img-fluid rounded mb-3" :src="path + '/' + project.images[0]">
        </div>
        <div class="col-md-8">
          <h2 class="mb-3">{{project.name}}</h2>
          <p>{{project.description}}</p>
        </div>
        <div class="col-md-2 text-center mt-4">
          <button @click="deleteProject" class="btn btn-outline-danger ">Delete</button>
          <nuxt-link :to="`/admin/edit_project/${project._id}`" class="btn btn-outline-warning">Edit</nuxt-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "project",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    path() {
      return process.env.originPath;
    }
  },
  methods: {
    deleteProject() {
      this.$store.dispatch("deleteProject", this.project._id);
    }
  }
};
</script>

<style scoped>
.project-card {
  border: 1px solid lightgray;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
</style>

