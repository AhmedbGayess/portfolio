<template>
  <div class="from group mb-3">
    <label :for="name">{{label}}</label>
    <textarea
      :name="name"
      class="form-control"
      rows="10"
      :class="{'is-invalid': v.$error}"
      :id="name"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :value="value"
      @blur="v.$touch"
    ></textarea>
    <div v-show="v.$error" class="invalid-feedback">{{error}}</div>
  </div>
</template>

<script>
export default {
  name: "FormTextArea",
  props: {
    name: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      required: false
    },
    v: {
      type: Object,
      required: true
    },
    error: {
      type: String
    }
  }
};
</script>