const mutations = {
  SHOW_MESSAGE: (state, payload) => {
    state.content = payload.content;
    state.color = payload.color;
  },
};

export default mutations;
