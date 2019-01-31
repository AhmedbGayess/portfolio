<template>
  <div class="container">
    <h1>Add A Project</h1>
    <project-form />
  </div>
</template>


<script>
import ProjectForm from "@/components/Admin/ProjectForm";
export default {
  layout: "admin",
  components: {
  ProjectForm
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
