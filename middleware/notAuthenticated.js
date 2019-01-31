export default ({ store, redirect }) => {
  if (store.getters.isAuthenticated) {
    return redirect("/admin");
  }
};
