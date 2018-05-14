<template>
  <div class="blog__container">
    <ul class="entries__list">
      <li class="entry__title" v-for="(entry, index) in entries" :key=index>
        <p class="entry__date">{{entry.date}}</p>
        <router-link class="entry__link" :to="'/blog/posts/' + entry._id">{{entry.title}}</router-link>
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
  width: 70%;
  max-width: 70%;
  list-style: none;
}

.entry__title {
  padding: 2.5rem;
  font-size: 2rem;
  text-align: left;
}

.entry__date {
  font-size: 1.5rem;
}

.entry__link {
  text-decoration: none;
  color: $primary-color;
  font-size: 3rem;
}
</style>


