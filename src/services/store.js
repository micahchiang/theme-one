import Vue from 'vue';
import Vuex from 'vuex';
import BackendService from './backend.service';

Vue.use(Vuex);

const backend = new BackendService();

const state = {
  blog: [],
  status: '',
  token: localStorage.getItem('user-token') || ''
};

const getters = {
  entries: () => {
    return state.blog;
  },
  getEntryById: state => id => {
    return state.blog.find(entry => {
      let data = entry._id === id;
      return data;
    });
  },
  isAuthenticated: () => {
    return state.token === '' ? false : true;
  },
  authStatus: () => {
    return state.status;
  }
};

const actions = {
  getEntries({ commit }) {
    backend
      .getEntries()
      .then(res => {
        commit('setEntries', res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  AUTH_REQUEST({ commit, dispacth }, user) {
    commit('auth_request');
    return new Promise((resolve, reject) => {
      backend
        .login(user)
        .then(res => {
          const token = res.token;
          localStorage.setItem('user-token', token);
          commit('auth_success', token);
          // dispatch('user_request');
          resolve(res);
        })
        .catch(err => {
          commit('auth_error', err);
          localStorage.removeItem('user-token');
          reject(err);
        });
    });
  },
  submitEntry({ commit, dispatch }, entry) {
    return new Promise((resolve, reject) => {
      backend
        .submitEntry(entry)
        .then(res => {
          dispatch('getEntries');
          resolve(res);
        })
        .catch(err => {
          console.log('err occurred', err);
          reject(err);
        });
    });
  }
};

const mutations = {
  setEntries(state, data) {
    state.blog = data;
  },
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, token) {
    state.status = 'success';
    state.token = token;
  },
  auth_error(state, err) {
    state.status = 'error';
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
