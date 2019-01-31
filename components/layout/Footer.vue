<template>
  <footer class="bg-dark p-3">
    <div class="mx-auto text-center mb-4">
      <nuxt-link to="/about" class="mx-3 d-inline-block text-light">About Me</nuxt-link>
      <nuxt-link to="/contact" class="mx-3 d-inline-block text-light">Contact Me</nuxt-link>
    </div>
    <div class="mx-auto text-center mb-4">
      <a href="https://www.linkedin.com/in/ahmed-bengayess-b69b55172/" target="_blank" class="mx-3 d-inline-block text-white">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="https://github.com/AhmedbGayess" target="_blank" class="mx-3 d-inline-block text-white">
        <i class="fa fa-github"></i>
      </a>
      <a href="https://twitter.com/ahmedbgayess" target="_blank" class="mx-3 d-inline-block text-white">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/ahmedwebdev/" target="_blank" class="mx-3 d-inline-block text-white">
        <i class="fa fa-instagram"></i>
      </a>
    </div>
    <p
      class="text-muted text-center small p-0"
    >© Copyright 2019 — Ahmed Ben Gayess</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

