import Vue from 'vue';
import Vuex from 'vuex';
import DummyService from './dummy.service';

Vue.use(Vuex);

const dummyService = new DummyService();

const state = {
  blog: {
    entries: [
      {
        title: 'This is a title',
        id: 1,
        body:
          'this is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a body'
      },
      {
        title: 'This is a title',
        id: 2,
        body:
          'this is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a body'
      },
      {
        title: 'This is a title',
        id: 3,
        body:
          'this is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a body'
      },
      {
        title: 'This is a title',
        id: 4,
        body:
          'this is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a body'
      },
      {
        title: 'This is a title',
        id: 5,
        body:
          'this is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a body'
      },
      {
        title: 'This is a title',
        id: 6,
        body:
          'this is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a bodythis is a body'
      }
    ]
  },
  dummydata: []
};

const getters = {
  entries: () => {
    return state.blog.entries;
  },
  dummydata: () => {
    return state.dummydata;
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
  }
};

const mutations = {
  setData(state, data) {
    state['dummydata'] = data;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
