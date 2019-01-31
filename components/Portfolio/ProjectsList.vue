<template>
  <div v-show="projects">
    <project v-for="(project, i) in projects" :key="i" :project="project" class="project"/>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
  name: "ProjectsList",
  computed: {
    projects() {
      return this.$store.getters.projects;
    }
  },
  components: {
    Project
  }
};
</script>

<style scoped>
.project:not(:last-child) {
  border-bottom: 1px solid lightgray;
}
</style>
