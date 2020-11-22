import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobiles: []
  },
  mutations: {
    PUSH_MOBILES(state, payload) {
      state.mobiles = [ ...state.mobiles, ...payload];
    }
  },
  actions: {
    pushMobiles({commit}, payload) {
      commit('PUSH_MOBILES', payload);
    }
  },
  getters: {
    getMobileByUrl: state => imgurl => {
      return state.mobiles.find( mobile => mobile.img_url === imgurl );
    }
  }
});
