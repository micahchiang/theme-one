<template>
    <div class="dashboard__container">
        {{msg}}
        <aside>

        </aside>
        <main>
            <section class="form__container">
                <form @submit.prevent="submitForm">
                    <input v-model="title" type="text" placeholder="Title">
                    <textarea v-model="postBody"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </section>
        </main>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'This is Admin Dashboard',
      title: '',
      postBody: ''
    };
  },
  methods: {
    submitForm: function() {
      let payload = {
        title: this.title,
        entry: this.postBody
      };
      this.$store.dispatch('submitEntry', payload).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>


