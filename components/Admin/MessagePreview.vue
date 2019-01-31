<template>
  <nuxt-link :to="`/admin/messages/${message._id}`">
    <div class="card m-3 p-3">
      <p>Sent by: {{message.firstName}} {{message.lastName}}</p>
      <p>Subject: {{message.subject}}</p>
      <p>Sent at: {{date}}</p>
    </div>
  </nuxt-link>
</template>

<script>
import moment from "moment"
export default {
  name: "MessagePreview",
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      return moment(this.message.sentAt).format("MM-DD-YYYY hh:mm")
    }
  }
};
</script>


