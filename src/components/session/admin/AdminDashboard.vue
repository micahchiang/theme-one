<template>
    <div class="dashboard__container">
        <aside>
            <ul>
                <li>Dummy List</li>
            </ul>
        </aside>
        <main>
            <section class="form__container">
                <form @submit.prevent="submitForm">
                    <input v-model="title" type="text" placeholder="Title">
                    <textarea v-model="postBody" rows=20></textarea>
                    <button type='submit' class="submit__btn">Submit</button>
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
.dashboard__container {
  display: flex;
  width: 100%;
  height: 100%;

  aside {
    flex: 0 0 30%;
    border-right: 3px solid gray;
    padding: 2rem;
  }

  main {
    flex: 0 0 70%;

    .form__container {
      padding: 2rem;

      form {
        display: flex;
        flex-direction: column;
        & input,
        textarea,
        button {
          margin-bottom: 1rem;
        }

        & input {
          line-height: 4rem;
          font-size: 2.5rem;
          padding: 1rem;
          outline: none;
        }

        & textarea {
          font-size: 1.7rem;
          padding: 1rem;
        }
      }
    }
  }
}
</style>


