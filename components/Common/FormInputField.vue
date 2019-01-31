<template>
  <div class="from group mb-3">
    <label :for="name">{{label}}</label>
    <input
      class="form-control"
      :type="inputType"
      :class="{'is-invalid': v.$error}"
      :id="name"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @blur="v.$touch"
      :name="name"
      :value="value"
    >
    <div v-show="v.$error" class="invalid-feedback">{{error}}</div>
  </div>
</template>

<script>
export default {
  name: "FormInputField",
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