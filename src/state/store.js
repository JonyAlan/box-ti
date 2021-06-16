import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

// Persiste valores definidos mesmo com refresh da tela
const vuexLocalStorage = new VuexPersist({
  key: 'box-ti',
  storage: window.localStorage,
  reducer: (state) => ({ 
    currentUser: state.currentUser, 
   }), 
}) 

export default new Vuex.Store({
  state: { 
    currentUser: {},  
  },
  mutations: {
 
    SET_CURRENT_USER(state, payload) {
      if(payload){
        state.currentUser = payload;
      } 
    },  

    REMOVE_CURRENT_USER (state){ 
      state.currentUser = {};  
    },
  
  },
  actions: { 
    setUser: ({ commit }, payload) => commit('SET_CURRENT_USER', payload), 
    resetUser: ({ commit }) => commit('REMOVE_CURRENT_USER'),
  },
  getters: {
    getUser: state => state.currentUser,
  },

  plugins: [vuexLocalStorage.plugin]
})
