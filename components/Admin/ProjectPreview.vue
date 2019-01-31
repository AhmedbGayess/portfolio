<template>
  <div>
    <h3 class="text-center m-5">3. Project Preview</h3>
    <h2 class="mb-3 text-center">{{name}}</h2>
    <h4 class="mb-5 text-center">{{description}}</h4>
    <div class="mb-3">
      <span class="mr-2">Technologies</span>
      &nbsp;
      &nbsp;
      <span
        v-for="(tech, i) in technologies"
        :key="i"
        class="badge mr-2 badge-pill badge-secondary"
      >{{tech}}</span>
    </div>
    <p v-show="code">Repository: {{code}}</p>
    <p v-show="demo">Live Demo: {{demo}}</p>
    <div class="row m-5">
      <div v-for="(image, i) in images" :key="i" class="col-4 m-auto p-2">
        <img :src="path + '/' + image" class="img-fluid">
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-outline-success" @click="$emit('submitProject')">Submit Project</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPreview",
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    demo: {
      type: String,
      required: true
    },
    technologies: {
      type: Array,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  computed: {
    path() {
      return process.env.originPath;
    }
  }
};
</script>

<style scoped>
p {
  text-align: justify;
}
</style>