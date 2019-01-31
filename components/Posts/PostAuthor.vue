<template>
  <div class="container p-5 mb-5 author">
    <div class="row">
      <div class="col-md-4">
        <img src="@/assets/images/my-photo.jpg" class="img-fluid mb-3" alt="A picture of me">
        <div class="mx-auto text-center mb-4">
          <a
            href="https://www.linkedin.com/in/ahmed-bengayess-b69b55172/"
            target="_blank"
            class="mx-3 d-inline-block text-secondary"
          >
            <i class="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/AhmedbGayess"
            target="_blank"
            class="mx-3 d-inline-block text-secondary"
          >
            <i class="fa fa-github"></i>
          </a>
          <a
            href="https://twitter.com/ahmedbgayess"
            target="_blank"
            class="mx-3 d-inline-block text-secondary"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/ahmedwebdev/"
            target="_blank"
            class="mx-3 d-inline-block text-secondary"
          >
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col-md-8 description">
        <p class="lead">My name is Ahmed Ben Gayess and I'm a a self-taught Full-Stack Web Developer. I'm very passionnate about what I do
          and I'm always up for a challenge. Want to build something amazing together? <nuxt-link to="/contact" class="text-success">Let's do it!</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 50%;
}

.author {
  border: 1px solid lightgray;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.description {
  display: flex;
  align-items: center;
  text-align: justify;
}
</style>
