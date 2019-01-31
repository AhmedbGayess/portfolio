import Cookie from "js-cookie";

export default {
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    CLEAR_TOKEN(state) {
      state.token = null;
    }
  },
  actions: {
    login({ commit }, userData) {
      return this.$axios.$post("/user", userData).then(data => {
        commit("SET_TOKEN", data.token);
        Cookie.set("token", data.token);
        this.$axios.defaults.headers.common["Authorization"] = data.token;
      });
    },
    logout({ commit }) {
      commit("CLEAR_TOKEN");
      Cookie.remove("token");
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null;
    }
  }
};
