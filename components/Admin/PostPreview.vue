<template>
  <div>
    <h3 class="text-center m-5">3. Post Preview</h3>
    <h2 class="mb-3 text-center">{{title}}</h2>
    <h4 class="mb-5 text-center">{{description}}</h4>
    <p class="mb-5">{{body}}</p>
    <div class="row m-5">
      <div v-for="(image, i) in images" :key="i" class="col-4 m-auto p-2">
        <img :src="path + '/' + image" class="img-fluid">
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-outline-success" @click="$emit('submitPost')">Submit Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    body: {
      type: String,
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

