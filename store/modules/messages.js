export default {
  state: {
    messages: [],
    message: {}
  },
  mutations: {
    DELETE_MESSAGE(state, id) {
      state.messages = state.messages.filter(message => message._id !== id);
    },
    GET_MESSAGES(state, messages) {
      state.messages = messages;
    },
    GET_MESSAGE(state, message) {
      state.message = message;
    }
  },
  actions: {
    sendMessage({ commit }, message) {
      return this.$axios.$post("/messages", message);
    },
    deleteMessage({ commit }, id) {
      return this.$axios
        .$delete(`/messages/${id}`)
        .then(() => commit("DELETE_MESSAGE", id));
    },
    getMessages({ commit }) {
      return this.$axios
        .$get("/messages")
        .then(messages => commit("GET_MESSAGES", messages));
    },
    getMessage({ commit }, id) {
      return this.$axios
        .$get(`/messages/${id}`)
        .then(message => commit("GET_MESSAGE", message));
    }
  },
  getters: {
    messages(state) {
      return state.messages;
    },
    message(state) {
      return state.message;
    }
  }
};
