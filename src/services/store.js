import Vue from 'vue';
import Vuex from 'vuex';
import DummyService from './dummy.service';
import BackendService from './backend.service';

Vue.use(Vuex);

const dummyService = new DummyService();
const backend = new BackendService();

const state = {
  blog: [],
  dummydata: [],
  status: '',
  token: localStorage.getItem('user-token') || ''
};

const getters = {
  entries: () => {
    return state.blog;
  },
  dummydata: () => {
    return state.dummydata;
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
  getData({ commit }) {
    dummyService
      .getData()
      .then(res => {
        commit('setData', res);
      })
      .catch(err => {
        console.log(err);
      });
  },
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
  }
};

const mutations = {
  setData(state, data) {
    state.dummydata = data;
  },
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
