const actions = {
  showMessage({ commit }, payload) {
    commit("SHOW_MESSAGE", payload);
  },
};

export default actions;
