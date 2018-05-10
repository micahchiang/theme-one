<template>
  <div class="blog__container">
    <ul class="entries__list">
      <li class="entry__title" v-for="(entry, index) in entries" :key=index>
        <router-link :to="'/blog/posts/' + entry._id">{{entry.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import mapGetters from 'vuex';

export default {
  name: 'BlogList',
  computed: {
    entries() {
      return this.$store.getters.entries;
    },
    dummydata() {
      return this.$store.getters.dummydata;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.blog__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.entries__list {
  max-width: 70%;
  list-style: none;
}

.entry__title {
  padding: 2.5rem;
  font-size: 2rem;
  &:not(:last-child) {
    border-bottom: 2px solid #cccccc;
  }
}
</style>


