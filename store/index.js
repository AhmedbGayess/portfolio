import Vuex from "vuex";
import cookieparser from "cookieparser";

import posts from "./modules/posts";
import messages from "./modules/messages";
import projects from "./modules/projects";
import auth from "./modules/auth";

const createStore = () => {
  return new Vuex.Store({
    state: {
    },
    mutations: {},
    actions: {
      nuxtServerInit({ commit }, context) {
        if (context.req.headers.cookie) {
          const parsed = cookieparser.parse(context.req.headers.cookie);
          commit("SET_TOKEN", parsed.token);
          this.$axios.setToken(parsed.token);
        }

        context.app.$axios
          .$get("/posts")
          .then(posts => {
            commit("GET_POSTS", posts);
          })
          .catch(err => context.error(err));

        context.app.$axios
          .$get("/projects")
          .then(projects => commit("GET_PROJECTS", projects));
      },
      deleteImage(context, image) {
        return this.$axios.$delete(`/uploads/${image}`);
      }
    },
    getters: {},
    modules: {
      posts,
      messages,
      projects,
      auth
    }
  });
};

export default createStore;
