<template>
  <div class="container">
    <nuxt class="mt-5"/>
  </div>
</template>

<script>
export default {
  middleware: ["notAuthenticated"]
}
</script>

