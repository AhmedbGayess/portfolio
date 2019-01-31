<template>
  <div class="m-5 project">
    <div class="text-center mb-3">
      <h3>{{project.name}}</h3>
      <p>{{project.description}}</p>
      <span v-for="(tech, i) in project.technologies" :key="i" class="badge badge-secondary m-1">{{tech}}</span>
    </div>
    <div>
      <b-carousel
        class="mb-5"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        :interval="4000"
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          v-for="(image, i) in project.images"
          :key="i"
          :img-src="path + '/' + image"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div class="text-center mb-3">
      <a v-show="project.code" :href="project.code" target="_blank" class="btn btn-outline-success">Code</a>
      <a v-show="project.liveDemo" :href="project.liveDemo" target="_blank" class="btn btn-outline-success">Demo</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
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
  }
};
</script>


