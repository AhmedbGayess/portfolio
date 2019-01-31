<template>
  <div class="pt-5">
    <router-link to="/admin" class="nav-link text-success">Dashboard</router-link>
    <router-link to="/admin/posts" class="nav-link text-success">Posts</router-link>
    <router-link to="/admin/add_post" class="nav-link text-success">Add a post</router-link>
    <router-link to="/admin/portfolio" class="nav-link text-success">Portfolio</router-link>
    <router-link to="/admin/add_project" class="nav-link text-success">Add a project</router-link>
    <router-link to="/admin/messages" class="nav-link text-success">My Messages</router-link>
    <span @click="logout" class="nav-link text-success">Logout</span>
  </div>
</template>

<script>
export default {
  name: "AdminSidebar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/admin/login");
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}

span {
  cursor: pointer;
}
</style>


