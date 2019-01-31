<template>
  <div>
      <p class="text-center">You have to at least upload one image and at most 5 images.</p>
    <div class="text-center">
      <label for="input" class="btn btn-outline-primary">Upload an image</label>
      <input id="input" type="file" @change="onFileChanged" :disabled="images.length >= 5">
    </div>
    <div class="text-center">
      <button class="btn btn-outline-success m-auto" :disabled="images.length === 0" @click="$emit('next')">Next</button>
    </div>
    <div class="row m-5">
      <div v-for="(image, i) in images" :key="i" class="col-4 m-auto p-2 text-center">
        <img :src="path + '/' + image" class="img-fluid mb-2">
        <button class="btn btn-outline-danger btn-sm" @click="$emit('removeImage', image)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onFileChanged(e) {
      const image = e.target.files[0];
      const formData = new FormData();
      formData.append("images", image);
      this.$axios
        .$post("/uploads", formData)
        .then(({ file }) => {
          this.$emit("imageUpload", file);
          e.target.value = "";
          e.target.files = null;
        })
        .catch(error => console.log(error));
    }
  },
  props: {
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
#input {
  display: none;
}
</style>
