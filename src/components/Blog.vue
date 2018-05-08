<template>
    <div class="blog__container">
        <ul>
            <li v-for="(entry, index) in entries" :key=index>
                <p>{{entry.title}}</p>
            </li>
        </ul>
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
  computed: {
    entries() {
      return this.$store.getters.entries;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>


