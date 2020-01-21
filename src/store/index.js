import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state,step) {
      state.count += step
    },
    sub(state,step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context,step) {
      setTimeout(()=>{
        context.commit('add',step)
      },1000)
    },
    subAsync(context,step) {
      setTimeout(()=>{
        context.commit('sub',step)
      },1000)
    }
  },
  getters:{
    //添加了一个showNum的属性
    showNum : state =>{
      return '最新的count值为：'+state.count;
    }
  },
  modules: {
  }
})
