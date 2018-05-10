<template>
    <div class="post__container">
        {{id}}
        <br> {{entry.body}}
    </div>
</template>

<script>
export default {
  name: 'PostProfile',
  props: ['id'],
  data: function() {
    return {
      entry: {}
    };
  },
  created() {
    let newentry = this.$store.getters.getEntryById(this.id);
    this.entry = newentry;
  }
};
</script>

<style lang="scss" scoped>

</style>


