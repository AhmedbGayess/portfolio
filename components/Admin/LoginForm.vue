<template>
  <form @submit.prevent="submit" class="p-3">
    <form-input-field
      v-model="email"
      :v="$v.email"
      inputType="email"
      label="Email Address"
      name="email"
      placeholder="Enter your email"
      error="Please enter a valid email address"
    />
    <form-input-field
      v-model="password"
      :v="$v.password"
      inputType="password"
      label="Password"
      name="password"
      placeholder="Enter your password"
      error="Please enter a password"
    />
    <button class="btn btn-outline-info" :disabled="$v.$invalid">Login</button>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import FormInputField from "@/components/Common/FormInputField";
export default {
  name: "LoginForm",
  components: {
    FormInputField
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => this.$router.push("/admin"));
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  }
};
</script>
