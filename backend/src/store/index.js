import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      token: "1234",
      data: {}
    }
  },
  getters: {},
})

export default store
