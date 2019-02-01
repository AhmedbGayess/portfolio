export default {
  state: {
    posts: [],
    post: {}
  },
  mutations: {
    GET_POSTS(state, posts) {
      state.posts = posts;
    },
    GET_POST(state, post) {
      state.post = post;
    },
    ADD_POST(state, post) {
      state.posts.unshift(post);
    },
    EDIT_POST(state, editedPost) {
      const postToEdit = state.posts.find(post => post._id === editedPost.id);
      postToEdit = editedPost;
    },
    DELETE_POST(state, id) {
      state.posts = state.posts.filter(post => post._id !== id);
    }
  },
  actions: {
    getPost({ commit }, id) {
      return this.$axios.$get(`/posts/${id}`).then(post => {
        commit("GET_POST", post);
      });
    },
    addPost({ commit }, postData) {
      return this.$axios.$post("/posts", postData).then(post => {
        commit("ADD_POST", post);
      });
    },
    editPost({ commit }, { id, updates }) {
      return this.$axios.$put(`/posts/${id}`, updates).then(post => {
        commit("EDIT_POST", id);
      });
    },
    deletePost({ commit }, id) {
      return this.$axios.$delete(`/posts/${id}`).then(() => {
        commit("DELETE_POST", id);
      });
    },
    addComment({ commit }, { id, comment }) {
      return this.$axios
        .$post(`/comments/${id}`, { text: comment })
        .then(post => commit("GET_POST", post));
    },
    deleteComment({ commit }, { postId, commentId }) {
      return this.$axios
        .$delete(`/comments/${postId}/${commentId}`)
        .then(post => commit("GET_POST", post));
    }
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    post(state) {
      return state.post;
    }
  }
};
