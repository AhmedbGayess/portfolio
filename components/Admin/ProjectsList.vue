<template>
  <div>
    <div v-if="projects">
      <project v-for="(project, i) in projects" :key="i" :project="project"/>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import Project from "./Project";
export default {
  name: "PostsList",
  components: {
    Project
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    }
  }
};
</script>


