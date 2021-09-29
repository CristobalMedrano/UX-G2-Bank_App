export default ({ store }, inject) => {
  inject("notifier", {
    showMessage({ content = "", color = "" }) {
      store.dispatch("snackbar/showMessage", { content, color });
    },
  });
};
