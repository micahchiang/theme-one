import Vue from 'vue';
import Vuex from 'vuex';
import DummyService from './dummy.service';
import BackendService from './backend.service';

Vue.use(Vuex);

const dummyService = new DummyService();
const backend = new BackendService();

const state = {
  blog: [],
  dummydata: []
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
        console.log('entries retrieved', res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

const mutations = {
  setData(state, data) {
    state['dummydata'] = data;
  },
  setEntries(state, data) {
    state['blog'] = data;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
