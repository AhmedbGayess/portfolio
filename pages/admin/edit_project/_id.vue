<template>
<div>
  <h1>Edit Project</h1>
  <project-form v-show="project" :project="project"/>
</div>
</template>

<script>
import ProjectForm from "@/components/Admin/ProjectForm";
export default {
  layout: "admin",
  components: {
  ProjectForm
  },
  created() {
    this.$store.dispatch("getProject", this.$route.params.id);
  },
  computed: {
    project() {
      return this.$store.getters.project
    }
  }
}
</script>

<style scoped>
h1 {
  overflow: hidden;
  text-align: center;
}
h1:before,
h1:after {
  background-color: #333;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}
h1:before {
  right: 0.5em;
  margin-left: -50%;
}
h1:after {
  left: 0.5em;
  margin-right: -50%;
}
</style>
