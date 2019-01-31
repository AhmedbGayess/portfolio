<template>
  <div >
    <h1 class="mb-5">A bit about me</h1>
    <p class="about-me mb-5">
      After spending two years in law school, I didn't want to spend my life doing something I dont like,
      and that's why I decided to dropout. I later found something I fell in love with, coding. I taught myself coding
      and I'm so passionate about it that it took me less than a year to become a Full-Stack developer, so it's safe to say that
      I'm a fast learner. Being self-taught, I learned to be disciplined and determined. It also proves that I'm always ready to
      upgrade my skills and learn something new. Teamwork is also one of my strengths. Collaborating on projects is always exciting to me.
      I speak 3 languages: Arabic, French and English, which is helpful to communicate with various and diverse clients.
    </p>
    <testimonials-list></testimonials-list>
  </div>
</template>

<script>
import TestimonialsList from "@/components/About/TestimonialsList";
export default {
  components: {
    TestimonialsList
  }
}
</script>

<style scoped>
.about-me {
  font-size: 19px;
  text-align: justify;
}

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
