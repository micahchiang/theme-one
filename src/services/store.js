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
  auth_request: ''
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
          console.log('login successful', res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
};

const mutations = {
  setData(state, data) {
    state['dummydata'] = data;
  },
  setEntries(state, data) {
    state['blog'] = data;
  },
  auth_request(state) {
    state['auth_request'] = 'loading';
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
