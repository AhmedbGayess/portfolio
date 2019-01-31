<template>
  <div>
    <message-preview v-show="message" v-for="(message, i) in messages" :key="i" :message="message" />
  </div>
</template>

<script>
import MessagePreview from "./MessagePreview";
export default {
  name: "MessagesList",
  created() {
    this.$store.dispatch("getMessages");
  },
  computed: {
    messages() {
      return this.$store.getters.messages;
    }
  },
  components: {
    MessagePreview
  }
};
</script>
