<template>
  <div>
    <h1 class="text-center mb-5">Message</h1>
    <h4 class="mb-4">Sent By: {{message.firstName}} {{message.lastName}}</h4>
    <h4 class="mb-5">Subject: {{message.subject}}</h4>
    <p class="mb-4">{{message.message}}</p>
    <p><small class="text-secondary">{{date}}</small></p>
    <a :href="`mailto:${message.email}?subject=www.ahmedbengayess.com answering to your message: '${message.subject}'`" class="text-success">Send back message</a>
    <p class="text-center mt-5"><button class="btn btn-outline-danger" @click="deleteMessage">Delete message</button></p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Message",
  layout: "admin",
  created() {
    this.$store.dispatch("getMessage", this.$route.params.id);
  },
  computed: {
    message() {
      return this.$store.getters.message;
    },
    date() {
      return moment(this.message.sentAt).format("MM-DD-YYYY hh:mm");
    }
  },
  methods: {
    deleteMessage() {
      this.$store.dispatch("deleteMessage", this.$route.params.id).then(() => this.$router.push("/admin/messages"));
    }
  }
};
</script>

