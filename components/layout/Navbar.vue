<template>
  <b-navbar toggleable="md a">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        <nuxt-link to="/about" class="nav-link">About Me</nuxt-link>
        <nuxt-link to="/portfolio" class="nav-link">Portfolio</nuxt-link>
        <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
        <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.a {
  border-bottom: 1px solid rgb(248, 245, 245);
}
</style>
