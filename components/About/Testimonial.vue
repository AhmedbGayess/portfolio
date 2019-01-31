<template>
  <div class="row skill mb-5">
    <div class="col-md-5">
      <h3>{{testimonial.author}}</h3>
      <h5>{{testimonial.description}}</h5>
      <div>
        <a :href="testimonial.linkedin" v-show="testimonial.linkedin"><i class="fa fa-linkedin mr-2 text-secondary"></i></a>
        <a :href="testimonial.twitter" v-show="testimonial.twitter"><i class="fa fa-twitter mr-2 text-secondary"></i></a>
        <a :href="testimonial.instagram" v-show="testimonial.instagram"><i class="fa fa-instagram mr-2 text-secondary"></i></a>
        <a :href="testimonial.website" v-show="testimonial.website"><i class="fa fa-globe text-secondary"></i></a>
      </div>
    </div>
    <div class="col-md-7">
      <p>{{testimonial.testimonial}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
};
</script>
