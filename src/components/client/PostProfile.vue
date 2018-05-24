<template>
    <div class="post__container">
        {{entry.title}}
        <br> {{entry.date}}
        <section id="entryContent" ref="entryContent" class="entry__content-container">

        </section>
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
  },
  mounted() {
    this.$refs.entryContent.innerHTML = this.entry.entry;
  }
};
</script>

<style lang="scss" scoped>
.entry__content-container {
  text-align: left;
  padding: 3rem;
}
</style>


