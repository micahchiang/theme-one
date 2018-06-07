<template>
  <div class="post__container">
    <h1>{{entry.title}}</h1>
    <h2 class="post__date">{{entry.date}}</h2>
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
.post__container {
  padding: 2rem;
  h1,
  h2 {
    font-weight: 200;
    letter-spacing: 0.3rem;
    margin: 0.5rem 0;
  }

  @media only screen and (max-width: 400px) {
    word-wrap: break-word;
    h1 {
      font-size: 1.5rem;
    }
  }
}

.post__date {
  padding: 5px 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.entry__content-container {
  text-align: left;
  padding: 3rem;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;

  @media only screen and (max-width: 500px) {
    padding: 1rem;
    font-size: 1.25rem;
  }
}
</style>


