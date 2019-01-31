<template>
  <div class="row skill mb-5">
    <div class="col-md-5">
      <h3>{{title}}</h3>
    </div>
    <div class="col-md-7">
      <p>{{description}}</p>
      <ul>
        <li v-for="(tech, i) in technologies" :key="i">{{tech}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    technologies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

