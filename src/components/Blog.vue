<template>
    <div class="blog__container">
        <ul>
            <li v-for="(entry, index) in dummydata" :key=index>
                <p>{{entry.title}}</p>
            </li>
        </ul>
        <div>
        </div>
    </div>
</template>

<script>
import mapGetters from 'vuex';

export default {
  name: 'Blog',
  data: function() {
    return {
      msg: 'This is blog'
    };
  },
  created() {
    this.$store.dispatch('getData');
  },
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

</style>


