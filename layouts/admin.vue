<template>
  <div class="row">
    <admin-sidebar class="col-md-2"></admin-sidebar>
    <div class="col-md-10 mt-5">
      <nuxt class="container"/>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/layout/AdminSidebar";
export default {
  middleware: "authenticated",
  components: {
    AdminSidebar
  }
};
</script>
