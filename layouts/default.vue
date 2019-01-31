<template>
  <div>
    <navbar class="mb-5"></navbar>
    <nuxt class="mb-5 container"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

