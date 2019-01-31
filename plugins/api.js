export default ({ store, $axios }) => {
  $axios.setToken(store.state.auth.token);
};
