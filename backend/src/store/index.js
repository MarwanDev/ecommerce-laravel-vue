import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      token: null,
      data: {}
    }
  },
  getters: {},
})

export default store
