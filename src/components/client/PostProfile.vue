<template>
    <div class="post__container">
        {{entry.title}}
        <br> {{entry.date}}
        <br> {{entry.entry}}
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


