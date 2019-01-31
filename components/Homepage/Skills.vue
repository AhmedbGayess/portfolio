<template>
  <div class="mb-5">
    <transition name="appear" appear>
      <div>
        <h1 class="mb-5">My Skills</h1>
        <skill
          v-for="(skill, i) in skills"
          :key="i"
          :title="skill.title"
          :description="skill.description"
          :technologies="skill.technologies"
        ></skill>
        <div class="text-center contact pt-4">
          <h2 class="mb-4">Interested in working with me?</h2>
          <nuxt-link to="/contact" class="btn btn-outline-success">Let's talk</nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Skill from "./Skill";
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          title: "Frontend Web Development",
          description:
            "I can build web pages and user interfaces for web apps. I can also connect to backend APIs and work with data. My current skills in frontend web development include:",
          technologies: [
            "HTML",
            "CSS",
            "Bootstrap",
            "Vanilla JavaScript",
            "React",
            "Redux",
            "Vue.js",
            "Vuex",
            "Nuxt"
          ]
        },
        {
          title: "Backend Web Development",
          description:
            "I can buid backend APIs and work with databases. My skillset in backend development currently include:",
          technologies: ["Node.js", "Express", "MongoDB", "Firebase"]
        },
        {
          title: "Tools",
          description: "These are some tools that I use in my work:",
          technologies: ["Basic Command Line", "Git", "NPM", "Yarn", "Webpack"]
        }
      ]
    };
  },
  components: {
    Skill
  }
};
</script>

<style scoped>
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

.contact {
  border-top: 1px solid lightgray;
}

.appear-enter-active {
  transition: opacity 2s;
  animation: slide-in 1.5s ease-in forwards;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>

