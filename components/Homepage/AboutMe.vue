<template>
  <div class="mb-5">
    <div class="row">
      <div class="col-md-8 p-5">
        <transition name="appear" appear>
          <div class="content">
            <h1 class="mb-3">Hi. My name is Ahmed Ben Gayess.</h1>
            <h3 class="mb-3">I'm a Full-Stack Web Developer.</h3>
            <h5>I can build websites (static or interactive) and Full-Stack web applications from start to finish for your specific needs.</h5>
          </div>
        </transition>
      </div>
      <div class="col-md-4 p-3">
        <img src="@/assets/images/my-photo.jpg" class="img-fluid" alt="A picture of me">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style scoped>
img {
  border-radius: 50%;
}

.content {
  font-family: 'Quicksand', sans-serif; 
}

.appear-enter-active {
  transition: opacity 2s;
  animation: slide-in 1.5s ease-in forwards;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>


