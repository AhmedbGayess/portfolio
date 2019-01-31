<template>
  <div>
    <form @submit.prevent="submit" class="p-3">
      <form-input-field
        v-model="firstName"
        :v="$v.firstName"
        label="First Name *"
        name="firstname"
        placeholder="Your first name"
        error="Please enter your first name (At least 2 characters)"
      />
      <form-input-field
        v-model="lastName"
        :v="$v.lastName"
        label="Last Name *"
        name="lastname"
        placeholder="Your last name"
        error="Please enter your last name (At least 2 characters)"
      />
      <form-input-field
        v-model="email"
        :v="$v.email"
        inputType="email"
        label="Email Address *"
        name="email"
        placeholder="Your email address"
        error="Please enter a valid email address"
      />
      <form-input-field
        v-model="subject"
        :v="$v.subject"
        label="Subject *"
        name="subject"
        placeholder="What's the subject of your message"
        error="Please enter a subject (At least 2 characters)"
      />
      <form-text-area
        v-model="message"
        :v="$v.message"
        label="Message *"
        name="message"
        placeholder="Your message"
        error="The message cannot be empty (at least 5 characters)"
      />
      <p>
        <small>* All inputs must be filled to send your message</small>
      </p>
      <button class="btn btn-outline-success" :disabled="$v.$invalid">Send Message</button>
    </form>
  </div>
</template>

<script>
import FormInputField from "@/components/Common/FormInputField";
import FormTextArea from "@/components/Common/FormTextArea";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  components: {
    FormInputField,
    FormTextArea
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    submit() {
      const message = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        subject: this.subject,
        message: this.message
      };

      this.$store
        .dispatch("sendMessage", message)
        .then(() => this.$emit("sent"));
    }
  },
  validations: {
    firstName: {
      required,
      minimum: minLength(2)
    },
    lastName: {
      required,
      minimum: minLength(2)
    },
    email: {
      required,
      email
    },
    subject: {
      required,
      minimum: minLength(2)
    },
    message: {
      required,
      minimum: minLength(5)
    }
  }
};
</script>
