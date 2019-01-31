export default {
  state: {
    project: {}
  },
  mutations: {
    ADD_PROJECT(state, project) {
      state.projects.unshift(project);
    },
    EDIT_PROJECT(state, project) {
      const projectToEdit = state.projects.find(
        project => project._id === project.id
      );
      projectToEdit = project;
    },
    DELETE_PROJECT(state, id) {
      state.projects = state.projects.filter(project => project._id !== id);
    },
    GET_PROJECTS(state, projects) {
      state.projects = projects;
    },
    GET_PROJECT(state, project) {
      state.project = project;
    }
  },
  actions: {
    addProject({ commit }, project) {
      return this.$axios
        .$post("/projects", project)
        .then(project => commit("ADD_PROJECT", project));
    },
    deleteProject({ commit }, id) {
      return this.$axios
        .$delete(`/projects/${id}`)
        .then(() => commit("DELETE_PROJECT", id));
    },
    editProject({ commit }, { id, updates }) {
      return this.$axios
        .$put(`/projects/${id}`, updates)
        .then(project => commit("EDIT_PROJECT", project));
    },
    getProject({ commit }, id) {
      return this.$axios
        .$get(`/projects/${id}`)
        .then(project => commit("GET_PROJECT", project));
    }
  },
  getters: {
    projects(state) {
      return state.projects;
    },
    project(state) {
      return state.project;
    }
  }
};
