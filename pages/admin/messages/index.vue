<template>
  <div>
    <h1 class="mb-5">My Messages</h1>
    <messages-list />
  </div>
</template>
 
<script>
import MessagesList from "@/components/Admin/MessagesList";
export default {
  layout: "admin",
  components: {
    MessagesList
  }
};
</script>
 
<style scoped>
h1 {
  overflow: hidden;
  text-align: center;
}
h1:before,
h1:after {
  background-color: #333;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}
h1:before {
  right: 0.5em;
  margin-left: -50%;
}
h1:after {
  left: 0.5em;
  margin-right: -50%;
}
</style>
 