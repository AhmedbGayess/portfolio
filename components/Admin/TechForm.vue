<template>
  <div class="mb-3">
    <div class="mb-3">
      <span class="mr-2">Technologies *</span>
      &nbsp;
      &nbsp;
      <span
        v-for="(tech, i) in technologies"
        :key="i"
        class="badge mr-2 badge-pill badge-secondary"
        @click="$emit('deleteTech', i)"
      >{{tech}}</span>
      
    </div>
    
    <div class="tech-form">
      <FormInputField
        v-model="tech"
        :v="$v.tech"
        label=" "
        name="tech"
        placeholder="Add a technology"
        error="Please add a technology name"
      />
      <button type="button" @click="addTech" :disabled="$v.$invalid" class="btn btn-outline-info btn-pill">Add</button>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import FormInputField from "@/components/Common/FormInputField";
export default {
  name: "AddTech",
  components: {
    FormInputField
  },
  data() {
    return {
      tech: "",
      addTechOpen: false
    };
  },
  props: {
    technologies: {
      type: Array,
      required: true
    }
  },
  methods: {
    addTech() {
      this.$emit("tech", this.tech);
      this.tech = "";
      this.$v.$reset();
    }
  },
  validations: {
    tech: {
      required,
      minimum: minLength(1)
    }
  }
};
</script>

<style scoped>
</style>