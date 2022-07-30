export default {
  namespaced: true,
  state: {
    todo: [
      { name: '吃饭', done: false, id: 1 },
      { name: '睡觉', done: false, id: 2 },
      { name: '打豆豆', done: false, id: 3 }
    ]
  },
  mutations: {
    delItemFn (state, payload) {
      state.todo.splice(payload, 1)
    },
    addItemFn (state, payload) {
      state.todo.unshift({
        id: state.todo.length + 1,
        name: payload,
        done: false
      })
    }
  },
  actions: {
    delItemFn (context, payload) {
      context.commit('delItemFn', payload)
    },
    addItemFn (context, payload) {
      context.commit('addItemFn', payload)
    }
  },
  modules: {}
}
