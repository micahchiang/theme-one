import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
  }
};

const getters = {
  entries: () => {
    return state.blog.entries;
  }
};

export default new Vuex.Store({
  state,
  getters
});
