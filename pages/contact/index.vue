<template>
  <div>
    <h2>Contact Me</h2>
    <transition name="fade" mode="out-in">
      <contact-form v-if="!msgSent" class="mb-5" @sent="msgSent = true" key="form"/>
      <div
        v-else
        class="alert alert-success text-center success mt-5"
        key="success"
      >Thank you for sending me a message, I'll get back to you shortly.</div>
    </transition>
    <h2 class="mb-5">I'm Also On</h2>
    <social/>
  </div>
</template>

<script>
import ContactForm from "@/components/Contact/ContactForm";
import Social from "@/components/Contact/Social";
export default {
  components: {
    ContactForm,
    Social
  },
  data() {
    return {
      msgSent: false
    };
  }
};
</script>

<style scoped>
h2 {
  overflow: hidden;
  text-align: center;
}
h2:before,
h2:after {
  background-color: #333;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}
h2:before {
  right: 0.5em;
  margin-left: -50%;
}
h2:after {
  left: 0.5em;
  margin-right: -50%;
}

.success {
  margin-bottom: 45vh;
}
</style>

